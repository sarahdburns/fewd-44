// Structure
// ----------------------------------------------

var body = document.querySelector("body");
var ul = document.querySelector("ul");

// var coral = document.querySelector(".coral");
// var aliceblue = document.querySelector(".aliceblue");
// var rebeccapurple = document.querySelector(".rebeccapurple");
// var lightseagreen = document.querySelector(".lightseagreen");

var textTheme = document.querySelector(".text-theme");


// Events 
// ----------------------------------------------
ul.addEventListener('click', changeTheme);

// Event Handler Functions 
// ----------------------------------------------

function changeTheme(e) {
	console.log(e.target, e.type);

// Deleted below and replaced by ul.addEventListener('click', changeTheme);

	// coral.addEventListener('click', changeTheme);
	// aliceblue.addEventListener('click', changeTheme;
	// rebeccapurple.addEventListener('click', changeTheme);
	// lightseagreen.addEventListener('click', changeTheme);

// error checking, return early if a li wasn't clicked
	if (e.target.tagName !="LI") {
		return;
	}

	console.log("cliked LI");

	body.className = e.target.className;
	textTheme.textContent = e.target.className; 
}


