import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Whatsapp />
      <Footer />
     <DarkMode />
    </>
  );
}

export default App;
