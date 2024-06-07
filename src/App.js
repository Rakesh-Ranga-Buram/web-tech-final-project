import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import { Home } from "./pages/Home";
import { Microservices } from './pages/Microservices';
import { Nanoservices } from './pages/Nanoservices';
import { IotEdgeCloud } from './pages/IotEdgeCloud';
import { CaseStudies } from './pages/CaseStudies';
import { Conclusion } from './pages/Conclusion';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/microservices" element={<Microservices />} />
      <Route path="/nanoservices" element={<Nanoservices />} />
      <Route path="/iot-edge-cloud" element={<IotEdgeCloud />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/conclusion" element={<Conclusion />} />
    </Routes>
    </>
  );
}

export default App;
