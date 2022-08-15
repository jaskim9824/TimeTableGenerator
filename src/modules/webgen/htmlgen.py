# Authors: Jason Kim, Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to generate the
# HTML elements of the TimeTable webpage

# Dependencies: cleaner, html, copy, coursegroupparsing

from .. import cleaner
import html
from copy import deepcopy
from ..parsing.coursegroupparsing import CourseGroupOption

# Changes the header title to include deptName, which is entered
# by the user in the GUI
# Parameters:
#   titleTag - "site-title" HTML tag at the top of the page
#   topTitleTag - title appearing as name of tab
#   deptName - department name pulled from Sequencing Excel file
def switchTitle(titleTag, topTitleTag, deptName):
    titleTag.append(deptName + " Timetable")
    topTitleTag.append(deptName + " Timetable")

# Places the radio inputs for selecting the current plan
# Parameters:
#   plan - name of the plan being placed
#   optionDict - dict that holds all the options present in a term
#   planTag - form HTML tag where the plan radio inputs will be placed
#   soup - soup object, used to create HTML tags
def placeRadioInputsforPlan(plan, optionDict, planTag, soup):
    # name of first term in current plan
    firstTermInPlan = cleaner.cleanString((list(optionDict[plan].keys()))[0])
    # radio inputs for selecting plan, can ng-model directly to selectedPlan
    radioInput = soup.new_tag("input", attrs={"ng-change":"render(\"" + firstTermInPlan + "\")",
                                                  "type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"selectedPlan",
                                                  "value": cleaner.cleanString(plan),
                                                  "id": cleaner.cleanString(plan)})
    # generating label for input
    labelTag = soup.new_tag("label", attrs={"for":cleaner.cleanString(plan)})
    labelTag.append(plan)
    planTag.append(radioInput)
    planTag.append(labelTag)
    breakTag = soup.new_tag("br")
    planTag.append(breakTag)

# Places the radio inputs for selecting the current term
# Parameters:
#   termTag - div HTML tag where the term radio inputs will be placed
#   planWrapper - div HTML tag that displays only if a certain plan is selected
#   plan - name of the plan being placed
#   term - name of the term being placed
#   soup - soup object, used to create HTML tags
def placeRadioInputsForTerm(termTag, planWrapper, plan, term, soup):
    # radio input for selecting term
    radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":cleaner.cleanString(plan) + "termselector", 
                                                  "ng-model":"selectedTerm",
                                                  "ng-change":"render(\"" + cleaner.cleanString(term) + "\")",
                                                  "value": cleaner.cleanString(term),
                                                  "id": cleaner.cleanString(term)})
    # generating label for input
    labelTag = soup.new_tag("label", attrs={"for": cleaner.cleanString(term)})
    labelTag.append(term)
    planWrapper.append(radioInput)
    planWrapper.append(labelTag)
    breakTag = soup.new_tag("br")
    planWrapper.append(breakTag)
    termTag.append(planWrapper)

