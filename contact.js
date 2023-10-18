function validation() {
  'use strict';
  // span for error 
  var i;
  for (i = 1; i <= 4; i++) {
    var error = document.getElementById("err" + i);
  }
  document.getElementById("output").innerHTML = "";

  var isValid = true
  // retrieve form's data

  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var email = document.getElementById("email");
  var phone = document.getElementById("phonenum");


  ////////////// validation ////////////////////////    
  //first name 
  if (fname.value == "" || fname.value.length <= 1) {
    document.getElementById("err1").innerHTML = "Please include your first name";
    isValid = false;
  }

  //last name
  if (lname.value == "" || lname.value.length <= 1) {
    document.getElementById("err2").innerHTML = "Please include your last name";
    isValid = false;
  }

  //email
  if (email.value == "") {
    document.getElementById("err3").innerHTML = "Please enter an email";
    isValid = false;
  }

  // phone number
  if (isNaN(phone.value) || phone.value < 9) {
    document.getElementById("err4").innerHTML = "Please enter a valid phone number";
    isValid = false;
  }

  // retrieve comments from form 
  var comments =  U.$('comments');
  let count = comments.value.length;
  U.$('count').innerHTML = count;
  if (count > 100) {
    comments.value = comments.value.slice(0, 100);
  }
  function message() {

    if (isValid) {
     
      var final = document.getElementById("output");
      final = "Thank you, " + fname.value + " " + lname.value + " for contacting us" +". We will reach out to you shortly!";
      document.getElementById("output").innerText = final;
    }
  }
  message(); {

  }

}


function init() {
  //contact button
  var contactbutt = document.getElementById("contactBtn");
  if (contactbutt !== null) {
    contactbutt.onclick = validation;
  }

}

window.onload = init;
