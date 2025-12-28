import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Hero";


import "./App.css";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
      
    
      <Services />
      <Contact />
      <Whatsapp />
      <Footer />
     <DarkMode />
    </>
  );
}

export default App;
