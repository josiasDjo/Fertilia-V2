import { Input } from "../components/input"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FadeContainer, FadeItem } from "../hooks/animations"
import BackButton from "../components/backButton"
import { useState } from "react"

export default function Signup() {
    const [formData, setFormData] = useState({
        non : "",
        prenom : "",
        phone : "",
        email : "",
        default_mot_de_passe : ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submit : ", formData)

        fetch("/api/utilisateurs/signup", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Réponse du serveur :", data);
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi :", error);
            });
    }


    return <>
        <motion.div 
        variants={FadeContainer} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        id="signup" className="flex shadow-xl w-full h-screen backdrop-blur-md bg-skin-bg text-skin-text lg:flex-row relative">
            <motion.div variants={FadeItem} className="lg:w-6/12 lg:flex hidden h-full items-center justify-center relative">
                <img className="w-full h-full justify-center items-center flex m-auto object-cover relative" src="/images/background_connexion.webp" alt="landscape" />
            </motion.div>

            <motion.div variants={FadeItem} className="flex flex-col w-full lg:w-6/12 px-7 lg:px-16 py-3 md:py-4 justify-center items-center relative">
                <BackButton />
                <form id="inscription_page_submit" onSubmit={handleSubmit} className="w-full md:w-9/12 px-2 md:px-10 items-center relative justify-center flex flex-col lg:p-5">
                    <motion.ul variants={FadeItem} className="flex flex-col w-full text-center mb-7">
                        <span className="font-medium">Enregistrez-vous</span>
                    </motion.ul>
                    <motion.ul variants={FadeItem} className="text-gray-900 flex flex-col sm:my-4 md:my-4 lg:my-2 w-full">
                        <Input icon={<i className="fa-solid fa-user-tie"></i>} type="text" placeholder="Nom" name="nom" id="nom" onChange={handleChange} />
                        <Input icon={<i className="fa-solid fa-user-tie"></i>} type="text" placeholder="Prenom" name="prenom" id="prenom" onChange={handleChange} />
                        <Input icon={<i className="fa-solid fa-square-phone"></i>} type="tel" placeholder="Telephone" name="phone" id="phone" onChange={handleChange} />
                        <Input icon={<i className='bx bxs-envelope'></i>} type="email" placeholder="Votre Email" name="email" id="email_signup" onChange={handleChange} />
                        <Input icon={<i className="fa-solid fa-lock"></i>} type="password" placeholder="Mot de passe" name="default_mot_de_passe" id="default_mot_de_passe" onChange={handleChange} />
                    </motion.ul>
                    <motion.ul variants={FadeItem} className="flex flex-col w-full text-center">
                        <p className="text-sm" id="message_error_in"></p>
                    </motion.ul>
                    <motion.ul variants={FadeItem} className="flex flex-col w-full">
                        <button className="bg-skin-accentSec text-white rounded-lg lg:my-5 my-2 p-2 border-2 border-solid border-yellow-500 border-opacity-30" type="submit">Envoyer</button>
                        <p className="text-sm text-center">Vous avez déjà un compte ? <Link to="/login" className="openSignin text-blue-500 font-medium" >Se connecter</Link></p>
                    </motion.ul>            
                </form>

            </motion.div>
        </motion.div>
    </>
}