

export default function NavBarDash() {
    return (
        <nav class="relative h-16 m-3 lg:ml-6 px-5 shadow-lg flex flex-row justify-between items-center bg-white rounded-lg">
            {/* <!-- Logo --> */}
            <div class="lg:w-28 sm:w-12 h-12 lg:h-24 flex items-center justify-center">
                {/* <!-- <img class="h-full w-auto lg:w-44 hidden lg:flex object-contain" src="/images/logo&name.webp" alt="Logo de Fertilia"> --> */}
                <img class="h-full w-auto lg:hidden sm:flex object-contain" src="/images/logo_only.webp" alt="Logo de Fertilia" />
            </div>

            {/* <!-- Texte + Profil --> */}
            <div class="flex flex-row items-center ml-auto w-auto h-16">
                <div class="flex flex-row text-center items-center justify-center mr-2">
                    <p>Bonjour 👋,</p>
                    <h2 class="font-bold ml-1">Jean</h2>
                </div>
                <div class="w-12 h-12 rounded-full overflow-hidden" id="showMoreOptionPofil">
                    <img src="/images/images_pofile.jpg" alt="profile" class="object-cover w-full h-full" />
                </div>
            </div>
        </nav>
    )
}