class Stone {

    constructor(x, y){

        var options = {

            'restitution': 0.8,
            'friction': 0.3,
            'density': 2.0

        }

        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30;

        this.image = loadImage("polygon.png");

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);

        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 40, 40); 
        pop();

    }

}