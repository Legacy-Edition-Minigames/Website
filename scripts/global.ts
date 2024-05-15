document.addEventListener('DOMContentLoaded', () => {
	const panoramaButton = document.querySelector('.panorama-button');

	panoramaButton!.addEventListener('click', () => {
            triggerPanoramaMovement();
			clickSound();
    });

	panoramaButton!.addEventListener('pointerover', () => {
		hoverSound();
	});

    const buttons = document.querySelectorAll('.minecraft-button');

    Array.from(buttons).forEach(button => {
        button.addEventListener('click', () => {
            clickSound();
        });
        button.addEventListener('pointerover', () => {
            hoverSound();
        });
    });
})

var easterEggClicks = 0;

// Panorama Movement
if (localStorage['panoramaMovement'] === undefined) {
    localStorage['panoramaMovement'] = "true";
} else if (localStorage['panoramaMovement'] === "false") {
    document.body.style.animation = "none";
}



export function triggerPanoramaMovement() {
	if (localStorage['panoramaMovement'] == "false") {
		document.body.style.animation = "";
		localStorage['panoramaMovement'] = "true";
	} else {
		document.body.style.animation = "none";
		localStorage['panoramaMovement'] = "false";
	}
}

// Seasonal events
var overide;
var d = new Date();
var curr_month = d.getMonth() + 1;
var curr_day = d.getDate();
var halloweenModeCheck: boolean = false;
var festiveModeCheck: boolean = false;
var aprilfoolsModeCheck: boolean = false;
if (curr_month == 10 && overide != true) { // halloween
	halloweenModeCheck = true;
}
if (curr_month == 12 && overide != true) { // festive
	festiveModeCheck = true;
}
if (curr_month == 4 && curr_day == 1 && overide != true) { // april fools
    aprilfoolsModeCheck = true;
}

let menuMusic = "music"
// Music
function easterEgg() {
	const click = document.querySelector("#click") as HTMLMediaElement;
	if (easterEggClicks == 2) {
		click!.play();
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
		const menuMusicElement: HTMLMediaElement = (document.getElementById(menuMusic) as HTMLMediaElement)!;
		(menuMusicElement).loop = true;
		menuMusicElement.play();
		document.querySelector("#easter-egg")!.setAttribute("style","color: #00aa00");
	} else {
		if (easterEggClicks < 3) {
			if (aprilfoolsModeCheck == true) {
				(document.querySelector("#clickAprilFools") as HTMLMediaElement).play();
			} else {
				click.play();
			}
		}
		easterEggClicks++;
	}
}

// Button Sounds
var elements = document.getElementsByClassName("minecraft-button");
	for (const element of elements) {
		// less janky way of doing this ^
		var link = element!.getAttribute("href");
		if (element!.id !== "return") {
			element!.setAttribute("onclick", "setTimeout(function timeout() { window.location = '" + link + "'; }, 100);");
			element!.removeAttribute("href");
	}
}

export function clickSound() {
  var clickSound = new Audio("/assets/click.ogg");
  var terrariaClickSound = new Audio("/assets/aprilfools/click.ogg");
  if (aprilfoolsModeCheck != true) {
	clickSound.play();
  } else if (aprilfoolsModeCheck == true) {
	terrariaClickSound.play();
  }
}


export function hoverSound() {
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
	themeStyle.forEach(theme  => {
		(theme as HTMLAnchorElement).href = baseUrl + '/css/style-halloween.css'; });
}

function festiveMode() {
	themeStyle.forEach(theme => {
		(theme as HTMLAnchorElement).href = baseUrl + '/css/style-festive.css';});
}

function aprilfoolsMode() {
	themeStyle.forEach(theme => {
		(theme as HTMLAnchorElement).href = baseUrl + '/css/style-aprilfools.css';});
}

if (halloweenModeCheck == true) {
	halloweenMode();
}

if (festiveModeCheck == true) {
	festiveMode();
}
if (aprilfoolsModeCheck == true) {
	aprilfoolsMode();
}

