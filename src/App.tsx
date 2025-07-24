import {  Routes, Route, BrowserRouter } from 'react-router-dom';


import About from './components/About';
import Programme from './components/Programme';
import Actualite from './components/Actualite';
import Contact from './components/Contact';
import Home from './pages/Home';

import Layout from './components/Layout';

// Page d’accueil (contenu central)


function App() {
  return (
 <>
  <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programme />} />
          <Route path="/actualites" element={<Actualite />} />
          <Route path="/contact" element={<Contact />} />
         </Route>
        </Routes>
   </BrowserRouter>
 </>
  );
}

export default App;