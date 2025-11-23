console.log("script.js loaded");


//counter for playing rock paper scissors 3 times


function RockPaperScissors(){
	var counter = 0;
	while(counter < 3){
			let a = prompt("Player A: Rock, Paper, or Scissors?"); //user input everytime
        	let b = prompt("Player B: Rock, Paper, or Scissors?");


			if ( a == b){
			alert("it is a draw");
			counter++;
		}
		else if( a == "Rock" && b == "Scissors" || a == "Scissors" && b == "Paper" || a == "Paper" && b == "Rock" ) {
			alert("Player A wins");
			counter++;
		}
		else{
			alert("Player B wins");
			counter++;
		}

	}
	alert("you have played 3 times, the game is now over")
}
//prints beer lyrics
function printBeer(){
	let beer = 0;
	let message = " "
	for(let i = 99; i >= beer; i--){
		message += i + " bottles of beer on the wall " + i + " bottles of beer <br> ";
		message += " take one down and pass it around " + i + " bottles of beer on the wall <br>";
	}
	message+="No more bottles of beer on the wall, no more bottles of beer.<br>";
	message+="Go to the store and buy some more, 99 bottles of beer on the wall.";

	document.getElementById("button").innerHTML = message;
}