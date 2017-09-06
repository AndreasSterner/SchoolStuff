// Copied some things from previous file (5-forLoops.js)

var i = 0;

var tweets = ["Hey", "What's up?", "Listening to some music", "Check this out!", "Amazing!"];

tweetString = "";

while (i < tweets.length){

  tweetString = tweetString + "<p>" + tweets[i] + "</p>";

  i++;

  }
  document.getElementById("tweetDiv").innerHTML = tweetString;


  document.getElementById("guess").onclick = function() {

    var myNumber = document.getElementById("myNumber").value;

    var gotIt = false;

    var numberOfGuesses = 1;

    while (gotIt == false) {

        var guess = Math.random();

        guess = guess * 6;

        guess = Math.floor(guess);

        if (guess == myNumber) {

            gotIt = true;

            alert ("Correct! It was " + guess + ". It took me " + numberOfGuesses + " guesse(s).");

        } else {

            numberOfGuesses++;

        }

    }

}
