function setLang(lang="") {
	var lineCont = document.querySelectorAll(".bubble_cont");
	if (lang) {
		for (var k=0; k<lineCont.length; k++) {
			var lines = lineCont[k].querySelectorAll(".line>span");
			for (var i=0; i<lines.length; i++) {
				var line = lines[i].dataset[lang];
				lines[i].innerHTML = line;
				if (lines[i].dataset.bubble) {
					document.getElementById(lines[i].dataset.bubble).innerHTML = line;
				}
			}
			lineCont[k].hidden = false;
		}
	} else {
		for (var k=0; k<lineCont.length; k++) {
			lineCont[k].hidden = true;
		}
	}
}