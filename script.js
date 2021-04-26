//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-list');
const errorText = document.querySelector('.error');

//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterList)

//Functions

function addTodo(event) {
    //prevent 
    event.preventDefault();
    if (todoInput.value === '') {
        errorText.style.display = "flex"; 
        setTimeout(function(){
            errorText.style.display = "none";   
        }, 5000);
    } else {
        //Todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //li of text
        const todoItem = document.createElement('li');
        todoItem.innerText = todoInput.value;
        todoItem.classList.add('todo-item');
        todoDiv.appendChild(todoItem);
        //comleted 
        const compBtn = document.createElement('button');
        compBtn.innerHTML = '<i class="fas fa-check"></i>';
        compBtn.classList.add('completed');
        todoDiv.appendChild(compBtn);
        //Trash btn
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        trashBtn.classList.add('trash');
        todoDiv.appendChild(trashBtn);
        ///////////////////////////////////////////////////
        todoList.appendChild(todoDiv);
        //////////////////////////////////////////////////
        //clear
        todoInput.value = '';
    }
};



//Delete Check
function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash') {
        const todo = item.parentElement;
        //animation 
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function () {
            item.parentElement.remove();
        });
    };

    //Check
    if (item.classList[0] === 'completed') {
        item.parentElement.classList.toggle('complete');
    };
};

//fliter

function filterList(e) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {

        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex'
                break;
            case "completed":
                if (todo.classList.contains('complete')) {
                    todo.style.display = 'flex';
                    break;
                } else {
                    todo.style.display = 'none';
                    break;
                }
                case "uncompleted":
                    if (!todo.classList.contains('complete')) {
                        todo.style.display = 'flex';
                        break;
                    } else {
                        todo.style.display = 'none';
                        break;
                    }
        };
    });
}