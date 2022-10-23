var easterEggClicks = 0;
var panoramaPosition = 0;

if (localStorage.panoramaMovement == undefined) {
	localStorage.panoramaMovement = "true";
} else if (localStorage.panoramaMovement == "false") {
	document.body.style.animation = "none";
}

function easterEgg() {
	if (easterEggClicks == 2) {
		document.getElementById("click").play();
		easterEggClicks++;
		document.getElementById("music").loop = true;
		document.getElementById("music").play();
		document.getElementById("easter-egg").setAttribute("style","color: #00aa00");
	} else {
		if (easterEggClicks < 3) {
			document.getElementById("click").play();
		}
		easterEggClicks++;
	}
}

function clickSound() {
	document.getElementById("click").play();
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