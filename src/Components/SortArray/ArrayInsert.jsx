import React, { useState } from 'react';

function ArrayInsert() {

    const [array, setArray] = useState([10, 20, 30, 40, 50]);
   
    function insertElement() {
        const RandomNumber = Math.floor(Math.random() * 100) + 1;
        array.push(RandomNumber);
        setArray(array);
    }

    return(
        <div>
            <h2>Insert Element into Array</h2>
            <p>Array: {array.join(", ")}</p>
            <button onClick={insertElement}>Insert Random Element</button>
        </div>
    )

}

export default ArrayInsert;


//here react will track it that you made changes in the same memory address of array
//hence no re-rendering happens and the UI remains the same

//why this not changing on clicking the button or on ui can be understand by memory reference of array or memory address of array
//so react will not see any chance on that memory address because we are modifying the original array itself react does not care what you //are doing internally with that array 

//how this works in javascript
//In JavaScript arrays are reference types
//When we assign an array to a variable we are actually assigning a reference to that array in memory
