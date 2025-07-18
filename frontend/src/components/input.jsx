import { motion } from "framer-motion"
import { FadeItem } from "../hooks/animations"


export function Input({icon, type, placeholder, name, id}) {
    return (
        <motion.div variants={FadeItem} className="rounded-3xl p-2 px-4 bg-skin-bgSec border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
            {/* <i className="fa-solid fa-user-tie"></i> */}
            {icon}
            <input type={type} placeholder={placeholder} name={name} id={id} className="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
        </motion.div>
    )
}