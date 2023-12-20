import React from "react";
import ComponentOneDetail from "../components/detail_component/component_one";
import NavBar from "../global_components/navbar";
import ComponentTwoDetail from "../components/detail_component/component_two";
import ComponentThreeDetail from "../components/detail_component/component_three";
import ComponentFourDetail from "../components/detail_component/component_four";
import ComponentFiveDetail from "../components/detail_component/component_five";
import ComponentSixDetail from "../components/detail_component/component_six";
import ComponentSevenDetail from "../components/detail_component/component_seven";
import FooterComponent from "../global_components/footer";

function DetailPage() {
  return (
    <>
      <div className="bg-basicColor ">
        <NavBar />
        <ComponentOneDetail />
        <ComponentTwoDetail/>
        <ComponentThreeDetail/>
        <ComponentFourDetail/>
        <ComponentFiveDetail/>
        <ComponentSixDetail/>
        <ComponentSevenDetail/>
        <FooterComponent/>
      </div>
    </>
  );
}

export default DetailPage;
