var pbox_bottom, pbox_left, pbox_right

class pbox
{
   constructor(x,y,r){
     var opitions={
      isStatic:false,
      restitution:0,
      friction:0,
       density:0
                    } 
    this.body=this.body=Bodies.rectangle(this.body,this.width,this.height,this/2,opitions)
    this.width = width;
    this.height = height
     
     World.add(world,this.body)
   }
   display();
} 
var pboxpos=this.body.position;
push()

transalate(pboxpos.x,pboxpos.y);
rectMode(CENTER)
strokeWeight(3);
pop()
var options = {
  isStatic: true
}
function setup(){	
pbox_bottom = createSprite(width/2 , height-30, 200,20);

pbox_left = createSprite(290, height-55, 20,220);
 
pbox_right = createSprite(490, height-55, 20,220);
}



