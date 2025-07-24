import { FaBullseye, FaHandshake, FaAward } from "react-icons/fa";
import meImage from "../assets/me.png"; // Assure-toi que le chemin est correct

const About = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">À propos de Nous</h2>
        <p className="text-lg text-center mb-12">
          Plus de 30 ans d'engagement pour la paix, la justice sociale et la non-violence au Tchad
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          <div className="flex-1 min-w-[300px]">
            <h4 className="text-green-700 font-bold text-lg mb-2">Fondée en 1992</h4>
            <p className="mb-4 md:text-justify leading-relaxed">
              L’Association Tchadienne pour la Non-Violence (ATNV) est née de la
              volonté de citoyens engagés de construire une société tchadienne plus
              juste et pacifique. Basée à Moundou, notre association rayonne sur tout
              le territoire national.
            </p>
            <p className="mb-4 md:text-justify leading-relaxed">
              Nous croyons fermement que les conflits peuvent être résolus par le
              dialogue, la médiation et la compréhension mutuelle. Notre approche
              privilégie l’éducation, la sensibilisation et l’accompagnement des
              communautés vers des solutions durables.
            </p>
            <p className="italic text-green-700">Moundou, Tchad</p>
          </div>

          <div className="flex-1 min-w-[300px]">
            <img
              src={meImage}
              alt="Groupe souriant"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80 text-center">
            <FaBullseye size={30} className="mx-auto text-orange-500 mb-2" />
            <h4 className="text-lg font-semibold mb-2">Notre Mission</h4>
            <p>
              Promouvoir la culture de la paix et de la non-violence à travers
              l’éducation, la médiation et l’action communautaire.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80 text-center">
            <FaHandshake size={30} className="mx-auto text-orange-500 mb-2" />
            <h4 className="text-lg font-semibold mb-2">Nos Valeurs</h4>
            <p>
              Respect, tolérance, justice, solidarité et dialogue sont au cœur de
              toutes nos actions et initiatives communautaires.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80 text-center">
            <FaAward size={30} className="mx-auto text-orange-500 mb-2" />
            <h4 className="text-lg font-semibold mb-2">30+</h4>
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
