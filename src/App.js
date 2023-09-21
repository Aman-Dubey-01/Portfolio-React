import './App.scss';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Tours from './Components/Tours';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Tours />
      <Project />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
