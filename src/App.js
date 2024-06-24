import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Microservices } from "./pages/Microservices";
import { Nanoservices } from "./pages/Nanoservices";
import { IotEdgeCloud } from "./pages/IotEdgeCloud";
import { CaseStudies } from "./pages/CaseStudies";
import { Conclusion } from "./pages/Conclusion";
import { References } from "./pages/References";
import ScrollToTop from "./components/ScrollToTop";
import { Rakesh } from "./pages/Rakesh";
import { Ajith } from "./pages/Ajith";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/microservices" element={<Microservices />} />
          <Route path="/nanoservices" element={<Nanoservices />} />
          <Route path="/iot-edge-cloud" element={<IotEdgeCloud />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/references" element={<References />} />
          <Route path="/rakesh" element={<Rakesh />} />
          <Route path="/ajith" element={<Ajith />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
