import { useEffect, useState } from 'react';
import './index.css';
import './i18n';
import NavBar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import  Signin from './pages/signin';
import Signup from './pages/signup';
import { ResetPass } from './pages/resetPassword';
import GestionDesCulturesPage from './pages/gestionCulture';
import { IrrigationAutomatiquePage } from './pages/irrigation';
import { AnalyseRendementsPage } from './pages/analyseRendement';
import Faq from './pages/faq';
import Dashboard from './pages/dashboards/dashbord';
import { initGA, trackPageview } from './hooks/analytics';

export default function App() {
  const location = useLocation()
  const userTheme = localStorage.getItem('theme'); // 'light' | 'dark' | null
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    trackPageview(location.pathname + location.search)
  }, [location])

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/reset-password' element={<ResetPass />} />
        <Route path='/gestion-des-cultures' element={<GestionDesCulturesPage />} />
        <Route path='/irrigation-automatique' element={<IrrigationAutomatiquePage />} />
        <Route path='/analyse-rendement' element={<AnalyseRendementsPage />} />
        <Route path='/faQ' element={<Faq />} />

        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
  );
}
