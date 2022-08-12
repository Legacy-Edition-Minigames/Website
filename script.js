var easterEggClicks = 0;

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