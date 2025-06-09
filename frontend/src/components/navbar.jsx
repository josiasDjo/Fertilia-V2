import { Fragment } from "react"

function NavBar() {
    return <Fragment>
        <nav className="bg-black h-20 w-full opacity-90 relative items-center flex px-10">
            <img className="h-16 w-auto" src="/src/assets/logo&name.png" alt="logo de fertilia" />
        </nav>
    </Fragment>
}

export default NavBar