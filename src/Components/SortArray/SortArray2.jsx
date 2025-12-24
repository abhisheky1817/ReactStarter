import React, { useState } from 'react';

function SortArray2() {
    const [arr, setArr] = useState([5, 3, 8, 1, 2]);
    
    function SortArray2(){
        const sortedArray = [...arr].sort((a, b) => a - b);
        setArr(sortedArray);
    }

    return (
        <div>
            <h2>Array Sorting using State</h2>  
            <p>Array: {arr.join(", ")}</p>
            <button onClick={SortArray2}>Sort Array</button>
        </div>
    );


}
export default SortArray2;


//here we have no use of key prop because we are not rendering any list or array of elements
//or there will be no need of unique identification of elements because we are just displaying a single array and a button



//In the code above we have a React functional component named SortArray2
//Inside this component we use the useState hook to create a state variable arr initialized with an unsorted array of numbers
//We define a function SortArray2 that creates a sorted copy of the arr using the spread operator to copy the array and the sort() method to sort it in ascending order
//We then update the state variable arr with the sorted array using the setArr function
//The component returns some JSX that displays the current state of the array and a button that triggers the SortArray2 function when clicked, sorting the array and updating the displayed values  
//When the button is clicked the SortArray2 function is called which sorts the array and updates the state variable arr
//Since arr is a state variable React detects the change and re-renders the component to reflect the updated sorted array in the UI
//This demonstrates how to manage and update state in a React component to create interactive UIs

//why we used [...arr] in sort method
//In JavaScript the sort() method sorts the elements of an array in place and returns the sorted array
//This means that it modifies the original array rather than creating a new sorted array
//To avoid mutating the original state variable arr directly we create a shallow copy of the array using the spread operator [...arr]
//This way we can sort the copied array without affecting the original arr state variable
//By using [...arr] we ensure that we are following React's best practices of immutability when working with state
//This helps prevent unintended side effects and makes it easier to track changes in state over time

//What is spread operator in javascript
//The spread operator (...) in JavaScript is used to expand an iterable (like an array or string) into individual elements
//When used with arrays it allows you to create a shallow copy of an array or combine multiple arrays into one
//In the example [...arr] we are using the spread operator to create a new array that contains all the elements of the arr array
//This new array can then be modified (like sorting) without affecting the original arr array
//The spread operator is a useful feature in JavaScript for working with arrays and objects in a more concise and readable way

//What is useState hook in react
//The useState hook is a built-in function in React that allows you to add state management to functional components
//It returns an array with two elements: the current state value and a function to update that state
//You can use the useState hook to create state variables that can hold any type of data such as numbers, strings, arrays, or objects
//When you call the state update function provided by useState React will re-render the component to reflect the updated state in the UI
//This makes it easy to create interactive components that respond to user input or other events by updating their state and re-rendering accordingly


//Example usage of useState hook
//import React, { useState } from 'react';
//const [count, setCount] = useState(0);
//Here count is the state variable initialized to 0 and setCount is the function used to update count
//When you call setCount with a new value React will re-render the component with the updated count value displayed in the UI

