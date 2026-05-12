import './App.css'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';




const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
   
    </div>
  )
}

export default App