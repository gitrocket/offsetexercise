const box = document.querySelector('.box');
const output = document.querySelector('.output');
const xCoord = document.getElementById('xCoord');
const yCoord = document.getElementById('yCoord');

box.addEventListener('mousemove', runEvent);

function runEvent(e) {
    xCoord.textContent = "Mouse X: " + e.offsetX;
    yCoord.textContent = "Mouse Y: " + e.offsetY;
    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)"
}


