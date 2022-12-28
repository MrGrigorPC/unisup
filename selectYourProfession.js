let select = document.querySelector("#select");
select.addEventListener("click", function () {
    if(select.value !== 'firstSelect') {
        window.location.replace('uniList.html')
    }
})