/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;*/
var gameState = "start";
var houseImg, livingRoomImg;
var place;
var click, birds;
var button2,button3,button5,button6;
var flag = false

function preload() {
  houseImg = loadImage("Images/home.png");
  livingRoomImg = loadImage("Images/livingRoom.png");
  click=loadSound("Sounds/click.mp3");
  birds=loadSound("Sounds/birds.mp3");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  background(255, 159, 231);
  
  if (gameState === "start") {
    start();
    
  }
  
   
 
}

function draw() {
  //background(255);
  if (gameState==="instruction"){

   instructions();
  
}
 if (gameState==="play"){
  button6= createButton("Menu")
  button6.position(600,370);
  if(flag){
    background('yellow')
  }
  //if(!button6){
  button6.mousePressed(() => {
    click.play();
    button6.hide();
    console.log("pressed")
    flag = true;
    menu();
    //menu();
    // mouse pressed is true instanteneously.. the background needs to be in function draw. i.e. it should get executed in evry frame
    //try adding flag variable .. wait

    });
 //}  
   
 

  if (gameState === "play" && place === "outside") {
    if(!flag){
      background(houseImg);
    }
    //birds.play();
    if(!button3){
    button3 = createButton("Open");
    button3.position(390, 275);
    button3.mousePressed(() => {
      button3.hide();
      place = "living room";
      gameState = "play";
      click.play();
    });
 }
  }
  if (gameState === "play" && place === "living room") {
    if(!flag){
      background(livingRoomImg);
    }
  }
  
}
}
function start(){
  stroke(0);
    fill(186, 73, 255);
    textFont("jokerman");
    textSize(40);
    text("⚠ COVID Safety ⚠", 450, 50);

    noStroke();
    textFont("ink free");
    fill("black");
    textSize(20);
    text("Corona virus has taken over the world, leaving all locked up in their homes. Let's learn how we can keep us safe. ", 25, 150);
   text("Click start to play.",150,170)
    button1 = createButton("Start");
    button1.position(600, 370);
    button1.mousePressed(() => {
      button1.hide();
      gameState = "instruction";
      place= "outside";
      click.play();
    });
}

function instructions(){

  background(255, 159, 231);
  stroke(0);
  fill(186, 73, 255);
  textFont("Times New Roman");
  textSize(40);
  text("Here's your schedule", 450, 50);
 
  if(!button2)
  {
  button2 = createButton("play");
    button2.position(600, 370);
    button2.mousePressed(() => {
      //button2.hidden=true;
     console.log(5)
      button2.hide()
    gameState = "play";
   // place="outside";
    click.play();
  })
}

}
function menu(){
  background("yellow");
  
button5 = createButton("kit");
button5.position(100, 150);
button7 = createButton("living");
button7.position(100,250);
button8 = createButton("bedt");
button8.position(100, 350);
button9 = createButton("market");
button9.position(100, 450);

   
}