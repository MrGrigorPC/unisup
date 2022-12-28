let uniListCard = document.querySelectorAll(".uniListCard");
for (let i = 0; i < uniListCard.length; i++) {
    uniListCard[i].addEventListener("click", function f() {
        window.location.replace('info.html')
    })
}