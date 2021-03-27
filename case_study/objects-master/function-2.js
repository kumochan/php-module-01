var Circle = function(radius) { 
	this.getRadius = function() {
		return radius;
	}
	this.getArea = function() {
		return Math.PI * radius * radius;
	} 
};
var circle = new Circle(2); circle.getRadius(); // 2
circle.getArea(); // 12.566370614359172