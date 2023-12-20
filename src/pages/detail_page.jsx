import React from "react";
import ComponentOneDetail from "../components/detail_component/component_one";
import NavBar from "../global_components/navbar";
import ComponentTwoDetail from "../components/detail_component/component_two";

function DetailPage() {
  return (
    <>
      <div className="bg-basicColor ">
        <NavBar />
        <ComponentOneDetail />
        <ComponentTwoDetail/>
      </div>
    </>
  );
}

export default DetailPage;