# Function that places the inputs into the form which controls
# what is displayed on the webpage
# Parameters:
#   planTag - form HTML tag where the plan radio inputs will be placed
#   termTag - div HTML tag where the term radio inputs will be placed
#   inputWrapper - div HTML tag that holds inputs for course sections, course groups and 
#   OR courses
#   optionDict - dict that holds all the options present in a term
#   seqDict - dict that contains the sequence information
#   hexcolorlist - list of hex color codes for distinguishing between courses
#   soup - soup object, used to create HTML tags
def placeInputs(planTag, termTag, inputWrapper, optionDict, seqDict, hexcolorlist, soup):
    # placing plan and term title above radio inputs
    planHeader = soup.new_tag("h3", attrs={"class":"planheader"})
    planHeader.append("Plans")
    planTag.append(planHeader)

    termHeader = soup.new_tag("h3", attrs={"class":"termheader"})
    termHeader.append("Terms")
    termTag.append(termHeader)

    for plan in optionDict:
        placeRadioInputsforPlan(plan, optionDict, planTag, soup)
        planWrapper = soup.new_tag("div", attrs={"ng-switch-when": cleaner.cleanString(plan)})
        for term in optionDict[plan]:
            placeRadioInputsForTerm(termTag, planWrapper, plan, term, soup)

            # div to switch course sections displayed for a given plan & term
            wrapperDiv = soup.new_tag("div", attrs={"ng-switch-when": cleaner.cleanString(plan) + cleaner.cleanString(term)})
            # table helps to align things easily
            courseSectionWrapper = soup.new_tag("table", attrs={"class":"coursesections"})
            courseSectionRow = soup.new_tag("tr")
            courseSectionData = soup.new_tag("td")
            courseSectionHeader = soup.new_tag("h3", attrs={"class":"sectionsheader"})
            courseSectionHeader.append("Course Sections")
            courseSectionData.append(courseSectionHeader)
            courseSectionRow.append(courseSectionData)
            courseSectionWrapper.append(courseSectionRow)
            colorCount = 0
            # dropdownsRow contains all of the section dropdown menus
            dropdownsRow = soup.new_tag("tr", attrs={"class":"dropdownsrow"})
            for course in seqDict[plan][term]:
                # guard to prevent index out of range of hexcolorlist
                if colorCount >= len(hexcolorlist):
                    colorCount = 0

                if len(course) == 1 and type(course[0]) != type([]):
                    # Case: course is not in a course group
                    sectionWrapper = soup.new_tag("td", attrs={"class":"dropdownsforcourse"})
                    compDict= {}
                    for section in course[0].sections:
                        # create a dropdown option for each section in a course
                        sectionRadio = soup.new_tag("option", attrs={"value": str(section),
                                                                     "id": str(section)})
                        sectionRadio.append(str(section))

                        if section.component not in compDict:
                            compDict[section.component] = soup.new_tag("select", attrs={"ng-change":"render()",
                                                                    "name":cleaner.cleanString(plan) + 
                                                                            cleaner.cleanString(term)+
                                                                            cleaner.cleanString(str(course[0])),
                                                                    "ng-model":cleaner.cleanString(plan) + 
                                                                            cleaner.cleanString(term) +
                                                                            "obj."+
                                                                            cleaner.cleanString(str(course[0])) + section.component,
                                                                    "style":"background:" + hexcolorlist[colorCount] + ";",
                                                                    "class":"sectiondropdown"})
                        compDict[section.component].append(sectionRadio)
                    # fill in title and "ALL" options
                    compKeys = ["LEC", "SEM", "LAB"]
                    for comp in compKeys:
                        if comp in compDict:
                            # title above  
                            sectionWrapper.append(str(course[0]) + " (" + comp  + ")")
                            breakTag = soup.new_tag("br")
                            sectionWrapper.append(breakTag)

                            # ALL option
                            sectionRadio = soup.new_tag("option", attrs={"value": "ALL",
                                                                        "id":"ALL"})
                            sectionRadio.append("ALL")
                            compDict[comp].append(deepcopy(sectionRadio))

                            sectionWrapper.append(compDict[comp])
                            breakTag = soup.new_tag("br")
                            sectionWrapper.append(breakTag)
                    dropdownsRow.append(sectionWrapper)

                elif len(course) > 1 and type(course[0]) == type([]):
                    # Case: course is in a course group
                    for opt in course:
                        if len(opt) != 2:
                            # opt[0] should always hold courseSectionWrapper, 
                            # opt[1] should hold name of course group (2A, 4B, etc.)
                            continue
                        else:
                            sectionWrapper = soup.new_tag("td", attrs={"ng-if":cleaner.cleanString(plan) + 
                                                                           cleaner.cleanString(term)+
                                                                           "obj."+
                                                                           "group"+
                                                                           opt[-1][0] + 
                                                                           "==\"" + 
                                                                           opt[-1] + 
                                                                           "\"",
                                                                           "class":"dropdownsforcourse"})
                            compDict= {}
                            for section in opt[0].sections:
                                # create a dropdown option for each section in a course 
                                sectionRadio = soup.new_tag("option", attrs={"value": str(section),
                                                                             "id": str(section)})
                                sectionRadio.append(str(section))

                                if section.component not in compDict:
                                    compDict[section.component] = soup.new_tag("select", attrs={"ng-change":"render()",
                                                                            "name":cleaner.cleanString(plan) + 
                                                                                    cleaner.cleanString(term)+
                                                                                    cleaner.cleanString(str(opt[0])),
                                                                            "ng-model":cleaner.cleanString(plan) + 
                                                                                    cleaner.cleanString(term) +
                                                                                    "obj."+
                                                                                    cleaner.cleanString(str(opt[0])) + 
                                                                                    section.component + 
                                                                                    "__cgoption" +
                                                                                    opt[-1],
                                                                            "style":"background:" + hexcolorlist[colorCount] + ";",
                                                                            "class":"sectiondropdown"})
                                compDict[section.component].append(sectionRadio)
                            # fill in title and "ALL" option
                            compKeys = ["LEC", "SEM", "LAB"]
                            for comp in compKeys:
                                if comp in compDict:
                                    # title above  
                                    sectionWrapper.append(str(section) + " (" + comp  + ")")
                                    breakTag = soup.new_tag("br")
                                    sectionWrapper.append(breakTag)

                                    # ALL option
                                    sectionRadio = soup.new_tag("option", attrs={"value": "ALL",
                                                                                "id":"ALL"})
                                    sectionRadio.append("ALL")
                                    compDict[comp].append(deepcopy(sectionRadio))

                                    sectionWrapper.append(compDict[comp])
                                    breakTag = soup.new_tag("br")
                                    sectionWrapper.append(breakTag)
                            dropdownsRow.append(sectionWrapper)
                colorCount += 1

            # Generating div to wrap course group radio inputs
            courseGroupWrapperDiv = soup.new_tag("div")
            courseGroupHeader = soup.new_tag("h3", attrs={"class": "coursegroupsheader"})
            courseGroupWrapperDiv.append(courseGroupHeader)
            # Generating div to wrap OR course radio inputs
            ORCourseWrapperDiv = soup.new_tag("div")
            ORCourseHeader = soup.new_tag("h3")
            ORCourseWrapperDiv.append(ORCourseHeader)
            # Flags to check for OR and course groups 
            courseGroupsPresent = False
            ORCourseCoursesPresent = False
            for course in optionDict[plan][term]:
                if type(course) == type(CourseGroupOption()):
                    courseGroupsPresent = True
                    # Case: course is for a course group option
                    courseGroupWrapper = soup.new_tag("div", attrs={"id":course.getOptionName()})

                    # for each course group option, add a radio button
                    createCourseGroupRadioButtons(course, plan, term, courseGroupWrapper, courseGroupWrapperDiv, soup)
                            
                else:
                    # Case: course is for OR courses
                    ORCourseCoursesPresent = True
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
                            sectionWrapper = soup.new_tag("td", attrs={"ng-if":"(" + cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.parentCourseGroup[0] + "=="
                                                                               + course.parentCourseGroup + ")" + 
                                                                               "& (" +
                                                                               cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName() + "==" + 
                                                                               option + ")",
                                                                               "class":"dropdownsforcourse"})
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
                                sectionRadio.append(str(section) + " (" + section.component + ")")
                                sectionSelectWrapper.append(sectionRadio)
                            sectionRadio = soup.new_tag("option", attrs={"value": "ALL",
                                                                         "id":"ALL"})
                            sectionRadio.append("ALL")
                            sectionSelectWrapper.append(sectionRadio)
                            sectionWrapper.append(sectionSelectWrapper)
                            sectionWrapper.append(sectionSelectWrapper)
                            dropdownsRow.append(sectionWrapper)    
                            labelTag.append(option)
                            optionWrapper.append(optionRadio)
                            optionWrapper.append(labelTag)
                        optionOutsideWrapper.append(optionWrapper)
                        ORCourseWrapperDiv.append(optionOutsideWrapper)
                            
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
                            sectionWrapper = soup.new_tag("td", attrs={"ng-if":cleaner.cleanString(plan) + 
                                                                               cleaner.cleanString(term) +
                                                                               "obj."+
                                                                               course.getOptionName() +
                                                                               "==" + option,
                                                                               "class":"dropdownsforcourse"})
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
                                labelTag.append(str(section) + " (" + section.component + ")")
                                sectionWrapper.append(sectionRadio)
                                sectionWrapper.append(labelTag)
                            dropdownsRow.append(sectionWrapper)                                             
                            labelTag = soup.new_tag("label", attrs={"for":option})
                            labelTag.append(option)
                            optionWrapper.append(optionRadio)
                            optionWrapper.append(labelTag)
                        ORCourseWrapperDiv.append(optionWrapper)

            courseSectionWrapper.append(dropdownsRow)
            wrapperDiv.append(courseSectionWrapper)
            # Only add header if OR courses or course groups present
            if ORCourseCoursesPresent:
                ORCourseHeader.append("Switchable Courses")
            if courseGroupsPresent:
                courseGroupHeader.append("Course Groups")
            wrapperDiv.append(courseGroupWrapperDiv)
            wrapperDiv.append(ORCourseWrapperDiv)
            inputWrapper.append(wrapperDiv)

