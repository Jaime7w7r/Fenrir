function main() {
    document.getElementById("main").innerHTML = "<div id='pag2'><div class='container'><div><h1 style='float: left;'>Fenrir</h1><img src='media/Images/ico.ico'></div><h1 class='title animated bounceInLeft'>Bienvenidos al Juego de Aventuras</h1><p class='subtitle animated slideInRight'>Este juego es para niños y está lleno de aventuras y desafíos.</p><button id='button1' class='btn btn-primary' onclick='cap()'>Capturar alias</button><br><button id='button1' class='btn btn-primary' onclick='cre()'>Créditos</button><br><button id='button1' class='btn btn-primary' onclick='est()'>Estadísticas</button><div class='canvas-container'><canvas id='gameCanvas'></canvas></div><img src='media/Images/uaa.png' alt='logo' class='logo' width='10%'></div>";
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6;

    var title = document.querySelector(".title");
    title.classList.add("animated", "bounceInDown");

    var logo = document.querySelector(".logo");
    logo.classList.add("animated", "bounceInRight");

    var img = new Image();
    img.src = "media/Images/superman.png";
    img.onload = function () {
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };
}

function cap() {
    window.location.replace('CargarDatos.html')
}

function est(){
    var ancho = 1050;
    var alto = 728;
    var x = (window.screen.width / 2) - (ancho / 2);
    var y = (window.screen.height / 2) - (alto / 2);
    window.open('Estadisticas.html', 'Diploma', 'width=' + ancho + ',height=' + alto + ',left=' + x + ',top=' + y);
}

function cre(){
    var ancho = 1050;
    var alto = 728;
    var x = (window.screen.width / 2) - (ancho / 2);
    var y = (window.screen.height / 2) - (alto / 2);
    window.open('Creditos.html', 'Diploma', 'width=' + ancho + ',height=' + alto + ',left=' + x + ',top=' + y);
}


window.onload = main;