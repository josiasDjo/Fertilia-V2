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
    <div id="testDark" className={`bg-white text-slate-500 ${darkMode ? bg-slate-500 : bg-red-500} dark:text-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5`}>
      <h1 className="text-3xl mb-6">Dark Mode Test</h1>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="px-6 py-3 rounded bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-white"
      >
        Toggle Theme ({darkMode ? 'Sombre' : 'Clair'})
      </button>
    </div>
  );
}
