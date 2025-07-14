import { motion } from "framer-motion"
import { FadeItem } from "../hooks/animations"

export function Button({ titre, classMa, icon }) {
    return (
        <motion.button
            variants={FadeItem}
            whileHover={{ scale: 0.9}}
            className={`px-3 py-2 rounded-lg ${classMa}`}
            id="openSignup"
        >
            {titre} {icon}
        </motion.button>
    )
}