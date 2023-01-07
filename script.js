const container = document.querySelector('#container')
function createCanvas(){
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplateRows = `repeat(16, 1fr)`;
    for(let i=0;i<16*16;i++){
        
        const square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover',color)
        container.appendChild(square)
    }
}
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
function color(e){
    let color = randColor();
    e.target.style.backgroundColor = color
}
createCanvas()