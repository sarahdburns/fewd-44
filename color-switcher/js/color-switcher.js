var body = document.querySelector("body");

var coral = document.querySelector(".coral");
var aliceblue = document.querySelector(".aliceblue");
var rebeccapurple = document.querySelector(".rebeccapurple");
var lightseagreen = document.querySelector(".lightseagreen");

var textTheme = document.querySelector(".text-theme")

function bodyColorChanger(color) {
	body.className = color;
}

// Events 
// ----------------------------------------------
coral.addEventListener('click', changeThemeCoral);
aliceblue.addEventListener('click', changeThemeAliceblue);
rebeccapurple.addEventListener('click', changeThemeRebeccapurple);
lightseagreen.addEventListener('click', changeThemeLightseagreen);

function changeThemeCoral () {
	console.log('fn changeThemeCoral');
	body.className = "coral"; 
	textTheme.textContent = "Coral";
}

function changeThemeAliceblue () {
	console.log('fn changeThemeAliceblue');
	body.className = "aliceblue"; 
	textTheme.textContent = "Alice blue";
}

function changeThemeRebeccapurple () {
	console.log('fn changeThemeRebeccapurple');
	body.className = "rebeccapurple"; 
	textTheme.textContent = "Rebecca purple";
}

function changeThemeLightseagreen () {
	console.log('fn changeThemeLightseagreen');
	body.className = "lightseagreen"; 
	textTheme.textContent = "Light sea green";
}