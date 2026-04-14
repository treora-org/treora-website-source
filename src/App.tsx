import './styles/globals.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise';
import Portfolio from './components/Portfolio/Portfolio';
// import Trust from './components/Trust/Trust';
import Process from './components/Process/Process';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Portfolio />
        {/* <Trust /> */}
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
