function talkToMe(speak) {
 	var msg = new SpeechSynthesisUtterance(speak); 
	window.speechSynthesis.speak(msg);
}

var animate = setInterval(function(){drawEye()},20)
var middle = document.getElementById('second');
var ctx1 = middle.getContext('2d');
var eyeSize = 100;
var eyeTarget = 0;
var moods = [
	['#FDB500','#E10000','#E40F00','#DA0000','#A20000','#1C0301'],
	['#FDB500','#00DB00','#00DB0B','#DA0000','#A20000','#1C0301'],
	['#FDB500','#E10000','#E40F00','#DA0000','#A20000','#1C0301']
]
var i = 0

function sleep(millis) {
    setTimeout(function()
            {
            	animate = setInterval(function(){drawEye()},20) }
    , millis);
}

function drawHal() {

var bottom = document.getElementById('first');
var top = document.getElementById('third');

var ctx2 = top.getContext('2d');
var ctx3 = bottom.getContext('2d');

var imageObj = new Image();
      imageObj.onload = function() {
      	ctx2.globalAlpha = 0.15;
        ctx2.drawImage(imageObj, parseInt(13), parseInt(13), imageObj.width * 0.87, imageObj.height * 0.87);
      };
      imageObj.src = 'img/glare.png';


var imageObj2 = new Image();
      imageObj2.onload = function() {
      	// ctx2.globalAlpha = 0.3
        ctx3.drawImage(imageObj2, parseInt(0), parseInt(0));
      };
      imageObj2.src = 'img/frame.png';
drawEye();
}

function drawEye() {
if (eyeTarget == 0) {
	eyeTarget = Math.floor(Math.random()*40)+60
} else if (eyeTarget == eyeSize) {
	eyeTarget = Math.floor(Math.random()*40)+60
	// console.log(eyeTarget);
	window.clearInterval(animate);
	sleeptime = (Math.floor(Math.random()*10)*1000);
	// console.log(sleeptime);
	sleep(sleeptime);
} else {
	if (eyeSize < eyeTarget) {
		eyeSize++
	} else {
		eyeSize--;
}}

	// var colorArray [[]]
var width = 200,
    height = 200,
    square = height/2
    // Radii of the white glow.
    innerRadius = 1,
    outerRadius = eyeSize,
    // Radius of the entire circle.
    radius = 90;

var gradient = ctx1.createRadialGradient(square, square, innerRadius, square, square, outerRadius);
gradient.addColorStop(0, '#FFFFFF');
gradient.addColorStop(0.01, moods[i][0]); 
gradient.addColorStop(0.08, moods[i][1]);
gradient.addColorStop(0.18, moods[i][2]);
gradient.addColorStop(0.30, moods[i][3]);
gradient.addColorStop(0.42, moods[i][4]);
gradient.addColorStop(0.85, moods[i][5]);
gradient.addColorStop(1, '#000000');

ctx1.arc(square, square, radius, 0, 2 * Math.PI);

ctx1.fillStyle = gradient;
ctx1.fill();

}

function resetCanvas(c) {
  var h=c.height;
  var w=c.width;
  c.width=w;
  c.height=h;
  ctx1.setTransform(1,0,0,1,0,0);
}
// animate;
function drawEverything() {
	drawHal();
	resetCanvas(middle);
	animate;
}

drawEverything();