let btn = document.querySelector(".professions button");
let select = document.querySelector("#select");
btn.addEventListener("click", function () {
    if(select.value !== 'firstSelect') {
        window.location.replace('uniList.html');
    }
})