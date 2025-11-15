console.log("script.js loaded");




function RockPaperScissors(a,b){
	if ( a == b){
		alert("it is a draw");
	}
	else if( a == "Rock" && b == "Scissors" || a == "Scissors" && b == "Paper" || a == "Paper" && b == "Rock" ) {
		alert("Player A wins");
	}
	else{
		alert("Player B wins");
	}
}