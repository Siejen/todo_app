// alert("test");

var form = document.getElementById('toDo_form');		//Line 3 gets a reference to the "toDo" form element
var list = document.getElementById('toDo_list');

var boxClick = function() {
	this.style.backgroundColor = "red";
}

// single letter variables are bad!
var addItem = function(item) {
	//1. Create element i.e. create a new tag
	//2. Create text node
	//3. Add the text node to the element from 1
	//4. Add the element from 1 to the list 

	var newLi = document.createElement("li");				//New element created was the "list item" tag
	var checkBoxDiv = document.createElement("div");		//New element created was the "div item" tag	
	var itemTextDiv = document.createElement("div");		//New element created was the "div item" tag
	var newItemText = document.createTextNode(item.value); 	//A new text node was created which was the results of the user input (item.value)

	checkBoxDiv.className = "todoCheckBox";
	checkBoxDiv.onclick = boxClick;


    // 1. add the two divs to the list item tag (ie newLi)
    // 2. add the text node to the itemTextDiv
    // 3. add the new list item (newLi) to the list

	itemTextDiv.appendChild(newItemText);
	newLi.appendChild(checkBoxDiv);
	newLi.appendChild(itemTextDiv);
	list.appendChild(newLi);
	
	//console.log(item.value);
	//list.innerHTML += "<li>" + item.value + "</li>"

	//document.getElementById("toDo_form").reset();
	form.reset();
}

form.onsubmit = function (event) {
	event.preventDefault();						//Helpful for forms, prevents the passing of default parameters to other pages

	var myNewItem = this.newItem; 					//this."name" - references the name and not the Id
	console.log(myNewItem.value);

	//console.log(myTitle, myAuthor, myRating);

	addItem(myNewItem);

	// console.log("before debugger");
	// debugger;
	// console.log("after debugger");
}