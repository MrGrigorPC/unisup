let emailInput = document.querySelector("#form1Example1");
let passwordInput = document.querySelector("#form1Example2");
let formSign = document.querySelector('#signin-form');
formSign.addEventListener('submit',function (event) {
  event.preventDefault();
    if (emailInput.value === 'poghospoghosyan@gmail.com' && passwordInput.value === 'poghos') {
      window.location.replace('./proffesions.html');
    }
    else {
        alert('Non correct email or password');
    }
}
)

