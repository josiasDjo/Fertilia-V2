import { motion } from "framer-motion"
import { FadeItem, FadeContainer } from "../hooks/animations"
import Testimony from "./testimonial"

export default function Avis() {
  const temps = [
    {nameUser: "Mumbere Jean", role: "agriculteur au Congo", text: "Grâce à Fertilia, j’ai doublé ma production en 6 mois."},
    {nameUser: "Kavira Kav", role: "Technicienne agricole", text: "L’interface est intuitive et vraiment adaptée à notre réalité."},
    // {nameUser: "Mumbere Jean", role: "agriculteur au Congo", text: "Grâce à Fertilia, j’ai doublé ma production en 6 mois."},
  ]
    return <motion.section 
        variants={FadeContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        id="avis" 
        className="bg-white dark:bg-gray-800 w-full p-10 text-center items-center justify-center flex flex-col ">
        <motion.h3 variants={FadeItem} className="text-gray-900 dark:text-white text-2xl lg:text-3xl text-center font-bold m-5">Avis et Notations</motion.h3>
        <div id="" className="w-full items-center justify-center content-center flex flex-wrap relative lg:w-9/12">

        {temps.map((index, key) => {
          return (
            <Testimony key={key} name={index.nameUser} role={index.role} text={index.text} />
          )
        })}

      </div>
    </motion.section>
}
