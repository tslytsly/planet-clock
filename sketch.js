let hourColor,
	minColor,
	secColor;
let hourAngle = 0;
let minAngle = 0;
let secAngle = 0;

let rSec = 25;
let rMin = 50;
let rHour = 75;
let rSun = 100;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(121);
	angleMode(DEGREES);

	hourColor = color(255, 0, 0);
	minColor = color(0, 255, 0);
	secColor = color(0, 0, 255);
}

function draw() {
	background(121);

	text(hour() + ":" + minute() + ":" + second() + ":" + second() * 60, 10, 10);

	hourAngle = map(hour() % 12, 0, 12, 0, 360);
	minAngle = map(minute(), 0, 60, 0, 360);
	let secAngleNew = map(second(), 0, 60, 0, 360);
	secAngle = lerp(secAngle, secAngleNew, 0.1);

	fill(255);
	translate(width / 2, height / 2);
	ellipse(0, 0, rSun * 2);
	rotate(hourAngle);
	translate(rSun * 2, 0);
	ellipse(0, 0, rHour * 2);
	rotate(minAngle);
	translate(rHour * 2, 0);
	ellipse(0, 0, rMin * 2);
	rotate(secAngle);
	translate(rMin * 2, 0);
	ellipse(0, 0, rSec * 2);
}