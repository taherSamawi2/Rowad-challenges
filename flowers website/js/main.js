var DETAIL_PRODUCT_SELECTOR = '[data-add-card="add-card"]';
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var count = 0;



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

function addProductClickHandler(prod) {
    'use strict';

    prod.addEventListener('click', function (event) {

        prod.style.cssText = "visibility: hidden;";
        this.parentNode.childNodes.item(1).style.cssText = "animation-name: toCart;";
        this.parentNode.childNodes.item(3).style.cssText = "visibility: visible;";

        count++;
        document.getElementById('cart').innerHTML = count;
        document.getElementById('allProInCart').style.cssText = "display: block;";
        var name = this.parentNode.childNodes.item(5).textContent;
        var price = this.parentNode.childNodes.item(9).textContent;
        var img = this.parentNode.childNodes.item(1).getAttribute('src');
        console.log(name);
        console.log(img);
        console.log(price);





        //Name prpduct
        var create_tr = document.createElement("tr");
        
        
        var create_td_Name = document.createElement("td");
        create_tr.appendChild(create_td_Name);
        
        var td_Name_content = document.createTextNode(name);
        create_td_Name.appendChild(td_Name_content);

        
        
        
        //Img prpduct
        var create_td_img = document.createElement("td");
        create_tr.appendChild(create_td_img);
        
        var create_td_img_element = document.createElement("img");
        create_td_img.appendChild(create_td_img_element);

        
        var SetAttributeForIMG = document.createAttribute("src");
        SetAttributeForIMG.value = img; 
        create_td_img_element.setAttributeNode(SetAttributeForIMG);
        
          
        var AttributeIDForIMG = document.createAttribute("id");
        AttributeIDForIMG.value = "img"; 
        create_td_img_element.setAttributeNode(AttributeIDForIMG);
        
        
       //Price for prpduct
        var create_td_price = document.createElement("td");
        create_tr.appendChild(create_td_price);

        
        var td_price_content = document.createTextNode(price);
         create_td_price.appendChild(td_price_content);
        
        var SetAttributeForPrice = document.createAttribute("id");
        SetAttributeForPrice.value = "price"; 
        create_td_price.setAttributeNode(SetAttributeForPrice);
        
        
        
                
        //Number prpduct
        var create_td_number = document.createElement("td");
        create_tr.appendChild(create_td_number);

        
        var create_td_number_element = document.createElement("input");
        create_td_number.appendChild(create_td_number_element);

        
        var AttributeForInput_type = document.createAttribute("type");
        AttributeForInput_type.value = "number"; 
        create_td_number_element.setAttributeNode(AttributeForInput_type);
        
        
        var AttributeForInput_min = document.createAttribute("min");
        AttributeForInput_min.value = 1 ; 
        create_td_number_element.setAttributeNode(AttributeForInput_min);
               
        var AttributeForInput_max = document.createAttribute("max");
        AttributeForInput_max.value = 50 ; 
        create_td_number_element.setAttributeNode(AttributeForInput_max);
        
        
           
        
        
        
        
             
       //total  for prpduct
      /*  var create_td_total = document.createElement("td");
        create_tr.appendChild(create_td_total);

        var td_total_content = document.createTextNode(price);
        create_td_total.appendChild(td_total_content);
        
        var SetAttributeForTotal = document.createAttribute("id");
        SetAttributeForTotal.value = "total"; 
        create_td_total.setAttributeNode(SetAttributeForTotal);
        
        
       */
        
        
/////////////////////////////////////////////////////////////////////
        var tabel = document.getElementById('tabel');
        tabel.appendChild(create_tr);
/////////////////////////////////////////////////////////////////////


    });
}



function initializeEvents() {
    'use strict';
    var Products = getProductArray();
    Products.forEach(addProductClickHandler);

}

initializeEvents();







var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

var element = document.getElementById("tt");
var elementclass = document.getElementById("nav-phone");
element.addEventListener('click', function () {

    elementclass.style.cssText = "display:none";

});

element.addEventListener('click', function () {

    elementclass.style.cssText = "display:block";

});


/* ************************************************* */
