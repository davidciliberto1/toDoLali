import React from 'react'

function ToDoList({ ToDos }) {
    return(
        <ul>
            {ToDos.map(ToDo => (
                <ToDo ToDo={ToDo}/>
            ))}
        </ul>
    )
}

export default ToDoList ;