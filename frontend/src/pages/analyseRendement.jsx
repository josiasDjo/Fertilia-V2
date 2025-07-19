import BackButton from "../components/backButton";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { FadeContainer, FadeItem } from "../hooks/animations";

export function AnalyseRendementsPage() {
  return (
    <motion.div
    className="w-full">
      <BackButton />
      <motion.div 
      variants={FadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-skin-bg text-skin-text min-h-screen py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto mt-10">
          <motion.h1 variants={FadeItem} className="text-2xl md:text-3xl font-bold mb-6 text-skin-accent">
            Analyse des Rendements
          </motion.h1>
          <motion.p variants={FadeItem} className="text-lg mb-10">
            Transformez vos données en actions concrètes avec notre outil d'analyse des rendements. Visualisez l'évolution de vos
            récoltes, identifiez les tendances et ajustez vos stratégies pour maximiser vos profits et pérenniser la performance
            de votre exploitation.
          </motion.p>

          <motion.section variants={FadeItem} className="mb-12">
            <motion.h2 variants={FadeItem} className="text-xl font-semibold mb-4">📊 Analyse visuelle et stratégique</motion.h2>
            <ul className="list-none pl-5 space-y-3">
              <motion.li variants={FadeItem}>
                📅 <strong>Historique des rendements :</strong> comparez vos résultats saison après saison.
              </motion.li>
              <motion.li variants={FadeItem}>
                🧠 <strong>Identification des facteurs clés :</strong> découvrez ce qui influence positivement ou négativement vos récoltes.
              </motion.li>
              <motion.li variants={FadeItem}>
                🔧 <strong>Optimisation continue :</strong> ajustez vos pratiques agricoles pour des performances toujours meilleures.
              </motion.li>
            </ul>
          </motion.section>

          <motion.section variants={FadeItem} className="mb-12">
            <motion.h2 variants={FadeItem} className="text-xl font-semibold mb-4">🚀 Ce que vous y gagnez</motion.h2>
            <motion.div variants={FadeItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={FadeItem} className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Décisions basées sur les faits</strong> et non sur des intuitions.
              </motion.div>
              <motion.div variants={FadeItem} className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Amélioration continue</strong> grâce à des indicateurs clairs.
              </motion.div>
              <motion.div variants={FadeItem} className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Réduction des pertes</strong> par anticipation des problèmes.
              </motion.div>
              <motion.div variants={FadeItem} className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Vision long terme</strong> sur la rentabilité de votre exploitation.
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.div variants={FadeItem} className="text-center mt-12">
            <button className="bg-skin-accentSec hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-2xl">
              Accéder à l'analyse
            </button>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </motion.div>
  );
}