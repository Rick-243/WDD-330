var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = 'red';
context.fillStyle = 'rgba(0, 0, 255, 0.5)';
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    let img = new Image();
    img.src = "pat_red-tail-hunts.jpg";
    img.onload = function() {
    let pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);             
    };
}

function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    let gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}

// The signature for the arc method is: arc(x, y, radius, startAngle, endAngle, anticlockwise)
// x and y represent where on the canvas you want the arc’s path to begin. Imagine this as the 
// center of the circle that you’ll be drawing.
function drawCircle(canvas) {
    var canvas = document.getElementById("demo4");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

function drawCircle5(canvas) {
    var canvas = document.getElementById("demo5");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 68, 68);
}

drawPattern();
drawGradient();
drawCircle();
drawCircle5();