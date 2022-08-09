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

######Main GUI Window #######
window = Tk()
window.title('Timetable Generator')
window.iconbitmap('GUI_images/favicon.ico')
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

#new window
def new_window():

    global new_img1, new_img2, new_img3, new_tutorial, new_web_img, new_header, new_footer
    helpWin = Toplevel()
    helpWin.geometry('1400x700')
    helpWin.title("Manual")
    helpWin.iconbitmap('output/images/favicon.ico')
    helpWin.resizable(0,0)

    #### Scroll bar ####
    # Create A Main Frame
    main_frame = Frame(helpWin)
    main_frame.pack(fill=BOTH, expand=1)

    # Create A Canvas
    my_canvas = Canvas(main_frame)
    my_canvas.pack(side=LEFT, fill=BOTH, expand=1)

    # Add A Scrollbar To The Canvas
    my_scrollbar = ttk.Scrollbar(main_frame, orient=VERTICAL, command=my_canvas.yview)
    my_scrollbar.pack(side=RIGHT, fill=Y)

    # Configure The Canvas
    my_canvas.configure(yscrollcommand=my_scrollbar.set)
    my_canvas.bind('<Configure>', lambda e: my_canvas.configure(scrollregion = my_canvas.bbox("all")))

    # Create ANOTHER Frame INSIDE the Canvas
    second_frame = Frame(my_canvas)

    # Add that New frame To a Window In The Canvas
    my_canvas.create_window((0,0), window=second_frame, anchor="nw")

    header_img = Image.open("GUI_images/helpbg.png")
    header_resize = header_img.resize((1600,100))
    new_header = ImageTk.PhotoImage(header_resize)
    header_label = Label(second_frame,image=new_header, anchor=W)
    header_label.place(x=0, y=0)

    header = Message(second_frame, 
    text="Timetable WebGen\nUser Manual",
    aspect=800,
    justify=CENTER,
    font= ('Helvetica 15 underline'),
    bg='#275D38',
    fg='white'
    )
    header.grid(row=0, column=1, pady=25)


    message1 = Label(second_frame, 
    text="1- Make sure the directory you are in has a directory named output and a template.html file."
    )
    message1.grid(row=1, column=0,padx=20, pady=20)

    message2 = Label(second_frame, 
    text="2- Make sure you have the following Excel files (All Excel files must be in the .xls format): "
    )
    message2.grid(row=2, column=0,padx=20, pady=20)

    #timetable.xls image
    excel_pic1 = Image.open("GUI_images/tableExcel.png")
    resized1 = excel_pic1.resize((100,100))
    new_img1 = ImageTk.PhotoImage(resized1)
    img_label = Label(second_frame,image=new_img1)
    img_label.grid(row=3, column=0)

    #sequencing.xls image
    excel_pic2 = Image.open("GUI_images/seqexcel.png")
    resized2 = excel_pic2.resize((100,100))
    new_img2 = ImageTk.PhotoImage(resized2)
    img_label2 = Label(second_frame,image=new_img2)
    img_label2.grid(row=3, column=1)


    #AU_Count.xls image
    accreditation_img = Image.open("GUI_images/AU_count.png")
    resized_img = accreditation_img.resize((100,100))
    new_img3 = ImageTk.PhotoImage(resized_img)
    img_label4 = Label(second_frame,image=new_img3)
    img_label4.grid(row=3, column=2, padx=150)


    #excel file descriptions
    pic1_description = Label(second_frame, text="This Excel file must contain\nall individual course information.")
    pic1_description.grid(row=4, column=0)

    pic2_description = Label(second_frame, text="This Excel file must contain\nall possible plan sequences.")
    pic2_description.grid(row=4, column=1)

    pic3_description = Label(second_frame, text="This Excel file must contain\nall accreditation unit information.")
    pic3_description.grid(row=4, column=2)


    message3 = Label(second_frame, 
    text="3- Type in the Excel file name (if it's present in the same directory as the program files) or\n provide it's path:"
    )
    message3.grid(row=5, column=0,padx=20, pady=25)

    #GUI image 
    tutorial_img = Image.open("GUI_images/tutorial.png")
    resized_img = tutorial_img.resize((500,300))
    new_tutorial = ImageTk.PhotoImage(resized_img)
    tut_label = Label(second_frame,image=new_tutorial)
    tut_label.grid(row=6, column=1, padx=10, pady=20)

    message4 = Label(second_frame, 
    text="4- Refresh the webpage and the timetable webpage will be generated! "
    )
    message4.grid(row=7, column=0,padx=20, pady=25)

    web_img = Image.open("GUI_images/website.png")
    resized_webImg = web_img.resize((500, 300))
    new_web_img = ImageTk.PhotoImage(resized_webImg)
    web_label = Label(second_frame, image=new_web_img)
    web_label.grid(row=8, column=1)

    footer_img = Image.open("GUI_images/helpbg.png")
    footer_resize = footer_img.resize((1630,200))
    new_footer = ImageTk.PhotoImage(footer_resize)
    footer_label = Label(second_frame,image=new_footer, anchor=W)
    footer_label.place(x = 0, y=1180)
    footer = Message(second_frame, 
    text="Developers:\nJason Kim, Summer 2022\n Moaz Abdelmonem, Summer 2022\n Zachary Schmidt, Summer 2022\n\n Supervised by: Dr. David Nobes ",
    aspect=800,
    justify=CENTER,
    font= ('Helvetica 12'),
    bg='#275D38',
    fg='white'
    )
    footer.grid(row=9, column=1, pady=25)

