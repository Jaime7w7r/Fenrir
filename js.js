var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var title = document.querySelector(".title");
title.classList.add("animated", "bounceInDown");

var logo = document.querySelector(".logo");
logo.classList.add("animated", "bounceInRight");

document.getElementById("startBtn").addEventListener("click", function() {
    window.location.href = "pag2.html";
  });
  