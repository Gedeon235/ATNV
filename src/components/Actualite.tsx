import { Link } from "react-router-dom";

const Actualite = () => {
  return (
    <div className="font-sans px-5 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-center text-3xl font-bold mb-2">Actualités et Événements</h1>
      <p className="text-center text-gray-600 text-base mb-10 leading-relaxed md:text-justify">
        Suivez nos dernières actions et événements pour la promotion de<br />
        la paix au Tchad
      </p>

      <div className="flex flex-wrap bg-white rounded-xl overflow-hidden shadow-md mb-10">
        <img
          src="src/assets/at.png"
          alt="Formation"
          className="w-full md:w-[400px] object-cover"
        />
        <div className="p-5 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ backgroundColor: "#E6F4EA", color: "#1B873F" }}>
              Formation
            </span>
            <span className="text-xs text-gray-500">📅 15 Décembre 2024</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Atelier de Formation sur la Médiation Communautaire</h2>
          <p className="text-sm text-gray-700 mb-4 md:text-justify">
            Formation de 30 nouveaux médiateurs communautaires dans la région du Logone Oriental pour renforcer la cohésion sociale.
          </p>
          <Link to="/actualite/1" className="text-green-700 font-semibold text-sm">Lire la suite →</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {secondaryCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
            <img src={card.image} alt={card.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-2"
                style={{ backgroundColor: card.bg, color: card.color }}
              >
                {card.category}
              </span>
              <h3 className="text-base font-bold mb-1">{card.title}</h3>
              <p className="text-sm text-gray-700 mb-1">{card.text}</p>
              <p className="text-xs text-gray-500 mb-2">{card.date}</p>
              <Link to={`/actualite/${index + 2}`} className="text-green-700 text-sm font-semibold">Lire plus →</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-xl text-center py-8 px-4 mb-10">
        <h3 className="text-lg font-bold mb-2">Restez informé de nos actions</h3>
        <p className="text-sm text-gray-700 mb-5">
          Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles <br />
          et les projets en cours dans tout le Tchad.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-64"
          />
          <button className="bg-green-700 text-white font-bold px-5 py-2 rounded-md w-full sm:w-auto">
            S’inscrire
          </button>
        </div>
      </div>

      <div className="bg-green-900 text-white text-center py-10 px-4 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Rejoignez notre mouvement pour la paix</h3>
        <p className="text-sm mb-5">Ensemble, construisons un avenir fondé sur la dignité et la justice pour tous.</p>
        <Link to="/Contact/">
          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-md w-full sm:w-auto">
            Rejoindre l’initiative
          </button>
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
