window.addEventListener("load", loadCollapse);
window.addEventListener("resize", measure);

function measure() {
	var divs = document.querySelectorAll(".movelist");
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.maxHeight = divs[i].scrollHeight + "px";
	}
}
function loadCollapse() {
	measure();
	var btns = document.querySelectorAll(".collapse");

	function collapse() {
		this.parentElement.nextElementSibling.classList.toggle("hide");
	}	
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", collapse);
	}
}