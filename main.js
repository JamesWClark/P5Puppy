function setup() {
    createCanvas(740, 480);
}

function draw() {
    var x = width/4;
    var y = height/2;
    

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
    
    
}