//the planet() is a dynamic array - i.e. it has no initial value
//the number of planets is given by using ReDim later on
var orbitTimer, SF, planetCount, i, speed, pSize, asteroidObj, astMotion;
var planets = [];
var planet1Src = "../images/3-body/planet1.png";
var planet2Src = "../images/3-body/planet2.png";
var planet3Src = "../images/3-body/planet3.png";
var sunSrc = "../images/3-body/sun.png";

//start of the planet class
function PlanetClass() {
    //public variables can be accessed via a dot after the object e.g... planet[2].y
    this.x; this.y, this.pImage;
    this.SF;
    this.Ax = 0;
    this.Ay = 0;
    this.Vx = 0;
    this.Vy = 0;
    this.scrnCentreW = document.body.clientWidth/2;
    this.scrnCentreH = document.body.clientHeight/2;
}

PlanetClass.prototype.initValues = function(xVelocity, yVelocity, pImg, pNum, xPosInit, yPosInit, scaleFactor){
    this.Vx = xVelocity;
    this.Vy = yVelocity;
    // the next 2 lines "create" an image and attach it to the HTML area indicated by the label "planetGrid"
    // the image now belongs to the object in effect.
    this.pImage = "<img id='imgPlanet" + pNum + "' src='" + pImg + "' alt='Planet' class='planetStyle' />";
    planetGrid.innerHTML = planetGrid.innerHTML + this.pImage;
    document.getElementById("imgPlanet" + pNum).style.left = this.scrnCentreW + (xPosInit * scaleFactor);
    document.getElementById("imgPlanet" + pNum).style.top = this.scrnCentreH + (yPosInit * scaleFactor);
};

PlanetClass.prototype.astInit = function(xVelocity, yVelocity, scaleFactor){
    this.x = parseFloat(document.getElementById("cannonbarrel10").style.left);
    this.y = parseFloat(document.getElementById("cannonbarrel10").style.top);
    document.getElementById("asteroid").style.left = this.x;
    document.getElementById("asteroid").style.top = this.y;
    this.Vx = xVelocity;
    this.Vy = yVelocity;
};

PlanetClass.prototype.astPosOld = function(){
    this.x = parseFloat(document.getElementById("asteroid").style.left);
    this.y = parseFloat(document.getElementById("asteroid").style.top);
};

PlanetClass.prototype.astAccel = function(pX1, pY1, pX2, pY2, pX3, pY3, scaleFactor){
    this.Ax = ((0.1 * (pX1 - this.x) / (Math.sqrt(Math.pow((Math.pow(pX1 - this.x, 2) + Math.pow(pY1 - this.y, 2)), 3))))
             + (0.1 * (pX2 - this.x) / (Math.sqrt(Math.pow((Math.pow(pX2 - this.x, 2) + Math.pow(pY2 - this.y, 2)), 3))))
             + (0.1 * (pX3 - this.x) / (Math.sqrt(Math.pow((Math.pow(pX3 - this.x, 2) + Math.pow(pY3 - this.y, 2)), 3))))) * scaleFactor;

    this.Ay = ((0.1 * (pY1 - this.y) / (Math.sqrt(Math.pow((Math.pow(pY1 - this.y, 2) + Math.pow(pX1 - this.x, 2)), 3))))
             + (0.1 * (pY2 - this.y) / (Math.sqrt(Math.pow((Math.pow(pY2 - this.y, 2) + Math.pow(pX2 - this.x, 2)), 3))))
             + (0.1 * (pY3 - this.y) / (Math.sqrt(Math.pow((Math.pow(pY3 - this.y, 2) + Math.pow(pX3 - this.x, 2)), 3))))) * scaleFactor;
};

PlanetClass.prototype.updateAst = function(speedValue){
    //update velocities...
    this.Vx = this.Vx + this.Ax * speedValue;
    this.Vy = this.Vy + this.Ay * speedValue;
    //update positions...
    this.x = this.x + this.Vx * speedValue;
    this.y = this.y + this.Vy * speedValue;
    //pass those values to the images
    document.getElementById("asteroid").style.left = this.x;
    document.getElementById("asteroid").style.top = this.y;
};

PlanetClass.prototype.xyPosOld = function (img) {
    this.x = parseFloat(document.getElementById("imgPlanet" + img).style.left);
    this.y = parseFloat(document.getElementById("imgPlanet" + img).style.top);
};

