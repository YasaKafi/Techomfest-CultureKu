import React from "react";
import NavBar from "../global_components/navbar";
import ComponentOneLanding from "../components/landing_component/component_one";
import ComponentTwoLanding from "../components/landing_component/component_two";
import ComponentThreeLanding from "../components/landing_component/component_three";
import ComponentFourLanding from "../components/landing_component/component_four";
import FooterComponent from "../global_components/footer";

function LandingPage() {
  return (
    <>
      <div className="bg-basicColor">
        <NavBar />
        <ComponentOneLanding />
        <ComponentTwoLanding />
        <ComponentThreeLanding />
        <ComponentFourLanding />
        <FooterComponent />
      </div>
    </>
  );
}

export default LandingPage;
