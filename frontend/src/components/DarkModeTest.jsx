import { useEffect, useState } from 'react';

export default function DarkTest() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        localStorage.getItem('theme') !== 'light')
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode])

  return (
    // <div id="testDark" className="bg-skin-bgSec rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
    //   <h1 className="text-3xl mb-6">Dark Mode Test</h1>
    //   <button
    //     onClick={() => setDarkMode((prev) => !prev)}
    //     className="px-6 py-3 rounded bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-white"
    //   >
    //     Toggle Theme ({darkMode ? 'Sombre' : 'Clair'})
    //   </button>
    // </div>


      <div className="min-h-screen bg-skin-bg-sec text-skin-accent p-6">
        <h1 className="text-skin-accent text-2xl font-bold">Accent vert</h1>
        <p className="text-skin-accentSec">Accent orange</p>
        <div className="bg-skin-bgSec p-4 mt-4 rounded">Fond secondaire</div>
      </div>
  );
}
