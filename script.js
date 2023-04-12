//default values
const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'rainbow';
const DEFAULT_SIZE = 24;
const DEFAULT_DRAW = 'mouseover';

let currColor = DEFAULT_COLOR;
let currMode = DEFAULT_MODE;
let currSize = DEFAULT_SIZE;
let currDraw = DEFAULT_DRAW;

//setters functions
function setCurrentColor(color){
    currColor = color;
}

function setCurrentMode(mode){
    currMode = mode;
}

function setCurrentSize(size){
    currSize = size;
}

function toggleDraw(){
    if(currDraw === 'mouseover')
        currDraw = 'click'
    else
        currDraw = 'mouseover'
    reloadCanvas()
}

//getting elements
const container = document.getElementById('container');
const colorInput = document.getElementById('colorInput');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeText = document.getElementById('size');
const slider = document.getElementById('slider');
const checkbox = document.getElementById('checkbox');

//setting events
colorInput.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('erase');
clearBtn.onclick = () => reloadCanvas();
slider.onmousemove = (e) => updateSizeText(e.target.value);
slider.onchange = (e) => changeSize(e.target.value);
checkbox.onchange = () => toggleDraw()




//updating size functions
function changeSize(value){
    setCurrentSize(value);
    updateSizeText(value);
    reloadCanvas();
}

function updateSizeText(value){
    size.innerHTML = `${value} x ${value}`;
}

//clearing and setting up the canvas
function reloadCanvas(){
    clearCanvas();
    createCanvas(currSize);
}

function clearCanvas(){
    container.innerHTML = '';
}


function createCanvas(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i=0;i<size*size;i++){
        
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener(currDraw,color);
        container.appendChild(square)
    }
}
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
function color(e){
    let color;
    if(currMode === 'rainbow')
       color = randColor();
    else if(currMode === 'color')
        color = currColor
    else if(currMode === 'erase')
        color = '#ededed';
    e.target.style.backgroundColor = color;
}

window.onload = () =>{
    createCanvas(DEFAULT_SIZE);
}