function rating() {
  // Calculates the rateing
  var number = document.getElementById('cijferInput').value;
  var rate = rates(number);
  showResult(rate, number);
}
function rates(number) {
  // This contains the tekst for every rate
  if (number <= 49 && number ) {
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
function showResult(result, cijfer) {
  // Shows the rateing
  document.getElementById('result').innerHTML = "Het cijfer is " + cijfer + " en is dus een " + result;
}
