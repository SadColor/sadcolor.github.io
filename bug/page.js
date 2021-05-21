window.addEventListener("load", loadCollapse);
window.addEventListener("resize", measure);

function measure() {
	
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.maxHeight = divs[i].scrollHeight + "px";
	}
	headSp.style.paddingBottom = headC.scrollHeight + "px";
}
function loadCollapse() {
	var divs = document.querySelectorAll(".movelist");
	var headSp = document.querySelector("#headspace");
	var headC = document.querySelector("#headcont");
	measure();
	var btns = document.querySelectorAll(".collapse");

	function collapse() {
		this.parentElement.nextElementSibling.classList.toggle("hide");
	}	
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", collapse);
	}
}