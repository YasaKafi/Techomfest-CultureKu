import React from "react";

import ComponentTwoPustaka from "../components/pustaka_component/component_two";
import NavBar from "../global_components/navbar";

function PustakaBudayaPage() {
  return (
    <>
      <div className="bg-basicColor">
        <NavBar />
        <ComponentTwoPustaka />
      </div>
    </>
  );
}

export default PustakaBudayaPage;
