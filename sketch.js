var icon;
var iconSprite;
var startButton;
var buttonSprite;
var inflation;
var infSprite;
var tornado;
var torSprite;
var flooding;
var flooSprite;
var earthquake;
var earthSprite;
var disease;
var disSprite;
var war;
var warSprite;
var bomb;
var bombSprite;

var inflationAnimation;
var tornadoAnimation;
var floodingAnimation;
var jobsAnimation;
var diseaseAnimation;
var warAnimation;
var bombAnimation;

var fifteen;
var fifteenSprite;
var thirty;
var thirtySprite;
var fifty;
var fiftySprite;
var seventy;
var seventySprite;
var ninety;
var ninetySprite;
var hten;
var htenSprite;
var hforty;
var hfortySprite;

var points;
var pointsSprite;
var all
var allSprite;
var coins;
var coinsSprite;

var populat;
var populatSprite;
var balance;
var balanceSprite;
var keep;
var keepSprite;
var wise;
var wiseSprite;
var arrow;
var arrowSprite;
var events;
var eventsSprite;
var triangle;
var triangleSprite;

var baseScore;
var score;
var scoreText = "";

var basePoint;
var point;
var pointText = "";

var group;
var eventSprites;

var selectedCountry;
var countries = [];
var portugal;
var spain;
var france;
var italy;
var switzerland;
var belgium;
var germany;
var netherlands;
var poland;
var czech;
var austria;
var belarus;
var slovakia;
var hungary;
var ukraine;
var romania;
var russia;
var finland;

var restart;
var restartSprite;

var info = "";
var gameOver = "";
var explanation = "";

var stime;
var time;
var minute2 = 0;
var mtime;

var isGameStarted = false;
var isGameOver = false;

var countryIndices = [
["Albania",3.02,0],
["Almenia",3.02,0],
["Austria",8.50,0.04],
["Belarus",9.48,0],
["Belgium",11.2,0.05],
["Bosnia and Herzegovina",3.87,0],
["Bulgaria",7.36,0],
["Croatia",4.28,0],
["Cyprus",1.12,0],
["Czech Republic",10.51,0.02],
["Denmark",5.66,0.03],
["Estonia",1.32,0],
["Russia",110.00,0.19],
["Finland",5.47,0.03],
["France",66.03,0.28],
["Germany",80.71,0.38],
["Greece",10.82,0.02],
["Hungary",9.88,0.01],
["Iceland",0.33,0],
["Ireland",4.61,0.02],
["Italy",60.78,0.21],
["Latvia",1.99,0],
["Lithuania",2.94,0],
["Luxembourg",0.55,0],
["Macedonia",2.06,0],
["Moldova",3.56,0],
["Netherlands",16.86,0.09],
["Norway",5.14,0.05],
["Poland",38.48,0.05],
["Portugal",10.43,0.02],
["Romania",19.94,0.02],
["Serbia",7.21,0],
["Slovakia",5.42,0.01],
["Slovenia",2.06,0],
["Spain",46.70,0.14],
["Sweden",9.72,0.06],
["Switzerland",8.18,0.07],
["Turkey",76.67,0.08],
["Ukraine",44.29,0.01],
["United Kingdom",64.10,0.29]
]

function preload()  {
   startButton = loadImage("assets/button.png");
   icon = loadImage("assets/sketch.png");
   inflation = loadImage("assets/inflation.png")
   tornado = loadImage("assets/tornado.png")
   flooding = loadImage("assets/flooding.png");
   earthquake = loadImage("assets/earthquake.png");
   disease = loadImage("assets/disease.png");
   war = loadImage("assets/war.png");
   bomb = loadImage("assets/bomb.png");
   fifteen = loadImage("assets/15.png");
   thirty = loadImage("assets/30.png");
   fifty = loadImage("assets/50.png");
   seventy = loadImage("assets/70.png");
   ninety = loadImage("assets/90.png");
   hten = loadImage("assets/110.png");
   hforty = loadImage("assets/140.png");
   points = loadImage("assets/points.png");
   all = loadImage("assets/all.png");
   coins = loadImage("assets/coins.png");
   populat = loadImage("assets/populat.png");
   balance = loadImage("assets/balance.png")
   keep = loadImage("assets/keep.png");
   wise = loadImage("assets/wise.png");
   arrow = loadImage("assets/arrow.png");
   events = loadImage("assets/events.png");
   restart = loadImage("assets/restart.png");
   triangle = loadImage("assets/triangle.png")

   inflationAnimation = loadAnimation("assets/inflation0001.png", "assets/inflation0032.png");
   tornadoAnimation = loadAnimation("assets/tornado0001.png", "assets/tornado0004.png");
   floodingAnimation = loadAnimation("assets/flooding0001.png", "assets/flooding0002.png");
   jobsAnimation = loadAnimation("assets/jobs0001.png", "assets/jobs0004.png");
   diseaseAnimation = loadAnimation("assets/disease0001.png", "assets/disease0007.png");
   bombAnimation = loadAnimation("assets/bomb0001.png", "assets/bomb0004.png");
   warAnimation = loadAnimation("assets/war0001.png", "assets/war0005.png");
}


