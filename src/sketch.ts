//---- GLOBAL VARIABLES ----//
let game: Game;
let images: Images;
let entites: Entites;
let isPaused: boolean = false;



// let sound: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // sound: p5.SoundFile = loadSound('../assets/mySound.wav');

  
  images = {
    monkeyBig: loadImage("/assets/images/bigMonkey.png"),
    pigBig: loadImage("/assets/images/bigPig.png"),
    rabbitBig: loadImage("/assets/images/bigRabbit.png"),
    turtleBig: loadImage("/assets/images/bigTurtle.png"),
    rabbitFront: loadImage("/documents/gameCharacters/rabbitFront.png"),
    rabbitBack: loadImage("/documents/gameCharacters/rabbitBack.png"),
    rabbitLeft: loadImage("/documents/gameCharacters/rabbitLeft.png"),
    rabbitRight: loadImage("/documents/gameCharacters/rabbitRight.png"),
    pigFront: loadImage("/documents/gameCharacters/pigFront.png"),
    pigBack: loadImage("/documents/gameCharacters/pigBack.png"),
    pigLeft: loadImage("/documents/gameCharacters/pigLeft.png"),
    pigRight: loadImage("/documents/gameCharacters/pigRight.png"),
    monkeyFront: loadImage("/documents/gameCharacters/monkeyFront.png"),
    monkeyBack: loadImage("/documents/gameCharacters/monkeyBack.png"),
    monkeyLeft: loadImage("/documents/gameCharacters/monkeyLeft.png"),
    monkeyRight: loadImage("/documents/gameCharacters/monkeyRight.png"),
    turtleFront: loadImage("/documents/gameCharacters/turtleFront.png"),
    turtleBack: loadImage("/documents/gameCharacters/turtleBack.png"),
    turtleLeft: loadImage("/documents/gameCharacters/turtleLeft.png"),
    turtleRight: loadImage("/documents/gameCharacters/turtleRight.png"),
    animalWarzone: loadImage("/assets/images/startMenuPicture.png"),
  };

  entites = {
    greenHeart: loadImage('/assets/images/life.png'),
    redHeart: loadImage("/assets/images/redheart.png"),
    shield: loadImage("/assets/images/shield.png"),
    speed: loadImage("/assets/images/speed.png"),
    banana: loadImage('/assets/images/banana.png'),
    barricade: loadImage("/assets/images/Group 67.png")

  };
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  // noCursor();
  
  game = new Game();
  //characters = new Characters(this);

}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();

}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
