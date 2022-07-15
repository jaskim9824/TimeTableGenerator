# Authors: Jason Kim, Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to generate the required
# HTML elements to produce the MEC E Program Visualizer webpage

# Dependencies: cleaner, linegen, html

from distutils.command.clean import clean
import cleaner
import html
from copy import deepcopy

from coursegroupparsing import CourseGroupOption

# Changes the header title to include deptName, which is pulled
# from Sequncing Excel file
# Parameters:
#   titleTag - "site-title" HTML tag at the top of the page
#   topTitleTag - title appearing as name of tab
#   deptName - department name pulled from Sequencing Excel file
def switchTitle(titleTag, topTitleTag, deptName):
    titleTag.append(deptName + " Program Plan Visualizer")
    topTitleTag.append(deptName + " Visualizer")

# Function that places the radio inputs into the form which controls
# which plan is currently selected on the webpage
# Parameters:
#   formTag - form HTML tag where the plan radio inputs will be placed
#   termTag - div HTML tag where the term radio inputs will be placed
#   courseGroupTag - div HTML tag where the course group radio inputs will be placed
#   courseGroupDict - dict that maps the plans to the course groups in it
#   soup - soup object, used to create HTML tags
def placeRadioInputs(formTag, termTag, courseGroupTag, sequenceDict, soup):
    for plan in sequenceDict:
        # radio inputs for selecting plan, can ng-model directly to selectedPlan
        radioInput = soup.new_tag("input", attrs={"type":"radio", 
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

        planWrapper = soup.new_tag("div", attrs={"ng-switch-when": cleaner.cleanString(plan)})
        for term in sequenceDict[plan]:
            # ng-change used to update $scope.selectedTerm
            radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":cleaner.cleanString(plan) + "termselector", 
                                                  "ng-model":"selectedTerm",
                                                  "ng-change":"updateTerm(\"" + cleaner.cleanString(term) + "\")",
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
        
        # for courseGroupList in courseGroupDict[plan].values():
        #     # courseGroupList is a list fo course groups that go together (eg: ["2A", "2B"] or ["4A", "4B"])
        #     totalCourseGroup = "".join(courseGroupList)
        #     courseGroupWrapper = soup.new_tag("div", attrs={"id": "OR" + totalCourseGroup})
        #     for indivCourseGroup in courseGroupList:
        #         # indivCourseGroup is one of the options in a group (eg: "2A" or "3B")
        #         # ng-change used to update $scope.fieldX.groupX
        #         radioInput = soup.new_tag("input", attrs={"type":"radio", 
        #                                 "name":cleaner.cleanString(plan) + totalCourseGroup + "optionselector",
        #                                 "ng-model":"field" + indivCourseGroup[0] + ".group" + indivCourseGroup[0], 
        #                                 "ng-change": "updateField" + indivCourseGroup[0] + "(\"" + indivCourseGroup + "\")",
        #                                 "value":indivCourseGroup,
        #                                 "id":indivCourseGroup})
        #         labelTag = soup.new_tag("label", attrs={"for":indivCourseGroup})
        #         labelTag.append(indivCourseGroup)
        #         courseGroupWrapper.append(radioInput)
        #         courseGroupWrapper.append(labelTag)
        #         wrapperDiv.append(courseGroupWrapper)
            courseSectionWrapper = soup.new_tag("div")
            for course in sequenceDict[plan][term]:
                if type(course) == type(CourseGroupOption()):
                    # append to coursegroup form
                    courseGroupWrapper = soup.new_tag("div", attrs={"id":course.getOptionName()})
                    for option in course.options:
                        courseGroupRadio = soup.new_tag("input", attrs={"type":"radio",
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
                        optionOutsideWrapper.append(optionWrapper)
                        for option in course.options:
                            optionRadio = soup.new_tag("input", attrs={"type":"radio",
                                                                    "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term) + 
                                                                           course.getOptionName(),
                                                                    "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName(),
                                                                    "value": option.name,
                                                                    "id": option.name})
                            labelTag = soup.new_tag("label", attrs={"for":option.name})
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
                                                                               option.name + ")"})
                            sectionWrapper.append(option.name)
                            for section in option.sections:
                                sectionRadio = soup.new_tag("input", attrs={"type":"radio",
                                                                            "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term)+
                                                                           option.name,
                                                                           "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName()+
                                                                               option.name,
                                                                            "value": section.name,
                                                                            "id": section.name})
                                labelTag = soup.new_tag("label", attrs={"for":section.name})
                                labelTag.append(section.name)
                                sectionWrapper.append(sectionRadio)
                                sectionWrapper.append(labelTag)     
                            labelTag.append(option.name)
                            optionWrapper.append(optionRadio)
                            optionWrapper.append(labelTag)
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
                                                                    "value": option.name,
                                                                    "id": option.name})
                            sectionWrapper = soup.new_tag("div", attrs={"ng-if":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName() +
                                                                               "==" + option.name})
                            sectionWrapper.append(option.name)
                            for section in option.sections:
                                sectionRadio = soup.new_tag("input", attrs={"type":"radio",
                                                                            "name":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term)+
                                                                           option.name,
                                                                           "ng-model":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName()+
                                                                               option.name,
                                                                            "value": section.name,
                                                                            "id": section.name})
                                labelTag = soup.new_tag("label", attrs={"for":section.name})
                                labelTag.append(section.name)
                                sectionWrapper.append(sectionRadio)
                                sectionWrapper.append(labelTag)                                                
                            labelTag = soup.new_tag("label", attrs={"for":option.name})
                            labelTag.append(option.name)
                            optionWrapper.append(optionRadio)
                            optionWrapper.append(labelTag)
                        wrapperDiv.append(optionWrapper)
            courseGroupTag.append(wrapperDiv)

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
    return soup.new_tag("div", attrs={"class":"display",
                                      "ng-switch":switchVariable})

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
def placePlanDivs(displayTag, sequenceDict, soup):
    for plan in sequenceDict:
        for term in sequenceDict[plan]:
            switchInput = soup.new_tag("div", attrs={"id":cleaner.cleanString(plan) + cleaner.cleanString(term),
                                                    "ng-switch-when":cleaner.cleanString(plan) + cleaner.cleanString(term),
                                                    "style":"height:fit-content; display:flex; flex-direction:row; flex-wrap:column;"})
            placeTermDivs(switchInput, sequenceDict[plan], soup, plan, term)
            displayTag.append(switchInput)

