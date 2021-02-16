class SlingShot{

    constructor(bodyA, pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 7

        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){

        this.sling.bodyA = null;
        
    }

    attach(pointA){

        this.sling.bodyA = pointA;
        
    }

    display(){

        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            stroke(48, 22, 8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
}