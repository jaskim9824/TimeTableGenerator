# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains the functions needed to extract the course group 
# information and classes to store the info in

# Base class for the wrapper object storing different options groups
# Fields:
#   options - list of options in the option group
class Option:  
    def __init__(self, options=None):
        if options is None:
            self.options = []
        else:
            self.options = options
    
    def addOption(self, addedOption):
        self.options.append(addedOption)

    def isequal(self, option):
        return self.options == option.options

# Class that extends from Option to wrap OR course options (wraps list of course section objects)
# Fields:
#   isWithinCourseGroup - boolean flag that indicates whether the OR course 
#   is within a course group
#   parentCourseGroup - name of parent course group of OR course, empty if not
#   within a course group
class ORCourseOption(Option):
    def __init__(self, options=None, isWithinCourseGroup=False, parentCourseGroup=""):
        super().__init__(options)
        self.isWithinCourseGroup = isWithinCourseGroup
        self.parentCourseGroup = parentCourseGroup
    
    def getOptionName(self):
        outputStr = ""
        for option in self.options:
            outputStr += option.name

# Class that extends from Option to wrap course group options (wraps list of course groups names)
# Fields:
#   courseGroupName - name for the set of course groups
class CourseGroupOption(Option):
    def __init__(self, courseGroupName=""):
        super().__init__()
        self.courseGroupName = courseGroupName

    def getOptionName(self):
        return self.courseGroupName

# Function that takes the program sequence dict and produces the dict that
# determines a list of the different option sets for a certain plan and term
def extractingListofOptions(sequenceDict):
    listOptionsDict = {}
    for plan in sequenceDict:
        listOptionsDict[plan] = {}
        for term in sequenceDict[plan]:
            listOptionsDict[plan][term] = []
            optionsList = []
            for course in sequenceDict[plan][term]:
                if len(course) <= 1:
                    # Case: course is not in course group and is not an OR course
                    continue
                if type(course[0]) == type([]):
                    # Case: course is in a course group
                    courseGroupOpt = CourseGroupOption("group" + course[0][-1][0])
                    for option in course:
                        if len(option) > 2:
                            # Case: this course is an OR course (in addition to being in a course group)
                            # append an ORCourseOption object
                            optionsList.append(ORCourseOption(option[:-1], True, option[-1]))
                        courseGroupOpt.addOption(option[-1])
                    dup = False  # track if we have a duplicate course group (course groups are entered multiple times in Excel)
                    for optionWrap in optionsList:
                        if courseGroupOpt.isequal(optionWrap):
                            # we have a duplicate course group
                            dup = True
                            break
                    if dup:
                        continue
                    optionsList.append(courseGroupOpt)                        
                else:
                    # Case: course is an OR course
                    ORCourseOption = ORCourseOption(False, "")
                    for option in course:
                        ORCourseOption.addOption(option)
            listOptionsDict[plan][term] = optionsList
    return listOptionsDict
                