import React, { useState }from 'react';
import { Box } from './Box';
import { NewBoxForm } from './NewBoxForm';

//Place your state that contains all of the boxes here. 
// This component should render all of the Box components 
// along with the NewBoxForm component

const BoxList = () => {
    const [boxes, setBoxes] = useState([
        { id: 1, width: 100, height: 100, backgroundColor: "lightblue" }
      ]);
    function handleRemove(id) {
        setBoxes(bxs => bxs.filter(b => b.id !== id));
      }  
        return (
        <div>
            <div>
                <h1>Box List</h1>
                {boxes.map(b => (
                <Box
                    key={b.id}
                    id={b.id}
                    width={b.width}
                    height={b.height}
                    backgroundColor={b.backgroundColor}
                    remove={handleRemove}
                />
                ))}
            </div>
            <div>
                <NewBoxForm addBox={newBox => setBoxes(bxs => [...bxs, newBox])} />  

             </div>
              
        </div>
        )
    }

    export { BoxList };