

function SortingOriginalArray() {

    const [array, setArray] = useState([5, 3, 8, 1, 2]);

    function SortingOriginalArray() {
        const sortedArray = array.sort((a, b) => a - b);
        setArray(sortedArray);
    }

    return(
        <div>
            <h2>Sorting Original Array</h2>
            <p>Array: {array.join(", ")}</p>
            <button onClick={SortingOriginalArray}>Sort Original Array</button>
        </div>
    )

}

export default SortingOriginalArray;

//why this not changing on clicking the button or on ui can be understand by memory reference of array or memory address of array
//so react will not see any chance on that memory address because we are sorting the original array itself react does not care what you //are doing internally with that array 


//how this works in javascript
//In JavaScript arrays are reference types
//When we assign an array to a variable we are actually assigning a reference to that array in memory
//When we use methods like sort(), push(), pop() etc on the array
//They modify the contents of the array in place
//Hence mutating the original array
//In React it is important to avoid mutating state directly
//Because React relies on detecting changes in state to decide when to re-render components
//If we mutate the original array and update the state with the same reference




// in the above code we are sorting the original array directly using sort method
// this will mutate the original array and update the state with the same reference
// this can lead to unexpected behavior in react as react may not detect the change in state
// to avoid this we should always create a copy of the array before sorting it

// it means nothing will change on the screen on clicking the button
// because sort method mutates the original array and react may not detect the change
// hence no re-rendering happens and the UI remains the same
// to fix this we can use slice() method to create a copy of the array before sorting it
// like this: const sortedArray = array.slice().sort((a, b) => a - b);
// this way we ensure that we are not mutating the original array and react can detect the change in state and re-render the component accordingly



// what is mutating the original array
// mutating the original array means changing the contents of the array directly
// in javascript arrays are reference types
// when we assign an array to a variable we are actually assigning a reference to that array in memory
// when we use methods like sort(), push(), pop() etc on the array
// they modify the contents of the array in place
// hence mutating the original array
// in react it is important to avoid mutating state directly
// because react relies on detecting changes in state to decide when to re-render components
// if we mutate the original array and update the state with the same reference
// react may not detect the change and hence no re-rendering happens
// to avoid this we should always create a copy of the array before modifying it
// using methods like slice(), spread operator etc
// this way we ensure that we are following react's best practices of immutability when working with state
// this helps prevent unintended side effects and makes it easier to track changes in state over time
