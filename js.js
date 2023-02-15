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

var audio = new Audio("media/musica.mp3");
audio.loop = true;
audio.play();