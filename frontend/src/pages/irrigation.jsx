import BackButton from "../components/backButton";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeContainer, FadeItem } from "../hooks/animations";

export function IrrigationAutomatiquePage() {
  return (
    <motion.div 
      variants={FadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    className="w-full">
      <BackButton />
      <div className="bg-skin-bg text-skin-text min-h-screen py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto mt-14">
          <motion.h1 variants={FadeItem} className="text-2xl md:text-5xl font-bold mb-6 text-skin-accentSec">
            Irrigation Automatique
          </motion.h1>
          <motion.p variants={FadeItem}  className="text-lg mb-10">
            Réalisez une gestion de l'eau intelligente grâce à notre système d'irrigation automatique. Les capteurs mesurent
            l'humidité du sol et activent l'irrigation au moment optimal, garantissant une utilisation efficace de l'eau et
            favorisant une croissance optimale des cultures.
          </motion.p>

          <motion.section variants={FadeItem} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Fonctionnement intelligent</h2>
            <ul className="list-none space-y-3 pl-5">
              <li>
                🌦️ <strong>Capteurs de sol connectés :</strong> surveillent en continu l'humidité, la température et les besoins hydriques.
              </li>
              <li>
                ⚙️ <strong>Déclenchement automatisé :</strong> l’arrosage se fait uniquement au bon moment, selon les données du terrain.
              </li>
              <li>
                📲 <strong>Application mobile :</strong> visualisez l’état de vos parcelles, recevez des alertes et contrôlez l’irrigation à distance.
              </li>
            </ul>
          </motion.section>

          <motion.section variants={FadeItem}  className="mb-12">
            <motion.h2 variants={FadeItem}  className="text-2xl font-semibold mb-4">Des avantages concrets</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={FadeItem}  className="bg-blue-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accentSec mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Économie d’eau :</strong> arrosez uniquement quand c’est nécessaire.
              </motion.div>
              <motion.div variants={FadeItem}  className="bg-blue-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accentSec mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Rendements accrus :</strong> vos plantes reçoivent la quantité d’eau idéale.
              </motion.div>
              <motion.div variants={FadeItem} className="bg-blue-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accentSec mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Moins d’interventions :</strong> le système s’occupe de tout.
              </motion.div>
              <motion.div variants={FadeItem} className="bg-blue-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accentSec mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Respect de l’environnement :</strong> zéro gaspillage, zéro excès.
              </motion.div>
            </div>
          </motion.section>

          <motion.div variants={FadeItem}  className="text-center mt-12">
            <Link to="/discover-a-demo">
              <button className="bg-skin-accent text-white font-bold py-3 px-6 rounded-2xl">
                Découvrir le système
              </button>
            </Link>

          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}