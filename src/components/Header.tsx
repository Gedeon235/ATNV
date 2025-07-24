import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png"; // corrige le chemin selon ton arborescence
import bgImage from "../assets/image.jpeg";

const Header = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full min-h-screen bg-black bg-opacity-50 text-white">
        <header className="bg-white bg-opacity-95 px-6 py-4 flex justify-between items-center flex-wrap">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-24 h-24" />
            </Link>
          </div>
          <nav className="flex items-center gap-6 flex-wrap text-black font-bold">
            <Link to="/" className="hover:text-blue-500">Accueil</Link>
            <Link to="/about" className="hover:text-blue-500">À propos</Link>
            <Link to="/programmes" className="hover:text-blue-500">Programmes</Link>
            <Link to="/actualites" className="hover:text-blue-500">Actualités</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            <FiMenu className="text-2xl block md:hidden cursor-pointer" />
          </nav>
        </header>

        <section className="flex flex-col items-center justify-center px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Construire la Paix <br /> au Tchad
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-2xl text-white">
            Depuis 1992, l'Association Tchadienne pour la Non-Violence œuvre pour une
            société juste, pacifique et solidaire à Moundou et dans tout le Tchad.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-slate-200 p-6 rounded-lg w-64 text-black text-center shadow-lg">
              🤝
              <h3 className="text-xl font-semibold mt-2">Justice Sociale</h3>
              <p>Promouvoir l'équité et les droits humains</p>
            </div>
            <div className="bg-slate-400 p-6 rounded-lg w-64 text-black text-center shadow-lg">
              <h3 className="text-xl font-semibold">Communauté</h3>
              <p>Rassembler et unir les citoyens</p>
            </div>
            <div className="bg-slate-200 p-6 rounded-lg w-64 text-black text-center shadow-lg">
              <h3 className="text-xl font-semibold">Non-Violence</h3>
              <p>Résoudre les conflits par le dialogue</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/Programme">
              <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-500">
                Découvrir nos actions
              </button>
            </Link>
            <Link to="/Contact">
              <button className="bg-green-600 text-white font-bold py-3 px-6 rounded hover:bg-green-700">
                Nous rejoindre
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
