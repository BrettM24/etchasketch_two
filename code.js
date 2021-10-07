//Functions
function populateColorButtons(){

    const settingsBarTwo = document.querySelector(".settingsBarTwo");

    const divOne = document.createElement('div');
    divOne.setAttribute('id', "colorEmptyDiv"); 

    const divTwo = document.createElement('div');
    divTwo.setAttribute('id', "colorEmptyDiv"); 

    const divThree = document.createElement('div');
    divThree.setAttribute('id', "colorEmptyDiv"); 

    const divFour = document.createElement('div');
    divFour.setAttribute('id', "colorEmptyDiv"); 

    const divFive = document.createElement('div');
    divFive.setAttribute('id', "colorEmptyDiv"); 

    const divSix = document.createElement('div');
    divSix.setAttribute('id', "colorEmptyDiv"); 

    const divSeven = document.createElement('div');
    divSeven.setAttribute('id', "colorEmptyDiv"); 

    const divEight = document.createElement('div');
    divEight.setAttribute('id', "colorEmptyDiv"); 

    const divNine = document.createElement('div');
    divNine.setAttribute('id', "colorEmptyDiv"); 

    const divTen = document.createElement('div');
    divTen.setAttribute('id', "colorEmptyDiv"); 

    const divEleven = document.createElement('div');
    divEleven.setAttribute('id', "colorEmptyDiv"); 

    const divTwelve = document.createElement('div');
    divTwelve.setAttribute('id', "colorEmptyDiv"); 

    const divThirteen = document.createElement('div');
    divThirteen.setAttribute('id', "colorEmptyDiv"); 


    const divRowOne = document.createElement('div');
    divRowOne.setAttribute('id', "colorRowOne"); 

    const divRowTwo = document.createElement('div');
    divRowTwo.setAttribute('id', "colorRowTwo"); 

    const divRowThree = document.createElement('div');
    divRowThree.setAttribute('id', "colorRowThree"); 

    const divRowFour = document.createElement('div');
    divRowFour.setAttribute('id', "colorRowFour"); 


    const buttonOne = document.createElement('button');
    buttonOne.setAttribute('id', "buttonColorWhite");
    buttonOne.textContent = "WHITE";

    const buttonTwo = document.createElement('button');
    buttonTwo.setAttribute('id', "buttonColorYellow");
    buttonTwo.textContent = "YELLOW";

    const buttonThree = document.createElement('button');
    buttonThree.setAttribute('id', "buttonColorOrange");
    buttonThree.textContent = "ORANGE";

    const buttonFour = document.createElement('button');
    buttonFour.setAttribute('id', "buttonColorBlue");
    buttonFour.textContent = "BLUE";

    const buttonFive = document.createElement('button');
    buttonFive.setAttribute('id', "buttonColorGreen");
    buttonFive.textContent = "GREEN";

    const buttonSix = document.createElement('button');
    buttonSix.setAttribute('id', "buttonColorRed");
    buttonSix.textContent = "RED";

    const buttonSeven = document.createElement('button');
    buttonSeven.setAttribute('id', "buttonColorPink");
    buttonSeven.textContent = "PINK";

    const buttonEight = document.createElement('button');
    buttonEight.setAttribute('id', "buttonColorPurple");
    buttonEight.textContent = "PURPLE";

    settingsBarTwo.appendChild(divOne);
    settingsBarTwo.appendChild(divRowOne);
    settingsBarTwo.appendChild(divTwo);
    settingsBarTwo.appendChild(divRowTwo);
    settingsBarTwo.appendChild(divThree);
    settingsBarTwo.appendChild(divRowThree);
    settingsBarTwo.appendChild(divFour);
    settingsBarTwo.appendChild(divRowFour);
    settingsBarTwo.appendChild(divFive);
    settingsBarTwo.appendChild(divSix);
    settingsBarTwo.appendChild(divSeven);
    settingsBarTwo.appendChild(divEight);
    settingsBarTwo.appendChild(divThirteen);

    const colorRowOne = document.querySelector("#colorRowOne");
    colorRowOne.appendChild(buttonOne);
    colorRowOne.appendChild(divNine);
    colorRowOne.appendChild(buttonTwo);

    const colorRowTwo = document.querySelector("#colorRowTwo");
    colorRowTwo.appendChild(buttonThree);
    colorRowTwo.appendChild(divTen);
    colorRowTwo.appendChild(buttonFour);

    const colorRowThree = document.querySelector("#colorRowThree");
    colorRowThree.appendChild(buttonFive);
    colorRowThree.appendChild(divEleven);
    colorRowThree.appendChild(buttonSix);

    const colorRowFour = document.querySelector("#colorRowFour");
    colorRowFour.appendChild(buttonSeven);
    colorRowFour.appendChild(divTwelve);
    colorRowFour.appendChild(buttonEight);

}

function populateStyleButtons(){
    const settingsBarTwo = document.querySelector(".settingsBarTwo");

    divOne = document.createElement('div');
    divOne.setAttribute('id', 'styleEmptyDiv');
    
    divTwo = document.createElement('div');
    divTwo.setAttribute('id', 'styleEmptyDiv');

    divThree = document.createElement('div');
    divThree.setAttribute('id', 'styleEmptyDiv');

    divFour = document.createElement('div');
    divFour.setAttribute('id', 'styleEmptyDiv');

    divFive = document.createElement('div');
    divFive.setAttribute('id', 'styleEmptyDiv');

    divSix = document.createElement('div');
    divSix.setAttribute('id', 'styleEmptyDiv');

    divSeven = document.createElement('div');
    divSeven.setAttribute('id', 'styleEmptyDiv');

    divEight = document.createElement('div');
    divEight.setAttribute('id', 'styleEmptyDiv');

    divNine = document.createElement('div');
    divNine.setAttribute('id', 'styleEmptyDiv');

    // Getting the current 'color' of all the text, and generating the string to be set as a style attribute for buttons
    let settingsTextNode = document.querySelector('#settingsText');
    let settingsTextStyle = window.getComputedStyle(settingsTextNode);
    let settingsTextColor = settingsTextStyle.getPropertyValue('color');
    let textBorderColorMethodStatement = ('color:' + settingsTextColor + ';border-color:' + settingsTextColor);
    

    buttonOne = document.createElement('button');
    buttonOne.setAttribute('id', 'buttonStyleEraser');
    buttonOne.textContent = 'ERASER';
    buttonOne.setAttribute('style', textBorderColorMethodStatement);

    buttonTwo = document.createElement('button');
    buttonTwo.setAttribute('id', 'buttonStyleLight');
    buttonTwo.textContent = 'LIGHTSCALE';
    buttonTwo.setAttribute('style', textBorderColorMethodStatement);

    buttonThree = document.createElement('button');
    buttonThree.setAttribute('id', 'buttonStyleMulti');
    buttonThree.textContent = 'MULTICOLOR';
    buttonThree.setAttribute('style', textBorderColorMethodStatement);

    buttonFour = document.createElement('button');
    buttonFour.setAttribute('id', 'buttonStyleColor');
    buttonFour.textContent = 'COLOR';
    buttonFour.setAttribute('style', textBorderColorMethodStatement);

    settingsBarTwo.appendChild(divOne);
    settingsBarTwo.appendChild(buttonOne);
    settingsBarTwo.appendChild(divTwo);
    settingsBarTwo.appendChild(buttonTwo);
    settingsBarTwo.appendChild(divThree);
    settingsBarTwo.appendChild(buttonThree);
    settingsBarTwo.appendChild(divFour);
    settingsBarTwo.appendChild(buttonFour);
    settingsBarTwo.appendChild(divFive);
    settingsBarTwo.appendChild(divSix);
    settingsBarTwo.appendChild(divSeven);
    settingsBarTwo.appendChild(divEight);
    settingsBarTwo.appendChild(divNine);

}

