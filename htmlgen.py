# Authors: Jason Kim, Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to generate the required
# HTML elements to produce the MEC E Program Visualizer webpage

# Dependencies: cleaner, linegen, html

from operator import truediv
import cleaner
import html

# Function that generates the display div which holds the plan diagram
# Parameters:
#   soup - soup object, used to create HTML tags
#   courseGroupList - list of all possible course groups taken in this program
def generateDisplayDiv(soup, courseGroupList):
    switchVariable = "selectedPlan"
    formattedCourseGroupVar="field{number}.group{number}"
    for element in courseGroupList:
        switchVariable += "+" + formattedCourseGroupVar.format(number=element)
    return soup.new_tag("div", attrs={"class":"display",
                                      "ng-switch":switchVariable})

# Changes the header title to include deptName, which is pulled
# from Sequncing Excel file
# Parameters:
#   titleTag - "site-title" HTML tag at the top of the page
#   deptName - department name pulled from Sequencing Excel file
def switchTitle(titleTag, topTitleTag, deptName):
    titleTag.append(deptName + " Program Plan Visualizer")
    topTitleTag.append(deptName + " Visualizer")

# Places the legend for the categories of courses (math, basic sciences, design, etc.)
# Pulls the categories and colors from sequenceDict, which has these values as two of
# its attributes
# Parameters:
#   legendTag - HTML tag representing div which holds the category color legend
#   categoryDict - dict mapping category to colour
#   soup - soup object, used to create HTML tags
def placeLegend(legendTag, categoryDict, soup):
    placeLegendDescription(soup, legendTag)
    placeLegendButtons(soup, legendTag, categoryDict)


# Function that places the radio inputs into the form which controls
# which plan is currently selected on the webpage
# Parameters:
#   formTag - form HTML tag where the inputs will be placed
#   courseGroupDict - dict that maps the plans to the course groups in it
#   soup - soup object, used to create HTML tags
def placeRadioInputs(formTag, termTag, courseGroupTag, courseGroupDict, sequenceDict, soup):
    for plan in courseGroupDict:
        radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"obj.selectedPlan",
                                                  "value": cleaner.cleanString(plan),
                                                  "id": cleaner.cleanString(plan)})
        labelTag = soup.new_tag("label", attrs={"for":cleaner.cleanString(plan)})
        labelTag.append(plan)
        formTag.append(radioInput)
        formTag.append(labelTag)
        breakTag = soup.new_tag("br")
        formTag.append(breakTag)

    for plan in sequenceDict:
        planWrapper = soup.new_tag("div", attrs={"ng-switch-when": cleaner.cleanString(plan)})
        for term in sequenceDict[plan]:
            radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":"termselector", 
                                                  "ng-model":"obj.selectedTerm",
                                                  "value": cleaner.cleanString(term),
                                                  "id": cleaner.cleanString(term)})
            labelTag = soup.new_tag("label", attrs={"for": cleaner.cleanString(term)})
            labelTag.append(term)
            planWrapper.append(radioInput)
            planWrapper.append(labelTag)
            breakTag = soup.new_tag("br")
            planWrapper.append(breakTag)
        termTag.append(planWrapper)

    for plan in sequenceDict:
        for plainPlan in courseGroupDict:
            if plainPlan in plan:
                plainPlanSave = plainPlan
                break
        for term in sequenceDict[plan]:
            wrapperDiv = soup.new_tag("div", attrs={"id": cleaner.cleanString(plan) + cleaner.cleanString(term) + "options",
                                                "ng-switch-when": cleaner.cleanString(plan) + cleaner.cleanString(term)})
            
            for courseGroupList in courseGroupDict[plainPlanSave].values():
                totalCourseGroup = ""
                for indivCourseGroup in courseGroupList:
                    totalCourseGroup += indivCourseGroup
                courseGroupWrapper = soup.new_tag("div", attrs={"id": "OR" + totalCourseGroup})
                for indivCourseGroup in courseGroupList:
                    radioInput = soup.new_tag("input", attrs={"id":indivCourseGroup, "name":"optionselector",
                                    "ng-model":"obj.OR" + totalCourseGroup, "type":"radio", "value":indivCourseGroup})
                    labelTag = soup.new_tag("label", attrs={"for":indivCourseGroup})
                    labelTag.append(indivCourseGroup)
                    courseGroupWrapper.append(radioInput)
                    courseGroupWrapper.append(labelTag)
                    wrapperDiv.append(courseGroupWrapper)

            courseGroupTag.append(wrapperDiv)

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

