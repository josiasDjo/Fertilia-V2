export function IrrigationAutomatiquePage() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          💧 Irrigation Automatique
        </h1>
        <p className="text-lg mb-10">
          Réalisez une gestion de l'eau intelligente grâce à notre système d'irrigation automatique. Les capteurs mesurent
          l'humidité du sol et activent l'irrigation au moment optimal, garantissant une utilisation efficace de l'eau et
          favorisant une croissance optimale des cultures.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🔍 Fonctionnement intelligent</h2>
          <ul className="list-disc list-inside space-y-3">
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
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">💧 Des avantages concrets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-2xl shadow">
              ✅ <strong>Économie d’eau :</strong> arrosez uniquement quand c’est nécessaire.
            </div>
            <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-2xl shadow">
              ✅ <strong>Rendements accrus :</strong> vos plantes reçoivent la quantité d’eau idéale.
            </div>
            <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-2xl shadow">
              ✅ <strong>Moins d’interventions :</strong> le système s’occupe de tout.
            </div>
            <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-2xl shadow">
              ✅ <strong>Respect de l’environnement :</strong> zéro gaspillage, zéro excès.
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl">
            Découvrir le système
          </button>
        </div>
      </div>
    </div>
  );
}