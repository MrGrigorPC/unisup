let emailInput = document.querySelector("#form1Example1");
let passwordInput = document.querySelector("#form1Example2");
let btnAlerts = document.querySelectorAll(".btnAlerts");
let alerts = document.querySelectorAll(".alert");
for (let i = 0; i < btnAlerts.length; i++) {
    btnAlerts[i].addEventListener("click",function () {
        alerts[i].classList.toggle("displayBlock");
    })
}