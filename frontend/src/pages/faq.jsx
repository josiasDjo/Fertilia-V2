import { useState } from "react";

const faqs = [
    {
        question: "Qu’est-ce que Fertilia ?",
        answer: "Fertilia est une plateforme qui aide les agriculteurs à optimiser leurs cultures grâce à des outils technologiques comme l’irrigation automatique et l’analyse des rendements."
    },
    {
        question: "Comment fonctionne l'irrigation automatique ?",
        answer: "Des capteurs mesurent l’humidité du sol. Lorsque le niveau descend sous un seuil défini, le système déclenche automatiquement l’irrigation."
    },
    {
        question: "Puis-je utiliser Fertilia sans connexion internet ?",
        answer: "Certaines fonctionnalités peuvent être disponibles hors-ligne, mais une connexion est requise pour synchroniser les données et accéder aux analyses."
    },
    {
        question: "Fertilia est-il compatible avec tous les types de cultures ?",
        answer: "Oui, Fertilia est conçu pour s’adapter à une grande variété de cultures et de tailles d’exploitation."
    }
];


const [openIndex, setOpenIndex] = useState(null);

const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
};


export default function Faq() {

  return (
    <section id="faq" className="bg-white dark:bg-gray-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          ❓ Foire Aux Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-4"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-medium text-gray-800 dark:text-white focus:outline-none"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    )
}