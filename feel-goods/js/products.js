// Utility function - get a parameter by name, getting id value --> how getting correct product onto page
function getParameterByName(name, url) {    if (!url) url = window.location.href;    name = name.replace(/[\[\]]/g, "\\$&");    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),        results = regex.exec(url);    if (!results) return null;    if (!results[2]) return '';    return decodeURIComponent(results[2].replace(/\+/g, " "));}

$(document).ready(function(){
	var product = products.filter(function(product){
		// Filtering for correct product based on id
		// anonymous function returns boolean true/false
		return product.id === getParameterByName('id')
	})[0];

	//Update Product image on page'
	// <img src="product.picture" />
	$("#product-image").attr('src', product.picture);

	// Update product name on page
	$(".product-name").text(product.name);

	// Build features list on product page
	for (var i = 0; i < product.features.length; i++) {
		var feature = product.features[i]; 
		$("#feature-list").append('<li>' + feature + '</li>'); 
	}

	// Build features list why it's good on product page
	for (var i = 0; i < product.whyItsGood.length; i++) {
		var item = product.whyItsGood[i]; 
		$("#why-its-good").append('<li>' + item + '</li>'); 
	}

	// Sizes 
	for (var i = 0; i < product.sizes.length; i++) {
		var size = product.sizes[i]; 
		$("#size-selector").append('<option value="' + size + '">' + size + '</option>'); 
	}

	// Colors
	for (var i = 0; i < product.color.length; i++) {
		var color = product.color[i]; 
		$("#color-selector").append('<option value="' + color + '">' + color + '</option>'); 
	}

	// Event Handler - click of add to cart button
	$("#add-to-cart").click(function(e){
		// Get values of all selectors on product page
		var size = $("#size-selector").val();

		var color = $("#color-selector").val();

		var quantity = $("#quantity-selector").val();

		// cartItem defined 
		var cartItem = {
			id: product.id,
			size: size,
			color: color,
			quantity: quantity	
		}
		// calling / invoking function
		storeInCart(cartItem)
		window.location = "checkout.html"
	});

});

// Function handling storage of item 
// storeInCart receives argument called cartItem
function storeInCart(cartItem) {
	// local storage storing item like on a hard drive, string cart is in local 
	// storage as key
	var cart = localStorage.getItem("cart");
	var newCart; 
	if (cart === null) {
		newCart = [cartItem] 
	}
	else {
		newCart = JSON.parse(cart);
		newCart.push(cartItem)

	}
	localStorage.setItem("cart", JSON.stringify(newCart));
}




