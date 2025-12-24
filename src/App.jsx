import ChildrenPropDemo from "./ChildrenPropDemo";
import CustomComponent from "./CustomComponent";
import UsingStateVariable from "./UsingStateVariable";
import ArrayWithMap from "./Components/ArrayRender/ArrayWithMap.jsx";
import SortArray from "./Components/SortArray/SortArray.jsx";
import SortArray2 from "./Components/SortArray/SortArray2.jsx";
import SortingOriginalArray from "./Components/SortArray/SortingOriginalArray.jsx";


function App() {
  return (
    <div>
      <h1>Hello, React!</h1>

      <UsingStateVariable />

      <ChildrenPropDemo>
          <CustomComponent />
      </ChildrenPropDemo>

      <ArrayWithMap />

      <SortArray />
       <br />
      <SortArray2 />

      <br />

      <SortingOriginalArray />

    </div>
  )
}

export default App; // Exporting the App component as the default export of this module to make it available for import in other files.