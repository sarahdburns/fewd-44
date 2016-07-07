var checkoutCart = JSON.parse(localStorage.getItem("cart"));
var checkoutItems = document.querySelector('.checkout-items');

//function receives product, passed in when call function
function createCheckoutItem(product, cartItem) {
	// var cartItem = {
	// 		id: product.id,
	// 		size: size,
	// 		color: color,
	// 		quantity: quantity	
	// 	}
	var li = document.createElement('li');
	li.className = "product-summary-container";

	var uniqueProductID = [product.id, cartItem.size, cartItem.color, cartItem.quantity].join(';');
	var template =  '<div class="product-image">' +
						'<a href="product.html?id='+ product.id + '"><img src="' + product.picture + '"></a>' +
					'</div>' +
					'<div class="product-details">' +
						'<p>Product:' + product.name + '</p>' +
						'<p>Size:' + cartItem.size + '</p>' +
						'<p>Color:' + cartItem.color + '</p>' +
						'<p>Quanity:' + cartItem.quantity + '</p>' +
						'<p>Price:' + product.price + '</p>' +
						'<button data-id="' + uniqueProductID + '" class="remove-item">Remove Item</button>'
					'</div>';
	li.innerHTML = template;

	checkoutItems.appendChild(li);
}

// Display checkout items
checkoutCart.forEach(function(cartItem, index) {

	//getting access to specific product object based on id, why using id to filter objects
	var product = products.filter(function(product){
		// Filtering for correct product based on id
		return product.id === cartItem.id
	})[0];

	createCheckoutItem(product, cartItem)

})

//Event handler remove item when button is clicked
$(".remove-item").click(function(e){
	var uniqueProductID = $(e.target).data("id").split(';');
	var productId = uniqueProductID[0];
	var cartItemSize = uniqueProductID[1];
	var cartItemColor = uniqueProductID[2];
	var cartItemQuantity = uniqueProductID[3]; 

	var newCart = checkoutCart.filter(function(cartItem) {
		return !(
			cartItem.id === productId && cartItem.size === cartItemSize && 
			cartItem.color === cartItemColor && cartItem.quantity === cartItemQuantity
		)
	});
	localStorage.setItem('cart', JSON.stringify(newCart));
	window.location.reload();
})
