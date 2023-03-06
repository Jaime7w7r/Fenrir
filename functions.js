var AnimalImages = [
  "Media/Images/AnimalImages/Ardilla.png",
  "Media/Images/AnimalImages/Ciervo.png",
  "Media/Images/AnimalImages/Lobo.png",
  "Media/Images/AnimalImages/Zorro.png",
  "Media/Images/AnimalImages/Pajaro.png",
  "Media/Images/AnimalImages/Oso.png",
  "Media/Images/AnimalImages/Buho.png",
];
var Nombres = [
  "Ardilla",
  "Venado",
  "Lobo",
  "Zorro",
  "PajaroCarpintero",
  "Oso",
  "Buho",
];
const coronometro = document.getElementById("Crono");
const PuntContainer = document.getElementById("Puntuacion");
let horas = 0;
let minutos = 0;
let segundos = 0;

var PuntAnteriores = 0;

var Punt = 0;
var Num;
var ImageSrc = [];
var ImageId = [];
var AnimalLabel = [];

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var Id = urlParams.get('id');

var Users = localStorage.getItem("Users");
Users = JSON.parse(Users);




function Load() {
  var indices = generateUniqueRandomNumbers(
    0,
    AnimalImages.length - 1,
    AnimalImages.length
  );
  for (var j = 0; j < AnimalImages.length; j++) {
    var index = indices[j];
    AnimalLabel[j] = Nombres[index];
  }
  CreateLabels(AnimalLabel);
  var Images = document.querySelectorAll("#AnimalLabels > img");

  for (var i = 0; i < Images.length; i++) {
    console.log("Jola");
    var index = indices[i];
    ImageSrc[i] = AnimalImages[index];
    ImageId[i] = Nombres[index];
    AnimalLabel[i] = Nombres[index];
    Images[i].addEventListener("dragstart", Dragged, false);
    //Images[i].addEventListener("dragend", Dropped, false);
  }

  CreateCanvas(ImageId, ImageSrc);
}

function CreateLabels(AnimalLabel) {
  const LabelsContainer = document.getElementById("AnimalLabels");
  for (let i = 0; i < AnimalLabel.length; i++) {
    const Label = document.createElement("img");
    Label.src = "Media/Images/AnimalLabels/" + AnimalLabel[i] + ".png";
    Label.id = AnimalLabel[i];
    Label.className = "Drageable";
    LabelsContainer.appendChild(Label);
  }
}
function UpdateCron() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }
  const tiempo = `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

  coronometro.innerHTML = tiempo;
}
let offsetX, offsetY;
function Enter(e) {
  console.log("Soy el evento dragenter");
  e.preventDefault();
  offsetX = e.offsetX;
  offsetY = e.offsetY;
}

function Over(e) {
  console.log("Soy el evento dragOver");
  e.preventDefault();
}

/*function Dropped(e) {
  elemento = e.target;
  console.log(elemento);

}*/

function Dragged(e) {
  elemento = e.target;
  e.dataTransfer.setData("Text", elemento.getAttribute("id"));
  e.dataTransfer.setDragImage(e.target, 0, 0);
}
var Ac = 0;
function Droped(e, Drop) {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  var elemento = document.getElementById(id);

  if ("C" + elemento.id == Drop.id) {
    const audio = document.getElementById(elemento.id + "Sound");
    var posx = (Drop.width - elemento.width) / 4;
    var posy = Drop.height - elemento.clientHeight - 10;
    elemento.style.height = 57;
    elemento.style.visibility = "hidden";
    var Frame = Drop.getContext("2d");
    Frame.drawImage(elemento, posx, posy - 40);
    Punt += 50;
    Ac++;
    const audio1 = document.getElementById("Acierto");
    audio1.play();
    PuntContainer.innerHTML = Punt;
    audio.play();
    console.log(Ac);
    if (Ac >= 7) {

      setTimeout(function () {
        UpdateLocalStorage();
        window.location.assign('Felicitacion.html?id=' + Id);
      }, 5000);

    }
  } else {
    const audio = document.getElementById("ErrorSound");
    audio.play();
    Punt -= 25;
    PuntContainer.innerHTML = Punt;
    elemento.style.visibility = "initial";
  }
}

function CreateCanvas(CanvaId, ImageSrc) {
  for (let i = 0; i < CanvaId.length; i++) {
    const canvas = document.createElement("canvas");
    canvas.width = 250;
    canvas.height = 250;
    canvas.id = "C" + CanvaId[i];
    if (CanvaId[i] == "Buho" || CanvaId[i] == "PajaroCarpintero") {
      canvas.className = "Volador";
    } else {
      canvas.className = "Terrestre";
    }

    const container = document.getElementById("AnimalContainer");
    container.appendChild(canvas);

    const image = new Image();
    image.onload = function () {
      const Drop = document.getElementById("C" + CanvaId[i]);
      const Frame = Drop.getContext("2d");
      Frame.drawImage(image, 0, 0);
    };
    image.src = ImageSrc[i];
    const Drop = document.getElementById("C" + CanvaId[i]);
    var Y = Drop.getBoundingClientRect().top;
    var Top = Y - 680;
    console.log(Drop.id + " " + Y + " Top:" + Top);
    if (Drop.className == "Terrestre") {
      if (Drop.id == "CArdilla") {
        Drop.style.top = "700px";
      } else {
        Drop.style.top = "630px";
      }
    } else {
      Drop.style.top = "240px";
    }

    const Frame = Drop.getContext("2d");
    Drop.addEventListener("dragenter", Enter, false);
    console.log(Drop.offsetLeft);
    Drop.addEventListener("dragover", Over, false);
    Drop.addEventListener(
      "drop",
      function (e) {
        Droped(e, Drop);
      },
      false
    );
  }
}
function generateUniqueRandomNumbers(min, max, count) {
  if (max - min + 1 < count) {
    throw new Error(
      "No se pueden generar suficientes números aleatorios únicos en el rango especificado."
    );
  }

  const allNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  const uniqueNumbers = [];

  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * allNumbers.length);
    const number = allNumbers[index];
    uniqueNumbers.push(number);
    allNumbers.splice(index, 1);
  }

  return uniqueNumbers;
}

function UpdateLocalStorage() {
  var Usuario = JSON.parse(Users[Id]);
  var tiemponow=horas + ":" + minutos + ":" + segundos;
  if(Usuario.Tiempo == 0){
    Usuario.Tiempo=1;
  }
  const Tiempos=[tiemponow, Usuario.Tiempo];
  Tiempos.sort();
  var User = JSON.stringify({
    Nombre: Usuario.Nombre,
    Tiempo: Tiempos[0],
    Puntos: Punt

  });
  Users[Id] = (User);
  localStorage.setItem("Users", JSON.stringify(Users));
}

function Regresar(){
  window.location.replace('index.html')
}


window.addEventListener("load", Load, false);
setInterval(UpdateCron, 1000);
