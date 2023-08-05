const container = document.getElementsByClassName('container');
const canvas = document.getElementById('canvas');
const slider = document.getElementById('slider');
const eraser = document.getElementById('eraser');
const medium = document.getElementById('medium');
const large = document.getElementById('large');
const clear = document.getElementById('clear');
const colors = document.getElementById('colors');
const rainbow = document.getElementById('rainbow');
const gridToggle = document.getElementById('gridless');
var number;
let color = 'black';
let block = document.getElementsByClassName('block');
let drawMode = false;
let displayer = document.querySelector('p');
let gridless = false;
//main function that sets default grid to 16x16 and attaches mouse down listeners to buttons
function main() {
    defaultGrid();
    slider.addEventListener('click', function() {
        generateDimension(16);
    })
    medium.addEventListener('click', function() {
        generateDimension(32);
    })
    large.addEventListener('click', function() {
        generateDimension(64);
    })
    eraser.addEventListener('click', () => {
        eraserMode('white');
    });
    clear.addEventListener('click', function() {
        clearButton(color);
    })
    colors.addEventListener('click', changeColor);
    rainbow.addEventListener('click', randomMode);
    gridToggle.addEventListener('click', gridMode);
    

}
function defaultGrid() {
    for(let i = 0; i < (256); i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.minWidth = `${300/16}px`
        block.style.minHeight = `${300/16}px`
        block.style.width = `${550/16}px`
        canvas.appendChild(block);
    }
    block = document.getElementsByClassName('block');
    for (const b of block) {
        //elem.addEventListener('mousemove', penMode);
        b.style.backgroundColor = 'white';
        b.addEventListener('mousemove', penMode);
        
    }
    
}

gridToggle.addEventListener('click', () => {
    gridless = !gridless;
})
function gridMode() {
    block = document.getElementsByClassName('block')
    if (gridless) {
        for (const b of block) {
            b.style.border = 'solid 0px';
        }
    } else {
        for (const b of block) {
            b.style.border = 'solid 1px rgb(124, 121, 121)';
        }
    }
}
function gridCreator() {
    for(let i = 0; i < (number**2); i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.minWidth = `${300/number}px`
        block.style.minHeight = `${300/number}px`
        block.style.width = `${550/number}px`
        canvas.appendChild(block);
    }
    block = document.getElementsByClassName('block');
    for (const b of block) {
        b.style.backgroundColor = 'white';
        b.addEventListener('mousemove', penMode);
    }
}
//function for the grid dimension. If certain number then for loop to create divs for that numeber
function generateDimension(num) {
    number = num;
    while (canvas.firstChild) canvas.removeChild(canvas.firstChild);
    if (num == 16) {
        gridCreator();
    } else if (num == 32) {
        gridCreator();
    } else if (num == 64) {
        gridCreator();
    }
}
main();
//mouse down listener that changes div.style.color to black
function penMode() {
    if (drawMode) {
        if (rainbowMode) {
            this.style.backgroundColor = `rgba(${(Math.floor(Math.random() * 255))}, ${(Math.floor(Math.random() * 255))}, ${(Math.floor(Math.random() * 255))})`;
                    //color = `rgba(${result})`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}
let rainbowMode = false;
function randomMode() {
    rainbowMode = true;
}
function changeColor() {
    rainbowMode = false;
    color = prompt('Enter a color:');
}
function eraserMode(choice) {
    rainbowMode = false;
    color = choice;
}
canvas.addEventListener('click', () => {
     drawMode = !drawMode;
});
function clearButton() {
    let block = document.getElementsByClassName('block');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousemove', penMode);
        block[i].style.backgroundColor = '';
    }
    
}
//mouse down listener that changes color to white for erase effect
//clear function that iterates through all the generated divs making them white. Attach this to mouse down