# Function that places the outer divs representing each plan
# Parameters:
#   displayTag - HTML tag representing outer display div where the different plan sequences are placed
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   soup - soup object, used to create HTML tags
#   indexJS - file handle for index.js, used to write to index.js
#   controller - file handle for controller.js, used to write to controller.js
#   lineManager - line manager object, used to handle line placement and generation
#   electiveLinkDict - dict that maps elective type to the link of the list of the links
def placePlanDivs(displayTag, sequenceDict, soup):
    for plan in sequenceDict:
        switchInput = soup.new_tag("div", attrs={"id":cleaner.cleanString(plan),
                                                 "ng-switch-when":cleaner.cleanString(plan),
                                                 "style":"height:fit-content; display:flex; flex-direction:row; flex-wrap:column;"})
        placeTermsDivs(switchInput, 
                       sequenceDict[plan], 
                       soup,  
                       plan)
        displayTag.append(switchInput)

# Function that places the legend description tag
# Parameters:
#   soup - soup object, used to create HTML tags
#   legendTag - HTML tag used to hold legend
def placeLegendDescription(soup, legendTag):
    legendDescription = soup.new_tag("b", attrs={"class":"legenddescription"})
    legendDescription.append("Click on a Category Below to Highlight all Courses in that Category")
    legendTag.append(legendDescription)

# Function that places the legend buttons
# Parameters:
#   soup - soup object, used to create HTML tags
#   legendTag - HTML tag used to hold legend
#   categoryDict - dict that maps categories to plan dicts containing courses
#   with that category
def placeLegendButtons(soup, legendTag, categoryDict):
    legendBoxes = soup.new_tag("div", attrs={"class":"legendboxes"})
    for category in categoryDict:
        coursecat = placeLegendButton(soup, cleaner.cleanString(category), categoryDict[category][1])
        coursecat.append(category)
        legendBoxes.append(coursecat)
    legendTag.append(legendBoxes)

# Function that generates a button for the legend
# Parameters:
#   soup - soup object, used to create HTML tags
#   category - category for button
#   colour - colour of button
# Returns: HTML tag representing button
def placeLegendButton(soup, category, colour):
    return soup.new_tag("div", attrs={"ng-click":category+ "clickListener()", 
                                        "class":"legendbutton",
                                        "id": cleaner.cleanString(category),
                                        "style":"background-color:#" + colour})

# Function that places the course group froms for the course group selection 
# radio inputs for a specific plan
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

# Function that places the column divs which represent the terms within a certain plan
# Parameters:
#   planTag - HTML tag representing the plan sequence in question
#   planDict - dict that maps a course list to each term in the plan
#   soup - soup object, used to create HTML tags
#   indexJS - file handle for index.js, used to write to index.js
#   controller - file handle for controller.js, used to write to controller.js
#   plan - name of plan whose terms are being placed
#   lineManager - line manager object, used to handle line placement and generation
def placeTermsDivs(planTag, planDict, soup, plan):
    # wrapper that holds the number of each type of elective taken this plan
    electiveCounterWrapper = {"ITS": 0, "PROG": 0, "COMP": 0}
    # count of amount of term columns placed in the plan
    termcounter = 0

    for term in planDict:
        termDiv = soup.new_tag("div", attrs={"class":"term"})
        termHeader = soup.new_tag("h3", attrs={"class":"termheader"})
        termHeader.append(term)
        termDiv.append(termHeader)
        placeCourses(termDiv, planDict[term], soup, plan, termcounter, electiveCounterWrapper)
        planTag.append(termDiv)
        termcounter += 1
    # generating a list of all courses taken in this plan
    courseList = []
    for courses in planDict.values():
        courseList += courses

