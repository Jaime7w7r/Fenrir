function main() {
    document.getElementById("main").innerHTML = "<div id='pag2'><div class='container'><div><h1 style='float: left;'>Fenrir</h1><img src='media/ico.ico'></div><h1 class='title animated bounceInLeft'>Bienvenidos al Juego de Aventuras</h1><p class='subtitle animated slideInRight'>Este juego es para niños y está lleno de aventuras y desafíos.</p><button id='button1' class='btn btn-primary' onclick='cap()'>Capturar alias</button><button id='button1' class='btn btn-primary' onclick='cre()'>Creditos</button><div class='canvas-container'><canvas id='gameCanvas'></canvas></div><img src='media/uaa.png' alt='logo' class='logo' width='10%'></div>";
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6;

    var title = document.querySelector(".title");
    title.classList.add("animated", "bounceInDown");

    var logo = document.querySelector(".logo");
    logo.classList.add("animated", "bounceInRight");

    var img = new Image();
    img.src = "media/superman.png";
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
    document.getElementById("main").innerHTML = "<input type='button' id='boton' onclick='main()' value='Volver al menu' /><div class='ejemplo'><br><label for='nombre'> Alias: </label><input type='text' id='nombre' /><input type='button' id='boton' onclick='verificar()' value='Verificar datos' /><p id='datos'> Pulsa para ver tus datos. </p></div>"
}

function cre(){
    document.getElementById("main").innerHTML = "<input type='button' id='boton' onclick='main()' value='Volver al menu' /><div class='ejemplo'><h1 class='title animated bounceInLeft'>Creditos</h1><br><label> Leonardo Javier Hernandez Martinez </label><p id='datos'> ID 245439. </p><br><label> Alfredo Quezada Márquez (Papi) </label><p id='datos'> ID 274258. </p><br><label> Bárbara Jimena Silva Jaime </label><p id='datos'> ID 244923. </p><br><label> Jaime Adolfo Varela Martínez </label><p id='datos'> ID 295482. </p></div>"
}

function verificar() {
    if (localStorage.nombre != undefined) {
        document.getElementById("datos").innerHTML = "Alias: " + localStorage.alias+"Puntuación: "+localStorage.puntuacion+"Tiempo: "+localStorage.tiempo;
    }
    else {
        document.getElementById("datos").innerHTML = "No se encuentran datos";
    }
    document.getElementById("main").innerHTML += "<input type='button' style='margin-left: 45%;' id='boton' onclick='El juego xd' value='Empezar el juego' />";
}

window.onload = main;