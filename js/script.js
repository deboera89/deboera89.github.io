var divArray = ['content-about', 'content-projects', 'content-contact'];
var buttonArray = ['about-me', 'about-projects', 'about-contact'];
function showDiv(id, buttonID) {
	
	divArray.forEach(hideDiv);
	buttonArray.forEach(deselectButton);
	var ele = document.getElementById(id);
	var button = document.getElementById(buttonID).setAttribute('class', 'content-button content-selected');
	ele.style.display = 'block';
	
}

function hideDiv(id) {
	document.getElementById(id).style.display = "none";
}

function deselectButton(id) {
	document.getElementById(id).setAttribute('class', 'content-button');
}