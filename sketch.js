var i_circles = [];
var circles_max = 8;
var spacing = 100;

function CircleSegment (size, angle, len, speed, colr) {
	this.size = size;
	this.angle = angle;
	this.len = len;
	this.speed = speed;
	this.color = colr;
	
	this.display = function (idx) {
		strokeWeight(2);
		stroke(0);
		fill(this.color);
		arc(width/2, height/2, this.size, this.size, this.angle, this.angle+this.len, PIE);
	};
	
	this.move = function () {
		this.angle += this.speed;
	};
}

function setup() {
	frameRate(23);
	pixelDensity(1);
	createCanvas(1080, 1080);	
	colorMode(HSB);
	
	for (let i=circles_max-1; i>=0; i--) {
		let angle = random(TWO_PI);
		let len = random(QUARTER_PI, PI);
		let speed = random(0.01, 0.1);
		if (i%2==0) speed *= -1;
		let colr = color(Math.floor(random(360)), 100, 100, 0.5);
		
		i_circles.push(new CircleSegment((i+2)*spacing, angle, len, speed, colr));
	}
}

function draw() {
	background(100);
	
	for (c in i_circles) {
		i_circles[c].display(c);
		i_circles[c].move();
	}
}