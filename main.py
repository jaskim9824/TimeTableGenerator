import courseparsing
import coursegroupparsing
from bs4 import BeautifulSoup
import htmlgen

def main():
    try:
        with open("template.html") as input:
            soup = BeautifulSoup(input, 'html.parser')
            courseObjDict, sequenceDict = courseparsing.parseCourses("TimeTable.xls", "Sequencing.xls")
            deptName = "Test Department"

            # extracting course group information
            courseGroupDict = coursegroupparsing.extractPlanCourseGroupDict(sequenceDict)
            courseGroupList = coursegroupparsing.findListofAllCourseGroups(courseGroupDict)
            intitalCourseGroupVals = coursegroupparsing.findIntitalValuesofCourseGroups(courseGroupDict, courseGroupList)

            topTitleTag = soup.head.find("title")
            titleTag = soup.body.find("a", class_="site-title")

            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")

            htmlgen.switchTitle(titleTag, topTitleTag, deptName)

            formTag = mainTag.find(id = "planlegend")

            termTag = mainTag.find(id = "termlegend")

            courseGroupTag = mainTag.find(id = "optionlegend")

            htmlgen.placeRadioInputs(formTag, termTag, courseGroupTag, courseGroupDict, sequenceDict, soup)

            # locating course group selector
            # courseGroupSelectTag = soup.body.find("div", class_="coursegroupselector")

            # placing submenu radio inputs
            # htmlgen.placeCourseGroupRadioInputs(courseGroupSelectTag, soup, courseGroupDict)

            displayTag = htmlgen.generateDisplayDiv(soup, courseGroupList)

            mainTag.append(displayTag)

            htmlgen.placePlanDivs(displayTag, 
                                  sequenceDict, 
                                  soup)

    except FileNotFoundError as err:
       if (err.strerror == "No such file or directory"):
        raise FileNotFoundError("Either the template HTML file is not in the same directory as the script or" +
       " the output directory is not organized correctly or does not exist")
       else:
        raise FileNotFoundError(str(err))

    return soup

def writingHTML(soup):
    # writing output to an output html
    try:
        print("Writing final HTML.....")
        with open("./output/index.html", "w", encoding="utf-8") as output:
            output.write(str(soup))
    except FileNotFoundError:
        raise FileNotFoundError("The directory you are in does not have a directory named output.")

if __name__ == "__main__":
    soup = main()
    writingHTML(soup)