function populateClearBar(){
    const settingsBarTwo = document.querySelector(".settingsBarTwo");
    let n = 0;

    while(n<13){

      let emptyDiv = document.createElement('div');
      emptyDiv.setAttribute('id', 'emptyDiv');  
      settingsBarTwo.appendChild(emptyDiv);
      n++;  
      
    }
}

// Function which populates settingsBarTwo with buttons/divs to show board dimensions options
function populateBoardDimensions(){
  const settingsBarTwo = document.querySelector(".settingsBarTwo");
  
  const divOne = document.createElement('div');
  divOne.setAttribute('id', "boardEmptyDiv"); 

  const divTwo = document.createElement('div');
  divTwo.setAttribute('id', "boardEmptyDiv");

  const divThree = document.createElement('div');
  divThree.setAttribute('id', "boardEmptyDiv");

  const divFour = document.createElement('div');
  divFour.setAttribute('id', "boardEmptyDiv");

  const divFive = document.createElement('div');
  divFive.setAttribute('id', "boardEmptyDiv");

  const divSix = document.createElement('div');
  divSix.setAttribute('id', "boardEmptyDiv");

  const divSeven = document.createElement('div');
  divSeven.setAttribute('id', "boardEmptyDiv");

  const divEight = document.createElement('div');
  divEight.setAttribute('id', "boardEmptyDiv");
  
  // Getting the current 'color' of all the text, and generating the string to be set as a style attribute for buttons
  let settingsTextNode = document.querySelector('#settingsText');
  let settingsTextStyle = window.getComputedStyle(settingsTextNode);
  let settingsTextColor = settingsTextStyle.getPropertyValue('color');
  let textBorderColorMethodStatement = ('color:' + settingsTextColor + ';border-color:' + settingsTextColor);

  const buttonBoardClear = document.createElement('button');
  buttonBoardClear.setAttribute('id', "buttonBoardClear");
  buttonBoardClear.textContent = "CLEAR";
  buttonBoardClear.setAttribute('style', textBorderColorMethodStatement);

  const buttonBoardTen = document.createElement('button');
  buttonBoardTen.setAttribute('id', "buttonBoardTen");
  buttonBoardTen.textContent = "10 X 10";
  buttonBoardTen.setAttribute('style', textBorderColorMethodStatement);

  const buttonBoardTwenty = document.createElement('button');
  buttonBoardTwenty.setAttribute('id', "buttonBoardTwenty");
  buttonBoardTwenty.textContent = "20 X 20";
  buttonBoardTwenty.setAttribute('style', textBorderColorMethodStatement);

  const buttonBoardFifty = document.createElement('button');
  buttonBoardFifty.setAttribute('id', "buttonBoardFifty");
  buttonBoardFifty.textContent = "50 X 50";
  buttonBoardFifty.setAttribute('style', textBorderColorMethodStatement);

  const buttonBoardHundred = document.createElement('button');
  buttonBoardHundred.setAttribute('id', "buttonBoardHundred");
  buttonBoardHundred.textContent = "100 X 100";
  buttonBoardHundred.setAttribute('style', textBorderColorMethodStatement);
      
  settingsBarTwo.appendChild(divOne);
  settingsBarTwo.appendChild(buttonBoardTen); 
  settingsBarTwo.appendChild(divTwo);
  settingsBarTwo.appendChild(buttonBoardTwenty);
  settingsBarTwo.appendChild(divThree);
  settingsBarTwo.appendChild(buttonBoardFifty);
  settingsBarTwo.appendChild(divFour);
  settingsBarTwo.appendChild(buttonBoardHundred);
  settingsBarTwo.appendChild(divFive);
  settingsBarTwo.appendChild(buttonBoardClear);
  settingsBarTwo.appendChild(divSix);
  settingsBarTwo.appendChild(divSeven);
  settingsBarTwo.appendChild(divEight);

}

function removeBoardButtons(){
    const settingsBarTwo = document.querySelector(".settingsBarTwo");
   
    let emptyDivBoard = document.querySelector("#boardEmptyDiv");
    settingsBarTwo.removeChild(emptyDivBoard);

    let buttonBoardTen = document.querySelector("#buttonBoardTen");
    settingsBarTwo.removeChild(buttonBoardTen);

    emptyDivBoard = document.querySelector("#boardEmptyDiv");
    settingsBarTwo.removeChild(emptyDivBoard);

    let buttonBoardTwenty = document.querySelector("#buttonBoardTwenty");
    settingsBarTwo.removeChild(buttonBoardTwenty);

    emptyDivBoard = document.querySelector("#boardEmptyDiv");
    settingsBarTwo.removeChild(emptyDivBoard);

    let buttonBoardFifty = document.querySelector("#buttonBoardFifty");
    settingsBarTwo.removeChild(buttonBoardFifty);

    emptyDivBoard = document.querySelector("#boardEmptyDiv");
    settingsBarTwo.removeChild(emptyDivBoard);

    let buttonBoardHundred = document.querySelector("#buttonBoardHundred");
    settingsBarTwo.removeChild(buttonBoardHundred);

    emptyDivBoard = document.querySelector("#boardEmptyDiv");
    settingsBarTwo.removeChild(emptyDivBoard);

    let buttonBoardClear = document.querySelector("#buttonBoardClear");
    settingsBarTwo.removeChild(buttonBoardClear);

    emptyDivBoard = document.querySelector("#boardEmptyDiv");
    settingsBarTwo.removeChild(emptyDivBoard);

    emptyDivBoard = document.querySelector("#boardEmptyDiv");
    settingsBarTwo.removeChild(emptyDivBoard);

    emptyDivBoard = document.querySelector("#boardEmptyDiv");
    settingsBarTwo.removeChild(emptyDivBoard);
}

function removeColorButtons(){
    const settingsBarTwo = document.querySelector(".settingsBarTwo");

    let emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);

    const colorRowOne = document.querySelector("#colorRowOne");
    settingsBarTwo.removeChild(colorRowOne);

    emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);

    const colorRowTwo = document.querySelector("#colorRowTwo");
    settingsBarTwo.removeChild(colorRowTwo);

    emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);

    const colorRowThree = document.querySelector("#colorRowThree");
    settingsBarTwo.removeChild(colorRowThree);

    emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);

    const colorRowFour = document.querySelector("#colorRowFour");
    settingsBarTwo.removeChild(colorRowFour);

    emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);

    emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);

    emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);

    emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);

    emptyDivColor = document.querySelector("#colorEmptyDiv");
    settingsBarTwo.removeChild(emptyDivColor);
}

function removeStyleButtons(){
    const settingsBarTwo = document.querySelector(".settingsBarTwo");

    let emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);

    const eraserButton = document.querySelector("#buttonStyleEraser");
    settingsBarTwo.removeChild(eraserButton);

    emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);

    const scaleButton = document.querySelector("#buttonStyleLight");
    settingsBarTwo.removeChild(scaleButton);

    emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);

    const multiButton = document.querySelector("#buttonStyleMulti");
    settingsBarTwo.removeChild(multiButton);

    emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);

    const colorButton = document.querySelector("#buttonStyleColor");
    settingsBarTwo.removeChild(colorButton);

    emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);

    emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);

    emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);

    emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);

    emptyDivStyle = document.querySelector("#styleEmptyDiv");
    settingsBarTwo.removeChild(emptyDivStyle);
}

// Function which clears settingsBarTwo grid of empty divs, so it may be repopulated
function removeClearBar(){
    const settingsBarTwo = document.querySelector(".settingsBarTwo");
    let n = 0;

    // all div children in this node have the same ID (#emptyDiv)
    // there are 12 of these divs
    // code below looks for 12 of these divs and removes
    while(n < 13){
    const emptyDiv = document.querySelector("#emptyDiv");
    settingsBarTwo.removeChild(emptyDiv);
    n++;
    };
    
}

//Following 8 functions change the text color of text in code, and are called when the color buttons are pressed

