var student = {
    "fname": "Taher",
    "lname": "Samawi",
    "age": 22,
    "FullName": function info() {
        return student["fname"] + " " + student["lname"];
    }

};
student.email = "taher@gmail.com";
student.phone = 773991485;

Object.defineProperty(student, "daysOfAge", {
    get: function () {
        return student["age"] * 365.25;
    }




});

Object.defineProperty(student, "setName", {
    set: function (value) {
        return student["fname"] = value;
    }
});
student.setName = "Mohe,md"
    //document.write(student["fname"]+"<br>");
    //document.write(student.daysOfAge+"<br>");





function createTxt() {
    var element = document.createElement("input");
    var sec = document.getElementById("content");
    var attr = document.createAttribute("type");
    attr.value = "password";
    element.setAttributeNode(attr);
    //sec.appendChild(element);
    
    var para = document.getElementById("para1")


    sec.insertBefore(element, para);
}
