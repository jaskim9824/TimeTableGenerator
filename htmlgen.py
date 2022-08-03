# Authors: Jason Kim, Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to generate the required
# HTML elements to produce the MEC E Program Visualizer webpage

# Dependencies: cleaner, html, copy, coursegroupparsing

import cleaner
import html
from copy import deepcopy

from coursegroupparsing import CourseGroupOption
from sequenceparsing import CourseSectionWrapper

# Changes the header title to include deptName, which is pulled
# from Sequncing Excel file
# Parameters:
#   titleTag - "site-title" HTML tag at the top of the page
#   topTitleTag - title appearing as name of tab
#   deptName - department name pulled from Sequencing Excel file
def switchTitle(titleTag, topTitleTag, deptName):
    titleTag.append(deptName + " Timetable")
    topTitleTag.append(deptName + " Timetable")

# Function that places the radio inputs into the form which controls
# which plan is currently selected on the webpage
# Parameters:
#   formTag - form HTML tag where the plan radio inputs will be placed
#   termTag - div HTML tag where the term radio inputs will be placed
#   inputWrapper - div HTML tag that holds the corresponding inputs
#   courseGroupDict - dict that maps the plans to the course groups in it
#   optionDict - dict that holds all the options present in a term
#   seqDict - dict that contains the sequence information
#   soup - soup object, used to create HTML tags
def placeRadioInputs(formTag, termTag, inputWrapper, optionDict, seqDict, soup):
    for plan in optionDict:
        # name of first term in current plan
        firstTermInPlan = cleaner.cleanString((list(optionDict[plan].keys()))[0])  
        # radio inputs for selecting plan, can ng-model directly to selectedPlan
        radioInput = soup.new_tag("input", attrs={"ng-change":"render(\"" + firstTermInPlan + "\")",
                                                  "type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"selectedPlan",
                                                  "value": cleaner.cleanString(plan),
                                                  "id": cleaner.cleanString(plan)})
        labelTag = soup.new_tag("label", attrs={"for":cleaner.cleanString(plan)})
        labelTag.append(plan)
        formTag.append(radioInput)
        formTag.append(labelTag)
        breakTag = soup.new_tag("br")
        formTag.append(breakTag)
        # div to hold radio inputs to select term for that plan in question
        planWrapper = soup.new_tag("div", attrs={"ng-switch-when": cleaner.cleanString(plan)})
        for term in optionDict[plan]:
            # ng-change used to update $scope.selectedTerm
            radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":cleaner.cleanString(plan) + "termselector", 
                                                  "ng-model":"selectedTerm",
                                                  "ng-change":"render(\"" + cleaner.cleanString(term) + "\")",
                                                  "value": cleaner.cleanString(term),
                                                  "id": cleaner.cleanString(term)})
            labelTag = soup.new_tag("label", attrs={"for": cleaner.cleanString(term)})
            labelTag.append(term)
            planWrapper.append(radioInput)
            planWrapper.append(labelTag)
            breakTag = soup.new_tag("br")
            planWrapper.append(breakTag)
            termTag.append(planWrapper)
            wrapperDiv = soup.new_tag("div", attrs={"ng-switch-when": cleaner.cleanString(plan) + cleaner.cleanString(term)})
            courseSectionWrapper = soup.new_tag("div")
            courseSectionWrapper.append("Course Sections")
            for course in seqDict[plan][term]:
                if (len(course) == 1) and (type(course[0]) != type([])):
                    sectionWrapper = soup.new_tag("div")
                    sectionSelectWrapper = soup.new_tag("select", attrs={"ng-change":"render()",
                                                                    "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term)+
                                                                           cleaner.cleanString(str(course[0])),
                                                                   "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               cleaner.cleanString(str(course[0]))})
                    sectionWrapper.append(str(course[0]))
                    breakTag = soup.new_tag("br")
                    sectionWrapper.append(breakTag)
                    for section in course[0].sections:
                        sectionRadio = soup.new_tag("option", attrs={"value": str(section),
                                                                      "id": str(section)})
                        sectionRadio.append(str(section))
                        sectionSelectWrapper.append(sectionRadio)
                    sectionRadio = soup.new_tag("option", attrs={"value": "ALL",
                                                                        "id":"ALL"})
                    sectionRadio.append("ALL")
                    sectionSelectWrapper.append(sectionRadio)
                    sectionWrapper.append(sectionSelectWrapper)
                    sectionWrapper.append(sectionSelectWrapper)
                    courseSectionWrapper.append(sectionWrapper)
                elif len(course) > 1 and type(course[0]) == type([]):
                    for opt in course:
                        # or course wrapped in course group
                        if len(opt) != 2:
                            continue
                        else:
                            sectionWrapper = soup.new_tag("div", attrs={"ng-if":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term)+
                                                                           "obj."+
                                                                           "group"+
                                                                           opt[-1][0] + 
                                                                           "==\"" + 
                                                                           opt[-1] + 
                                                                           "\""})
                            sectionWrapper.append(str(opt[0]))
                            breakTag = soup.new_tag("br")
                            sectionWrapper.append(breakTag)
                            courseGroupName = opt[1]
                            sectionSelectWrapper = soup.new_tag("select", attrs={"ng-change":"render()",
                                                                        "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term)+
                                                                           cleaner.cleanString(str(opt[0])),
                                                                           "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               cleaner.cleanString(str(opt[0])) + 
                                                                               "__cgoption" + courseGroupName})
                            for section in opt[0].sections:
                                sectionRadio = soup.new_tag("option", attrs={"value": str(section),
                                                                            "id": str(section)})
                                sectionRadio.append(str(section))
                                sectionSelectWrapper.append(sectionRadio)
                            sectionRadio = soup.new_tag("option", attrs={"value": "ALL",
                                                                        "id":"ALL"})
                            sectionRadio.append("ALL")
                            sectionSelectWrapper.append(sectionRadio)
                            sectionWrapper.append(sectionSelectWrapper)
                            courseSectionWrapper.append(sectionWrapper)
            wrapperDiv.append(courseSectionWrapper)
            for course in optionDict[plan][term]:
                if type(course) == type(CourseGroupOption()):
                    # append to coursegroup form
                    courseGroupWrapper = soup.new_tag("div", attrs={"id":course.getOptionName()})
                    for option in course.options:
                        courseGroupRadio = soup.new_tag("input", attrs={"ng-change":"render()",
                                                                    "type":"radio",
                                                                    "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term) + 
                                                                           course.getOptionName(),
                                                                    "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName(),
                                                                    "value": option,
                                                                    "id": option})
                        labelTag = soup.new_tag("label", attrs={"for":option})
                        labelTag.append(option)
                        courseGroupWrapper.append(courseGroupRadio)
                        courseGroupWrapper.append(labelTag)
                    wrapperDiv.append(courseGroupWrapper)
                            
                else:
                    # is an OR course option
                    if course.isWithCourseGroup:
                        # this OR course is bound to a course group
                        optionOutsideWrapper = soup.new_tag("div", attrs={"ng-switch":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.parentCourseGroup[0]})
                        optionWrapper = soup.new_tag("div", attrs={"ng-switch-when":course.parentCourseGroup})
                        for option in course.options:
                            optionRadio = soup.new_tag("input", attrs={"type":"radio",
                                                                    "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term) + 
                                                                           course.getOptionName(),
                                                                    "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName(),
                                                                    "value": option,
                                                                    "id": option})
                            labelTag = soup.new_tag("label", attrs={"for":option})
                            sectionWrapper = soup.new_tag("div", attrs={"ng-if":"(" + cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.parentCourseGroup[0] + "=="
                                                                               + course.parentCourseGroup + ")" + 
                                                                               "& (" +
                                                                               cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName() + "==" + 
                                                                               option + ")"})
                            sectionWrapper.append(option)
                            sectionSelectWrapper = soup.new_tag("select", attrs={"ng-change":"render()",
                                                                        "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term)+
                                                                           option,"ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName()+
                                                                               option })
                            for section in option.sections:
                                sectionRadio = soup.new_tag("option", attrs={"value": section,
                                                                            "id": section})
                                sectionRadio.append(section)
                                sectionSelectWrapper.append(sectionRadio)
                            sectionRadio = soup.new_tag("option", attrs={"value": "ALL",
                                                                        "id":"ALL"})
                            sectionRadio.append("ALL")
                            sectionSelectWrapper.append(sectionRadio)
                            sectionWrapper.append(sectionSelectWrapper)
                            sectionWrapper.append(sectionSelectWrapper)
                            courseSectionWrapper.append(sectionWrapper)    
                            labelTag.append(option)
                            optionWrapper.append(optionRadio)
                            optionWrapper.append(labelTag)
                        optionOutsideWrapper.append(optionWrapper)
                        wrapperDiv.append(optionOutsideWrapper)
                            
                    else:
                        # this OR course is indep of a course group
                        optionWrapper = soup.new_tag("div", attrs={"id":course.getOptionName()})
                        for option in course.options:
                            optionRadio = soup.new_tag("input", attrs={"type":"radio",
                                                                    "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term) + 
                                                                           course.getOptionName(),
                                                                    "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName(),
                                                                    "value": option,
                                                                    "id": option})
                            sectionWrapper = soup.new_tag("div", attrs={"ng-if":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName() +
                                                                               "==" + option})
                            sectionWrapper.append(option)
                            for section in option.sections:
                                sectionRadio = soup.new_tag("input", attrs={"type":"radio",
                                                                            "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term)+
                                                                           option,
                                                                           "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName()+
                                                                               option,
                                                                            "value": section,
                                                                            "id": section})
                                labelTag = soup.new_tag("label", attrs={"for":section})
                                labelTag.append(section)
                                sectionWrapper.append(sectionRadio)
                                sectionWrapper.append(labelTag)
                            courseSectionWrapper.append(sectionWrapper)                                             
                            labelTag = soup.new_tag("label", attrs={"for":option})
                            labelTag.append(option)
                            optionWrapper.append(optionRadio)
                            optionWrapper.append(labelTag)
                        wrapperDiv.append(optionWrapper)
            inputWrapper.append(wrapperDiv)

# Function that generates the display div which holds the plan diagram
# Parameters:
#   soup - soup object, used to create HTML tags
#   courseGroupList - list of all possible course groups taken in this program
# Returns:
#   displayTag - HTML tag for the display tag (container for the timetable grid)
def generateDisplayDiv(soup, courseGroupList):
    switchVariable = "selectedPlan"  # switch on plan selection
    formattedCourseGroupVar="field{number}.group{number}"  # switch on course group selection
    for element in courseGroupList:
        switchVariable += "+" + formattedCourseGroupVar.format(number=element)
    switchVariable += "+selectedTerm"  # switch on term selection
    return soup.new_tag("div", attrs={"class":"display"})

# Function that places the outer divs for the course group selection 
# radio inputs for each plan
# Parameters:
#   courseGroupSelectTag - HTML tag representing outer div used to hold the course group selection menu
#   soup - soup object, used to create HTML tags
#   courseGroupDict - dict that maps plans to a dict which maps course groups to their options
def placeCourseGroupRadioInputs(courseGroupSelectTag, soup, courseGroupDict):
    for plan in courseGroupDict:
        planCourseGroupsTag = soup.new_tag("div", attrs={"id":cleaner.cleanString(plan),
                                                         "ng-switch-when":cleaner.cleanString(plan)})
        placeCourseGroupRadioInputsForPlan(planCourseGroupsTag, soup, courseGroupDict[plan])
        courseGroupSelectTag.append(planCourseGroupsTag)

# Function that places the course group radio inputs for a specific plan
# Parameters:
#   planCourseGroupsTag - HTML tag representing div that holds the group selection menu for that plan
#   soup - soup object, used to create HTML tags
#   planCourseGroupDict - dict that maps course groups of that plans to the different options for 
#   each course group
def placeCourseGroupRadioInputsForPlan(planCourseGroupsTag, soup, planCourseGroupDict):
    for subplan in planCourseGroupDict:
        formTag = soup.new_tag("form", class_="select")
        boldFaceTag = soup.new_tag("b")
        boldFaceTag.append("Course Group " + str(subplan))
        planCourseGroupsTag.append(boldFaceTag)
        placeCourseGroupRadioInputsForSubPlan(formTag, soup, planCourseGroupDict[subplan], subplan)
        planCourseGroupsTag.append(formTag)

# Function that places the option radio inputs for a specfic course group for a specific plan
# Parameters:
#   subPlanTag - HTML tag representing div that holds the radio inputs for that course group for
#   that specifc plan
#   soup - soup object, used to create HTML tags
#   subPlanOptionList - list of options for that course group
#   subplan - name of course group
def placeCourseGroupRadioInputsForSubPlan(subPlanTag, soup, subPlanOptionList, subplan):
    formattedSubPlanVar = "field{number}.group{number}"
    for option in subPlanOptionList:
        inputTag = soup.new_tag("input", attrs={"type":"radio",
                                                "id":option,
                                                "ng-model":formattedSubPlanVar.format(number=subplan),
                                                "value":option,
                                                "ng-change-radio":"globalSubGroupChange()"})
        labelTag = soup.new_tag("label", attrs={"for":option})
        labelTag.append(option)
        subPlanTag.append(inputTag)
        subPlanTag.append(labelTag)
        breakTag = soup.new_tag("br")
        subPlanTag.append(breakTag)

# Function that places the outer divs representing each plan and each term
# Parameters:
#   displayTag - HTML tag representing outer display div where the different plan sequences are placed
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   soup - soup object, used to create HTML tags
#   controller - file handle for controller.js
def placePlanDivs(displayTag, sequenceDict, soup, controller):
    controller.write("$scope.coursesobj = {};\n")
    for plan in sequenceDict:
        controller.write("$scope.coursesobj." + cleaner.cleanString(plan) + " = {};\n")
        for term in sequenceDict[plan]:
            controller.write("$scope.coursesobj." + cleaner.cleanString(plan) + "." + cleaner.cleanString(term) + " = {};\n")
            switchInput = soup.new_tag("div", attrs={"id":cleaner.cleanString(plan) + cleaner.cleanString(term),
                                                    "ng-show":"selectedPlan+selectedTerm == \"" + cleaner.cleanString(plan) + cleaner.cleanString(term) + "\"",
                                                    "style":"height:fit-content; display:flex; flex-direction:row; flex-wrap:column;"})
            placeTermDivs(switchInput, sequenceDict[plan], soup, plan, term, controller)
            displayTag.append(switchInput)

# Function that places the column divs which represent the terms within a certain plan
# Parameters:
#   planTag - HTML tag representing the plan sequence in question
#   planDict - dict that maps a course list to each term in the plan
#   soup - soup object, used to create HTML tags
#   plan - name of plan whose terms are being placed
#   term - name of the term whose courses are being placed
#   controller - file handle for controller.js
def placeTermDivs(planTag, planDict, soup, plan, term, controller):
    termDiv = soup.new_tag("div", attrs={"class":"coursegrid"})  # grid of flexboxes that displays timetable

    timeDiv = createTimeGridDivs(soup)  # writes text for each hour & draws horizontal dividing lines
    termDiv.append(timeDiv)

    # creating the flexboxes for each day of week
    daysTagsDict = createDailyDivs(plan, term, soup, controller)

    # placing courses on mondayDiv, tuesdayDiv, etc. then appending to termDiv
    placeCourses(daysTagsDict, planDict[term], soup, plan, term, controller)
    for dayTag in daysTagsDict.values():
        termDiv.append(dayTag)
    planTag.append(termDiv)

    # generating a list of all courses taken in this plan
    courseList = []
    for courses in planDict.values():
        courseList += courses

# Creates a div for the left of the webpage that has hours from 8:00 to 21:00
# going down the side of the page.
# Parameters:
#   soup - soup object, used to create HTML tags
# Returns:
#   timeDiv - HTML div with the text for each hour in a subdiv
def createTimeGridDivs(soup):
    timeDiv = soup.new_tag("div", attrs={"class":"time"})  # leftmost flexbox with times running down left of page
    for i in range(8, 22):  # for hours between 8am-9pm

        # helps align the grid
        adjustmentFactor = 0
        if i > 8:
            adjustmentFactor = -2

        # text displaying time on left of page
        timeSlotDiv = soup.new_tag("div", attrs={"class":"timeslot"})
        timeSlotDiv.append(str(i) + ":00")

        # 1 hour = 135.35 pixels. Initial value 24.5 aligns times to the rest of the grid
        timeDiv.append(soup.new_tag("hr", attrs={"class":"horizontaldivider", 
                                "style":"position:absolute; top:" + str(24.5+135.35*(i - 8) + adjustmentFactor) + "px"}))
        timeDiv.append(timeSlotDiv)
    
    return timeDiv

# Creates the div for each day of the week. Each div will hold all of the courses taken during that day.
# Also creates a horizontal dividing line running across the entire page at each hour.
# Parameters:
#   plan - name of the current plan being placed
#   term - name of the current term being placed
#   soup - soup object, used to create HTML tags
#   controller = file handle to controller.js
# Returns:
#   daysTagsDict - dict mapping day of week ("monday", "tuesday", etc.) to the div
#   for that day of the week. Useful to shortcut to the div one requires
def createDailyDivs(plan, term, soup, controller):
    daysTagsDict = {}
    daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    for day in daysOfWeek:
        controller.write("$scope.coursesobj." + cleaner.cleanString(plan) + "." + cleaner.cleanString(term) + "." + 
        day.lower() + " = [];\n")
        # create a column-oriented flexbox for each day of the week, add first horizontal divider
        currentDiv = soup.new_tag("div", attrs={"class":day.lower()})
        dayHeaderDiv = soup.new_tag("div", attrs={"class":"dayheader"})
        dayHeaderDiv.append(day)
        currentDiv.append(dayHeaderDiv)
        currentDiv.append(soup.new_tag("hr", attrs={"class":"horizontaldivider"}))
        for i in range(1, 14):
            # placing the horizontal dividing lines, 1 hr = 135.35 px, 22.15 is to align to the rest of the grid
            currentDiv.append(soup.new_tag("hr", attrs={"class":"horizontaldivider", 
                                                    "style":"position:absolute; top:" + str(22.15+135.35*i) + "px"}))
            daysTagsDict[day.lower()] = currentDiv

    return daysTagsDict

# Function that places the course divs within a certain term column of a certain plan
# This is the main function in htmlgen as it places each course on the page
# Parameters:
#   daysTagsDict - dict mapping day of week ("monday", "tuesday", etc.) to the div
#   for that day of the week. Useful to shortcut to the div one requires
#   termList - list of courses being taken that term
#   soup - soup object, used to create HTML tags
#   plan - name of plan whose terms are being placed
#   controller - file handle for controller.js
def placeCourses(daysTagsDict, termList, soup, plan, term, controller):

    # adjustOverlapping(termList)  # check for overlapping courses, set position field if overlap


    for courseWrapperList in termList:
        orCase = False
        if len(courseWrapperList) > 2 and type(courseWrapperList[0]) != type([]):
            orCase = True
            orName = ""
            for courseWrapper in courseWrapperList:
                orName += courseWrapper.name
        for courseWrapper in courseWrapperList:
            if (type(courseWrapper) == type([])):
                orCase = False
                # courseWrapper is for a course group
                courseGroupSubName = courseWrapper[-1]
                courseGroupCourseList = courseWrapper[:-1]
                # outsideDiv = soup.new_tag("div", attrs={"ng-if":cleaner.cleanString(plan)+
                #                                                 cleaner.cleanString(term)
                #                                                 +"obj."
                #                                                 +"group"+
                #                                                 courseGroupName[0]
                #                                                 +"== \""
                #                                                 +courseGroupName+
                #                                                 "\""})
                courseGroupName = courseGroupSubName[0]
                if len(courseGroupCourseList) > 1:
                    orCase = True
                    orName = ""
                    for course in courseGroupCourseList:
                        orName += str(course)
                for course in courseGroupCourseList:
                    for section in course.sections:
                        tagsList = []
                        minutesFromEight = calcMinutes(section.hrsFrom)  # minutes from 8:00 to start of class
                        minutesLong = calcClassDuration(section.hrsFrom, section.hrsTo)  # duration of class
                        if section.mon == 'Y':
                            tagsList.append(daysTagsDict["monday"])
                        if section.tues == 'Y':
                            tagsList.append(daysTagsDict["tuesday"])
                        if section.wed == 'Y':
                            tagsList.append(daysTagsDict["wednesday"])
                        if section.thurs == 'Y':
                            tagsList.append(daysTagsDict["thursday"])
                        if section.fri == 'Y':
                            tagsList.append(daysTagsDict["friday"])
                        courseID = cleaner.cleanString(section.name)+cleaner.cleanString(plan)+cleaner.cleanString(term)
                        adjustmentFactor = 0
                        if minutesFromEight != 0:
                            adjustmentFactor = -3
                         # outer course container used for absolute vertical positioning
                        if orCase:
                            courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer", 
                                                           "style":"position:absolute; top:" + 
                                                           str(37 + (135.35/60)*minutesFromEight 
                                                           + adjustmentFactor) + 
                                                           "px; height:" + 
                                                           str((135.35/60)*minutesLong) + 
                                                           "px",
                                                           "ng-show":"("+cleaner.cleanString(plan)+
                                                           cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(course))+
                                                           "__cgoption"+courseGroupSubName
                                                           +"==\""+str(section)+"\" ||"+
                                                           cleaner.cleanString(plan)+
                                                           cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(course))+
                                                           "__cgoption"+courseGroupSubName+
                                                           "==\"ALL\""+
                                                           ")"+
                                                           "&&"+
                                                           cleaner.cleanString(plan)
                                                           +cleaner.cleanString(term)+
                                                           "obj.group"+
                                                           courseGroupName+
                                                           "=="+
                                                           "\""+
                                                           courseGroupSubName+
                                                           "\"&&"+
                                                           cleaner.cleanString(plan)
                                                           +cleaner.cleanString(term)+
                                                           "obj."+
                                                           orName+
                                                           "=="+"\""+str(course)+"\""})
                        else:
                            courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer", 
                                                           "style":"position:absolute; top:" + 
                                                           str(37 + (135.35/60)*minutesFromEight 
                                                           + adjustmentFactor) + 
                                                           "px; height:" + 
                                                           str((135.35/60)*minutesLong) + 
                                                           "px",
                                                           "ng-show":"("+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+cleaner.cleanString(str(course))+"__cgoption"+courseGroupSubName
                                                           +"==\""+str(section)+"\""+"||"+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(course))+"__cgoption"+courseGroupSubName+"==\"ALL\")"
                                                           +"&&"+
                                                           cleaner.cleanString(plan)
                                                           +cleaner.cleanString(term)+
                                                           "obj.group"+
                                                           courseGroupName+
                                                           "=="+
                                                           "\""+
                                                           courseGroupSubName+
                                                           "\""})

                        
                        courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                        "class":"tooltiptextright",
                                                        "ng-click":"$event.stopPropagation()"})

                        courseDiv = createCourseDiv(soup,
                                                    courseID, 
                                                    minutesFromEight,
                                                    minutesLong) 
                        formatCourseDescriptionForRegular(soup, section, courseDisc)

                        # text appearing in course box (eg: CHEM 103)
                        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
                        courseHeader.append(section.plainName + " (" + section.sect + ")")

                        courseDiv.append(courseHeader)
                        courseDiv.append(courseDisc)

                        courseContDiv.append(courseDiv)
                        appendToEachDay(tagsList, courseContDiv, plan, term, minutesFromEight, minutesLong, controller)  # course may occur on multiple days, need to append to each day
 
            elif type(courseWrapper) == type([]) and len(courseWrapper) == 1:
                # courseWrapper is for an elective, not used in timetable
                continue
            else:
                for course in courseWrapper.sections:
                    # placing an individual course on the timetable
                    tagsList = []
                    minutesFromEight = calcMinutes(course.hrsFrom)  # minutes from 8:00 to start of class
                    minutesLong = calcClassDuration(course.hrsFrom, course.hrsTo)  # duration of class
                    # save the tags we will need to append to for later
                    if course.mon == 'Y':
                        tagsList.append(daysTagsDict["monday"])
                    if course.tues == 'Y':
                        tagsList.append(daysTagsDict["tuesday"])
                    if course.wed == 'Y':
                        tagsList.append(daysTagsDict["wednesday"])
                    if course.thurs == 'Y':
                        tagsList.append(daysTagsDict["thursday"])
                    if course.fri == 'Y':
                        tagsList.append(daysTagsDict["friday"])
                    courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan)+cleaner.cleanString(term)  # id of html element
                
                    # helps align courses to the grid
                    adjustmentFactor = 0
                    if minutesFromEight != 0:
                        adjustmentFactor = -3

                    # outer course container used for absolute vertical positioning
                    if orCase:
                        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer", 
                                                           "style":"position:absolute; top:" + 
                                                           str(37 + (135.35/60)*minutesFromEight 
                                                           + adjustmentFactor) + 
                                                           "px; height:" + 
                                                           str((135.35/60)*minutesLong) + 
                                                           "px",
                                                           "ng-show":"("+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+cleaner.cleanString(str(courseWrapper))
                                                           +"==\""+str(course)+"\""+"||"+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(courseWrapper))+"==\"ALL\")"+
                                                           "&&"+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+
                                                           orName+"==\""+str(courseWrapper)+"\""})
                    else:
                        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer", 
                                                           "style":"position:absolute; top:" + 
                                                           str(37 + (135.35/60)*minutesFromEight 
                                                           + adjustmentFactor) + 
                                                           "px; height:" + 
                                                           str((135.35/60)*minutesLong) + 
                                                           "px",
                                                           "ng-show":cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+cleaner.cleanString(str(courseWrapper))
                                                           +"==\""+str(course)+"\""+"||"+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(courseWrapper))+"==\"ALL\""})

                    courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                "class":"tooltiptextright",
                                                "ng-click":"$event.stopPropagation()"})

                    courseDiv = createCourseDiv(soup,
                                            courseID, 
                                            minutesFromEight,
                                            minutesLong) 
                    formatCourseDescriptionForRegular(soup, course, courseDisc)

                    # text appearing in course box (eg: CHEM 103)
                    courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
                    courseHeader.append(course.plainName + " (" + course.sect + ")")

                    courseDiv.append(courseHeader)
                    courseDiv.append(courseDisc)

                    courseContDiv.append(courseDiv)
                    appendToEachDay(tagsList, courseContDiv, plan, term, minutesFromEight, minutesLong, controller)  # course may occur on multiple days, need to append to each day

# Checks termList for overlapping courses and updates pushLeft/pushRight attributes
# if there is a time overlap.
# Parameters:
#   termList - list of courses being taken that term
# Returns:
#   None. The pushLeft/pushRight attributes of Course objects are updated.
def adjustOverlapping(termList):
    courseTimes = {}  # dict of list of dicts. Inner dicts store Course object, start time, & end time for one course
    courseTimes["monday"] = []
    courseTimes["tuesday"] = []
    courseTimes["wednesday"] = []
    courseTimes["thursday"] = []
    courseTimes["friday"] = []
    for courseWrapperList in termList:
        for courseWrapper in courseWrapperList:
            if (type(courseWrapper) == type([])) and (len(courseWrapper) == 2):
                # courseWrapper is for a course group
                courseGroupName = courseWrapper[1]
                courseWrapper = courseWrapper[0]
            if (type(courseWrapper) == type([])) and (len(courseWrapper) == 1):
                # courseWrapper is for an elective, not used in timetable
                continue

            for course in courseWrapper.sections:
                minutesFromEight = calcMinutes(course.hrsFrom)  # minutes from 8:00 to start of class
                minutesLong = calcClassDuration(course.hrsFrom, course.hrsTo)  # duration of class
                timeDict = {}
                timeDict["course"] = course
                timeDict["start"] = minutesFromEight
                timeDict["end"] = minutesFromEight + minutesLong
                if course.mon == 'Y':
                    courseTimes["monday"].append(timeDict)
                if course.tues == 'Y':
                    courseTimes["tuesday"].append(timeDict)
                if course.wed == 'Y':
                    courseTimes["wednesday"].append(timeDict)
                if course.thurs == 'Y':
                    courseTimes["thursday"].append(timeDict)
                if course.fri == 'Y':
                    courseTimes["friday"].append(timeDict)

    overlaps = {}
    # O(n^2) comparison between each of the courses
    for day in courseTimes:
        overlaps[day] = []  # may have different number of overlaps on different days; keep days separate
        for courseTime in courseTimes[day]:
            overlappingCourses = []  # list of courses that are overlapping with courseTime
            for compareTime in courseTimes[day]:  # compare courseTime to all other courses in that day
                if courseTime != compareTime:
                    # If compareTime starts before courseTime ends and compareTime starts after courseTime starts or
                    # if compareTime ends after courseTime starts and compareTime starts before courseTime starts
                    if (compareTime["start"] < courseTime["end"] and compareTime["start"] >= courseTime["start"]) \
                    or (compareTime["end"] > courseTime["start"] and compareTime["start"] <= courseTime["start"]):
                        # courseTime & compareTime are overlapping, append them to a list
                        if courseTime["course"] not in overlappingCourses:
                            overlappingCourses.append(courseTime["course"])
                        if compareTime["course"] not in overlappingCourses:
                            overlappingCourses.append(compareTime["course"])
            overlaps[day].append(overlappingCourses)

    # set the position field of overlapping courses
    for day in overlaps:
        for overlapList in overlaps[day]:
            for i in range(0, len(overlapList)):
                if 321/len(overlapList) < overlapList[i].position[day]["width"]:
                    # we only do this if it makes the course narrower (course has to be as narrow as required & not any wider)
                    overlapList[i].position[day]["width"] = 321/len(overlapList)
                    overlapList[i].position[day]["left"] = (321/len(overlapList))*i  # relative position from left

