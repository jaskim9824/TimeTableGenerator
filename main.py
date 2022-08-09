# Authors: Jason Kim, Zachary Schmidt
# Collaborators: Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file is the main script for the generation of the timetable.
# The program will parse the provided Excel files containing course
# and plan information to programatically generate an interactive timetable
# diagram in the output directory.

# Dependencies: bs4, courseparsing, coursegroupparsing, htmlgen, javascriptgen

from bs4 import BeautifulSoup
import courseparsing
import coursegroupparsing
import htmlgen
import javascriptgen
import tkinter
from tkinter import *
from tkinter import messagebox
from tkinter import ttk
from tkinter import filedialog
from PIL import ImageTk, Image

window = Tk()
window.title('Timetable Generator')
window.iconbitmap('output/images/favicon.ico')
window.geometry("1130x595")
window.configure(bg = "#ffffff")
canvas = Canvas(
    window,
    bg = "#ffffff",
    height = 595,
    width = 1130,
    bd = 0,
    highlightthickness = 0,
    relief = "ridge")
canvas.place(x = 0, y = 0)
window.resizable(False, False)

def main():
    try:
        with open("template.html") as input:
            controller = open("./output/js/controller.js", "w")
            soup = BeautifulSoup(input, 'html.parser')

            deptName = "Mechanical Engineering"  # hardcoded for now

            # parsing the Excel files
            sequenceDict = courseparsing.parseCourses("TimeTable.xls", "Sequencing.xls", "AU_Counts.xls", deptName)

            # extracting course group information
            courseGroupDict = coursegroupparsing.extractPlanCourseGroupDict(sequenceDict)
            courseGroupList = coursegroupparsing.findListofAllCourseGroups(courseGroupDict)
            optionDict = coursegroupparsing.extractingListofOptions(sequenceDict)

            # writing JS controller
            javascriptgen.intializeControllerJavaScript(sequenceDict, 
                                                        courseGroupDict,
                                                        courseGroupList, 
                                                        optionDict,
                                                        controller)

            topTitleTag = soup.head.find("title")
            titleTag = soup.body.find("a", class_="site-title")

            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")

            htmlgen.switchTitle(titleTag, topTitleTag, deptName)  # changing page title based on deptName

            formTag = mainTag.find(id = "planlegend")

            termTag = mainTag.find(id = "termlegend")

            courseGroupTag = mainTag.find(id = "optionlegend")
           
           # list of colors for distinguishing between courses
            hexcolorlist = ["#6aa2fc", "#fcaeae", "#d13d3d", "#faab4b", "#ede387", "#bced87", "#87edae", "#87eaed", "#6494ed", "#c664ed"]

            # radio inputs for plan, term, and course group
            htmlgen.placeRadioInputs(formTag, termTag, courseGroupTag, optionDict, sequenceDict, hexcolorlist, soup)
            # htmlgen.placeSectionRadioInputs(sequenceDict, courseSectionWrapper, soup)
            # main tag holding timetable itself
            displayTag = htmlgen.generateDisplayDiv(soup, courseGroupList)

            mainTag.append(displayTag)

            # generating html for each plan & each term
            htmlgen.placePlanDivs(displayTag, 
                                  sequenceDict,
                                  hexcolorlist, 
                                  soup,
                                  controller)

            javascriptgen.closeControllerJavaScript(controller)

    except FileNotFoundError as err:
       if (err.strerror == "No such file or directory"):
        raise FileNotFoundError("Either the template HTML file is not in the same directory as the script or" +
       " the output directory is not organized correctly or does not exist")
       else:
        raise FileNotFoundError(str(err))

    return soup

def writingHTML(soup):
    # writing output string to an output html file
    try:
        print("Writing final HTML.....")
        with open("./output/index.html", "w", encoding="utf-8") as output:
            output.write(str(soup))
    except FileNotFoundError:
        raise FileNotFoundError("The directory you are in does not have a directory named output.")

if __name__ == "__main__":
    window.mainloop()
    soup = main()
    writingHTML(soup)