import React from "react";
import ComponentOneDetail from "../components/detail_component/component_one";
import NavBar from "../global_components/navbar";
import ComponentTwoDetail from "../components/detail_component/component_two";
import ComponentThreeDetail from "../components/detail_component/component_three";
import ComponentFourDetail from "../components/detail_component/component_four";

function DetailPage() {
  return (
    <>
      <div className="bg-basicColor ">
        <NavBar />
        <ComponentOneDetail />
        <ComponentTwoDetail/>
        <ComponentThreeDetail/>
        <ComponentFourDetail/>
      </div>
    </>
  );
}

export default DetailPage;
