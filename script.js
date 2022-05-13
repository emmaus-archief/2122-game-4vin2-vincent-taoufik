/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const KEY_Z = 90;
const KEY_X = 88;
const SPELEN = 1;
const GAMEOVER = 2;
const GAME = 3;
const PLAY = 4;
const INNIT = 5;
const NO = 6;
var spelStatus = SPELEN;
var roundStatus = GAME;
var roundStatus2 = INNIT;

var spelerX = 500; // x-positie van speler
var spelerY = 500; // y-positie van speler

let colourpoint = '#0000FF';

var pointer = function () {
  noStroke();
  fill(colourpoint);
  ellipse(mouseX, mouseY, 30, 30);
  fill('#ffffff');
  ellipse(mouseX, mouseY, 20, 20);
}



/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */


var circles = function () {

  var random_number = Math.floor(Math.random() * 2);
  var x = (random_number);
  if(x === 1) {circlecolour = red}
    else {circlecolour = blue}


  fill('blue');

  function getRandomInt(max) {
    return Math.floor(Math.random() * max); }

    ellipse(getRandomInt(1200), getRandomInt(1200), 60, 60);
    ellipse(getRandomInt(1200), getRandomInt(1200), 60, 60);
    ellipse(getRandomInt(1200), getRandomInt(1200), 60, 60);

  stroke('#ffffff');



  // speler

  // vijand

  // kogel
};


/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond

  // touch the circles


  // kogel

  // speler


  if (keyIsDown(KEY_X)) {
    colourpoint = '#0000FF';
  };
  if (keyIsDown(KEY_Z)) {
    colourpoint = '#FF0000';
  };


  background('#060622');
  noStroke();
  noCursor();
  pointer();


  // punten en health

}

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  console.log("setup");
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('#060622');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    verwerkBotsing();
    tekenAlles();

    if (roundStatus === GAME) {
      console.log(roundStatus2)
      if (roundStatus2 === INNIT) {
        circles();
        }
      roundStatus2 = NO;
      
    }

    pointer();

    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    background('#ff0000');
    textSize(340);
    text("sgsg", 400, 423);
  }
};

