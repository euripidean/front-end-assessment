const colourContainer = document.querySelector('#colours');
const inputSection = document.getElementById('input-section');
const widthText = document.getElementById('width-text');
const heightText = document.getElementById('height-text');
const colourText = document.getElementById('colour-text');
const colourBox = document.getElementById('colour-box');
colourBox.innerHTML = '';
widthText.innerHTML = '';
heightText.innerHTML = '';
colourText.innerHTML = '';

// Set the original box values
const boxDesign = {
    width:100,
    height:100,
    colour:'#000000',
};

// _______________________________________________________________________________________
// _______________________________________________________________________________________
// _______________________________________________________________________________________
// _______________________________________________________________________________________

// get Change inputs from user and pass into appropriate functions
inputSection.onchange = function (e) {
    if (e.target && e.target.classList.contains('height')) { 
        const height = parseInt(e.target.value);
        changeHeight(height);
    } else if
    (e.target && e.target.classList.contains('width')) {
        const width = parseInt(e.target.value);
        changeWidth(width);
    } else if
    (e.target && e.target.classList.contains('colour')) {
        const colour = e.target.value;
        changeColour(colour); 
    }
    }

//Takes hex value of input and updates boxDesign Object, then updates the values and display.
function changeColour (colour){
    // function to update the hex of the div
    boxDesign.colour = colour;
    displayValues();
    displayBox();

}

//Takes height value of input and updates the boxDesign Object, then updates the values and display.
function changeHeight (height) {
    //changes the height of the div based on the input
    boxDesign.height = height;
    displayValues();
    displayBox();
}

//Takes width values of input and updates the boxDesign Object, then updates the values and display.
function changeWidth (width) {
    boxDesign.width = width;
    displayValues();
    displayBox();
}

//Feeds the values in the boxDesign object into the div to display the box.
function displayBox () {
    //displays the box
    const { width, height, colour } = boxDesign;
    colourBox.innerHTML = `<div style=width:${width}px;height:${height}px;background-color:${colour};></div>`;
}

//Produces the p tags for the values in the third section.
function displayValues () {
    //shows the values in box 3.
    const { width, height, colour } = boxDesign;
    widthText.innerHTML = `<p>${width}px</p>`;
    heightText.innerHTML = `<p>${height}px</p>`;
    colourText.innerHTML = `<p>${colour}</p>`;
}