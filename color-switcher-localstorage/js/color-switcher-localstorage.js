// Structure
// ----------------------------------------------

var body = document.querySelector("body");
var ul = document.querySelector("ul");

var textTheme = document.querySelector(".text-theme");


// Events 
// ----------------------------------------------
ul.addEventListener('click', changeTheme);
window.addEventListener('load', reloadPage);

// on page load, get the theme from localStorage 



// Event Handler Functions 
// ----------------------------------------------
function reloadPage(e) {
	// get theme from localStorage
	var theme = localStorage.getItem('theme');

	updatePage(theme);

}


function changeTheme(e) {
// error checking, return early if a li wasn't clicked
	if (e.target.tagName !="LI") {
		return;
	}

	updatePage(e.target.className);

	body.className = e.target.className;
	textTheme.textContent = e.target.className; 

	// save theme to localStorage
	localStorage.setItem('theme', e.target.className);
}

// get theme from localStorage
function updatePage(theme) {
	console.log('updatePage', theme);

	body.className = theme;
	textTheme.textContent = theme;
}
