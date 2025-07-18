

export function Signin () {
    return <>
        <div id="signin" className="flex shadow-xl w-full h-screen backdrop-blur-md bg-skin-bg text-skin-text lg:flex-row relative">
            <div className="flex flex-col w-full lg:w-6/12 px-7 lg:px-16 py-3 md:py-4 justify-center items-center relative">
                {/* <button type="button" id="closeSignin" className="closeSignin absolute top-2 left-2 text-2xl text-yellow-400"><i className="fa-solid fa-rectangle-xmark" id="closeConnexion"></i></button> */}
                
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
                    <ul className="flex flex-col my-3 w-full">
                        <div className="rounded-lg p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i className='bx bxs-envelope'></i>
                            <input type="email" placeholder="Votre Email" name="email" id="email_signin" className="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </div>
                        <div className="rounded-lg p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
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
                        <button className="bg-skin-accentSec text-skin-text rounded-lg my-5 p-2 border-2 border-solid border-yellow-500 border-opacity-30" type="submit">Se connecter</button>
                        <p className="text-sm text-center">Vous n'avez pas un compte ? <button type="button" className="openSignup text-blue-500 font-medium">S'inscrire</button></p>
                    </ul>            
                </form>

            </div>
            <div className="lg:w-6/12 lg:flex hidden h-full items-center justify-center relative">
                <img className="w-full h-full justify-center items-center flex m-auto object-cover relative" src="/images/background_connexion.webp" alt="landscape" />
            </div>
        </div>
    </>
}