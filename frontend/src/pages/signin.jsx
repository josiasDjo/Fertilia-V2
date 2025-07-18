import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FadeContainer } from "../hooks/animations"

export function Signin () {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    return <>
        <motion.div id="signin" 
        variants={FadeContainer}
        className="flex shadow-xl w-full h-screen backdrop-blur-md bg-skin-bg text-skin-text lg:flex-row relative">
            <div className="flex flex-col w-full lg:w-6/12 px-7 lg:px-16 py-3 md:py-4 justify-center items-center relative">
                <button type="button" id="closeSignin" onClick={handleNavigate} className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full text-center items-center justify-center flex w-10 h-10 closeSignin absolute top-16 left-6 text-2xl text-skin-text"><i className="fa-solid fa-arrow-left"></i></button>
                
                <h4 className="text-center text-xl md:text-3xl font-bold">Ravie de vous revoir</h4>
                <form id="connexion_page_send" className="w-full md:w-9/12 px-2 md:px-10 items-center relative justify-center flex flex-col lg:p-5">
                    <ul className="flex flex-col w-full text-center">
                        <span className="text-sm">Entrez vos informations</span>
                        <button type="button" className="rounded-xl p-2 border-2 dark:bg-gray-600 border-solid font-medium border-black border-opacity-10 shadow-lg my-3 focus:outline-none 
                        flex flex-row items-center justify-center">
                            <img src="/images/google.png" alt="google image" className="h-6 w-auto mr-3" />
                            Continuer avec Google
                        </button>
                    </ul>
                    <ul className="flex flex-row items-center justify-center content-center relative">
                        <hr />
                        <span className="text-lg">ou</span>
                        {/* <!-- <hr>  --> */}
                    </ul>
                    <ul className="flex flex-col my-3 w-full text-gray-900">
                        <div className="rounded-lg p-2 px-4 border-2 border-solid bg-white border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i className='bx bxs-envelope'></i>
                            <input type="email" placeholder="Votre Email" name="email" id="email_signin" className="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </div>
                        <div className="rounded-lg p-2 px-4 border-2 border-solid bg-white border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i className="fa-solid fa-lock"></i>
                            <input className="ml-2 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" type="password" placeholder="Votre mot de passe" name="mot_de_passe" id="password_signin" />
                        </div>
                    </ul>
                    <ul className="flex flex-col w-full text-center">
                        <p className="text-sm" id="message_error"></p>
                    </ul>
                    <ul className="flex flex-col w-full text-right">
                        <a href="#" className="text-sm hover:text-blue-500">Mot de passe oublié</a>
                    </ul>
            
                    <ul className="flex flex-col w-full">
                        <button className="bg-skin-accentSec text-white rounded-lg my-5 p-2 border-2 border-solid border-yellow-500 border-opacity-30" type="submit">Se connecter</button>
                        <p className="text-sm text-center">Vous n'avez pas un compte ? <button type="button" className="openSignup text-blue-500 font-medium">S'inscrire</button></p>
                    </ul>            
                </form>

            </div>
            <div className="lg:w-6/12 lg:flex hidden h-full items-center justify-center relative">
                <img className="w-full h-full justify-center items-center flex m-auto object-cover relative" src="/images/background_connexion.webp" alt="landscape" />
            </div>
        </motion.div>
    </>
}