PlanetClass.prototype.calculateAcceleration = function(opX1, opY1, opX2, opY2, mass1, scaleFactor){
    this.Ax = (((mass1 * (opX1 - this.x)) / (Math.sqrt(Math.pow((Math.pow(opX1 - this.x, 2) + Math.pow(opY1 - this.y, 2)), 3))))
                       + ((opX2 - this.x) / (Math.sqrt(Math.pow((Math.pow(opX2 - this.x, 2) + Math.pow(opY2 - this.y, 2)), 3))))) * scaleFactor;

    this.Ay = (((mass1 * (opY1 - this.y)) / (Math.sqrt(Math.pow((Math.pow(opY1 - this.y, 2) + Math.pow(opX1 - this.x, 2)), 3))))
                       + ((opY2 - this.y) / (Math.sqrt(Math.pow((Math.pow(opY2 - this.y, 2) + Math.pow(opX2 - this.x, 2)), 3))))) * scaleFactor;
};

PlanetClass.prototype.twoPlanetAccel = function(opX, opY, scaleFactor){
    this.Ax = ((opX - this.x) / (Math.sqrt(Math.pow((Math.pow(opX - this.x, 2) + Math.pow(opY - this.y, 2)), 3)))) * scaleFactor;
    this.Ay = ((opY - this.y) / (Math.sqrt(Math.pow((Math.pow(opY - this.y, 2) + Math.pow(opX - this.x, 2)), 3)))) * scaleFactor;
};

PlanetClass.prototype.moonOrbit = function(pX1, pY1, pX2, pY2, scaleFactor){
    this.Ax = (((7 * (pX1 - this.x)) / (Math.sqrt(Math.pow((Math.pow(pX1 - this.x, 2) + Math.pow(pY1 - this.y, 2)), 3))))
                 + (((pX2 - this.x)) / (Math.sqrt(Math.pow((Math.pow(pX2 - this.x, 2) + Math.pow(pY2 - this.y, 2)), 3))))) * scaleFactor;

    this.Ay = (((7 * (pY1 - this.y)) / (Math.sqrt(Math.pow((Math.pow(pY1 - this.y, 2) + Math.pow(pX1 - this.x, 2)), 3))))
                 + (((pY2 - this.y)) / (Math.sqrt(Math.pow((Math.pow(pY2 - this.y, 2) + Math.pow(pX2 - this.x, 2)), 3))))) * scaleFactor;
};

PlanetClass.prototype.updateValues = function(speedValue, img){
    //update velocities...
    this.Vx = this.Vx + this.Ax * speedValue;
    this.Vy = this.Vy + this.Ay * speedValue;
    // update positions...
    this.x = this.x + this.Vx * speedValue;
    this.y = this.y + this.Vy * speedValue;
    // pass those values to the images
    document.getElementById("imgPlanet" + img).style.left = this.x;
    document.getElementById("imgPlanet" + img).style.top = this.y;
};

window.onload = function () {
    planetCount = 3;
    //redim is defining a particular number of objects (planets) to the array
    planets = [];
    //creates 3 new planet objects. They are an array of objects.
    for (var i = 0; i < planetCount; i++) {
        planet = new PlanetClass();
        planets.push(planet);
    }
    asteroidObj = new PlanetClass();
};

//this needs a reset for every time it is changed or the orbits destabilize
function scaleInput_onchange() {
    scaleInput.blur();
    description.innerHTML = "This is a figure of 8 three body simulation.";
    timerReset();
    setValuesFigure8();
}
//reset used, for example, if the planets collide and disappear off the screen
function resetBtn() {
    Gameoff();
    resetBtn.blur();
    timerReset();
}
function threeBodyStart() {
    Gameoff();
    document.getElementById("threeBodyStart").blur();
    description.innerHTML = "This is a figure of 8 three body simulation.";
    timerReset();
    setValuesFigure8();
}
function twoBodyStart() {
    Gameoff();
    document.getElementById("twoBodyStart").blur();
    description.innerHTML = "This is not to scale. The sun's mass has been reduced to simulate a large distance";
    timerReset();
    setValues2body();
}
function sunTwoPlanets() {
    Gameoff();
    document.getElementById("sunTwoPlanets").blur();
    description.innerHTML = "Two Planets orbiting a Sun in a \"chaotic\" but continuous manner.";
    timerReset();
    setValuesSunTwoPlanets();
}

