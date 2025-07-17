import { motion } from "framer-motion"
import { FadeItem } from "../hooks/animations"
import { Button } from "./button"

export function FeatureCard({titre, image, para, index, icon}) {
    return (
        <motion.div variants={FadeItem} className="w-96 lg:w-80 h-auto bg-white dark:bg-gray-700 text-black dark:text-white m-2 lg:m-5 rounded-lg shadow-xl p-2">
            <div id="" className="w-full h-48">
                <img src={image} alt={index} className="object-cover h-48 w-full" />
            </div>
            <h4 className="mt-2 font-medium"> {titre} </h4>
            <p className="font-light"> {para} </p>
            {/* <button className="pr-4 backgroud_btn_h mt-2 px-3 py-2 rounded-lg text-lg text-white font-bold w-full">Voir Plus   </button> */}
            <Button titre="Voir Plus  " icon={icon} classMa="pr-4 backgroud_btn_h mt-2 px-3 py-2 rounded-lg text-lg text-white font-bold w-full" />
        </motion.div>
    )
}