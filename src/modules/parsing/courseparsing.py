# Author: Zachary Schmidt
# Collaborators: Jason Kim, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains the functions neccesary to parse the Excel file
# containing the information for each course (instructor, location, time, etc.)

# Dependencies: xlrd, sequenceparsing

import xlrd
from . import sequenceparsing
from tkinter import messagebox

class Course:
    # Data storage for info parsed from Excel files
    def __init__(self, name, plainName = "", acadOrg = "", term = "", shortDesc = "", classNbr = "", 
    subject = "", catalog = "", component = "", sect = "", classStatus = "", 
    descr = "", crsStatus = "", facilID = "", place = "", pat = "", startDate = "", 
    endDate = "", hrsFrom = "", hrsTo = "", mon = "", tues = "", wed = "", thurs = "", 
    fri = "", sat = "", sun = "", instructorName = "", instructor = "", email = "", 
    classType = "", capEnrl = "", totEnrl = "", campus = "", location = "", 
    notesNbr = "", noteNbr = "", note = "", rqGroup = "", openTo = "", approvedHrs = "", 
    duration = "", career = "", consent = "", calendarDescr = "", maxUnits = "", calendarPrint = "",
    courseGroup = "", accredUnits = {}):

        self.name = str(name)
        self.plainName = str(plainName)
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
        self.instructorName = str(instructorName)
        self.instructor = str(instructor)
        self.email = str(email)
        self.classType = str(classType)
        self.capEnrl = str(capEnrl).replace(".0", "")
        self.totEnrl = str(totEnrl).replace(".0", "")
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
        self.calendarPrint = str(calendarPrint)
        self.courseGroup = str(courseGroup)
        self.accredUnits = accredUnits
    def __str__(self) -> str:
        return self.name

# Main function for parsing information from list of courses Excel file.
# Uses parseSeq to organize courses by plan and by term
#
# Parameters:
#   filename (string): name of the Excel file with course info
#   sequenceFileName (string): name of the Exel file with sequencing info
#   acredFileName (string): name of the Excel file with acreditation info
#   deptName (string): name of the department, must match accreditation sheet entry
#
# Returns:
#   courseObjDict (dict): dict with course name for key and 
#   Course object as value
#   courseSeqDict (dict): Key is plan name, value is another dict with 
#   term name as the key and a list of the Course objects taken in that term as value
def parseCourses(filename, sequenceFileName, accredFileName, deptName):
    try:
        book = xlrd.open_workbook(filename)
        sheet = book.sheet_by_index(0)
        courseObjDict = {}
        plainNameList = []  # list of plain names (without section numbers) of all courses parsed
        for row in range(2, sheet.nrows):
            # Parse cells row by row (each row is one course)
            # Location of headers is fixed & therefore hard-coded here
            acadOrg = sheet.cell_value(row, 0)
            term = sheet.cell_value(row, 1)
            shortDesc = sheet.cell_value(row, 2)
            classNbr = sheet.cell_value(row, 3)
            subject = sheet.cell_value(row, 4)
            catalog = sheet.cell_value(row, 5).strip()
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

            plainName = subject + " " + catalog  # no section number
            plainNameList.append(plainName)  # allows easy search in parseSeq
            courseName = subject + " " + catalog + " " + sect  # with section number

            # initializing vars to make sure unique memory location for every field
            # (i.e. no two courses have courseGroup fields with the same pointer)
            courseGroup = ""
            calendarPrint = ""
            accredUnits = {"Math":0, "Natural Sciences":0, "Math and Natural Sciences":0,
            "Complimentary Studies":0, "Engineering Science":0, "Engineering Design":0, 
            "Engineering Science and Engineering Design":0, "Other":0}

            courseObjDict[courseName] = Course(courseName, plainName, acadOrg, term, shortDesc, classNbr,
            subject, catalog, component, sect, classStatus, descr, crsStatus,
            facilID, place, pat, startDate, endDate, hrsFrom, hrsTo,
            mon, tues, wed, thurs, fri, sat, sun, name, instructor, email,
            classType, capEnrl, totEnrl, campus, location, notesNbr, noteNbr, note,
            rqGroup, openTo, approvedHrs, duration, career, consent, calendarDescr,
            maxUnits, calendarPrint, courseGroup, accredUnits)

        parseAccred(courseObjDict, accredFileName, deptName)  # fill in accredUnits field

        courseSeqDict = sequenceparsing.parseSeq(sequenceFileName, courseObjDict, plainNameList)  # organize courses by plan & by term

        return courseSeqDict
        
    except FileNotFoundError:
        messagebox.showerror("Error", "Excel course information file not found, ensure it is present and the name is correct.")
        raise FileNotFoundError("Excel course information file not found, ensure it is present and the name is correct.")
    except xlrd.biffh.XLRDError:
        raise ValueError("Error reading data from Course information Excel sheet. Ensure it is formatted exactly as specified")

# Parses the accredFileName file for information on accreditation
# units satisfied by the courses in courseObjDict.
# Parameters:
#   courseObjDict (dict): dict with course name for key and 
#   Course object as value
#   accredFileName (string): name of the .xls file containing 
#   accreditation info
#   deptName (string): name of the department, should match the header
#   on one of the sheets in the accreditation info Excel file
def parseAccred(courseObjDict, accredFileName, deptName):
    try:
        book = xlrd.open_workbook(accredFileName)

        # open each sheet and check if header matches deptName
        sheet = None
        for i in range(0, book.nsheets):
            if book.sheet_by_index(i).cell_value(0, 1) == deptName:
                sheet = book.sheet_by_index(i)
        
        # if no matching department name found, display error message and continue execution
        if sheet is None:
            print("Department name: " + deptName + " does not match any sheet in the accreditation file")
            print("No accreditation unit information will be available on the generated webpage")
            return

        for row in range(4, sheet.nrows):
            for course in courseObjDict:
                if sheet.cell_value(row, 1) == courseObjDict[course].plainName:  # see if the Excel entry matches a plainName
                    # if there is a match, update the accredUnits field with corresponding values
                    courseObjDict[course].accredUnits["Math"] = sheet.cell_value(row, 8)
                    courseObjDict[course].accredUnits["Natural Sciences"] = sheet.cell_value(row, 9)
                    courseObjDict[course].accredUnits["Math and Natural Sciences"] = sheet.cell_value(row, 10)
                    courseObjDict[course].accredUnits["Complimentary Studies"] = sheet.cell_value(row, 11)
                    courseObjDict[course].accredUnits["Engineering Science"] = sheet.cell_value(row, 12)
                    courseObjDict[course].accredUnits["Engineering Design"] = sheet.cell_value(row, 13)
                    courseObjDict[course].accredUnits["Engineering Science and Engineering Design"] = sheet.cell_value(row, 14)
                    courseObjDict[course].accredUnits["Other"] = sheet.cell_value(row, 15)

    except FileNotFoundError:
        messagebox.showerror("Error", "Excel accreditation information file not found, ensure it is present and the name is correct")
        raise FileNotFoundError("Excel accreditation information file not found, ensure it is present and the name is correct")
    except xlrd.biffh.XLRDError:
        raise ValueError("Error reading data from accreditation information Excel sheet. Ensure it is formatted exactly as specified")
