import { motion } from "framer-motion"
import { FadeContainer, FadeItem } from "../hooks/animations"

export default function Footer() {
  return   <motion.footer 
  variants={FadeContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  className="flex flex-col h-auto text-center items-center justify-center bg-gray-900  text-white relative ">
    <div className="w-full flex flex-col lg:flex-row px-5 py-5 justify-center">
      <div className="flex flex-col text-left lg:mx-10">
        <div className="flex my-3">
          <div className="mt-6 sm:mt-0">
            <p>Contact : <a href="mailto:support@fertilia.app" className="underline">support@fertilia.app</a></p>
            <div className="flex gap-8 mt-2 text-2xl cursor-pointer">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-telegram"></i>   
              <i className="fab fa-whatsapp"></i>   
            </div>
          </div>
        </div>
      </div>

      <div className="mx-10">
        <div className="flex flex-row">
          <div className="my-3 pr-5">
            <img src="/images/logo_only.webp"
            className="w-12 h-auto"
            alt="Logo de fertilia" />
          </div>
          <div className="text-left my-3">
            <h3 className="hidden text-lg font-semibold">Fertilia</h3>
            <p className="text-2xl mt-2">La technologie au service de votre terre.</p>
          </div>
        </div>

        <div className="w-full lg:w-2/4">
          <div className="flex flex-wrap">
            <motion.a variants={FadeItem}  href="#header" className="p-2">
              <ul className="flex flex-row w-full lg:flex-col lg:pr-4">
                <li className="">Accueil</li>              
              </ul>
            </motion.a>
            <motion.a variants={FadeItem}  href="#avantages" className="p-2">
              <ul className="lg:pr-4 flex flex-row w-full lg:flex-col">
                <li className="">Fonctionnalités</li>
              </ul>
            </motion.a>        
            <motion.a variants={FadeItem} href="#avis" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">
                <li className="">A propos</li>
              </ul>
            </motion.a>        
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">Contacts</li>
              </ul>
            </motion.a>

            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">Blog</li>
              </ul>
            </motion.a>
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">Future</li>
              </ul>
            </motion.a>
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">A propos</li>
              </ul>
            </motion.a>
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">Documentation</li>
              </ul>
            </motion.a>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full flex flex-row justify-between px-5 py-2">
      <ul>
        <p>&copy; 2025 Fertilia. Tous droits réservés. </p>
      </ul>
      <ul className="flex flex-row">
        <li className="m-2">Terms of service</li>
        <li className="m-2">Privacy policy</li>
        <li className="m-2">Cookies</li>
      </ul>
    </div>
  </motion.footer>
}