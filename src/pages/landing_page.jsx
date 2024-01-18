import React, { useState, useEffect, useRef } from 'react';
import NavBar from "../global_components/navbar";
import ComponentOneLanding from "../components/landing_component/component_one";
import ComponentTwoLanding from "../components/landing_component/component_two";
import ComponentThreeLanding from "../components/landing_component/component_three";
import ComponentFourLanding from "../components/landing_component/component_four";
import FooterComponent from "../global_components/footer";
import apiService from '../services/apiService';

function LandingPage({ provinsiData, pulauData }) {
  
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <div className="bg-basicColor">
        <NavBar provinsiData={provinsiData} pulauData={pulauData}/>
        <ComponentOneLanding handleClick={handleClick}/>
        <ComponentTwoLanding  ref={ref}/>
        <ComponentThreeLanding />
        <ComponentFourLanding />
        <FooterComponent />
        
      </div>
    </>
  );
}

export default LandingPage;
