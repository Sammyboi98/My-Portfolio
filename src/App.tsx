import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';

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
    </BrowserRouter>
   </>
  )
}

export default App;