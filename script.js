const taskInput = document.getElementById('toDoInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('toDoList');

    addButton.addEventListener('click' , addToDo);

    function addToDo() {
        const toDoText = toDoInput.value.trim();
        const toDoItem = document.createElement('li');
        toDoItem.textContent = toDoText;
        toDoList.appendChild(toDoItem);
        toDoInput.value = '';
        toDoItem.addEventListener('click',completeToDo);
    }

    function completeToDo() {
        const toDoItem = event.target;
        toDoItem.classList.add('completed');
        toDoItem.addEventListener('click',removeToDo);
    }

    function removeToDo() {
        const toDoItem = event.target;
        toDoItem.parentNode.removeChild(toDoItem);
    }