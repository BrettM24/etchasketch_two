# etchasketch_two
Remote repository for the 2nd attempt of ETCH-A-SKETCH

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Program runthrough for user:

Screen loads. User is instructed to select board option to begin playing.

User can press board button - different board dimension options are loaded as buttons
- can choose different screen size i.e. how many square grids is the drawing surface made up of
- drawing board is initially clear, and an option needs to be selected in order to generate screen
- can press an option again and current screen be depopulated (if clear selected) or depopulated and repopulated (if option selected).

Can press color button - loads different colors which can be selected
- Updates colors of multiple aspects of screen
- Updates drawing color used when "color" style is selected

Press Style button - loads different style options
- Different style options can be selected
- Eraser: sets color back to "black"
- Lightscale: Goes from darker to lighter
- Multicolor: at random, selects one of 9 colors to color the grid with

Different options selected update the status bar

Drawing can only commence when a board has been loaded
This can be seen in the status bar, where "LOADED: - " will be displaying
If e.g. 10X10 is selected, then 10X10 will display in the status and you will know you can draw

To activate drawing you can right click in the loaded drawing board, and you will see in the status bar "ON".
To deactivate click in the drawing board again. 

When activated/"ON", to draw you can move mouse over drawing board grids to color/style

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Detailed Notes:

(How this will work: Will be making comments in code from which I will refer to with referencing.)
(Will also have deeper discussion on how event listners will interact functions and how it all fits together)

So where to begin

Logically the user would look to press "BOARD" to ultimately load a board and commence drawing.
So BOARD is pressed. Event listner is set up to listen for click.
We enter the event listner (Look at #1's for this code).
Query selectors set up to read certain details from the board, looking for whether the selector returns something of a Null value or not.
It looks at what buttons are populating settingsBarTwo (Look at HTML).
If the selector returns something that is not a null value then will know a button from a previous selection is currently populating the bar.
If board buttons are already populating then will do nothing.
Otherwise if color/style buttons showing or if empty, then will populate board option buttons.

Remove/Populate functions for settings Bar Two:
- Functions all work similarly.
- Core principle is the bar is made up of a certain number of grid rows (One column).
- To make sure these transitions between different options works, emphasis is on the grid being exactly fully empty/    filled when these functions are called, to ensure the buttons display correctly and nothing displays incorrectly.
- Populating: divs given an ID, buttons given ID and given style/content, then appended in specific order.
- Removing: each element is called using ID's from populating, and removed
- For CLEAR button: Populates/removes empty divs

#2
Event listeners for each of the different board options.
All event listners and callbacks have similar logic within their bodies.
Similar to above, query selectors attempt to find ID of boardBody, and therefore know what is currently loaded on the board.
Then for whichever returns a value other than null - therefore this option is loaded - logic is used to determine how to regenerate screen or clear it (depending on option).
Basic flow of one of these logic bodies: empty currently loaded board, change class of board to class of new option selected, load new board, update status bar of current board loaded using boardLoaded function.
If lets say 10X10 board loaded -> if you press 10X10 will regenerate 10X10 board

Populate/Depopulate board grids:
- Board is a grid
- different classes are used to define the number of grid blocks, class set to boardBody
- When e.g. 20X20 is clicked - class changed to boardBodyTwenty
- The grid will have 400 blocks made up of the interception of the rows and columns
- Then divs are, with id gridBlockDraw, inserted or deleted from the boards, in this case 400 are inserted.

#3
Color buttons:
Similar to baord buttons explained above (Query selectors used to determine what is currently occupying settingsBarTwo).
Populating of color buttons and removing same as for board buttons.
When the color buttons have been loaded, event listeners set up, and listen for when any of the color buttons are pressed.
When a color is pressed -> Will run a color changing function such as changeTextAllWhite.
#4: When such function is run, it changes the color of certain aspects of the screen such as the text color and border color of the buttons and header info.                                                 
For the drawing border -> bit more code needed, as the class of bodyBoard changes and therefore a bit of logic needed to determine what the current class of the board is, to identify it on the DOM and update the color.

Style buttons:
Similar to baord buttons explained above (Query selectors used to determine what is currently occupying settingsBarTwo).
Populating of style buttons and removing same as for board buttons.
When settings button pressed, event listners created for each of the style options
Event listner then updates the style being displayed in the status bar

Close button:
Clears settings bar two of displaying any buttons for any of the other options
Uses similar type of functions as explained above.


Drawing functions:

Following functions involved:
- drawToggle
- drawMain
- drawEraser
- drawLightScale
- drawMultiColor

DrawToggle:
- Called when a click of the mouse is made.
- Looks for a click taking place in an element with a gridBlockDraw ID 
- For this to occur a board must have already been loaded
- If a valid click is made the drawing status on the status bar is toggled ON/OFF

DrawMain:
- Called when mouse is moved using window.addeventlistner
- If draw status is ON (from draw toggle above) and mouse is moving over gridBlockDraws, then
- Logic is used to check what current style option chosen is and "draws" by coloring grid blocks.
- If color is currently selected: Current color chosen (drawn from "SETTINGS" text) is read and used update color of    gridBlockDraw mouse is currently on.
- If Lightscale chosen: drawLightScale called
- If Multicolor chosen: drawMultiColor called

DrawLightScale: #6
- Uses rgb color and escalates numbers to go from dark to light
- If color is not on the range between black and white then will set grid block to black
- If in this range then will increment so start making grid color lighter and lighter until white
- In this way the escalation can occur as the previous shade is stored in the DOM, and is incremented each time the function is run
- Look at code 

DrawMultiColor:
- Function generates random number between 0 and 9.
- Then, for example, lets say number between 0 and smaller than 1.
- Then color of gridBlockDraw will be set to white.
- Yellow is 1 to less than 2, and so on until black at 8 to less than 9.
