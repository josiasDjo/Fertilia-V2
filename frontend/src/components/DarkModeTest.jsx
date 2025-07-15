import { useEffect, useState } from 'react';

export default function DarkTest() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div id="testDark" className="bg-white text-slate-500 dark:bg-slate-500 dark:text-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
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
