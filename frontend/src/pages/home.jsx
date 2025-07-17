import NavBar from "../components/navbar";
import { motion } from "motion/react"
import { FadeContainer, FadeItem } from "../hooks/animations";
import { Button } from "../components/button";
import Avis from "../components/avisPage";
import { FeatureCard } from "../components/FeatureCard";
import Step from "../components/step";

export default function Home() {
    return <div className="scroll-smooth text-gray-900">
        <img
          src="/images/bg-hero-header2.webp"
          alt=""
          style={{ display: "none" }}
          loading="eager"
        />
        < NavBar />
        <Header />
        <Avantages />
        <BringsYou />
        <HowDoesItWork />
        <Avis />
        <Footer />
    </div>
}

function Header() {
    return (

    <motion.div
      variants={FadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="text-right px-7 py-6 flex flex-row relative mt-28 lg:px-20"
      id="header"
    >

      <div className="hidden lg:block lg:w-5/12"></div>

      <div className="relative lg:px-6 w-full sm:px-2 lg:w-7/12 flex flex-col lg:items-end">
        <motion.div
          variants={FadeItem}
          className="relative w-full h-auto pb-10 place-items-end"
        >
          <img
            className="h-auto w-16 lg:w-24 object-contain absolute right-0 top-0"
            src="/images/logo_only.webp"
            alt="logo de Fertilia"
          />
        </motion.div>

        <motion.h1
          variants={FadeItem}
          className="font_header mt-8 text-3xl pt-10 text-center z-10 lg:text-5xl text-white lg:mb-3"
        >
          La technologie au service de{" "}
          <span className="backgroud_text_h bg-opacity-60 text-3xl lg:text-5xl">
            votre terre
          </span>
        </motion.h1>

        <motion.div
          variants={FadeItem}
          className="backdrop-blur-sm bg-opacity-10 p-2 relative lg:overflow-hidden"
        >
          <p className="text-white text-xl font-light">
            <span className="text-lg">
              <i className="fas fa-quote-left"></i>
            </span>{" "}
            Transformez votre exploitation grâce à{" "}
            <span className="backgroud_text_h font-medium">
              notre plateforme innovante
            </span>
            . Surveillez en temps réel vos cultures et optimisez l'irrigation.
            Découvrez comment la technologie peut{" "}
            <span className="backgroud_text_h font-medium">
              redonner vie à votre terre
            </span>{" "}
            et propulser votre agriculture vers de{" "}
            <span className="backgroud_text_h font-medium">
              nouveaux sommets.
            </span>{" "}
            <span className="text-lg">
              <i className="fas fa-quote-right"></i>
            </span>
          </p>

          <Button titre="Nous rejoindre" icon={<i className="fa-solid fa-arrow-right"></i>} classMa="openSignup w-44 pr-4 backgroud_btn_h mt-2 px-3 py-2 text-lg text-white rounded-lg" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Avantages() {

  const avantangesTab = [
    {
      titre: "Gestion Des Cultures", 
      para: "Optimisez chaque étape de vos plantations avec notre module dédié. Suivez l'évolution de vos cultures en temps réel et recevez des recommandations personnalisées pour adapter vos pratiques agricoles et améliorer vos rendements.",
      image: "/images/gestion_culture/image1.webp"
    },
    {
      titre: "Irrigation Automatique", 
      para: "Réalisez une gestion de l'eau intelligente grâce à notre système d'irrigation automatique. Les capteurs mesurent l'humidité du sol et activent l'irrigation au moment optimal, garantissant une utilisation efficace de l'eau et favorisant une croissance optimale des cultures.",
      image: "/images/irrigations/irrigation.webp"
    },
    {
      titre: "Analyse des rendements", 
      para: "Transformez vos données en actions concrètes avec notre outil d'analyse des rendements. Visualisez l'évolution de vos récoltes, identifiez les tendances et ajustez vos stratégies pour maximiser vos profits et pérenniser la performance de votre exploitation.",
      image: "/images/image2.webp"
    },
  ]
    return <motion.section
    variants={FadeContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    id="avantages" 
    className="bg-white dark:bg-gray-900 p-2 lg:py-7 w-full lg:px-20">
      <motion.h3 
      variants={FadeItem} 
      className="dark:text-green-600 text-3xl mt-8 font-bold lg:text-3xl text-center">Avantages</motion.h3>
  
      <motion.div 
      variants={FadeItem} 
      className="bg-white dark:bg-gray-800 w-full flex flex-wrap items-center justify-center my:2 lg:my-10">
        {avantangesTab.map((index, key) => {
          return (
            <FeatureCard index={index} key={key} titre={index.titre} image={index.image} para={index.para}  />
          )
        })}  
        
      </motion.div>
      
    </motion.section>
}

function BringsYou() {
  const adds=[
    {title: "Suivi des cultures", text: "Surveillez la croissance et la santé de vos plantes en temps réel", icon: "fa-chart-line"},
    {title: "Gestion de stock", text: "Surveillez de pres votre niveau de stock", icon: "fa-chart-line"},
    {title: "Gestion intelligente de l’irrigation", text: "Économisez l’eau et augmentez la productivité grâce à l’automatisation."},
    {title: "Prévisions personnalisées", text: "Des recommandations basées sur vos données et votre région.", icon: "fa-chart-line"},
  ]


  return (
    <motion.section 
    variants={FadeContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    id="BringsYou" 
    className="px-6 py-16 bg-white dark:bg-gray-900 p-2 lg:py-7 w-full lg:px-20">
      <motion.h3 variants={FadeItem} className="text-gray-900 dark:text-white text-3xl mt-8 font-bold lg:text-3xl text-center">Ce que Fertilia vous apporte</motion.h3>
      
      <motion.div 
      variants={FadeItem}
      className="w-full h-auto flex flex-wrap justify-center items-center my-5">
        {adds.map((index, key) => {
          return (
            <motion.div
            variants={FadeItem}
            key={key}
            className="bg-gray-100 dark:bg-gray-800 opacity-90 my-2 md:m-3 px-2 md:px-3 py-2 w-full md:w-96 h-24 flex flex-col text-gray-900 dark:text-white rounded-lg">
              <motion.h5 className="font-bold text-lg"> {index.title} </motion.h5>
              <p> {index.text} </p>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}

function HowDoesItWork() {
  return (
    <motion.section 
    variants={FadeContainer} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="py-20 lg:px-20 bg-gray-100 dark:bg-gray-800">
      <motion.h2 variants={FadeItem} className="text-3xl font-bold text-center text-green-600">Comment ça marche ?</motion.h2>
      <motion.div variants={FadeItem} className="px-5 mt-10 flex flex-wrap text-center items-center justify-center">
        <Step number={1} title="Créer votre compte" image="/images/account login.webp" />
        <Step number={2} title="Configurer votre champ" image="/images/paramtrer.webp" />
        <Step number={3} title="Suivre vos cultures" image="/images/Working_illustration.webp" />
      </motion.div>
    </motion.section>
  )
}


function Footer() {
  return   <motion.footer 
  variants={FadeContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  className="flex flex-col h-auto text-center items-center justify-center bg-gray-900  text-white relative ">
    <div className="w-full flex flex-row px-5 py-5 justify-center">
      <div className="flex flex-col text-left lg:mx-10">
        <div className="flex my-3">
          <div className="mt-6 sm:mt-0">
            <p>Contact : <a href="mailto:support@fertilia.app" className="underline">support@fertilia.app</a></p>
            <div className="flex gap-8 mt-2 text-2xl cursor-pointer">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-telegram"></i>   
              <i className="fab fa-whatsapp"></i>   
            </div>
          </div>
        </div>
      </div>

      <div className="mx-10">
        <div className="flex flex-row">
          <div className="my-3 pr-5">
            <img src="/images/logo_only.webp"
            className="w-12 h-auto"
            alt="Logo de fertilia" />
          </div>
          <div className="text-left my-3">
            <h3 className="hidden text-lg font-semibold">Fertilia</h3>
            <p className="text-2xl mt-2">La technologie au service de votre terre.</p>
          </div>
        </div>

        <div>
          <div className="flex flex-row">
            <motion.a variants={FadeItem}  href="#header" className="p-2">
              <ul className="flex flex-row w-full lg:flex-col lg:pr-4">
                <li className="">Accueil</li>              
              </ul>
            </motion.a>
            <motion.a variants={FadeItem}  href="#avantages" className="p-2">
              <ul className="lg:pr-4 flex flex-row w-full lg:flex-col">
                <li className="">Fonctionnalités</li>
              </ul>
            </motion.a>        
            <motion.a variants={FadeItem} href="#avis" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">
                <li className="">A propos</li>
              </ul>
            </motion.a>        
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">Contacts</li>
              </ul>
            </motion.a>
          </div>
          <div className="flex flex-row">
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">Blog</li>
              </ul>
            </motion.a>
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">Future</li>
              </ul>
            </motion.a>
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">A propos</li>
              </ul>
            </motion.a>
            <motion.a variants={FadeItem} href="#" className="p-2">
              <ul className="pr-4 flex flex-row w-full lg:flex-col">       
                <li className="">Documentation</li>
              </ul>
            </motion.a>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full flex flex-row justify-between px-5 py-2">
      <ul>
        <p>&copy; 2025 Fertilia. Tous droits réservés. </p>
      </ul>
      <ul className="flex flex-row">
        <li className="m-2">Terms of service</li>
        <li className="m-2">Privacy policy</li>
        <li className="m-2">Cookies</li>
      </ul>
    </div>
  </motion.footer>
}