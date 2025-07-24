import { FaBullseye, FaHandshake, FaAward } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">À propos de Nous</h2>
        <p className="about-subtitle">
          Plus de 30 ans d'engagement pour la paix, la justice sociale et la
          non-violence au Tchad
        </p>

        <div className="about-content-row">
          <div className="about-text-content">
            <h4 className="founded-title">Fondée en 1992</h4>
            <p className="about-paragraph">
              L’Association Tchadienne pour la Non-Violence (ATNV) est née de la
              volonté de citoyens engagés de construire une société tchadienne plus
              juste et pacifique. Basée à Moundou, notre association rayonne sur tout
              le territoire national.
            </p>
            <p className="about-paragraph">
              Nous croyons fermement que les conflits peuvent être résolus par le
              dialogue, la médiation et la compréhension mutuelle. Notre approche
              privilégie l’éducation, la sensibilisation et l’accompagnement des
              communautés vers des solutions durables.
            </p>
            <p className="about-city">Moundou, Tchad</p>
          </div>

          <div className="about-image-wrapper">
            <img
              src="src/assets/me.png"
              alt="Groupe souriant"
              className="about-image"
            />
          </div>
        </div>

        <div className="about-cards-row">
          <div className="about-card">
            <FaBullseye size={30} color="#f98e0e" />
            <h4 className="about-card-title">Notre Mission</h4>
            <p>
              Promouvoir la culture de la paix et de la non-violence à travers
              l’éducation, la médiation et l’action communautaire.
            </p>
          </div>

          <div className="about-card">
            <FaHandshake size={30} color="#f98e0e" />
            <h4 className="about-card-title">Nos Valeurs</h4>
            <p>
              Respect, tolérance, justice, solidarité et dialogue sont au cœur de
              toutes nos actions et initiatives communautaires.
            </p>
          </div>

          <div className="about-card">
            <FaAward size={30} color="#f98e0e" />
            <h4 className="about-card-title">30+</h4>
            <p>
              Années d'expérience auprès des communautés tchadiennes pour un avenir
              de paix.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
