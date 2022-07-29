# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions neccessary to generate the JS of the 
# webpage. Primarily for switching between plans/terms/course groups

# Dependencies: cleaner
import cleaner

# Function that generates the JS before the generation of the course diagram
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group 
#   courseGroupList - list of course groups taken overall in the program
#   planOptionDict - dict mapping plan & term to the course group options available in that plan & term
#   controller - file handle for controller JS file
def intializeControllerJavaScript(sequenceDict, courseGroupDict, courseGroupList, planOptionDict, controller):
    generateInitialBlockController(courseGroupDict, list(list(sequenceDict.values())[0].keys())[0], controller)
    generateInitialOptionObjects(planOptionDict, controller)
    generatePlanBasedBlocksController(sequenceDict, 
                                      courseGroupDict, 
                                      courseGroupList,
                                      controller)

# Function that properly concludes and closes the controller JS
# Parameters:
#   controller - file handle for controller JS
def closeControllerJavaScript(controller):
    controller.write("});\n")
    writeRightClickDirective(controller)
    writeRadioChangeDirective(controller)
    controller.close()

# Function that generates the initial block of Javascript in controller.js
# Initializes variables and writes the main controller function
# Parameters:
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group
#   initialTerm - First term to occur in the first plan
#   controller - file handle to controller.js
def generateInitialBlockController(courseGroupDict, initialTerm, controller):
    planList = list(courseGroupDict.keys())  # used to access first occurring plan

    # writing the main controller function
    controller.write("var app = angular.module(\"main\", []);\n")
    controller.write("app.controller(\"main\", function($scope) { \n")

    # Initializing selectedPlan and selectedTerm scope vars
    controller.write("$scope.selectedPlan = \"" + cleaner.cleanString(planList[0])+ "\";\n")
    controller.write("$scope.selectedTerm = \"" + cleaner.cleanString(initialTerm) + "\";\n")

    # Writing function that updates the currently selected term. Functions are called when changing
    # radio inputs. Note: selectedPlan can be altered directly, this var needs a helper function
    controller.write("""$scope.updateTerm = function(term) {
  $scope.selectedTerm = term;
}\n""")
    controller.write("var that = this;\n")  # allows access to the above variables inside any function by using 'that'

    controller.write("""$scope.render = function(courseName) {
    that.updateObjFields($scope.selectedPlan, $scope.selectedTerm, courseName);
    that.checkOverlaps($scope.selectedPlan, $scope.selectedTerm);
};\n""")

    generateCheckOverlaps(controller)
    generateUpdateObjFields(controller)

    controller.write("""var radios = document.querySelectorAll("input[type=radio][name=planselector]");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () { \n""")
    controller.write("that.setDefaults($scope.selectedPlan);\n")
    controller.write("""   });
});\n""")

# Function that generates the blocks of the controller JS file that are dependent
# on the number and names of plans provided
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group 
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller JS file
def generatePlanBasedBlocksController(sequenceDict, courseGroupDict, courseGroupList, controller):
    generateSetDefaults(courseGroupDict, courseGroupList, list(list(sequenceDict.values())[0].keys())[0], controller)
    generateSubRadioListener(courseGroupList, controller)

# Function that appends the custom Angular directive used to handle right click
# events to the end of the controller JS file
# Parameters:
#   controller - file handle for controller JS
def writeRightClickDirective(controller):
    rightClickDirective = """app.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });"""
    controller.write(rightClickDirective)

# Function that appends the custom Angular directive used to handle radio input changing
# to the end of the controller JS file
# Parameters:
#   controller - file handle for controller JS
def writeRadioChangeDirective(controller):
    radioChangeDirective = """app.directive('ngChangeRadio', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngChangeRadio);
        element.bind('change', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });"""
    controller.write(radioChangeDirective)

# Function that writes the setDefaults function based on the plans and course groups.
# The JS generated sets the default term and course group options for each plan. 
# Reverts to these defaults when switching between plans.
# Parameters:
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group
#   courseGroupList - list of course groups taken overall in the program
#   initialTerm - First term to occur in the first plan
#   controller - file handle to controller.js
def generateSetDefaults(courseGroupDict, courseGroupList, initialTerm, controller):
    controller.write("this.setDefaults = function(plan) { \n")
    controller.write("  switch(plan) { \n")  # different term and course group options in each plan
    formattedCaseStatement = "      case \"{case}\": \n"
    formattedTerm = "            $scope.selectedTerm = \"" + cleaner.cleanString(initialTerm) + "\";\n"  # set initial term
    formattedCourseGroup = "            $scope.field{number}.group{number} ="  # set initial course groups
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    for mainPlan in courseGroupDict:
        controller.write(formattedCaseStatement.format(case=cleaner.cleanString(mainPlan)))
        controller.write(formattedTerm)
        for element in courseGroupList:
            controller.write(formattedCourseGroup.format(number=element))
            if element not in courseGroupDict[mainPlan]:
                controller.write("\"\";\n")
            else:
                controller.write("\""+str(element)+"A\";\n")
        controller.write("          $scope.$apply();\n")
        controller.write("          break;\n")
    controller.write(switchEndString)

