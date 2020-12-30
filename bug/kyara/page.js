var btns = document.querySelectorAll(".collapse");

function collapse() {
	this.parentElement.nextElementSibling.classList.toggle("hide");
}

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", collapse);
}

