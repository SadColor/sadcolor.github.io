var btns = document.getElementsByClassName("collapse");

function collapse() {
	this.nextElementSibling.classList.toggle("hide");
}

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", collapse);
}

