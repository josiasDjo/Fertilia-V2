import NavBar from "../components/navbar";
import { motion } from "motion/react"
import { FadeContainer, FadeItem } from "../hooks/animations";

export function Home() {
    return <div className="scroll-smooth text-gray-900">
        < NavBar />
        <Header />
        <Avantages />
        <Avis />
        <Footer />
    </div>
}

function Header() {
    return <>
        <motion.div 
        variants={FadeContainer} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-right px-7 py-6 flex flex-row relative mt-28 lg:px-20" id="header">
            <div className="hidden lg:block lg:w-5/12"></div>
            <motion.div 
              variants={FadeContainer} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            className="relative lg:px-6 w-full sm:px-2 lg:w-7/12 flex flex-col lg:items-end">
                <div className="relative w-full h-auto pb-10 place-items-end">
                  <motion.img 
                  variants={FadeItem} 
                  className="h-auto w-16 lg:w-24 object-contain absolute right-0 top-0" src="/images/logo_only.webp" alt="logo de Fertilia" />
                </div>
                <motion.h1 variants={FadeItem}                 
                initial="hidden"
                whileInView="show" 
                className="font_header mt-8 text-3xl pt-10 text-center z-10 lg:text-5xl text-white lg:mb-3 ">
                  La technologie au service de <span class="backgroud_text_h bg-opacity-60 text-3xl lg:text-5xl">
                  votre terre</span></motion.h1>
                
                <motion.div
                variants={FadeContainer} 
                  initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-black bg-opacity-30 p-2 relative lg:overflow-hidden">
                  <motion.p variants={FadeItem} className="text-white text-xl font-light"> <span className="text-lg"><i class="fas fa-quote-left"></i></span> Transformez votre exploitation 
                      grâce à <span class="backgroud_text_h font-medium">notre plateforme innovante</span>. Surveillez en 
                      temps réel vos cultures et optimisez l'irrigation. Découvrez 
                      comment la technologie peut <span class="backgroud_text_h font-medium">redonner vie à votre terre</span> et propulser votre agriculture vers de <span class="backgroud_text_h font-medium">nouveaux sommets.</span> <span class="text-lg"><i class="fas fa-quote-right"></i></span><br />
                  </motion.p>
                  <motion.button variants={FadeItem} className="openSignup w-44 pr-4 backgroud_btn_h mt-2 px-3 py-2 text-lg rounded-lg" id="openSignup">Nous réjoindre <i class="fa-solid fa-arrow-right"></i></motion.button> 
                </motion.div>
            </motion.div>
        </motion.div>
    </>
}