# Function that places the course divs within a certain term column of a certain plan
# Parameters:
#   termTag - HTML tag representing the specfic term column in question
#   termList - list of courses being taken that term
#   soup - soup object, used to create HTML tags
#   controller - file handle for controller.js, used to write to controller.js
#   plan - name of plan whose terms are being placed
#   termcounter - which term is currently being placed (int)
# Returns:
#   compcounter, progcounter, itscounter
def placeCourses(termTag, termList, soup, plan, termcounter, electiveCountWrapper):
    courseGroupList = []  # list of courses (course objects) in a course group
    courseGroupTitle = ""  # name of the course group (eg: "Course group 2A")
    courseOrList = []
    hexcolorlist= ["033dfc", "fc0303", "ef8c2b", "0ccb01", "bd43fa", "e8e123"]
    for course in termList:
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
            courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})

        # Prevent tooltip from being off screen
        courseDisc = pickTooltipSide(termcounter, courseID, soup)

        # Constructing course div, check for special cases
        if course.name == "Complementary Elective":
            # Class allows formatting so words fit in course box
            courseID = courseID+str(electiveCountWrapper["COMP"])
            courseDiv = createCourseDiv(soup, courseID, orCase)
            # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
            courseDisc["id"] = courseDisc["id"][:-4] + str(electiveCountWrapper["COMP"]) + "desc"
            electiveCountWrapper["COMP"] += 1
            formatCourseDescriptionForElective(soup, course, courseDisc)
            # Adding link to list of electives DUMMY LINK FOR NOW
            # linkTag = soup.new_tag("a", href=electiveLinkDict["COMP"], target="_blank")
            # linkTag.append("List of electives")
            # courseDisc.append(linkTag)

        elif course.name == "Program/Technical Elective":
            # Class allows formatting so words fit in course box
            courseID = courseID+str(electiveCountWrapper["PROG"])
            courseDiv = createCourseDiv(soup, courseID, orCase)
            # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
            courseDisc["id"] = courseDisc["id"][:-4] + str(electiveCountWrapper["PROG"]) + "desc"
            electiveCountWrapper["PROG"] += 1
            formatCourseDescriptionForElective(soup, course, courseDisc)
            # Adding link to list of electives DUMMY LINK FOR NOW
            # linkTag = soup.new_tag("a", href=electiveLinkDict["PROG"], target="_blank")
            # linkTag.append("List of electives")
            # courseDisc.append(linkTag)

        elif course.name == "ITS Elective":
            courseID = courseID+str(electiveCountWrapper["ITS"])
            # Class allows formatting so words fit in course box
            courseDiv = createCourseDiv(soup, courseID, orCase)
            # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
            courseDisc["id"] = courseDisc["id"][:-4] + str(electiveCountWrapper["ITS"]) + "desc"
            electiveCountWrapper["ITS"] += 1
            formatCourseDescriptionForElective(soup, course, courseDisc)
            # Adding link to list of electives DUMMY LINK FOR NOW
            # linkTag = soup.new_tag("a", href=electiveLinkDict["ITS"], target="_blank")
            # linkTag.append("List of electives")
            # courseDisc.append(linkTag)

        else:
            # This is a regular course. All information should be available
            courseDiv = createCourseDiv(soup, 
                                        courseID, 
                                        orCase) 
            formatCourseDescriptionForRegular(soup, course, courseDisc)

        # text appearing in course box (eg: CHEM 103)
        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
        courseHeader.append(course.name)

        courseDiv.append(courseHeader)
        courseDiv.append(courseDisc)

        skipAddCourseFlag = False

        if orCase:
            # If multiple course options, append the courseDiv to a list which we will append
            # to the termTag after all options have been collected
            courseOrList.append(courseDiv)
            if termList.index(course) == (len(termList) - 1):
                # last course in term is an OR course, need to append to termTag immediately
                termTag, courseOrList, courseGroupList = addOrCourses(courseOrList, course.courseGroup, courseGroupList, termTag, soup)
                skipAddCourseFlag = True
            if not lastOrCase:
                continue
            if lastOrCase and (courseOrList != []):
                # last option out of OR courses
                termTag, courseOrList, courseGroupList = addOrCourses(courseOrList, course.courseGroup, courseGroupList, termTag, soup)
                continue

        if course.courseGroup != "":
            # need to append to courseGroupList, different than check in orCase because
            # this doesn't involve OR
            courseGroupList.append(courseDiv)
            continue

        if not skipAddCourseFlag:
            courseContDiv.append(courseDiv) 
            termTag.append(courseContDiv)

    if courseGroupTitle != "":
        # Need to add course group title, outside of course group box so
        # append directly to termTag
        termTag.append(courseGroupTitle)
    if courseGroupList != []:
        # A course group is involved. Append each course to the coursegroupcontainer,
        # then append this container to the termTag
        for i in range(0, len(courseGroupList)):
            if i == (len(courseGroupList) - 1):
                courseGroupList[i]["class"].append("lastcourseingroup")  # last course has no bottom margin
            courseContDiv.append(courseGroupList[i])
        termTag.append(courseContDiv)

