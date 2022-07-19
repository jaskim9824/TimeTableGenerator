# Author: Zachary Schmidt
# Collaborators: Jason Kim, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains the functions neccesary to parse the Excel file
# containing the sequncing information

# Dependencies: copy, xlrd

from copy import deepcopy
import xlrd

# Parses an Excel file with program sequencing information (when courses are taken)
# and returns a dictionary storing the program plan name as key (Traditional, Co-op plan 1, etc.)
# and a dict as value. This inner dict has the term name (Term 1, Term 2, etc.) as key
# and a list of Course objects taken in that term as value.
#
# Parameters:
#   course_obj_dict (dictionary): dict with course name for key and 
#   Course object as value
#   filename (string): Name of the Excel file to be parsed for sequencing
#   info. Can only be a .xls file (NOT .xlsx)
#
# Returns:
#   course_seq (dictionary): Key is plan name, value is another dict with 
#   term name as the key and a list of the Course objects taken in that term as value.
def parseSeq(filename, course_obj_dict, plainNameList):
    try:
        book = xlrd.open_workbook(filename)
        numsheets = book.nsheets
        course_seq = {}

        for i in range(0, numsheets):
            # Each sheet stores a plan (traditional, co-op plan 1, etc.)
            plan_dict = {}
            sheet = book.sheet_by_index(i)
            col =0
            while col < sheet.ncols:
                # Each column represents a term
                term_name = sheet.cell_value(0, col)  # first entry in col must be the term name
                term_list = []  # stores Course objects in a list for that term
                for row in range(1, sheet.nrows):
                    name = str(sheet.cell_value(row, col))
                    if name == "":
                        # Cell in Excel is empty, skip over this cell
                        continue
                    # if ("(" in name) and (")" in name):
                    #     # course group is between opening and closing brackets
                    #     open_bracket = name.find("(")
                    #     close_bracket = name.find(")")
                    #     course_group = name[open_bracket + 1:close_bracket]
                    #     course_group.strip().replace(" ", "")
                    #     if close_bracket == (len(name) - 1):
                    #         # Case: course group is last thing in cell
                    #         name = name[:open_bracket]
                    #     else:
                    #         # Case: some text after course group that is part of course name
                    #         name = name[:open_bracket] + name[close_bracket + 1:]

                    # if "OR" in name:
                    #     # If OR case, follow the same procedure but set calendar_print as "or" (or "lastor")
                    #     namelist = name.split("OR")
                    #     for orname in namelist:
                    #         pureName = orname
                    #         orname = orname.strip()
                    #         if orname not in plainNameList:
                    #             continue
                    #         # course_obj_dict key has section number in key, orname doesn't; need to search for 
                    #         # full name (with section number)
                    #         fullOrNames = findFullNames(course_obj_dict, orname)
                    #         for fullOrName in fullOrNames:
                    #             orcourse = deepcopy(course_obj_dict[fullOrName])
                    #             if namelist[-1] == pureName:
                    #                 # last OR course (courses after this are not in this OR option, will be a different div)
                    #                 orcourse.calendarPrint = "lastor"
                    #             else:
                    #                 orcourse.calendarPrint = "or"
                    #             if course_group != "":
                    #                 orcourse.courseGroup = course_group
                    #             term_list.append(orcourse)
                    #     plan_dict[term_name] = term_list
                    #     row += 1
                    #     continue

                    # if name not in plainNameList:
                    #     continue

                    # course_obj_dict key has section number in key, name doesn't; need to search for 
                    # # full name (with section number)
                    # fullNames = findFullNames(course_obj_dict, name)
                    # for fullName in fullNames:
                    #     # deepcopy since sequencing leads to prereqs and coreqs not being the same between different plans
                    #     curr_course = deepcopy(course_obj_dict[fullName])
                    #     if course_group != "":
                    #         curr_course.courseGroup = course_group
                    #     term_list.append(curr_course)  # store each course in a list
                    parsedCourseObj = courseParse(name, course_obj_dict, plainNameList)
                    if type(parsedCourseObj) == type([]):
                        for obj in parsedCourseObj:
                            if obj is None:
                                parsedCourseObj.remove(obj)
                    else:
                        if parsedCourseObj is None:
                            continue
                    term_list.append(parsedCourseObj)
            
                plan_dict[term_name] = term_list  # store each list in a dict (key is term name)
                col += 1
            course_seq[sheet.name] = plan_dict  # store each term dict in a plan dict (key is plan name (traditional, co-op plan 1, etc.))

        # Not in use, overrides Calendar description
        # Make sure that co-reqs are only for courses in the same term
        # Had to do this after pulling from Sequencing.xls
        # course_seq = checkReqs(course_seq)

    except FileNotFoundError:
        raise FileNotFoundError("Excel sequencing file not found, ensure it is present and the name is correct.")
    except xlrd.biffh.XLRDError:
        raise ValueError("Error reading data from sequencing Excel sheet. Ensure it is formatted exactly as specified")

    return course_seq

