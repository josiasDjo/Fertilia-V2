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
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl mb-6">Dark Mode Test</h1>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="px-6 py-3 rounded bg-gray-300 dark:bg-gray-700"
      >
        Toggle Theme ({darkMode ? 'Sombre' : 'Clair'})
      </button>
    </div>
  );
}