function Avantages() {
    return <motion.section
    variants={FadeContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    id="avantages" 
    className="p-2 lg:p-7 w-full lg:p-20">
      <motion.h3 
      variants={FadeItem} 
      initial="hidden"
      whileInView="show"
      className="text-3xl mt-8 font-bold lg:text-3xl text-center">Avantages</motion.h3>
  
      <motion.div 
      variants={FadeContainer} 
      initial="hidden"
      whileInView="show"
      className="w-full flex flex-wrap items-center justify-center my:2 lg:my-10">
        <motion.div variants={FadeItem} initial="hidden" whileInView="show" className="w-96 lg:w-80 h-auto bg-white m-2 lg:m-5 rounded-lg shadow-xl p-2">
          <div id="" className="w-full h-48">
            <img src="/images/gestion_culture/image1.webp" alt="Femmes cultuvant ensemble" class="object-cover h-48 w-full" />
          </div>
          <h4 className="mt-2 font-medium">Gestion Des Cultures</h4>
          <p className="font-light">Optimisez chaque étape de vos plantations avec notre module dédié. Suivez l'évolution de vos 
            cultures en temps réel et recevez des recommandations personnalisées pour adapter vos pratiques 
            agricoles et améliorer vos rendements.
          </p>
          <button className="pr-4 backgroud_btn_h mt-2 px-3 py-2 rounded-lg text-lg text-white font-bold w-full">Voir Plus   <i class="fa-solid fa-circle-plus"></i></button>
        </motion.div>
        <motion.div variants={FadeItem} initial="hidden" whileInView="show" class="w-96 lg:w-80 h-auto bg-white m-5 rounded-lg shadow-xl p-2">
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
        </motion.div>
        <motion.div variants={FadeItem} initial="hidden" whileInView="show" className="w-96 lg:w-80 h-auto bg-white m-5 rounded-lg shadow-xl p-2">
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
        </motion.div>
      </motion.div>
      
    </motion.section>
}

function Avis() {
  return <section id="avis" className="w-full p-10 my-2 lg:p-10 text-center items-center justify-center flex flex-col ">
      <h3 className="text-2xl lg:text-3xl text-center font-bold m-5">Avis et Notations</h3>
      <div id="" className="w-full items-center justify-center content-center flex flex-wrap relative lg:w-9/12">
        {/* <!-- template notation --{">"} */}
        <div className="w-full lg:w-96 lg:m-3 bg-gray-200 h-auto mb-5 relative p-3 text-left lg:p-5 rounded-tl-3xl rounded-br-3xl border-b-2 border-double border-yellow-500">
          <div id="ratings" className="w-full flex relative space-x-1 lg:w-2/4">
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
          </div>
          <div className="list-none absolute top-0 right-0">
            <li className="text-3xl backgroud_text_h"><i class="fas fa-quote-right"></i></li>
          </div>
          <p className="font-light m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus quod obcaecati 
            soluta corrupti exercitationem animi repudiandae unde suscipit eveniet?
          </p>
          <div className="flex flex-row items-center">
            <div className="h-24 w-24 relative rounded-full overflow-hidden m-4">
              <img src="/images/asset1.webp" alt="Image d'une personne" className="object-cover w-full h-24" />
            </div>
            <div className="">
              <span className="font-bold text-lg">John Doe</span>
              <p className="">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        {/* <!-- template notation --> */}
        <div className="w-full lg:w-96 lg:m-3 bg-gray-200 h-auto relative p-3 text-left lg:p-5 rounded-tl-3xl rounded-br-3xl border-b-2 border-double border-yellow-500">
          <div id="ratings" className="w-full flex relative space-x-1 lg:w-2/4">
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
            <svg className="star w-10 h-10 cursor-pointer text-gray-300 transition-colors duration-200" data-value="5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.564-.955L10 1l2.948 5.955 6.564.955-4.756 3.635 1.122 6.545z"/>
            </svg>
          </div>
          <div className="list-none absolute top-0 right-0">
            <li className="text-3xl backgroud_text_h"><i class="fas fa-quote-right"></i></li>
          </div>
          <p className="font-light m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus quod obcaecati 
            soluta corrupti exercitationem animi repudiandae unde suscipit eveniet?
          </p>
          <div className="flex flex-row items-center">
            <div className="h-24 w-24 relative rounded-full overflow-hidden m-4">
              <img src="/images/asset1.webp" alt="Image d'une personne" className="object-cover w-full h-24" />
            </div>
            <div class="">
              <span className="font-bold text-lg">John Doe</span>
              <p className="">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
}

function Footer() {
  return   <footer class="flex flex-row px-10 py-4 h-auto text-center items-center justify-center bg-black bg-opacity-90 text-white relative ">
    <div id="partnaire" class="w-full h-44 text-center justify-center items-center flex flex-row">
      <div class="w-16 h-16 rounded-full overflow-hidden relative m-10">
        <img class="w-full h-16 object-cover" src="/images/Pinterest-logo.webp" alt="pinterest logo" />
      </div>
      <div class="w-16 h-16 rounded-full overflow-hidden m-10">
        <img class="w-full h-16 object-cover" src="/images/images.webp" alt="facebook image" />
      </div>
      <div class="w-16 h-16 rounded-full overflow-hidden m-10 border-2 border-solid border-white">
        <img class="w-full h-16 object-cover" src="/images/images (2).webp" alt="facebook image" />
      </div>
      <div class="w-28 h-28 m-10">
        <img class="w-full h-28 object-cover" src="/images/g-solutech.png" alt="facebook image" />
      </div>
    </div>
  </footer>
}