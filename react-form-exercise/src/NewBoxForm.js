import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';


const NewBoxForm = ({ addBox}) => {
  const INITIAL = { width: "", height: "", backgroundColor: "" };
  const [formData, setFormData] = useState(INITIAL);

  function handleChange(evt) {
    const {name, value } = evt.target;
    setFormData(f => ({...f, [name]: name === "backgroundColor" ? value : Number(value) }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData(INITIAL);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width</label>
        <input
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <button>Add a new box!</button>
    </form>
  );
};


export { NewBoxForm };