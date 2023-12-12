// JavaScript Document
console.log("hi");

var toggleButton = document.querySelector(".toggleButton");
var nav = document.querySelector("header nav");

toggleButton.onclick = toggleMenu;

function toggleMenu() {
  nav.classList.toggle("toonMenu");

  var buttonImg = toggleButton.querySelector("img");

  // Controleer of nav de klasse "toonMenu" heeft
  if (nav.classList.contains("toonMenu")) {
    // Menu is geopend, verander buttonImg naar sluit-icoon
    buttonImg.src = "./images/hamburger.sluit.png";
  } else {
    // Menu is gesloten, verander buttonImg naar open-icoon
    buttonImg.src = "./images/hamburger.open.png";
  }
}

function goRight() {
  document.querySelector(".carousel").scrollLeft += 400;
}

function goLeft() {
  document.querySelector(".carousel").scrollLeft -= 400;
}

