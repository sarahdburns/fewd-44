// Structure 
//------------------------
var input = document.querySelector("input");
var button = document.querySelector("button");
var directions = document.querySelector(".directions");

// Setup
//-------------------------
var streets = [];

//Event
button.addEventListener('click', addStreet);

// Event Handler functions
//-------------------------
function addStreet(e) {

	console.log('fn addStreet');
	console.log(e);

	// Prevent default event behavior to keep form from submitting
	e.preventDefault();

	// Error validation - return early if blank
	
	if (input.value == "") {
		return;
	}

	// Create new li 
	createStreet (input.value)

	// Clean up the form
	input.value = ""

	streets.push(input.value);
}

//Update Page
//-------------------------
function createStreet(name) {
	var li = document.createElement('li');
	li.textContent = name;
	directions.appendChild(li);
}