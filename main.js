var puppy;
var feed = []; // an empty array
var numFood = 10;

var a = [1, 2, 3];

function setup() {
    rectMode(CENTER);
    createCanvas(1024, 768);
    puppy = new Puppy();

    // initializing 10 pieces of food
    for (var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0, 255, 0);
    puppy.display();

    // display all the food
    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    puppy.eat();
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

function Puppy() {
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

        // face
        fill('#52C5DC');
        ellipse(x, y, 200, 200);

        // nose
        fill('#EFB8D2');
        ellipse(x, y + 30, 64, 64);

        // mouth
        if (mouseIsPressed) {
            fill(0);
            rect(x, y + 80, 50, 30);
            fill(255);
            for (var i = x - 25; i < x + 25; i += 20) {
                triangle(i, y + 65, i + 5, y + 75, i + 10, y + 65);
                triangle(i, y + 95, i + 5, y + 85, i + 10, y + 95);
            }
            fill('#EE3E36');
            ellipse(x, y + 100, 20, 40);
        } else {
            fill('#EE3E36');
            arc(x - 20, y + 80, 40, 70, 0, PI + QUARTER_PI, CHORD);
        }
        
        var eyeSize = 64;        
        if(mouseIsPressed) {
            eyeSize = 74;
        }
        var iris = eyeSize - 24;

        // eyes
        fill('#FFFFFF');
        ellipse(x + 42, y - 26, eyeSize, eyeSize);
        fill('#7FC35E');
        ellipse(x + 42, y - 26, iris, iris);
        fill('#FFFFFF');
        ellipse(x - 42, y - 26, eyeSize, eyeSize);
        fill('#7FC35E');
        ellipse(x - 42, y - 26, iris, iris);

        // ears
        fill('#52C5DC');
        push();
        translate(x - 100, y - 80); // left
        rotate(Math.PI / 4);
        ellipse(0, 0, 52, 92);
        fill('#AEAAAF');
        ellipse(0, 0, 32, 72);
        pop();
        fill('#52C5DC');
        push();
        translate(x + 100, y - 80); // right
        rotate(-Math.PI / 4);
        ellipse(0, 0, 52, 92);
        fill('#AEAAAF');
        ellipse(0, 0, 32, 72);
        pop();
    };
}
