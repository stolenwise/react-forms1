import { clear } from 'console';
import React, {useState} from 'react';

function ContactForm() {
    const [ formData, setFormdata ] = useState({
        name: "",
        email: ""
    });

    function handleChange(evt) {
        // update state and new value
        const {name, value} = evt.target;
        setFormdata(f => ({...f, [name]: value}));
    }


    function handleSubmit(evt) {
        // prevent default behavior
        // send data to server
        // clear form
        evt.preventDefault();
        setFormdata({name: "", email: ""});
        clearForm();
    }

    return(
        <form onSubmit={handleSubmit}>
        <label>Name:
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
        </label>
        <label>Email:
            <input 
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </label>
        <button>Submit</button>
        </form>
    )
}

export default ContactForm;