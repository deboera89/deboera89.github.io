var divArray = ['content-about', 'content-projects', 'content-contact'];
var buttonArray = ['about-me', 'about-projects', 'about-contact'];

function pageLoad() {
	var n1 = 141 * 3;
	var n2 = 43 * 7;
	var n3 = 271 * 2;
	document.getElementById('ph').innerText = "(+61)"+n1+" "+n2+" "+n3;
}

function showDiv(id, buttonID) {
	
	divArray.forEach(hideDiv);
	buttonArray.forEach(deselectButton);
	var ele = document.getElementById(id);
	var button = document.getElementById(buttonID).setAttribute('class', 'content-button content-selected');
	ele.setAttribute('class', 'info-box');
	var contentDiv = ele.children;
	contentDiv[0].style.left = '-742px';
	animateDivEntry(contentDiv[0]);
	
}

function animateDivEntry(divToAnimate) {
  var pos = -742;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos >= 0) {
		divToAnimate.style.overflowY = "auto";
		clearInterval(id);
    } else {
      pos+=7; 
      divToAnimate.style.left = pos + "px"; 
    }
  }
}


function hideDiv(id) {
	document.getElementById(id).setAttribute('class', 'info-box display-none');
	var contentDiv = document.getElementById(id).children;
	contentDiv[0].style.overflowY = "hidden";
}

function deselectButton(id) {
	document.getElementById(id).setAttribute('class', 'content-button');
}