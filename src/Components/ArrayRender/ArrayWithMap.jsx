function ArrayWithMap(){

    const arr = [1,2,3,4,5];

    return (
        <div>

            <h1>Array Render using map()</h1>
            <ul>
            {arr.map(item => <li>{item}</li>)}
            {/* <li>1</li> <li>2</li>  */}
            </ul>

            <br/>

            <h2>Array Render using map() with index</h2>
            <ul>
            {arr.map((item, index) => <li key={index}>{item}</li>)}
            {/* adding key is a good practice when rendering lists in react */}
            </ul>

            {/* why key is important in lists
              It helps React identify which items have changed, are added, or are removed. This improves performance and helps maintain component state between renders. 
              in simple word it is used by react to keep track of each element in the list 
              here index is unique identifier for each item in the array 
              so it is always better to use key prop when rendering lists in react 
              In real world applications, using a unique id from your data as the key is preferred over using the index, especially if the list can change. 
            */}

            <br />

            <h2>Array Render using map() with index and key</h2>
            <ul>
            {arr.map((item, index) => <li key={index}>{item * 2}</li>)}
            {/* you can also manipulate the item while rendering */}
            </ul>

            <br />
            <h2>Array Render using map() with index, key and JSX element</h2>
            <ul>
            {arr.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
            </ul>
            
            <br />

            <h2>Array Render using map() with index, key and multi-line JSX element</h2>
            <ul>
            {arr.map((item, index) => {
                return (
                    <li key={index}>
                        <span>Item: </span>
                        <strong>{item}</strong>
                    </li>
                );
            })}
            </ul>

            <br />
            <h2>Array Render using map() with index, key and multi-line JSX element with additional HTML</h2>
            <ul>
            {arr.map((item, index) => {
                return (
                    <li key={index}>
                        <div>
                            <span>Item: </span>
                            <strong>{item}</strong>
                        </div>
                    </li>
                );
            })}
            </ul>

            <br />



        </div>
        

    )
}

export default ArrayWithMap;