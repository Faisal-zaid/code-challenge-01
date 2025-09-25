//added currentSpeed variable to be able to follow up the code
function speedCalculator(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  //let speed ;

  let points;
  // the argument below suggests if the currentspeed is within the required speed
  //the points should be returned as ok
  if (speed <= speedLimit) {
    points = "ok";
  }
  //it further ahead states that if its above the required speed it should add a
  //point every 5km/hr more of speed
  else {
    points = (speed - speedLimit) / 5;
  }
  //the function here confirms if points exceed the set amount the license gets suspended
  if (points > 12) {
    points = "License suspended";
  }
  //this function calls for the points
  //else{
  //  console.log(points)
  //}

  return points;
}
// the points are printed
console.log(speedCalculator(80));
