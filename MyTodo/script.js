const todoInput = document.querySelector('.todo-input')
const addButton = document.querySelector('.add')
const editButton = document.querySelector('.edit')
const todoList = document.querySelector('.todo-list')

document.addEventListener('DOMContentLoaded', getTodos);
addButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteTodo)


function addTodo(todo){
    event.preventDefault()
    //div for todo
    const newDiv = document.createElement('div')
    newDiv.classList.add('todo-div')
    //li with todo
    const newTodo = document.createElement('li')
    newTodo.setAttribute('contenteditable', 'true')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    newDiv.appendChild(newTodo)
    saveLocalTodos(todoInput.value);
    //buttons
    const completeButton = document.createElement('button')
    completeButton.classList.add('complete-button')
    newDiv.appendChild(completeButton)
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    newDiv.appendChild(deleteButton)

    todoList.appendChild(newDiv)
    todoInput.value = ""
}


function deleteTodo(todo){
    const element = todo.target
    if (element.classList[0] === "delete-button"){
        const todo = element.parentElement
        removeLocalTodos(todo)
        todo.remove()
    }
    if (element.classList[0] === "complete-button"){
        const todo = element.parentElement
        todo.classList.toggle("completed")
    }
}

function saveLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        event.preventDefault()
        //div for todo
        const newDiv = document.createElement('div')
        newDiv.classList.add('todo-div')
        //li with todo
        const newTodo = document.createElement('li')
        newTodo.setAttribute('contenteditable', 'true')
        newTodo.innerText = todo
        newTodo.classList.add('todo-item')
        newDiv.appendChild(newTodo)
        //buttons
        const completeButton = document.createElement('button')
        completeButton.classList.add('complete-button')
        newDiv.appendChild(completeButton)
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-button')
        newDiv.appendChild(deleteButton)

        todoList.appendChild(newDiv)
    })
}

function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

