import React from "react";
import ComponentOneDetail from "../components/detail_component/component_one";
import NavBar from "../global_components/navbar";

function DetailPage() {
  return (
    <>
      <div className="bg-basicColor ">
        <NavBar />
        <ComponentOneDetail />
      </div>
    </>
  );
}

export default DetailPage;