function changeTextAllWhite(){                                                           //#4

    let colorWhite = 'color:rgb(193, 240, 248)';
    let colorBorderWhite = 'color:rgb(193, 240, 248);border-color:rgb(193, 240, 248)';

    let headerText = document.querySelector(".mainHeader");
    headerText.setAttribute('style', colorWhite);
    
    let infoLine = document.querySelector(".infoLine");
    infoLine.setAttribute('style', colorWhite);

    let settingsText = document.querySelector("#settingsText");
    settingsText.setAttribute('style', colorWhite);
    
    let buttonBoard = document.querySelector("#buttonSettingBoard");
    buttonBoard.setAttribute('style', colorBorderWhite);

    let buttonColor = document.querySelector("#buttonSettingColor");
    buttonColor.setAttribute('style', colorBorderWhite);

    let buttonStyle = document.querySelector("#buttonSettingStyle");
    buttonStyle.setAttribute('style', colorBorderWhite);

    let buttonClose = document.querySelector("#closeButton");
    buttonClose.setAttribute('style', colorBorderWhite);

    let statusTextStyleHeader = document.querySelector("#statusTextStyleHeader");
    statusTextStyleHeader.setAttribute('style', colorWhite);

    let statusTextStyleValue = document.querySelector("#statusTextStyleValue");
    statusTextStyleValue.setAttribute('style', colorWhite);

    let statusTextDrawHeader = document.querySelector("#statusTextDrawHeader");
    statusTextDrawHeader.setAttribute('style', colorWhite);

    let statusTextDrawValue = document.querySelector("#statusTextDrawValue");
    statusTextDrawValue.setAttribute('style', colorWhite);

    let statusTextDrawInstruction = document.querySelector("#statusTextDrawInstruction");
    statusTextDrawInstruction.setAttribute('style', colorWhite);

    let statusTextBoardHeader = document.querySelector("#statusTextBoardHeader");
    statusTextBoardHeader.setAttribute('style', colorWhite);

    let statusTextBoardValue = document.querySelector("#statusTextBoardValue");
    statusTextBoardValue.setAttribute('style', colorWhite);


    let boardBorder = document.querySelector(".boardBody");
    let boardBorderTen = document.querySelector(".boardBodyTen");
    let boardBorderTwenty = document.querySelector(".boardBodyTwenty");
    let boardBorderFifty = document.querySelector(".boardBodyFifty");
    let boardBorderHundred = document.querySelector(".boardBodyHundred");

    if(boardBorder != null){

      boardBorder.setAttribute('style', colorBorderWhite);

    }else if(boardBorderTen != null){
    
      boardBorderTen.setAttribute('style', colorBorderWhite);

    }else if(boardBorderTwenty != null){
    
      boardBorderTwenty.setAttribute('style', colorBorderWhite);

    }else if(boardBorderFifty != null){

      boardBorderFifty.setAttribute('style', colorBorderWhite);

    }else{
    
      boardBorderHundred.setAttribute('style', colorBorderWhite);

    };
}

function changeTextAllYellow(){

    let colorYellow = 'color:rgb(238, 253, 173)';
    let colorBorderYellow = 'color:rgb(238, 253, 173);border-color:rgb(238, 253, 173)';

    let headerText = document.querySelector(".mainHeader");
    headerText.setAttribute('style', colorYellow);
    
    let infoLine = document.querySelector(".infoLine");
    infoLine.setAttribute('style', colorYellow);

    let settingsText = document.querySelector("#settingsText");
    settingsText.setAttribute('style', colorYellow);
    
    let buttonBoard = document.querySelector("#buttonSettingBoard");
    buttonBoard.setAttribute('style', colorBorderYellow);

    let buttonColor = document.querySelector("#buttonSettingColor");
    buttonColor.setAttribute('style', colorBorderYellow);

    let buttonStyle = document.querySelector("#buttonSettingStyle");
    buttonStyle.setAttribute('style', colorBorderYellow);

    let buttonClose = document.querySelector("#closeButton");
    buttonClose.setAttribute('style', colorBorderYellow);

    let statusTextStyleHeader = document.querySelector("#statusTextStyleHeader");
    statusTextStyleHeader.setAttribute('style', colorYellow);

    let statusTextStyleValue = document.querySelector("#statusTextStyleValue");
    statusTextStyleValue.setAttribute('style', colorYellow);

    let statusTextDrawHeader = document.querySelector("#statusTextDrawHeader");
    statusTextDrawHeader.setAttribute('style', colorYellow);

    let statusTextDrawValue = document.querySelector("#statusTextDrawValue");
    statusTextDrawValue.setAttribute('style', colorYellow);

    let statusTextDrawInstruction = document.querySelector("#statusTextDrawInstruction");
    statusTextDrawInstruction.setAttribute('style', colorYellow);

    let statusTextBoardHeader = document.querySelector("#statusTextBoardHeader");
    statusTextBoardHeader.setAttribute('style', colorYellow);

    let statusTextBoardValue = document.querySelector("#statusTextBoardValue");
    statusTextBoardValue.setAttribute('style', colorYellow);


    let boardBorder = document.querySelector(".boardBody");
    let boardBorderTen = document.querySelector(".boardBodyTen");
    let boardBorderTwenty = document.querySelector(".boardBodyTwenty");
    let boardBorderFifty = document.querySelector(".boardBodyFifty");
    let boardBorderHundred = document.querySelector(".boardBodyHundred");

    if(boardBorder != null){

      boardBorder.setAttribute('style', colorBorderYellow);

    }else if(boardBorderTen != null){
    
      boardBorderTen.setAttribute('style', colorBorderYellow);

    }else if(boardBorderTwenty != null){
    
      boardBorderTwenty.setAttribute('style', colorBorderYellow);

    }else if(boardBorderFifty != null){

      boardBorderFifty.setAttribute('style', colorBorderYellow);

    }else{
    
      boardBorderHundred.setAttribute('style', colorBorderYellow);

    };
}

function changeTextAllOrange(){

    let colorOrange = 'color:rgb(255, 210, 144)';
    let colorBorderOrange = 'color:rgb(255, 210, 144);border-color:rgb(255, 210, 144)';

    let headerText = document.querySelector(".mainHeader");
    headerText.setAttribute('style', colorOrange);
    
    let infoLine = document.querySelector(".infoLine");
    infoLine.setAttribute('style', colorOrange);

    let settingsText = document.querySelector("#settingsText");
    settingsText.setAttribute('style', colorOrange);
    
    let buttonBoard = document.querySelector("#buttonSettingBoard");
    buttonBoard.setAttribute('style', colorBorderOrange);

    let buttonColor = document.querySelector("#buttonSettingColor");
    buttonColor.setAttribute('style', colorBorderOrange);

    let buttonStyle = document.querySelector("#buttonSettingStyle");
    buttonStyle.setAttribute('style', colorBorderOrange);

    let buttonClose = document.querySelector("#closeButton");
    buttonClose.setAttribute('style', colorBorderOrange);

    let statusTextStyleHeader = document.querySelector("#statusTextStyleHeader");
    statusTextStyleHeader.setAttribute('style', colorOrange);

    let statusTextStyleValue = document.querySelector("#statusTextStyleValue");
    statusTextStyleValue.setAttribute('style', colorOrange);

    let statusTextDrawHeader = document.querySelector("#statusTextDrawHeader");
    statusTextDrawHeader.setAttribute('style', colorOrange);

    let statusTextDrawValue = document.querySelector("#statusTextDrawValue");
    statusTextDrawValue.setAttribute('style', colorOrange);

    let statusTextDrawInstruction = document.querySelector("#statusTextDrawInstruction");
    statusTextDrawInstruction.setAttribute('style', colorOrange);

    let statusTextBoardHeader = document.querySelector("#statusTextBoardHeader");
    statusTextBoardHeader.setAttribute('style', colorOrange);

    let statusTextBoardValue = document.querySelector("#statusTextBoardValue");
    statusTextBoardValue.setAttribute('style', colorOrange);


    let boardBorder = document.querySelector(".boardBody");
    let boardBorderTen = document.querySelector(".boardBodyTen");
    let boardBorderTwenty = document.querySelector(".boardBodyTwenty");
    let boardBorderFifty = document.querySelector(".boardBodyFifty");
    let boardBorderHundred = document.querySelector(".boardBodyHundred");

    if(boardBorder != null){

      boardBorder.setAttribute('style', colorBorderOrange);

    }else if(boardBorderTen != null){
    
      boardBorderTen.setAttribute('style', colorBorderOrange);

    }else if(boardBorderTwenty != null){
    
      boardBorderTwenty.setAttribute('style', colorBorderOrange);

    }else if(boardBorderFifty != null){

      boardBorderFifty.setAttribute('style', colorBorderOrange);

    }else{
    
      boardBorderHundred.setAttribute('style', colorBorderOrange);

    };
}

