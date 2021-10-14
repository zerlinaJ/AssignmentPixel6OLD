const formname = document.querySelector('#otpForm');

let otp = formname.elements.namedItem("otp");

var attempt = 0;
var uname= localStorage.name;
var uphone1 = localStorage.phone1;
var uphone2 = localStorage.phone2;
var uphone3 = localStorage.phone3;
//generating a random number between 1000 & 9999
var random = Math.floor(Math.random() * 8999) + 1000;

document.getElementById("message").innerHTML = `Dear ${uname}, A 4 digit verification number has been sent to your phone number ${uphone1} ${uphone2} ${uphone3}, please enter in the following box and submit for confirmation:`
alert(random + " is the verification code to login to your account");

function validateOTP() {

  if (random === parseInt(otp.value)) {
    return true;
    //redirect to pixel6 page
  }
  else {
    document.getElementById("message").innerHTML = "Wrong otp. Try again";
    otp.value = ''
    attempt++;
    if (attempt === 3) {
      document.getElementById("message").innerHTML = "Sorry!! Validation Unsuccessful";
      //redirect to 404 page after 2 seconds
      setTimeout(function () { window.location.assign("LoginUnsuccessful.html") }, 2000);
    }
    return false;
  }

}