function setValuesFigure8() {
    Gameoff();
    speedInput.value = 1;
    SF = parseInt(scaleInput.value);
    //initial velocity values passed as parameters to the class private variables
    //the parameters given to the objects define it's starting values
    planets[0].initValues(0.93240737 / 2, 0.86473146 / 2, planet1Src, 0, 0.97000436, -0.24308753, SF);
    planets[1].initValues(0.93240737 / 2, 0.86473146 / 2, planet2Src, 1, -0.97000436, 0.24308753, SF);
    planets[2].initValues(-0.93240737, -0.86473146, planet3Src, 2, 0, 0, SF);
    //starts off the main animation sequence
    orbitTimer = setInterval(Orbit1, 1);
}

function setValues2body() {
    Gameoff();
    speedInput.value = 0.2;
    planets[0].initValues(0, 0, sunSrc, 0, 0, 0, 400);
    planets[1].initValues(0, 1, planet1Src, 1, 1, 0, 400);
    planets[2].initValues(9.6, 0, planet3Src, 2, 1, -0.1, 400);
    orbitTimer = setInterval(Orbit2, 1);
}

//2 planets orbiting sun chaotically
function setValuesSunTwoPlanets() {
    Gameon = 0;
    parcannon.innerHTML = "";
    document.getElementById("station").style.visibility = "hidden";
    SF = parseInt(scaleInput.value);
    planetGrid.innerHTML = "";
    speedInput.value = 0.5;
    planets[0].initValues(0, 0, sunSrc, 0, 0, 0, SF);
    planets[1].initValues(0, 2, planet1Src, 1, 0.7, 0, SF);
    planets[2].initValues(0, -2, planet3Src, 2, -0.7, 0, SF);
    orbitTimer = setInterval(Orbit3, 1);
}
function setGame() {
    document.getElementById("speedInput").style.visibility = "hidden";
    document.getElementById("planetSize").style.visibility = "hidden";
    document.getElementById("scaleInput").style.visibility = "hidden";
    document.getElementById("station").src = "../images/3-body/station.png";
    score.value = 0;
    astMotion = 0;
    scaleInput.value = 400;
    SF = parseInt(scaleInput.value);
    planetSize.value = 50;
    document.getElementById("asteroid").style.width = 20;
    document.getElementById("asteroid").style.height = 20;
    planetGrid.innerHTML = "";
    speedInput.value = 0.5;
    planets[0].initValues(0.93240737/2, 0.86473146/2, planet1Src, 0, 0.97000436, -0.24308753, SF);
    planets[1].initValues(0.93240737/2, 0.86473146/2, planet2Src, 1, -0.97000436, 0.24308753, SF);
    planets[2].initValues(-0.93240737, -0.86473146, planet3Src, 2, 0, 0, SF);
    orbitTimer = setInterval(Orbit4, 1);
}

function Orbit1() { //the main figure 8 simulation for the assignment
    SF = parseInt(scaleInput.value);
    speed = parseFloat(speedInput.value);
    pSize = parseFloat(planetSize.value);
    //input old positions
    for (var i = 0; i < planetCount; i++) {
        planets[i].xyPosOld(i);
    }
    //calculate distances and determine acceleration
    planets[0].calculateAcceleration(planets[1].x, planets[1].y, planets[2].x, planets[2].y, 1, SF);
    planets[1].calculateAcceleration(planets[0].x, planets[0].y, planets[2].x, planets[2].y, 1, SF);
    planets[2].calculateAcceleration(planets[0].x, planets[0].y, planets[1].x, planets[1].y, 1, SF);
    for (var i = 0; i < planetCount; i++) {
        planets[i].updateValues(speed, i);
        //planet size adjustments
        document.getElementById("imgPlanet" + i).style.width = pSize + "px";
        document.getElementById("imgPlanet" + i).style.height = pSize + "px";
    }
}
//animation for sun planet and moon
function Orbit2() {
    speed = parseFloat(speedInput.value);
    pSize = parseFloat(planetSize.value);
    document.getElementById("imgPlanet0").style.width = "100px";
    document.getElementById("imgPlanet0").style.height = "100px";
    //input old positions
    for (var i = 0; i < planetCount; i++) {
        planets[i].xyPosOld(i);
    }
    planets[1].twoPlanetAccel(planets[0].x, planets[0].y, 400);
    planets[2].moonOrbit(planets[1].x, planets[1].y, planets[0].x, planets[0].y, 400);
    planets[1].updateValues(speed, 1);
    planets[2].updateValues(speed, 2);
    document.getElementById("imgPlanet1").style.width = "30px";
    document.getElementById("imgPlanet1").style.height = "30px";
    document.getElementById("imgPlanet2").style.width = "10px";
    document.getElementById("imgPlanet2").style.height = "10px";
}

