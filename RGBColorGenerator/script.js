const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");


const redValueSpan = document.getElementById("redvalue");
const greenValueSpan = document.getElementById("greenvalue");
const blueValueSpan = document.getElementById("bluevalue");

const colorBox = document.getElementById("color-box");
const copyButton = document.getElementById("copyButton");
const inputTypeRGBValue = document.getElementById("inputType");

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

function updateColor(){
    const redvalue = redSlider.value;
    const greenvalue = greenSlider.value;
    const bluevalue = blueSlider.value;
    // console.log(redvalue, greenvalue, bluevalue);

    const rgbColor = `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;
    console.log(rgbColor);

    colorBox.style.backgroundColor = rgbColor
    redValueSpan.textContent = redvalue
    greenValueSpan.textContent = greenvalue
    blueValueSpan.textContent = bluevalue

    inputTypeRGBValue.textContent = rgbColor

}

updateColor();