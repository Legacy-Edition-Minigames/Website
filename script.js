var easterEggClicks = 0;
var panoramaPosition = 0;

///Seasonal events
var d = new Date();
var curr_month = d.getMonth() + 1;
var curr_day = d.getDate(); 
//Halloween
if (curr_month == 10) {
	var halloweenMode = true
}
//April Fools
if (curr_month == 4 && curr_day == 1) {
	var aprilfoolsMode = true
}

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
		var menuMusic = "music"
		if (halloweenMode == true) {
			var menuMusic = "musicHalloween"
		}
		if (aprilfoolsMode == true) {
			var menuMusic = "musicAprilFools"
		}
		document.getElementById(menuMusic).loop = true;
		document.getElementById(menuMusic).play();
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

function triggerPanoramaMovement() {
	if (localStorage.panoramaMovement == "false") {
		document.body.style.animation = "";
		localStorage.panoramaMovement = "true";
	} else {
		document.body.style.animation = "none";
		localStorage.panoramaMovement = "false";
	}
}

var baseUrl = window.location.protocol + "//" + window.location.host;

if (halloweenMode == true) {
	document.body.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-Panorama.png)';

	//Panorama toggle button
	const regularPanButtons = document.querySelectorAll('.panorama-button');
	regularPanButtons[0].style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-panorama.png)';
	regularPanButtons.forEach(button => {
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-panorama-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-panorama.png)';
	  });
	});

	//Minecraft button
	const minecraftbuttons = document.querySelectorAll('.minecraft-button');
	minecraftbuttons.forEach(button => {
	  button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-minecraft.png)';
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-minecraft-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/halloween/h-btn-minecraft.png)';
	  });
	});

	// "GUI" boxes
	const guibox = document.querySelectorAll('.guibox');
    guibox.forEach(box => {
      box.style.borderImage = 'url(' + baseUrl + '/assets/halloween/h-guimenu.png)';
            box.style.borderImageSlice ='128 128 fill';
            box.style.borderImageWidth = '64px';
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