function Orbit3() { //Animation for sun and 2 planets
    SF = parseInt(scaleInput.value);
    speed = parseFloat(speedInput.value);
    document.getElementById("imgPlanet0").style.width = "80px";
    document.getElementById("imgPlanet0").style.height = "80px";
    for (var i = 0; i < planetCount; i++) {
        planets[i].xyPosOld(i);
    }
    planets[1].calculateAcceleration(planets[0].x, planets[0].y, planets[2].x, planets[2].y, 2, SF);
    planets[2].calculateAcceleration(planets[0].x, planets[0].y, planets[1].x, planets[1].y, 2, SF);
    for (var i = 1; i < planetCount; i++) {
        planets[i].updateValues(speed, i);
    }
}

function Orbit4() { //This is the simulation for the game
    SF = parseInt(scaleInput.value);
    speed = 0.05;
    pSize = 100;
    //input old positions
    for (var i = 0; i < planetCount; i++) {
        planets[i].xyPosOld(i);
    }
    if (astMotion = 1) {
        asteroidObj.astPosOld();
    }
    //calculate distances and determine acceleration
    planets[0].calculateAcceleration(planets[1].x, planets[1].y, planets[2].x, planets[2].y, 1, SF);
    planets[1].calculateAcceleration(planets[0].x, planets[0].y, planets[2].x, planets[2].y, 1, SF);
    planets[2].calculateAcceleration(planets[0].x, planets[0].y, planets[1].x, planets[1].y, 1, SF);
    if (astMotion = 1) {
        asteroidObj.astAccel(planets[0].x, planets[0].y, planets[1].x, planets[1].y, planets[2].x, planets[2].y, SF);
        asteroidObj.updateAst(1);
    }
    for (var i = 0; i < planetCount; i++) {
        planets[i].updateValues(speed, i);
        document.getElementById("imgPlanet" + i).style.width = pSize + "px";
        document.getElementById("imgPlanet" + i).style.height = pSize + "px";
    }
}

function timerReset() {
    window.clearInterval(orbitTimer);
}
// ===========================================================================================================
//Game!
// ==========================================================================================================

var angle, Gameon, m, s, canang,  asteroidTimer, yAdjust, velocity, hitstat //, AxAst, AyAst, xy, astX, astY, astVX, astVY
function GameBtn_onclick() {
    hitstat = 0;
    document.getElementById("Gamebtn").blur();
    timerReset();
    document.getElementById("parscore").innerText = "Score:";
    document.getElementById("score").style.visibility = "visible";
    setGame();
    yAdjust = 0;
    document.getElementById("parcannon").innerHTML = "";
    document.getElementById("description").innerHTML = "Hit the station 5 times to destroy it!";
    document.getElementById("station").style.visibility = "visible";
    document.getElementById("station").style.top = document.body.clientHeight / 2;
    document.getElementById("station").style.left = document.body.clientWidth - 100;
    canang = 6.28 / 360;
    angle = 90;
    velocity = 1;
    Gameon = 1;
    s = "";
    for (var m = 1; m <= 10; m++) {
        s = s + " <img id='cannonbarrel" + m + "' src='../images/3-body/dotred.gif' style='position:absolute'/>";
    }
    document.getElementById("parcannon").innerHTML = s;
    for (var m = 1; m <= 10; m++) {
        cannon("cannonbarrel" + m, 5*m);
    }
}

document.body.onkeydown = function (e) {
    if (Gameon = 1) {
        switch (e.keyCode) {
            case 37:
                angle = angle - 1;
                yAdjust = yAdjust - 0.02;
                break;
            case 39:
                angle = angle + 1;
                yAdjust = yAdjust + 0.02;
                break;
            case 38:
                velocity = velocity + 0.01;
                break;
            case 40:
                velocity = velocity - 0.01;
                break;
            case 32:
                hitstat = 0;
                astMotion = 1;
                window.clearInterval(asteroidTimer);
                asteroidObj.astInit(velocity, yAdjust, SF);
                document.getElementById("asteroid").style.left = document.getElementById("cannonbarrel10").style.left;
                document.getElementById("asteroid").style.top = document.getElementById("cannonbarrel10").style.top;
                document.getElementById("asteroid").style.visibility = "visible";
                //xy = (angle / 90) * 100
                //astX = ((velocity / 10000) * xy)
                //astY = ((velocity / 10000) * (100 - xy))
                asteroidTimer = setInterval(AsteroidGame, 2);
                break;
            default:
        }
        for (var m = 1; m <= 10; m++) {
            if (angle > 180) {
                angle = 180;
            }
            if (angle < 0) {
                angle = 0;
            }
            cannon("cannonbarrel" + m, 5 * m);
        }
        //if velocity > 100 then
        //    velocity = 100
        //end if
        //if velocity < 0 then
        //    velocity = 0
        //end if
    }
};

