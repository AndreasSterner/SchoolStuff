var x = 0;

if (x == 1) {
  console.log("X is equal to 1");
} else {
  console.log("X is not equal to 1");
}


document.getElementById('checkName').onclick = function(){

  if (document.getElementById('name').value == "Tellus" || document.getElementById('name').value == "tellus") {
  document.getElementById('result').innerHTML = "Correct!";
  console.log("User provided the correct answer");
    } else {
  document.getElementById('result').innerHTML = "False!";
  console.log("User provided an incorrect answer");
  }
}
