import React, {useState} from 'react';



function Box({ id, width, height, backgroundColor, remove }) {
    const style = {width, height, backgroundColor };

    return (
        <div>
            <div style={style}>
                <button onClick={() => remove(id)}>X</button>
            </div>
        </div>
    );
  



}
export { Box };