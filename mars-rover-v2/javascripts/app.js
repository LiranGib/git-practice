// Rover Object Goes Here
// ======================
var rover={direction: "N", x:0, y:0, travelLog: []}; //Initial conditions

function commands(rovCommands){
  for (var i =0; i <= rovCommands.length-1; i++){   // (f)orward, (r)ight, or (l)eft (b)ackword
    rovCommands[i] == "r"? (turnRight(rover)) 
    :rovCommands[i] == "l"? (turnLeft(rover))
    :rovCommands[i] == "f" ? (rover.travelLog.push("x: "+rover.x + " y:" + rover.y), moveForward(rover))
    :rovCommands[i] == "b" ? (rover.travelLog.push("x: "+rover.x + " y:" + rover.y), moveBackward(rover))
    :console.log("WARNING - invalid command detected!!");
  }
   console.log(rover.travelLog);
}



// ======================
function turnLeft(rover){
  var rovCardinalDirections = rover.direction;
  switch (rovCardinalDirections) {
  case "N": rovCardinalDirections = "W";
  break;
  case "E": rovCardinalDirections = "N";
  break;
  case "S": rovCardinalDirections = "E";
  break;
  case "W": rovCardinalDirections = "S";
  break;
  }
  
  rover.direction = rovCardinalDirections;
  
  console.log("turnLeft was called!" + " rover facing " + rovCardinalDirections);
}

function turnRight(rover){
  var rovCardinalDirections = rover.direction;
  switch (rovCardinalDirections) {
  case "N": rovCardinalDirections = "E";
  break;
  case "E": rovCardinalDirections = "S";
  break;
  case "S": rovCardinalDirections = "W";
  break;
  case "W":rovCardinalDirections = "N";
  break;
  }
  rover.direction = rovCardinalDirections;

  
  console.log("turnRight was called!" + " rover facing " + rovCardinalDirections);
}

function moveForward(rover){
  var yCoordinate = rover.y;
  var xCoordinate = rover.x;
  var rovCardinalDirections = rover.direction;

  switch (rovCardinalDirections) {
  case "N": yCoordinate--;
  break;
  case "E": xCoordinate++;
  break;
  case "S": yCoordinate++;
  break;
  case "W": xCoordinate--;
  break;
  }
  rover.y = yCoordinate;
  rover.x = xCoordinate;

  
  console.log("moveForward was called!" + " rover new coordinates:  " + "x: "+ xCoordinate + " y: " + yCoordinate);
}

function moveBackward(rover){
  var yCoordinate = rover.y;
  var xCoordinate = rover.x;
  var rovCardinalDirections = rover.direction;

  switch (rovCardinalDirections) {
  case "N": yCoordinate++;
  break;
  case "E": xCoordinate--;
  break;
  case "S": yCoordinate--;
  break;
  case "W": xCoordinate++;
  break;
  }
  rover.y = yCoordinate;
  rover.x = xCoordinate;

  
  console.log("moveBackward was called!" + " rover new coordinates:  " + "x: "+ xCoordinate + " y: " + yCoordinate);
}

commands("rfrfflfbrff")







