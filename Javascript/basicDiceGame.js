console.log("test"); // works
// aware of reapeating myself instead of making functions for things but I am way too lazy to bother since this isn't a real project
// also started woith JS less than 2 weeks ago so whatever

var playerName1Var = "Player 1";
var playerName2Var = "Player 2";


document.getElementById('playerNameSelect1').onclick = function() {

  playerName1Var = document.getElementById('playerNameInput1').value;

  document.getElementById('playerName1').innerHTML = playerName1Var;
}

document.getElementById('playerNameSelect2').onclick = function() {

  playerName2Var = document.getElementById('playerNameInput2').value;

  document.getElementById('playerName2').innerHTML = playerName2Var;
}

  var rollNumber;
  var playerTotalNumber1 = 0;
  var playerTotalNumber2 = 0;

//Player 1
document.getElementById('playerRoll1').onclick = function() {
  rollNumber = Math.floor((Math.random() * 6) + 1);
  console.log('before', rollNumber);
  if (rollNumber == 1) {
    document.getElementById('addPointsPlayer1').innerHTML = `-${playerTotalNumber1}`;
    playerTotalNumber1 = 0;
    document.getElementById('playerPoints1').innerHTML = playerTotalNumber1;

  } else if (rollNumber != 1){

    playerTotalNumber1 = rollNumber + playerTotalNumber1;
    console.log('after', rollNumber);
    document.getElementById('addPointsPlayer1').innerHTML = `+${rollNumber}`;
    document.getElementById('playerPoints1').innerHTML = playerTotalNumber1;

    if (playerTotalNumber1 > 50) {
      document.getElementById('playerName1').innerHTML = `${playerName1Var} - Winner!`;
    }

  }
}
//Player 2
document.getElementById('playerRoll2').onclick = function() {
  rollNumber = Math.floor((Math.random() * 6) + 1);
  console.log('before', rollNumber);
  if (rollNumber == 1) {
    document.getElementById('addPointsPlayer2').innerHTML = `-${playerTotalNumber2}`;
    playerTotalNumber2 = 0;
    document.getElementById('playerPoints2').innerHTML = playerTotalNumber2;
  } else if (rollNumber != 1){

    playerTotalNumber2 = rollNumber + playerTotalNumber2;
    console.log('after', rollNumber);
    document.getElementById('addPointsPlayer2').innerHTML = `+${rollNumber}`;
    document.getElementById('playerPoints2').innerHTML = playerTotalNumber2;

    if (playerTotalNumber1 > 50) {
      document.getElementById('playerName1').innerHTML = `${playerName2Var} - Winner!`;
    }

  }
}
