import React, { useState }from 'react';
import Box from './Box';

//Place your state that contains all of the boxes here. 
// This component should render all of the Box components 
// along with the NewBoxForm component

    const BoxList = () => {
        return (
            <div>
                <h1>Box List</h1>
                <Box />
                <NewBoxForm />
            </div>
        )
    }

    export default BoxList;