// alert("test");

var form = document.getElementById('toDo_form');		//Line 3 gets a reference to the "toDo" form element
var list = document.getElementById('toDo_list');

// single letter variables are bad!
var addItem = function(item) {
	//console.log(t.value, a.value, r.value);
	list.innerHTML += "<li>" + item.value + "</li>"
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