var list = document.getElementById("list")
function addTodo() {
    var todo = document.getElementById("todo")

    // console.log(todo.value)
    list.innerHTML +=` <li>
    <input type = 'text' value ='${todo.value}' disabled /> 
    <button onclick = 'editTodo(event)' type="button" class=" btn btn-outline-info"> Edit Todo</button> 
    <button onclick = 'deleteTodo(event)' type="button" class="btn btn-outline-dark">Delete Todo </button>
     </li>`;
     todo.value = "";
     for (let i = 0; i < todo.value.length; i++) {
        localStorage.setItem("todoItems", JSON.stringify(todo.value[i]))
        
        
    }
    if (todo.value == " ") {
        alert("Fill The Inputs");
        return;
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