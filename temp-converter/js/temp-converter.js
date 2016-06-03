//Markup
//<input class="fahrenheit">
//button class="converter">Convert!</button>

//Structure 
// ---------------------------------------------

var fahrenheit = document.querySelector(".fahrenheit");
var convert1 = document.querySelector(".convert1");

var celsius = document.querySelector(".celsius");
var convert2 = document.querySelector(".convert2");

//Events
// -----------------------------------------------
convert1.addEventListener('click', fahrenheitToCelsius);
convert2.addEventListener('click', celsiusToFahrenheit);

//Event Handler Fahrenheit to Celsius 
// -----------------------------------------------
function fahrenheitToCelsius () {
	console.log("fn fahrenheitToCelsius")

	// get data from page
	var f = parseInt(fahrenheit.value);
	console.log("f:",f);

	// do some work/processing
	var c = (f - 32) * 5 / 9;

	//update the page
	fahrenheit.value = c.toFixed(1);

}

//Event Handler Celsius to Fahrenheit 
// -------------------------------------------------
function celsiusToFahrenheit () {
	console.log("fn celsiusToFahrenheit")

// get data from page
	var c = parseInt(celsius.value);
	console.log("c:",c);

	// do some work/processing
	var f = (c * 9 / 5) + 32;

	// update the page
	celsius.value = f.toFixed(1);

}

	