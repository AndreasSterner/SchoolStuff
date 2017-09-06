for (var i = 0; i < 5; i++) {
  console.log("Index + 1 = " + (i+1));
}

console.log("Counts up");
console.log("Counts down");

for (var j = 5; j > 0; j--) {
  console.log("Index = " + j);
}

console.log("");
console.log("");

//Adding tweets array from previous file
var tweets = ["Hey", "What's up?", "Listening to some music", "Check this out!", "Amazing!"];

for (var i = 0; i < tweets.length; i++) {
    document.getElementById(`${i}`).innerHTML = "Tweet " + (i + 1) + ": " + tweets[i];
    // Javascript String Interpolation ^^
    // https://en.wikipedia.org/wiki/String_interpolation#Javascript
}

//Another way to accomplish the same result ^^

var tweetString = "";
for (var i = 0; i < tweets.length; i++) {

  tweetString = tweetString + "<p>" + tweets[i] + "</p>";

  }
  document.getElementById("tweetDiv").innerHTML = tweetString;
