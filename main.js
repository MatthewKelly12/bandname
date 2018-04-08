

var k = 1;

function bandName(band) {
  var name = (k++) + "." + " " + band;
  return name;
}


console.log(bandName("Fistikuffs "));
console.log(bandName("Dope-A-Matic"));
console.log(bandName("Super Crack"));

