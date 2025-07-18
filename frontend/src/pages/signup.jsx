

export function Signup() {
    return <>
        <div id="signup" class="hidden shadow-xl lg:height_sign height_sign_sm md:height_sign backdrop-blur-md bg-white rounded-3xl w-11/12 m-auto md:w-7/12 lg:p-3 lg:m-auto lg:7/12 lg:flex-row relative">
            <div class="lg:w-5/12 lg:flex hidden h-full pt-4 items-center justify-center rounded-3xl relative overflow-hidden">
                <img class="w-auto h-full justify-center items-center flex rounded-3xl m-auto object-cover relative" src="/images/background_connexion.webp" alt="landscape" />
            </div>

            <div class="flex flex-col w-full lg:w-7/12 lg:px-16 py-3 md:py-4 justify-center items-center relative">
                <button type="button" class="closeSignup absolute top-2 right-2 text-2xl text-yellow-400" id="closeSignup"><i class="fa-solid fa-rectangle-xmark" id="closeConnexion"></i></button>
                <form id="inscription_page_submit" class="lg:w-full sm:w-full md:w-full sm:px-3 md:px-10 items-center relative justify-center flex flex-col lg:p-5">
                    <ul class="flex flex-col w-full text-center">
                        <span class="font-medium">Enregistrez-vous</span>
                    </ul>
                    <ul class="flex flex-col sm:my-4 md:my-4 lg:my-2 w-full">
                        <div class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i class="fa-solid fa-user-tie"></i>
                            <input type="text" placeholder="Nom" name="nom" id="nom" class="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </div>
                        <div class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i class="fa-solid fa-user-tie"></i>
                            <input type="text" placeholder="Prénom" name="prenom" id="prenom" class="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </div>
                        <div class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i class="fa-solid fa-square-phone"></i>
                            <input type="tel" placeholder="Téléphone" name="phone" id="phone" class="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </div>
                        <div class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i class='bx bxs-envelope'></i>
                            <input type="email" placeholder="Votre Email" name="email" id="email_signup" class="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </div>
                        <div class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Votre mot de passe" name="default_mot_de_passe" id="password" class="ml-3 border-none ring-transparent focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" />
                        </div>
                        {/* <!-- <input class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-2 md:mb-2 lg:mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" type="text" placeholder="Nom" name="nom" id="nom"> -->
                        <!-- <input class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-2 md:mb-2 lg:mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" type="text" placeholder="Prénom" name="prenom" id="prenom"> -->
                        <!-- <input class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-2 md:mb-2 lg:mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" type="tel" placeholder="Téléphone" name="phone" id="phone"> -->
                        <!-- <input class="rounded-3xl p-2 px-4 border-2 border-solid border-black border-opacity-10 mb-2 md:mb-2 lg:mb-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" type="email" placeholder="Votre Email" name="email" id="email_signup"> -->
                        <!-- <input class="rounded-3xl p-2 px-4 border-2 border-solid border-black focus:border-opacity-10 border-opacity-10 shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50" type="password" placeholder="Votre mot de passe" name="default_mot_de_passe" id="password"> -->
                     */}
                    </ul>
                    <ul class="flex flex-col w-full text-center">
                        <p class="text-sm" id="message_error_in"></p>
                    </ul>
                    <ul class="flex flex-col w-full">
                        <button class="backgroud_btn_h text-white rounded-3xl lg:my-5 my-2 p-2 border-2 border-solid border-yellow-500 border-opacity-30" type="submit">Envoyer</button>
                        <p class="text-sm text-center">Vous avez déjà un compte ? <button id="" class="openSignin text-blue-500 font-medium" type="button">Se connecter</button></p>
                    </ul>            
                </form>

            </div>
        </div>
    </>
}