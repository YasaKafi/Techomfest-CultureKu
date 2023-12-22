import React, { useState, useEffect } from 'react';
import NavBar from "../global_components/navbar";
import ComponentOneLanding from "../components/landing_component/component_one";
import ComponentTwoLanding from "../components/landing_component/component_two";
import ComponentThreeLanding from "../components/landing_component/component_three";
import ComponentFourLanding from "../components/landing_component/component_four";
import FooterComponent from "../global_components/footer";
import apiService from '../services/apiService';

function LandingPage() {

  const [provinsiData, setProvinsiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getProvinsiData();
        setProvinsiData(data.data);
      } catch (error) {
        console.error('Error fetching provinsi data:', error);
      }
    };

    fetchData();
  }, []);
  

  
  return (
    <>
      <div className="bg-basicColor">
        <NavBar />
        <ComponentOneLanding />
        <ComponentTwoLanding />
        <ComponentThreeLanding />
        <ComponentFourLanding />
        <FooterComponent />
        {provinsiData.map(provinsi => (
          <div key={provinsi.id_provinsi}>
            <h2>{provinsi.nama_provinsi}</h2>
            <p>Luas Teritorial: {provinsi.luas_teritorial}</p>
            <p>Jumlah Penduduk: {provinsi.jumlah_penduduk}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default LandingPage;
