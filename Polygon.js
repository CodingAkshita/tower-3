class Polygon{

    constructor(x,y,r){
      var options = {
        isStatic:false
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = Bodies.circle(50,200,20);
      this.image = loadImage("polygon.png");
          World.add(world, this.image);
    }
    display(){

      var Polygonpos = this.body.position;

        push();
        translate(Polygonpos.x,Polygonpos.y,Polygonpos.r);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        pop();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    