# Calculates the amount of minutes from 8:00am to the start time of a class
# Parameters:
#   startTime - time the class starts. String in 24 hour clock notation (eg: "18:34")
# Returns:
#   minutesFromEight - amount of minutes from 8:00am to startTime
def calcMinutes(startTime):
    colonIndex = startTime.find(":")
    assert colonIndex != -1, "Error in start time, ensure the Excel file is properly formatted in the Hrs From column"
    hours = int(startTime[:colonIndex])
    minutes = int(startTime[colonIndex + 1:])
    return (hours*60 + minutes) - 8*60

# Calculates the amount of minutes long a class is, rounded to the nearest 30 minutes
# Parameters:
#   startTime - time the class starts. String in 24 hour clock notation (eg: "8:00")
#   endTime - time the class starts. String in 24 hour clock notation (eg: "21:04")
# Returns:
#   roundedTime - amount of minutes from startTime to endTime, rounded to the nearest 30 minutes
def calcClassDuration(startTime, endTime):
    startColonIndex = startTime.find(":")
    endColonIndex = startTime.find(":")
    assert startColonIndex != -1, "Error in start time, ensure the Excel file is properly formatted in the Hrs From column"
    assert endColonIndex != -1, "Error in end time, ensure the Excel file is properly formatted in the Hrs To column"

    startHours = int(startTime[:startColonIndex])
    startMinutes = int(startTime[startColonIndex + 1:])
    startTime = startHours*60 + startMinutes

    endHours = int(endTime[:endColonIndex])
    endMinutes = int(endTime[endColonIndex + 1:])
    endTime = endHours*60 + endMinutes

    actualTime = endTime - startTime

    # rounding actualTime to the nerest 30 minutes
    if actualTime % 30 >= 15:
        # round up
        roundedTime = actualTime + (30 - (actualTime % 30))
    else:
        # round down
        roundedTime = actualTime - (actualTime % 30)

    return roundedTime

