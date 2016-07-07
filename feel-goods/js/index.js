
localStorage.setItem('products', products);

$(document).ready(function(){
	var productsContainer = $('.products');
	products.forEach(function(product, i){
		productsContainer.append('<a href="product.html?id=' + product.id + '"><img src="' + product.picture + '"></a>')
	})
});


