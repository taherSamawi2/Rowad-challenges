function createTxt() {
    var element = document.createElement("input");
    var attrType = document.createAttribute("type");
    attrType.value = "phone";

    var attrID = document.createAttribute("phone");
    attrID.value = "phone";
    element.setAttributeNode(attrType);
    element.setAttributeNode(attrID);
    /////////////////////////////
	
	
	
	 
	/////////////////////////////


    
    var btnDel = document.createElement("span");
    
    var btnID = document.createAttribute("id");
    btnID.value = "btnDel";
    
    var btnclic = document.createAttribute("onclick");
    btnclic.value = "DeleteTxt()";
    
    var contentDel = document.createTextNode("X");
    
  
    btnDel.setAttributeNode(btnID);
    btnDel.setAttributeNode(btnclic);
      btnDel.appendChild(contentDel);

    ///////////////////////////////////////

    var btnAdd = document.createElement("span");
    
    var btnAddID = document.createAttribute("id");
    btnAddID.value = "btnAdd";

    
    
    var btnAddclic = document.createAttribute("onclick");
    btnAddclic.value = "createTxt()";
    var contentAdd = document.createTextNode("+");
    
    
   
    btnAdd.setAttributeNode(btnAddID);
    btnAdd.setAttributeNode(btnAddclic);
     btnAdd.appendChild(contentAdd);


    ///////////////////////////////////
    var sec = document.getElementById("inputBlockPhone");
    sec.appendChild(element);
    sec.appendChild(btnAdd);
    sec.appendChild(btnDel);

    console.log("ss");

    //var para = document.getElementById("phone")

    //sec.insertBefore(element, para);
}

/* ************************************************************************************** */

function DeleteTxt() {


    var sec = document.getElementById("inputBlockPhone");
    sec.removeChild(sec.lastChild);
    sec.removeChild(sec.lastChild);
    sec.removeChild(sec.lastChild);

}
var confirmPassword = document.getElementById("ConfirmPassword");
var image = document.getElementById("image");

/* ************************************************************************************** */
  function showPop() {
            document.getElementById("popup").style.display = " block";
        }

        function hide() {
            document.getElementById("popup").style.display = " none";
        }

/* ************************************************************************************** */


/* ************************************************************************************** */
var userName = document.getElementById("UserName");

userName.addEventListener("input", function () {
    var key = event.keyCode;
    if (userName.value.length > 20) {
        document.getElementById("usernameError").innerText = " يجب ان يحتوي الحقل على 20 حرف فقط";
        event.preventDefault();


    } else if (Event.keyCode === 32) {
        document.getElementById("usernameError").innerText = " يجب ان لا يحتوي الحقل على مسافات";
        event.preventDefault();

    } else {
        document.getElementById("usernameError").innerText = "";
    }
});



userName.addEventListener("keypress", function () {
    var key = event.keyCode;
    if (userName.value.length > 20) {
        document.getElementById("usernameError").innerText = " يجب ان يحتوي الحقل على 20 حرف فقط";
        event.preventDefault();

    } else if (Event.keyCode === 32) {
        document.getElementById("usernameError").innerText =
            " يجب ان لا يحتوي الحقل على مسافات";
        event.preventDefault();

    } else {
        document.getElementById("usernameError").innerText = "";
    }
});






/* *************************** */
var fullName = document.getElementById("FullName");
fullName.addEventListener("input", function () {
    if (fullName.value.split(" ").length - 1 >= 5) {
        document.getElementById("FullNameError").innerHTML = "يسمح فقط بادخال 5 اسماء";
        event.preventDefault();
    } else {
        document.getElementById("FullNameError").innerHTML = "";
    }


});



fullName.addEventListener("keypress", function () {
    if (fullName.value.split(" ").length - 1 >= 5) {
        document.getElementById("FullNameError").innerHTML = "يسمح فقط بادخال 5 اسماء";
        event.preventDefault();

    } else {
        document.getElementById("FullNameError").innerHTML = "";
    }


});


/* *************************** */
var email = document.getElementById("email");

email.addEventListener("input", function () {

    var x = email.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        document.getElementById("emailError").innerText =
            " يرجاء ادخال البريد الالكتروني بشكل صحيح";
        return false;

    } else {
        document.getElementById("emailError").innerText = "";
    }
});



/* *************************** */
var ConfirmEmail = document.getElementById("ConfirmEmail");

ConfirmEmail.addEventListener("input", function () {
    var Semail = document.getElementById("email").value.slice(0, ConfirmEmail.value.length);

    if (ConfirmEmail.value != Semail) {
        document.getElementById("emailCompareError").innerText = "البريد الالكتروني غير متطايق";
        return false;
    } else {
        document.getElementById("emailCompareError").innerText = "";
    }
});

/* *************************** */

var password = document.getElementById("password");

password.addEventListener("keypress", function () {
    if (password.value.length > 15) {
        document.getElementById("passError").innerText =
            "لا يجب ان تحتوي كلمة السر على اكثر من 15 حرف ";
        event.preventDefault();

    }
});



password.addEventListener("input", function () {
    password.style.cssText = "background-color:beige";
    var hr = document.getElementById("strongRange");

    if (password.value.length < 8) {
        document.getElementById("passError").innerText = " يجب ان تحتوي كلمة السر على 8 احرف على الاقل";
        document.getElementById("type").innerText = "كلمة سر ضعيفة";
        hr.style.cssText = "background-color:red;width:30%;height:20px;";

        //return false;
    } else if (password.value.length > 15) {
        document.getElementById("passError").innerText =
            "لا يجب ان تحتوي كلمة السر على اكثر من 15 حرف ";
        event.preventDefault();

    } else if (password.value.length < 12) {
        document.getElementById("passError").innerText = "";
        document.getElementById("type").innerText =
            "كلمة سر متوسطة";
        hr.style.cssText = "background-color:orange;width:50%;height:20px;";

    } else if (password.value.length < 15) {
        document.getElementById("passError").innerText = "";
        document.getElementById("type").innerText =
            "كلمة سر قوية ";
        hr.style.cssText = "background-color:green;width:100%;height:20px;";

    } else
        document.getElementById("passError").innerText = "";



});



/* *************************** */

var ConfirmPass = document.getElementById("ConfirmPassword");

ConfirmPass.addEventListener("input", function () {
    ConfirmPass.style.cssText = "background-color:beige";



    var pass = document.getElementById("password").value.slice(0, ConfirmPass.value);

    if (ConfirmPass.value != pass) {
        document.getElementById("ConfirmPassError").innerText = "كلمة السر غير متطابقة";
        event.preventDefault();
    } else {
        document.getElementById("ConfirmPassError").innerText = "";
    }
});

/* ********************************* */


/*  ********************************** */
