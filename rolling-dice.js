var args = process.argv.slice(2)
var outputString = "Rolled " + args + " dice: "

function outputDice(numberOfDice) {
  for (i = 0 ; i < numberOfDice ; i++) {
    outputString += Math.ceil(Math.random() * 6) + ", ";
  }
  return outputString.slice(0,-2);
};

console.log(outputDice(args));