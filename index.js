// ism
let namee = prompt("Please enter your name:");
const ism = document.querySelector("#ism");
ism.innerHTML = namee;
ism.style.color = "aqua";

function validateName() {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(namee)) {
    alert("Xato");
    return;
  }
}
validateName();

// familya

let surname = prompt("Please enter your surname:");
const familya = document.querySelector("#familya");
familya.innerHTML = surname;
familya.style.color = "aqua";
function validatesurName() {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(surname)) {
    alert("Xato");
    return;
  }
}
validatesurName();

// yosh
let age = parseInt(prompt("Please enter your age:"), 10);
const yosh = document.querySelector("#yosh");
yosh.innerHTML = age;
yosh.style.color = "aqua";
function validateAge() {
  if (isNaN(age) || age <= 0 || age > 120) {
    alert("Invalid age! Please enter a valid age between 1 and 120.");
    return;
  }

  alert("Welcome, you are " + age + " years old!");
}

// email

let Email = prompt("Please enter your email:");
const email = document.querySelector("#email");
email.innerHTML = Email;
email.style.color = "aqua";
function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(Email)) {
    alert("Ishlamadi");
    return;
  }
  alert("ishladi");
}
validateEmail();

localStorage.setItem("my info", namee);
localStorage.setItem("my info", Email);
localStorage.setItem("my info", age);
localStorage.setItem("my info", surname);
