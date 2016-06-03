// Structure
// --------------------------
var parent = document.querySelector(".sponsored-articles");

// Event Handler
//-----------------------------

// Update Page
//-----------------------------

function createItem() {

// Step 1:  create

var child = document.createElement("li");

// Step 2: bedazzel (add content & attributes)

child.textContent="JS language is confusing!!!!";
child.classList.add('new');
child.setAttribute('src', 'img/logo.jpg');

// Step 3:  add to DOM tree 
parent.appendChild(child);


}