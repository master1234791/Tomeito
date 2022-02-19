var p5Inst = new p5(null, 'sketch');
var edges
window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["de7a4dd0-5ff6-4f38-b551-6db896c9c822","d84b5a71-2be7-4dcb-9e5c-912958ce9cb2","e902dafc-6b54-4e04-bafb-5cc79fe3de72","b4709ebc-7d54-43b1-89d6-e274da41a5de","44a79185-94ca-4649-9f2e-157ffd3548b8","d7ab5bd6-e1fa-4a61-bb48-803fbc06a4e0","a66470e8-2fe4-40f0-b24d-ca5d6a8578f4","11e4f501-8ade-4152-ae88-10b0e11879c0"],"propsByKey":{"de7a4dd0-5ff6-4f38-b551-6db896c9c822":{"name":"tomeito.tomato","sourceUrl":null,"frameSize":{"x":100,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"EAvkqtK_SFLfheQkXJVvyRzzHOGBcBFk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":90},"rootRelativePath":"assets/de7a4dd0-5ff6-4f38-b551-6db896c9c822.png"},"d84b5a71-2be7-4dcb-9e5c-912958ce9cb2":{"name":"rokoto","sourceUrl":null,"frameSize":{"x":100,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"8oM6P55gKvxlzQMjzVOzHt3VRnLjhjkW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":60},"rootRelativePath":"assets/d84b5a71-2be7-4dcb-9e5c-912958ce9cb2.png"},"e902dafc-6b54-4e04-bafb-5cc79fe3de72":{"name":"brickes","sourceUrl":null,"frameSize":{"x":450,"y":443},"frameCount":1,"looping":true,"frameDelay":12,"version":"oAhxcZwnRVpQ2ASD3AjQDZME297sC0Sq","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":443},"rootRelativePath":"assets/e902dafc-6b54-4e04-bafb-5cc79fe3de72.png"},"b4709ebc-7d54-43b1-89d6-e274da41a5de":{"name":"bananeitor","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Zd5t1OQvK54c9sGzgSjoe4NAHkau4Yty","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b4709ebc-7d54-43b1-89d6-e274da41a5de.png"},"44a79185-94ca-4649-9f2e-157ffd3548b8":{"name":"ARENA","sourceUrl":"assets/v3/animations/HgzzSFe1t1FuLvYMLk19yy0dvCKwS341BerVtrN0w34/44a79185-94ca-4649-9f2e-157ffd3548b8.png","frameSize":{"x":1918,"y":1608},"frameCount":1,"looping":true,"frameDelay":4,"version":"IMT9hJMiS9YKiUBmtUX7M7z9vIIDzdmO","loadedFromSource":true,"saved":true,"sourceSize":{"x":1918,"y":1608},"rootRelativePath":"assets/v3/animations/HgzzSFe1t1FuLvYMLk19yy0dvCKwS341BerVtrN0w34/44a79185-94ca-4649-9f2e-157ffd3548b8.png"},"d7ab5bd6-e1fa-4a61-bb48-803fbc06a4e0":{"name":"e","sourceUrl":null,"frameSize":{"x":1918,"y":1608},"frameCount":5,"looping":true,"frameDelay":30,"version":"FpBbGSQO5OzpTxDF7lLrWJcW2kt7zuDY","loadedFromSource":true,"saved":true,"sourceSize":{"x":3836,"y":4824},"rootRelativePath":"assets/d7ab5bd6-e1fa-4a61-bb48-803fbc06a4e0.png"},"a66470e8-2fe4-40f0-b24d-ca5d6a8578f4":{"name":"qmimgustlpepsi","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"1UnSM8tuKlP7kW53kJY9m9FmG25Qe5fC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a66470e8-2fe4-40f0-b24d-ca5d6a8578f4.png"},"11e4f501-8ade-4152-ae88-10b0e11879c0":{"name":"NOMIUSIC","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"FDkBzIGl1nh9mSDFlgc6T.9atwlsheFP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/11e4f501-8ade-4152-ae88-10b0e11879c0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;
var lives = 3;
var e = createSprite(200,200);
e.visible = true;
e.setAnimation("e");
e.scale =0.22;




var groundsprai = createSprite (200,200);
groundsprai.visible = false;
var gamestate = "serve";
var sprite = createSprite(200, 200);
sprite.visible = false;
var esprite = createSprite(200,300);
esprite.visible = false;
var bananas = createSprite(200,100);
bananas.visible = false;
groundsprai.setAnimation("ARENA");
groundsprai.scale =0.22;
sprite.setAnimation("tomeito.tomato");
esprite.setAnimation("rokoto");
edges=createEdgeSprites();
sprite.scale =0.5;
sprite.velocityY = -5;
sprite.velocityX = 4;
bananas.setAnimation("bananeitor");
bananas.velocityX = -3;
bananas.velocityY = 4;
function draw(){
background("white");
  drawSprites();
bananas.bounceOff(edges);
sprite.bounceOff(bananas);
sprite.bounceOff(edges);
sprite.bounceOff(esprite);
esprite.bounceOff(edges);
if (keyDown("left")) {
  esprite.velocityX = -4;
}
if (keyDown("right")) {
  esprite.velocityX = 4;
}
if (e.visible == true){
gamestate = "serve";
}
}
esprite.bounceOff(edges);
var bricks = createGroup();


function createBrickRow(y, color) {
  for(var c = 0; c<6; c++)
  {
    
    var brick = createSprite(65+54*c,y,50, 25);
    brick.setAnimation("brickes");
    brick.scale =0.1;
   // brick.changeAnimation("bananeitor");
    brick.shapeColor = color;
    bricks.add(brick);
  bricks.setVisibleEach(false);}
}

createBrickRow(65, "red");
createBrickRow(65+29, "orange");
createBrickRow(65+29+29, "green");
createBrickRow(65+29+29+29, "yellow");

function draw() {
 
  fill ("lime");
  background("black");
  drawSprites();
  textSize(30);
  text("Puntuación: "+score,40,25);
  text("Vidas: "+lives, 40, 45);
  
  if(gamestate == "serve"){
    text("Click To Shoot Tomeito!", 50,200);
    sprite.velocityX =0;
    sprite.velocityY =0;
    sprite.x = 200;
    sprite.y = 200;
  }
  else if(gamestate =="over") {
    text("¡End Of The Game!", 150, 250);
    sprite.remove;
  }
   else {
    gameplay();
  }
  if ((lives <= 0 && keyDown("R"))) {
   for (var i = 0; i < 40000; i++) {
       text("¡End Of The Game!", 50, 200);
    }
        playSound("assets/heavy_domination17.mp3", true);
    playSound("assets/tmp1s4pnycq.mp3", true);
    lives = 0;
    gamestate = "play";
  }
  
  
  
}

function music() {
  var asdf = createSprite(375, 25);
  asdf.setAnimation("qmimgustlpepsi");
  if (mousePressedOver(asdf)) {
    playSound("assets/Godzilla-vs-Biollante-Soundtrack--Bio-Wars.mp3", false);
  }
}
function NOMUSIC() {
var asdg = createSprite(375, 350);
asdg.setAnimation("NOMIUSIC");
if (mousePressedOver(asdg)) {
stopSound("assets/Godzilla-vs-Biollante-Soundtrack--Bio-Wars.mp3", false);
  }
}
function mousePressed()
{
  
music();
NOMUSIC();
e.visible = false;
groundsprai.visible = true;
sprite.visible = true;
esprite.visible = true;
bananas.visible = true;
bricks.setVisibleEach(true);
  
  
  sprite.velocityX = 10;
  sprite.velocityY = 6;
  
  if(gamestate == "serve"){
    gamestate = "play";
    sprite.velocityY = -7;
    sprite.velocityX = -7;
  }
}
}

function brickHit(ball, brick) {
 playSound("assets/heavy_domination17.mp3");
 brick.remove();
 score = score+5;
  
}

function lifeover(){
  lives = lives - 1;
  if(lives>=1) {
    gamestate = "serve";
  }
  else {
    lives = 0;
    gamestate = "end";
  
}

function gameplay(){
  esprite.x = World.mouseX;
  
  if(esprite.x < 60)
  {
    esprite.x = 60;
  }
    
  if(esprite.x > 340)
  {
    esprite.x = 340;
  }
  //rotation = rotation + 5;
  sprite.bounceOff(topEdge);
  sprite.bounceOff(leftEdge);
  sprite.bounceOff(rightEdge);
  //ball.bounceOff(paddle);
  sprite.bounceOff(bricks, brickHit);
  if(sprite.bounceOff(esprite))
  {
    playSound("assets/movie_1.mp3");
  }
  if(!bricks[0])
  {
    //console.log("Won");
    sprite.velocityX = 0;
    sprite.velocityY = 0;
    text("¡noice!",150,200);
  }
  if(sprite.isTouching(bottomEdge)) {
    lifeover();
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
