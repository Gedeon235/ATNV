// Contact.tsx
import React from "react";

const Contact = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Contactez-nous</h1>
      <p style={styles.subheading}>
        Nous sommes là pour vous écouter et vous accompagner dans vos<br />
        démarches pour la paix
      </p>

      <div style={styles.contactSection}>
        {/* Infos */}
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>Informations de Contact</h3>
          <div style={styles.infoItem}>
            <span style={styles.icon}>✉️</span>
            <div>
              <strong>Adresse</strong>
              <p>Quartier Dombao<br />BP 397, Moundou<br />République du Tchad</p>
            </div>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.icon}>📞</span>
            <div>
              <strong>Téléphone</strong>
              <p>+235 00 00 00 00<br />+235 00 00 00 00</p>
            </div>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.icon}>✉️</span>
            <div>
              <strong>Email</strong>
              <p>contact@atnv-tchad.org<br />info@atnv-tchad.org</p>
            </div>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.icon}>⏰</span>
            <div>
              <strong>Horaires</strong>
              <p>Lun - Ven : 8h00 - 17h00<br />Sam : 8h00 - 12h00</p>
            </div>
          </div>
          <div style={styles.socials}>
            <p style={styles.socialLabel}>Suivez-nous</p>
            <div style={styles.iconsRow}>
              <span style={styles.socialIcon}>🔗</span>
              <span style={styles.socialIcon}>📘</span>
              <span style={styles.socialIcon}>✉️</span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div style={styles.formBox}>
          <h3 style={styles.formTitle}>Envoyez-nous un message</h3>
          <form style={styles.form}>
            <div style={styles.inputRow}>
              <div style={styles.inputGroup}>
                <label>Nom complet *</label>
                <input type="text" placeholder="Votre nom complet" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label>Email *</label>
                <input type="email" placeholder="votre@email.com" style={styles.input} />
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label>Sujet *</label>
              <select style={styles.select}>
                <option>Sélectionnez un sujet</option>
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label>Message *</label>
              <textarea placeholder="Décrivez votre demande ou vos questions..." style={styles.textarea} />
            </div>
            <button type="submit" style={styles.submitButton}>✉ Envoyer le message</button>
          </form>
        </div>
      </div>

      {/* Localisation */}
      <div style={styles.locationBox}>
        <div style={styles.pin}>📍</div>
        <h4 style={styles.locationTitle}>Notre Localisation</h4>
        <p style={styles.locationText}>
          Nous sommes situés à Moundou, au quartier Dombao. N’hésitez pas à nous rendre visite pendant nos heures d’ouverture.
        </p>
      </div>
    </div>
  );
};

// Responsive avec media query via JS
const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    fontFamily: "sans-serif",
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    color: "#1a1a1a",
  },
  heading: {
    textAlign: "center",
    fontSize: "clamp(22px, 5vw, 32px)",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subheading: {
    textAlign: "center",
    fontSize: "clamp(14px, 4vw, 18px)",
    color: "#444",
    marginBottom: "40px",
    lineHeight: "1.5",
  },
  contactSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  infoBox: {
    flex: "1",
    minWidth: "280px",
    backgroundColor: "#1B5E20",
    color: "#fff",
    borderRadius: "16px",
    padding: "20px",
  },
  infoTitle: {
    fontSize: "18px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "20px",
    fontSize: "14px",
  },
  icon: {
    fontSize: "18px",
    lineHeight: "1.5",
  },
  socials: {
    borderTop: "1px solid #eee",
    paddingTop: "20px",
  },
  socialLabel: {
    fontSize: "14px",
    marginBottom: "8px",
  },
  iconsRow: {
    display: "flex",
    gap: "10px",
  },
  socialIcon: {
    fontSize: "20px",
    backgroundColor: "#eee",
    color: "#333",
    padding: "6px",
    borderRadius: "6px",
  },
  formBox: {
    flex: "1.2",
    minWidth: "280px",
    backgroundColor: "#F8F9FA",
    borderRadius: "16px",
    padding: "20px",
  },
  formTitle: {
    fontSize: "18px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
  },
  inputGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "6px",
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "6px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "vertical",
    minHeight: "100px",
    marginTop: "6px",
  },
  submitButton: {
    backgroundColor: "#1B5E20",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
  },
  locationBox: {
    marginTop: "60px",
    backgroundColor: "#F1F1F1",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center",
  },
  pin: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  locationTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  locationText: {
    fontSize: "14px",
    color: "#333",
  },
};

export default Contact;
