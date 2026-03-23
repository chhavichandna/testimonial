import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Testimonials />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;