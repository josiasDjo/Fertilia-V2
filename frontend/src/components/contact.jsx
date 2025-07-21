

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-100 dark:bg-gray-800 px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Contactez-nous
                </h2>

                <form className="grid grid-cols-1 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Nom complet
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Adresse e-mail
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Message
                    </label>
                    <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-white"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-300"
                >
                    Envoyer
                </button>
                </form>
            </div>
        </section>

    )
}