# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# The file contains the functions needed to extract the course group 
# information needed to generate the web page

# Function that finds the intital values to set each course group variable to
# in the JS
# Parameters:
#   courseGroupDict - dict that maps plans to the course groups that exist in them
#   courseGroupList - list of course groups taken in that program
# Returns a dict that maps the course group with the initial value it should take
def findIntitalValuesofCourseGroups(courseGroupDict, courseGroupList):
    intitalSelectionGroups = list(courseGroupDict.values())[0]
    intitalCourseGroupVals = {}
    for element in courseGroupList:
        if element not in intitalSelectionGroups:
            intitalCourseGroupVals[element] = ""
        else:
            intitalCourseGroupVals[element] = intitalSelectionGroups[element][0]
    return intitalCourseGroupVals

# Function that finds the list of all course groups taken that term
# Parameters:
#   courseGroupDict - dict that maps plans to the course groups that exist in them
# Returns a list of course groups taken in that program
def findListofAllCourseGroups(courseGroupDict):
    currentList = []
    for plan in courseGroupDict:
        for element in courseGroupDict[plan]:
            if element not in currentList:
                currentList.append(element)
    return currentList

# Function that consturcts a dict that maps plans to the course groups existing in that plan
# and their options
# Parameters:
#   sequenceDict - dict that maps plan names to the plan dict containing sequncing info about that plan
# Returns a dict that maps plans to the course groups that exist in them
def extractPlanCourseGroupDict(sequenceDict):
    courseGroupDict = {}
    for plan in sequenceDict:
        index = plan.find("{")
        if index != -1:
            shortenedPlanName = plan[0:index].strip()
        else:
            shortenedPlanName = plan
        if shortenedPlanName not in courseGroupDict:
            courseGroupDict[shortenedPlanName] = {}
        courseGroupList = extractCourseGroupListFromString(plan)
        if courseGroupList == []:
            continue
        planCourseGroupsDict = courseGroupDict[shortenedPlanName]
        courseGroupDict[shortenedPlanName] = appendCourseGroups(planCourseGroupsDict,courseGroupList)
    return courseGroupDict

# Function that appends course groups and options to a specfic plan course group dict
#   planCourseGroupDict - dict that maps course groups to a list of options taken in that group
#   courseGroupList - list of course group options
# Returns a new course group dict for that specifc plan
def appendCourseGroups(planCourseGroupsDict, courseGroupList):
    for group in courseGroupList:
        numOfGroup = int(''.join(filter(lambda s: (s.isdigit()), group)))
        if numOfGroup not in planCourseGroupsDict:
            planCourseGroupsDict[numOfGroup] = []
        if group not in planCourseGroupsDict[numOfGroup]:
            planCourseGroupsDict[numOfGroup].append(group)
    return planCourseGroupsDict

# Function that creates a list of course groups for a specfic variation of a course group
# selection
# Parameters:
#   planName - long plan name of specific variant
# Returns a list of the options chosen in that variant
def extractCourseGroupListFromString(planName):
    index = planName.find("{")
    if index == -1:
        return []
    endIndex = planName.find("}")
    return planName[index+1:endIndex].split()

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
#   isWithinCourseGroup - boolean flag that indicates whether the OR course group 
#   is within a course group
#   parentCourseGroup - name of parent course group of OR course group, empty if not
#   not within a course group
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
# detrimines a list of the different options sets for a certain plan and term
def extractingListofOptions(sequenceDict):
    listOptionsDict = {}
    for plan in sequenceDict:
        listOptionsDict[plan] = {}
        for term in sequenceDict[plan]:
            listOptionsDict[plan][term] = []
            optionsList = []
            for course in sequenceDict[plan][term]:
                if len(course) <= 1:
                    continue
                if type(course[0]) == type([]):
                    courseGroupOpt = CourseGroupOption(course[0][-1][0])
                    for option in course:
                        if len(option) > 2:
                            optionsList.append(ORCourseOption(option[:-1], True, option[-1]))
                        courseGroupOpt.addOption(option[-1])
                    dup = False
                    for optionWrap in optionsList:
                        if courseGroupOpt.isequal(optionWrap):
                            dup = True
                            break
                    if dup:
                        continue
                    optionsList.append(courseGroupOpt)                        
                else:
                    ORCourseOption = ORCourseOption(False, "")
                    for option in course:
                        ORCourseOption.addOption(option)
            listOptionsDict[plan][term] = optionsList
    return listOptionsDict
                
