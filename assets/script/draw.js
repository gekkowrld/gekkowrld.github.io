const canvas = document.getElementById('draw-pad');
const ctx = canvas.getContext('2d');
const theHeight = document.getElementById('the-height-range');
const theWidth = document.getElementById('the-width-range');
const theHeightValue = document.querySelector('.height-range-value');
const theWidthValue = document.querySelector('.width-range-value');
const canvasBgColor = document.getElementById('canvas-bg-color');
const canvasDrawColor = document.getElementById('canvas-draw-color');
const strokeValue = document.getElementById('stroke-size');
const theStrokeValue = document.querySelector('.stroke-size-value');
const lineJoinStyles = Array.from(document.querySelectorAll('#line-join, option'));
const lineCapStyles = Array.from(document.querySelectorAll('#line-cap, options'));

canvas.style.cssText = `background-color: ${canvasBgColor.value};`;
theHeightValue.innerText = `${theWidth.valueAsNumber}px`;
theWidthValue.innerText = `${theHeight.valueAsNumber}px`;
ctx.strokeStyle = `${canvasDrawColor.value}`;
ctx.lineCap = 'round';
ctx.lineWidth = `${strokeValue.valueAsNumber}`;
theStrokeValue.innerText = `${strokeValue.valueAsNumber}px`;
ctx.globalCompositeOperation = 'xor';
console.log(canvasDrawColor.value);

let isDrawing = false;
let x = canvas.clientLeft;
let y = canvas.clientTop;
let direction = true;
let theErrorX = 300;

function canAttributes(e){
    canvas.width = theWidth.valueAsNumber;
    theWidthValue.innerText = `${theWidth.valueAsNumber}px`;
    canvas.height = theHeight.valueAsNumber;
    theHeightValue.innerText = `${theHeight.valueAsNumber}px`;
    ctx.lineWidth = `${strokeValue.valueAsNumber}`;
    theStrokeValue.innerText = `${strokeValue.valueAsNumber}px`;
}
theHeight.addEventListener('input', canAttributes);
theWidth.addEventListener('input', canAttributes)
canvasBgColor.addEventListener('input', () => {
    canvas.style.cssText = `background-color: ${canvasBgColor.value};`;
})
canvasDrawColor.addEventListener('input', () => {
    ctx.strokeStyle = `${canvasDrawColor.value}`;
})
strokeValue.addEventListener('input', canAttributes);
lineJoinStyles.forEach(lineJoinStyle => lineJoinStyle.addEventListener('input', () => {
    if(lineJoinStyle.value === 'round'){
        ctx.lineJoin = 'round';
    } else if(lineJoinStyle.value === 'miter'){
        ctx.lineJoin = 'miter';
    } else if(lineJoinStyle.value === 'bevel'){
        ctx.lineJoin = 'bevel';
    }
}));
lineCapStyles.forEach(lineCapStyle => lineCapStyle.addEventListener('input', () => {
    if(lineCapStyle.value === 'round'){
        ctx.lineCap = 'round';
        console.log('round');
    }else if(lineCapStyle.value === 'butt'){
        ctx.lineCap = 'butt';
        console.log('butt');
    }else if(lineCapStyle.value === 'square'){
        ctx.lineCap = 'square';
        console.log('square');
    }
}))


function draw(e){
    if(!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [x, y] = [e.offsetX,e.offsetY];
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [x, y] = [e.offsetX,e.offsetY];
})
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseleave', () => isDrawing = false);