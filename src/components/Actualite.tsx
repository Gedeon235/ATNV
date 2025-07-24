
import { Link } from "react-router-dom";
import "./Actualite.css";

const Actualite = () => {
  return (
    <div className="actualite-wrapper">
      <h1 className="actualite-title">Actualités et Événements</h1>
      <p className="actualite-subtitle">
        Suivez nos dernières actions et événements pour la promotion de<br />
        la paix au Tchad
      </p>

      <div className="main-card">
        <img src="src/assets/at.png" alt="Formation" className="main-image" />
        <div className="main-content">
          <div className="tag-row">
            <span className="tag" style={{ backgroundColor: "#E6F4EA", color: "#1B873F" }}>
              Formation
            </span>
            <span className="date">📅 15 Décembre 2024</span>
          </div>
          <h2 className="main-title">Atelier de Formation sur la Médiation Communautaire</h2>
          <p className="main-text">
            Formation de 30 nouveaux médiateurs communautaires dans la région du Logone Oriental
            pour renforcer la cohésion sociale.
          </p>
          <Link to="/actualite/1" className="actualite-link">Lire la suite →</Link>
        </div>
      </div>

      <div className="grid">
        {secondaryCards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <span className="tag" style={{ backgroundColor: card.bg, color: card.color }}>
                {card.category}
              </span>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <p className="card-date">{card.date}</p>
              <Link to={`/actualite/${index + 2}`} className="actualite-link">Lire plus →</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="newsletter-box">
        <h3 className="newsletter-title">Restez informé de nos actions</h3>
        <p className="newsletter-text">
          Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles <br />
          et les projets en cours dans tout le Tchad.
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Votre adresse email" className="newsletter-input" />
          <button className="subscribe-btn">S’inscrire</button>
        </div>
      </div>

      <div className="call-to-action">
        <h3 className="cta-title">Rejoignez notre mouvement pour la paix</h3>
        <p className="cta-text">
          Ensemble, construisons un avenir fondé sur la dignité et la justice pour tous.
        </p>
        <Link to={`/Contact/`}>
          <button className="cta-btn">Rejoindre l’initiative</button>
        </Link>
      </div>
    </div>
  );
};

const secondaryCards = [
  {
    category: "Événement",
    title: "Journée Internationale de la Paix 2024",
    text: "Célébration de la Journée Internationale de la Paix avec des activités éducatives dans les écoles de Moundou.",
    date: "21 Septembre 2024",
    bg: "#E6F4EA",
    color: "#1B873F",
    image: "src/assets/i.png",
  },
  {
    category: "Partenariat",
    title: "Partenariat avec les Autorités Locales",
    text: "Signature d’un accord de partenariat avec la mairie de Moundou pour renforcer les actions de prévention des conflits.",
    date: "10 Novembre 2024",
    bg: "#E6F0FA",
    color: "#1E4DB7",
    image: "src/assets/pa.png",
  },
  {
    category: "Sensibilisation",
    title: "Campagne de Sensibilisation sur les Droits de l’Enfant",
    text: "Lancement d’une campagne de sensibilisation dans 15 villages pour la protection des droits des enfants.",
    date: "22 Novembre 2024",
    bg: "#E7F7F0",
    color: "#00754A",
    image: "src/assets/enf.png",
  },
];

export default Actualite;
