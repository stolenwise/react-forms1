import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';


const NewToDoForm = ({ addTodo }) => {
    const [task, setTask] = useState("");
    function handleChange(evt) {
        setTask(evt.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        addTodo({ task, id: uuid() });
        setTask("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
                id="task"
                name="task"
                type="text"
                onChange={handleChange}
                value={task}
            />
            <button>Add a todo!</button>
        </form>
    );
}




export { NewToDoForm };