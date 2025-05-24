import React from 'react';
import ReactDOM from 'react-dom/client';





function Greeting({text, onGreet }) {
    return <h1 onCLick={() => onGreet(text)}>{text}</h1>;


}

export default Greeting;
