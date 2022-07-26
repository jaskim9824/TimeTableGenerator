# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions neccessary to generate the JS of the 
# webpage which is not releated to the generation of the lines

# Dependencies: cleaner
import cleaner

# Function that generates the JS before the generation of the course diagram
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   initialCourseGroupVals - dict that maps the course group with the initial value it should take
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group 
#   courseGroupList - list of course groups taken overall in the program
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
# Parameters:
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group
#   initialTerm - First term to occur, must be the same for all plans (should always be Fall Term 1 in engineering)
#   controller - file handle to controller.js
def generateInitialBlockController(courseGroupDict, initialTerm, controller):
    planList = list(courseGroupDict.keys())
    controller.write("var app = angular.module(\"main\", []);\n")
    controller.write("app.controller(\"main\", function($scope) { \n")
    # Initializing selectedPlan and selectedTerm scope vars
    controller.write("$scope.selectedPlan = \"" + cleaner.cleanString(planList[0])+ "\";\n")
    controller.write("$scope.selectedTerm = \"" + cleaner.cleanString(initialTerm) + "\";\n")
    # Writing functions that update term and course group fields. Functions are called when changing
    # radio inputs. Note: selectedPlan can be altered directly, these vars need these helper funtions
    controller.write("""$scope.updateTerm = function(term) {
  $scope.selectedTerm = term;
}\n""")
    controller.write("var that = this;\n")


    controller.write("""var radios = document.querySelectorAll("input[type=radio][name=planselector]");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () { \n""")
    controller.write("that.setDefaults($scope.selectedPlan);\n")
    controller.write("""   });
});\n""")

# Function that generates the blocks of the controller JS file that is dependent
# on the number and names of plans provided
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   initialCourseGroupVals - dict that maps the course group with the initial value it should take
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group 
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller JS file
def generatePlanBasedBlocksController(sequenceDict, courseGroupDict, courseGroupList, controller):
    generatePlanBasedInitalVariables(courseGroupList, controller)
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

# Function that generates the intial variables for the controller
# based on the plans
# Parameters: 
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller JS file
def generatePlanBasedInitalVariables(courseGroupList, controller):
    planString = generatePlanString(courseGroupList)
    controller.write("this.previousPlan = " +planString + "\n")

# Function that writes the setDefaults function based on the plans and course groups.
# The JS generated sets the default term and course group options for each plan. 
# Reverts to these defaults when switching between plans.
# Parameters:
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group
#   courseGroupList - list of course groups taken overall in the program
#   initialTerm - First term to occur, must be the same for all plans (should always be Fall Term 1 in engineering)
#   controller - file handle to controller.js
def generateSetDefaults(courseGroupDict, courseGroupList, initialTerm, controller):
    controller.write("this.setDefaults = function(plan) { \n")
    controller.write("  switch(plan) { \n")  # different term and course group options in each plan
    formattedCaseStatement = "      case \"{case}\": \n"
    formattedTerm = "            $scope.selectedTerm = \"" + cleaner.cleanString(initialTerm) + "\";\n"
    formattedCourseGroup = "            $scope.field{number}.group{number} ="
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

# Function that generates the listener that listens to course group selection
# radio inputs
# Parameters:
#   courseGroupList - list of course groups taken in this program
#   controller - file handle to controller.js          
def generateSubRadioListener(courseGroupList, controller):
    planString = generatePlanString(courseGroupList)
    controller.write("$scope.globalSubGroupChange = function () { \n")
    controller.write("that.render(" + planString + ");\n")
    controller.write("};\n")

# Function that generates the statementd representing which plan is currently selected
# Parameters:
#   courseGroupList - list of all course groups taken that term
def generatePlanString(courseGroupList):
    planString = "$scope.selectedPlan"
    formattedCourseGroup = "$scope.field{number}.group{number}"
    for courseGroup in courseGroupList:
        planString += "+"+formattedCourseGroup.format(number=courseGroup)
    planString += "+$scope.selectedTerm"
    return planString

def generateInitialOptionObjects(planOptionDict, controller):
    for plan in planOptionDict:
        for term in planOptionDict[plan]:
            controller.write("$scope."+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj = {")
            for count, optionGroup in enumerate(planOptionDict[plan][term]):
                controller.write(optionGroup.getOptionName() + ":\"" + optionGroup.options[0] + "\"")
                if count != len(planOptionDict[plan][term]) - 1:
                    controller.write(",")
            controller.write("};\n")
                