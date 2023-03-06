var Users = localStorage.getItem("Users");
Users = JSON.parse(Users);

if (Users == null) Users = [];

let lista = [];
let lista2 = [];
let orden = [];

function carga() {

    var tabla = "<table><tr><th>Nombre</th><th>Tiempo</th><th>Puntos</th></tr>";
    for (var i in Users) {
        var User = JSON.parse(Users[i]);
        lista2.push(User.Tiempo);
        lista.push(User.Tiempo);
        lista.sort();
    }

    for (var i in lista) {
        for (var j in lista2) {
            if (lista[i] == lista2[j]){
                orden.push(j);
            }
        }
    }

    for (var i in orden) {
        var User = JSON.parse(Users[i]);
        tabla += "<tr><td id='i'>" + User.Nombre + "</td>";
        tabla += "<td id='i'>" + User.Tiempo + "</td>";
        tabla += "<td id='i'>" + User.Puntos + "</td>";
        tabla += "</tr>";
    }


    document.getElementById("tabla").innerHTML = tabla;

}

window.onload = carga;