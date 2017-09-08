console.log("test"); // works

document.getElementById('playerNameSelect1').onclick = function() {

  document.getElementById('playerName1').innerHTML = document.getElementById('playerNameInput1').value;
}

document.getElementById('playerNameSelect2').onclick = function() {

  document.getElementById('playerName2').innerHTML = document.getElementById('playerNameInput2').value;
}
