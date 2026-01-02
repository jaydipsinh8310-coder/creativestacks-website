import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
