var list = document.getElementById("list")
function addTodo() {
    var todo = document.getElementById("todo")

    // console.log(todo.value)
    list.innerHTML +=` <li>
    <input type = 'text' value ='${todo.value}' disabled /> 
    <button onclick = 'editTodo(event)'> Edit Todo </button> 
    <button onclick = 'deleteTodo(event)'> Delete </button>
     </li>`;
    todo.value = "";
    if (todo.value == " ") {
        alert("Fill The Inputs");
    }
}
function addTodoByEnter(e) {
    if (e.keyCode === 13) {
        addTodo();
    }
    
}
function deleteTodo(e) {
    e.target.parentNode.remove()
    
}
function editTodo(e) {
var input =  e.target.parentNode.childNodes[1];
 input.disabled = false;
 input.focus();
 e.target.innerHTML = "Updated";
 e.target.setAttribute("onclick", 'updateTodo(event)')

}
function updateTodo(e) {
    var input =  e.target.parentNode.childNodes[1];
 input.disabled = true;
 e.target.innerHTML = "Edited";
 input.focus();
//  editTodo();

}
function deleteAll(e) {
    list.innerHTML = "";
}