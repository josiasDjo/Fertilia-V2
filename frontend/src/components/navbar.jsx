import { Fragment } from "react"

function NavBar() {
    return <Fragment>
        <nav className="bg-black h-20 w-full opacity-90 relative items-center flex px-10 text-white justify-between">
            <ul className="">
                <img className="h-16 w-auto hidden md:flex" src="/src/assets/logo&name.png" alt="logo de fertilia" />
                <img className="h-16 w-auto md:hidden" src="/src/assets/logo_only.png" alt="logo de fertilia" />
            </ul>

            <ul className="flex flex-row font-sans">
                <li className="px-2 cursor-pointer">Accueil</li>
                <li className="px-2 cursor-pointer">Fonctionnalités</li>
                <li className="px-2 cursor-pointer">A propos</li>
                <li className="px-2 cursor-pointer">Contact</li>
            </ul>

            <ul>
                <button className="w-44 pr-4 bg-yellow-600 px-3 py-2 text-lg rounded-lg">Se connecter</button>
            </ul>
        </nav>
    </Fragment>
}

export default NavBar