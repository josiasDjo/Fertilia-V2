import { Fragment, useEffect, useState } from "react"
// import { motion } from "motion/react"
import { motion } from "framer-motion"
import { FadeContainer, FadeItem } from "../hooks/animations"
import { Button } from "./button"
import ToggleTheme from "../hooks/toggleTheme";
import { scrollToPrograms } from "../hooks/scroll";

function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false)

  useEffect(() => {
    const navbar = document.getElementById("navbar")
    const navMobile = document.getElementById("nav_part2")
    const hideNav = document.getElementById("hideNav")
    const showNav = document.getElementById("showNav")
    const nav_part3 = document.getElementById("nav_part3")

    if(navBarOpen) {
      navbar.classList.add("h-auto")

      navMobile.classList.remove('hidden')
      navMobile.classList.add('flex')

      hideNav.classList.remove('hidden')
      hideNav.classList.add('flex')
      showNav.classList.remove('flex')
      showNav.classList.add('hidden')

      nav_part3.classList.remove('hidden')
    } else {
      navbar.classList.remove("h-auto")

      navMobile.classList.add('hidden')
      navMobile.classList.remove('flex')

      hideNav.classList.add('hidden')
      hideNav.classList.remove('flex')
      showNav.classList.add('flex')
      showNav.classList.remove('hidden')

      nav_part3.classList.add('hidden')
    }

    console.log('Navbar', navBarOpen)
  }, [navBarOpen])


  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') return 'dark'
    if (stored === 'light') return 'light'
    return 'system' // fallback to OS
  });


    return <Fragment>
        <motion.nav 
        variants={FadeContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        id="navbar" className="animate_nav w-full flex flex-col px-10 py-2 bg-skin-bg text-skin-text h-16 
    lg:text-center lg:items-center lg:justify-center lg:w-full lg:flex lg:flex-row lg:px-10 z-20 fixed top-0 inset-0 shadow-lg backdrop-blur-xs">

      <motion.button variants={FadeItem} onClick={() => setNavBarOpen(!navBarOpen)} id="hideNav" className="hidden sm:h-12 md:p-2 md:w-24 md:h-24 sm:justify-center sm:content-center sm:align-center absolute top-4 right-7 z-10">
        <li className="list-none text-4xl">
          <i className="fa-solid fa-xmark"></i>
        </li>
      </motion.button>
      <motion.button variants={FadeItem} onClick={() => setNavBarOpen(!navBarOpen)} id="showNav" className="flex lg:hidden sm:h-12 md:p-2 md:w-24 md:h-24 sm:justify-center sm:content-center sm:align-center absolute top-4 right-7 z-10">
        <li className="list-none text-4xl lg:hidden">
          <i className="fa-solid fa-bars"></i>
        </li>
      </motion.button>

      <ul className="w-42 items-center flex relative lg:left-0 lg:mx-2 lg:absolute">
        <motion.img variants={FadeItem} className="h-12 w-auto lg:w-44 hidden lg:block object-contain" src="/images/logo&name.webp" alt="Logo de Fertilia" />
        <motion.img variants={FadeItem} className="h-12 w-auto sm:block lg:hidden lg:w-44 object-contain" src="/images/logo_only.webp" alt="Logo de Fertilia" />
      </ul>
      <motion.ul variants={FadeItem} id="nav_part2" className="relative text-lg text-medium flex-col hidden pt-10 lg:flex
      lg:text-center lg:items-center lg:flex-row lg:justify-center lg:self-center lg:content-center lg:py-0 lg:px-10
      ">
        <motion.button variants={FadeItem} whileHover={{ scale: 0.9 }} className="my-2 p-2" onClick={() => scrollToPrograms('header')}>
          <ul className="flex flex-row w-full lg:flex-col lg:pr-4">
            <li className="mr-6"><i className="fa-solid fa-house"></i></li>
            <li className="mr-6">Accueil</li>              
          </ul>
        </motion.button>
        <motion.button variants={FadeItem} whileHover={{ scale: 0.9}} className="my-2 p-2" onClick={() => scrollToPrograms('avantages')}>
          <ul className="lg:pr-4 flex flex-row w-full lg:flex-col">
            <li className="mr-6"><i className="fa-solid fa-chart-simple"></i></li>
            <li className="mr-6">Fonctionnalités</li>
          </ul>
        </motion.button>        
        <motion.button variants={FadeItem} whileHover={{ scale: 0.9}} className="my-2 p-2" onClick={() => scrollToPrograms('about')}>
          <ul className="pr-4 flex flex-row w-full lg:flex-col">
            <li className="mr-6"><i className="fa-solid fa-circle-info"></i></li>
            <li className="mr-6">A propos</li>
          </ul>
        </motion.button>        
        <motion.button variants={FadeItem} whileHover={{ scale: 0.9}} className="my-2 p-2"onClick={() => scrollToPrograms('contact')}>
          <ul className="pr-4 flex flex-row w-full lg:flex-col">       
            <li className="mr-6"><i className="fa-solid fa-phone-volume"></i></li>
            <li className="mr-6">Contacts</li>
          </ul>
        </motion.button>

      </motion.ul> 
      <motion.ul variants={FadeItem} id="nav_part3" className="lg:flex flex-row relative lg:absolute lg:right-0 lg:px-10 text-lg text-medium lg:text-center items-center hidden">
        <Button 
        onClick={ToggleTheme}
        icon={darkMode ? (
          <i className='bxr  bx-sun'  ></i>
        ) : (
          <i className="fa-solid fa-moon" ></i>
        )} 
        classMa="dark_mode_color text-white text-center flex items-center justify-center my-5 lg:mx-5 w-10 h-10 rounded-full" />
        <a href="/login">
          <Button 
          titre="Se connecter" 
          icon={<i className="fa-solid fa-arrow-right-to-bracket"></i>} 
          classMa="openSignin pr-4 backgroud_btn_h text-white px-3 py-2 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-opacity-50" />
        </a>
      </motion.ul>
    </motion.nav>
    </Fragment>
}

export default NavBar