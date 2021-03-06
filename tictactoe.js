//Welcome to my TicTacToe game! 
//First we need to create the board 
//and a couple of "check" functions,
//then we will draw the board 
//and the game will ensue!
function startGame(){

	var board = [0,0,0,0,0,0,0,0,0]
	var gameOn = true;
	var moveOn = true;


	//We'll use the variable "i" when we choose who goes first; 
	//it generates a "0" or "1" randomly.
	//It'll also help us swtich the turns between the player 
	//and the computer later on. 

	var i = Math.floor(Math.random()*2);

	//Below describes a function that allows the player
	//to choose a board square in which to place a move.
	//The "input" can be either capital or lowercase. 
	//In other words, "A3" and "a3" will both work.  

	var Inputmove = function(input) {
		var UpperCaseinput = input.toUpperCase(); 
		switch(UpperCaseinput) {
			case "A1": return 0;
			case "B1": return 1;
			case "C1": return 2;
			case "A2": return 3;
			case "B2": return 4;
			case "C2": return 5;
			case "A3": return 6;
			case "B3": return 7;
			case "C3": return 8;
			detault : console.log ("Entry Unknown!");
		}
	};

	//This is the function that will draw either an "X"
	//or an "O" on the board, or leave it blank
	//if no move is made.

	var Outputmove = function(p){
	    switch(p) {
	        case  1: return "x";
	        case 10: return "o";
	        default: return " ";
	    }
	};

	//This is where we draw the board in true tictactoe fashion.

	var drawBoard = function(){
		console.log(" A  B  C");
		console.log("1 " + Outputmove(board[0]) + "|" + Outputmove(board[1]) + "|" + Outputmove(board[2]));
		console.log(" -----");
	    console.log("2 " + Outputmove(board[3]) + "|" + Outputmove(board[4]) + "|" + Outputmove(board[5]));
	    console.log(" -----");
	    console.log("3 " + Outputmove(board[6]) + "|" + Outputmove(board[7]) + "|" + Outputmove(board[8]));

	};


	console.log("Welcome to TicTacToe! You will be X's and the computer will be O's. Good luck!");


	//To play this game, enter the board square in which you would like to place an X. 
	//The goal of the game is to get place three X's in a row without the computer stopping you or doing it first!

	confirm("Are you ready?");

	//The player can choose "easy" or "medium" levels.
	var level = prompt("What level would you like to play? Choose 'easy' or 'medium'!");

	console.log("Alright let's play" + level);

	console.log("Let's draw the board!");

	drawBoard();

	//The code below decides randomly who gets the first move!

	if(i === 0) {
		console.log("You have the first move!");
	} else {
		console.log("Computer has the first move!");
	}

	//The section below is the main logic of the game; 
	//it cycles back and forth between the player's turn and the computer's turn,
	//and adds the X's and O's to the right squares on the board.

	//This section will help us add AI to the computer, should the player choose "medium" level. 
	var scores = [
	        board[0] + board[1] + board[2],
	        board[3] + board[4] + board[5],
	        board[6] + board[7] + board[8],
	        board[0] + board[3] + board[6],
	        board[1] + board[4] + board[7],
	        board[2] + board[5] + board[8],
	        board[0] + board[4] + board[8],
	        board[2] + board[4] + board[6]
	    ];

	var scoresarray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


	function InsertText (id) {
		document.getElementById(id).innerHTML = "X";
	}

	function playRandomMove () {
		var computermove = Math.floor(Math.random()*9);
		moveOn = true; 
		while(moveOn) { 
			if (board[computermove] === 0) {
				board[computermove] = 10;
				drawBoard(); 
				moveOn = false; 
				i = 0; 
			} else {
				var computermove = Math.floor(Math.random()*9);
				moveOn = true;
			}
		}
	}

	//test console.log to see if random move. 

	function playCalcMove () {
		for (m = 0; m < scores.length; m++){
			//the section below allows the computer to place a winning move if possible
			if (scores[m] === 20) { 
						if (board[scoresarray[m][0]] === 0){
					board[scoresarray[m][0]] = 10;
				} else if (board[scoresarray[m][1]] === 0){
					board[scoresarray[m][1]] = 10;
				} else if (board[scoresarray[m][2]] === 0){
					board[scoresarray[m][2]] = 10;
				} 
				drawBoard(); 
				i = 0;
			//the section below allows the computer to place a block if possible
			} else if (scores[m] === 2) {
				console.log("Found blocking move");
				if (board[scoresarray[m][0]] === 0){	
					board[scoresarray[m][0]] = 1;
				} else if (board[scoresarray[m][1]] === 0){
					board[scoresarray[m][1]] = 1; 
				} else if (board[scoresarray[m][2]] === 0){
					board[scoresarray[m][2]] = 1;
				}
				drawBoard();
				i = 0; 
			} else {
				playRandomMove();
			}
		}
	}
		

	while(gameOn) {
					
		//this section logs the player's move
		if(i === 0) {
			var yourmove = Inputmove(prompt("What is your move?")); 
			var moveOn = true; 
			while(moveOn) {
				if (board[yourmove] === 0) {
					board[yourmove] = 1; 
					InsertText(yourmove);
					drawBoard();
					moveOn = false;
					i = 1;
				} else {
					yourmove = Inputmove(prompt("This spot is already taken, or may be invalid. Try again please."));
					moveOn = true; 
				}
			}
		//this section log's the computer's move
		} else if (i === 1) {
			console.log("It's the computer's turn!");
			//this section makes the computer play "easy" level
			if (level = "easy") {
				console.log("The computer is playing an easy move."); 
				playRandomMove(); 
			} else if (level = "medium") {
				console.log("The computer is playing medium."); 
				playCalcMove();
			}
		}
				
		//check who is winner 
		for(var j = 0; j < scores.length; j++){
	    	if(scores[j] === 3){
	        	console.log("You Win!");
	        	gameOn = false;
	        	playAgain();
	        	break; 
	    	} else if(scores[j] === 30){
	        	console.log("You Lose!");
	        	gameOn = false;
	        	playAgain();
	        	break; 
	    	}
		}


		var scoreSum = 0;

		for(var k = 0; k < board.length; k++){
	        scoreSum += board[k];
		}



		if(gameOn === true && (scoreSum === 54 || scoreSum === 45)){
	    	console.log("It's a Tie!");
	    	gameOn = false;
	    	playAgain();
		}

	}



	//This section gives allows the player the chance to play again!
	//It also resets the board. 

	function playAgain() {
		var y = prompt("Play again?"); 
		LowerCaseinput = y.toLowerCase();
			if (LowerCaseinput === "yes") {
				alert("Yay! Let's play again.");
				gameOn = true;
				board = [0,0,0,0,0,0,0,0,0];
				drawBoard();
			} else {
				alert("Alright then. Good playin with ya!")
				gameOn = false;
			}
	}

}

startGame();