########## Menu ##########
menubar = Menu(window)
window.config(menu=menubar)

# create the Help menu
help_menu = Menu(
    menubar,
    tearoff=0
)

menubar = Menu(window)
window.config(menu=menubar)
# create the Help menu
help_menu = Menu(
    menubar,
    tearoff=0
)

# adding the Help menu to the menubar
menubar.add_cascade(
    label="Help",
    menu=help_menu
)

help_menu.add_command(
    label='About...',
    command=new_window

)
help_menu.add_separator()
help_menu.add_command(
    label='Version1-2022',
    font='Times 10'
    
)

def writingHTML(soup):
    # writing output string to an output html file
    try:
        print("Writing final HTML.....")
        with open("./output/index.html", "w", encoding="utf-8") as output:
            output.write(str(soup))
    except FileNotFoundError:
        raise FileNotFoundError("The directory you are in does not have a directory named output.")

def main():
    try:
        with open("template.html") as input:
            controller = open("./output/js/controller.js", "w")
            soup = BeautifulSoup(input, 'html.parser')

            deptName = department.get()

            # parsing the Excel files
            sequenceDict = courseparsing.parseCourses(tableExcel.get(), seqExcel.get(), accrExcel.get(), deptName)

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

    writingHTML(soup)
    messagebox.showinfo('Status',message="Webpage successfully generated!")
    


def show(selection):
    department.delete(0, END)
    department.insert(tkinter.END, selection) 


########Timetable excel file UI########
tableEntry_img = PhotoImage(file = f"GUI_images/img_textBox0.png")
tableEntry_bg = canvas.create_image(
    826.5, 151.5,
    image = tableEntry_img)

tableExcel = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0,
    font='halvetica 12')
tableExcel.insert(tkinter.END, "")
tableExcel.place(
    x = 687, y = 134,
    width = 279,
    height = 33)

########Sequencing excel file UI########
seqEntry_img = PhotoImage(file = f"GUI_images/img_textBox1.png")
seqEntry_bg = canvas.create_image(
    826.5, 226.5,
    image = seqEntry_img)

seqExcel = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0,
    font='halvetica 12')
seqExcel.insert(tkinter.END, "")
seqExcel.place(
    x = 687, y = 209,
    width = 279,
    height = 33)

########Accreditation Excel file UI########
accrEntry_img = PhotoImage(file = f"GUI_images/img_textBox2.png")
accrEntry_bg = canvas.create_image(
    826.5, 304.5,
    image = accrEntry_img)

accrExcel = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0,
    font='halvetica 12')
accrExcel.insert(tkinter.END, "")
accrExcel.place(
    x = 687, y = 287,
    width = 279,
    height = 33)

