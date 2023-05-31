var easterEggClicks = 0;
var panoramaPosition = 0;

var elements = document.getElementsByClassName("minecraft-button");
if (elements.length > 0) {
  for (var i = 0; i < elements.length; i++) {
    var link = elements[i].getAttribute("href");
    elements[i].setAttribute("onclick", "clickSound(); setTimeout(function timeout() { window.location = '" + link + "'; }, 100);");
    elements[i].setAttribute("onmouseover", "hoverSound()");
    elements[i].removeAttribute("href");
  }
}


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
  var clickSound = new Audio("/assets/click.ogg");
  clickSound.play();
}


function hoverSound() {
  var hoverSound = new Audio("/assets/hover.ogg");
  hoverSound.play();
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

var d = new Date();
var curr_month = d.getMonth() + 1;
if (curr_month == 10) {
	document.body.style.backgroundImage = 'url(assets/h-Panorama.png)';
	const regularPanButtons = document.querySelectorAll('.panorama-button');

	regularPanButtons[0].style.backgroundImage = 'url(assets/h-btn-panorama.png)';

	regularPanButtons.forEach(button => {
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(assets/h-btn-panorama-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(assets/h-btn-panorama.png)';
	  });
	});
}
