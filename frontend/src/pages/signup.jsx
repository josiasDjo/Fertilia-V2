import { Input } from "../components/input"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FadeContainer, FadeItem } from "../hooks/animations"

export function Signup() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    return <>
        <div id="signup" class="flex shadow-xl h-screen bg-skin-bg text-skin-text w-full lg:p-3 lg:m-auto lg:7/12 lg:flex-row relative">
            <div class="lg:w-5/12 lg:flex hidden h-full pt-4 items-center justify-center rounded-3xl relative overflow-hidden">
                <img class="w-auto h-full justify-center items-center flex rounded-3xl m-auto object-cover relative" src="/images/background_connexion.webp" alt="landscape" />
            </div>

            <div className="flex flex-col w-full lg:w-7/12 lg:px-16 py-3 md:py-4 justify-center items-center relative">
                <motion.button variants={FadeItem} type="button" id="closeSignin" onClick={handleNavigate} className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full text-center items-center justify-center flex w-10 h-10 closeSignin absolute top-16 left-6 text-2xl text-skin-text"><i className="fa-solid fa-arrow-left"></i></motion.button>

                <form id="inscription_page_submit" className="lg:w-full sm:w-full md:w-full sm:px-3 md:px-10 items-center relative justify-center flex flex-col lg:p-5">
                    <ul className="flex flex-col w-full text-center">
                        <span className="font-medium">Enregistrez-vous</span>
                    </ul>
                    <ul className="text-gray-900 flex flex-col sm:my-4 md:my-4 lg:my-2 w-full">
                        <Input icon={<i className="fa-solid fa-user-tie"></i>} type="text" placeholder="Nom" name="nom" id="nom" />
                        <Input icon={<i className="fa-solid fa-user-tie"></i>} type="text" placeholder="Prenom" name="prenom" id="prenom" />
                        <Input icon={<i className="fa-solid fa-square-phone"></i>} type="tel" placeholder="Telephone" name="phone" id="phone" />
                        <Input icon={<i className='bx bxs-envelope'></i>} type="email" placeholder="Votre Email" name="email_signup" id="email_signup" />
                        <Input icon={<i className="fa-solid fa-lock"></i>} type="password" placeholder="Mot de passe" name="default_mot_de_passe" id="default_mot_de_passe" />
                    </ul>
                    <ul className="flex flex-col w-full text-center">
                        <p className="text-sm" id="message_error_in"></p>
                    </ul>
                    <ul className="flex flex-col w-full">
                        <button className="backgroud_btn_h text-white rounded-3xl lg:my-5 my-2 p-2 border-2 border-solid border-yellow-500 border-opacity-30" type="submit">Envoyer</button>
                        <p className="text-sm text-center">Vous avez déjà un compte ? <Link to="/login" ><button id="" class="openSignin text-blue-500 font-medium" type="button">Se connecter</button></Link></p>
                    </ul>            
                </form>

            </div>
        </div>
    </>
}