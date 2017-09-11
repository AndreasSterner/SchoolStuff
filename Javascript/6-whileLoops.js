// Copied some things from previous file (5-forLoops.js)

// var i = 0;
//
// var tweets = ["Hey", "What's up?", "Listening to some music", "Check this out!", "Amazing!"];
//
// tweetString = "";
//
// while (i < tweets.length){
//
//   tweetString = tweetString + "<p>" + tweets[i] + "</p>";
//
//   i++;
//
//   }
//   document.getElementById("tweetDiv").innerHTML = tweetString;

  var guess = Math.floor((Math.random() * 6) + 1);

  console.log(guess);

  var numberOfGuesses = 0;

  document.getElementById("guess").onclick = function() {

    var myNumber = document.getElementById("myNumber").value;

    numberOfGuesses++;

  if (myNumber == guess) {
    alert ("Correct! It was " + guess + ". It took me " + numberOfGuesses + " guesse(s).");
  }



}
