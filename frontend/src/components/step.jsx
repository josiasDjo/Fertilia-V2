import { motion } from "motion/react"
import { FadeItem } from "../hooks/animations"

export default function Step({ number, title, image}) {
    return <>
        <motion.div 
        variants={FadeItem}
        whileHover={{ scale: 1.1}}
        className="flex flex-col bg-white h-56 w-64 mx-5 items-center justify-center rounded-lg">
            <div className="w-full h-36 flex items-center justify-center">
                <img src={image} alt="" className="object-contain h-full w-auto"/>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="bg-green-600 text-center items-center justify-center flex rounded-full h-10 w-10 m-2">
                    <a href="" className="">
                        <motion.h5 variants={FadeItem} className="cursor-pointer font-bold text-2xl text-center text-white p-2">{number}</motion.h5>
                    </a>
                </div>
                <a href="" className="hover:text-green-600">
                    <motion.p variants={FadeItem}>{title}</motion.p>
                </a>
            </div>
        </motion.div>
    </>
    
}