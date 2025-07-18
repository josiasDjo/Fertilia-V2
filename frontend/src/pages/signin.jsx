

export function Signin () {
    return <>
        <div id="signin" className="hidden shadow-xl lg:height_sign height_sign_sm md:height_sign backdrop-blur-md bg-white rounded-3xl w-11/12 m-auto md:w-7/12 lg:p-3 lg:m-auto lg:7/12 lg:flex-row relative">
            <div className="flex flex-col w-full lg:w-7/12 lg:px-16 py-3 md:py-4 justify-center items-center relative">
                <button type="button" id="closeSignin" className="closeSignin absolute top-2 left-2 text-2xl text-yellow-400"><i className="fa-solid fa-rectangle-xmark" id="closeConnexion"></i></button>
                
                <h4 className="font_header text-center text-xl md:text-3xl font-bold">Ravie de vous revoir</h4>
                <form id="connexion_page_send" className="lg:w-full sm:w-full md:w-full px-2 md:px-10 items-center relative justify-center flex flex-col lg:p-5">
                    <ul className="flex flex-col w-full text-center">
                        <span className="font-medium">Entrez vos informations</span>
                        <button type="button" className="rounded-3xl p-2 border-2 border-solid font-medium border-black border-opacity-10 shadow-lg my-3 focus:outline-none 
                        focus:ring-2 hover:ring-2 hover:border-yellow-400 hover:text-yellow-400 focus:ring-bg-yellow-400 focus:ring-opacity-50 flex flex-row
                        items-center justify-center">
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
                        <div className="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i className='bx bxs-envelope'></i>
                            <input type="email" placeholder="Votre Email" name="email" id="email_signin" class="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </div>
                        <div className="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i className="fa-solid fa-lock"></i>
                            <input className="ml-2 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" type="password" placeholder="Votre mot de passe" name="mot_de_passe" id="password_signin" />
                        </div>
                    </ul>
                    <ul className="flex flex-col w-full text-center">
                        <p className="text-sm" id="message_error"></p>
                    </ul>
                    <ul className="flex flex-col w-full text-right hover:border-2 hover:border-solid hover:border-blue-500">
                        <a href="#" className="text-sm hover:text-blue-500">Mot de passe oublié</a>
                    </ul>
            
                    <ul className="flex flex-col w-full">
                        <button className="backgroud_btn_h text-white rounded-3xl my-5 p-2 border-2 border-solid border-yellow-500 border-opacity-30" type="submit">Se connecter</button>
                        <p className="text-sm text-center">Vous n'avez pas un compte ? <button type="button" class="openSignup text-blue-500 font-medium">S'inscrire</button></p>
                    </ul>            
                </form>

            </div>
            <div className="lg:w-5/12 lg:flex hidden h-full pt-4 items-center justify-center rounded-3xl relative overflow-hidden">
                <img className="w-auto h-full justify-center items-center flex rounded-3xl m-auto object-cover relative" src="/images/background_connexion.webp" alt="landscape" />
            </div>
        </div>
    </>
}