function setup() {
  createCanvas(1280,728);

  group = new Group();
  eventSprites = new Group();


  portugal = new Country("portugal", 396, 474);
  spain = new Country("spain", 438, 466);
  france = new Country("france", 470,415);
  italy = new Country("italy",535,450);
  switzerland = new Country("switzerland",515,400);
  belgium = new Country("belgium", 490,380);
  germany = new Country("germany", 540,368);
  netherlands = new Country("netherlands",510,360);
  poland = new Country("poland",585,355);
  czech = new Country("czech republic",572,378);
  austria = new Country("austria",555,400);
  belarus = new Country("belarus",632,340);
  slovakia = new Country("slovakia", 598,390);
  hungary = new Country("hungary",596,406);
  ukraine = new Country("ukraine",668,375);
  romania = new Country("romania",634,414);
  russia = new Country("russia",667,266);
  finland = new Country("finland",586,210);

  countries = [portugal, spain, france, italy, switzerland, belgium, germany, netherlands, poland, czech, austria, belarus, slovakia, hungary, ukraine, romania, russia,finland];
  for (var i = 0; i < countries.length; i++)  {
    var nation = countries[i];
    for (var j = i + 1; j < countries.length; j++)  {
      var otherNation = countries[j];
      if (dist(nation.x, nation.y, otherNation.x, otherNation.y) < 75)  {
        nation.countriesAround.push(otherNation);
        otherNation.countriesAround.push(nation);
        nation.attractions.push(Math.max(0, otherNation.attraction - nation.attraction));
        otherNation.attractions.push(Math.max(0, nation.attraction - otherNation.attraction));
      }
    }
  }
  russia.countriesAround.push(ukraine);
  ukraine.countriesAround.push(russia);
  russia.attractions.push(Math.max(0, ukraine.attraction - russia.attraction));
  ukraine.attractions.push(Math.max(0, russia.attraction - ukraine.attraction));
  russia.countriesAround.push(belarus);
  belarus.countriesAround.push(russia);
  russia.attractions.push(Math.max(0, belarus.attraction - russia.attraction));
  belarus.attractions.push(Math.max(0, russia.attraction - belarus.attraction));
  russia.countriesAround.push(finland);
  finland.countriesAround.push(russia);
  russia.attractions.push(Math.max(0, finland.attraction - russia.attraction));
  finland.attractions.push(Math.max(0, russia.attraction - finland.attraction));
  finland.countriesAround.push(poland);
  poland.countriesAround.push(finland);
  finland.attractions.push(Math.max(0, poland.attraction - finland.attraction));
  poland.attractions.push(Math.max(0, finland.attraction - poland.attraction));
  belarus.countriesAround.push(finland);
  finland.countriesAround.push(belarus);
  belarus.attractions.push(Math.max(0, finland.attraction - belarus.attraction));
  finland.attractions.push(Math.max(0, belarus.attraction - finland.attraction));

  iconSprite = createSprite(640,70);
  iconSprite.addImage(icon);
  buttonSprite = createSprite(640,334);
  buttonSprite.addImage(startButton);
  pointsSprite = createSprite(960,570);
  pointsSprite.addImage(points);
  allSprite = createSprite(960,570);
  allSprite.addImage(all);
  coinsSprite = createSprite(1048,76);
  coinsSprite.addImage(coins);
  populatSprite = createSprite(495,295);
  populatSprite.addImage(populat);
  balanceSprite = createSprite(1000,385);
  balanceSprite.addImage(balance);
  keepSprite = createSprite(750,600);
  keepSprite.addImage(keep);
  wiseSprite = createSprite(300,500);
  wiseSprite.addImage(wise);
  arrowSprite = createSprite(950,600);
  arrowSprite.addImage(arrow);
  eventsSprite = createSprite(245,350);
  eventsSprite.addImage(events);
  triangleSprite = createSprite (800,200);
  triangleSprite.addImage(triangle);

  fifteenSprite = createSprite(695,620);
  fifteenSprite.addImage(fifteen);
  thirtySprite = createSprite(790,620);
  thirtySprite.addImage(thirty);
  fiftySprite = createSprite(885,620);
  fiftySprite.addImage(fifty);
  seventySprite = createSprite(980,620);
  seventySprite.addImage(seventy);
  ninetySprite = createSprite(1065,620);
  ninetySprite.addImage(ninety);
  htenSprite = createSprite(1155, 620);
  htenSprite.addImage(hten);
  hfortySprite = createSprite(1240, 620);
  hfortySprite.addImage(hforty);


  infSprite = createSprite(689,680);
  infSprite.addImage(inflation);
  eventSprites.add(infSprite);

  torSprite = createSprite(780,680);
  torSprite.addImage(tornado);
  eventSprites.add(torSprite);

  flooSprite = createSprite (871,680);
  flooSprite.addImage(flooding);
  eventSprites.add(flooSprite);

  earthSprite = createSprite(962,680)
  earthSprite.addImage(earthquake);
  eventSprites.add(earthSprite);

  disSprite = createSprite (1053,680);
  disSprite.addImage(disease);
  eventSprites.add(disSprite);

  warSprite = createSprite(1144,680);
  warSprite.addImage(war);
  eventSprites.add(warSprite);

  bombSprite = createSprite(1235,680);
  bombSprite.addImage(bomb);
  eventSprites.add(bombSprite);

  buttonSprite.mouseActive = true;
  drawSprite(buttonSprite);
  group.add(buttonSprite);

  restartSprite = createSprite(640,334);
  restartSprite.addImage(restart);

  textAlign(CENTER);
  textFont("Helvetica");
  textSize(28);

 
  infSprite.setCollider("circle", 0,0,45);
  torSprite.setCollider("circle", 0,0,45);
  earthSprite.setCollider("circle", 0,0,45);
  disSprite.setCollider("circle", 0,0,45);
  flooSprite.setCollider("circle", 0,0,45);
  warSprite.setCollider("circle", 0,0,45);
  bombSprite.setCollider("circle",0,0,45);

  stime = second();
  time = second();

  baseScore = 800;
  score = baseScore;
  basePoint = 1;
  point = basePoint;
}

