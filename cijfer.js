function getScore() {
  // Get the score from the input
  var number = document.getElementById('cijferInput').value;
  return(number);
}

function rating() {
  // Calculates the rateing
  var number = getScore();
  var rate = rates(number);
  showResult("Het cijfer is " + number + " en is dus een " + rate + "<br />");
}
function otherRate() {
  // Other way of rateing the score
  var number = getScore();
  var rate = rates(number);

  showResult("De beoordeling is: " + rate + ", want het cijfer is: " + number + "<br />");
}
function rates(number) {
  // This contains the tekst for every rate
  if (number <= 49) {
    return("Onvoldoende");
  }
  else if (number >= 50 && number <= 59) {
    return("Matig");
  }
  else if (number >= 60 && number <= 74) {
    return("Voldoende");
  }
  else if (number >= 75 && number <= 100) {
    return("Goed");
  }
  else {
    return("To big");
  }
}
function showResult(text) {
  // Shows the rateing
  document.getElementById('result').innerHTML += text;
}
