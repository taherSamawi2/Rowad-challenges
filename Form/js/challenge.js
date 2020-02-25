var confirmPassword = document.getElementById("ConfirmPassword");
var image = document.getElementById("image");

/* ************************************************************************************** */
var userName = document.getElementById("UserName");


userName.addEventListener("input", function () {
    var key = event.keyCode;
    if (userName.value.length > 20) {
        document.getElementById("usernameError").innerText = " يجب ان يحتوي الحقل على 20 حرف على الاقل";
        event.preventDefault();

    } else if (Event.keyCode === 32) {
        document.getElementById("usernameError").innerText =
            " يجب ان لا يحتوي الحقل على مسافات";
        event.preventDefault();

    } else {
        document.getElementById("usernameError").innerText = "";
    }
});



userName.addEventListener("keypress", function () {
    var key = event.keyCode;
    if (userName.value.length > 20) {
        document.getElementById("usernameError").innerText = " يجب ان يحتوي الحقل على 20 حرف على الاقل";
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
        document.getElementById("passError").innerText =
            "لا يجب ان تحتوي كلمة السر على الاقل 8 حرف ";
        document.getElementById("type").innerText =
            "كلمة سر ضعيفة";
        hr.style.cssText = "background-color:red;width:20%;height:7px;";

        //return false;
    } else if (password.value.length > 15) {
        document.getElementById("passError").innerText =
            "لا يجب ان تحتوي كلمة السر على اكثر من 15 حرف ";
        event.preventDefault();

    } else if (password.value.length < 12) {
        document.getElementById("passError").innerText = "";
        document.getElementById("type").innerText =
            "كلمة سر متوسطة";
        hr.style.cssText = "background-color:orange;width:40%;height:7px;";

    } else if (password.value.length < 15) {
        document.getElementById("passError").innerText = "";
        document.getElementById("type").innerText =
            "كلمة سر قوية ";
        hr.style.cssText = "background-color:green;width:60%;height:7px;";

    } else
        document.getElementById("passError").innerText = "";



});



/* *************************** */

var ConfirmPass = document.getElementById("ConfirmPassword");

ConfirmPass.addEventListener("input", function () {
    ConfirmPass.style.cssText = "background-color:beige";



    var pass = document.getElementById("password").value.slice(0, ConfirmPass.value);

    if (ConfirmPass.value != pass) {
        document.getElementById("ConfirmPassError").innerText =   "كلمة السر غير متطابقة";
       event.preventDefault();
    } else {
        document.getElementById("ConfirmPassError").innerText = "";
    }
});

/* ********************************* */



  var _PREVIEW_URL;

        /* Show Select File dialog */
        document.getElementById("upload-dialog").addEventListener('click', function() {
            document.getElementById("image-file").click();
        });

        /* Selected File has changed */
        document.getElementById("image-file").addEventListener('change', function() {
            // user selected file
            var file = this.files[0];

            // allowed MIME types
            var mime_types = ['image/jpeg', 'image/png'];

            // validate MIME
            if (mime_types.indexOf(file.type) == -1) {
                alert('Error : Incorrect file type');
                return;
            }

            // validate file size
            if (file.size > 2 * 1024 * 1024) {
                alert('Error : Exceeded size 2MB');
                return;
            }

            // validation is successful

            // hide upload dialog button
            document.getElementById("upload-dialog").style.display = 'none';

            // set name of the file
            document.getElementById("image-name").innerText = file.name;
            document.getElementById("image-name").style.display = 'inline-block';

            // local url
            _PREVIEW_URL = URL.createObjectURL(file);

            // set src of image and show
            document.getElementById("preview-image").setAttribute('src', _PREVIEW_URL);
            document.getElementById("preview-image").style.display = 'inline-block';


            // show cancel and upload buttons now
            document.getElementById("cancel-image").style.display = 'inline-block';
            document.getElementById("upload-button").style.display = 'inline-block';
        });

        /* Reset file input */
        document.getElementById("cancel-image").addEventListener('click', function() {
            // destroy previous local url
            URL.revokeObjectURL(_PREVIEW_URL);

            // show upload dialog button
            document.getElementById("upload-dialog").style.display = 'inline-block';

            // reset to no selection
            document.getElementById("image-file").value = '';

            // hide elements that are not required
            document.getElementById("image-name").style.display = 'none';
            document.getElementById("preview-image").style.display = 'none';
            document.getElementById("cancel-image").style.display = 'none';
            document.getElementById("upload-button").style.display = 'none';
        });

        /* Upload file to server */
        document.getElementById("upload-button").addEventListener('click', function() {
            // AJAX request to server
            alert('This will upload file to server');
        });