# Creates the radio buttons for switching between course group options
# Parameters:
#   course - object holding all course group options
#   plan - name of the plan currently being placed
#   term - name of the term currently being placed
#   courseGroupWrapper - html div holding radio options within one course group
#   courseGroupWrapperDiv - html div holding all courseGroupWrappers (if more than one course group)
#   soup - soup object, used to create HTML tags
def createCourseGroupRadioButtons(course, plan, term, courseGroupWrapper, courseGroupWrapperDiv, soup):
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
    courseGroupWrapperDiv.append(courseGroupWrapper)

# Function that places the outer divs representing each plan and each term
# Parameters:
#   displayTag - HTML tag representing outer display div where the different plan sequences are placed
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   hexcolorlist - list of hex color codes for distinguishing between courses
#   soup - soup object, used to create HTML tags
#   controller - file handle for controller.js
def placePlanDivs(displayTag, sequenceDict, hexcolorlist, soup, controller):
    controller.write("$scope.coursesobj = {};\n")  # initializing objects as empty dicts
    for plan in sequenceDict:
        controller.write("$scope.coursesobj." + cleaner.cleanString(plan) + " = {};\n")  # initializing objects as empty dicts
        for term in sequenceDict[plan]:
            # initializing objects as empty dicts
            controller.write("$scope.coursesobj." + cleaner.cleanString(plan) + "." + cleaner.cleanString(term) + " = {};\n")
            # placing the div to hold timetable
            switchInput = soup.new_tag("div", attrs={"id":cleaner.cleanString(plan) + cleaner.cleanString(term),
                                                    "ng-show":"selectedPlan+selectedTerm == \"" + cleaner.cleanString(plan) + cleaner.cleanString(term) + "\"",
                                                    "style":"height:fit-content; display:flex; flex-direction:row; flex-wrap:column;"})
            placeTermDivs(switchInput, sequenceDict[plan], soup, plan, term, hexcolorlist, controller)
            displayTag.append(switchInput)

