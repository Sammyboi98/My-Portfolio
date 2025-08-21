import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import ToolsTechnologies from './pages/ToolTechnologies';
import Contact from './pages/Contact';
import ContactForm from './components/ContactForm';

const App: React.FC = ()  => {
  return(
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<div>Contact Page</div>} /> */}
      </Routes>
      <About />
      <ToolsTechnologies />
      <Contact />
      <ContactForm />
    </BrowserRouter>
   </>
  )
}

export default App;