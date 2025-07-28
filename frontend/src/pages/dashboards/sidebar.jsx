

export default function SideBar({onViewChange, currentView}) {

    const buttonSide = [
        {icon: <i className='bx bxs-dashboard'></i>, text:"Tableau de bord", id:"dashboard" },
        {icon: <i className="fa-solid fa-tractor"></i>, text:"Gestion de terrain", id:"field_management" },
        {icon: <i className="fa-solid fa-warehouse"></i>, text:"Stock", id:"stock" },
        {icon: <i className="fa-solid fa-truck"></i>, text:"Livraison", id:"delivery" },
        {icon: <i className='bx bxs-cog'></i>, text:"Parametres", id:"parameter" },
        {icon: <i className='bxr  bx-arrow-in-left-square-half'  ></i> , text:"Deconnexion", id:"signout", custClass: "text-red-500"},
    ]

    return (
        <aside id="container_aside" className="bg-white dark:bg-gray-700 text-skin-text list-none relative h-16 flex flex-row m-2
        rounded-tr-xl rounded-tl-xl shadow-lg lg:overflow-y-scroll
        lg:top-1 lg:fixed lg:h-[calc(100%-2rem)] lg:w-56 lg:px-4 lg:py-4 lg:flex lg:flex-col lg:rounded-lg lg:border-none">
            
            <div className="lg:w-28 sm:w-12 h-12 lg:h-24 flex items-center justify-center">
                <img className="h-full w-auto lg:w-44 hidden lg:flex object-contain" src="/images/logo&name.webp" alt="Logo de Fertilia" />
                {/* <!-- <img class="h-full w-auto lg:hidden sm:flex object-contain" src="/images/logo_only.webp" alt="Logo de Fertilia"> --> */}
            </div>

            {buttonSide.map((index, key) => {
                return (
                    
                    <button id={index.id}  key={key}
                    className={` ${index.custClass ? 'text-red-500' : 'text-skin-text'} lg:flex lg:flex-row lg:text-left lg:w-full lg:h-16 lg:rounded-lg lg:border-black lg:p-3 lg:m-2
                    lg:items-center aside_btn hover:bg-skin-dashBtnHover
                    md:flex md:flex-col md:text-center md:items-center
                    w-3/12 px-4 py-2 mr-2 ${currentView === index.id ? 'bg-skin-dashBtnHover' : 'bg-skin-dashBtn'}  `}
                    onClick={() => onViewChange(index.id)}>
                        <li className="text-3xl mr-2 text-skin-text">{index.icon}</li>
                        <li id="btn_label" className="hidden lg:flex text-skin-text">{index.text}</li>
                    </button>
                )
            })}

            {/* <%- include('signout.ejs') %> */}
        </aside>
    )
}