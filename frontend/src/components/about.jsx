
export default function About() {
    return (
        <section id="about" className="bg-white dark:bg-gray-900 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            À propos de Fertilia
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Fertilia est une plateforme technologique dédiée à l'agriculture intelligente. 
            Grâce à des solutions connectées, nous aidons les agriculteurs à mieux gérer l’irrigation, 
            analyser les rendements et optimiser chaque parcelle de terre. 
            Nous croyons en une agriculture moderne, durable et accessible à tous.
            </p>

            {/* Image optionnelle */}
            {/* <div className="mt-10">
            <img
                src="/images/about_fertilia.webp"
                alt="À propos de Fertilia"
                className="mx-auto rounded-xl shadow-lg max-w-md"
            />
            </div> */}
        </div>
        </section>
    )
}