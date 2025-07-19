

export default function Newsletter() {
    return (
        <section className="bg-green-100 text-black px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">📬 Abonnez-vous à notre newsletter</h2>
        <p className="mb-6">Recevez des conseils agricoles, des mises à jour produits et plus directement dans votre boîte mail.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="px-4 py-2 rounded-md w-full text-black"
            />
            <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md"
            >
            S’abonner
            </button>
        </form>
        </section>

    )
}