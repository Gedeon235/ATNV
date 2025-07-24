
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import Programme from './components/Programme';
import Actualite from './components/Actualite';
import Contact from './components/Contact';

// Page d’accueil (contenu central)
const Home = () => (
  <>
    <About />
    <Programme />
    <Actualite />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programme />} />
          <Route path="/actualites" element={<Actualite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
