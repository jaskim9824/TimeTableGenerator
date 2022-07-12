import sequenceparsing
import courseparsing

def test(input, course_obj_dict):
    return sequenceparsing.courseParse(input, course_obj_dict)

def printDetails(section_obj):
    print("Name: " + section_obj.name)
    print("Sections: ")
    for section in section_obj.sections:
        print(section.name)


def main():
    courseObjDict, seqDict = courseparsing.parseCourses("TimeTable.xls", "Sequencing.xls")
    while True:
        try:
            print("Input test Excel cell")
            outputObject = test(input(), courseObjDict)
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

if __name__ == "__main__":
    main()