def extractCourseCategories(course):
    catListString = cleaner.cleanString(course.main_category)
    for subcat in course.sub_categories:
        catListString += " " + cleaner.cleanString(subcat)
    return catListString

# Appends all courses in courseOrList to either termTag (if not in a course group) or to 
# courseGroupList (if in a course group)
# Parameters:
#   courseOrList - list of courseDivs of all courses to go into orcoursecontainer
#   courseGroup - course group of the current (last in OR case) course
#   courseGroupList - list of courseDivs to go into coursegroupcontainer
#   termTag - HTML tag representing the specfic term column in question
#   soup - soup object, used to create HTML tags
# Returns: termTag, courseOrList (cleared to be empty), courseGroupList
def addOrCourses(courseOrList, courseGroup, courseGroupList, termTag, soup):
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
        # not in a course group, append directly to termTag
        termTag.append(courseOrContDiv)
    courseOrList = []  # reset in case multiple OR cases in a term

    return termTag, courseOrList, courseGroupList

# Determines which side a tooltip should appear on based on the term position on the page.
# If the term is near the left side, the tooltip appears on the right and vice versa.
# Terms 1,2 and 3 have tooltips on the right, all others on the left.
# Parameters:
#   termcounter - which term is currently being placed (int)
#   courseID - ID of the course being placed (str)
#   soup - soup object, used to create HTML tags 
# Returns:
#   courseDisc - course disc HTML tag
def pickTooltipSide(termcounter, courseID, soup):
    if termcounter < 4:
        # Term is on the left of the page, tooltip should be on right
        courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                "class":"tooltiptextright",
                                                "ng-click":"$event.stopPropagation()"})
    else:
        # Term is on the right of the page, tooltip should be on left
        courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                "class":"tooltiptextleft",
                                                "ng-click":"$event.stopPropagation()"})

    return courseDisc

# Function that constructs a course div
# Parameters:
#   soup - soup object, used to create HTML tags 
#   courseID - ID of the course being placed (str)
#   category - category of course in question
#   orBool - boolean flag for OR cases, true if course is an OR case
def createCourseDiv(soup, courseID, orBool):
    if orBool:
        # course is an OR case
        return soup.new_tag("div", attrs={"class":"orcourse tooltip",
                                            "id": courseID,
                                            "ng-click":courseID+"Listener()",
                                            "ng-right-click":courseID+"RCListener()"})
    else:
        # course is a regular (non-OR) case
        return soup.new_tag("div",attrs= {"class":"course tooltip", 
                                                "id": courseID, 
                                                "ng-click":courseID+"Listener()",
                                                "ng-right-click":courseID+"RCListener()"})

# Function that writes the flags and variables associated with specific
# course in the JS
# Parameters:
#   controller - file handle to controller.js
#   courseID - ID for course
def writeFlagsAndVariables(controller, courseID, plan):
    controller.write("  var " + 
                         courseID +
                         "flag = false;\n")
    controller.write("  var " + 
                         courseID +
                         "rflag = false;\n")
    controller.write(" var " + courseID + "Time = new Date().getTime();\n")
    controller.write("this."+plan+"ClickedMap.set(\""+courseID+"\", []);\n")

# Function that consturcts the course description tooltip for an elective
# Parameters:
#   soup - soup object used to create HTML tags
#   course- course object 
#   courseDisc - course disc HTML tag
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

# Function that consturcts the course description tooltip for a regular course
# Parameters:
#   soup - soup object used to create HTML tags
#   course - course object 
#   courseDisc - course disc HTML tag
def formatCourseDescriptionForRegular(soup, course, courseDisc):
    # formatting title in course description
    courseTitle = soup.new_tag("b", attrs={"class":"descriptiontitle"})
    courseTitle.append(course.name + " - " + course.descr)

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
    courseAlphaHours.append(course.approvedHrs + ")" + " ")

    # adding desc
    courseDescription = soup.new_tag("p", attrs={"class":"fulldescription"})
    courseDescription.append(course.calendarDescr)

    # appending info to disc tag
    courseDisc.append(courseTitle)
    courseDisc.append(courseLine)
    courseDisc.append(courseCredits)
    # courseDisc.append(courseFeeIndex)
    # courseDisc.append(courseTermAvail)
    courseDisc.append(courseAlphaHours)
    courseDisc.append(courseDescription)


