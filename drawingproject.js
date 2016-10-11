var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
var c = canvas;

//background
canvas.fillStyle = "lightblue";
canvas.fillRect(0,0,1910.5,986);

// face
canvas.fillStyle = "yellow";
canvas.fillRect(800,300,300,300);



//eyes

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(920,400,35,0,2*Math.PI,true);
canvas.arc(980,400,35,0,2*Math.PI,true);
canvas.fill();
//outline
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(920,400,35,5.68,2.1785*Math.PI,true);
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(980,400,35,2.55,1.178*Math.PI,true);
canvas.stroke();

//iris
canvas.beginPath();
canvas.fillStyle = "	#1E90FF";
canvas.arc(920,400,16,0,2*Math.PI,true);
canvas.arc(980,400,16,0,2*Math.PI,true);
canvas.fill();
//pupil
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(920,400,8,0,2*Math.PI,true);
canvas.arc(980,400,8,0,2*Math.PI,true);
canvas.fill();

//lashes
canvas.beginPath();
canvas.lineWidth=2;
canvas.strokeStyle = "black";
//leftcenter
canvas.moveTo(920,367);
canvas.lineTo(920,346);
//leftleft
canvas.moveTo(898,373);
canvas.lineTo(886,354);
//leftright
canvas.moveTo(941,373);
canvas.lineTo(948,355);
//rightcenter
canvas.moveTo(980,367);
canvas.lineTo(980,346);
//rightleft
canvas.moveTo(958,373);
canvas.lineTo(952,355);
//rightright
canvas.moveTo(1001,373);
canvas.lineTo(1011,354.5);
canvas.stroke();




//smile
c.beginPath();
canvas.fillStyle = "#773d22";
canvas.arc(950,450,73,2.9,2.05*Math.PI,true);
canvas.fill();

//teeth
canvas.fillStyle = "white";
canvas.fillRect(923,475,23,25);
canvas.beginPath();

canvas.fillStyle = "white";
canvas.fillRect(951,475,23,25);
canvas.beginPath();

//restOfSmile
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(950,450,73,2.9,2.05*Math.PI,true);
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(950,325,160,2.3,2.3*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(950,325,160,2.027,2.355*Math.PI,true);
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(950,490,50,2.2,2.3*Math.PI,true);
canvas.stroke();

//nose
c.beginPath();
c.fillStyle = "yellow";
c.ellipse(950, 450, 13, 40, 0 * Math.PI/180, 2.8, 2.1 * Math.PI);
c.fill();

c.beginPath();
c.fillStyle = "black";
c.ellipse(950, 450, 13, 40, 0 * Math.PI/188, 3.14, 2 * Math.PI);
c.stroke();

//shirt
canvas.fillStyle = "white";
canvas.fillRect(800,550,300,55);
canvas.beginPath();

//pants
canvas.fillStyle = "#4d2600";
canvas.fillRect(800,590,300,55);
canvas.beginPath();

//belt
canvas.fillStyle = "black";
canvas.fillRect(812,600,50,12);
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(880,600,50,12);
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(970,600,50,12);
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(1040,600,50,12);
canvas.beginPath();

// tie
canvas.fillStyle = "brown";
canvas.moveTo(930,550);
canvas.lineTo(970,590);
canvas.lineTo(950,621);
canvas.lineTo(930,590);
canvas.lineTo(970,550);
canvas.fill();

//collar
canvas.fillStyle = "black";
canvas.moveTo(930,550);
canvas.lineTo(875,550);
canvas.lineTo(903,585);
canvas.lineTo(930,550);
canvas.stroke();
canvas.fillStyle = "black";
canvas.moveTo(970,550);
canvas.lineTo(1025,550);
canvas.lineTo(995,585);
canvas.lineTo(970,550);
canvas.stroke();

//pores
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(1070,520,3,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(1070,470,6,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(870,375,3,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(850,329,5,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(1050,428,7,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(868,530,5,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(1030,509,7,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(1075,370,15,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(837,420,5,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(830,470,10,0,2*Math.PI,true);
canvas.fill();
canvas.beginPath();
canvas.fillStyle = "#cccc00";
canvas.arc(985,330,7,0,2*Math.PI,true);
canvas.fill();

//legs

//
