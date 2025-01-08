const todoList = [{
        name: 'dinner',
        dueDate: '2023-12-29'
    },
    {
        name: 'wash disher',
        dueDate: '2023-12-30'
    }
];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const date = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div> 
        <div>${dueDate} </div> 
        <button
        onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


//** addTodo funciton */
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;


    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });


    inputElement.value = '';

    renderTodoList();
}