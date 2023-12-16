`use strict`;
//buttons
const form_login = document.querySelector(`.form_login`);
const bnt_Login = document.querySelector(`.bnt_Login`);
const login = document.querySelector(`.login`);
const form = document.querySelector(`.form`);
const signup = document.querySelector(`.signup`);
const signup_form = document.querySelector(`.signup_form`);

// form validation
const body = document.querySelector(`body`);
const form_container = document.querySelector(`.form_container`);
const plsWait = document.querySelector(`.plsWait`);

// signup button functionality

signup.addEventListener(`click`, function () {
  signup_form.classList.add(`signup_form_active`);
  form.classList.add(`hidden`);
  signup.classList.add(`active`);
  login.classList.remove(`active`);
});

//login button functionality
login.addEventListener(`click`, function () {
  form.classList.remove(`hidden`);
  signup_form.classList.remove(`signup_form_active`);
  login.classList.add(`active`);
  signup.classList.remove(`active`);
});

// Login validation
form_login.addEventListener(`submit`, (e) => {
  e.preventDefault();
})

bnt_Login.addEventListener(`click`, function () {
  forEmail();
});
  
function forEmail() {
  let emailAddress = `divinetidy@gmail.com`;
  let  password = 12345;
  let email = String(document.querySelector(`.email`).value);
  let input_password = Number(document.querySelector(`.input_password`).value);

  if (email === emailAddress && input_password === password) {
    form_container.classList.add(`hidden`);
    plsWait.classList.remove(`plsWait`);
  }else{
    alert(`invalid email address or password`);
  }
  
}
