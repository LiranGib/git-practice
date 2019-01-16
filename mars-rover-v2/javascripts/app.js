// Rover Object Goes Here
// ======================
var rover={direction: "N", x:0, y:0, travelLog: []};       //Initial conditions
var grid = {x:10, y:10};                                  //setting the rover grid

var boundariesForward = [["0W", (grid.x+"E")], ["0N", (grid.y+"E")]];
var boundariesBackward = [["0E", (grid.x+"W")],["0S", (grid.y+"N")]];

function commands(rovCommands){
 
  rovCommands = rovCommands.toLowerCase();             // converting command input to lower-case to eliminate typing errors.
  for (var i =0; i <= rovCommands.length-1; i++){     // (f)orward, (r)ight, or (l)eft (b)ackword
    
   if (rovCommands[i] ==="r"){
     turnRight(rover);
     
   }else if (rovCommands[i] === "l"){
     turnLeft(rover);
     
   }else if (rovCommands[i] === "f"){
  
     if(!boundariesForward[0].includes(rover.x + rover.direction) && !boundariesForward[1].includes(rover.y + rover.direction)){
       rover.travelLog.push("x: "+rover.x + " y:" + rover.y);
       moveForward(rover);
     }else{
       console.log("Can't forward, coordinates out of boundaries");
     }
     
   }else if (rovCommands[i] === "b"){
     if(!boundariesBackward[0].includes(rover.x + rover.direction) && !boundariesBackward[1].includes(rover.y + rover.direction)){
       rover.travelLog.push("x: "+rover.x + " y:" + rover.y);
       moveBackward(rover);
     }else{
       console.log("Can't backward, coordinates out of boundaries");
     }
        
   }else{
     console.log("WARNING - invalid command detected!!");
   }
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

commands("flflf"); //commands for testing purposes







