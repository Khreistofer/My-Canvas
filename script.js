const container = document.querySelector('#container')
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;
for(let i=0;i<16*16;i++){
    
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',color)
    container.appendChild(square)
}
function color(e){
    e.target.style.backgroundColor = 'black'
}