# Function that places the column divs which represent the terms within a certain plan
# Parameters:
#   planTag - HTML tag representing the plan sequence in question
#   planDict - dict that maps a course list to each term in the plan
#   soup - soup object, used to create HTML tags
#   plan - name of plan whose terms are being placed
#   term - name of the term whose courses are being placed
#   hexcolorlist - list of hex color codes for distinguishing between courses
#   controller - file handle for controller.js
def placeTermDivs(planTag, planDict, soup, plan, term, hexcolorlist, controller):
    termDiv = soup.new_tag("div", attrs={"class":"coursegrid"})  # grid of flexboxes that displays timetable

    timeDiv = createTimeGridDivs(soup)  # writes text for each hour & draws horizontal dividing lines
    termDiv.append(timeDiv)

    # creating the flexboxes for each day of week
    daysTagsDict = createDailyDivs(plan, term, soup, controller)

    # placing courses on mondayDiv, tuesdayDiv, etc. then appending to termDiv
    placeCourses(daysTagsDict, planDict[term], soup, plan, term, hexcolorlist, controller)
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

        # 1 hour = 50 pixels. Initial value 24.5 aligns times to the rest of the grid
        timeDiv.append(soup.new_tag("hr", attrs={"class":"horizontaldivider", 
                                "style":"position:absolute; top:" + str(24+50*(i - 8) + adjustmentFactor) + "px"}))
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
            # placing the horizontal dividing lines, 1 hr = 50 px, 22.15 is to align to the rest of the grid
            currentDiv.append(soup.new_tag("hr", attrs={"class":"horizontaldivider", 
                                                    "style":"position:absolute; top:" + str(22.15+50*i) + "px"}))
            daysTagsDict[day.lower()] = currentDiv

    return daysTagsDict