########department name UI########
deptEntry_img = PhotoImage(file = f"GUI_images/img_textBox3.png")
deptEntry_bg = canvas.create_image(
    826.5, 382.5,
    image = deptEntry_img)

department = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0,
    font='halvetica 12')
department.insert(tkinter.END, "")
department.place(
    x = 687, y = 365,
    width = 279,
    height = 33)

########deptNames menu########
menubutton = tkinter.Menubutton(window, text="Select", font='Helvatica 13',
                           borderwidth=0, relief="raised",
                           indicatoron=True, bg='#5D1695',fg='White', border=3)
deptMenu = tkinter.Menu(menubutton, tearoff=False)
menubutton.configure(menu=deptMenu)
deptMenu.add_radiobutton(label="Chemical Engineering", font='halvetica 12', command=lambda: show('Chemical Engineering'))
deptMenu.add_radiobutton(label="Civil Engineering", font='halvetica 12', command= lambda:show('Civil Engineering'))
deptMenu.add_radiobutton(label="Computer Engineering", font='halvetica 12', command= lambda:show('Computer Engineering'))
deptMenu.add_radiobutton(label="Electrical Engineering", font='halvetica 12', command= lambda:show('Electrical Engineering'))
deptMenu.add_radiobutton(label="Engineering Physics", font='halvetica 12',command= lambda:show('Engineering Physics'))
deptMenu.add_radiobutton(label="Materials Engineering", font='halvetica 12',command= lambda:show('Materials Engineering'))
deptMenu.add_radiobutton(label="Mechanical Engineering", font='halvetica 12',command= lambda:show('Mechanical Engineering'))
deptMenu.add_radiobutton(label="Mechatronics Engineering", font='halvetica 12',command= lambda:show('Mechatronics Engineering'))
deptMenu.add_radiobutton(label="Mining Engineering", font='halvetica 12',command= lambda:show('Mining Engineering'))
deptMenu.add_radiobutton(label="Petroleum Engineering", font='halvetica 12',command= lambda:show('Petroleum Engineering'))

menubutton.place(x=1005, y=365)

background_img = PhotoImage(file = f"GUI_images/background.png")
background = canvas.create_image(
    467.5, 297.5,
    image=background_img)


######browse functions######
def tableBrowse():
    filename =filedialog.askopenfilename()
    tableExcel.delete(0, END)
    tableExcel.insert(tkinter.END, filename) 

def seqBrowse():
    filename =filedialog.askopenfilename()
    seqExcel.delete(0, END)
    seqExcel.insert(tkinter.END, filename) 

def accBrowse():
    filename =filedialog.askopenfilename()
    accrExcel.delete(0, END)
    accrExcel.insert(tkinter.END, filename) 

######Browse buttons######
browseImg1 = PhotoImage(file = f"GUI_images/img1.png")
button1_excel = Button(
    image = browseImg1,
    borderwidth = 0,
    highlightthickness = 0,
    command = tableBrowse,
    relief = "flat")

button1_excel.place(
    x = 1001, y = 134,
    width = 95,
    height = 37)

browseImg2 = PhotoImage(file = f"GUI_images/img2.png")
button2_excel = Button(
    image = browseImg2,
    borderwidth = 0,
    highlightthickness = 0,
    command = seqBrowse,
    relief = "flat")

button2_excel.place(
    x = 1001, y = 213,
    width = 95,
    height = 38)

browseImg3 = PhotoImage(file = f"GUI_images/img3.png")
button3_excel = Button(
    image = browseImg3,
    borderwidth = 0,
    highlightthickness = 0,
    command = accBrowse,
    relief = "flat")

button3_excel.place(
    x = 1001, y = 288,
    width = 95,
    height = 37)

######Generation button######
genImg = PhotoImage(file = f"GUI_images/img0.png")
generate_button = Button(
    image = genImg,
    borderwidth = 0,
    highlightthickness = 0,
    command = main,
    relief = "flat")

generate_button.place(
    x = 764, y = 427,
    width = 126,
    height = 43)

if __name__ == "__main__":
    window.mainloop()