var bg;
var boy,boyRDead,boyRIdle,boyRJump,boyRRun,boyRSlide,boyLDead,boyLIdle,boyLJump,boyLRun,boyLSlide;

function preload(){
  bg=loadImage("BG.png");
  boyRDead=loadAnimation("playerRight/Dead__000.png","playerRight/Dead__001.png","playerRight/Dead__002.png","playerRight/Dead__003.png","playerRight/Dead__004.png","playerRight/Dead__005.png","playerRight/Dead__006.png","playerRight/Dead__007.png","playerRight/Dead__008.png","playerRight/Dead__009.png");
  boyRIdle=loadAnimation("playerRight/Idle__000.png","playerRight/Idle__001.png","playerRight/Idle__002.png","playerRight/Idle__003.png","playerRight/Idle__004.png","playerRight/Idle__005.png","playerRight/Idle__006.png","playerRight/Idle__007.png","playerRight/Idle__008.png","playerRight/Idle__009.png");
  boyRJump=loadAnimation("playerRight/Jump__000.png","playerRight/Jump__001.png","playerRight/Jump__002.png","playerRight/Jump__003.png","playerRight/Jump__004.png","playerRight/Jump__005.png","playerRight/Jump__006.png","playerRight/Jump__007.png","playerRight/Jump__008.png","playerRight/Jump__009.png");
  boyRRun=loadAnimation("playerRight/Run__000.png","playerRight/Run__001.png","playerRight/Run__002.png","playerRight/Run__003.png","playerRight/Run__004.png","playerRight/Run__005.png","playerRight/Run__006.png","playerRight/Run__007.png","playerRight/Run__008.png","playerRight/Run__009.png");
  boyRSlide=loadAnimation("playerRight/Slide__000.png","playerRight/Slide__001.png","playerRight/Slide__002.png","playerRight/Slide__003.png","playerRight/Slide__004.png","playerRight/Slide__005.png","playerRight/Slide__006.png","playerRight/Slide__007.png","playerRight/Slide__008.png","playerRight/Slide__009.png");
  boyLDead=loadAnimation("playerLeft/Dead__000.png","playerLeft/Dead__001.png","playerLeft/Dead__002.png","playerLeft/Dead__003.png","playerLeft/Dead__004.png","playerLeft/Dead__005.png","playerLeft/Dead__006.png","playerLeft/Dead__007.png","playerLeft/Dead__008.png","playerLeft/Dead__009.png");
  boyLIdle=loadAnimation("playerLeft/Idle__000.png","playerLeft/Idle__001.png","playerLeft/Idle__002.png","playerLeft/Idle__003.png","playerLeft/Idle__004.png","playerLeft/Idle__005.png","playerLeft/Idle__006.png","playerLeft/Idle__007.png","playerLeft/Idle__008.png","playerLeft/Idle__009.png");
  boyLJump=loadAnimation("playerLeft/Jump__000.png","playerLeft/Jump__001.png","playerLeft/Jump__002.png","playerLeft/Jump__003.png","playerLeft/Jump__004.png","playerLeft/Jump__005.png","playerLeft/Jump__006.png","playerLeft/Jump__007.png","playerLeft/Jump__008.png","playerLeft/Jump__009.png");
  boyLRun=loadAnimation("playerLeft/Run__000.png","playerLeft/Run__001.png","playerLeft/Run__002.png","playerLeft/Run__003.png","playerLeft/Run__004.png","playerLeft/Run__005.png","playerLeft/Run__006.png","playerLeft/Run__007.png","playerLeft/Run__008.png","playerLeft/Run__009.png");
  boyLSlide=loadAnimation("playerLeft/Slide__000.png","playerLeft/Slide__001.png","playerLeft/Slide__002.png","playerLeft/Slide__003.png","playerLeft/Slide__004.png","playerLeft/Slide__005.png","playerLeft/Slide__006.png","playerLeft/Slide__007.png","playerLeft/Slide__008.png","playerLeft/Slide__009.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  boy=createSprite(400, 200, 50, 50);
  //boy.addAnimation("boyRDead", boyRDead)
  boy.addAnimation("boyRIdle", boyRIdle)
  //boy.addAnimation("boyRJump", boyRJump)
  //boy.addAnimation("boyRRun", boyRRun)
  //boy.addAnimation("boyRSlide", boyRSlide)
  //boy.addAnimation("boyLDead", boyLDead)
  //boy.addAnimation("boyLIdle", boyLIdle)
  //boy.addAnimation("boyLJump", boyLJump)
  //boy.addAnimation("boyLRun", boyLRun)
  //boy.addAnimation("boyLSlide", boyLSlide)
  
}

function draw() {
  background(bg);  
  drawSprites();
}