function changeTextAllBlue(){

    let colorBlue = 'color:rgb(128, 172, 255)';
    let colorBorderBlue = 'color:rgb(128, 172, 255);border-color:rgb(128, 172, 255)';

    let headerText = document.querySelector(".mainHeader");
    headerText.setAttribute('style', colorBlue);
    
    let infoLine = document.querySelector(".infoLine");
    infoLine.setAttribute('style', colorBlue);

    let settingsText = document.querySelector("#settingsText");
    settingsText.setAttribute('style', colorBlue);
    
    let buttonBoard = document.querySelector("#buttonSettingBoard");
    buttonBoard.setAttribute('style', colorBorderBlue);

    let buttonColor = document.querySelector("#buttonSettingColor");
    buttonColor.setAttribute('style', colorBorderBlue);

    let buttonStyle = document.querySelector("#buttonSettingStyle");
    buttonStyle.setAttribute('style', colorBorderBlue);

    let buttonClose = document.querySelector("#closeButton");
    buttonClose.setAttribute('style', colorBorderBlue);

    let statusTextStyleHeader = document.querySelector("#statusTextStyleHeader");
    statusTextStyleHeader.setAttribute('style', colorBlue);

    let statusTextStyleValue = document.querySelector("#statusTextStyleValue");
    statusTextStyleValue.setAttribute('style', colorBlue);

    let statusTextDrawHeader = document.querySelector("#statusTextDrawHeader");
    statusTextDrawHeader.setAttribute('style', colorBlue);

    let statusTextDrawValue = document.querySelector("#statusTextDrawValue");
    statusTextDrawValue.setAttribute('style', colorBlue);

    let statusTextDrawInstruction = document.querySelector("#statusTextDrawInstruction");
    statusTextDrawInstruction.setAttribute('style', colorBlue);

    let statusTextBoardHeader = document.querySelector("#statusTextBoardHeader");
    statusTextBoardHeader.setAttribute('style', colorBlue);

    let statusTextBoardValue = document.querySelector("#statusTextBoardValue");
    statusTextBoardValue.setAttribute('style', colorBlue);


    let boardBorder = document.querySelector(".boardBody");
    let boardBorderTen = document.querySelector(".boardBodyTen");
    let boardBorderTwenty = document.querySelector(".boardBodyTwenty");
    let boardBorderFifty = document.querySelector(".boardBodyFifty");
    let boardBorderHundred = document.querySelector(".boardBodyHundred");

    if(boardBorder != null){

      boardBorder.setAttribute('style', colorBorderBlue);

    }else if(boardBorderTen != null){
    
      boardBorderTen.setAttribute('style', colorBorderBlue);

    }else if(boardBorderTwenty != null){
    
      boardBorderTwenty.setAttribute('style', colorBorderBlue);

    }else if(boardBorderFifty != null){

      boardBorderFifty.setAttribute('style', colorBorderBlue);

    }else{
    
      boardBorderHundred.setAttribute('style', colorBorderBlue);

    };
}

function changeTextAllGreen(){

    let colorGreen = 'color:rgb(160, 255, 160)';
    let colorBorderGreen = 'color:rgb(160, 255, 160);border-color:rgb(160, 255, 160)';

    let headerText = document.querySelector(".mainHeader");
    headerText.setAttribute('style', colorGreen);
    
    let infoLine = document.querySelector(".infoLine");
    infoLine.setAttribute('style', colorGreen);

    let settingsText = document.querySelector("#settingsText");
    settingsText.setAttribute('style', colorGreen);
    
    let buttonBoard = document.querySelector("#buttonSettingBoard");
    buttonBoard.setAttribute('style', colorBorderGreen);

    let buttonColor = document.querySelector("#buttonSettingColor");
    buttonColor.setAttribute('style', colorBorderGreen);

    let buttonStyle = document.querySelector("#buttonSettingStyle");
    buttonStyle.setAttribute('style', colorBorderGreen);

    let buttonClose = document.querySelector("#closeButton");
    buttonClose.setAttribute('style', colorBorderGreen);

    let statusTextStyleHeader = document.querySelector("#statusTextStyleHeader");
    statusTextStyleHeader.setAttribute('style', colorGreen);

    let statusTextStyleValue = document.querySelector("#statusTextStyleValue");
    statusTextStyleValue.setAttribute('style', colorGreen);

    let statusTextDrawHeader = document.querySelector("#statusTextDrawHeader");
    statusTextDrawHeader.setAttribute('style', colorGreen);

    let statusTextDrawValue = document.querySelector("#statusTextDrawValue");
    statusTextDrawValue.setAttribute('style', colorGreen);

    let statusTextDrawInstruction = document.querySelector("#statusTextDrawInstruction");
    statusTextDrawInstruction.setAttribute('style', colorGreen);

    let statusTextBoardHeader = document.querySelector("#statusTextBoardHeader");
    statusTextBoardHeader.setAttribute('style', colorGreen);

    let statusTextBoardValue = document.querySelector("#statusTextBoardValue");
    statusTextBoardValue.setAttribute('style', colorGreen);


    let boardBorder = document.querySelector(".boardBody");
    let boardBorderTen = document.querySelector(".boardBodyTen");
    let boardBorderTwenty = document.querySelector(".boardBodyTwenty");
    let boardBorderFifty = document.querySelector(".boardBodyFifty");
    let boardBorderHundred = document.querySelector(".boardBodyHundred");

    if(boardBorder != null){

      boardBorder.setAttribute('style', colorBorderGreen);

    }else if(boardBorderTen != null){
    
      boardBorderTen.setAttribute('style', colorBorderGreen);

    }else if(boardBorderTwenty != null){
    
      boardBorderTwenty.setAttribute('style', colorBorderGreen);

    }else if(boardBorderFifty != null){

      boardBorderFifty.setAttribute('style', colorBorderGreen);

    }else{
    
      boardBorderHundred.setAttribute('style', colorBorderGreen);

    };
}