# Function that places the column divs which represent the terms within a certain plan
# Parameters:
#   planTag - HTML tag representing the plan sequence in question
#   planDict - dict that maps a course list to each term in the plan
#   soup - soup object, used to create HTML tags
#   plan - name of plan whose terms are being placed
#   term - name of the term whose courses are being placed
def placeTermDivs(planTag, planDict, soup, plan, term):
    # wrapper that holds the number of each type of elective taken in this plan
    electiveCounterWrapper = {"ITS": 0, "PROG": 0, "COMP": 0}

    termDiv = soup.new_tag("div", attrs={"class":"coursegrid"})  # grid of flexboxes that displays timetable

    timeDiv = createTimeGridDivs(soup)  # writes text for each hour & draws horizontal dividing lines
    termDiv.append(timeDiv)

    # creating the flexboxes for each day of week
    daysTagsDict = createDailyDivs(soup)

    # placing courses on mondayDiv, tuesdayDiv, etc. then appending to termDiv
    placeCourses(daysTagsDict, planDict[term], soup, plan, electiveCounterWrapper)
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
        adjustmentFactor = 0
        if i > 8:
            adjustmentFactor = -2
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
#   soup - soup object, used to create HTML tags
# Returns:
#   daysTagsDict - dict mapping day of week ("monday", "tuesday", etc.) to the div
#   for that day of the week. Useful to shortcut to the div one requires
def createDailyDivs(soup):
    daysTagsDict = {}
    daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    for day in daysOfWeek:
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
#   electiveCountWrapper - dict mapping elective abbreviated name ("ITS", "PROG", "COMP")
#   to count of current ocurrence of that elective
def placeCourses(daysTagsDict, termList, soup, plan, electiveCountWrapper):
    courseGroupList = []  # list of courses (course objects) in a course group
    courseGroupTitle = ""  # name of the course group (eg: "Course group 2A")
    courseOrList = []
    hexcolorlist= ["033dfc", "fc0303", "ef8c2b", "0ccb01", "bd43fa", "e8e123"]
    for courseWrapperList in termList:
        for courseWrapper in courseWrapperList:
            for course in courseWrapper.sections:
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

                courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan)
                orCase = False
                lastOrCase = False
                if (course.calendarPrint == "or") or (course.calendarPrint == "lastor"):
                    orCase = True
                if (course.calendarPrint == "lastor"):
                    lastOrCase = True
                
                if course.courseGroup != "":
                    # add a wrapper container around course group
                    courseContDiv = soup.new_tag("div", attrs={"class":"coursegroupcontainer", "style":"outline-color:#" + hexcolorlist[int(course.courseGroup[0])]})
                    courseGroupTitle = soup.new_tag("p", attrs={"class":"coursegrouptitle"})
                    courseGroupTitle.append("Course Group " + course.courseGroup)
                else:
                    # not in a course group
                    adjustmentFactor = 0
                    if minutesFromEight != 0:
                        adjustmentFactor = -3
                    courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer", "style":"position:absolute; top:" + str(37 + (135.35/60)*minutesFromEight + adjustmentFactor) + "px; height:" + str((135.35/60)*minutesLong) + "px"})

                courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                "class":"tooltiptextright",
                                                "ng-click":"$event.stopPropagation()"})

                # Constructing course div, check for special cases
                if course.name == "Complementary Elective":
                    # Class allows formatting so words fit in course box
                    courseID = courseID+str(electiveCountWrapper["COMP"])
                    courseDiv = createCourseDiv(soup, courseID, orCase, minutesFromEight, minutesLong)
                    # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
                    courseDisc["id"] = courseDisc["id"][:-4] + str(electiveCountWrapper["COMP"]) + "desc"
                    electiveCountWrapper["COMP"] += 1
                    formatCourseDescriptionForElective(soup, course, courseDisc)

                elif course.name == "Program/Technical Elective":
                    # Class allows formatting so words fit in course box
                    courseID = courseID+str(electiveCountWrapper["PROG"])
                    courseDiv = createCourseDiv(soup, courseID, orCase, minutesFromEight, minutesLong)
                    # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
                    courseDisc["id"] = courseDisc["id"][:-4] + str(electiveCountWrapper["PROG"]) + "desc"
                    electiveCountWrapper["PROG"] += 1
                    formatCourseDescriptionForElective(soup, course, courseDisc)

                elif course.name == "ITS Elective":
                    courseID = courseID+str(electiveCountWrapper["ITS"])
                    # Class allows formatting so words fit in course box
                    courseDiv = createCourseDiv(soup, courseID, orCase, minutesFromEight, minutesLong)
                    # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
                    courseDisc["id"] = courseDisc["id"][:-4] + str(electiveCountWrapper["ITS"]) + "desc"
                    electiveCountWrapper["ITS"] += 1
                    formatCourseDescriptionForElective(soup, course, courseDisc)

                else:
                    # This is a regular course. All information should be available
                    courseDiv = createCourseDiv(soup, 
                                                courseID, 
                                                orCase,
                                                minutesFromEight,
                                                minutesLong) 
                    formatCourseDescriptionForRegular(soup, course, courseDisc)

                # text appearing in course box (eg: CHEM 103)
                courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
                courseHeader.append(course.plainName + " (" + course.sect + ")")

                courseDiv.append(courseHeader)
                courseDiv.append(courseDisc)

                skipAddCourseFlag = False  # if true, do not append course yet, we will get it on the next pass

                if orCase:
                    # If multiple course options, append the courseDiv to a list which we will append
                    # to the termTag after all options have been collected
                    courseOrList.append(courseDiv)
                    if termList.index(course) == (len(termList) - 1):
                        # last course in term is an OR course, need to append to termTag immediately
                        addOrCourses(courseOrList, course.courseGroup, courseGroupList, tagsList, soup)
                        skipAddCourseFlag = True  # we will append this course on the next pass since it is the 1st of 2 OR courses
                    if not lastOrCase:
                        continue
                    if lastOrCase and (courseOrList != []):
                        # last option out of OR courses
                        addOrCourses(courseOrList, course.courseGroup, courseGroupList, tagsList, soup)
                        continue

                if course.courseGroup != "":
                    # course is in a course group, need to append to courseGroupList
                    courseGroupList.append(courseDiv)
                    continue

                if not skipAddCourseFlag:
                    # the flag telling us to skip appending this course is not set, so append it
                    courseContDiv.append(courseDiv)
                    appendToEachDay(tagsList, courseContDiv)  # course may occur on multiple days, need to append to each day

            if courseGroupTitle != "":
                appendToEachDay(tagsList, courseContDiv)
            if courseGroupList != []:
                # A course group is involved. Append each course to the courseContDiv, then
                # append courseContDiv to any days for which that course occurs
                for i in range(0, len(courseGroupList)):
                    if i == (len(courseGroupList) - 1):
                        courseGroupList[i]["class"].append("lastcourseingroup")  # last course has no bottom margin
                    courseContDiv.append(courseGroupList[i])
                appendToEachDay(tagsList, courseContDiv)

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
#   orBool - boolean flag for OR cases, true if course is an OR case
#   minutesFromEight - minutes from 8:00am to start of class
#   minutesLong - length in minutes of class, rounded to the nearest 30 minutes
# Returns:
#   courseDiv - HTML tag for the container of the course
def createCourseDiv(soup, courseID, orBool, minutesFromEight, minutesLong):
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
    if orBool:
        # course is an OR case
        return soup.new_tag("div", attrs={"class":"orcourse tooltip",
                                            "id": courseID,
                                            "ng-click":courseID+"Listener()",
                                            "ng-right-click":courseID+"RCListener()",
                                            "style":"height:" + str((135.35/60)*minutesLong + adjustmentFactor) + "px"})
    else:
        # course is a regular (non-OR) case
        return soup.new_tag("div",attrs= {"class":"course tooltip", 
                                                "id": courseID, 
                                                "ng-click":courseID+"Listener()",
                                                "ng-right-click":courseID+"RCListener()",
                                                "style":"height:" + str((135.35/60)*minutesLong + adjustmentFactor) + "px"})

