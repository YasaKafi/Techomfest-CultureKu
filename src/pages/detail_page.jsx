import React from "react";
import ComponentOneDetail from "../components/detail_component/component_one";
import NavBar from "../global_components/navbar";
import ComponentTwoDetail from "../components/detail_component/component_two";
import ComponentThreeDetail from "../components/detail_component/component_three";

function DetailPage() {
  return (
    <>
      <div className="bg-basicColor ">
        <NavBar />
        <ComponentOneDetail />
        <ComponentTwoDetail/>
        <ComponentThreeDetail/>
      </div>
    </>
  );
}

export default DetailPage;
