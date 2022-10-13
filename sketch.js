let ground;
let lander;
var lander_img;
var bg_img;
var thrust;
var rcs_left;
var rcs_right;




function preload()
{
 
  bg_img = loadImage("bg-2.png");
  astroImg = loadAnimation("astro.png", "astro2.png", "astro3.png")




}

function setup() {
  createCanvas(1700,900);
  astro = createSprite(500,300,300,300)
  astro.addAnimation("astro", astroImg)
  astro.scale=7.5

  ground = createSprite(850,890,1700,20);

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
 




  drawSprites();
}




