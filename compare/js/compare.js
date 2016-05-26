//Structure 

var firstNumber = document.querySelector(".first-number");
var secondNumber = document.querySelector(".second-number");
var sign = document.querySelector(".sign");
var compare = document.querySelector(".compare");

// Events
compare.addEventListener("click", compareNumbers);

//Event Handlers
function compareNumbers () {
	sign.textContent = "="
}


// Listen for the compare button to be clicked
// compare numbers when click happens 
compare.addEventListener("click",compareNumbers);


//Event Handlers
//-----------------------------------------------

// compare the first and second number
function compareNumbers () {

	var firstValue = firstNumber.value;
	firstValue = parseInt(firstValue);

	var secondValue = secondNumber.value;
	secondValue = parseInt(secondValue);

	// update the page - change the sign
	
	//JS Conditional (if, else if, else)

	//JS Comparison (greater than, less than)
	if (firstValue > secondValue) {
		sign.textContent = ">";

	}	else if (firstValue < secondValue) {
		sign.textContent = "<";
	}
		else if (firstValue == secondValue) {
		sign.textContent = "=";
	}

}



