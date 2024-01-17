import "./index.css";
import React, { useState, useEffect } from 'react';
import apiService from './utils/provinsiDetailData';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/landing_page";
import PustakaBudayaPage from "./pages/pustaka_budaya_page";
import DetailPage from "./pages/detail_page";
import HistoriografiPage from "./pages/historiografi";

function App() {

  const [provinsiData, setProvinsiData] = useState([]);
  const [budayaData, setBudayData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getProvinsiData();
        setProvinsiData(data['data']);
      } catch (error) {
        console.error('Error fetching provinsi data:', error);
      }
    };

    fetchData();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getBudayaData();
        setBudayData(data['data']);;
      } catch (error) {
        console.error('Error fetching budaya data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage provinsiData={provinsiData}/>}/>
        <Route path="/pustaka-budaya" element={<PustakaBudayaPage provinsiData={provinsiData} budayaData={budayaData}/>}/>
        <Route path="/pustaka-budaya" element={<PustakaBudayaPage provinsiData={provinsiData}/>}/>
        <Route path="/detail-page/:id" element={<DetailPage provinsiData={provinsiData} budayaData={budayaData} />} />
        <Route path="/historiografi-page" element={<HistoriografiPage provinsiData={provinsiData}/>}/>
      </Routes>

    </Router>
  );
}

export default App;
