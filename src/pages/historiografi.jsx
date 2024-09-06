import React from "react";
import NavBar from "../global_components/navbar";
import ComponentOneHistoriografi from "../components/historiografi_component/component_one";
import ComponentTwoHistoriografi from "../components/historiografi_component/component_two";
import ComponentThreeHistoriografi from "../components/historiografi_component/component_three";
import ComponentFourHistoriografi from "../components/historiografi_component/component_four";
import FooterComponent from "../global_components/footer";

function HistoriografiPage({ provinsiData, pulauData }) {
  return (
    <>
        <div className="bg-basicColor">
            <NavBar provinsiData={provinsiData} pulauData={pulauData}/>
            <ComponentOneHistoriografi/>
            <ComponentTwoHistoriografi/>
            {/* <ComponentThreeHistoriografi/>
            <ComponentFourHistoriografi/> */}
            <FooterComponent/>
        </div>
    </>
  );
}

export default HistoriografiPage;