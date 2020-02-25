var DETAIL_PRODUCT_SELECTOR = '[data-add-card="add-card"]';
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var count = 0;
//////////////////////////////////////////// تحميل المزيد


$(document).ready(function () {
	$(".Flower").slice(0, 6).show();
	$("#loadMore").on("click", function (e) {
		e.preventDefault();
		$(".Flower:hidden").slice(0, 6).slideDown();
		if ($(".Flower:hidden").length == 0) {
			$("#loadMore").text("عرض اقل").addClass("noContent");
			document.getElementById('#loadMore').style.css = "display : none;"
		}
	});

})


///////////////////////////////////////////////////
$(document).ready(function () {
	$("#search").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$(".flowers *").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});


///////////////////////////////////////////////


var tabel = document.getElementById('tabel');



////////////////////////////////////////////


////////////////////////////////////////////

function showCart() {
	document.getElementById('allProInCart').style.cssText = "display: block;";

}
/////////////////////////////////scroll 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navbar").style.top = "0";
		} else {
			document.getElementById("navbar").style.top = "-50px";
		}
		prevScrollpos = currentScrollPos;
	}
	////////////////////////////////////////

function addProduct() {
	count++;
	console.log('you clicked!' + count);
	document.getElementById('cart').innerHTML = count;


}

function getProductArray() {
	'use strict';
	var Products = document.querySelectorAll(DETAIL_PRODUCT_SELECTOR);
	var ProductArray = [].slice.call(Products);
	return ProductArray;
}

var productsCart = {
	"cart": []
};



function addProductClickHandler(prod) {
	'use strict';

	prod.addEventListener('click', function (event) {

		prod.style.cssText = "visibility: hidden;";
		this.parentNode.childNodes.item(1).style.cssText = "animation-name: toCart;";
		this.parentNode.childNodes.item(3).style.cssText = "visibility: visible;";

		var name = this.parentNode.childNodes.item(5).textContent;
		var price = this.parentNode.childNodes.item(9).textContent;
		var img = this.parentNode.childNodes.item(1).getAttribute('src');
		console.log(name);
		console.log(img);
		console.log(price);

		productsCart['cart'].push({
			"name": name,
			"price": price,
			"img": img
		});
		var myJson = JSON.stringify(productsCart);


		// Put the object into storage
		localStorage.setItem('products', myJson);

		var retrievedProductJson = localStorage.getItem('products');
		//							$('.contentCart').children().each(function(){
		//						$(this).remove();
		//					});
		if (retrievedProductJson !== null) {
			console.log("good");

			var retrievedProductObj = JSON.parse(retrievedProductJson);

			console.log('retrievedProduct:', retrievedProductObj);
			//console.log("length : " + retrievedProductObj.todos.length);


			//console.log("number " + Object.keys(myJson).length);

		
			$.each(retrievedProductObj.cart, function (key, value) {
				CountCart();
				document.getElementById('cart-nav-contant').innerHTML = "  " + count;
				var contentCart =
					'<tr><td>' + value.name + '</td><td><img src="' + value.img + '"id="img"></td><td id="price">' + value.price + '</td><td><input type="number" min="1" max="50"></td></tr>';

				$(contentCart).appendTo('.contentCart');



			});


		} else {
			console.log("bad");
		}


	});
}

//get all items from local storage to cart
(function () {

	var retrievedProductJson = localStorage.getItem('products');
	if (retrievedProductJson !== null) {
		console.log("good");

		var retrievedProductObj = JSON.parse(retrievedProductJson);

		console.log('retrievedProduct:', retrievedProductObj);
		//console.log("number " + Object.keys(myJson).length);
		var tabel = document.getElementById('tabel');

		$.each(retrievedProductObj.cart, function (key, value) {
			console.log(value.img);
			CountCart();
			document.getElementById('cart-nav-contant').innerHTML = "  " + count;

			var contentCart =
				'<tr><td>' + value.name + '</td><td><img src="' + value.img + '"id="img"></td><td id="price">' + value.price + '</td><td><input type="number" min="1" max="50"></td></tr>';

			$(contentCart).appendTo('.contentCart');


		});



	} else {
		console.log("bad");
	}



})();


function delCart() {
	localStorage.removeItem('products');
	console.log("del");
	$('.contentCart').each(function () {
		$(this).remove();
		count = 0;
		document.getElementById('cart-nav-contant').innerHTML = "  ";

	});
}

function CountCart() {
	count++;
	console.log(count);

}

function initializeEvents() {
	'use strict';
	var Products = getProductArray();
	Products.forEach(addProductClickHandler);

}

initializeEvents();







/* ************************************************* */
