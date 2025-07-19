import BackButton from "../components/backButton";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeContainer, FadeItem } from "../hooks/animations";

export default function GestionDesCulturesPage() {
  return (
    <motion.div 
      variants={FadeContainer}
      // initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full">
      {/* <NavBar /> */}
      <BackButton />
      <div className="bg-skin-bg text-skin-text min-h-screen py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto mt-14">
          <motion.h1 variants={FadeItem} className="text-2xl md:text-3xl font-bold mb-6 text-skin-accent">
            🌱 Gestion des Cultures
          </motion.h1>
          <motion.p variants={FadeItem} className="text-lg mb-10">
            Maîtrisez chaque étape de vos plantations grâce à notre module intelligent. Suivez vos cultures en temps réel,
            recevez des recommandations personnalisées et améliorez durablement vos rendements.
          </motion.p>

          <motion.section variants={FadeItem} className="mb-12">
            <motion.h2 variants={FadeItem} className="text-xl font-semibold mb-4"><span className="text-skin-accentSec"><i className="fa-solid fa-truck"></i></span> Pourquoi utiliser ce module ?</motion.h2>
            <ul className="list-none space-y-3">
              <motion.li variants={FadeItem}>
                <strong>📊 Suivi en temps réel :</strong> surveillez l'évolution de chaque parcelle (croissance, humidité, météo...)
                depuis un tableau de bord clair et intuitif.
              </motion.li>
              <motion.li variants={FadeItem}>
                <strong>🧠 Recommandations intelligentes :</strong> profitez de conseils adaptés à votre sol, climat et culture pour
                mieux irriguer, fertiliser et protéger vos plantations.
              </motion.li>
              <motion.li>
                <strong>📅 Planification simplifiée :</strong> gérez les semis, traitements et récoltes avec des rappels automatiques et
                une vision claire de votre calendrier agricole.
              </motion.li>
            </ul>
          </motion.section>

          <motion.section variants={FadeItem} className="mb-12">
            <motion.h2 variants={FadeItem} className="text-xl font-semibold mb-4">Les avantages pour vous</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Des décisions éclairées</strong> grâce à des données fiables et des analyses avancées.
              </div>
              <div className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Gain de temps</strong> en éliminant les notes papier et la gestion manuelle.
              </div>
              <div className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Rendements accrus</strong> grâce à une gestion optimisée des ressources.
              </div>
              <div className="bg-green-100 dark:bg-gray-600  p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Traçabilité complète</strong> de vos actions agricoles, utile pour les certifications.
              </div>
            </div>
          </motion.section>

          <motion.section variants={FadeItem} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">👨‍🌾 Pour qui ?</h2>
            <p>
              Que vous soyez un petit producteur, une coopérative ou une grande exploitation, ce module s’adapte à votre niveau.
              Simple d’utilisation, mais assez puissant pour des besoins avancés.
            </p>
          </motion.section>

          <motion.section variants={FadeItem} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">📱 Technologie accessible</h2>
            <p>
              Disponible sur smartphones, tablettes et ordinateurs – même hors-ligne. L’interface est intuitive, pensée pour une
              utilisation en milieu rural.
            </p>
          </motion.section>

          <motion.section variants={FadeItem} className="mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4"><span className="text-skin-accentSec mr-3"><i className="fa-solid fa-chart-gantt"></i></span> Essayez dès maintenant</h2>
            <p className="mb-6">
              Rejoignez les agriculteurs qui boostent leur productivité avec notre module de gestion des cultures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <button className="bg-skin-accent hover:bg-green-700 text-white font-bold py-3 px-6 rounded-2xl">
                  Créer un compte gratuitement
                </button>
              </Link>
              <Link to="/discover-a-demo">
                <button className="bg-transparent border border-green-600 hover:bg-green-100 dark:hover:bg-green-900 text-green-600 dark:text-green-400 font-bold py-3 px-6 rounded-2xl">
                  Découvrir une démo
                </button>
              </Link>

            </div>
          </motion.section>


        </div>
      </div>
      <Footer />
    </motion.div>
  );
}