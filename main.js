var sq;
var feed = []; // an empty array
var numFood = 10;

var a = [1, 2, 3];

function setup() {
    createCanvas(1024, 768);
    sq = new Squirrel();

    // initializing 10 pieces of food
    for (var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0, 255, 0);
    sq.display();

    // display all the food
    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    sq.eat();
}

function Food(x, y) {
    // keyword this
    // makes variables public on the object

    // public instance variables
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;

    this.display = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Squirrel() {
    // private instance variables
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;

    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };

    this.eat = function () {
        for (var i = feed.length - 1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
            }
        }
    };

    this.display = function () {
        x = mouseX;
        y = mouseY;
        noStroke();
        fill('#52C5DC');
        ellipse(x, y, 200, 200);
        fill('#EFB8D2');
        ellipse(x, y + 30, 64, 64);
        fill('#FFFFFF');
        ellipse(x + 42, y - 26, 64, 64);
        fill('#7FC35E');
        ellipse(x + 42, y - 26, 40, 40);
        fill('#FFFFFF');
        ellipse(x - 42, y - 26, 64, 64);
        fill('#7FC35E');
        ellipse(x - 42, y - 26, 40, 40);
        fill('#52C5DC');
        push();
        translate(x - 100, y - 80);
        rotate(Math.PI / 4);
        ellipse(0, 0, 52, 92);
        pop();
        fill('#52C5DC');
        push();
        translate(x + 100, y - 80);
        rotate(-Math.PI / 4);
        ellipse(0, 0, 52, 92);
        pop();
        fill('#EE3E36');
        arc(x - 20, y + 80, 40, 70, 0, PI + QUARTER_PI, CHORD);
    };
}
