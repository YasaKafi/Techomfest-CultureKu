import ComponentOneLanding from "./components/landing_component/component_one";
import ComponentThreeLanding from "./components/landing_component/component_three";
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
      <ComponentThreeLanding/>
    </div>
      
    </>
  );
}

export default App;
