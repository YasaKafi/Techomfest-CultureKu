import ComponentFourLanding from "./components/landing_component/component_four";
import ComponentOneLanding from "./components/landing_component/component_one";
import ComponentThreeLanding from "./components/landing_component/component_three";
import ComponentTwoLanding from "./components/landing_component/component_two";
import FooterComponent from "./global_components/footer";
import NavBar from "./global_components/navbar";
import "./index.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/landing_page";
import PustakaBudayaPage from "./pages/pustaka_budaya_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/pustaka-budaya" element={<PustakaBudayaPage/>}/>
      </Routes>

    </Router>
  );
}

export default App;