function changeTextAllRed(){

    let colorRed = 'color:rgb(255, 113, 113)';
    let colorBorderRed = 'color:rgb(255, 113, 113);border-color:rgb(255, 113, 113)';

    let headerText = document.querySelector(".mainHeader");
    headerText.setAttribute('style', colorRed);
    
    let infoLine = document.querySelector(".infoLine");
    infoLine.setAttribute('style', colorRed);

    let settingsText = document.querySelector("#settingsText");
    settingsText.setAttribute('style', colorRed);
    
    let buttonBoard = document.querySelector("#buttonSettingBoard");
    buttonBoard.setAttribute('style', colorBorderRed);

    let buttonColor = document.querySelector("#buttonSettingColor");
    buttonColor.setAttribute('style', colorBorderRed);

    let buttonStyle = document.querySelector("#buttonSettingStyle");
    buttonStyle.setAttribute('style', colorBorderRed);

    let buttonClose = document.querySelector("#closeButton");
    buttonClose.setAttribute('style', colorBorderRed);

    let statusTextStyleHeader = document.querySelector("#statusTextStyleHeader");
    statusTextStyleHeader.setAttribute('style', colorRed);

    let statusTextStyleValue = document.querySelector("#statusTextStyleValue");
    statusTextStyleValue.setAttribute('style', colorRed);

    let statusTextDrawHeader = document.querySelector("#statusTextDrawHeader");
    statusTextDrawHeader.setAttribute('style', colorRed);

    let statusTextDrawValue = document.querySelector("#statusTextDrawValue");
    statusTextDrawValue.setAttribute('style', colorRed);

    let statusTextDrawInstruction = document.querySelector("#statusTextDrawInstruction");
    statusTextDrawInstruction.setAttribute('style', colorRed);

    let statusTextBoardHeader = document.querySelector("#statusTextBoardHeader");
    statusTextBoardHeader.setAttribute('style', colorRed);

    let statusTextBoardValue = document.querySelector("#statusTextBoardValue");
    statusTextBoardValue.setAttribute('style', colorRed);


    let boardBorder = document.querySelector(".boardBody");
    let boardBorderTen = document.querySelector(".boardBodyTen");
    let boardBorderTwenty = document.querySelector(".boardBodyTwenty");
    let boardBorderFifty = document.querySelector(".boardBodyFifty");
    let boardBorderHundred = document.querySelector(".boardBodyHundred");

    if(boardBorder != null){

      boardBorder.setAttribute('style', colorBorderRed);

    }else if(boardBorderTen != null){
    
      boardBorderTen.setAttribute('style', colorBorderRed);

    }else if(boardBorderTwenty != null){
    
      boardBorderTwenty.setAttribute('style', colorBorderRed);

    }else if(boardBorderFifty != null){

      boardBorderFifty.setAttribute('style', colorBorderRed);

    }else{
    
      boardBorderHundred.setAttribute('style', colorBorderRed);

    };
}

function changeTextAllPink(){

    let colorPink = 'color:rgb(255, 119, 226)';
    let colorBorderPink = 'color:rgb(255, 119, 226);border-color:rgb(255, 119, 226)';

    let headerText = document.querySelector(".mainHeader");
    headerText.setAttribute('style', colorPink);
    
    let infoLine = document.querySelector(".infoLine");
    infoLine.setAttribute('style', colorPink);

    let settingsText = document.querySelector("#settingsText");
    settingsText.setAttribute('style', colorPink);
    
    let buttonBoard = document.querySelector("#buttonSettingBoard");
    buttonBoard.setAttribute('style', colorBorderPink);

    let buttonColor = document.querySelector("#buttonSettingColor");
    buttonColor.setAttribute('style', colorBorderPink);

    let buttonStyle = document.querySelector("#buttonSettingStyle");
    buttonStyle.setAttribute('style', colorBorderPink);

    let buttonClose = document.querySelector("#closeButton");
    buttonClose.setAttribute('style', colorBorderPink);

    let statusTextStyleHeader = document.querySelector("#statusTextStyleHeader");
    statusTextStyleHeader.setAttribute('style', colorPink);

    let statusTextStyleValue = document.querySelector("#statusTextStyleValue");
    statusTextStyleValue.setAttribute('style', colorPink);

    let statusTextDrawHeader = document.querySelector("#statusTextDrawHeader");
    statusTextDrawHeader.setAttribute('style', colorPink);

    let statusTextDrawValue = document.querySelector("#statusTextDrawValue");
    statusTextDrawValue.setAttribute('style', colorPink);

    let statusTextDrawInstruction = document.querySelector("#statusTextDrawInstruction");
    statusTextDrawInstruction.setAttribute('style', colorPink);

    let statusTextBoardHeader = document.querySelector("#statusTextBoardHeader");
    statusTextBoardHeader.setAttribute('style', colorPink);

    let statusTextBoardValue = document.querySelector("#statusTextBoardValue");
    statusTextBoardValue.setAttribute('style', colorPink);


    let boardBorder = document.querySelector(".boardBody");
    let boardBorderTen = document.querySelector(".boardBodyTen");
    let boardBorderTwenty = document.querySelector(".boardBodyTwenty");
    let boardBorderFifty = document.querySelector(".boardBodyFifty");
    let boardBorderHundred = document.querySelector(".boardBodyHundred");

    if(boardBorder != null){

      boardBorder.setAttribute('style', colorBorderPink);

    }else if(boardBorderTen != null){
    
      boardBorderTen.setAttribute('style', colorBorderPink);

    }else if(boardBorderTwenty != null){
    
      boardBorderTwenty.setAttribute('style', colorBorderPink);

    }else if(boardBorderFifty != null){

      boardBorderFifty.setAttribute('style', colorBorderPink);

    }else{
    
      boardBorderHundred.setAttribute('style', colorBorderPink);

    };
}

function changeTextAllPurple(){

    let colorPurple = 'color:rgb(200, 134, 255)';
    let colorBorderPurple = 'color:rgb(200, 134, 255);border-color:rgb(200, 134, 255)';

    let headerText = document.querySelector(".mainHeader");
    headerText.setAttribute('style', colorPurple);
    
    let infoLine = document.querySelector(".infoLine");
    infoLine.setAttribute('style', colorPurple);

    let settingsText = document.querySelector("#settingsText");
    settingsText.setAttribute('style', colorPurple);
    
    let buttonBoard = document.querySelector("#buttonSettingBoard");
    buttonBoard.setAttribute('style', colorBorderPurple);

    let buttonColor = document.querySelector("#buttonSettingColor");
    buttonColor.setAttribute('style', colorBorderPurple);

    let buttonStyle = document.querySelector("#buttonSettingStyle");
    buttonStyle.setAttribute('style', colorBorderPurple);

    let buttonClose = document.querySelector("#closeButton");
    buttonClose.setAttribute('style', colorBorderPurple);

    let statusTextStyleHeader = document.querySelector("#statusTextStyleHeader");
    statusTextStyleHeader.setAttribute('style', colorPurple);

    let statusTextStyleValue = document.querySelector("#statusTextStyleValue");
    statusTextStyleValue.setAttribute('style', colorPurple);

    let statusTextDrawHeader = document.querySelector("#statusTextDrawHeader");
    statusTextDrawHeader.setAttribute('style', colorPurple);

    let statusTextDrawValue = document.querySelector("#statusTextDrawValue");
    statusTextDrawValue.setAttribute('style', colorPurple);

    let statusTextDrawInstruction = document.querySelector("#statusTextDrawInstruction");
    statusTextDrawInstruction.setAttribute('style', colorPurple);

    let statusTextBoardHeader = document.querySelector("#statusTextBoardHeader");
    statusTextBoardHeader.setAttribute('style', colorPurple);

    let statusTextBoardValue = document.querySelector("#statusTextBoardValue");
    statusTextBoardValue.setAttribute('style', colorPurple);


    let boardBorder = document.querySelector(".boardBody");
    let boardBorderTen = document.querySelector(".boardBodyTen");
    let boardBorderTwenty = document.querySelector(".boardBodyTwenty");
    let boardBorderFifty = document.querySelector(".boardBodyFifty");
    let boardBorderHundred = document.querySelector(".boardBodyHundred");

    if(boardBorder != null){

      boardBorder.setAttribute('style', colorBorderPurple);

    }else if(boardBorderTen != null){
    
      boardBorderTen.setAttribute('style', colorBorderPurple);

    }else if(boardBorderTwenty != null){
    
      boardBorderTwenty.setAttribute('style', colorBorderPurple);

    }else if(boardBorderFifty != null){

      boardBorderFifty.setAttribute('style', colorBorderPurple);

    }else{
    
      boardBorderHundred.setAttribute('style', colorBorderPurple);

    };
}

//Function which tests if "D" is pressed, and if so toggles drawing status
function drawToggle(e){
  
  let statusTextDrawValue = document.querySelector("#statusTextDrawValue");

  if(e.target.id == "gridBlockDraw"){
      if(statusTextDrawValue.textContent == "OFF"){
          statusTextDrawValue.textContent = "ON";
      }else{
          statusTextDrawValue.textContent = "OFF";
      };
  };

}

