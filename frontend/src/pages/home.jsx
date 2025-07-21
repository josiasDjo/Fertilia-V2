import NavBar from "../components/navbar";
import { motion } from "motion/react"
import { FadeContainer, FadeItem } from "../hooks/animations";
import { Button } from "../components/button";
import Avis from "../components/avisPage";
import { FeatureCard } from "../components/FeatureCard";
import Step from "../components/step";
import Footer from "../components/footer";
import Newsletter from "../components/newsletters";
import Contact from "../components/contact";
import About from "../components/about";
import { useTranslation } from "react-i18next";




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
        <About />
        <Contact />
        <Avis />
        <Newsletter />
        <Footer />
    </div>
}

function Header() {
    const { t } = useTranslation()

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
          {t("hero.headline1")}{" "}
          <span className="backgroud_text_h bg-opacity-60 text-3xl lg:text-5xl">
            {t("hero.headline2")}
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
          <a href="/register">
            <Button titre="Nous rejoindre" icon={<i className="fa-solid fa-arrow-right"></i>} classMa="openSignup w-44 pr-4 backgroud_btn_h mt-2 px-3 py-2 text-lg text-white rounded-lg" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Avantages() {
  const {t} = useTranslation()
  const avantangesTab = [
    {
      titre: `${t("cultures.title")}`, 
      para: "Optimisez chaque étape de vos plantations avec notre module dédié. Suivez l'évolution de vos cultures en temps réel et recevez des recommandations personnalisées pour adapter vos pratiques agricoles et améliorer vos rendements.",
      image: "/images/gestion_culture/image1.webp",
      link: "gestion-des-cultures"
    },
    {
      titre: "Irrigation Automatique", 
      para: "Réalisez une gestion de l'eau intelligente grâce à notre système d'irrigation automatique. Les capteurs mesurent l'humidité du sol et activent l'irrigation au moment optimal, garantissant une utilisation efficace de l'eau et favorisant une croissance optimale des cultures.",
      image: "/images/irrigations/irrigation.webp",
      link: "irrigation-automatique"
    },
    {
      titre: "Analyse des rendements", 
      para: "Transformez vos données en actions concrètes avec notre outil d'analyse des rendements. Visualisez l'évolution de vos récoltes, identifiez les tendances et ajustez vos stratégies pour maximiser vos profits et pérenniser la performance de votre exploitation.",
      image: "/images/image2.webp",
      link: "analyse-rendement"
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
      className="dark:text-green-600 text-3xl mt-8 font-bold lg:text-3xl text-center">{t("features.title")}</motion.h3>
  
      <motion.div 
      variants={FadeItem} 
      className="bg-white dark:bg-gray-800 w-full flex flex-wrap items-center justify-center my:2 lg:my-10">
        {avantangesTab.map((index, key) => {
          return (
            <FeatureCard index={index} key={key} titre={index.titre} image={index.image} para={index.para} link={index.link} />
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

