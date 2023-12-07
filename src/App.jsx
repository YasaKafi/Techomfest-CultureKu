import ComponentOneLanding from "./components/landing_component/component_one";
import ComponentTwoLanding from "./components/landing_component/component_two";
import NavBar from "./global_components/navbar";
import "./index.css";

function App() {
  return (
    <>
    <div className="bg-basicColor">
    <NavBar />
      <ComponentOneLanding />
      <ComponentTwoLanding />
    </div>
      
    </>
  );
}

export default App;
