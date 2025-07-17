import { useEffect, useState } from 'react';
import './index.css';
import NavBar from './components/navbar';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', 'dark')
  }, [darkMode]);

  return (
    // <div className="min-h-screen bg-skin-bg text-skin-text p-6">
    //   <button
    //     className="mb-4 px-4 py-2 bg-skin-accent text-white rounded"
    //     onClick={() => setDarkMode(prev => !prev)}
    //   >
    //     Toggle Dark Mode
    //   </button>
    //   <h1 className="text-skin-accent text-2xl font-bold">Accent vert</h1>
    //   <p className="text-skin-accentSec">Accent orange</p>
    //   <div className="bg-skin-bgSec p-4 mt-4 rounded">Fond secondaire</div>
    // </div>

    <NavBar />
  );
}
