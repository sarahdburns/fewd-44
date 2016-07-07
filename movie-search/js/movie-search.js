// Structure 
// ---------------

var results = document.querySelector(".results");
var form = document.querySelector("form");
var input = document.querySelector("input");

// Event Handler
// ---------------

form.addEventListener("submit", getRestaurants);

var entry = parseFloat(input.value);

function getRestaurants(e) {

e.preventDefault();

	// building the url string 
	var search = "94107";
	var url = "http://api.locu.com/v1_0/venue/search/?api_key=91d30b346c66a8f14472b08f7c3b8b18eff2c486&postal_code=94110&has_menu=true" + search;

	// making ajax request for data from api
	// $.getJSON(url, updateRestaurants);

	// Two JSON technqiues:

	// 1. use AJAX w/ getJSON
	// making ajax request for data from api
	// 2. Use JSONP to get JSON to with script tag
	// create a new <script> tag instead of ajax

	url = url + "&callback=updateRestaurants";
	var scriptTag = document.createElement("script")
	scriptTag.src = url;
	document.body.appendChild(scriptTag);

}

// Update page 
// ---------------

function updateRestaurants(restaurants) {
	console.log('updateRestaurants');
	console.log(json);

	// clear out
	results.innerHTML = "";

	json.objects.forEach(createRestaurant);	
}

function createRestaurant(restaurant) {


	// Step 1: create markup

	var li = document.createElement('li');
	var h2 = document.createElement('h2');
	var p = document.createElement('p');
	var a = document.createElement('a');

	// Step 2: add content / attributes

	h2.textContent = restaurant.name;
	p.textContent = restaurant.street_address;
	a.textContent = restaurant.phone;
	a.setAttribute('href','tel:'+ restaurant.phone);

	// Step 3: append 

	li.appendChild(h2);
	li.appendChild(p);
	li.appendChild(a);
	results.appendChild(li);

}

// updateRestaurants(json.ojbects);