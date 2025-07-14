import { motion } from "motion/react"
import { FadeContainer, FadeItem } from "../hooks/animations"
export default function Testimony({name, role, text}) {
    return (
        <motion.div 
        variants={FadeItem}
        className="w-full lg:w-96 lg:m-3 bg-gray-200 h-auto mb-5 relative p-3 text-left lg:p-5 rounded-tl-3xl rounded-br-3xl border-b-2 border-double border-yellow-500">
            
            <div className="flex flex-row items-center">
                <div className="h-14 w-14 relative rounded-full overflow-hidden m-4">
                    <img src="/images/asset1.webp" alt="Image d'une personne" className="object-cover w-full h-24" />
                </div>
                <div className="">
                    <span className="font-bold text-lg">{name}</span>
                    <p className="">{role}</p>
                </div>
            </div>

            <div id="ratings" className="w-full flex relative space-x-1 lg:w-2/4">
                <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
                </svg>
                <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
                </svg>
                <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
                </svg>
                <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
                </svg>
                <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
                </svg>
            </div>
            <div className="list-none absolute top-0 right-5">
                <li className="text-3xl backgroud_text_h"><i className="fas fa-quote-right"></i></li>
            </div>
            {/* <p className="font-light m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus quod obcaecati 
                soluta corrupti
            </p> */}
            <p className="font-light m-3">{text}</p>

        </motion.div>
    )
}