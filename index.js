function main() {
    document.getElementById("main").innerHTML = "<div id='pag2'><div class='container'><div><h1 style='float: left;'>Fenrir</h1><img src='media/ico.ico'></div><h1 class='title animated bounceInLeft'>Bienvenidos al Juego de Aventuras</h1><p class='subtitle animated slideInRight'>Este juego es para niños y está lleno de aventuras y desafíos.</p><button id='button1' class='btn btn-primary' onclick='cap()'>Capturar alias</button><div class='canvas-container'><canvas id='gameCanvas'></canvas></div><img src='media/uaa.png' alt='logo' class='logo' width='10%'></div>";
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
    document.getElementById("main").innerHTML = "<div class='ejemplo'><br><label for='nombre'> Alias: </label><input type='text' id='nombre' /><input type='button' id='boton' onclick='verificar()' value='Verificar datos' /><p id='datos'> Pulsa para ver tu nombre y tu password. </p></div>"
}

function alta(i) {
    var carr = JSON.stringify(
        {
            descripcion: Name[i],
            precio: Precio[i]
        });
    carrito.push(carr);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    lista();
}

function Eliminar(i) {
    document.getElementById("liveAlertPlaceholder").innerHTML = " ";
    var carr = JSON.parse(carrito[i]);
    var descripcion = carr.descripcion;
    carrito.splice(i, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    lista();
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<div class="alert alert-succes alert-dismissible" role="alert">' + carr.descripcion + ' Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    alertPlaceholder.append(wrapper);
}

function verificar() {
    if (localStorage.nombre != undefined) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre;
    }
    else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}

window.onload = main;