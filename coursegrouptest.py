import coursegroupparsing
import courseparsing

courseObjDict, seqDict = courseparsing.parseCourses("TimeTable.xls", "Sequencing.xls")
print(coursegroupparsing.extractingListofOptions(seqDict))