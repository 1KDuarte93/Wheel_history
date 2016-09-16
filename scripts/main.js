/*CALCULATOR*/
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
function add(){
	var one = parseFloat(numOne.value) || 0; /*NaN*/
	var two = parseFloat(numTwo.value) || 0;
	addSum.innerHTML = "Result " + (one+two);
}

/*IMGS*/
var bbs = document.getElementById("bbs"); /*TEXT*/
var ronal = document.getElementById("ronal");
var oz = document.getElementById("oz");

bbs.addEventListener("click", piclink);
ronal.addEventListener("click", piclink);
oz.addEventListener("click", piclink);

function piclink(){
	var allImages = document.querySelectorAll("img");

	for (var i=0; i<allImages.length; i++){
		allImages[i].className = "hide";
	}
	var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    if (pic.className === "hide") {
      pic.className = "";
    } else {
      pic.className = "hide";
    }
}

/*EDIT*/
var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i=0; i< items.length; i++){
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem(){
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length); /*select text*/
}

function updateItem(){
	this.previousElementSibling.innerHTML = this.value; /*Previous brother*/
	this.parentNode.className = "";
}

function itemKeypress(event) { /*ENTER*/
	if(event.which === 13){
		updateItem.call(this); /*funcao updateItem*/
	}
}