function boardLoaded(){

  let statusBoardLoaded = document.querySelector("#statusTextBoardValue");

  let emptyBoard = document.querySelector(".boardBody");
  console.log(emptyBoard);
  let tenBoard = document.querySelector(".boardBodyTen");
  let twentyBoard = document.querySelector(".boardBodyTwenty");
  let fiftyBoard = document.querySelector(".boardBodyFifty");

  if(emptyBoard != null){
    
    statusBoardLoaded.textContent = "-";

  }else if(tenBoard != null){

    statusBoardLoaded.textContent = "10 X 10";

  }else if(twentyBoard != null){

    statusBoardLoaded.textContent = "20 X 20";

  }else if(fiftyBoard != null){

    statusBoardLoaded.textContent = "50 X 50";

  }else{
    
    statusBoardLoaded.textContent = "100 X 100";

  };

}

//Function which populates grid of drawing board with block for 10X10:
function populateDrawBoardTen(){

  const drawBoard = document.querySelector(".boardBodyTen");
  let n = 0;

  while(n<100){
    let drawBoardDiv = document.createElement('div');
    drawBoardDiv.setAttribute('id', 'gridBlockDraw');
    drawBoard.appendChild(drawBoardDiv);
    n++;
  }
}

function emptyDrawBoardTen(){

  const drawBoard = document.querySelector(".boardBodyTen");
  let n = 0;

  while(n<100){
    let drawBoardDiv = document.querySelector('#gridBlockDraw');
    drawBoard.removeChild(drawBoardDiv);
    n++;
  };
}

function populateDrawBoardTwenty(){

  const drawBoard = document.querySelector(".boardBodyTwenty");
  let n = 0;

  while(n<400){
    let drawBoardDiv = document.createElement('div');
    drawBoardDiv.setAttribute('id', 'gridBlockDraw');
    drawBoard.appendChild(drawBoardDiv);
    n++;
  }
}

function emptyDrawBoardTwenty(){

  const drawBoard = document.querySelector(".boardBodyTwenty");
  let n = 0;

  while(n<400){
    let drawBoardDiv = document.querySelector('#gridBlockDraw');
    drawBoard.removeChild(drawBoardDiv);
    n++;
  };
}

function populateDrawBoardFifty(){

  const drawBoard = document.querySelector(".boardBodyFifty");
  let n = 0;

  while(n<2500){
    let drawBoardDiv = document.createElement('div');
    drawBoardDiv.setAttribute('id', 'gridBlockDraw');
    drawBoard.appendChild(drawBoardDiv);
    n++;
  }
}

function emptyDrawBoardFifty(){

  const drawBoard = document.querySelector(".boardBodyFifty");
  let n = 0;

  while(n<2500){
    let drawBoardDiv = document.querySelector('#gridBlockDraw');
    drawBoard.removeChild(drawBoardDiv);
    n++;
  };
}

function populateDrawBoardHundred(){

  const drawBoard = document.querySelector(".boardBodyHundred");
  let n = 0;

  while(n<10000){
    let drawBoardDiv = document.createElement('div');
    drawBoardDiv.setAttribute('id', 'gridBlockDraw');
    drawBoard.appendChild(drawBoardDiv);
    n++;
  }
}

function emptyDrawBoardHundred(){

  const drawBoard = document.querySelector(".boardBodyHundred");
  let n = 0;

  while(n<10000){
    let drawBoardDiv = document.querySelector('#gridBlockDraw');
    drawBoard.removeChild(drawBoardDiv);
    n++;
  };
}

function drawMain(e){

  const drawStatus = document.querySelector("#statusTextDrawValue");
  const styleStatus = document.querySelector("#statusTextStyleValue");

  let blockID = "gridBlockDraw";
  let onString = "ON"
  let colorString = "COLOR";
  let lightString = "LIGHTSCALE";
  let multiString = "MULTICOLOR";
  
  if(e.target.id == blockID && drawStatus.textContent == onString){

    if(styleStatus.textContent == colorString){

      let settingsTextNode = document.querySelector('#settingsText');
      let settingsTextStyle = window.getComputedStyle(settingsTextNode);
      let settingsTextColor = settingsTextStyle.getPropertyValue('color');
      let textBackGroundColorMethodStatement = ('background-color:' + settingsTextColor);

      e.target.setAttribute('style', textBackGroundColorMethodStatement);

    }else if(styleStatus.textContent == lightString){

      drawLightScale(e);

    }else if(styleStatus.textContent == multiString){

      drawMultiColor(e);

    }else{

      drawEraser(e);

    };
  };
};

function drawEraser(e){

  let currentGridBlockDraw = e.target;

  currentGridBlockDraw.setAttribute("style", "background-color: rgb(2, 1, 20)");
  
};

//At this point board is generated and drawing is activated.
//What we want to achieve - Get current grid block mouse is over, get the color, increment each color element by incrementor, put back on screen.
function drawLightScale(e){

  let currentGridBlockDraw = e.target;                                                    //#6

  let currentBlockStyle = window.getComputedStyle(currentGridBlockDraw);
  let currentBlockColor = currentBlockStyle.getPropertyValue('background-color');
  console.log(currentBlockColor);
  
  if(currentBlockColor === "rgb(2, 1, 20)"){

    currentBlockColor = "rgb(21, 25, 43)";

  }else if(currentBlockColor === "rgb(21, 25, 43)"){

    currentBlockColor = "rgb(40, 49, 66)";

  }else if(currentBlockColor === "rgb(40, 49, 66)"){

    currentBlockColor = "rgb(59, 73, 88)";

  }else if(currentBlockColor === "rgb(59, 73, 88)"){

    currentBlockColor = "rgb(78, 97, 111)";

  }else if(currentBlockColor === "rgb(78, 97, 111)"){

    currentBlockColor = "rgb(98, 121, 134)";

  }else if(currentBlockColor === "rgb(98, 121, 134)"){

    currentBlockColor = "rgb(117, 144, 157)";

  }else if(currentBlockColor === "rgb(117, 144, 157)"){

    currentBlockColor = "rgb(136, 168, 180)";

  }else if(currentBlockColor === "rgb(136, 168, 180)"){

    currentBlockColor = "rgb(155, 192, 202)";

  }else if(currentBlockColor === "rgb(155, 192, 202)"){

    currentBlockColor = "rgb(174, 216, 225)";

  }else if(currentBlockColor === "rgb(174, 216, 225)"){

    currentBlockColor = "rgb(193, 240, 248)";

  }else if(currentBlockColor === "rgb(193, 240, 248)"){

    currentBlockColor = "rgb(193, 240, 248)";

  }else{

    currentBlockColor = "rgb(2, 1, 20)";

  }

  let currentBlockColorStatement = ('background-color:' + currentBlockColor);

  currentGridBlockDraw.setAttribute('style', currentBlockColorStatement);

};

function drawMultiColor(e){

  let currentGridBlockDraw = e.target;
  
  let randomInt = (Math.random() * 9);
  
  if(randomInt < 1){

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(2, 1, 20)");

  }else if(randomInt >= 1 && randomInt < 2){

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(193, 240, 248)");

  }else if(randomInt >= 2 && randomInt < 3){

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(238, 253, 173)");

  }else if(randomInt >= 3 && randomInt < 4){

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(255, 210, 144)");

  }else if(randomInt >= 4 && randomInt < 5){

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(128, 172, 255)");

  }else if(randomInt >= 5 && randomInt < 6){

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(160, 255, 160)");

  }else if(randomInt >= 6 && randomInt < 7){

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(255, 113, 113)");

  }else if(randomInt >= 7 && randomInt < 8){

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(255, 119, 226)");

  }else{

    currentGridBlockDraw.setAttribute("style", "background-color: rgb(200, 134, 255)");

  }
};


/*
-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------
*/

//EventListners for buttons/clicks

