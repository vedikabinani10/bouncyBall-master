class Ground{
    constructor(x,y,width){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,20,options);
        this.width=width;
        this.height=20;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}