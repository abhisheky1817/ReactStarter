function CustomComponent() {

    let x = 10;

    return(
        <>
        <button 
        onClick={()=>{
            x= x+1;
            console.log(x);
        }} >Click Me!</button>

        {x}

        </>


    )
}

export default CustomComponent; 











 //nothing will change on the screen because x is not a state variable
        //so react will not track its changes for re-rendering the component
        //now what do we mean by state variable and why this type of thing worked in vanila js but //not in react
        //in vanila js we directly manipulate the DOM but in react we use a virtual DOM
        //react only tracks changes in state variables and props to decide when to re-render the component

        // let me explain in detail what does it mean why no change in ui happened on clicking the button
        //in react each component has its own state which is an object that holds some data that may change over the lifetime of the component
        //when a state variable changes react re-renders the component to reflect the new state in the UI
        //but here x is just a normal variable not a state variable so react is not tracking its changes
        //hence no re-rendering happens and the UI remains the same









//when we make state variable the component re-renders on its change and the UI updates accordingly
//what we mean by saying component re-renders is that react calls the component function again to get the new UI based on the updated state
//then react compares the new UI with the previous UI using a process called reconciliation
//and updates only the parts of the actual DOM that have changed
//this makes react very efficient in updating the UI as it minimizes direct manipulation of the DOM which is slow and costly in terms of performance
//to make x a state variable we can use the useState hook provided by react
//import { useState } from "react";
// const [x, setX] = useState(10);
//then we can update x using setX function which will also trigger a re-render of the component
//on clicking the button we can do setX(x + 1); instead of x = x + 1;
//this way react will track the changes in x and update the UI accordingly


//a question may arise here that why dont we make all variables state variables
//the answer is that making all variables state variables can lead to unnecessary re-renders and performance issues
//we should only make those variables state variables that directly affect the UI and need to be tracked for changes
//other variables that are used for computations or temporary storage can remain as normal variables
//this way we can optimize the performance of our react applications while still leveraging the benefits of state management import { useState } from "react";

//a question may come to you mind why we decleared x outside the return statement
//the reason is that in react the return statement should only contain JSX code which defines the UI of the component
//we should not put any logic or variable declarations inside the return statement
//all the logic and variable declarations should be done before the return statement
//this keeps the code clean and separates the UI definition from the component logic

