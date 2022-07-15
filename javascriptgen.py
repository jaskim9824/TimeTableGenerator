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
def intializeControllerJavaScript(sequenceDict, initialCourseGroupVals, courseGroupDict, courseGroupList, controller):
    generateInitialBlockController(courseGroupDict, courseGroupList, list(list(sequenceDict.values())[0].keys())[0], controller)
    generatePlanBasedBlocksController(sequenceDict, 
                                      initialCourseGroupVals,
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
#   courseGroupList - list of course groups taken overall in the program
#   initialTerm - First term to occur, must be the same for all plans (should always be Fall Term 1 in engineering)
#   controller - file handle to controller.js
def generateInitialBlockController(courseGroupDict, courseGroupList, initialTerm, controller):
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
    controller.write("""$scope.updateField2 = function(field2) {
  $scope.field2.group2 = field2;
}
$scope.updateField3 = function(field3) {
  $scope.field3.group3 = field3;
}
$scope.updateField4 = function(field4) {
  $scope.field4.group4 = field4;
}\n""")
    controller.write("var that = this;\n")
    controller.write("""this.render = function(plan) {
            this.disable(this.previousPlan);
            this.enable(plan);
            this.previousPlan = plan;
};\n""")

    controller.write("""var radios = document.querySelectorAll("input[type=radio][name=planselector]");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () { \n""")
    controller.write("that.setDefaults($scope.selectedPlan);\n")
    planString = generatePlanString(courseGroupList)
    controller.write("that.render("+planString+");\n")
    controller.write("""   });
});\n""")
    generateHighlightElement(controller)
    generateUnHighlightElement(controller)

# Function that generates the blocks of the controller JS file that is dependent
# on the number and names of plans provided
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   initialCourseGroupVals - dict that maps the course group with the initial value it should take
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group 
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller JS file
def generatePlanBasedBlocksController(sequenceDict, initialCourseGroupVals, courseGroupDict, courseGroupList, controller):
    generatePlanBasedInitalVariables(sequenceDict, initialCourseGroupVals, courseGroupList, controller)
    generateSetDefaults(courseGroupDict, courseGroupList, list(list(sequenceDict.values())[0].keys())[0], controller)
    generateSubRadioListener(courseGroupList, controller)
    generateDisableSwitchStatement(sequenceDict, controller)
    generateEnableSwitchStatement(sequenceDict, controller)
    generateAddLineSwitch(sequenceDict, courseGroupList, controller)
    generateDeleteLineSwitch(sequenceDict, courseGroupList, controller)
    generateAddToClickSwitch(sequenceDict, courseGroupList, controller)
    generateDeleteFromClickSwitch(sequenceDict, courseGroupList, controller)

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
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   initialCourseGroupVals - dict that maps the course group with the initial value it should take
#   courseGroupDict - dict that maps plans to a dict that maps course groups to the 
#   options avaiable in that course group 
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller JS file
def generatePlanBasedInitalVariables(sequenceDict, initialCourseGroupVals, courseGroupList, controller):
    for plan in sequenceDict:
        controller.write("this." + cleaner.cleanString(plan) + "List = [];\n")
        controller.write("this." + cleaner.cleanString(plan) + "Clicked = [];\n")
        controller.write("this." + cleaner.cleanString(plan) + "LegendBtns = [];\n")
        controller.write("this." + cleaner.cleanString(plan) + "LegendBtnsClicked = [];\n")
        controller.write("this." + cleaner.cleanString(plan) + "ClickedMap = new Map();\n")
        numterms = len(sequenceDict[plan].keys())
        controller.write("this." + cleaner.cleanString(plan) + "Terms = " + str(numterms) + ";\n")
    for courseGroup in initialCourseGroupVals:
        formattedCourseGroupVar = "$scope.field{number} = {{ group{number}: \"{val}\" }};\n"
        controller.write(formattedCourseGroupVar.format(number=courseGroup, 
                                                        val=initialCourseGroupVals[courseGroup]))
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

# Function that writes the highlightElement function that highlights a single element
# by adding "-highlighted" to the element's class name
# Parameters:
#   controller - file handle to controller.js
def generateHighlightElement(controller):
    controller.write("""this.highlightElement = function(element, category) {
        if (element.classList.contains(category + "-highlighted")) {
            return;
        }
        element.classList.remove(category);
        element.classList.add(category + "-highlighted");
    };\n""")

# Function that writes the unHighlightElement function that unhighlights a single element
# by removing "-highlighted" from the element's class name
# Parameters:
#   controller - file handle to controller.js
def generateUnHighlightElement(controller):
    controller.write("""this.unHighlightElement = function(element, category) {
        if (!element.classList.contains(category + "-highlighted")) {
            return;
        }
        element.classList.remove(category + "-highlighted");
        element.classList.add(category);
    };\n""")

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

# Function that generates the switch statements and functions which handle
# disabling the lines of a plan when switched off.
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generateDisableSwitchStatement(sequenceDict, controller):
    formattedFunctionStatement = """this.{functionName} = function(plan) {{
    switch (plan) {{ \n"""
    formattedSwitchStatement = """  case "{planName}{termName}": 
    for (let i = 0; i < this.{planName}List.length; i++) {{
        this.{planName}List[i][0].{actionName}(true);
    }}
    break; \n"""
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    controller.write(formattedFunctionStatement.format(functionName="disable"))
    for plan in sequenceDict:
        for term in sequenceDict[plan]:
            controller.write(formattedSwitchStatement.format(planName=cleaner.cleanString(plan), 
                                                        termName = cleaner.cleanString(term),
                                                         actionName="hide"))
    controller.write(switchEndString)

# Function that generates the switch statements and functions which handle
# enabling of course boxes, lines between plans, and boxes that were highlighted
# from the legend.
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generateEnableSwitchStatement(sequenceDict, controller):

    formattedFunctionStatement = """this.{functionName} = function(plan) {{
  switch(plan) {{\n"""

    # For loop #1: restore all courses that were clicked to their clicked 
    # state (highlighted with arrows drawn).
    # For loop #2: Restore all courses that were highlighted with the legend buttons
    # to their highlighted state and restore legend buttons to their pressed state.
    formattedSwitchStatement = """    case "{planName}{termName}": 
      for (let i = 0; i < this.{planName}List.length; i++) {{
          this.{planName}List[i][0].{actionName}(true);
      }}
      for (let i = 0; i < this.{planName}Clicked.length; i++) {{
          var element = document.getElementById(this.{planName}Clicked[i][0]);
          this.highlightElement(element, this.{planName}Clicked[i][1]);
      }}
      break; \n"""

    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""

    controller.write(formattedFunctionStatement.format(functionName="enable"))
    for plan in sequenceDict:
        for term in sequenceDict[plan]:
            controller.write(formattedSwitchStatement.format(planName=cleaner.cleanString(plan),
                                                        termName=cleaner.cleanString(term),
                                                        actionName="show"))
    controller.write(switchEndString)

# Function that generates the switch statement and function addLine
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller.js file
def generateAddLineSwitch(sequenceDict, courseGroupList, controller):
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    formattedFunctionStatement = """this.{functionName} = function(line) {{
switch({planString}) {{ \n"""
    formattedAddLineSwitchStatement = """ case "{planName}":
    var index = this.{planName}List.findIndex((element) => element[0] == line);
    if (index == -1) {{
        line.show(false);
        this.{planName}List.push([line, 1])
    }}
    else {{
        this.{planName}List[index][1]++;
    }}
    break;\n"""
    controller.write(formattedFunctionStatement.format(functionName="addLine",
                                                       planString=generatePlanString(courseGroupList)))
    for plan in sequenceDict:
        controller.write(formattedAddLineSwitchStatement.format(planName=cleaner.cleanString(plan)))
    controller.write(switchEndString)

# Function that generates the switch statement and function removeLine
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller.js file
def generateDeleteLineSwitch(sequenceDict, courseGroupList, controller):
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    formattedFunctionStatement = """this.{functionName} = function(line) {{
switch({planString}) {{ \n"""
    formmattedDeleteLineSwitchStatement = """ case "{planName}":
    var index = this.{planName}List.findIndex((element) => element[0] == line);
    if (index != -1) {{
        this.{planName}List[index][1]--
        if (this.{planName}List[index][1] <= 0) {{
            line.hide(false);
            this.{planName}List.splice(index, 1);
        }}
    }}
    break;"""
    controller.write(formattedFunctionStatement.format(functionName="removeLine",
                                                      planString=generatePlanString(courseGroupList)))

    for plan in sequenceDict:
        controller.write(formmattedDeleteLineSwitchStatement.format(planName=cleaner.cleanString(plan)))

    controller.write(switchEndString)

# Function that generates the switch statement associated with the addToClicked method
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller.js file
def generateAddToClickSwitch(sequenceDict, courseGroupList, controller):
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    formattedFunctionStatement = """this.{functionName} = function(element, category) {{
switch({planString}) {{ \n"""
    formattedAddToClickStatement = """ case "{planName}":
    var index = this.{planName}Clicked.findIndex((item) => item[0] == element);
    if (index == -1) {{
        this.{planName}Clicked.push([element, category, 1]);
    }}
    else {{
        this.{planName}Clicked[index][1] = category;
        this.{planName}Clicked[index][2]++;
    }}
    this.{planName}ClickedMap.get(element).push(category);
    break;"""
    controller.write(formattedFunctionStatement.format(functionName="addToClicked",
                                                       planString=generatePlanString(courseGroupList)))
    for plan in sequenceDict:
        controller.write(formattedAddToClickStatement.format(planName=cleaner.cleanString(plan)))
    
    controller.write(switchEndString)

# Function that generates the switch statement associated with the deleteFromClicked method
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   courseGroupList - list of course groups taken overall in the program
#   controller - file handle for controller.js file
def generateDeleteFromClickSwitch(sequenceDict, courseGroupList, controller):
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    formattedFunctionStatement = """this.{functionName} = function(element, category) {{
switch({planString}) {{ \n"""
    formattedAddToClickStatement = """ case "{planName}":
    var index = this.{planName}Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {{
        var indexMap = this.{planName}ClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {{
            this.{planName}ClickedMap.get(element).splice(indexMap, 1);
        }}
        this.{planName}Clicked[index][2]--;
        if (this.{planName}Clicked[index][2] <= 0) {{
            this.{planName}Clicked.splice(index, 1);
            return "";
        }}
        var maxIndex = this.{planName}ClickedMap.get(element).length - 1
        return this.{planName}ClickedMap.get(element)[maxIndex];
    }}
    return "";
    break;"""
    controller.write(formattedFunctionStatement.format(functionName="removeFromClicked",
                                                       planString=generatePlanString(courseGroupList)))
    for plan in sequenceDict:
        controller.write(formattedAddToClickStatement.format(planName=cleaner.cleanString(plan)))
    
    controller.write(switchEndString)

# Function that generates the switch statement to switch between plans within highlight
# or unhighlight function for a specific category
# Parameters:
#   - planDict: dict that maps plans to courses in that category
#   - controller: file handle to controller.js
#   - category: name of the category
#   - highlight: flag indicating if it is highlighting or unhighlighting 
#   (T for highlighting)  
def generatePlanSwitch(planDict, controller, category, highlight):
    # inner switch between plans
    formattedCasePlan  = """      case "{planName}":\n"""
    controller.write("    switch(planName) {\n")
    for plan in planDict:
        controller.write(formattedCasePlan.format(planName=cleaner.cleanString(plan)))
        generateCourseStatements(planDict[plan], controller, plan, category, highlight)
        controller.write("""       break;\n""")

# Function that generates the highlight or unhighlight statements for a specfic categtory
# and plan
# Parameters:
#   - courseList: list of course objects in that category for that plan
#   - controller: file handle to controller.js
#   - plan: name of current plan
#   - category: name of the category
#   - highlight: flag indicating if it is highlighting or unhighlighting 
#   (T for highlighting)      
def generateCourseStatements(courseList, controller, plan, category, highlight):
    compcounter = 0
    progcounter = 0
    itscounter = 0
    for course in courseList:
        # special cases to handle electives
        if course.name == "Complementary Elective":
            if highlight:
                generateElectiveHighlightStatement("COMP", 
                                                   "ComplementaryElective", 
                                                    plan, 
                                                    progcounter, 
                                                    controller)
            else:
                generateElectiveUnhighlightStatement("COMP", 
                                                   "ComplementaryElective", 
                                                    plan, 
                                                    progcounter, 
                                                    controller)
            compcounter += 1
            continue
        if course.name == "Program/Technical Elective":
            if highlight:
                generateElectiveHighlightStatement("PROG", 
                                                   "ProgramTechnicalElective", 
                                                    plan, 
                                                    progcounter, 
                                                    controller)
            else:
                generateElectiveUnhighlightStatement("PROG", 
                                                   "ProgramTechnicalElective", 
                                                    plan, 
                                                    progcounter, 
                                                    controller)
            progcounter += 1
            continue
        if course.name == "ITS Elective":
            if highlight:
                generateElectiveHighlightStatement("ITS", 
                                                   "ITSElective", 
                                                   plan, 
                                                   itscounter, 
                                                   controller)
            else:
                generateElectiveUnhighlightStatement("ITS", 
                                                   "ITSElective", 
                                                   plan, 
                                                   itscounter, 
                                                   controller)
            itscounter += 1
            continue
        # not an elective, fill formatted statement in with course attributes
        if highlight:
            generateNormalCourseHighlightStatement(course, plan, controller)
        else:
            generateNormalCourseUnhighlightStatement(course, plan, controller)

# Generates the statements needed to unhighlight a single elective when pressing
# the legend buttons
# Parameters:
#   - elective: shortend elective type
#   - longelective: long elective type
#   - plan: current plan
#   - category: category of course
#   - controller: file handle to controller.js
def generateElectiveHighlightStatement(elective, longelective, plan, counter, controller):
    formattedElectiveGetUnhighlightedElement = """        var {electiveName}elements = document.getElementsByClassName("{electiveName}");\n"""
    formattedElectivesHighlight = """        var i = 0;
        while ({electiveName}elements.length > 0) {{
          var currelement = document.getElementById({electiveName}elements.item(0).id);
          if (this.{planName}ClickedMap.get("{longElectiveName}{planName}" + i).length > 0) {{
                var mapLen = this.{planName}ClickedMap.get("{longElectiveName}{planName}" + i).length - 1
                var prevCate = this.{planName}ClickedMap.get("{longElectiveName}{planName}" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }}
          this.highlightElement(currelement, categoryName);
          this.addToClicked("{longElectiveName}{planName}" + i, categoryName);
          i = i + 1;
        }}\n"""
    if counter == 0:
        controller.write(formattedElectiveGetUnhighlightedElement.format(electiveName=elective))
        controller.write(formattedElectivesHighlight.format(electiveName=elective, 
                                                        count=counter, 
                                                        longElectiveName=longelective, 
                                                        planName=plan, 
                                                        categoryName=elective))

# Generates the statements needed to unhighlight a single elective when pressing
# the legend buttons
# Parameters:
#   - elective: shortend elective type
#   - longelective: long elective type
#   - plan: current plan
#   - category: category of course
#   - controller: file handle to controller.js
def generateElectiveUnhighlightStatement(elective, longelective, plan, counter, controller):
    formattedElectiveGetHighlightedElement = """        var {electiveName}elements = document.getElementsByClassName("{electiveName}-highlighted");\n"""
    formattedElectivesUnhighlight = """        var i = 0;        
        while ({electiveName}elements.length > 0) {{
          var currelement = document.getElementById({electiveName}elements.item(0).id);
          var prevCate = this.removeFromClicked("{longElectiveName}{planName}" + i, "{categoryName}");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {{
                    return;
                }}
                else {{
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {{
                        this.highlightElement(currelement, prevCate);
                    }}
                }}      
          i = i + 1;
        }}\n"""
    if counter == 0:
        controller.write(formattedElectiveGetHighlightedElement.format(electiveName=elective))
        controller.write(formattedElectivesUnhighlight.format(electiveName=elective, 
                                                          longElectiveName=longelective, 
                                                          count=counter, 
                                                          planName=plan, 
                                                          categoryName=elective))

# Generates the statements needed to highlight a single normal course when pressing
# the legend buttons
# Parameters:
#   - course: course object
#   - plan: current plan
#   - category: category of course
#   - controller: file handle to controller.js
def generateNormalCourseHighlightStatement(course, plan, controller):
    # # finding the element with the appropriate id
    # formattedGetElement = """       var {courseName}{planName}element = document.getElementById("{courseName}{planName}");\n"""
    # # remove from list of unclicked
    # formattedRemoveUnclicked = """       {courseName}{planName}element.classList.remove("{categoryName}");\n"""
    # # add to list of clicked
    # formattedAddToClicked = """       {courseName}{planName}element.classList.add("{categoryName}-highlighted");
    #    that.addToClicked("{courseName}{planName}","{categoryName}");\n"""
    # controller.write(formattedGetElement.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name)))
    # controller.write(formattedRemoveUnclicked.format(planName=cleaner.cleanString(plan), 
    #                                                  courseName=cleaner.cleanString(course.name), 
    #                                                  categoryName=cleaner.cleanString(category)))
    # controller.write(formattedAddToClicked.format(planName=cleaner.cleanString(plan), 
    #                                               courseName=cleaner.cleanString(course.name), 
    #                                               categoryName=cleaner.cleanString(category)))
    formattedHighlightStatement = """ var element = document.getElementById("{courseName}{planName}");
                            if (this.{planName}ClickedMap.get("{courseName}{planName}").length > 0) {{
                                var mapLen = this.{planName}ClickedMap.get("{courseName}{planName}").length - 1
                                var prevCate = this.{planName}ClickedMap.get("{courseName}{planName}")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }}
                            this.highlightElement(element, categoryName);
                            this.addToClicked("{courseName}{planName}", categoryName);\n"""
    controller.write(formattedHighlightStatement.format(planName=cleaner.cleanString(plan),
                                                        courseName=cleaner.cleanString(course.name)))

# Generates the statements needed to unhighlight a single normal course when pressing
# the legend buttons
# Parameters:
#   - course: course object
#   - plan: current plan
#   - category: category of course
#   - controller: file handle to controller.js
def generateNormalCourseUnhighlightStatement(course, plan, controller):
    # formattedIfStatement = "if (!{courseName}{planName}flag) {{ \n"
    # # finding the element with the appropriate id
    # formattedGetElement = """       var {courseName}{planName}element = document.getElementById("{courseName}{planName}");\n"""
    # # remove from list of clicked
    # formattedRemoveClicked = """       {courseName}{planName}element.classList.remove("{categoryName}-highlighted");\n"""
    # # add to list of unclicked
    # formattedAddToUnclicked = """       {courseName}{planName}element.classList.add("{categoryName}");\n       
    #    that.removeFromClicked("{courseName}{planName}", "{categoryName}");\n"""
    # controller.write(formattedIfStatement.format(planName=cleaner.cleanString(plan), 
    #                                                          courseName=cleaner.cleanString(course.name)))
    # controller.write(formattedGetElement.format(planName=cleaner.cleanString(plan), 
    #                                             courseName=cleaner.cleanString(course.name)))
    # controller.write(formattedRemoveClicked.format(planName=cleaner.cleanString(plan), 
    #                                                courseName=cleaner.cleanString(course.name), 
    #                                                categoryName=cleaner.cleanString(category)))
    # controller.write(formattedAddToUnclicked.format(planName=cleaner.cleanString(plan), 
    #                                                 courseName=cleaner.cleanString(course.name), 
    #                                                 categoryName=cleaner.cleanString(category)))
    formattedUnhighlightStatement = """     var element = document.getElementById("{courseName}{planName}");
                            var prevCate = this.removeFromClicked("{courseName}{planName}", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {{
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {{
                                        this.highlightElement(element, prevCate);
                                    }}
                                }}\n"""
    controller.write(formattedUnhighlightStatement.format(courseName=cleaner.cleanString(course.name),
                                                          planName=cleaner.cleanString(plan)))

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
