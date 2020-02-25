/*alert("ssss");
document.write("");
console.log("ss");*/



/*var x = 57;
if (x % 2 == 0) {
    document.write("Even");
} else {
    document.write("odd");
}*/

/*
for(var i=1 ; i<=100 ; i++)
    {
        document.write(" "+i);
    }
*/

/*
var num = 5;
var fact = 1;

for (var i = num; i > 1; i--) {

    fact *= i;
}
console.log(fact);
*/

/*
for (var number = 1; number < 1000; number++) {//يفحص من 1 الى الف
    var sum = 0;
    for (var i = 1; i < number; i++) { //قواسم العدد

        if (number % i == 0)
            sum += i;
    }

    if (number == sum) 
        console.log(number +" is perfect Number");
    }
*/

/*

var x = document.getElementById("content").textContent;
console.log(x);
alert("this come from HTML "+x);

document.getElementById("content").innerHTML=  "This is a new Text From JS";




   
    

*/


/*
function checkNumber() {


    var mynumber = document.getElementById("random").value;

    var random = Math.floor(Math.random() * 200);
    document.write(random);
    
    if (mynumber < random) {
        alert("Your Number " + mynumber + " is low ")
    } else
        alert("Your Number " + mynumber + " is high ")

}

*/


/*
var numbers = [1, 8, 9, 15, 20];

for (var i = 0; i < numbers.length; i++) {
    document.write(" <br>" + numbers[i] + " <br>");
}


numbers.sort(function(a,b){
return a-b;
});


numbers.forEach(function(value){
    
 document.write(value+"<br/>");   
    
});
*/



/*
var twod=[
  ["Taher", "SamAwi", 1997],
  [545],
  ["Taher", "SamAwi"],
  ["Taher", "SamAwi", 1997]
];


for ( var i = 0; i < twod.length; i++) {
    for ( var x = 0; x < twod[i].length ; x++) 
        document.write(twod[i][x] + " ");
       document.write("<br>");
      
    
}
*/



/*
function clickMeBtn() {
    alert("You Click Me....");

}


var un = document.getElementById("UserName");
var phone = document.getElementById("phone");
var Email = document.getElementById("Email");


un.value = "new Value";
un.addEventListener("mouseenter", mouseenterFun);

function mouseenterFun() {

    un.value = "Mouse Enter";
}

un.addEventListener("mouseleave", function () {

    un.value = "Mouse Leave";
});



un.addEventListener("mousemove", mousemoveFun);

function mousemoveFun() {

    un.value = "Mouse Move";
}




un.addEventListener("Keydown", KeydownFun);

function KeydownFun() {

    un.value = "Key down";
}


un.addEventListener("Keyup", KeyupFun);

function KeyupFun() {

    un.value = "Key up";
}





un.addEventListener("focus", focusFun);

function focusFun() {

    un.style.cssText = "background-color:white;";

}



un.addEventListener("blur", blurFun);

function blurFun() {

    un.style.cssText = "background-color:#FFE1AA;";
}
*/

var UserName = document.getElementById("UserName");
var FullName = document.getElementById("FullName");
var Email = document.getElementById("email");
var password = document.getElementById("password");
var ConfirmPassword = document.getElementById("ConfirmPassword");
var image = document.getElementById("image");
