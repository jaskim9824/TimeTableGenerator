import xlrd
import sequenceparsing

class Course:
    def __init__(self, name, acadOrg = "", term = "", shortDesc = "", classNbr = "", 
    subject = "", catalog = "", component = "", sect = "", classStatus = "", 
    descr = "", crsStatus = "", facilID = "", place = "", pat = "", startDate = "", 
    endDate = "", hrsFrom = "", hrsTo = "", mon = "", tues = "", wed = "", thurs = "", 
    fri = "", sat = "", sun = "", instructorName = "", instructor = "", email = "", 
    classType = "", capEnrl = "", totEnrl = "", campus = "", location = "", 
    notesNbr = "", noteNbr = "", note = "", rqGroup = "", openTo = "", approvedHrs = "", 
    duration = "", career = "", consent = "", calendarDescr = "", maxUnits = ""):

        self.name = str(name)
        self.acadOrg = str(acadOrg)
        self.term = str(term)
        self.shortDesc = str(shortDesc)
        self.classNbr = str(classNbr)
        self.subject = str(subject)
        self.catalog = str(catalog)
        self.component = str(component)
        self.sect = str(sect)
        self.classStatus = str(classStatus)
        self.descr = str(descr)
        self.crsStatus = str(crsStatus)
        self.facilID = str(facilID)
        self.place = str(place)
        self.pat = str(pat)
        self.startDate = str(startDate)
        self.endDate = str(endDate)
        self.hrsFrom = str(hrsFrom)
        self.hrsTo = str(hrsTo)
        self.mon = str(mon)
        self.tues = str(tues)
        self.wed = str(wed)
        self.thurs = str(thurs)
        self.fri = str(fri)
        self.sat = str(sat)
        self.sun = str(sun)
        self.insstructorName = str(instructorName)
        self.instructor = str(instructor)
        self.email = str(email)
        self.classType = str(classType)
        self.capEnrl = str(capEnrl)
        self.totEnrl = str(totEnrl)
        self.campus = str(campus)
        self.location = str(location)
        self.notesNbr = str(notesNbr)
        self.noteNbr = str(noteNbr)
        self.note = str(note)
        self.rqGroup = str(rqGroup)
        self.openTo = str(openTo)
        self.approvedHrs = str(approvedHrs)
        self.duration = str(duration)
        self.career = str(career)
        self.consent = str(consent)
        self.calendarDescr = str(calendarDescr)
        self.maxUnits = str(maxUnits)


def parseCourses(filename, sequenceFileName):
    try:
        book = xlrd.open_workbook(filename)
        sheet = book.sheet_by_index(0)
        courseObjDict = {}
        for row in range(2, sheet.nrows):
            acadOrg = sheet.cell_value(row, 0)
            term = sheet.cell_value(row, 1)
            shortDesc = sheet.cell_value(row, 2)
            classNbr = sheet.cell_value(row, 3)
            subject = sheet.cell_value(row, 4)
            catalog = sheet.cell_value(row, 5)
            component = sheet.cell_value(row, 6)
            sect = sheet.cell_value(row, 7)
            classStatus = sheet.cell_value(row, 8)
            descr = sheet.cell_value(row, 9)
            crsStatus = sheet.cell_value(row, 10)
            facilID = sheet.cell_value(row, 11)
            place = sheet.cell_value(row, 12)
            pat = sheet.cell_value(row, 13)
            startDate = sheet.cell_value(row, 14)
            endDate = sheet.cell_value(row, 15)
            hrsFrom = sheet.cell_value(row, 16)
            hrsTo = sheet.cell_value(row, 17)
            mon = sheet.cell_value(row, 18)
            tues = sheet.cell_value(row, 19)
            wed = sheet.cell_value(row, 20)
            thurs = sheet.cell_value(row, 21)
            fri = sheet.cell_value(row, 22)
            sat = sheet.cell_value(row, 23)
            sun = sheet.cell_value(row, 24)
            name = sheet.cell_value(row, 25)
            instructor = sheet.cell_value(row, 26)
            email = sheet.cell_value(row, 27)
            classType = sheet.cell_value(row, 28)
            capEnrl = sheet.cell_value(row, 29)
            totEnrl = sheet.cell_value(row, 30)
            campus = sheet.cell_value(row, 31)
            location = sheet.cell_value(row, 32)
            notesNbr = sheet.cell_value(row, 33)
            noteNbr = sheet.cell_value(row, 34)
            note = sheet.cell_value(row, 35)
            rqGroup = sheet.cell_value(row, 36)
            openTo = sheet.cell_value(row, 37)
            approvedHrs = sheet.cell_value(row, 38)
            duration = sheet.cell_value(row, 39)
            career = sheet.cell_value(row, 40)
            consent = sheet.cell_value(row, 41)
            calendarDescr = sheet.cell_value(row, 42)
            maxUnits = sheet.cell_value(row, 43)

            courseName = subject + catalog + " " + sect

            courseObjDict[courseName] = Course(courseName, acadOrg, term, shortDesc, classNbr,
            subject, catalog, component, sect, classStatus, descr, crsStatus,
            facilID, place, pat, startDate, endDate, hrsFrom, hrsTo,
            mon, tues, wed, thurs, fri, sat, sun, name, instructor, email,
            classType, capEnrl, totEnrl, campus, location, notesNbr, noteNbr, note,
            rqGroup, openTo, approvedHrs, duration, career, consent, calendarDescr,
            maxUnits)

        courseSeqDict = sequenceparsing.parseSeq(sequenceFileName, courseObjDict)

        return courseObjDict, courseSeqDict

    except FileNotFoundError:
        raise FileNotFoundError("Excel course information file not found, ensure it is present and the name is correct.")
    except xlrd.biffh.XLRDError:
        raise ValueError("Error reading data from Course information Excel sheet. Ensure it is formatted exactly as specified")

if __name__ == "__main__":
    courseObjDict, courseSeqDict = parseCourses("TimeTable.xls", "Sequencing.xls")
    for plan in courseSeqDict:
        print(plan)
        for term in courseSeqDict[plan]:
            print(term)
            for course in courseSeqDict[plan][term]:
                print(courseSeqDict[plan][term][course].name)
            print()
        print()

    for course in courseObjDict:
        print(courseObjDict[course].name)

