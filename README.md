# TimeTableGenerator

Developed by: Jason Kim, Moaz Abdelmonem, and Zachary Schmidt under the supervision of Dr. David Nobes (University of Alberta)
in the Summer of 2022

Intro

  - Program written in Python to generate an interactive timetable diagram that lays out the courses offered in an engineering
    discipline at the University of Alberta.

  - Courses are placed on top of a grid which displays days as columns and time divisions as rows. On hovering over
    a course box, the calendar description, instructor details, location, enrollment information,and accreditation
    units will appear.

Parsing

  - First, the generator parses three Excel spreadsheets. The first of these spreadsheets is a list of all of the courses
    that will be displayed on the page along with information about that course (faculty, description, instructor, location, etc.).
    This information is stored in a dict of objects. The second Excel spreadsheet sequences the courses in a program by plan and
    by term. This spreadheet also describes any course groups. This information is stored in a separate dict of objects.
    The final Excel spreadsheet contains the accreditation units for courses at the U of A.

Website Generation

  - The output HTML and Javscript files are programatically generated. The generator locates a template.html file
    (which provides some basic layout information) and appends to this html file using the Beautiful Soup package.

  - The information from the Excel files is used to create HTML course elements. Information about the course can be retrieved
    from the object associated with that course.

  - The course elements are placed on the page with an absolute vertical position which is derived from the "Hrs From" cell 
    in Excel (which becomes an attribute in the corresponding object). The height of the course element is derived from the 
    difference between the "Hrs From" and "Hrs To" entries in the Excel file.

  - The main purpose of the javascript is 1) to allow switching between plans, terms, course groups, and course sections
    (using angularJS) and 2) to adjust for overlapping courses. JS functions will search through all currently displayed
    courses and find any overlaps. If there is an overlap, the width and positioning of courses are adjusted.

Details regarding the formatting of the input Excel files are provided in docs/Website Generation Tutorial.pdf

This project requires Python 3.6 or higher.

To produce an executable of the project, run the command `pyinstaller main.py -F --onefile -n timetableGenerator` in the `src` directory. An
executable will be produced in the resulting `dist` directory. The other produced directories and files can be deleted.

This project has the following dependencies:
  - AngularJS for the front end logic on the generated webpage
  - BeautifulSoup for generation of the final HTML within Python
  - xlrd for parsing Excel files in Python
  - copy for making deepcopies of objects that appear multiple times on the webpage
  - html for accessing html characters in python strings
  - pyinstaller to convert the Python script into a portable executable
