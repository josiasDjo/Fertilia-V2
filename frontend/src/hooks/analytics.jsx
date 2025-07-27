
// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-YQ2BZNS6X8"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-YQ2BZNS6X8');
// </script>


// src/analytics.js
import ReactGA from 'react-ga4'

export const initGA = () => {
  ReactGA.initialize('G-YQ2BZNS6X8')
}

export const trackPageview = (path) => {
    ReactGA.send({ hitType: "pageview", page: path })
}
