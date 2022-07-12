from re import L
import sequenceparsing
import courseparsing

# File used to test sequence parsing

# Tests the output of parsing a single Excel cell
def testSeqStringParse(input, course_obj_dict):
    return sequenceparsing.courseParseTest(input, course_obj_dict)

# Prints details of a course section object
def printDetails(section_obj):
    print("Name: " + section_obj.name)
    print("Sections: ")
    for section in section_obj.sections:
        print(section.name)

def cleanPrint(seqDict):
    for plan in seqDict:
        print(plan)
        for term in seqDict[plan]:
            print(term)
            for course in seqDict[plan][term]:
                if type(course) == type([]):
                    for element in course:
                        if type(element) == type([]):
                            i = 0
                            while i < len(element) - 1:
                                printDetails(element[i])
                                i += 1
                            print(element[i])
                        else:
                            printDetails(element)
                else:
                    printDetails(course)
            print("\n")
        print("\n")


def main():
    courseObjDict, seqDict = courseparsing.parseCourses("TimeTable.xls", "Sequencing.xls")
    while True:
        option = input("Select option:\n 1: Display parsed sequence dict\n 2: Test string parsing\n Other: Quit tester\n")
        if option == "1":
            print("Displaying generated sequence dict....")
            cleanPrint(seqDict)
            print("\n")
        elif option == "2":
            try:
                print("Input test Excel cell")
                outputObject = testSeqStringParse(input(), courseObjDict)
                print("Output: ")
                if type(outputObject) == type([]):
                    for element in outputObject:
                        if type(element) == type([]):
                            i = 0
                            while i < len(element) - 1:
                                printDetails(element[i])
                                i += 1
                            print(element[i])
                        else:
                            printDetails(element)
                else:
                    printDetails(outputObject)
            except ValueError:
                print("Value Error raised!")
        else:
            print("Terminating tester")
            break

if __name__ == "__main__":
    main()