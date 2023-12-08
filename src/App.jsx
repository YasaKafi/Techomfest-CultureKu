import ComponentFourLanding from "./components/landing_component/component_four";
import ComponentOneLanding from "./components/landing_component/component_one";
import ComponentThreeLanding from "./components/landing_component/component_three";
import ComponentTwoLanding from "./components/landing_component/component_two";
import FooterComponent from "./global_components/footer";
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
      <ComponentFourLanding/>
      <FooterComponent/>
    </div>
      
    </>
  );
}

export default App;
