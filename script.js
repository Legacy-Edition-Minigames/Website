var easterEggClicks = 0;
var panoramaPosition = 0;

///Seasonal events
var d = new Date();
var curr_month = d.getMonth() + 1;
//Halloween
if (curr_month == 10) {
	var halloweenMode = true
}
//Festive
if (curr_month == 12) {
	var festiveMode = true
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
		if (festiveMode == true) {
			var menuMusic = "musicFestive"
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

if (festiveMode == true) {
	document.body.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-Panorama.png)';

	//Panorama toggle button
	const regularPanButtons = document.querySelectorAll('.panorama-button');
	regularPanButtons[0].style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-panorama.png)';
	regularPanButtons.forEach(button => {
	  button.addEventListener('mouseenter', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-panorama-hover.png)';
	  });

	  button.addEventListener('mouseleave', () => {
		button.style.backgroundImage = 'url(' + baseUrl + '/assets/festive/f-btn-panorama.png)';
	  });
	});

	//Minecraft button
	const minecraftbuttons = document.querySelectorAll('.minecraft-button');
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

	// "GUI" boxes
	const guibox = document.querySelectorAll('.guibox');
    guibox.forEach(box => {
      box.style.borderImage = 'url(' + baseUrl + '/assets/festive/f-guimenu.png)';
            box.style.borderImageSlice ='128 128 fill';
            box.style.borderImageWidth = '64px';
	    box.style.color = '#AEC8D9'
      });
}
