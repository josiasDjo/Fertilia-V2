import { motion } from "framer-motion"
import { FadeContainer, FadeItem } from "../hooks/animations"

export default function Footer() {
  return (
    <motion.footer
      variants={FadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between gap-10">

        {/* Bloc branding */}
        <div className="flex items-start gap-4">
          <img
            src="/images/logo_only.webp"
            alt="Logo Fertilia"
            className="w-12 h-auto"
          />
          <div>
            <p className="text-xl font-medium">
              La technologie au service de votre terre.
            </p>
          </div>
        </div>
        {/* Bloc contact et réseaux */}
        <div className="flex flex-col gap-4">
          <p>
            Contact :{" "}
            <a href="mailto:support@fertilia.app" className="underline">
              support@fertilia.app
            </a>
          </p>
          <p>
            <span className="pr-3"><i class="fa-solid fa-location-dot"></i></span>
            RD Congo, Nord-Kivu, Goma, Keshero
          </p>
          <div className="flex gap-6 text-2xl">
            <i className="fab fa-facebook" aria-label="Facebook"></i>
            <i className="fab fa-x-twitter" aria-label="Twitter"></i>
            <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
            <i className="fab fa-telegram" aria-label="Telegram"></i>
            <i className="fab fa-whatsapp" aria-label="WhatsApp"></i>
          </div>
        </div>
        
        {/* Liens de navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            ["Accueil", "#header"],
            ["Fonctionnalités", "#avantages"],
            ["À propos", "#avis"],
            ["Contacts", "#"],
            ["Blog", "#"],
            ["Innovations", "#"],
            ["Documentation", "#"],
            ["Support", "#"],
          ].map(([label, href], i) => (
            <motion.a
              key={i}
              variants={FadeItem}
              href={href}
              className="hover:underline"
            >
              {label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="w-full h-px bg-gray-700 my-8" />

      {/* Bas de page */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>&copy; 2025 Fertilia. Tous droits réservés.</p>

        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">
            Conditions d'utilisation
          </a>
          <a href="#" className="hover:underline">
            Politique de confidentialité
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
          <a href="#" className="hover:underline">
            Mentions légales
          </a>
        </div>

        {/* Sélecteur de langue */}
        <div>
          <select
            className="bg-gray-800 text-white border border-gray-600 rounded-md px-2 py-1"
            aria-label="Sélection de la langue"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </motion.footer>
  );
}