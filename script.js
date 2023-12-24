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
if (curr_month == 10) { // halloween
	var halloweenMode = true
}
if (curr_month == 12) { // festive
	var festiveMode = true
}
if (curr_month == 4 && curr_day == 1) { // april fools
	var aprilfoolsMode = true
}

// Music
function easterEgg() {
	if (easterEggClicks == 2) {
		document.getElementById("click").play();
		easterEggClicks++;
		var menuMusic = "music"
		if (halloweenMode == true) {
			var menuMusic = "musicHalloween"
		}
		if (festiveMode == true) {
			var menuMusic = "musicFestive"
		}
		if (aprilfoolsMode == true) {
			var menuMusic = "musicAprilFools"
		}
		document.getElementById(menuMusic).loop = true;
		document.getElementById(menuMusic).play();
		document.getElementById("easter-egg").setAttribute("style","color: #00aa00");
	} else {
		if (easterEggClicks < 3) {
			if (aprilfoolsMode == true) {
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
  if (aprilfoolsMode != true) {
	clickSound.play();
  } else if (aprilfoolsMode == true) {
	terrariaClickSound.play();
  }
}


function hoverSound() {
  var hoverSound = new Audio("/assets/hover.ogg");
  var terrariaHoverSound = new Audio("/assets/aprilfools/hover.ogg");
  if (aprilfoolsMode != true) {
	hoverSound.play();
  } else if (aprilfoolsMode == true) {
	terrariaHoverSound.play();
  }
}

var baseUrl = window.location.protocol + "//" + window.location.host;

if (halloweenMode == true && overide == false) {
	halloweenMode();
}

if (festiveMode == true && overide == false) {
	festiveMode();
}
if (aprilfoolsMode == true && overide == false) {
	aprilfoolsMode();
}

function halloweenMode() {
	document.body.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-Panorama.png)'; // panorama

	const regularPanButtons = document.querySelectorAll('.panorama-button'); // panorama button
	regularPanButtons[0].style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-panorama.png)';
	regularPanButtons.forEach(button => {
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-panorama-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-panorama.png)';
	  });
	});
	
	const minecraftbuttons = document.querySelectorAll('.minecraft-button'); // regular buttons
	minecraftbuttons.forEach(button => {
	  button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-minecraft.png)';
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-minecraft-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-minecraft.png)';
	  });
	});
	
	const guibox = document.querySelectorAll('.guibox'); // gui boxes
    	guibox.forEach(box => {
      	box.style.borderImage = 'url(' + baseUrl + '/assets/halloween/h-guimenu.png)';
            box.style.borderImageSlice ='128 128 fill';
            box.style.borderImageWidth = '64px';
      	});
}

function festiveMode() {
	document.body.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-Panorama.png)'; // panorama
	
	const regularPanButtons = document.querySelectorAll('.panorama-button'); // panorama button
	regularPanButtons[0].style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-panorama.png)';
	regularPanButtons.forEach(button => {
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-panorama-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-panorama.png)';
	  });
	});
	
	const minecraftbuttons = document.querySelectorAll('.minecraft-button'); // regular buttons
	minecraftbuttons.forEach(button => {
	  button.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-minecraft.png)';
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-minecraft-hover.png)';
		button.style.color = '#FFFFFF'
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-minecraft.png)';
		button.style.color = '#AEC8D9'
	  });
	  button.style.color = '#AEC8D9'
	});
	
	const guibox = document.querySelectorAll('.guibox'); // gui boxes
    	guibox.forEach(box => {
      	box.style.borderImage = 'url(' + baseUrl + '/assets/festive/f-guimenu.png)';
            box.style.borderImageSlice ='128 128 fill';
            box.style.borderImageWidth = '64px';
	    box.style.color = '#AEC8D9'
      	});
}

function aprilfoolsMode() {
	document.body.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-Panorama.png)'; // panorama
	
	const blur = document.querySelectorAll('.backdrop-blur'); // blur
	blur[0].style.backdropFilter = 'blur(0px)';

	const logo = document.querySelectorAll('.logo'); // logo
	logo[0].style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-Logo.png)';

	const regularPanButtons = document.querySelectorAll('.panorama-button'); // panorama button
	regularPanButtons[0].style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-panorama.png)';
	regularPanButtons.forEach(button => {
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-panorama-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-panorama.png)';
	  });
	});

	const minecraftbuttons = document.querySelectorAll('.minecraft-button'); // regular button
	minecraftbuttons.forEach(button => {
	  button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-minecraft.png)';
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-minecraft-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-minecraft.png)';
	  });
	});
	
	const guibox = document.querySelectorAll('.guibox'); // gui boxes
    	guibox.forEach(box => {
      	box.style.borderImage = 'url(' + baseUrl + '/assets/aprilfools/a-guimenu.png)';
            box.style.borderImageSlice ='128 128 fill';
            box.style.borderImageWidth = '64px';
			box.style.fontFamily = "'Terraria'";
			box.style.fontSize = 'large';
			box.style.color = 'white';
      	});
}
if (aprilfoolsMode == true) {
	document.body.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-Panorama.png)';

	//Blur
	const blur = document.querySelectorAll('.backdrop-blur');
	blur[0].style.backdropFilter = 'blur(0px)';

	//Logo
	const logo = document.querySelectorAll('.logo');
	logo[0].style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-Logo.png)';

	//Panorama toggle button
	const regularPanButtons = document.querySelectorAll('.panorama-button');
	regularPanButtons[0].style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-panorama.png)';
	regularPanButtons.forEach(button => {
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-panorama-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-panorama.png)';
	  });
	});

	//Minecraft button
	const minecraftbuttons = document.querySelectorAll('.minecraft-button');
	minecraftbuttons.forEach(button => {
	  button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-minecraft.png)';
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-minecraft-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/aprilfools/a-btn-minecraft.png)';
	  });
	});

	// "GUI" boxes
	const guibox = document.querySelectorAll('.guibox');
    guibox.forEach(box => {
      box.style.borderImage = 'url(' + baseUrl + '/assets/aprilfools/a-guimenu.png)';
            box.style.borderImageSlice ='128 128 fill';
            box.style.borderImageWidth = '64px';
			box.style.fontFamily = "'Terraria'";
			box.style.fontSize = 'large';
			box.style.color = 'white';
      });
}
