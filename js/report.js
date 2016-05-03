// JavaScript Document

$(function(){
		   var c = document.getElementById("graph");
var ctx = c.getContext("2d");
var ctx1 = c.getContext("2d");
var ctx2 = c.getContext("2d");
ctx1.beginPath();
ctx1.font = "bold 10px Verdana";


ctx1.moveTo(20, 160);

ctx1.fillText("20", 0, 160);

ctx1.moveTo(20, 120);

ctx1.fillText("40", 0, 120);

ctx1.moveTo(20, 80);

ctx1.fillText("60", 0, 80);

ctx1.moveTo(20, 40);

ctx1.fillText("80", 0, 40);

ctx1.moveTo(20, 200);


ctx1.fillText("TEMPORAL", 0, 227);
ctx1.moveTo(110, 200);

ctx1.fillText("90", 110, 212);
ctx1.fillText("SUPERIOR", 90, 227);

ctx1.moveTo(200, 200);

ctx1.fillText("180", 200, 212);
ctx1.fillText("NASAL", 195, 227);
ctx1.moveTo(290, 200);

ctx1.fillText("270", 290, 212);
ctx1.fillText("INFERIOR", 275, 227);
ctx1.moveTo(380, 200);

ctx1.fillText("360", 355, 212);

ctx1.strokeStyle = "black";
ctx1.stroke();

ctx2.beginPath();
var grd=ctx2.createLinearGradient(0,-50,0,170);
grd.addColorStop(0,"green");
grd.addColorStop(1,"white");
var prevk = 200 - (2 * (Math.random*200)+1);
ctx2.moveTo(20,10);				
for (var i = 20, j = 0; i < 380 && j < 35; i += 10, j++) {
	k = Math.floor(200 - (2 * (Math.random*200)+1));

	ctx2.lineTo(i,k);

	prevk = k;
}
ctx2.lineTo(i,200);
ctx2.lineTo(20,200);
ctx2.strokeStyle = "rgba(0,255,0,.5";
ctx2.lineWidth='4';
ctx2.fillStyle=grd;
ctx2.fill();
ctx2.stroke();

ctx2.closePath();

		   });