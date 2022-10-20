var easterEggClicks = 0;
var panoramaPosition = 0;

if (localStorage.panoramaMovement == undefined) {
	localStorage.panoramaMovement = "true";
	panoramaPosition = panoramaPosition - 6000;
	document.body.style.backgroundPosition = panoramaPosition + "px";
} else if (localStorage.panoramaMovement == "true") {
	panoramaPosition = panoramaPosition - 6000;
	document.body.style.backgroundPosition = panoramaPosition + "px";
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

var panoramaInterval = setInterval(function() {
	if (localStorage.panoramaMovement == "true") {
		panoramaPosition = panoramaPosition - 6000;
		document.body.style.backgroundPosition = panoramaPosition + "px";
	}
}, 60000);

function triggerPanoramaMovement() {
	if (localStorage.panoramaMovement == "false") {
		localStorage.panoramaMovement = "true";
		document.body.style.transition = "";
		panoramaPosition = panoramaPosition - 6000;
		document.body.style.backgroundPosition = panoramaPosition + "px";
		var panoramaInterval = setInterval(function() {
			if (localStorage.panoramaMovement == "true") {
				panoramaPosition = panoramaPosition - 6000;
				document.body.style.backgroundPosition = panoramaPosition + "px";
			}
		}, 60000);
	} else {
		localStorage.panoramaMovement = "false";
		document.body.style.transition = "none";
		clearInterval(panoramaInterval);
	}
}