/// All Variables are here..
var todo = document.getElementById("todo")
var list = document.getElementById("list")

/// To Add Todo tasks 
function addTodo() {
    if (todo.value == "") {
        alert("Fill The Inputs");
        return;
    } else {
        // <img id = "img" onclick = "imgChange()" src="./img/download.png" alt=""></img>
        list.innerHTML += ` <li>
        <input type = 'text' id = "inputValue" value ='${todo.value}' disabled /> 
        <button onclick = 'editTodo(event)' type="button" class=" btn btn-outline-info"> Edit Todo</button> 
        <button onclick = 'deleteTodo(event)' type="button" class="btn btn-outline-dark">Delete Todo </button>
        </li>`;
    }
    todo.value = "";
    addData();
}
/// To add todo tasks by enter
function addTodoByEnter(e) {
    if (e.keyCode === 13) {
        addTodo();
    }
}

/// to delete todo tasks in localStorage too 
function deleteTodo(e) {
    e.target.parentNode.remove();
    addData();
}

/// to edit todo tasks
function editTodo(e) {
    var input = e.target.parentNode.childNodes[1];
    console.log(input)
    input.disabled = false;
    input.focus();
    e.target.innerHTML = "Updated";
    e.target.setAttribute("onclick", 'updateTodo(event)')
}

/// to update edit button
function updateTodo(e) {
    var input = e.target.parentNode.childNodes[1];
    input.disabled = true;
    e.target.innerHTML = "Edited";
    input.focus();
}


/// to delete all todo tasks 
function deleteAll(e) {
    list.innerHTML = "";
}


/// to add data in localStorage
function addData() {
    localStorage.setItem("data", list.innerHTML)
}


/// to remove data from localStorage
function removeData() {
    localStorage.removeItemItem("data", list.innerHTML)
}


/// to show todo tasks on screen
function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();

function imgChange() {
    if (document.getElementById("img").src = "./img/download.png") {
        document.getElementById("img").src = "./img/check.webp";
    }
}