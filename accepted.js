let btnConf = document.querySelector(".btnConf");
btnConf.onclick = function () {
    function open() {
        document.querySelector("#alertFor").style.display = 'flex';
    }

    function close() {
        document.querySelector("#alertFor").style.display = 'none';
    }
    setTimeout(open,1000);
    setTimeout(close,3000);
    btnConf.onclick = function () {
    }
}