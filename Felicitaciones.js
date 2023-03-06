var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var Id = urlParams.get('id');
var Users = localStorage.getItem("Users");
Users=JSON.parse(Users);
const NombreContainer=document.getElementById('Nombr');
const PuntosContainer=document.getElementById('Puntos');
const TiempoContainer=document.getElementById('Tiempo');
function CargarDatos(){
    var Usuario=JSON.parse(Users[Id]);
    var Puntos="Puntuacion: "+Usuario.Puntos;
    var Tiempo="Mejor Tiempo: "+Usuario.Tiempo;
    NombreContainer.innerHTML=Usuario.Nombre;
    PuntosContainer.innerHTML=Puntos;
    TiempoContainer.innerHTML=Tiempo;
}

function Regreso(){
    window.location.assign('index2.html?id='+Id);
}

function Inicio(){
    window.location.assign('index.html');
}



window.addEventListener("load", CargarDatos,false);