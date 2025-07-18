
export function AnalyseRendementsPage() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600 dark:text-purple-400">
          📈 Analyse des Rendements
        </h1>
        <p className="text-lg mb-10">
          Transformez vos données en actions concrètes avec notre outil d'analyse des rendements. Visualisez l'évolution de vos
          récoltes, identifiez les tendances et ajustez vos stratégies pour maximiser vos profits et pérenniser la performance
          de votre exploitation.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">📊 Analyse visuelle et stratégique</h2>
          <ul className="list-disc list-inside space-y-3">
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
            <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-2xl shadow">
              ✅ <strong>Décisions basées sur les faits</strong> et non sur des intuitions.
            </div>
            <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-2xl shadow">
              ✅ <strong>Amélioration continue</strong> grâce à des indicateurs clairs.
            </div>
            <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-2xl shadow">
              ✅ <strong>Réduction des pertes</strong> par anticipation des problèmes.
            </div>
            <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-2xl shadow">
              ✅ <strong>Vision long terme</strong> sur la rentabilité de votre exploitation.
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-2xl">
            Accéder à l'analyse
          </button>
        </div>
      </div>
    </div>
  );
}