# Searches through course_obj_dict for courses with plainNames that match input courseName
# Returns a list of names of courses in course_obj_dict with matching plainName
#
# Parameters:
#   course_obj_dict (dictionary): dict with course name for key and 
#   Course object as value.
#   courseName (string): plain name of course in Sequencing Excel file
#
# Returns:
#   fullNames (list of strings): list of full names of courses in course_obj_dict
#   with plainNames matching courseName
def findFullNames(course_obj_dict, courseName):
    fullNames = []
    for course in course_obj_dict:
        # Have to search through entire dict
        if course_obj_dict[course].plainName == courseName:
            # Found a match
            fullNames.append(course)

    return fullNames

# Checks that all coreqs for a course are taken in the same term,
# if not, the coreq is changed to become a prereq. Similarly,
# if a coreq is actually taken before a course in a certain plan,
# that coreq is changed to a prereq for that course.
#
# Parameters:
#   course_seq (dict): Stores course data in proper sequence:
#       key: Plan Name (string): name of the sheet from "Sequencing.xls"
#       ("Traditional", "Co-op Plan 1", etc.)
#       value: dict with key as term name ("Term 1", "Term 2", etc.)
#
# Returns:
#   course_seq (dict): Stores course data in proper sequence:
#       key: Plan Name (string): name of the sheet from "Sequencing.xls"
#       ("Traditional", "Co-op Plan 1", etc.)
#       value: dict with key as term name ("Term 1", "Term 2", etc.)
#       and value as a list of Course objects to be taken in that term.
#       The coreq and prereq attributes may or may not have been modified.
def checkReqs(course_seq):
    # We have to check the sequencing for each plan as courses are taken
    # at different times in different plans
    for plan in course_seq:
        # stores all of the names of the courses to be taken in this plan
        all_names = extractCoursesFromPlan(course_seq, plan)
        
        planDict = course_seq[plan]
        for term in planDict:
            # stores all of the names of the courses to be taken in this term
            term_course_names = extractCourseFromTerm(planDict, term)
       
            for course in planDict[term]:
                # Checking coreqs
                for coreq in course.coreqs:
                    # For each coreq for a certain course, if there are multiple options
                    # (MATH 100 or MATH 114 or...) then only keep those that are displayed
                    # in this plan. eg: Coreqs: MATH 100 or MATH 114, if only MATH 100 is 
                    # available in this plan, discard MATH 114 and keep MATH 100.
                    coreqlist = coreq.split(" or ")

                    i = 0
                    while i < len(coreqlist):
                        if coreqlist[i] not in all_names:
                            # If the coreq is not available in this plan, delete it
                            del coreqlist[i]
                            continue
                        i += 1

                    if coreqlist != []:
                        coreq_count = 0
                        while coreq_count < len(coreqlist):
                            if coreqlist[coreq_count] not in term_course_names:
                                # The coreq course in not taken in the same term,
                                # it is really a prereq
                                course.prereqs.append(coreqlist[coreq_count])
                                if coreq in course.coreqs:
                                    del course.coreqs[course.coreqs.index(coreq)]
                            coreq_count += 1

                # Analagous situation but for prereqs (not coreqs)
                for prereq in course.prereqs:
                    # For each prereq for a certain course, if there are multiple options
                    # (MATH 100 or MATH 114 or...) then only keep those that are displayed
                    # in this plan. eg: Prereqs: MATH 100 or MATH 114, if only MATH 100 is 
                    # available in this plan, discard MATH 114 and keep MATH 100.
                    prereqlist = prereq.split(" or ")
                    i = 0
                    while i < len(prereqlist):
                        # If the prereq is not available in this plan, delete it
                        if prereqlist[i] not in all_names:
                            del prereqlist[i]
                            continue
                        i += 1

                    if prereqlist != []:
                        prereq_count = 0
                        while prereq_count < len(prereqlist):
                            if prereqlist[prereq_count] in term_course_names:
                                # The prereq course is taken in the same term,
                                # it is really a coreq
                                course.coreqs.append(prereqlist[prereq_count])
                                if prereq in course.prereqs:
                                    del course.prereqs[course.prereqs.index(prereq)]
                            prereq_count += 1
 
    return course_seq

# Extracts the courses from course_seq in a given plan.
#
# Parameters:
#   course_seq (dict): Stores course data in proper sequence:
#       key: Plan Name (string): name of the sheet from "Sequencing.xls"
#       ("Traditional", "Co-op Plan 1", etc.)
#       value: dict with key as term name ("Term 1", "Term 2", etc.)
#   plan (string): name of the plan from which courses are extracted
#
# Returns:
#   all_names (list of strings): list of the course names that are taken
#   in that plan
def extractCoursesFromPlan(course_seq, plan):
    all_names = []
    for term in course_seq[plan]:
        for course in course_seq[plan][term]:
            course_name = course.name.replace(" ", "").replace("or", " or ")
            all_names.append(course_name)
    return all_names

# Extracts the courses from planDict in a given term.
#
# Parameters:
#   planDict (dict): dict stored in course_seq[plan]
#   term (string): name of the term from which courses are extarcted
#
# Returns:
#   term_course_names (list of strings): list of the course names that are taken
#   in that term
def extractCourseFromTerm(planDict, term):
    term_course_names = []
    for course in planDict[term]:
        course_name = course.name.replace(" ", "").replace("or", " or ")
        term_course_names.append(course_name)
    return term_course_names

