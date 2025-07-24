import React from "react";

const Programme = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nos Programmes d'Action</h1>
      <p style={styles.subtitle}>
        Des initiatives concrètes pour construire une société tchadienne<br />
        plus juste et pacifique
      </p>
      <div style={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} style={styles.card}>
            <div style={{ ...styles.icon, backgroundColor: card.color }}>
              {card.icon}
            </div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardText}>{card.text}</p>
            <a href="#" style={styles.link}>
              En savoir plus →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Éducation à la Paix",
    text: "Programmes éducatifs dans les écoles et communautés pour promouvoir une culture de paix dès le plus jeune âge.",
    color: "#1B873F",
    icon: "📘",
  },
  {
    title: "Médiation Communautaire",
    text: "Formation de médiateurs locaux pour résoudre les conflits interpersonnels et intercommunautaires de manière pacifique.",
    color: "#FFBE3D",
    icon: "🤝",
  },
  {
    title: "Justice Restaurative",
    text: "Accompagnement des victimes et auteurs de violences vers des processus de réconciliation et de réparation.",
    color: "#1B873F",
    icon: "⚖️",
  },
  {
    title: "Sensibilisation aux Droits Humains",
    text: "Campagnes de sensibilisation et formations sur les droits fondamentaux et la dignité humaine.",
    color: "#FFBE3D",
    icon: "🔔",
  },
  {
    title: "Soutien Psychosocial",
    text: "Accompagnement psychologique des victimes de violences et des communautés traumatisées.",
    color: "#1B873F",
    icon: "💚",
  },
  {
    title: "Protection de l’Enfance",
    text: "Programmes spécifiques pour la protection des droits des enfants et la prévention des violences.",
    color: "#FFBE3D",
    icon: "🧒",
  },
];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "sans-serif",
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "40px",
    lineHeight: "1.5",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    padding: "20px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  icon: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    fontSize: "20px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "15px",
  },
  link: {
    fontSize: "14px",
    color: "#1B873F",
    fontWeight: "bold",
    textDecoration: "none",
    marginTop: "auto",
  },
};

export default Programme;
