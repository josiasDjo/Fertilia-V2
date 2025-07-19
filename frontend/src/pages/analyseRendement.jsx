import BackButton from "../components/backButton";
import Footer from "../components/footer";

export function AnalyseRendementsPage() {
  return (
    <div className="w-full">
      <BackButton />
      <div className="bg-skin-bg text-skin-text min-h-screen py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto mt-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-skin-accent">
            Analyse des Rendements
          </h1>
          <p className="text-lg mb-10">
            Transformez vos données en actions concrètes avec notre outil d'analyse des rendements. Visualisez l'évolution de vos
            récoltes, identifiez les tendances et ajustez vos stratégies pour maximiser vos profits et pérenniser la performance
            de votre exploitation.
          </p>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">📊 Analyse visuelle et stratégique</h2>
            <ul className="list-none pl-5 space-y-3">
              <li>
                📅 <strong>Historique des rendements :</strong> comparez vos résultats saison après saison.
              </li>
              <li>
                🧠 <strong>Identification des facteurs clés :</strong> découvrez ce qui influence positivement ou négativement vos récoltes.
              </li>
              <li>
                🔧 <strong>Optimisation continue :</strong> ajustez vos pratiques agricoles pour des performances toujours meilleures.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">🚀 Ce que vous y gagnez</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Décisions basées sur les faits</strong> et non sur des intuitions.
              </div>
              <div className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Amélioration continue</strong> grâce à des indicateurs clairs.
              </div>
              <div className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Réduction des pertes</strong> par anticipation des problèmes.
              </div>
              <div className="bg-green-100 dark:bg-gray-600 p-4 rounded-2xl shadow">
                <span className="text-skin-accent mr-4"><i class="fa-solid fa-check-to-slot"></i></span> 
                <strong>Vision long terme</strong> sur la rentabilité de votre exploitation.
              </div>
            </div>
          </section>

          <div className="text-center mt-12">
            <button className="bg-skin-accentSec hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-2xl">
              Accéder à l'analyse
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}