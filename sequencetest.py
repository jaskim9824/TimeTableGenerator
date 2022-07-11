import sequenceparsing
import courseparsing

def test(input, course_obj_dict):
    return sequenceparsing.courseParse(input, course_obj_dict)

def main():
    courseObjDict = courseparsing.parseCourses("TimeTable.xls", "Sequencing.xls")
    while True:
        try:
            outputObject = test(input(), courseObjDict)
            print(outputObject)  
            # print("Name: " + outputObject.name)
            # print("Sections: ")
            # for section in outputObject.sections:
            #     print(section.name)
        except ValueError:
            print("Value Error raised!")

if __name__ == "__main__":
    main()