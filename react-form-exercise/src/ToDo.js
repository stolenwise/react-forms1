import React from 'react';

const ToDo = ({ id, task, remove }) => {

    return (
        <li>
            {task} <button onClick={() => remove(id)}>X</button>
        </li>

    );
}

export { ToDo };