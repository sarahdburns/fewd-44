
// Structure
// ------------------------------------------------
var input = document.querySelector(".task-item");
var taskButton = document.querySelector("button");
var itemsList = document.querySelector(".items");
var date = document.querySelector(".date");

// Setup
//-------------------------------------------------
var todoList = {
	tasks: []
};


// Events
// ------------------------------------------------
taskButton.addEventListener("click", submitForm);
window.addEventListener("load", reloadPage);


// Event Handlers
// ------------------------------------------------

// rebuild the todo list when page is reloaded
function reloadPage(event) {

	// get the saved data from localStorage, convert to JSON,
	// save it back into the JSON object (todoList)

	todoList = JSON.parse(localStorage.getItem('todoList'))
	createTodoList();

}

function onCheckboxClick (e) {
	todoList.tasks[e.target.myID].completed = e.target.checked;
	// if(e.target.checked == true) {
	// 	todoList.tasks.splice(e.target.myID);
	// }
	localStorage.setItem('todoList', JSON.stringify(todoList));
}

function onRemoveClick(e) {
	if(e.target.checked == true) {
	todoList.tasks.splice(e.target.myID);
	}
}

// event handler for when user clicks add button
function submitForm(event) {

	var task = {
		name: input.value,
		date: date.value,
		completed: false
	};

	todoList.tasks.push(task);

	// save to local storage
	// first parameter: key name (string)
	// second parameter: JSON object 
	localStorage.setItem('todoList', JSON.stringify(todoList));

	createTodoList();

}

// Update Page
// ------------------------------------------------

// create the entire todo list from json data

function createTodoList () {
	
// clears out the list
	itemsList.innerHTML = "";

// adds ones ewn task for each item in the array
	todoList.tasks.forEach(createTask);
}

function createTask(task, index) {

	console.log(task);

	// Step 1:  create markup
	var addLi = document.createElement("li");
	var checkbox = document.createElement("input");
	var labelTask = document.createElement("label");
	var labelDate = document.createElement("label");
	
	// Step 2: bedazzle mark up:  (add attributes/content)
	checkbox.setAttribute("type", "checkbox");
	checkbox.checked = task.completed;
	checkbox.myID = index;
	checkbox.addEventListener("click", onCheckboxClick);
	labelTask.textContent = task.name;
	labelDate.textContent = "(" + task.date + ")";
	labelDate.classList.add("gray");

	// Step 3: append new elements to DOM tree 
	itemsList.appendChild(addLi);
	addLi.appendChild(checkbox);
	addLi.appendChild(labelTask);
	addLi.appendChild(labelDate);

}

