import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Contact from './components/Contact';  
import About from './components/About'; 
import Home from './components/Home';  
import Internship from './components/Internship';



function App() {
 
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}   />  
        <Route path="/Contact" element={<Contact />} />  
        <Route path="/About" element={<About />} />  
        <Route path="/Internship" element={<Internship />} />  
      </Routes>
      </Router>
     
    </>
   
  );
}

export default App;



