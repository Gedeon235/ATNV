import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Header.css"; // ← ajoute cette ligne

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-overlay">
        <header className="header-main">
          <div className="header-left">
            <Link to="/">
              <img src="src/assets/logo.png" alt="Logo" />
            </Link>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/about" className="nav-link">À propos</Link>
            <Link to="/programmes" className="nav-link">Programmes</Link>
            <Link to="/actualites" className="nav-link">Actualités</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <FiMenu className="menu-icon" />
          </nav>
        </header>

        <section className="hero">
          <h1 className="hero-title">
            Construire la Paix au Tchad
          </h1>
          <p className="hero-text">
            Depuis 1992, l'Association Tchadienne pour la Non-Violence œuvre pour une
            société juste, pacifique et solidaire à Moundou et dans tout le Tchad.
          </p>

          <div className="services">
            <div className="card">
              🤝
              <h3 className="card-title">Justice Sociale</h3>
              <p>Promouvoir l'équité et les droits humains</p>
            </div>
            <div className="card">
              
              <h3 className="card-title">Communauté</h3>
              <p>Rassembler et unir les citoyens</p>
            </div>
            <div className="card">
              <h3 className="card-title">Non-Violence</h3>
              <p>Résoudre les conflits par le dialogue</p>
            </div>
          </div>

          <div className="buttons">
            <Link to="/Programme">
              <button className="btn btn-primary">Découvrir nos actions</button>
            </Link>
            <Link to="/Contact">
              <button className="btn btn-secondary">Nous rejoindre</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
