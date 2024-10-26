var a = document.getElementById("loginBtn");
var b = document.getElementById("signupBtn");
var c = document.getElementById("login");
var d = document.getElementById("signup");

function login() {
    c.style.left ="5px";
    d.style.right ="-520px";
    a.className += " ht-btn";
    b.className = "bt-btn";
    c.style.opacity = 1;
    d.style.opacity = 0;
}
function signup(){
    c.style.left ="-520px";
    d.style.right ="5px";
    a.className = "bt-btn";
    b.className += " ht-btn";
    c.style.opacity = 0;
    d.style.opacity = 1;
}

function myMenuFunction(){
    var i =document.getElementById("navMenu");

    if(i.className === "nav-menu"){
        i.className += "responsive";
    }
    else{
        i.className = "nav-menu";
    }
}



const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); 




    
  

  
  function handleclick() {
    console.log("function start");
    const firstName = document.querySelector("input[placeholder='first name']").value;
    const lastName = document.querySelector("input[placeholder='Last name']").value;
    const birthday = document.querySelector("input[type='date']").value;
    const email = document.querySelector("#email").value;
    const license = document.querySelector("input[name='license']").value;
  
    const userData = {
      firstName,
      lastName,
      birthday,
      email,
      license,
    };
    console.log(userData);
  
}
// function validateEmail() {
//     var emailError = document.getElementById('email-error');
//     var emailField = document.getElementById('email');

//     var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!emailField.value.match(emailRegex)) {
//       emailError.innerHTML = "Please enter a valid email";
//       emailField.style.borderBottomColor = "red";
//     } else {
//       emailError.innerHTML = "";
//       emailField.style.borderBottomColor = "green";
//     }
//   }

var header = document.getElementById("navMenu");
var link = header.getElementsByClassName("link");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
