function ArrayInsert2() {
    const [array, setArray] = React.useState([10, 20, 30, 40, 50]);

    function insertElement() {
        const RandomNumber = Math.floor(Math.random() * 100) + 1;
        const newArray = [...array, RandomNumber];
        setArray(newArray);
    }

    return(
        <div>
            <h2>Insert Element into Array (Without Mutating Original Array)</h2>
            <p>Array: {array.join(", ")}</p>
            <button onClick={insertElement}>Insert Random Element</button>
        </div>
    )
}

export default ArrayInsert2;


// In this code, we create a new array using the spread operator [...array, RandomNumber]
// This creates a new array that includes all the elements of the original array plus the new random number
// We then update the state with this new array using setArray(newArray)
// This way we avoid mutating the original array directly and ensure that React detects the change and re-renders the component accordingly
// Why we used [...array, RandomNumber]
// In JavaScript, the spread operator (...) is used to expand an iterable (like an array) into individual elements
// When we use [...array, RandomNumber], we are creating a new array that contains all the elements of the original array followed by the new random number
// This approach allows us to create a new array without modifying the original array, which is important in React for maintaining immutability in state management
// By creating a new array, we ensure that React can detect the change in state and re-render the component to reflect the updated array in the UI


// What is immutability in React
// Immutability in React refers to the concept of not modifying the existing state or props directly
// Instead, we create new copies of the data with the necessary changes
// This is important because React relies on detecting changes in state and props to determine when to re-render components
// If we mutate the original data directly, React may not detect the change and may not re-render the component as expected
// By following immutability principles, we can ensure that our React components behave predictably and efficiently
// This is why we use techniques like the spread operator to create new arrays or objects when updating state in React
// This helps maintain the integrity of the original data and allows React to manage updates effectively
