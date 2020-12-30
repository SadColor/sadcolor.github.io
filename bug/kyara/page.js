window.addEventListener("load", loadCollapse);

function loadCollapse() {
	var btns = document.querySelectorAll(".collapse");
	var divs = document.querySelectorAll(".movelist");

	function collapse() {
		this.parentElement.nextElementSibling.classList.toggle("hide");
	}

	for (var i = 0; i < divs.length; i++) {
		divs[i].style.maxHeight = divs[i].clientHeight + "px";
	}
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", collapse);
	}
}