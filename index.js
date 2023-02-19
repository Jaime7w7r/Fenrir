function main(){
    document.getElementById("main").innerHTML="<h1>Toma al lobo y arrastralo al cuadro verde</h1><h1>para desbloquear la diversión</h1><div style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)'><section id='unlock'><img id='candado' src='media/wolf.png'></section><section id='lock'><canvas id='lienzo' width='100' height='100'></canvas></section></div>";
    document.getElementById("candado").addEventListener("dragstart", arrastre, false);
    document.getElementById("candado").addEventListener("dragend", fin, false);
    soltar=document.getElementById("lienzo");
    lienzo=soltar.getContext("2d");
    soltar.addEventListener("dragenter", EvE, false);
    soltar.addEventListener("dragover", EvO, false);
    soltar.addEventListener("drop", EvD, false);
}

function EvE(e) {
    e.preventDefault();
}

function EvO(e) {
    e.preventDefault();
}

function fin(e){
    elemento=e.target;
}

function arrastre(e) {
    elemento = e.target;
    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
    e.dataTransfer.setDragImage(e.target, 50, 50);
}

function EvD(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");
    var elemento = document.getElementById(id);
    var posx = e.pageX - soltar.offsetLeft;
    var posy = e.pageY - soltar.offsetTop;
    lienzo.drawImage(elemento, posx, posy);

    var audio = new Audio('media/musica.mp3');
    audio.play();

    document.getElementById("main").innerHTML = "<div id='pag2'><div class='container'><h1 class='title animated bounceInLeft'>Bienvenidos al Juego de Aventuras</h1><p class='subtitle animated slideInRight'>Este juego es para niños y está lleno de aventuras y desafíos.</p><button id='startBtn' class='btn btn-primary' onclick='window.open('pag2.html', '_blank')'>Comenzar Juego</button><div class='canvas-container'><canvas id='gameCanvas'></canvas></div><img src='media/uaa.png' alt='logo' class='logo' width='10%'></div>";
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6;

    var title = document.querySelector(".title");
    title.classList.add("animated", "bounceInDown");

    var logo = document.querySelector(".logo");
    logo.classList.add("animated", "bounceInRight");

    var img = new Image();
    img.onload = function() {
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };
    img.src = "media/superman.png";
}


window.onload=main;