function draw() {

  background(245,222,179);

  mtime = millis();

  drawSprite(iconSprite);
  drawSprite(buttonSprite);
  drawSprite(populatSprite);
  drawSprite(balanceSprite);
  drawSprite(keepSprite);
  drawSprite(wiseSprite)
  drawSprite(arrowSprite);
  drawSprite(eventsSprite);
  drawSprite(triangleSprite);

  if (isGameOver) {
    textAlign(CENTER);
    gameOver = "Unfortunately you lost!\n\nYOUR SCORE IS: " + point;
    group.clear();
    eventSprites.clear();
    info = "";
    scoreText = "";
    drawSprite(restartSprite);
    if (mouseIsPressed) {
      if (restartSprite.overlapPoint(mouseX, mouseY)) {
        isGameOver = false;
        setup();
      }
    }
    text(gameOver, width/2, height/2 + 40);
  }

  if (!group.contains(buttonSprite) && group.contains(portugal.sprite))  {
    if (!isGameStarted)  {
      stime = second();
      isGameStarted = true;
    }
    for (var i = 0; i < countries.length; i++)  {
      if (countries[i].destruction > 0)  {
        countries[i].destruction -= (0.01 / 60);
      }
    }
    if (time > second())  {
      baseScore += 60;
      basePoint += 60;
    }
    time = second();

    for (var i = 0; i < countries.length; i++)  {
      if (countries[i].pop < 0 || countries[i].pop > countries[i].startPop * 2.5) {
        isGameOver = true;
      }
      countries[i].setPop(countries[i].pop * (1 - countries[i].pop / countries[i].maxPop) * 0.0002 + countries[i].pop);
    }

    if (typeof(selectedCountry) != "undefined")  {
      info = selectedCountry.displayText;
    }

    group.draw();
    eventSprites.draw();
    stroke(255, 165, 0);
    strokeWeight(3);
    line(width / 2 + 1,600,width / 2 + 1,height);
    line(0,600,width,600);
    strokeWeight(0);
    textSize(48);
    drawSprite(fifteenSprite);
    drawSprite(thirtySprite);
    drawSprite(fiftySprite);
    drawSprite(seventySprite);
    drawSprite(ninetySprite);
    drawSprite(htenSprite);
    drawSprite(hfortySprite);
    drawSprite(coinsSprite);


    if (score < 15){
      drawSprite(pointsSprite);
    }

    if (score > 140){
      drawSprite(allSprite);
    }
      
    
    pointText = "SCORE: " + point;

    point = basePoint + time - stime;

    scoreText = score;

    score = baseScore + time - stime;

    fill(0);
    textSize(48);
    textAlign(CENTER);
    fill(255,165,0);
    text(scoreText, 1150, 85);
    fill(0);
    text(pointText, 200,85);
    textAlign(LEFT);
    textSize(20);
    if (score < 15 || score > 140)  {
      text(explanation, width / 2 + 5, 520);
    } else  {
      text(explanation, width / 2 + 5, 580);
    }
    textSize(28);
    fill(255, 0, 0);
    text(info, 100, 660);
    fill(0);

    portugal.listen();
    spain.listen();
    france.listen();
    italy.listen();
    switzerland.listen();
    belgium.listen();
    germany.listen();
    netherlands.listen();
    poland.listen();
    czech.listen();
    austria.listen();
    belarus.listen();
    slovakia.listen();
    hungary.listen();
    ukraine.listen();
    romania.listen();
    russia.listen();
    finland.listen();

    for (var i = 0; i < countries.length; i++)  {
      drawSprite(countries[i].animationSprite);
    }
  }

  if (infSprite.overlapPoint(mouseX, mouseY))  {
    explanation = "ECONOMIC DESTRUCTION WILL MAKE PEOPLE WANT TO FLEE";
  } else if (torSprite.overlapPoint(mouseX, mouseY))  {
    explanation = "NATURAL DISASTERS WILL KILL A LOT OF PEOPLE";
  } else if (flooSprite.overlapPoint(mouseX, mouseY))  {
    explanation = "NATURAL DISASTERS WILL KILL A LOT OF PEOPLE";
  } else if (earthSprite.overlapPoint(mouseX, mouseY))  {
    explanation = "JOBS WILL BE PROVIDED IN THE SELECTED COUNTRY";
  } else if (disSprite.overlapPoint(mouseX, mouseY))  {
    explanation = "DISEASE WILL KILL PEOPLE AND MAKE THEM LEAVE";
  } else if (warSprite.overlapPoint(mouseX, mouseY))  {
    explanation = "WAR WILL KILL PEOPLE AND DESTROY THE ECONOMY";
  } else if (bombSprite.overlapPoint(mouseX, mouseY)) {
    explanation = "ATOMIC BOMB WILL DEMOLISH THE POPULATION AND ECONOMY";
  } else  {
    explanation = "";
  }
}



