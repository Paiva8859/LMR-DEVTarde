var inscrever = document.querySelectorAll(".inscrever");
var inscrito = document.querySelectorAll(".inscrito");
var inscrever = document.querySelectorAll(".inscrever");

//EVENTS
document.addEventListener('DOMContentLoaded', temaDoMes);
inscrever.forEach(function(botao) {
  botao.addEventListener('click', inscrevendo);
});

//FUNCTIONS
function inscrevendo(event) {
    var botaoClicado = event.target;
    var inscrito = botaoClicado.nextElementSibling;

    botaoClicado.style.display = "none";
    inscrito.style.display = "block";
}

function temaDoMes() {
    var tema = document.getElementById("tema");
    var background = document.querySelector("main");
    var jogos = document.getElementById("jogos");
    var comida = document.getElementById("comida");
    var musica = document.getElementById("musica");
    var numerosPossiveis = [1, 2, 3];
    var indiceAleatorio = Math.floor(Math.random() * numerosPossiveis.length);

    if (indiceAleatorio == 1) {
        background.style.backgroundImage = "url(https://wallpaperboat.com/wp-content/uploads/2020/03/retro-gaming-02.jpg)";
        background.style.backgroundSize = "cover";
        jogos.style.display = "block";
        comida.style.display = "none";
        musica.style.display = "none";
    } else if (indiceAleatorio == 2) {
        background.style.backgroundImage = "url(https://img.freepik.com/vetores-gratis/papel-de-parede-mural-do-restaurante_23-2148695092.jpg)";
        background.style.backgroundSize = "cover";
        jogos.style.display = "none";
        comida.style.display = "block";
        musica.style.display = "none";
    } else {
        background.style.backgroundImage = "url(https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-purple-minimalist-music-note-banner-background-image_210612.jpg)";
        background.style.backgroundSize = "cover";
        jogos.style.display = "none";
        comida.style.display = "none";
        musica.style.display = "block";
    }
}
