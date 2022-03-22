// T-bot modal and Slider --------------------------------------------

var tmodal = document.getElementById("t-botModal");
var tbtn = document.getElementById("t-botBtn");
var tspan = document.getElementsByClassName("t-bot-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
tbtn.onclick = function() {
  tmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
tspan.onclick = function() {
  tmodal.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("t-botSlides");
  var dots = document.getElementsByClassName("t-bot-dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// gym Modal & Slider ------------------------------------------

var cmodal = document.getElementById("gymModal");
var cbtn = document.getElementById("gymBtn");
var cspan = document.getElementsByClassName("gym-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
cbtn.onclick = function() {
  cmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cspan.onclick = function() {
  cmodal.style.display = "none";
}

var cslideIndex = 1;
showSlidesG(cslideIndex);

function plusSlidesG(n) {
  showSlidesG(cslideIndex += n);
}

function currentSlideG(n) {
  showSlidesG(cslideIndex = n);
}

function showSlidesG(n) {
  var i;
  var slides = document.getElementsByClassName("gymSlides");
  var dots = document.getElementsByClassName("gym-dot");
  if (n > slides.length) {cslideIndex = 1}
    if (n < 1) {cslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[cslideIndex-1].style.display = "block";
  dots[cslideIndex-1].className += " active";
}

// moto Modal & Slider ------------------------------------------

var simodal = document.getElementById("motoModal");
var sibtn = document.getElementById("motoBtn");
var sispan = document.getElementsByClassName("moto-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
sibtn.onclick = function() {
  simodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sispan.onclick = function() {
  simodal.style.display = "none";
}


var sislideIndex = 1;
showSlidesM(sislideIndex);

function plusSlidesM(n) {
  showSlidesM(sislideIndex += n);
}

function currentSlideM(n) {
  showSlidesM(sislideIndex = n);
}

function showSlidesM(n) {
  var i;
  var slides = document.getElementsByClassName("motoSlides");
  var dots = document.getElementsByClassName("moto-dot");
  if (n > slides.length) {sislideIndex = 1}
    if (n < 1) {sislideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[sislideIndex-1].style.display = "block";
  dots[sislideIndex-1].className += " active";
}

// Events Modal & Slider ------------------------------------------

var emodal = document.getElementById("eventsModal");
var ebtn = document.getElementById("eventsBtn");
var espan = document.getElementsByClassName("events-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
ebtn.onclick = function() {
  emodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
espan.onclick = function() {
  emodal.style.display = "none";
}

var eslideIndex = 1;
showSlidesE(eslideIndex);

function plusSlidesE(n) {
  showSlidesE(eslideIndex += n);
}

function currentSlideE(n) {
  showSlidesE(eslideIndex = n);
}

function showSlidesE(n) {
  var i;
  var slides = document.getElementsByClassName("eventsSlides");
  var dots = document.getElementsByClassName("events-dot");
  if (n > slides.length) {eslideIndex = 1}
    if (n < 1) {eslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[eslideIndex-1].style.display = "block";
  dots[eslideIndex-1].className += " active";
}

// Tic Modal & Slider ------------------------------------------

var amodal = document.getElementById("ticModal");
var abtn = document.getElementById("ticBtn");
var aspan = document.getElementsByClassName("tic-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
abtn.onclick = function() {
  amodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
aspan.onclick = function() {
  amodal.style.display = "none";
}

var aslideIndex = 1;
showSlidesA(aslideIndex);

function plusSlidesA(n) {
  showSlidesA(aslideIndex += n);
}

function currentSlideA(n) {
  showSlidesA(aslideIndex = n);
}

function showSlidesA(n) {
  var i;
  var slides = document.getElementsByClassName("ticSlides");
  var dots = document.getElementsByClassName("tic-dot");
  if (n > slides.length) {aslideIndex = 1}
    if (n < 1) {aslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[aslideIndex-1].style.display = "block";
  dots[aslideIndex-1].className += " active";
}

// Maga Modal & Slider ------------------------------------------

var gmodal = document.getElementById("magaModal");
var gbtn = document.getElementById("magaBtn");
var gspan = document.getElementsByClassName("maga-close")[0];

// Get the modal

// When the user clicks on the button, open the modal
gbtn.onclick = function() {
  gmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
gspan.onclick = function() {
  gmodal.style.display = "none";
}

var gslideIndex = 1;
showSlidesMA(gslideIndex);

function plusSlidesMA(n) {
  showSlidesMA(gslideIndex += n);
}

function currentSlideMA(n) {
  showSlidesMA(gslideIndex = n);
}

function showSlidesMA(n) {
  var i;
  var slides = document.getElementsByClassName("magaSlides");
  var dots = document.getElementsByClassName("maga-dot");
  if (n > slides.length) {gslideIndex = 1}
    if (n < 1) {gslideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[gslideIndex-1].style.display = "block";
  dots[gslideIndex-1].className += " active";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == tmodal) {
    tmodal.style.display = "none";
  } else if (event.target == cmodal){
    cmodal.style.display = "none";
  } else if (event.target == simodal) {
    simodal.style.display = "none";
  } else if (event.target == emodal) {
    emodal.style.display = "none";
  } else if (event.target == ticmodal) {
    ticmodal.style.display = "none";
  } else if (event.target == magamodal) {
    magamodal.style.display = "none";
  }
}
