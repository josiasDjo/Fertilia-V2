import { motion } from "framer-motion"
import { FadeItem } from "../hooks/animations"

export function Button({couleur, titre, classMa}) {
    return (
        <motion.button
            variants={FadeItem}
            whileHover={{ scale: 0.9}}
            className="openSignup w-44 pr-4 backgroud_btn_h mt-2 px-3 py-2 text-lg rounded-lg"
            id="openSignup"
        >
            Nous rejoindre <i className="fa-solid fa-arrow-right"></i>
        </motion.button>
    )
}