# Function that generates the listener that listens to course group
# radio inputs
# Parameters:
#   courseGroupList - list of course groups taken in this program
#   controller - file handle to controller.js          
def generateSubRadioListener(courseGroupList, controller):
    planString = generatePlanString(courseGroupList)
    controller.write("$scope.globalSubGroupChange = function () { \n")
    controller.write("that.render(" + planString + ");\n")
    controller.write("};\n")

# Statement that gets the full name of the currently selected plan
# Parameters:
#   courseGroupList - list of all course groups taken that term
def generatePlanString(courseGroupList):
    planString = "$scope.selectedPlan"
    formattedCourseGroup = "$scope.field{number}.group{number}"
    for courseGroup in courseGroupList:
        planString += "+"+formattedCourseGroup.format(number=courseGroup)
    planString += "+$scope.selectedTerm"
    return planString

# Function that generates the object variables storing which course groups 
# can be taken in a given plan & term. The objects are simply key-value pairs
# planOptionDict - dict mapping plan & term to the course group options available in that plan & term
# controller - file handle to controller.js
def generateInitialOptionObjects(planOptionDict, controller):
    for plan in planOptionDict:
        for term in planOptionDict[plan]:
            controller.write("$scope."+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj = {")
            for count, optionGroup in enumerate(planOptionDict[plan][term]):
                controller.write(optionGroup.getOptionName() + ":\"" + optionGroup.options[0] + "\"")
                if count != len(planOptionDict[plan][term]) - 1:
                    controller.write(",")
            controller.write("};\n")

# Function that writes the JS function to check for overlapping courses on the currently displayed page.
# Compares all enabled courses in a day, if there is an overlap, the width & left fields of the
# course object are modified to prevent an overlap
# Parameters:
#   controller - file handle for controller.js
def generateCheckOverlaps(controller):
    # first main loop: for each day, compare each course to every other course
    # (for a given dayList[i] object, compare it to dayList[j] for j sweeping all course objects).
    # If there is an overlap, store the course objects in a list. For each dayList[i] that has an overlap,
    # store the overlapsList in another list (allOverlaps[day]).
    #
    # second main loop: for each overlapsList and for each course in overlapsList, if 
    # changing the course width makes the course narrower, modify the course object fields
    # of .width & .left
    functionStatement = """this.checkOverlaps = function(plan, term) {
    allOverlaps = {};
    for (const [day, dayList] of Object.entries($scope.coursesobj[plan][term])) {
        allOverlaps[day] = [];
        for (const [courseID, courseObj] of Object.entries($scope.coursesobj[plan][term][day])) {
            let overlapsList = [];
            if (courseObj.enabled) {
                for (const [checkID, checkObj] of Object.entries($scope.coursesobj[plan][term][day])) {
                    if ((courseID != checkID) && (checkObj.enabled)) {
                        if (((courseObj.end > checkObj.start) && (courseObj.start <= checkObj.start)) || ((checkObj.end > courseObj.start) && (checkObj.start <= courseObj.start))) {
                            if (!overlapsList.includes(courseObj)) {
                                overlapsList.push(courseObj);
                            }
                            if (!overlapsList.includes(checkObj)) {
                                overlapsList.push(checkObj);
                            }
                        }
                    }
                }
            }
            if (overlapsList.length > 0) {
                allOverlaps[day].push(overlapsList);
            }
        }
    }

    for (const [dayName, list] of Object.entries(allOverlaps)) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].length > 0) {
                for (const [index, overlapObj] of Object.entries(list[i])) {
                    if (321/list.length < overlapObj.width) {
                        overlapObj.width = 321/list.length;
                        overlapObj.left = (321/list.length)*i;
                        document.getElementById(overlapObj.courseID.replace("_", "-")).style.width = String(321/list.length) + "px";
                        document.getElementById(overlapObj.courseID.replace("_","-")).style.left = String((321/list.length)*index) + "px";
                    }
                }
            }
        }
    }
};\n"""

    controller.write(functionStatement)

def generateUpdateObjFields(controller):
    formattedFunctionStatement = """this.updateObjFields = function(plan, term, courseName) {
    let idName = $scope[plan + term + "obj"][courseName].replace(/ /g, "");
    for (const [day, dayList] of Object.entries($scope.coursesobj[plan][term])) {
        for (const [courseID, courseObj] of Object.entries($scope.coursesobj[plan][term][day])) {
            if (courseID.includes(idName)) {
                courseObj.enabled = true;
            }
        }
    }
};\n"""

    controller.write(formattedFunctionStatement)
                