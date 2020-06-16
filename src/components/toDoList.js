import React from 'react';
import ToDo from './toDo'; 

function ToDoList({ todos }) {
    return(
        <ul>
            {todos.map(todo => (
                <ToDo
                    key={todo.id}
                    todo={todo}/>
            ))}
        </ul>
    )
}

export default ToDoList ;