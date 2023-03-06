
function Verificar() {
    var i = 0, cont = 0, aux = 0;
    if (Users.length > 0) {
        while (i < Users.length) {
            var User = JSON.parse(Users[i]);
            i++;
            if (UserName.value == User.Nombre) {
                document.getElementById("datos").innerHTML = "<br><label>Usuario encontrado</label><br><label>Nombre: "+User.Nombre+"</label><br><label>Tiempo: "+User.Tiempo+"</label><br><label>Puntos: "+User.Puntos+"</label><br>";
                document.getElementById("btnj").innerHTML = "<button class='btnComenzar' onclick='VerSiExiste()'>Comenzar Juego</button>";
                cont++;
                aux = i;
            }
        }
        if (cont > 0) {
            Indice = aux - 1;
        } else {
            Indice = i;
            document.getElementById("datos").innerHTML = "<br><label>No hay usuario con ese nombre.</label> <br>";
            document.getElementById("btnj").innerHTML = "<button class='btnComenzar' onclick='VerSiExiste()'>Comenzar Juego</button>";
        }
    } else {

        document.getElementById("datos").innerHTML = "<br><label>No hay usuario con ese nombre.</label> <br>";
        document.getElementById("btnj").innerHTML = "<button class='btnComenzar' onclick='VerSiExiste()'>Comenzar Juego</button>";
        Indice = 0;
    }

}   