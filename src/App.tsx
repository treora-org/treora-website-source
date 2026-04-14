import './styles/globals.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
