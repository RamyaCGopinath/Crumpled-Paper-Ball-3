class Paper{
    constructor(x,y,r){
     var options={
         isStatic:false,
         restitution:0.3,
         friction:0,
         density:0.3
     }
  
     this.body=Bodies.circle(x,y,r,options);
     this.image=loadImage("paper.png");
     this.body.position.x=x;
     this.body.position.y=y;
     this.width=r;
     this.height=r;
     World.add(world,this.body);
    }
  
    display(){
     var pos=this.body.position;
      var angle=this.body.angle;
  
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
      pop()
    }
  }