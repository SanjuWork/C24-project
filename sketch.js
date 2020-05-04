// Adding physics to the project
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// Creating various variable
var engine,world;
var take1;
var balls = [];



// Calling the function setup
function setup() {

          // Creating a canvas
          var canvas = createCanvas(1200,400); 

          // Creating an engine and adding the world to the engine
          engine = Engine.create();
          world = engine.world;

          // Creating a ground
          ground = new Ground(600,height-10,1200,20);

          // Creating the tanker
          take1 = new Tanker(150,230,100,30);
          take2 = new Tanker(150,295,200,100);   
          take3 = new Tanker(150,210,50,10);
          take4 = new Tanker1(50,295,20,100);
          take5 = new Tanker1(250,295,20,100);
          take6 = new Tanker1(100,230,3,30);
          take7 = new Tanker1(200,230,3,30);
          take8 = new Tanker1(125,210,5,10);
          take9 = new Tanker1(175,210,5,10);

          // Creating the shooting part
          shootpart1 = new Tanker(300,295,100,20,PI/2);
          shootpart2 = new Tanker(350,295,30,30,PI/2);

          // Creating the wheels of the tanker
          wheel1 = new TankerWheel(70,362,17);
          wheel2 = new TankerWheel(110,362,17);
          wheel3 = new TankerWheel(150,362,17);
          wheel4 = new TankerWheel(190,362,17);
          wheel5 = new TankerWheel(230,362,17);

          for(var i = 0; i < 200; i++) {
	  	p1 = new SideChain(random(300,1100),random(0, 200),17);
		balls.push(p1);
		World.add(world,p1);
	  }

}




// Main part of the code called
function draw() {

          // Colouring the background
          background(0,0,0);

          // Updating the engine
          Engine.update(engine);

          // Displaying the ground
          ground.display();

          // Displaying the shooting parts
          shootpart1.display();
          shootpart2.display();

          // Displaying the parts of the tanker
          take4.display();
          take5.display();
          take6.display();
          take7.display();
          take8.display();
          take9.display();
          take1.display();
          take2.display();
          take3.display();

          // DIsplaying the wheels of the tanker
          wheel1.display();
          wheel2.display();
          wheel3.display();
          wheel4.display();
          wheel5.display();    

	  for(var j = 0; j < balls.length; j++) {
	  	balls[j].show();
	  }
}



// Calling the key released function
function keyReleased() {
          // Call the shoot method for the cannon.
}
