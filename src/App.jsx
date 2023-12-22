import "./index.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/landing_page";
import PustakaBudayaPage from "./pages/pustaka_budaya_page";
import DetailPage from "./pages/detail_page";
import HistoriografiPage from "./pages/historiografi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/pustaka-budaya" element={<PustakaBudayaPage/>}/>
        <Route path="/detail-page/:id" element={<DetailPage />} />
        <Route path="/historiografi-page" element={<HistoriografiPage/>}/>
      </Routes>

    </Router>
  );
}

export default App;
