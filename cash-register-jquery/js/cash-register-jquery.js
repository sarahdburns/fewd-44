// Structure
// ------------------------------------------------
var form    = $("form");
var input   = $("input");
var entries = $(".entries");
var total   = $(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;


// Events
// ------------------------------------------------
form.on("submit", enter);


// Event handler functions
// ------------------------------------------------
function enter(event) {
	event.preventDefault();

	// get the current entry value, convert to number with parseFloat
	var entry = parseFloat(input.val());

	// update the value for the total
	totalValue = totalValue + entry;

	// create and append the new list item
	var li = $('<li></li>');
	entries.append(li);

	// set the text content for both the new list item and the total
	li.text(formatCurrency(entry));
	total.text(formatCurrency(totalValue));

	// clean up!
	input.val("");
}


// Utility functions
// ------------------------------------------------
function formatCurrency(number) {
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;
}
