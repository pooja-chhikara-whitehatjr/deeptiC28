class Box{
    constructor(x,y,width,height){
       
        var options={
            restitution:4.0,
            friction:0.3,
            density:0.3
        }
        this.visiblity=255;
        this.image=loadImage("ball.jpg");
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        console.log(this.body.speed);
    if(this.body.speed>3){
        World.remove(world,this.body);
        this.visiblity = this.visiblity - 5;
     tint(255,this.visiblity);
    
         imageMode(CENTER);  
     image(this.image,pos.x,pos.y,this.width,this.height);
    
    }
    else{
        imageMode(CENTER); 
        image(this.image,pos.x,pos.y,this.width,this.height);
    }  
    }
    score(){
    
if(this.visiblity<0 && this.visiblity>-550){
score++;
}
    }
}