# Function that consturcts the course description tooltip for an elective
# Parameters:
#   soup - soup object used to create HTML tags
#   course - course object 
#   courseDisc - course disc (description box) HTML tag
def formatCourseDescriptionForElective(soup, course, courseDisc):
    # formatting title in course description
    courseTitle = soup.new_tag("b", attrs={"class":"descriptiontitle"})
    courseTitle.append(course.name)    

    courseLine = soup.new_tag("hr", attrs={"class":"descriptionline"})

    courseDescription = soup.new_tag("p", attrs={"class":"fulldescription"})
    courseDescription.append(course.course_description)
    
    courseDisc.append(courseTitle)
    courseDisc.append(courseLine)
    courseDisc.append(courseDescription)

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
    # courseTermAvail = soup.new_tag("p", attrs={"class":"descriptionavailability"})
    # courseTermAvail.append("(" + course.duration + ", ")

    # adding alpha hours
    courseAlphaHours = soup.new_tag("p", attrs={"class":"descriptionalphahours"})
    courseAlphaHours.append("(" + course.approvedHrs + ")" + " ")

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
    # courseDisc.append(courseTermAvail)
    courseDisc.append(courseAlphaHours)
    courseDisc.append(courseDescription)
    courseDisc.append(courseInstructorName)
    courseDisc.append(courseInstructorEmail)
    courseDisc.append(courseLocation)
    courseDisc.append(courseTime)
    courseDisc.append(courseEnrolled)

