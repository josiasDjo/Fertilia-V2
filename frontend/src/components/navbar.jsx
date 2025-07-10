import { Fragment } from "react"
import { motion } from "motion/react"
import { FadeContainer, FadeItem } from "../hooks/animations"

function NavBar() {
    return <Fragment>
        <motion.nav 
        variants={FadeContainer}
        initial="hidden"
        whileInView="show"
        id="navbar" className="animate_nav w-full flex flex-col px-10 py-2 bg-white text-gray-900 bg-opacity-90 h-16 
    lg:text-center lg:items-center lg:justify-center lg:w-full lg:flex lg:flex-row lg:px-10 z-20 fixed top-0 inset-0 shadow-lg blur backdrop-blur-lg">

      <motion.button variants={FadeItem} id="hideNav" className="hidden text-black sm:h-12 sm:h-12 md:p-2 md:w-24 md:h-24 sm:justify-center sm:content-center sm:align-center absolute top-4 right-7 z-10">
        <li className="list-none text-4xl">
          <i className="fa-solid fa-xmark"></i>
        </li>
      </motion.button>
      <motion.button variants={FadeItem} id="showNav" className="flex lg:hidden sm:h-12 sm:h-12 md:p-2 md:w-24 md:h-24 sm:justify-center sm:content-center sm:align-center absolute top-4 right-7 z-10">
        <li className="list-none text-4xl lg:hidden">
          <i className="fa-solid fa-bars"></i>
        </li>
      </motion.button>

      <ul className="w-42 items-center flex relative lg:left-0 lg:mx-2 lg:absolute">
        <motion.img variants={FadeItem} className="h-12 w-auto lg:w-44 hidden lg:block object-contain" src="/images/logo&name.webp" alt="Logo de Fertilia" />
        <motion.img variants={FadeItem} className="h-12 w-auto sm:block lg:hidden lg:w-44 object-contain" src="/images/logo_only.webp" alt="Logo de Fertilia" />
      </ul>
      <motion.ul id="nav_part2" className="relative text-lg text-medium flex-col hidden lg:flex
      lg:text-center lg:items-center lg:flex-row lg:justify-center lg:self-center lg:content-center lg:px-10
      ">
        <motion.a variants={FadeItem} href="#header" className="my-2 p-2">
          <ul className="flex flex-row w-full lg:flex-col lg:pr-4">
            <li className="mr-6"><i className="fa-solid fa-house"></i></li>
            <li className="mr-6">Accueil</li>              
          </ul>
        </motion.a>
        <motion.a variants={FadeItem} href="#avantages" class="my-2 p-2">
          <ul className="lg:pr-4 flex flex-row w-full lg:flex-col">
            <li className="mr-6"><i className="fa-solid fa-chart-simple"></i></li>
            <li className="mr-6">Fonctionnalités</li>
          </ul>
        </motion.a>        
        <motion.a variants={FadeItem} href="#avis" class="my-2 p-2">
          <ul className="pr-4 flex flex-row w-full lg:flex-col">
            <li className="mr-6"><i className="fa-solid fa-circle-info"></i></li>
            <li className="mr-6">A propos</li>
          </ul>
        </motion.a>        
        <motion.a variants={FadeItem} href="#" class="my-2 p-2">
          <ul className="pr-4 flex flex-row w-full lg:flex-col">       
            <li className="mr-6"><i className="fa-solid fa-phone-volume"></i></li>
            <li className="mr-6">Contacts</li>
          </ul>
        </motion.a>

      </motion.ul>   
      <motion.ul variants={FadeItem} id="nav_part3" className="lg:flex flex-row relative lg:absolute lg:right-0 lg:px-10 text-lg text-medium text-center items-center hidden">
        <button id="openSignin" className="openSignin pr-4 backgroud_btn_h text-white px-3 py-2 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">Se connecter <i class="fa-solid fa-arrow-right-to-bracket"></i></button>
      </motion.ul>
    </motion.nav>
    </Fragment>
}

export default NavBar