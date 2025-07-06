import NavBar from "../components/navbar";


export function Home() {
    return <>
        < NavBar />
        <Header />
    </>
}

function Header() {
    return <>
        <div class="text-right px-7 py-6 flex flex-row relative mt-28 lg:px-20" id="header">
            <div class="hidden lg:block lg:w-5/12"></div>
            <div class="relative lg:px-6 w-full sm:px-2 lg:w-7/12 flex flex-col lg:items-end">
                <div class="absolute top-2 right-2 w-16 place-items-end lg:w-full lg:mb-5 lg:relative">
                <img class="h-auto w-16 lg:w-24 object-contain" src="/images/logo_only.webp" alt="logo de Fertilia" />
                </div>
                <h1 class="font_header mt-8 text-3xl text-center z-10 lg:text-5xl text-white lg:mb-3 ">La technologie au <br /> service de<span class="backgroud_text_h bg-opacity-60 text-3xl"> <br /> votre terre</span></h1>
                
                <div class="bg-black bg-opacity-30 p-2 relative lg:overflow-hidden">
                <p class="text-white text-xl font-light"> <span class="text-lg"><i class="fas fa-quote-left"></i></span> Transformez votre exploitation 
                    grâce à <span class="backgroud_text_h font-medium">notre plateforme innovante</span>. Surveillez en 
                    temps réel vos cultures et optimisez l'irrigation. Découvrez 
                    comment la technologie peut <span class="backgroud_text_h font-medium">redonner vie à votre terre</span> et propulser votre agriculture vers de <span class="backgroud_text_h font-medium">nouveaux sommets.</span> <span class="text-lg"><i class="fas fa-quote-right"></i></span><br />
                </p>
                <button class="openSignup w-44 pr-4 backgroud_btn_h mt-2 px-3 py-2 text-lg rounded-lg" id="openSignup">Nous réjoindre <i class="fa-solid fa-arrow-right"></i></button> 
                </div>
            </div>
        </div>
    </>
}