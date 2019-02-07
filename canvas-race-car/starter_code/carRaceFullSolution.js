
//window.onload = function() {
  //document.getElementById("start-button").onclick = function() {
    //startGame();
  //};

  //function startGame() {

    let canvas = document.getElementById('main')
    let ctx = canvas.getContext('2d')
    canvas.width = 350;
    canvas.height = 600;


    //ROAD
    function drawRoad() {
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, 350, 600);
      ctx.fillStyle = 'gray';
      ctx.fillRect(25, 0, 300, 600);
      ctx.fillStyle = 'white';
      ctx.fillRect(35, 0, 10, 600);
      ctx.fillRect(306, 0, 10, 600);
    }

    function drawCar(){
      ctx.drawImage(img, car.x, car.y, 50, 100);
    }


    // var car = {
    //   x: 150,  //location of car 
    //   y: 475,
    //   moveLeft: function () { this.x -= 10 }, //movements of the var 
    //   moveRight: function () { this.x += 10 },
    // }

    class Car {
      constructor(x,y){
        this.x = x;
        this.y = y;
      }
      moveLeft(){
        this.x -= 10
      }
      moveRight(){
        this.x += 10
      }
    }
    let car = new Car(150, 475)

    


    var img = new Image(); //this only needs to be called once
    img.onload = function () { } 
    img.src = "images/car.png"; //this only needs to be called once 


    var obstacles = [];
    
    function createObstacle() {  //Create an obstacle and push it into an array of obstacles 
      let randomWidth = Math.floor(Math.random() * (160 - 60) + 60);
      let randomX = Math.floor(Math.random() * (230 - 30) + 30);
      let obstacle = { 
        y: 0, 
        x: randomX, 
        width: randomWidth 
      }
      obstacles.push(obstacle)
    }

    setInterval(createObstacle, 3000)
    
    function drawObstacle(){
      for (let i = 0; i < obstacles.length; i++) {
        ctx.fillStyle = 'red';
        obstacles[i].y++;
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, 20);
        checkCollision(obstacles[i])
      }

    }

    function checkCollision(obstacle){
      //if(obstacle.y > 475 && obstacle.x ){
        
        if(
          obstacle.y + 20 == 476 // the obstacle is low enough to hit the car 
          && ((car.x >= obstacle.x  //the obstacle is further to the left then the car
          && car.x <= obstacle.x + obstacles.width) // the obstacle is further to the right then the car 
          || (car.x + 50 >= obstacle.x // the obstacle is hitting the left side of the car 
          && car.x + 50<= obstacle.x + obstacle.width))) //the obstacle is hitting the right side of teh car
          
          {
                 alert("Watch where you're going!!");
        //console.log('obs is about to pass car')
      }
    }


    //KEYBOARD
    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37:
          if (car.x >= 40) {
            car.moveLeft();
            console.log('left', car);
            break;
          }
          else {
            break;
          }
        case 39:
          if (car.x <= 260) {
            car.moveRight();
            console.log('right', car);
            break;
          }
          else {
            break;
          }
      }
      //
    }



    


    function animate() { //this get's called 60 times per second and is the lifeblood of your app. 
      //clear everything && redraw everything super fast
      window.requestAnimationFrame(animate)
      ctx.clearRect(0,0,canvas.width,canvas.height) //clears everything
      drawRoad()
      drawCar()
      drawObstacle()
    }
    animate()

