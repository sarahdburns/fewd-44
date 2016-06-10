// Structure
// ------------------------------------------------
var total = document.querySelector(".total")
var input = document.querySelector(".input")
var entries = document.querySelector(".entries")

// Setup
// ------------------------------------------------
var currentTotal = 0; 

// Events
// ------------------------------------------------
input.addEventListener('keypress', addItem);

// Event handler functions
// ------------------------------------------------
 function addItem(e) {
 	// console.log(e)
 	if (e.keyCode ==13) {
 		e.preventDefault();
 	createItem(input.value);
 	updateTotal(input.value);
 	input.value = "";
 	}
 }

// Update page functions
// ------------------------------------------------
function createItem(price) {
	var li = document.createElement('li');
	li.textContent = "$" + price;
	entries.appendChild(li);
}

 function updateTotal(newValue) {
 	currentTotal += parseFloat(newValue);
 	total.textContent = "$" + currentTotal;

 }
	

// Utility functions
// ------------------------------------------------

function formatCurrency(number) {
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;
}