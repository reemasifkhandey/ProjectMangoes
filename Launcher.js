class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.004,
            length: 250
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
   
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ()
            stroke(49, 22, 8);
                strokeWeight(7);
                line (pointB.x,pointB.y,pointA.x,pointA.y)
          pop ()
        }
    }
}
           