# Function that places the course divs within a certain term column of a certain plan
# This is the main function in htmlgen as it places each course on the page
# Parameters:
#   daysTagsDict - dict mapping day of week ("monday", "tuesday", etc.) to the div
#   for that day of the week. Useful to shortcut to the div one requires
#   termList - list of courses being taken that term
#   soup - soup object, used to create HTML tags
#   plan - name of plan whose courses are being placed
#   term - name of term whose courses are being placed
#   hexcolorlist - list of hex color codes for distinguishing between courses
#   controller - file handle for controller.js
def placeCourses(daysTagsDict, termList, soup, plan, term, hexcolorlist, controller):
    colorCount = 0
    for courseWrapperList in termList:

        # checking if this is an OR case
        orCase = False
        if len(courseWrapperList) > 2 and type(courseWrapperList[0]) != type([]):
            orCase = True
            orName = ""
            for courseWrapper in courseWrapperList:
                orName += courseWrapper.name

        for courseWrapper in courseWrapperList:
            # guard to prevent index out of range of hexcolorlist
            if colorCount >= len(hexcolorlist):
                colorCount = 0

            if (type(courseWrapper) == type([])):
                # Case: courseWrapper is for a course group
                orCase = False
                courseGroupSubName = courseWrapper[-1]
                courseGroupCourseList = courseWrapper[:-1]
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
                        if minutesFromEight < 0:  # if class starts before 8, don't place it
                            continue
                        minutesLong = calcClassDuration(section.hrsFrom, section.hrsTo)  # duration of class
                        # save the tags we will need to append to for later
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

                         # courseContDiv = outer course container used for absolute vertical positioning
                        if orCase:
                            # ng-show requires additional condition for OR case
                            # (that the corresponding radio button is selected)
                            courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer", 
                                                           "style":"position:absolute; top:" + 
                                                           str(24 + (50/60)*minutesFromEight) + 
                                                           "px; height:" + 
                                                           str((50/60)*minutesLong) + 
                                                           "px",
                                                           "ng-show":"("+cleaner.cleanString(plan)+
                                                           cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(course))+
                                                           section.component+ 
                                                           "__cgoption"+courseGroupSubName
                                                           +"==\""+str(section)+"\" ||"+
                                                           cleaner.cleanString(plan)+
                                                           cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(course))+
                                                           section.component+
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
                                                           str(24 + (50/60)*minutesFromEight) + 
                                                           "px; height:" + 
                                                           str((50/60)*minutesLong) + 
                                                           "px",
                                                           "ng-show":"("+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+cleaner.cleanString(str(course))+
                                                           section.component+"__cgoption"+courseGroupSubName
                                                           +"==\""+str(section)+"\""+"||"+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(course))+section.component+"__cgoption"+courseGroupSubName+"==\"ALL\")"
                                                           +"&&"+
                                                           cleaner.cleanString(plan)
                                                           +cleaner.cleanString(term)+
                                                           "obj.group"+
                                                           courseGroupName+
                                                           "=="+
                                                           "\""+
                                                           courseGroupSubName+
                                                           "\""})
                        
                        # courseDisc = text description which appears on hover
                        courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                        "class":"tooltiptextright"})

                        # courseDiv = container for course, width & position determined in
                        # JS if there is an overlap
                        courseDiv = createCourseDiv(soup,
                                                    courseID, 
                                                    minutesLong,
                                                    hexcolorlist[colorCount]) 
                        formatCourseDescriptionForRegular(soup, section, courseDisc)

                        # text appearing in course box (eg: CHEM 103)
                        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
                        courseHeader.append(section.plainName + " (" + section.sect + ")")

                        courseDiv.append(courseHeader)
                        courseDiv.append(courseDisc)

                        courseContDiv.append(courseDiv)
                        # need to append courseContDiv to each day that course occurs on
                        appendToEachDay(tagsList, courseContDiv, plan, term, minutesFromEight, minutesLong, section.component, controller)
 
            elif type(courseWrapper) == type([]) and len(courseWrapper) == 1:
                # Case: courseWrapper is for an elective, not used in timetable
                continue
            
            else:
                # Case: courseWrapper is for a regular course (not in course group, not an elective)
                for course in courseWrapper.sections:
                    tagsList = []
                    minutesFromEight = calcMinutes(course.hrsFrom)  # minutes from 8:00 to start of class
                    if minutesFromEight < 0:  # if class starts before 8, don't place it
                        continue
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

                    # courseContDiv = outer course container used for absolute vertical positioning
                    if orCase:
                        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer", 
                                                           "style":"position:absolute; top:" + 
                                                           str(24 + (50/60)*minutesFromEight) + 
                                                           "px; height:" + 
                                                           str((50/60)*minutesLong) + 
                                                           "px",
                                                           "ng-show":"("+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+cleaner.cleanString(str(courseWrapper))+
                                                           course.component+"==\""+str(course)+"\""+"||"+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(courseWrapper))+course.component+"==\"ALL\")"+
                                                           "&&"+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+
                                                           orName+"==\""+str(courseWrapper)+"\""})
                    else:
                        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer", 
                                                           "style":"position:absolute; top:" + 
                                                           str(24 + (50/60)*minutesFromEight) + 
                                                           "px; height:" + 
                                                           str((50/60)*minutesLong) + 
                                                           "px",
                                                           "ng-show":cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+cleaner.cleanString(str(courseWrapper))+
                                                           course.component+"==\""+str(course)+"\""+"||"+cleaner.cleanString(plan)+cleaner.cleanString(term)+"obj."+
                                                           cleaner.cleanString(str(courseWrapper))+course.component+"==\"ALL\""})

                    # courseDisc = text description which appears on hover
                    courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                "class":"tooltiptextright"})

                    # courseDiv = container for course, width & position determined in
                    # JS if there is an overlap
                    courseDiv = createCourseDiv(soup,
                                            courseID, 
                                            minutesLong,
                                            hexcolorlist[colorCount]) 
                    formatCourseDescriptionForRegular(soup, course, courseDisc)

                    # text appearing in course box (eg: CHEM 103)
                    courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
                    courseHeader.append(course.plainName + " (" + course.sect + ")")

                    courseDiv.append(courseHeader)
                    courseDiv.append(courseDisc)

                    courseContDiv.append(courseDiv)
                    # need to append courseContDiv to each day that course occurs on
                    appendToEachDay(tagsList, courseContDiv, plan, term, minutesFromEight, minutesLong, course.component, controller)

        colorCount += 1

