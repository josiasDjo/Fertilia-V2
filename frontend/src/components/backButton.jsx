import { motion } from "framer-motion"
import { FadeItem } from "../hooks/animations"
import { useNavigate } from "react-router-dom"

export default function BackButton() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <motion.button 
        variants={FadeItem} 
        type="button" id="closeSignin" 
        onClick={handleNavigate} 
        className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full text-center items-center justify-center flex w-10 h-10 closeSignin fixed inset-0 top-8 left-6 text-2xl text-skin-text">
            <i className="fa-solid fa-arrow-left"></i>
        </motion.button>
    )
}