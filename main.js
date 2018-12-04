var sq;
var feed = []; // an empty array
var numFood = 10;

var a = [1,2,3];

function setup() {
    createCanvas(740, 480);
    sq = new Squirrel();

    // initializing 10 pieces of food
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0,255,0);
    sq.display();
    
    // display all the food
    for(var i = 0; i < numFood; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    sq.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    
    this.display = function() {
        var foodSize = 50;
        fill(this.color);
        ellipse(this.x, this.y, foodSize, foodSize);
    }
}

function Squirrel() {
    // instance variables
    var x = mouseX;
    var y = mouseY;

    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
    }
    
    this.eat = function() {
        
    }
    
    this.display = function() {   
        x = mouseX;
        y = mouseY;

        noStroke();
        fill('#52C5DC');
        ellipse(x, y, 200, 200);


        fill('#EFB8D2');
        ellipse(x, y+30, 64, 64);


        fill('#FFFFFF');
        ellipse(x+42, y-26, 64, 64);


        fill('#7FC35E');
        ellipse(x+42, y-26, 40, 40);


        fill('#FFFFFF');
        ellipse(x-42, y-26, 64, 64);


        fill('#7FC35E');
        ellipse(x-42, y-26, 40, 40);


        fill('#52C5DC');
        push();
        translate(x-100, y-80);
        rotate(Math.PI/4);
        ellipse(0, 0, 52, 92);
        pop();


        fill('#52C5DC');
        push();
        translate(x+100, y-80);
        rotate(-Math.PI/4);
        ellipse(0, 0, 52, 92);
        pop();


        fill('#EE3E36');
        arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);

        // CLINTS ANIMAL

        noStroke();
        fill('brown');
        ellipse(x*3, y, 200, 200);

        noStroke();
        fill('brown');
        triangle(515, 135, 460, 200, 500, 120);

        noStroke();
        fill('brown');
        triangle(640, 135, 630, 200, 690, 120);

        fill('#FFFFFF');
        ellipse(x+342, y-26, 64, 64);

        fill('#FFFFFF');
        ellipse(x+ 420, y-26, 64, 64);

        fill('#EE3E36');
        ellipse(x+420, y-26, 40, 40);

        fill('#EE3E36');
        ellipse(x+342, y-26, 40, 40);

        fill('#000000');
        ellipse(x+381, y+20, 40, 40);

        noStroke();
        fill('#FFFFFF');
        triangle(480, 290, 550, 335, 620, 290);

        noStroke();
        fill('#000000');
        triangle(500, 300, 550, 325, 600, 300);
    };
}