import { useEffect, useState } from 'react';
import './index.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Signin } from './pages/signin';

export default function App() {

  const userTheme = localStorage.getItem('theme'); // 'light' | 'dark' | null
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/login' element={<Signin />} />
      </Routes>
    </Router>
  );
}
