// Imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navigation from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SeeMore from "./components/SeeMore";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Skills />
      {/* <SeeMore />
      <Contact /> */}
    </div>
  );
}

export default App;
