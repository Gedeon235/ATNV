import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Colonne 1 */}
        <div style={styles.column}>
          <div style={styles.logoSection}>
            <div style={styles.logoIcon}>
              <img
                src={logo}
                alt="Logo"
                style={styles.image}
              />
            </div>
            <div>
              <strong>ATNV</strong>
              <p style={styles.muted}>Association Tchadienne pour la Non-Violence</p>
            </div>
          </div>
          <p style={styles.desc}>
            Depuis 1992, nous œuvrons pour une société tchadienne plus juste, pacifique et solidaire.
          </p>
          <div style={styles.socials}>
            <span style={{ ...styles.socialIcon, backgroundColor: "#FFBE3D" }}>📘</span>
            <span style={{ ...styles.socialIcon, backgroundColor: "#1B873F" }}>🕊️</span>
            <span style={{ ...styles.socialIcon, backgroundColor: "#E67E22" }}>✉️</span>
          </div>
        </div>

        {/* Colonne 2 */}
        <div style={styles.column}>
          <h4 style={styles.title}>Liens Rapides</h4>
          <ul style={styles.list}>
            <li><Link to="/apropos" style={styles.link}>À propos</Link></li>
            <li><Link to="/programmes" style={styles.link}>Programmes</Link></li>
            <li><Link to="/actualites" style={styles.link}>Actualités</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
            <li><Link to="/" style={styles.link}>Accueil</Link></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div style={styles.column}>
          <h4 style={styles.title}>Nos Programmes</h4>
          <ul style={styles.list}>
            <li>Éducation à la Paix</li>
            <li>Médiation Communautaire</li>
            <li>Justice Restaurative</li>
            <li>Protection de l’Enfance</li>
          </ul>
        </div>

        {/* Colonne 4 */}
        <div style={styles.column}>
          <h4 style={styles.title}>Contact</h4>
          <ul style={styles.list}>
            <li>
              <span style={{ ...styles.contactIcon, color: "#FFBE3D" }}>📍</span>
              Quartier Domba<br />
              BP 397, Moundou<br />
              République du Tchad
            </li>
            <li>
              <span style={{ ...styles.contactIcon, color: "#1B873F" }}>📞</span>
              +235 00 00 00 00<br />
              +235 00 00 00 01
            </li>
            <li>
              <span style={{ ...styles.contactIcon, color: "#FFBE3D" }}>✉️</span>
              contact@atnv-tchad.org
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          © 2025 Association Tchadienne pour la Non-Violence (ATNV). Tous droits réservés.
        </p>
        <div style={styles.bottomLinks}>
          <Link to="#" style={styles.link}>Politique de confidentialité</Link>
          <Link to="#" style={styles.link}>Mentions légales</Link>
          <Link to="#" style={styles.link}>Plan du site</Link>
        </div>
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#14602D",
    color: "#fff",
    fontFamily: "sans-serif",
    padding: "40px 20px 20px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto 30px",
  },
  column: {
    flex: "1 1 220px",
    minWidth: "220px",
    fontSize: "14px",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  logoIcon: {
    height: "40px",
    width: "40px",
    borderRadius: "100%",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  muted: {
    fontSize: "12px",
    color: "#ddd",
    margin: 0,
  },
  desc: {
    lineHeight: "1.5",
    marginBottom: "15px",
  },
  socials: {
    display: "flex",
    gap: "10px",
  },
  socialIcon: {
    fontSize: "16px",
    padding: "8px",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  contactIcon: {
    marginRight: "6px",
    fontSize: "16px",
  },
  bottomBar: {
    borderTop: "1px solid #1e793a",
    paddingTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    gap: "10px",
  },
  bottomText: {
    margin: 0,
    flex: "1 1 auto",
  },
  bottomLinks: {
    display: "flex",
    gap: "15px",
    flex: "1 1 auto",
    flexWrap: "wrap",
  },
};

export default Footer;
