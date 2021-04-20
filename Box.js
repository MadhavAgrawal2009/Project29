class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution:1,
          friction:0.0,
         // density:0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(colorName = "white"){
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      fill(colorName);
      translate(pos.x, pos.y);
      angleMode(RADIANS);
      rotate(this.body.angle);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }