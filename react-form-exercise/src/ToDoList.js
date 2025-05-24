import React, { useState } from 'react';
import { ToDo } from './ToDo';
import { NewToDoForm } from './NewToDoForm';




function ToDoList()  {
    const [todos, setTodos] = useState([
        { task: "Clean the kitchen", id: 1 },
        { task: "Wash the car", id: 2 },
        { task: "Clean the bathroom", id: 3 },
        { task: "Do the laundry", id: 4 },
        { task: "Take out the trash", id: 5 }
    ]);
    function addTodo(newTodo) {
        setTodos(todos => [...todos, newTodo]);
    }
   function handleRemove(id) {
    console.log("removed task", id);
    setTodos(todos => todos.filter(todo => todo.id !== id));
    }
    return (
        <div>
        <div>
        <ul>
            {todos.map(todo => (
                <ToDo 
                key={todo.id}
                id={todo.id}
                task={todo.task} 
                remove={handleRemove} />
            ))}
        </ul>
        </div>
        <div>
            <NewToDoForm addTodo={addTodo}  />
        </div>
        </div>
    )
}




export { ToDoList };