# Class that wraps the list of sections for a specfic course
# Fields:
#   name - name of course
#   section - list of sections
class CourseSectionWrapper:
    def __init__(self, name = ""):
        self.name = name
        self.sections = []

    def __str__(self) -> str:
        return self.name
    
    def addSection(self, section):
        self.sections.append(section)

# Function that reads the text in the Excel sheet and returns the respective list that 
# gets placed in the sequenceDict
# If the cell contains a single course name, what is returned is a list with a single
# CourseSectionWrapper object
# If the cell contains mutiple courses sepearted by OR, what is returned is a list of
#  CourseSectionWrapper objects
# If the cell contains a course group desigination, what is returned is a list of lists,
# with each list contains CourseSectionWrapper object(s) and the name of the course group
# as the last item
# Parameters:
#   name - text within cell that is parsed
#   course_obj_dict - dict containing course info
#   plainNameList - list of all possible course names (including section names)
def courseParse(name, course_obj_dict, plainNameList):
    name = name.strip().replace("  "," ")
    nameList = name.split("OR")
    if len(nameList) > 1:
        # course group case
        if "{" in nameList[0]:
            return courseParseCourseGroups(nameList, course_obj_dict, plainNameList)
        # non course group case
        else:
            return [createCourseSection(item.upper().strip(), course_obj_dict, plainNameList) for item in nameList]
    #single course
    else:
        return [createCourseSection(nameList[0].upper(), course_obj_dict, plainNameList)]

# Function that reads in text and returns the respective list that 
# gets placed in the sequenceDict. Used for testing
# If the cell contains a single course name, what is returned is a list with a single
# CourseSectionWrapper object
# If the cell contains mutiple courses sepearted by OR, what is returned is a list of
#  CourseSectionWrapper objects
# If the cell contains a course group desigination, what is returned is a list of lists,
# with each list contains CourseSectionWrapper object(s) and the name of the course group
# as the last item
# Parameters:
#   name - text within cell that is parsed
#   course_obj_dict - dict containing course info
def courseParseTest(name, course_obj_dict):
    name = name.strip().replace("  "," ")
    nameList = name.split("OR")
    if len(nameList) > 1:
        # course group case
        if "{" in nameList[0]:
            return courseParseCourseGroupsTest(nameList, course_obj_dict)
        # non course group case
        else:
            return [createCourseSectionTest(item.upper().strip(), course_obj_dict) for item in nameList]
    #single course
    else:
        return [createCourseSectionTest(nameList[0].upper(), course_obj_dict)]

def createCourseSection(course, course_obj_dict, plainNameList):
    if course not in plainNameList:
        return None
    fullNames = findFullNames(course_obj_dict, course)
    wrapper = CourseSectionWrapper(course)
    for fullName in fullNames:
        curr_course = deepcopy(course_obj_dict[fullName])
        wrapper.addSection(curr_course)
    return wrapper

def createCourseSectionTest(course, course_obj_dict):
    fullNames = findFullNames(course_obj_dict, course)
    wrapper = CourseSectionWrapper(course)
    for fullName in fullNames:
        curr_course = deepcopy(course_obj_dict[fullName])
        wrapper.addSection(curr_course)
    return wrapper

def courseParseCourseGroups(nameList, course_obj_dict, plainNameList):
    courseGroups = []
    for name in nameList:
        name = name.replace("{","").replace("}","")
        courseGroupNameIndexStart = name.find("(")
        courseGroupNameIndexEnd = name.find(")")
        if courseGroupNameIndexEnd == -1 or courseGroupNameIndexStart == -1:
            raise ValueError("Course group name improperly formatted")
        courseGroupName = name[courseGroupNameIndexStart+1:courseGroupNameIndexEnd]
        strippedCourses = name[0:courseGroupNameIndexStart]
        courseList = strippedCourses.split("or")
        courseGroupList = []
        for course in courseList:
            if course.upper().strip() not in plainNameList:
                continue
            courseGroupList.append(createCourseSection(course.upper().strip(), course_obj_dict, plainNameList))
        courseGroupList.append(courseGroupName)
        courseGroups.append(courseGroupList)
    return courseGroups

def courseParseCourseGroupsTest(nameList, course_obj_dict):
    courseGroups = []
    for name in nameList:
        name = name.replace("{","").replace("}","")
        courseGroupNameIndexStart = name.find("(")
        courseGroupNameIndexEnd = name.find(")")
        if courseGroupNameIndexEnd == -1 or courseGroupNameIndexStart == -1:
            raise ValueError("Course group name inproperly formatted")
        courseGroupName = name[courseGroupNameIndexStart+1:courseGroupNameIndexEnd]
        strippedCourses = name[0:courseGroupNameIndexStart]
        courseList = strippedCourses.split("or")
        courseGroupList = []
        for course in courseList:
            courseGroupList.append(createCourseSectionTest(course.upper().strip(), course_obj_dict))
        courseGroupList.append(courseGroupName)
        courseGroups.append(courseGroupList)
    return courseGroups