# Appends all courses in courseOrList to either termTag (if not in a course group) or to 
# courseGroupList (if in a course group)
# Parameters:
#   courseOrList - list of courseDivs of all courses to go into orcoursecontainer
#   courseGroup - course group of the current (last in OR case) course
#   courseGroupList - list of courseDivs to go into coursegroupcontainer
#   termTag - HTML tag representing the specfic term column in question
#   soup - soup object, used to create HTML tags
# Returns: termTag, courseOrList (cleared to be empty), courseGroupList
def addOrCourses(courseOrList, courseGroup, courseGroupList, tagsList, soup):
    courseOrContDiv = soup.new_tag("div", attrs={"class":"orcoursecontainer"})  # container for all OR courses
    for i in range(0, len(courseOrList)):
        courseOrContDiv.append(courseOrList[i])  # append each OR course
        if i < (len(courseOrList) - 1):
            # Add the word "or" between courses (except not after the last option)
            courseOr = soup.new_tag("p", attrs={"class":"ortext"})
            courseOr.append("OR")  # add the word or between course boxes
            courseOrContDiv.append(courseOr)
    if courseGroup:
        # if the OR courses were in a course group, append them to courseGroupList
        # which will in turn be appended to termTag later
        courseGroupList.append(courseOrContDiv)
    else:
        appendToEachDay(tagsList, courseOrContDiv)  # append to courseOrContDiv to each day it occurs on
    courseOrList = []  # reset in case multiple OR cases in a term

# Appends courseContDiv to all of the days that course occurs on
# Parameters:
#   tagsList - list of HTML tags of days we need to append to. Every day the course
#   occurs on, that day's tag will appear in this list
#   courseContDiv - container for an entire course, everything to do with one course is in this div
def appendToEachDay(tagsList, courseContDiv):
    for dayTag in tagsList:
        # if the course occurs on multiple days, append to each dayDiv (mondayDiv, tuesdayDiv, etc.)
        if dayTagInLateWeek(dayTag) and ("class=\"tooltiptextright\"") in str(courseContDiv):
            # if course on thursday or friday, move tooltip to left of course (so not off page)
            courseContDiv.find(class_="tooltiptextright")["class"] = "tooltiptextleft"
        dayTag.append(deepcopy(courseContDiv))

# Checks if a day is late in the week (thursday or friday)
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
