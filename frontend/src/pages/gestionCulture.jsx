import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function GestionDesCulturesPage() {
  return (
    <div className="w-full">
      {/* <NavBar /> */}
      <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto mt-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-600 dark:text-green-400">
            🌱 Gestion des Cultures
          </h1>
          <p className="text-lg mb-10">
            Maîtrisez chaque étape de vos plantations grâce à notre module intelligent. Suivez vos cultures en temps réel,
            recevez des recommandations personnalisées et améliorez durablement vos rendements.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">🚜 Pourquoi utiliser ce module ?</h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>📊 Suivi en temps réel :</strong> surveillez l'évolution de chaque parcelle (croissance, humidité, météo...)
                depuis un tableau de bord clair et intuitif.
              </li>
              <li>
                <strong>🧠 Recommandations intelligentes :</strong> profitez de conseils adaptés à votre sol, climat et culture pour
                mieux irriguer, fertiliser et protéger vos plantations.
              </li>
              <li>
                <strong>📅 Planification simplifiée :</strong> gérez les semis, traitements et récoltes avec des rappels automatiques et
                une vision claire de votre calendrier agricole.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">💡 Les avantages pour vous</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded-2xl shadow">
                ✅ <strong>Des décisions éclairées</strong> grâce à des données fiables et des analyses avancées.
              </div>
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded-2xl shadow">
                ✅ <strong>Gain de temps</strong> en éliminant les notes papier et la gestion manuelle.
              </div>
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded-2xl shadow">
                ✅ <strong>Rendements accrus</strong> grâce à une gestion optimisée des ressources.
              </div>
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded-2xl shadow">
                ✅ <strong>Traçabilité complète</strong> de vos actions agricoles, utile pour les certifications.
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">👨‍🌾 Pour qui ?</h2>
            <p>
              Que vous soyez un petit producteur, une coopérative ou une grande exploitation, ce module s’adapte à votre niveau.
              Simple d’utilisation, mais assez puissant pour des besoins avancés.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">📱 Technologie accessible</h2>
            <p>
              Disponible sur smartphones, tablettes et ordinateurs – même hors-ligne. L’interface est intuitive, pensée pour une
              utilisation en milieu rural.
            </p>
          </section>

          <section className="mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">🚀 Essayez dès maintenant</h2>
            <p className="mb-6">
              Rejoignez les agriculteurs qui boostent leur productivité avec notre module de gestion des cultures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-2xl">
                Créer un compte gratuitement
              </button>
              <button className="bg-transparent border border-green-600 hover:bg-green-100 dark:hover:bg-green-900 text-green-600 dark:text-green-400 font-bold py-3 px-6 rounded-2xl">
                Découvrir une démo
              </button>
            </div>
          </section>


        </div>
      </div>
      <Footer />
    </div>
  );
}