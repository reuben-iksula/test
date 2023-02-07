import "./index.css";
import "./App.css";
import Greet from "./components/Greet";
import ParentComponent from "./components/ParentComponent";
import ControlledForm from "./components/ControlledForm";
import Ref from "./components/Ref";
import ClassTimer from "./components/ClassTimer";
import FunctionalTimer from "./components/FunctionalTimer";
import ClassCounter from "./components/ClassCounter";
import CrudFunctional from "./components/CrudFunctional";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <ControlledForm/> */}
      {/* <Ref/> */}
      {/* <RefParent/> */}
      {/* <ClassTimer/> */}
      {/* <FunctionalTimer/> */}
      {/* <ClassCounter/> */}
      <CrudFunctional />
    </div>
  );
}

export default App;
