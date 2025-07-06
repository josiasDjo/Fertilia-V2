import NavBar from "../components/navbar";


export function Home() {
    return <>
        < NavBar />
        <Header />
        <Avantages />
    </>
}

function Header() {
    return <>
        <div className="text-right px-7 py-6 flex flex-row relative mt-28 lg:px-20" id="header">
            <div className="hidden lg:block lg:w-5/12"></div>
            <div className="relative lg:px-6 w-full sm:px-2 lg:w-7/12 flex flex-col lg:items-end">
                <div className="absolute top-2 right-2 w-16 place-items-end lg:w-full lg:mb-5 lg:relative">
                <img className="h-auto w-16 lg:w-24 object-contain" src="/images/logo_only.webp" alt="logo de Fertilia" />
                </div>
                <h1 className="font_header mt-8 text-3xl text-center z-10 lg:text-5xl text-white lg:mb-3 ">La technologie au <br /> service de<span class="backgroud_text_h bg-opacity-60 text-3xl"> <br /> votre terre</span></h1>
                
                <div className="bg-black bg-opacity-30 p-2 relative lg:overflow-hidden">
                <p classclassName="text-white text-xl font-light"> <span className="text-lg"><i class="fas fa-quote-left"></i></span> Transformez votre exploitation 
                    grâce à <span class="backgroud_text_h font-medium">notre plateforme innovante</span>. Surveillez en 
                    temps réel vos cultures et optimisez l'irrigation. Découvrez 
                    comment la technologie peut <span class="backgroud_text_h font-medium">redonner vie à votre terre</span> et propulser votre agriculture vers de <span class="backgroud_text_h font-medium">nouveaux sommets.</span> <span class="text-lg"><i class="fas fa-quote-right"></i></span><br />
                </p>
                <button className="openSignup w-44 pr-4 backgroud_btn_h mt-2 px-3 py-2 text-lg rounded-lg" id="openSignup">Nous réjoindre <i class="fa-solid fa-arrow-right"></i></button> 
                </div>
            </div>
        </div>
    </>
}

function Avantages() {
    return <section id="avantages" className="p-2 lg:p-7 w-full lg:p-20">
      <h3 className="text-3xl mt-8 font-bold lg:text-3xl text-center">Avantages</h3>
  
      <div className="w-full flex flex-wrap items-center justify-center my:2 lg:my-10">
        <div className="w-96 lg:w-80 h-auto bg-white m-2 lg:m-5 rounded-lg shadow-xl p-2">
          <div id="" className="w-full h-48">
            <img src="/images/gestion_culture/image1.webp" alt="Femmes cultuvant ensemble" class="object-cover h-48 w-full" />
          </div>
          <h4 className="mt-2 font-medium">Gestion Des Cultures</h4>
          <p className="font-light">Optimisez chaque étape de vos plantations avec notre module dédié. Suivez l'évolution de vos 
            cultures en temps réel et recevez des recommandations personnalisées pour adapter vos pratiques 
            agricoles et améliorer vos rendements.
          </p>
          <button className="pr-4 backgroud_btn_h mt-2 px-3 py-2 rounded-lg text-lg text-white font-bold w-full">Voir Plus   <i class="fa-solid fa-circle-plus"></i></button>
        </div>
        <div class="w-96 lg:w-80 h-auto bg-white m-5 rounded-lg shadow-xl p-2">
          <div id="" class="w-full h-48">
            <img src="/images/irrigations/irrigation.webp" alt="irrigation automatique" className="object-cover h-48 w-full" />
          </div>
          <h4 className="mt-2 font-medium">Irrigation Automatique </h4>
          <p className="font-light">            
            Réalisez une gestion de l'eau intelligente grâce à notre système d'irrigation automatique. 
            Les capteurs mesurent l'humidité du sol et activent l'irrigation au moment optimal, garantissant une 
            utilisation efficace de l'eau et favorisant une croissance optimale des cultures.
          </p>
          <button className="pr-4 backgroud_btn_h mt-2 px-3 py-2 rounded-lg text-lg text-white font-bold w-full">Voir Plus   <i class="fa-solid fa-circle-plus"></i></button>
        </div>
        <div className="w-96 lg:w-80 h-auto bg-white m-5 rounded-lg shadow-xl p-2">
          <div id="" className="w-full h-48">
            <img src="/images/image2.webp" alt="Personnes analysant les courbes de croissance" className="object-cover h-48 w-full" />
          </div>
          <h4 className="mt-2 font-medium">Analyse des rendements</h4>
          <p className="font-light">
            Transformez vos données en actions concrètes avec notre outil d'analyse des rendements. 
            Visualisez l'évolution de vos récoltes, identifiez les tendances et ajustez vos stratégies pour 
            maximiser vos profits et pérenniser la performance de votre exploitation.
          </p>
          <button className="pr-4 backgroud_btn_h mt-2 px-3 py-2 rounded-lg text-lg text-white font-bold w-full">Voir Plus   <i class="fa-solid fa-circle-plus"></i></button>
        </div>
      </div>
      
    </section>
}