# Calculates the amount of minutes from 8:00am to the start time of a class
# Parameters:
#   startTime - time the class starts. String in 24 hour clock notation (eg: "18:34")
# Returns:
#   minutesFromEight - amount of minutes from 8:00am to startTime
def calcMinutes(startTime):
    colonIndex = startTime.find(":")
    if colonIndex == -1:
        raise ValueError("Error in start time, ensure the Excel file is properly formatted in the Hrs From column")
    hours = int(startTime[:colonIndex])
    minutes = int(startTime[colonIndex + 1:])
    return (hours*60 + minutes) - 8*60

# Calculates the amount of minutes long a class is, rounded to the nearest 30 minutes
# Parameters:
#   startTime - time the class starts. String in 24 hour clock notation (eg: "8:00")
#   endTime - time the class ends. String in 24 hour clock notation (eg: "21:04")
# Returns:
#   roundedTime - amount of minutes from startTime to endTime, rounded to the nearest 30 minutes
def calcClassDuration(startTime, endTime):
    startColonIndex = startTime.find(":")
    endColonIndex = endTime.find(":")
    if startColonIndex == -1:
        raise ValueError("Error in start time, ensure the Excel file is properly formatted in the Hrs From column")
    if endColonIndex == -1:
        raise ValueError("Error in end time, ensure the Excel file is properly formatted in the Hrs To column")

    # converting 24 hour string to int number of minutes
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
#   minutesLong - length in minutes of class, rounded to the nearest 30 minutes
#   courseColor - hex code for color of current course
# Returns:
#   courseDiv - HTML tag for the container of the course
def createCourseDiv(soup, courseID, minutesLong, courseColor):
    classStr = "course tooltip"
    return soup.new_tag("div", attrs={"class":classStr,
                                        "id": courseID,
                                        "style":"height:" + str((50/60)*minutesLong) + 
                                            "px; background-color:" + courseColor + ";"})

