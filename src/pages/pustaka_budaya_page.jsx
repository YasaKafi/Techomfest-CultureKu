import React from "react";

import ComponentTwoPustaka from "../components/pustaka_component/component_two";
import NavBar from "../global_components/navbar";
import ComponentOnePustaka from "../components/pustaka_component/component_one";
import ComponentThreePustaka from "../components/pustaka_component/component_three";
import ComponentFourPustaka from "../components/pustaka_component/component_four";
import ComponentFivePustaka from "../components/pustaka_component/component_five";
import FooterComponent from "../global_components/footer";

function PustakaBudayaPage({ provinsiData }) {
  return (
    <>
      <div className="bg-basicColor">
        <NavBar provinsiData={provinsiData}/>
        <ComponentOnePustaka/>
        <ComponentTwoPustaka/>
        <ComponentThreePustaka/>
        <ComponentFourPustaka/>
        <ComponentFivePustaka/>
        <FooterComponent/>
      </div>
    </>
  );
}

export default PustakaBudayaPage;
