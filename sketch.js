var canva;
var gameState = 0;
var playerCount, database, game, question,player;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Quiz();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  
}
