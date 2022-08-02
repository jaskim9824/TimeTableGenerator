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

    controller.write("var that = this;\n")  # allows access to the above variables inside any function by using 'that'

    # Render function called any time something on the page changes
    # (change plan, term, section, or course group)
    controller.write("""$scope.render = function(term) {
    if (term != undefined) {
        that.updateTerm(term);
    }
    that.updateObjFields($scope.selectedPlan, $scope.selectedTerm);
    that.checkOverlaps($scope.selectedPlan, $scope.selectedTerm);
    that.setAllCourses($scope.selectedPlan, $scope.selectedTerm);
};\n""")

    # Writing function that updates the currently selected term. Functions are called when changing
    # radio inputs. Note: selectedPlan can be altered directly, this var needs a helper function
    controller.write("""this.updateTerm = function(term) {
    $scope.selectedTerm = term;
};\n""")

    generateCheckOverlaps(controller)
    generateUpdateObjFields(controller)
    generateSetAllCourses(controller)

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

# Function that writes the JS function that updates the ".enabled" field of the course
# objects on the currently displayed page
# Parameters:
#   controller - file handle for controller.js
def generateUpdateObjFields(controller):
    # For each courseObj on the currently displayed page, search through the elements in the
    # [plan + term + "obj"] object. The course group name (if there is one) should be stored
    # under the key "groupX" & should be the first entry. After this, check if the entry is
    # for a course group and if it is, check if the fullName (includes section name) is a substring
    # in courseID & if the course group matches groupName. If the entry is not for a course group, 
    # simply check if fullName is a substring of courseID.
    # After this search, update the ".enabled" field with the value of 'found'
    formattedFunctionStatement = """this.updateObjFields = function(plan, term) {
    for (const [day, dayList] of Object.entries($scope.coursesobj[plan][term])) {
        for (const [courseID, courseObj] of Object.entries($scope.coursesobj[plan][term][day])) {
            let found = false;
            let groupName = "";
            for (const [plainName, fullName] of Object.entries($scope[plan + term + "obj"])) {
                if (!plainName.includes("group")) {
                    if (plainName.includes("__cgoption") && (plainName.slice(-2) == groupName)) {
                        if (courseID.includes(fullName.replace(/ /g, ""))) {
                            found = true;
                        }
                    }
                    else if (!plainName.includes("__cgoption")) {
                        if (courseID.includes(fullName.replace(/ /g, ""))) {
                            found = true;
                        }
                    }
                }
                else {
                    groupName = fullName;
                }
            }
            courseObj.enabled = found;
        }
    }
};\n"""

    controller.write(formattedFunctionStatement)

# Function that writes the JS function to check for overlapping courses on the currently displayed page.
# Compares all enabled courses in a day, if there is an overlap, the width & left fields of the
# course object are modified to prevent an overlap
# Parameters:
#   controller - file handle for controller.js
def generateCheckOverlaps(controller):
    # first main loop: for each day, compare a given course to every other course
    # in that day, if there is an overlap, append the overlapping course object to a list.
    # If no overlap is found, the width and left fields are reset to defaults.
    #
    # second main loop: iterating through the list of overlapping courses created previously,
    # update the width and left fields of each course object based on how many courses it is 
    # overlapping with
    functionStatement = """this.checkOverlaps = function(plan, term) {
    allOverlaps = {};
    for (const [day, dayList] of Object.entries($scope.coursesobj[plan][term])) {
        allOverlaps[day] = [];
        for (const [courseID, courseObj] of Object.entries($scope.coursesobj[plan][term][day])) {
            let overlapsList = [];
            if (courseObj.enabled) {
                let foundOverlap = false;
                for (const [checkID, checkObj] of Object.entries($scope.coursesobj[plan][term][day])) {
                    if ((courseID != checkID) && (checkObj.enabled)) {
                        let courseStart = Number(courseObj.start);
                        let courseEnd = Number(courseObj.end);
                        let checkStart = Number(checkObj.start);
                        let checkEnd = Number(checkObj.end);
                        if (((courseEnd > checkStart) && (courseStart <= checkStart)) || ((checkEnd > courseStart) && (checkStart <= courseStart))) {
                            foundOverlap = true;
                            if (!overlapsList.includes(courseObj)) {
                                overlapsList.push(courseObj);
                            }
                            if (!overlapsList.includes(checkObj)) {
                                overlapsList.push(checkObj);
                            }
                        }
                    }
                }
                if (!foundOverlap) {
                    courseObj.width = 321;
                    courseObj.left = 0;
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
                        overlapObj.left = (321/list.length)*index;
                    }
                }
            }
        }
    }
};\n"""

    controller.write(functionStatement)

# Funtion that writes the JS function that updates the styling of all courses
# on the currently displayed page
# Parameters:
#   controller - file handle for controller.js
def generateSetAllCourses(controller):
    # For each course on the currently displayed page, update the "width" & "left"
    # styles with the values stored in the course objects (which were updated in 
    # updateObjFields() & checkOverlaps())
    formattedFunctionStatement = """this.setAllCourses = function(plan, term) {
    for (const [day, dayList] of Object.entries($scope.coursesobj[plan][term])) {
        for (const [courseID, courseObj] of Object.entries($scope.coursesobj[plan][term][day])) {
            document.getElementById(courseObj.courseID.replace("_", "-")).style.width = String(courseObj.width) + "px";
            document.getElementById(courseObj.courseID.replace("_","-")).style.left = String(courseObj.left) + "px";
        }
    }
};\n"""

    controller.write(formattedFunctionStatement)
                