# Function that constructs the course description tooltip for a regular course
# Parameters:
#   soup - soup object used to create HTML tags
#   course - course object 
#   courseDisc - course disc HTML tag
def formatCourseDescriptionForRegular(soup, course, courseDisc):
    # formatting title in course description
    courseTitle = soup.new_tag("b", attrs={"class":"descriptiontitle"})
    courseTitle.append(course.plainName 
                     + " (" 
                     + course.sect 
                     + ")" 
                     + " - " 
                     + course.descr 
                     + " (" 
                     + course.component 
                     + ")")

    # adding line seperating title and description
    courseLine = soup.new_tag("hr", attrs={"class":"descriptionline"})

    # adding number of credits
    courseCredits = soup.new_tag("p", attrs={"class":"descriptioncredits"})
    courseCredits.append(html.unescape("&#9733 ") + course.maxUnits + " ")

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

    # adding accreditation info
    courseAccreditationHeader = soup.new_tag("b", attrs={"class":"accreditationheader"})
    courseAccreditationHeader.append("Accreditation Units")
    courseAccreditationUnits = soup.new_tag("div", attrs={"class":"accreditationunits"})
    for accredCat in course.accredUnits:
        if course.accredUnits[accredCat] != 0:  # only display if units are not zero
            courseAccreditationUnits.append(accredCat + ": " + str(course.accredUnits[accredCat]) + " Units\n")

    # appending info to disc tag
    courseDisc.append(courseTitle)
    courseDisc.append(courseLine)
    courseDisc.append(courseCredits)
    courseDisc.append(courseTermAvail)
    courseDisc.append(courseAlphaHours)
    courseDisc.append(courseDescription)
    courseDisc.append(courseInstructorName)
    courseDisc.append(courseInstructorEmail)
    courseDisc.append(courseLocation)
    courseDisc.append(courseTime)
    courseDisc.append(courseAccreditationHeader)
    courseDisc.append(courseAccreditationUnits)

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
#   component - LEC, LAB, or SEM to indicate component of this course
#   controller - file handle for controller.js
def appendToEachDay(tagsList, courseContDiv, plan, term, startTime, courseLength, component, controller):
    for dayTag in tagsList:
        # if course on thursday or friday, move tooltip to left of course (so not off page)
        if dayTagInLateWeek(dayTag) and courseContDiv.find(class_="tooltiptextright") is not None:
            courseContDiv.find(class_="tooltiptextright")["class"] = "tooltiptextleft"
        newDiv = deepcopy(courseContDiv)

        # determining which day we are placing on (should only be one)
        day = findDayOfDayTag(dayTag)
        
        # guard, every course should have a day
        if day != "":  
            # id should be unique identifier, different for each day
            newDiv.find(class_="course tooltip")["id"] += "-" + day  

            # setting JS object fields with appropriate values
            objectName = "$scope.coursesobj." + cleaner.cleanString(plan) + "." + cleaner.cleanString(term) + "." + day + "."  + newDiv.find(class_="course tooltip")["id"].replace("-", "_")
            controller.write(objectName + " = {};\n")
            controller.write(objectName + ".courseID = \"" + newDiv.find(class_="course tooltip")["id"].replace("-", "_") + "\";\n")
            controller.write(objectName + ".start = \"" +  str(startTime) + "\";\n")
            controller.write(objectName + ".end = \"" + str(startTime + courseLength) + "\";\n")
            controller.write(objectName + ".width = 311;\n")
            controller.write(objectName + ".left = 0;\n")
            controller.write(objectName + ".enabled = false;\n")
            controller.write(objectName + ".component = \"" + component + "\";\n")

        dayTag.append(newDiv)

# Checks if a dayTag is late in the week (thursday or friday)
# Parameters:
#   dayTag - HTML tag for a day
# Returns:
#   boolean - True if dayTag is for thursday or friday, False otherwise
def dayTagInLateWeek(dayTag):
    if "thursday" in dayTag["class"] or "friday" in dayTag["class"]:
        return True
    else:
        return False

# Finds the day of a certain day tag
# Parameters:
#   dayTag - HTML tag for a day
# Returns:
#   string - day of the week of the day tag, empty string if does not exist
def findDayOfDayTag(dayTag):
    if "monday" in dayTag["class"]:
        return "monday"
    elif "tuesday" in dayTag["class"]:
        return "tuesday"
    elif "wednesday" in dayTag["class"]:
        return "wednesday"
    elif "thursday" in dayTag["class"]:
        return "thursday"
    elif "friday" in dayTag["class"]:
        return "friday"
    else:
        return ""
