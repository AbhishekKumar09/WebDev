var numSquares= 6;
var colors = generateRandomColors(numSquares);   // as we want  6(numSquares) squares with 6 different colors thats why we had taken 6 in the argument 
var squares = document.querySelectorAll(".square");   // whenever we use for loop remember to use querySelectorAll to select all the items in loop
var pickedColor = pickcolor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");

for(var i =0 ; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");   
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");      

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;  // TURNERY OPERATOR
		//if(this.textContent==="Easy"){
		//	numSquares = 3;           // THE SAME CODE CAN BE WRITTEN IN THE ONE LINE AS SHOWN ABOVE 
		//}else{
		//	numSquares = 6;
		//}
		reset()  // here reset fuction is used to make all the things to works togeather which the easyBtn and hardBtn are doing seperately thats why mode class is created
	});
}

function reset(){

	colors = generateRandomColors(numSquares); // generate all new colors

	pickedColor = pickcolor();  // pick a new random color from array

	colorDisplay.textContent = pickedColor;  // change colorDisplay to match the picked color

	resetButton.textContent = "New Colors"; // when we win and after that clicking on Play again button but we dont want  Play Again anymore we want that New Colors should show up their in place of Play Again button thats why we used it here

	messageDisplay.textContent= "";  // so that the correct gets removed when we do play again

	for( var i =0 ; i < squares.length; i ++){   // change the colors of the squares
		if(colors[i]){
			squares[i].style.display="block"; // to unhide the squares for hard button
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display="none"; // if we click for easy button than it will work to hide the bottom 3 squares 
		}
	}

	h1.style.backgroundColor = "steelblue";  // change the background color of h1 when u do the play again or reset button
}
			//-----------------------------------------------------------------------------------//
//NOW THERE IS NO NEED OF easyBtn AND hardBtn AS WE HAD COMBINE IT IN CLASS MODE HERE THE BELOW CODE IS WRITEN JUST TO UNDERSTAND IF U DONT GET IT FROM THE UPPER ONE BUT NOW ITS OF NO USE

//easyBtn.addEventListener("click",function(){
//	easyBtn.classList.add("selected");
//	hardBtn.classList.remove("selected");
//	numSquares= 3;
//	colors = generateRandomColors(numSquares);  // as in easy we want only 3(numSquares) squares with 3 different colors so we had taken 3 in argument
//	pickedColor = pickcolor();
//	colorDisplay.textContent = pickedColor;
//
//	for(var i =0 ; i< squares.length; i++){
//		if(colors[i]){
//			squares[i].style.backgroundColor = colors[i];  // as we had taken 3 squares only so it will be implemented to upper 3 with diff. colors
//		}else{
//			squares[i].style.display="none"  // rest 3 will be disappear
//		}
//	}
//});

//hardBtn.addEventListener("click", function(){
//	hardBtn.classList.add("selected");
//	easyBtn.classList.remove("selected");
//	numSquares= 6;
//	colors = generateRandomColors(numSquares);  // as we want 6(numSquares) in hard button so we had taken  6 here for 6 different colors
//	pickedColor = pickcolor();
//	colorDisplay.textContent = pickedColor;
//
//	for(var i =0 ; i< squares.length; i++){
//		
//		squares[i].style.backgroundColor = colors[i];  
//		squares[i].style.display="block"  // to make the squares unhiden which we made hidden in easy mode 
//	}
//});
          //----------------------------------------------------------------------------------------------//
resetButton.addEventListener("click", function(){

	reset();  // HERE reset() function is used

});


colorDisplay.textContent = pickedColor;    // to automatically replace the RGB in heading(h1) with that we had selected in pickedColor

for(var i = 0 ; i < squares.length ; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i]; //use style.backgroundColor instead of style.background as style.background is not suppoted by some browsers

	squares[i].addEventListener("click", function(){  // add click listeners to the squares
	 	
	 	var clickedColor = this.style.backgroundColor;  // grab color of clicked square means the square we click with the  cursor
	 	
	 	if(clickedColor === pickedColor){     // compare color to the pickedColor
	 		messageDisplay.textContent="Correct !!";
	 		h1.style.backgroundColor = clickedColor;
	 		resetButton.textContent = "Play Again?";
	 		changeColors(clickedColor);
	 	}else{
	 		this.style.backgroundColor="#232323";
	 		messageDisplay.textContent="Try Again !!";
	 	}					// here we had taken the color argument inside the define function of changeColor so that afterawards we can asign it 
					// equal to the clickedColor when we will call it thats why color argument is equal to  squares[i].style.backgroundColor = color;
	 });					// we can also write it without using function after the : messageDisplay.textContent="Correct";
}                             // in the form we will write :- for( var i=0; i<squares.length ; i++){
							//										squares[i].style.backgroudColor = clickedColor ;										
							//									}
function changeColors(color){

	for(var i=0 ; i < squares.length ; i++){  // loop through all the squares 

		squares[i].style.backgroundColor = color;  // change each color of the square to match the given color
	}

}


function pickcolor(){

	var random= Math.floor(Math.random() * colors.length);  // used for picking the random things and colors.legth define its range
	return colors[random];
}

function generateRandomColors(num){

	 var arr=[]   // make an empty array just to use push function to add values to it 

	 for ( var i =0 ; i < num ; i++){  // repeat num times

	 	arr.push(randomColor());   // get randomColor function called and push into arr
	 }
	 return arr;   // return arr
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);//Here rgb stands for r=Red , g=Green , b=Blue and the range varies from 0 to 255 so to get 255 we had taken 256
	 
	var g = Math.floor(Math.random() * 256);  // as discussed above this Math is used for taking random things 256 defines it range

	var b = Math.floor(Math.random() * 256);                                         

	return "rgb(" + r + ", " + g + ", " + b + ")"; //HERE REMEMBER TO MAKE THE SPACE BETWEEN THE VALUES  AFTER THE COMMAS(,) and return in rgb format
}
