import { motion } from "framer-motion"
import { FadeItem } from "../hooks/animations"


export function Input({icon, type, placeholder, name, id, onChange}) {
    return (
        <motion.div variants={FadeItem} className="rounded-lg my-2 p-2 px-2 border-2 border-solid bg-white text-black border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
            {/* <i className="fa-solid fa-user-tie"></i> */}
            {icon}
            <input type={type} placeholder={placeholder} onChange={onChange} name={name} id={id} className="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
        </motion.div>
    )
}