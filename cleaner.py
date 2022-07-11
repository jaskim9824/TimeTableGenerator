# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# File that contains functions that clean strings into a format without
# non alphanumeric characters (no whitespace or special characters)

# Function to strips all non alphanumeric characters from a string to create a "cleaned"
# verison.
# Source: https://www.delftstack.com/howto/python/remove-non-alphanumeric-characters-python/
# use-the-isalnum-method-to-remove-all-non-alphanumeric-characters-in-python-string
# Parameters:
#   string: string to be cleaned (str)
# Returns: 
#   the cleaned string (str)
def cleanString(string = "") -> str:
    return ''.join(ch for ch in string if ch.isalnum())

# Function that takes in a list of course objects and produced a list of "cleaned" course
# names
# Parameters:
#   courseList: list of course objects
# Returns:
#   the list of cleaned course names
def cleanCourseList(courseList = list) -> list:
    cleanedList = []
    for course in courseList:
        cleanedList.append(cleanString(course.name))
    return cleanedList