function mousePressed() {
  if (buttonSprite.overlapPoint(mouseX, mouseY))  {
    buttonSprite.remove();
    iconSprite.remove();
    populatSprite.remove();
    balanceSprite.remove();
    keepSprite.remove();
    wiseSprite.remove();
    arrowSprite.remove();
    eventsSprite.remove();
    triangleSprite.remove();

    group.add(portugal.sprite);
    group.add(spain.sprite);
    group.add(france.sprite);
    group.add(italy.sprite);
    group.add(switzerland.sprite);
    group.add(belgium.sprite);
    group.add(germany.sprite);
    group.add(netherlands.sprite);
    group.add(poland.sprite);
    group.add(czech.sprite);
    group.add(austria.sprite);
    group.add(belarus.sprite);
    group.add(slovakia.sprite);
    group.add(hungary.sprite);
    group.add(ukraine.sprite);
    group.add(romania.sprite);
    group.add(russia.sprite);
    group.add(finland.sprite);
  }

  if (portugal.sprite.overlapPoint(mouseX, mouseY)) {
    info = portugal.displayText;
    selectedCountry = portugal;
  } else if (spain.sprite.overlapPoint(mouseX, mouseY)) {
    info = spain.displayText;
    selectedCountry = spain;
  } else if (france.sprite.overlapPoint(mouseX,mouseY)) {
    info = france.displayText;
    selectedCountry = france;
  } else if (italy.sprite.overlapPoint(mouseX, mouseY)){
    info = italy.displayText;
    selectedCountry = italy;
  } else if (switzerland.sprite.overlapPoint(mouseX, mouseY)){
    info = switzerland.displayText;
    selectedCountry = switzerland;
  } else if (belgium.sprite.overlapPoint(mouseX, mouseY)){
    info = belgium.displayText;
    selectedCountry = belgium;
  } else if (germany.sprite.overlapPoint(mouseX, mouseY)){
    info = germany.displayText;
    selectedCountry = germany;
  } else if (netherlands.sprite.overlapPoint(mouseX, mouseY)){
    info = netherlands.displayText;
    selectedCountry = netherlands;  
  } else if (czech.sprite.overlapPoint(mouseX, mouseY)){
    info = czech.displayText;
    selectedCountry = czech;   
  } else if (poland.sprite.overlapPoint(mouseX, mouseY)){
    info = poland.displayText;
    selectedCountry = poland;
  } else if (austria.sprite.overlapPoint(mouseX, mouseY)){
    info = austria.displayText;
    selectedCountry = austria;
  } else if (belarus.sprite.overlapPoint(mouseX, mouseY)){
    info = belarus.displayText;
    selectedCountry = belarus;  
  } else if (slovakia.sprite.overlapPoint(mouseX, mouseY)){
    info = slovakia.displayText;  
    selectedCountry = slovakia;
  } else if (hungary.sprite.overlapPoint(mouseX, mouseY)){
    info = hungary.displayText;  
    selectedCountry = hungary;  
  } else if (ukraine.sprite.overlapPoint(mouseX, mouseY)){
    info = ukraine.displayText;  
    selectedCountry = ukraine;  
  } else if (romania.sprite.overlapPoint(mouseX, mouseY)){
    info = romania.displayText;  
    selectedCountry = romania; 
  } else if (russia.sprite.overlapPoint(mouseX, mouseY)){
    info = russia.displayText;  
    selectedCountry = russia; 
  } else if (finland.sprite.overlapPoint(mouseX, mouseY)){
    info = finland.displayText;  
    selectedCountry = finland;   
  } else if (infSprite.overlapPoint(mouseX, mouseY)){
    selectedCountry.inflation();
    info = selectedCountry.displayText;

    if (score >= 15)  {
      selectedCountry.animationSprite.changeAnimation("inflation");
      selectedCountry.animationSprite.scale = 0.18;
      selectedCountry.animationSprite.visible = true;
      selectedCountry.animationSprite.animation.play();

      selectedCountry.startMillis = millis();
    }

  } else if (torSprite.overlapPoint(mouseX, mouseY))  {
    selectedCountry.tornado();
    info = selectedCountry.displayText;

    if (score >= 30)  {
      selectedCountry.animationSprite.changeAnimation("tornado");
      selectedCountry.animationSprite.scale = 0.3;
      selectedCountry.animationSprite.visible = true;
      selectedCountry.animationSprite.animation.play();

      selectedCountry.startMillis = millis();
    }

  } else if (flooSprite.overlapPoint(mouseX, mouseY))  {
    selectedCountry.flooding();
    info = selectedCountry.displayText;

    if (score >= 50)  {
      selectedCountry.animationSprite.changeAnimation("flooding");
      selectedCountry.animationSprite.scale = 0.6;
      selectedCountry.animationSprite.visible = true;
      selectedCountry.animationSprite.animation.play();

      selectedCountry.startMillis = millis();
    }

  } else if (earthSprite.overlapPoint(mouseX, mouseY))  {
    selectedCountry.earthquake();
    info = selectedCountry.displayText;

    if (score >= 70)  {
      selectedCountry.animationSprite.changeAnimation("jobs");
      selectedCountry.animationSprite.scale = 0.25;
      selectedCountry.animationSprite.visible = true;
      selectedCountry.animationSprite.animation.play();

      selectedCountry.startMillis = millis();
    }

  } else if (disSprite.overlapPoint(mouseX, mouseY))  {
    selectedCountry.disease();
    info = selectedCountry.displayText;

    if (score >= 90)  {
      selectedCountry.animationSprite.changeAnimation("disease");
      selectedCountry.animationSprite.scale = 0.35;
      selectedCountry.animationSprite.visible = true;
      selectedCountry.animationSprite.animation.play();

      selectedCountry.startMillis = millis();
    }

  } else if (warSprite.overlapPoint(mouseX, mouseY))  {
    selectedCountry.war();
    info = selectedCountry.displayText;

    if (score >= 110) {
      selectedCountry.animationSprite.changeAnimation("war");
      selectedCountry.animationSprite.scale = 0.18;
      selectedCountry.animationSprite.visible = true;
      selectedCountry.animationSprite.animation.play();

      selectedCountry.startMillis = millis();
    }

  } else if (bombSprite.overlapPoint(mouseX, mouseY))  {
    selectedCountry.bomb();
    info = selectedCountry.displayText;

    if (score >= 140) {
      selectedCountry.animationSprite.changeAnimation("bomb");
      selectedCountry.animationSprite.scale = 0.17;
      selectedCountry.animationSprite.visible = true;
      selectedCountry.animationSprite.animation.play();

      selectedCountry.startMillis = millis();
    }

  } else {
    selectedCountry = undefined;
    if (!group.contains(buttonSprite))  {
      info = "NO COUNTRY SELECTED";
    } else  {
      info = "";
    }
  }
}
 