# Function that constructs a course div
# Parameters:
#   soup - soup object, used to create HTML tags 
#   courseID - ID of the course being placed (str)
#   minutesFromEight - minutes from 8:00am to start of class
#   minutesLong - length in minutes of class, rounded to the nearest 30 minutes
# Returns:
#   courseDiv - HTML tag for the container of the course
def createCourseDiv(soup, courseID, minutesFromEight, minutesLong):
    # adjustmentFactor helps format vertical position of courses
    adjustmentFactor = -2
    if minutesFromEight == 0:
        # course starts at 8:00am
        adjustmentFactor = -5
    if (minutesFromEight % 60 == 30) and (minutesLong % 60 != 30):
        # course starts at X:30 (8:30, 9:30, etc.) and is n hours long, i.e., it is an integer number of hours long
        adjustmentFactor = 0
    if (minutesFromEight % 60 == 0) and (minutesLong % 60 == 30):
        # course starts at X:00 (8:00, 9:00, etc.) and is Y hours and 30 minutes long (1 hour & 30 mins, 2 hours & 30 mins, etc.)
        adjustmentFactor = 2
    classStr = "course tooltip"
    return soup.new_tag("div", attrs={"class":classStr,
                                        "id": courseID,
                                        "ng-click":courseID+"Listener()",
                                        "ng-right-click":courseID+"RCListener()",
                                        "style":"height:" + str((135.35/60)*minutesLong + adjustmentFactor) + "px"})

