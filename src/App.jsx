import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tripcatalogue from "./pages/Tripcatalogue";
import Tour from "./pages/Tour";
import Site from "./pages/Site";


function ScrollToTop(){
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])
  return null;
 }

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/trip-catalogue" element={<Tripcatalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/site" element={<Site />} />
      </Routes>
    </Router>
  );
}
