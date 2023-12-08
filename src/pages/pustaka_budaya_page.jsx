import React from "react";

import ComponentTwoPustaka from "../components/pustaka_component/component_two";
import NavBar from "../global_components/navbar";
import ComponentOnePustaka from "../components/pustaka_component/component_one";
import ComponentThreePustaka from "../components/pustaka_component/component_three";

function PustakaBudayaPage() {
  return (
    <>
      <div className="bg-basicColor">
        <NavBar />
        <ComponentOnePustaka/>
        <ComponentTwoPustaka/>
        <ComponentThreePustaka/>
      </div>
    </>
  );
}

export default PustakaBudayaPage;
