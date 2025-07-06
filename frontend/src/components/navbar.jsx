import { Fragment } from "react"

function NavBar() {
    return <Fragment>
        <nav id="navbar" class="animate_nav w-full flex flex-col px-10 py-2 md:h-24 bg-black bg-opacity-90 text-white h-16 
    lg:text-center lg:items-center lg:justify-center lg:w-full lg:h-28 lg:flex lg:flex-row lg:px-10 z-20 fixed top-0 inset-0">

      <button id="hideNav" class="hidden sm:h-12 sm:h-12 md:p-2 md:w-24 md:h-24 sm:justify-center sm:content-center sm:align-center absolute top-4 right-7 z-10">
        <li class="list-none text-4xl">
          <i class="fa-solid fa-xmark"></i>
        </li>
      </button>
      <button id="showNav" class="flex lg:hidden sm:h-12 sm:h-12 md:p-2 md:w-24 md:h-24 sm:justify-center sm:content-center sm:align-center absolute top-4 right-7 z-10">
        <li class="list-none text-4xl lg:hidden">
          <i class="fa-solid fa-bars"></i>
        </li>
      </button>

      <ul class="w-42 items-center md:pt-4 pb-3 relative lg:left-0 lg:mx-10 lg:absolute">
        <img class="h-auto w-36 lg:w-44 hidden lg:block object-contain" src="/images/logo&name.webp" alt="Logo de Fertilia" />
        <img class="h-auto w-12 sm:block lg:hidden lg:w-44 object-contain" src="/images/logo_only.webp" alt="Logo de Fertilia" />
      </ul>
      <ul id="nav_part2" class="relative text-lg text-medium flex-col hidden lg:flex
      lg:text-center lg:items-center lg:flex-row lg:justify-center lg:self-center lg:content-center lg:px-10
      ">
        <a href="#header" class="my-2 p-2">
          <ul class="flex flex-row w-full lg:flex-col lg:pr-4">
            <li class="mr-6"><i class="fa-solid fa-house"></i></li>
            <li class="mr-6">Accueil</li>              
          </ul>
        </a>
        <a href="#avantages" class="my-2 p-2">
          <ul class="lg:pr-4 flex flex-row w-full lg:flex-col">
            <li class="mr-6"><i class="fa-solid fa-chart-simple"></i></li>
            <li class="mr-6">Fonctionnalités</li>
          </ul>
        </a>        
        <a href="#avis" class="my-2 p-2">
          <ul class="pr-4 flex flex-row w-full lg:flex-col">
            <li class="mr-6"><i class="fa-solid fa-circle-info"></i></li>
            <li class="mr-6">A propos</li>
          </ul>
        </a>        
        <a href="#" class="my-2 p-2">
          <ul class="pr-4 flex flex-row w-full lg:flex-col">       
            <li class="mr-6"><i class="fa-solid fa-phone-volume"></i></li>
            <li class="mr-6">Contacts</li>
          </ul>
        </a>

      </ul>   
      <ul id="nav_part3" class="lg:flex flex-row relative lg:absolute lg:right-0 lg:px-10 text-lg text-medium text-center items-center hidden">
        <button id="openSignin" class="openSignin pr-4 backgroud_btn_h px-3 py-2 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-bg-yellow-400 focus:ring-opacity-50">Se connecter <i class="fa-solid fa-arrow-right-to-bracket"></i></button>
      </ul>
    </nav>
    </Fragment>
}

export default NavBar