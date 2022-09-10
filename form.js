const name = document.getElementById("fname");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const mnumber = document.getElementById("mno");
const gender = document.getElementById("genderId")

function nameChange() {
  console.log(name.value);
  if(name.value.length>0 && email.value.length>0 && password.value.length > 0 && mnumber.value.length > 0){
    document.getElementById('btnId').removeAttribute('disabled')
    }
}
function emailChange() {
  console.log(email.value);
  if(name.value.length>0 && email.value.length>0 && password.value.length > 0 && mnumber.value.length > 0){
    document.getElementById('btnId').removeAttribute('disabled')
    }
}
function passwordChange() {
  console.log(password.value);
  if(name.value.length>0 && email.value.length>0 && password.value.length > 0 && mnumber.value.length > 0){
    document.getElementById('btnId').removeAttribute('disabled')
    }
}
function numberChange() {
  console.log(mnumber.value);
  if(name.value.length>0 && email.value.length>0 && password.value.length > 0 && mnumber.value.length > 0){
    document.getElementById('btnId').removeAttribute('disabled')
    }
}
function genderChange() {
    console.log(gender.value);
    if(name.value.length>0 && email.value.length>0 && password.value.length > 0 && mnumber.value.length > 0 && gender.value.length > 0){
      document.getElementById('btnId').removeAttribute('disabled')
      }
  }

function loginUser() {
    console.log("User Logged In");
  }
  
  document.getElementById("btnId").setAttribute("disabled", true);
  // document.getElementById("btnId").removeAttribute('disabled')
  
