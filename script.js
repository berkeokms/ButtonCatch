var nesne = document.getElementById("nesne");
var score = document.getElementById("score");
var sayac = 0;
var time = document.getElementById("time");
var saniye = 5;

document.getElementById("button").onclick=()=>{
    window.location.reload();

}

nesne.onmouseover =  () => {
    sayac++;
    var xposition = parseInt(Math.random() * 500);
    var yposition = parseInt(Math.random() * 250);
    nesne.style.left = xposition + "px";
     nesne.style.top = yposition + "px";

}
/*nesne.onclick = function () {
    score.innerHTML = sayac + " seferde yakalandı";
    nesne.style.width = "100px";
    nesne.style.height = "100px";
    sayac = 0;
}*/
function saniyeDurdur() {
    window.clearInterval(deger);
}
function saniyeBaslat() {
    saniye--;
    if (saniye >= 0) {
        document.getElementById('time').innerHTML = saniye;

    } else {
        window.clearInterval(deger);
        document.getElementById('time').innerHTML = "Süreniz bitti!";
score.innerHTML = sayac + " kez buton yakalandı";
nesne.style.display="none";
    }
}
var deger = window.setInterval('saniyeBaslat()', 1000);

