import React from "react";
import NavBar from "../global_components/navbar";
import ComponentOneHistoriografi from "../components/historiografi_component/component_one";
import ComponentTwoHistoriografi from "../components/historiografi_component/component_two";
import ComponentThreeHistoriografi from "../components/historiografi_component/component_three";

function HistoriografiPage() {
  return (
    <>
        <div className="bg-basicColor">
            <NavBar/>
            <ComponentOneHistoriografi/>
            <ComponentTwoHistoriografi/>
            <ComponentThreeHistoriografi/>
        </div>
    </>
  );
}

export default HistoriografiPage;