function cannon(obj0, a) {
    document.getElementById(obj0).style.left = Math.sin(canang * angle) * a;
    document.getElementById(obj0).style.top = (document.body.clientheight / 2) - Math.cos(canang * angle) * a;
}

function AsteroidGame() {
    collide();
    if (document.getElementById("asteroid").style.left > document.body.clientwidth) {
        window.clearInterval(asteroidTimer);
        document.getElementById("asteroid").style.left = document.getElementById("cannonbarrel10").style.left;
        document.getElementById("asteroid").style.top = document.getElementById("cannonbarrel10").style.top;
        document.getElementById("asteroid").style.visibility = "hidden";
    }
}

function collide() {
    //collision detection with planets
    if (document.getElementById("asteroid").style.left > document.getElementById("imgPlanet0").style.left - 25
        && document.getElementById("asteroid").style.left < (document.getElementById("imgPlanet0").style.left + document.getElementById("imgPlanet0").width)
        && document.getElementById("asteroid").style.top < (document.getElementById("imgPlanet0").style.top + document.getElementById("imgPlanet0").height)
        && document.getElementById("asteroid").style.top > (document.getElementById("imgPlanet0").style.top - 25)) {
        explode();
    } else if (document.getElementById("asteroid").style.left > document.getElementById("imgPlanet1").style.left - 25
        && document.getElementById("asteroid").style.left < (document.getElementById("imgPlanet1").style.left + document.getElementById("imgPlanet0").width)
        && document.getElementById("asteroid").style.top < (document.getElementById("imgPlanet1").style.top + document.getElementById("imgPlanet0").height)
        && document.getElementById("asteroid").style.top > (document.getElementById("imgPlanet1").style.top - 25)) {
        explode();
    } else if (document.getElementById("asteroid").style.left > document.getElementById("imgPlanet2").style.left - 25
        && document.getElementById("asteroid").style.left < (document.getElementById("imgPlanet2").style.left + document.getElementById("imgPlanet0").width)
        && document.getElementById("asteroid").style.top < (document.getElementById("imgPlanet2").style.top + document.getElementById("imgPlanet0").height)
        && document.getElementById("asteroid").style.top > (document.getElementById("imgPlanet2").style.top - 25)) {
        explode();
    } else if (document.getElementById("asteroid").style.left > document.getElementById("station").style.left
        && document.getElementById("asteroid").style.left < (document.getElementById("station").style.left + document.getElementById("station").width)
        && document.getElementById("asteroid").style.top < (document.getElementById("station").style.top + document.getElementById("station").height)
        && document.getElementById("asteroid").style.top > document.getElementById("station").style.top) {
        explode();
    }

    if (hitstat = 0) {
        score.value = score.value + 1;
    }

    if (score.value = 5) {
        document.getElementById("station").src = "../images/3-body/explosion.gif";
        setGame();
    }
    hitstat = 1;
}

function explode() {
    document.getElementById("asteroid").style.width = "50px";
    document.getElementById("asteroid").style.height = "50px";
    document.getElementById("asteroid").src = "../images/3-body/explosion.gif";
    setTimeout ("collideEnd()", 500);
}

function collideEnd() {
    window.clearInterval(asteroidTimer);
    document.getElementById("asteroid").src = "../images/3-body/Asteroid.png";
    document.getElementById("asteroid").style.width = "20px";
    document.getElementById("asteroid").style.height = "20px";
    document.getElementById("asteroid").style.left = parseFloat(document.getElementById("cannonbarrel10").style.left);
    document.getElementById("asteroid").style.top = parseFloat(document.getElementById("cannonbarrel10").style.top);
    document.getElementById("asteroid").style.visibility = "hidden";
}

function Gameoff() {
    window.clearInterval(asteroidTimer);
    document.getElementById("asteroid").style.visibility = "hidden";
    document.getElementById("parscore").innerText = "";
    document.getElementById("score").style.visibility = "hidden";
    Gameon = 0;
    document.getElementById("parcannon").innerHTML = "";
    document.getElementById("station").style.visibility = "hidden";
    document.getElementById("planetGrid").innerHTML = "";
    document.getElementById("speedInput").style.visibility = "visible";
    document.getElementById("planetSize").style.visibility = "visible";
    document.getElementById("scaleInput").style.visibility = "visible"
}