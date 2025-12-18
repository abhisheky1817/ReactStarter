import { useState } from "react";

function UsingStateVariable() {

    const [x , setX] = useState(10);

    return(

        <>
        
          <button onClick={()=>{
            setX(x + 1);
            console.log(x);

          }}>Click using state</button>

          {x}

        </>

        

    )


}

 export default UsingStateVariable;


 //here we have made x a state variable using useState hook
 //state variable are tightly coupled with the component's lifecycle
    //when we update a state variable using its setter function react re-renders the component
    //hence the UI updates to reflect the new state
    