# Function that constructs the course description tooltip for a regular course
# Parameters:
#   soup - soup object used to create HTML tags
#   course - course object 
#   courseDisc - course disc HTML tag
def formatCourseDescriptionForRegular(soup, course, courseDisc):
    # formatting title in course description
    courseTitle = soup.new_tag("b", attrs={"class":"descriptiontitle"})
    courseTitle.append(course.plainName + " (" + course.sect + ")" + " - " + course.descr)

    # adding line seperating title and description
    courseLine = soup.new_tag("hr", attrs={"class":"descriptionline"})

    # adding number of credits
    courseCredits = soup.new_tag("p", attrs={"class":"descriptioncredits"})
    courseCredits.append(html.unescape("&#9733 ") + course.maxUnits + " ")

    # adding fee index
    # courseFeeIndex = soup.new_tag("i", attrs={"class":"descriptionfeeindex"})
    # courseFeeIndex.append("(" + "fi " + course.calc_fee_index + ")" + " ")

    # adding term avail 
    courseTermAvail = soup.new_tag("p", attrs={"class":"descriptionavailability"})
    courseTermAvail.append("(" + course.duration + ", ")

    # adding alpha hours
    courseAlphaHours = soup.new_tag("p", attrs={"class":"descriptionalphahours"})
    courseAlphaHours.append(course.approvedHrs.lower() + ")" + " ")

    # adding desc
    courseDescription = soup.new_tag("p", attrs={"class":"fulldescription"})
    courseDescription.append(course.calendarDescr)

    # adding instructor
    courseInstructorName = soup.new_tag("p", attrs={"class":"instructorname"})
    courseInstructorName.append("Instructor Name: " + course.instructorName)
    courseInstructorEmail = soup.new_tag("p", attrs={"class":"instructoremail"})
    courseInstructorEmail.append("Instructor Email: " + course.email)

    # adding location
    courseLocation = soup.new_tag("div", attrs={"class":"location"})
    coursePlace = soup.new_tag("span", attrs={"class":"place"})
    coursePlace.append("Location: " + course.location)
    courseBuilding = soup.new_tag("span", attrs={"class":"building"})
    courseBuilding.append("Building: " + course.place)
    courseLocation.append(coursePlace)
    courseLocation.append(courseBuilding)

    # adding time
    courseTime = soup.new_tag("div", attrs={"class":"coursetime"})
    courseStart = soup.new_tag("span", attrs={"class":"starttime"})
    courseStart.append("From: " + course.hrsFrom)
    courseEnd = soup.new_tag("span", attrs={"class":"endtime"})
    courseEnd.append("To: " + course.hrsTo)
    courseTime.append(courseStart)
    courseTime.append(courseEnd)

    # adding enrolled info
    courseEnrolled = soup.new_tag("div", attrs={"class":"enrolled"})
    courseEnrolled.append(course.totEnrl + " enrolled out of " + course.capEnrl + " total seats")

    # appending info to disc tag
    courseDisc.append(courseTitle)
    courseDisc.append(courseLine)
    courseDisc.append(courseCredits)
    # courseDisc.append(courseFeeIndex)
    courseDisc.append(courseTermAvail)
    courseDisc.append(courseAlphaHours)
    courseDisc.append(courseDescription)
    courseDisc.append(courseInstructorName)
    courseDisc.append(courseInstructorEmail)
    courseDisc.append(courseLocation)
    courseDisc.append(courseTime)
    courseDisc.append(courseEnrolled)