const boardButton = document.querySelector("#buttonSettingBoard");
boardButton.addEventListener('click', (e) => {
    
    const emptyDiv = document.querySelector("#emptyDiv");                                                //#1

    const boardButtonTen = document.querySelector("#buttonBoardTen");

    const colorButton = document.querySelector("#buttonColorWhite");

    if(emptyDiv != null){ //Therefore currently "Empty"

        removeClearBar();
        populateBoardDimensions();

    }else if(boardButtonTen != null){ //Therefore currently populated with Board Buttons

        console.log("do nothing");

    }else if(colorButton != null){

        removeColorButtons();
        populateBoardDimensions();

    }else{ //If all other querySelectors read null, screen must then be populated with the style buttons

        removeStyleButtons();
        populateBoardDimensions();   
        
    };                                                                                                   //#1

    //At this point board buttons are displaying
    //Now to generate screens when an option is pressed
    
    const buttonTen = document.querySelector("#buttonBoardTen");                                         //#2
    buttonTen.addEventListener('click', (e) => {

      const boardEmpty = document.querySelector(".boardBody");
      const boardTen = document.querySelector(".boardBodyTen");
      const boardTwenty = document.querySelector(".boardBodyTwenty");
      const boardFifty = document.querySelector(".boardBodyFifty");

      if(boardEmpty != null){

        let boardBody = document.querySelector(".boardBody");
        boardBody.setAttribute('class', 'boardBodyTen');
        populateDrawBoardTen();
        boardLoaded();

      }else if(boardTen != null){

        emptyDrawBoardTen();
        populateDrawBoardTen();

      }else if(boardTwenty != null){

        emptyDrawBoardTwenty();
        let boardBody = document.querySelector(".boardBodyTwenty");
        boardBody.setAttribute('class', 'boardBodyTen');
        populateDrawBoardTen();
        boardLoaded();

      }else if(boardFifty != null){

        emptyDrawBoardFifty();
        let boardBody = document.querySelector(".boardBodyFifty");
        boardBody.setAttribute('class', 'boardBodyTen');
        populateDrawBoardTen();
        boardLoaded();

      }else{

        emptyDrawBoardHundred();
        let boardBody = document.querySelector(".boardBodyHundred");
        boardBody.setAttribute('class', 'boardBodyTen');
        populateDrawBoardTen();
        boardLoaded();

      }
    });

    const buttonClear = document.querySelector("#buttonBoardClear");
    buttonClear.addEventListener('click', (e) => {

      const boardEmpty = document.querySelector(".boardBody");
      const boardTen = document.querySelector(".boardBodyTen");
      const boardTwenty = document.querySelector(".boardBodyTwenty");
      const boardFifty = document.querySelector(".boardBodyFifty");

      if(boardEmpty != null){

        console.log("Do nothing");

      }else if(boardTen != null){

        emptyDrawBoardTen();
        let boardBody = document.querySelector(".boardBodyTen");
        boardBody.setAttribute('class', 'boardBody');
        boardLoaded();

      }else if(boardTwenty != null){

        emptyDrawBoardTwenty();
        let boardBody = document.querySelector(".boardBodyTwenty");
        boardBody.setAttribute('class', 'boardBody');
        boardLoaded();

      }else if(boardFifty != null){

        emptyDrawBoardFifty();
        let boardBody = document.querySelector(".boardBodyFifty");
        boardBody.setAttribute('class', 'boardBody');
        boardLoaded();

      }else{

        emptyDrawBoardHundred();
        let boardBody = document.querySelector(".boardBodyHundred");
        boardBody.setAttribute('class', 'boardBody');
        boardLoaded();

      }
    });

    const buttonTwenty = document.querySelector("#buttonBoardTwenty");
    buttonTwenty.addEventListener('click', (e) => {

      const boardEmpty = document.querySelector(".boardBody");
      const boardTen = document.querySelector(".boardBodyTen");
      const boardTwenty = document.querySelector(".boardBodyTwenty");
      const boardFifty = document.querySelector(".boardBodyFifty");

      if(boardEmpty != null){

        let boardBody = document.querySelector(".boardBody");
        boardBody.setAttribute('class', 'boardBodyTwenty');
        populateDrawBoardTwenty();
        boardLoaded();


      }else if(boardTen != null){

        emptyDrawBoardTen();
        let boardBody = document.querySelector(".boardBodyTen");
        boardBody.setAttribute('class', 'boardBodyTwenty');
        populateDrawBoardTwenty();
        boardLoaded();

      }else if(boardTwenty != null){

        emptyDrawBoardTwenty();
        populateDrawBoardTwenty();

      }else if(boardFifty != null){

        emptyDrawBoardFifty();
        let boardBody = document.querySelector(".boardBodyFifty");
        boardBody.setAttribute('class', 'boardBodyTwenty');
        populateDrawBoardTwenty();
        boardLoaded();

      }else{

        emptyDrawBoardHundred();
        let boardBody = document.querySelector(".boardBodyHundred");
        boardBody.setAttribute('class', 'boardBodyTwenty');
        populateDrawBoardTwenty();
        boardLoaded();

      }
    });

    const buttonFifty = document.querySelector("#buttonBoardFifty");
    buttonFifty.addEventListener('click', (e) => {

      const boardEmpty = document.querySelector(".boardBody");
      const boardTen = document.querySelector(".boardBodyTen");
      const boardTwenty = document.querySelector(".boardBodyTwenty");
      const boardFifty = document.querySelector(".boardBodyFifty");

      if(boardEmpty != null){

        let boardBody = document.querySelector(".boardBody");
        boardBody.setAttribute('class', 'boardBodyFifty');
        populateDrawBoardFifty();
        boardLoaded();


      }else if(boardTen != null){

        emptyDrawBoardTen();
        let boardBody = document.querySelector(".boardBodyTen");
        boardBody.setAttribute('class', 'boardBodyFifty');
        populateDrawBoardFifty();
        boardLoaded();

      }else if(boardTwenty != null){

        emptyDrawBoardTwenty();
        let boardBody = document.querySelector(".boardBodyTwenty");
        boardBody.setAttribute('class', 'boardBodyFifty');
        populateDrawBoardFifty();
        boardLoaded();

      }else if(boardFifty != null){

        emptyDrawBoardFifty();
        populateDrawBoardFifty();

      }else{

        emptyDrawBoardHundred();
        let boardBody = document.querySelector(".boardBodyHundred");
        boardBody.setAttribute('class', 'boardBodyFifty');
        populateDrawBoardFifty();
        boardLoaded();

      }
    });

    const buttonHundred = document.querySelector("#buttonBoardHundred");
    buttonHundred.addEventListener('click', (e) => {

      const boardEmpty = document.querySelector(".boardBody");
      const boardTen = document.querySelector(".boardBodyTen");
      const boardTwenty = document.querySelector(".boardBodyTwenty");
      const boardFifty = document.querySelector(".boardBodyFifty");

      if(boardEmpty != null){

        let boardBody = document.querySelector(".boardBody");
        boardBody.setAttribute('class', 'boardBodyHundred');
        populateDrawBoardHundred();
        boardLoaded();


      }else if(boardTen != null){

        emptyDrawBoardTen();
        let boardBody = document.querySelector(".boardBodyTen");
        boardBody.setAttribute('class', 'boardBodyHundred');
        populateDrawBoardHundred();
        boardLoaded();

      }else if(boardTwenty != null){

        emptyDrawBoardTwenty();
        let boardBody = document.querySelector(".boardBodyTwenty");
        boardBody.setAttribute('class', 'boardBodyHundred');
        populateDrawBoardHundred();
        boardLoaded();

      }else if(boardFifty != null){

        emptyDrawBoardFifty();
        let boardBody = document.querySelector(".boardBodyFifty");
        boardBody.setAttribute('class', 'boardBodyHundred');
        populateDrawBoardHundred();
        boardLoaded();

      }else{

        emptyDrawBoardHundred();
        populateDrawBoardHundred();                                                                 //#2

      }
    });
    
});