var Country = function(name, x, y) {
  this.x = x;
  this.y = y;
  this.n = name;
  this.countriesAround = [];
  this.attractions = [];

  this.flock = new Flock();

  this.imgStr = "assets/" + name + ".png";
  this.imgStr2 = "assets/" + name + "2.png";
  this.imgStr3 = "assets/" + name + "3.png";
  this.imgLabel = "grey";
  this.sprite = createSprite(x, y);
  this.sprite.addImage("grey", loadImage(this.imgStr));
  this.sprite.addImage("red", loadImage(this.imgStr2));
  this.sprite.addImage("yellow", loadImage(this.imgStr3));
  this.sprite.addAnimation("blink", loadAnimation(this.imgStr2, this.imgStr3));

  this.animationSprite = createSprite(x, y);
  this.animationSprite.addAnimation("inflation", inflationAnimation);
  this.animationSprite.addAnimation("tornado", tornadoAnimation);
  this.animationSprite.addAnimation("flooding", floodingAnimation);
  this.animationSprite.addAnimation("jobs", jobsAnimation);
  this.animationSprite.addAnimation("disease", diseaseAnimation);
  this.animationSprite.addAnimation("bomb", bombAnimation);
  this.animationSprite.addAnimation("war", warAnimation);
  this.animationSprite.visible = false;

  this.startMillis;

  this.index = 0;
  for (var i = 0; i < countryIndices.length; i++)  {
    if (this.n.toUpperCase() === countryIndices[i][0].toUpperCase()) {
      this.index = i;
    }
  }
  this.startPop = countryIndices[this.index][1];
  this.maxPop = this.startPop * 3.2;
  this.pop = this.startPop;
  this.displayText = this.n.toUpperCase() + "\nPopulation: " + this.pop.toFixed(2) + "   Attraction: " + Math.round(this.attraction * 10000) / 100;
  this.updateInfo = function()  {
    this.displayText = this.n.toUpperCase() + "\nPopulation: " + this.pop.toFixed(2) + "   Attraction: " + Math.round(this.attraction * 10000) / 100;
  }

  this.gdp = countryIndices[this.index][2];
  this.attraction = this.gdp;
  this.destruction = 0;

  this.updateAttraction = function()  {
    if (this.pop > this.startPop) {
      this.attraction = Math.max(0, this.gdp + 0.4 - (this.pop - this.startPop) / this.pop * 0.8 - this.destruction);
    } else  {
      this.attraction = Math.max(0, this.gdp + 0.4 + (this.startPop - this.pop) / this.startPop * 0.8 - this.destruction);
    }
  }

  this.updateAttractions = function() {
    for (var i = 0; i < this.attractions.length; i++)  {
      this.attractions[i] = Math.max(0, this.countriesAround[i].attraction - this.attraction)
    }
  }

  this.setPop = function(num) {
    this.pop = num;
    this.updateInfo();
  }

  this.die = function(base, pct)  {
    this.pop = (this.pop - base) * (1 - pct);
    this.updateInfo();
  }

  this.gain = function(base, pct) {
    this.pop = (this.pop + base) * (1 + pct);
    this.updateInfo();
  }

  this.display = function() {
    drawSprite(this.sprite);
  }

  this.mouseOver = function() {
    if (this.sprite.overlapPoint(mouseX, mouseY))  {
      this.sprite.changeImage("red");
    } else {
      this.sprite.changeImage("grey");
    }
  }

  this.timing = function()  {
    if (mtime - this.startMillis > 4000)  {
      this.animationSprite.visible = false;
    }
  }

  this.blink = function()  {
    if (this.pop > this.startPop * 1.8 || this.pop < this.startPop * 0.3)  {
      this.sprite.changeAnimation("blink");
    }
  }

  this.updateBoids = function() {
    for (var i = 0; i < this.flock.boids.length; i++) {
      var boid = this.flock.boids[i];
      var goal = createVector(boid.destination.x, boid.destination.y)
      boid.applyForce(boid.seek(goal));
      if (dist(boid.position.x, boid.position.y, goal.x, goal.y) < 5) {
        this.flock.removeBoid(boid);
      }
    }
  }

  this.move = function(country, num) {
    var boid = new Boid(this.x, this.y, country);
    this.flock.addBoid(boid);

    this.die(num, 0);
    country.gain(num, 0);
  }

  this.emigrate = function()  {

    for (var i = 0; i < this.attractions.length; i++) {
      if (this.attractions[i] > 0.25)  {
        this.move(this.countriesAround[i],0.008);
      }
      this.updateBoids();
      this.flock.run();
    }

    this.updateAttractions();
    this.updateAttraction();
  }

  this.listen = function()  {
    this.emigrate();
    this.mouseOver();
    this.blink();
    this.timing();
  }

  this.inflation = function() {
    if (score >= 15) {
      this.die(0, 0.01);
      this.updateInfo();
      baseScore -= 15;

      this.destruction += 0.25;
    }
  }

  this.tornado = function() {
    if (score >= 30){
      this.die(0.5, random(0.08, 0.15));
      this.updateInfo();
      baseScore -= 30;

      this.destruction += 0.1;
    }
  }

  this.flooding = function(){
    if (score >= 50){
      this.die(1.0, random(0.1, 0.3));
      this.updateInfo();
      baseScore -= 50;

      this.destruction += 0.02;
    }
  }

  this.earthquake = function(){
    if (score >= 70){
      this.gdp += 0.3;
      this.updateInfo();
      baseScore -= 70;
    }
  }

  this.disease = function(){
    if (score >= 90){
      this.die(2.0, random(0.15, 0.25));
      this.updateInfo();
      baseScore -= 90;

      this.destruction += 0.4;
    } 
  }

  this.war = function(){
    if (score >= 110){
      this.die(3.0, random(0.19, 0.27));
      this.updateInfo();
      baseScore -= 110;

      this.destruction += 0.4;
      this.gdp -= 0.01;
    }
  }
  
  this.bomb = function(){
    if (score >= 140){
      this.die(4.0, random(0.23, 0.30));
      this.updateInfo();
      baseScore -= 140;

      this.destruction += 0.6;
      this.gdp -= 0.02;
    }
  }

}

function Flock() {
  this.boids = [];
}

Flock.prototype.run = function() {
  for (var i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
}

Flock.prototype.removeBoid = function(b)  {
  this.boids.pop(b);
  b = null;
}

function Boid(x,y,dest) {
  this.acceleration = createVector(0,0);
  this.velocity = createVector(random(-0.8,0.8),random(-0.8,0.8));
  this.position = createVector(x,y);
  this.r = 3.0;
  this.maxspeed = 1;    // Maximum speed
  this.maxforce = 0.05; // Maximum steering force
  this.destination = dest;
}

Boid.prototype.run = function(boids) {
  this.update();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// Method to update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  return steer;
}

Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
  var theta = this.velocity.heading() + radians(90);
  fill(255, 165, 0);
  stroke(200);
  push();
  translate(this.position.x,this.position.y);
  rotate(theta);
  beginShape();
  vertex(0, -this.r*2);
  vertex(-this.r, this.r*2);
  vertex(this.r, this.r*2);
  endShape(CLOSE);
  pop();
}