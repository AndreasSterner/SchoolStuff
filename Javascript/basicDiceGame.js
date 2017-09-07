console.log("test"); // works


document.getElementById('playerNameSelect1').onclick = function() {

    var nameInput = "";
    
    nameInput = document.getElementById(`playerNameInput1`).value;

    document.getElementById(`playerName1`).innerHTML = nameInput;
}

document.getElementById('playerNameSelect2').onclick = function() {

    var nameInput = "";

    nameInput = document.getElementById(`playerNameInput2`).value;

    document.getElementById(`playerName2`).innerHTML = nameInput;
}
