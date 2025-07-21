

export default function SideBar() {
    return (
        <aside id="container_aside" class="bg-white list-none relative h-16 text-black flex flex-row
        rounded-tr-xl rounded-tl-xl shadow-lg
        lg:top-3 lg:fixed lg:h-screen lg:w-56 lg:bg-white lg:px-4 lg:py-4 lg:text-black lg:flex lg:flex-col lg:rounded-lg lg:border-none">
            
            <div class="lg:w-28 sm:w-12 h-12 lg:h-24 flex items-center justify-center">
                <img class="h-full w-auto lg:w-44 hidden lg:flex object-contain" src="/images/logo&name.webp" alt="Logo de Fertilia" />
                {/* <!-- <img class="h-full w-auto lg:hidden sm:flex object-contain" src="/images/logo_only.webp" alt="Logo de Fertilia"> --> */}
            </div>

            <button id="dashboard" class="lg:flex lg:flex-row lg:text-left lg:w-full lg:h-16 lg:rounded-lg lg:border-black lg:p-3 lg:m-2
            lg:items-center aside_btn
            md:flex md:flex-col md:text-center md:items-center
            w-3/12 px-4 py-2 mr-2">
                <li class="text-3xl mr-2"><i class='bx bxs-dashboard'></i></li>
                <li id="btn_label" class="hidden lg:flex">Tableau de bord</li>
            </button>
            <button id="field_management" class="lg:flex lg:flex-row lg:text-left lg:w-full lg:h-16 lg:rounded-lg lg:border-black lg:p-3 lg:m-2
            lg:items-center aside_btn
            md:flex md:flex-col md:text-center md:items-center
            w-3/12 mr-2 py-2 flex">
                <li class="text-3xl mr-2"><i class="fa-solid fa-tractor"></i></li>
                <li id="btn_label" class="hidden lg:flex">Gestion de terrain </li>
            </button>
            <button id="stock" class="lg:flex lg:flex-row lg:text-left lg:w-full lg:h-16 lg:rounded-lg  lg:border-black lg:p-3 lg:m-2
            lg:items-center aside_btn
            md:flex md:flex-col md:text-center md:items-center
            w-3/12 mr-2 py-2">
                <li class="text-2xl mr-2"><i class="fa-solid fa-warehouse"></i></li>
                <li id="btn_label" class="hidden lg:flex">Stock</li>
            </button>
            <button id="delivery" class="lg:flex lg:flex-row lg:text-left lg:w-full lg:h-16 lg:rounded-lg  lg:border-black lg:p-3 lg:m-2
            lg:items-center lg:mr-2 aside_btn
            md:flex md:flex-col md:text-center md:items-center
            w-3/12 py-2">
                <li class="text-3xl mr-2"><i class="fa-solid fa-truck"></i></li>
                <li id="btn_label" class="hidden lg:flex">Livraison</li>
            </button>

            {/* <%- include('signout.ejs') %> */}
        </aside>
    )
}