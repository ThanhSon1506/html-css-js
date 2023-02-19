var color = document.querySelector('#color');
var eraser = document.querySelector('#eraser');
var decrease = document.querySelector('#decrease');
var increase = document.querySelector('#increase');
var sizeEl = document.querySelector('#size');
var save = document.querySelector('#save');
var clear = document.querySelector('#clear');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');


var currentPos = {
    x: 0,
    y: 0
}
var currentPosAffter = {
    x: 0,
    y: 0
}
var isDrawing = false;
var colorPaint = '#00000';
var size = 5;
sizeEl.innerText = size;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function (e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

canvas.addEventListener('mousedown', function (e) {
    currentPos = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true;

});

canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        currentPosAffter = {
            x: e.offsetX,
            y: e.offsetY
        }
        console.log(e);
        // fill net ve
        ctx.beginPath();
        ctx.arc(currentPos.x, currentPos.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint;
        ctx.fill();
        // Ve outline
        ctx.beginPath();
        ctx.moveTo(currentPos.x, currentPos.y);
        ctx.lineTo(currentPosAffter.x, currentPosAffter.y);
        ctx.strokeStyle = colorPaint;
        ctx.lineWidth = size * 2;
        ctx.stroke();

        currentPos.x = currentPosAffter.x;
        currentPos.y = currentPosAffter.y;
    }
});

document.addEventListener('mouseup', function (e) {
    isDrawing = false;
});

color.addEventListener('change', function (e) {
    colorPaint = e.target.value;
});
eraser.addEventListener('click', function () {
    colorPaint = '#ffffff';
});
decrease.addEventListener('click', function () {
    size -= 5;
    size = size > 5 ? size : 5;
    sizeEl.innerText = size;

});
increase.addEventListener('click', function () {
    size += 5;
    size = size < 30 ? size : 5;
    sizeEl.innerText = size;
});

clear.addEventListener('click', function () {
    var canvasStats = canvas.getClientRects()[0];
    ctx.clearRect(0, 0, canvasStats.width, canvas.height);
});
save.addEventListener('click', function () {
    var output = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    save.setAttribute('href', output);
});