# Appends courseContDiv to all of the days that course occurs on, 
# sets the width & relative position based on Course object fields
# Parameters:
#   tagsList - list of HTML tags of days we need to append to. Every day the course
#   occurs on, that day's tag will appear in this list
#   courseContDiv - container for an entire course, everything to do with one course is in this div
#   Values as another dict with "width" & "left" keys used to format the course
#   plan - name of the current plan
#   term - name of the current term
#   startTime - start time for course
#   courseLength - length of course in minutes
#   controller - file handle for controller.js
def appendToEachDay(tagsList, courseContDiv, plan, term, startTime, courseLength, controller):
    for dayTag in tagsList:
        # if the course occurs on multiple days, append to each dayDiv (mondayDiv, tuesdayDiv, etc.)
        if dayTagInLateWeek(dayTag) and ("class=\"tooltiptextright\"") in str(courseContDiv):
            # if course on thursday or friday, move tooltip to left of course (so not off page)
            courseContDiv.find(class_="tooltiptextright")["class"] = "tooltiptextleft"
        newDiv = deepcopy(courseContDiv)

        # determining which day we are placing on (should only be one)
        day = ""
        if "class=\"monday\"" in str(dayTag):
            day = "monday"
        elif "class=\"tuesday\"" in str(dayTag):
            day = "tuesday"
        elif "class=\"wednesday\"" in str(dayTag):
            day= "wednesday"
        elif "class=\"thursday\"" in str(dayTag):
            day = "thursday"
        elif "class=\"friday\"" in str(dayTag):
            day = "friday"

        if day != "":  # guard, every course should have a day
            newDiv.find(class_="course tooltip")["id"] += "-" + day  # id should be unique identifier, different for each day

            objectName = "$scope.coursesobj." + cleaner.cleanString(plan) + "." + cleaner.cleanString(term) + "." + day + "."  + newDiv.find(class_="course tooltip")["id"].replace("-", "_")
            controller.write(objectName + " = {};\n")
            controller.write(objectName + ".courseID = \"" + newDiv.find(class_="course tooltip")["id"].replace("-", "_") + "\";\n")
            controller.write(objectName + ".start = \"" +  str(startTime) + "\";\n")
            controller.write(objectName + ".end = \"" + str(startTime + courseLength) + "\";\n")
            controller.write(objectName + ".width = 321;\n")
            controller.write(objectName + ".left = 0;\n")
            controller.write(objectName + ".enabled = false;\n")

        dayTag.append(newDiv)

# Checks if a dayTag is late in the week (thursday or friday)
# Parameters:
#   dayTag - HTML tag for a day
# Returns:
#   boolean - True if dayTag is for thursday or friday, False otherwise
def dayTagInLateWeek(dayTag):
    if "class=\"thursday\"" in str(dayTag):
        return True
    elif "class=\"friday\"" in str(dayTag):
        return True
    else:
        return False
