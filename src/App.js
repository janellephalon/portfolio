// Imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navigation from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import WaveDivider from './components/WaveHero';
import SeeMore from "./components/SeeMore";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <WaveDivider />
      <Skills />
      <Certifications />
      {/* <SeeMore /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