const colorButton = document.querySelector("#buttonSettingColor");
colorButton.addEventListener('click', (e) => {
    
    const emptyDiv = document.querySelector("#emptyDiv");
    console.log(emptyDiv);

    const boardButtonTen = document.querySelector("#buttonBoardTen");
    console.log(boardButtonTen);

    const colorButton = document.querySelector("#buttonColorWhite");
    console.log(colorButton);

    const styleButton = document.querySelector("#buttonStyle");
    console.log(styleButton);

    if(emptyDiv != null){ //Therefore currently "Empty"

        removeClearBar();
        populateColorButtons();
        
        const colorButtonWhite = document.querySelector("#buttonColorWhite");
        colorButtonWhite.addEventListener('click', (e) => {

          changeTextAllWhite();

        });

        const colorButtonYellow = document.querySelector("#buttonColorYellow");
        colorButtonYellow.addEventListener('click', (e) => {

          changeTextAllYellow();

        });

        const colorButtonOrange = document.querySelector("#buttonColorOrange");
        colorButtonOrange.addEventListener('click', (e) => {

          changeTextAllOrange();

        });

        const colorButtonBlue = document.querySelector("#buttonColorBlue");
        colorButtonBlue.addEventListener('click', (e) => {

          changeTextAllBlue();

        });

        const colorButtonGreen = document.querySelector("#buttonColorGreen");
        colorButtonGreen.addEventListener('click', (e) => {

          changeTextAllGreen();

        });

        const colorButtonRed = document.querySelector("#buttonColorRed");
        colorButtonRed.addEventListener('click', (e) => {

          changeTextAllRed();

        });

        const colorButtonPink = document.querySelector("#buttonColorPink");
        colorButtonPink.addEventListener('click', (e) => {

          changeTextAllPink();

        });

        const colorButtonPurple = document.querySelector("#buttonColorPurple");
        colorButtonPurple.addEventListener('click', (e) => {

          changeTextAllPurple();

        });

    }else if(boardButtonTen != null){ //Therefore currently populated with Board Buttons

        removeBoardButtons();
        populateColorButtons();
        
        const colorButtonWhite = document.querySelector("#buttonColorWhite");
        colorButtonWhite.addEventListener('click', (e) => {

          changeTextAllWhite();

        });

        const colorButtonYellow = document.querySelector("#buttonColorYellow");
        colorButtonYellow.addEventListener('click', (e) => {

          changeTextAllYellow();

        });

        const colorButtonOrange = document.querySelector("#buttonColorOrange");
        colorButtonOrange.addEventListener('click', (e) => {

          changeTextAllOrange();

        });

        const colorButtonBlue = document.querySelector("#buttonColorBlue");
        colorButtonBlue.addEventListener('click', (e) => {

          changeTextAllBlue();

        });

        const colorButtonGreen = document.querySelector("#buttonColorGreen");
        colorButtonGreen.addEventListener('click', (e) => {

          changeTextAllGreen();

        });

        const colorButtonRed = document.querySelector("#buttonColorRed");
        colorButtonRed.addEventListener('click', (e) => {

          changeTextAllRed();

        });

        const colorButtonPink = document.querySelector("#buttonColorPink");
        colorButtonPink.addEventListener('click', (e) => {

          changeTextAllPink();

        });

        const colorButtonPurple = document.querySelector("#buttonColorPurple");
        colorButtonPurple.addEventListener('click', (e) => {

          changeTextAllPurple();

        });

    }else if(colorButton != null){

        console.log("do nothing");

    }else{ //If all other querySelectors read null, screen must then be populated with the style buttons

        removeStyleButtons();
        populateColorButtons();

        const colorButtonWhite = document.querySelector("#buttonColorWhite");
        colorButtonWhite.addEventListener('click', (e) => {

          changeTextAllWhite();

        });

        const colorButtonYellow = document.querySelector("#buttonColorYellow");
        colorButtonYellow.addEventListener('click', (e) => {

          changeTextAllYellow();

        });

        const colorButtonOrange = document.querySelector("#buttonColorOrange");
        colorButtonOrange.addEventListener('click', (e) => {

          changeTextAllOrange();

        });

        const colorButtonBlue = document.querySelector("#buttonColorBlue");
        colorButtonBlue.addEventListener('click', (e) => {

          changeTextAllBlue();

        });

        const colorButtonGreen = document.querySelector("#buttonColorGreen");
        colorButtonGreen.addEventListener('click', (e) => {

          changeTextAllGreen();

        });

        const colorButtonRed = document.querySelector("#buttonColorRed");
        colorButtonRed.addEventListener('click', (e) => {

          changeTextAllRed();

        });

        const colorButtonPink = document.querySelector("#buttonColorPink");
        colorButtonPink.addEventListener('click', (e) => {

          changeTextAllPink();

        });

        const colorButtonPurple = document.querySelector("#buttonColorPurple");
        colorButtonPurple.addEventListener('click', (e) => {

          changeTextAllPurple();

        });
        
    };
});

const styleButton = document.querySelector("#buttonSettingStyle");
styleButton.addEventListener('click', (e) => {
    
    const emptyDiv = document.querySelector("#emptyDiv");
    console.log(emptyDiv);

    const boardButtonTen = document.querySelector("#buttonBoardTen");
    console.log(boardButtonTen);

    const colorButton = document.querySelector("#buttonColorWhite");
    console.log(colorButton);

    const styleButton = document.querySelector("#buttonStyle");
    console.log(styleButton);

    if(emptyDiv != null){ //Therefore currently "Empty"

        removeClearBar();
        populateStyleButtons();

    }else if(boardButtonTen != null){ //Therefore currently populated with Board Buttons

        removeBoardButtons();
        populateStyleButtons();        

    }else if(colorButton != null){ //Therefore currently populated with Color Buttons

        removeColorButtons();
        populateStyleButtons();

    }else{ //If all other querySelectors read null, screen must then be populated with the style buttons

        console.log("do nothing"); 
        
    };

    //At this point settingsBarTwo has been populated with the style buttons
    //Now to add event listners to the buttons, to set current style - Used in status bar and used to set drawing style
    // used on board.

    const eraserButton = document.querySelector("#buttonStyleEraser");
    eraserButton.addEventListener('click', (e) => {
      
      let statusValue = document.querySelector('#statusTextStyleValue');
      statusValue.textContent = 'ERASER';

    });

    const lightButton = document.querySelector("#buttonStyleLight");
    lightButton.addEventListener('click', (e) => {
      
      let statusValue = document.querySelector('#statusTextStyleValue');
      statusValue.textContent = 'LIGHTSCALE';

    });

    const multiButton = document.querySelector("#buttonStyleMulti");
    multiButton.addEventListener('click', (e) => {
      
      let statusValue = document.querySelector('#statusTextStyleValue');
      statusValue.textContent = 'MULTICOLOR';

    });

    const colorStyleButton = document.querySelector("#buttonStyleColor");
    colorStyleButton.addEventListener('click', (e) => {
      
      let statusValue = document.querySelector('#statusTextStyleValue');
      statusValue.textContent = 'COLOR';

    });

});

const closeButton = document.querySelector("#closeButton");
closeButton.addEventListener('click', (e) => {

    const emptyDiv = document.querySelector("#emptyDiv");
    console.log(emptyDiv);

    const boardButtonTen = document.querySelector("#buttonBoardTen");
    console.log(boardButtonTen);

    const colorButton = document.querySelector("#buttonColorWhite");
    console.log(colorButton);

    const styleButton = document.querySelector("#buttonStyle");
    console.log(styleButton);

    if(emptyDiv != null){ //Therefore currently "Empty"

        console.log("do nothing");

    }else if(boardButtonTen != null){ //Therefore currently populated with Board Buttons

        removeBoardButtons();
        populateClearBar();  

    }else if(colorButton != null){

        removeColorButtons();
        populateClearBar(); 

    }else{ //If all other querySelectors read null, screen must then be populated with the style buttons

        removeStyleButtons();
        populateClearBar();   
        
    };
});

//When "D" pressed, runs drawToggle function which then toggles the value of the drawStatus variable
window.addEventListener('click', drawToggle);

window.addEventListener('mouseover', drawMain);