var button = document.getElementById("enter");
var input = document.getElementById("userinput");

//var for crossing out items
var ul = document.querySelector("ul");

//var for deleting list item
var del= document.getElementsByClassName("delete");

for( var i=0;i<del.length;i++){
	del[i].addEventListener("click", deleteListElement);
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


//crosses out list item
function checkOff(e) {
	if (e.target.tagName == 'LI') {
		e.target.classList.toggle('done');

	}

}
	
//from StackOverFlow	
//deletes list item
function deleteListElement(){
	this.parentNode.parentNode.removeChild(this.parentNode);
  }

  var del= document.getElementsByClassName("delete");

  for( var i=0;i<del.length;i++){
	  del[i].addEventListener("click", deleteListElement);
  }






ul.addEventListener("click", checkOff);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

