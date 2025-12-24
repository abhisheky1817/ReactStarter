function SortArray(){
    const numbers = [5, 3, 8, 1, 2];

    const sortedNumbers = numbers.slice().sort((a, b) => a - b);

    return(
        <div>
            <h2>Original Array:</h2>
            <p>{numbers.join(", ")}</p>
            <h2>Sorted Array:</h2>
            <p>{sortedNumbers.join(", ")}</p>
        </div>
    )   
}

export default SortArray;




//what is happening in the code above
//In the code above we have a React functional component named SortArray
//Inside this component we define an array of numbers called numbers
//We then create a new array called sortedNumbers by using the slice() method to create a copy of the original array and then applying the sort() method to sort the numbers in ascending order
//The sort() method takes a compare function (a, b) => a - b which ensures that the numbers are sorted numerically rather than as strings
//Finally we return some JSX that displays both the original array and the sorted array by joining the elements with a comma and space for better readability




//what is sort method in javascript
//The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. By default, the sort() method sorts the elements as strings in ascending order. However, you can provide a compare function to define a custom sort order, such as numerical sorting or sorting based on specific object properties.


//What is slice method in javascript
//The slice() method in JavaScript is used to create a shallow copy of a portion of an array into a new array object. It does not modify the original array. The slice() method takes two optional arguments: the start index (inclusive) and the end index (exclusive). If no arguments are provided, it copies the entire array.
//In the example above we used slice() to create a copy of the original array before sorting it
//This is important because the sort() method modifies the array in place
//By using slice() we ensure that the original array remains unchanged and we get a new sorted array instead

//why we used (a, b) => a - b in sort method
//In JavaScript, the sort() method can take an optional compare function as an argument to determine the order of the elements. The compare function should return a negative number if the first argument is less than the second, zero if they are equal, and a positive number if the first argument is greater than the second.
//In the example (a, b) => a - b is a compare function that sorts numbers in ascending order. Here's how it works:
//If a is less than b, a - b will be negative, so a comes before b
//If a is equal to b, a - b will be zero, so their order remains unchanged
//If a is greater than b, a - b will be positive, so a comes after b
//This way the sort() method can correctly sort the numbers in ascending order.
//If we wanted to sort the numbers in descending order we could use (a, b) => b - a instead 
//Note that if we don't provide a compare function the sort() method will convert the elements to strings and sort them in lexicographical order which may not give the expected results for numbers 
