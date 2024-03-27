var easterEggClicks = 0;
var panoramaPosition = 0;

// Panorama Movement
if (localStorage.panoramaMovement == undefined) {
	localStorage.panoramaMovement = "true";
} else if (localStorage.panoramaMovement == "false") {
	document.body.style.animation = "none";
}

function triggerPanoramaMovement() {
	if (localStorage.panoramaMovement == "false") {
		document.body.style.animation = "";
		localStorage.panoramaMovement = "true";
	} else {
		document.body.style.animation = "none";
		localStorage.panoramaMovement = "false";
	}
}

// Seasonal events
var overide = false;
var d = new Date();
var curr_month = d.getMonth() + 1;
var curr_day = d.getDate();
let halloweenModeCheck = false;
let festiveModeCheck = false;
let aprilfoolsModeCheck = false;
if (curr_month == 10) { // halloween
	halloweenModeCheck = true;
}
if (curr_month == 12) { // festive
	festiveModeCheck = true;
}
if (curr_month == 4 && curr_day == 1) { // april fools
    aprilfoolsModeCheck = true;
}

let menuMusic = "music"
// Music
function easterEgg() {
	if (easterEggClicks == 2) {
		document.getElementById("click").play();
		easterEggClicks++;
		menuMusic = "music"
		if (halloweenModeCheck == true) {
			menuMusic = "musicHalloween"
		}
		if (festiveModeCheck == true) {
			menuMusic = "musicFestive"
		}
		if (aprilfoolsModeCheck == true) {
			menuMusic = "musicAprilFools"
		}
		document.getElementById(menuMusic).loop = true;
		document.getElementById(menuMusic).play();
		document.getElementById("easter-egg").setAttribute("style","color: #00aa00");
	} else {
		if (easterEggClicks < 3) {
			if (aprilfoolsModeCheck == true) {
				document.getElementById("clickAprilFools").play();
			} else {
				document.getElementById("click").play();
			}
		}
		easterEggClicks++;
	}
}

// Button Sounds
var elements = document.getElementsByClassName("minecraft-button");
if (elements.length > 0) {
  for (var i = 0; i < elements.length; i++) {
    var link = elements[i].getAttribute("href");
    elements[i].setAttribute("onclick", "clickSound(); setTimeout(function timeout() { window.location = '" + link + "'; }, 100);");
    elements[i].setAttribute("onmouseover", "hoverSound()");
    elements[i].removeAttribute("href");
  }
}

function clickSound() {
  var clickSound = new Audio("/assets/click.ogg");
  var terrariaClickSound = new Audio("/assets/aprilfools/click.ogg");
  if (aprilfoolsModeCheck != true) {
	clickSound.play();
  } else if (aprilfoolsModeCheck == true) {
	terrariaClickSound.play();
  }
}


function hoverSound() {
  var hoverSound = new Audio("/assets/hover.ogg");
  var terrariaHoverSound = new Audio("/assets/aprilfools/hover.ogg");
  if (aprilfoolsModeCheck != true) {
	hoverSound.play();
  } else if (aprilfoolsModeCheck == true) {
	terrariaHoverSound.play();
  }
}

var baseUrl = window.location.protocol + "//" + window.location.host;
const themeStyle = document.querySelectorAll('.theme');

function halloweenMode() {
	themeStyle.href = baseUrl + 'style-halloween.css';
}

function festiveMode() {
	themeStyle.href = baseUrl + 'style-festive.css';
}

function aprilfoolsMode() {
	themeStyle.href = baseUrl + 'style-aprilfools.css';
}

if (halloweenModeCheck == true && overide == false) {
	halloweenMode();
}

if (festiveModeCheck == true && overide == false) {
	festiveMode();
}
if (aprilfoolsModeCheck == true && overide == false) {
	aprilfoolsMode();
}

