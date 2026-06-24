import { useEffect, useState } from 'react';

const STORAGE_KEY = 'pe_cookies_accepted';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed left-0 right-0 bottom-4 z-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-tinta border border-bronce/20 rounded-xl py-4 px-6 flex flex-col md:flex-row items-center gap-4 shadow-lg">
        <div className="flex-1 text-piedra text-sm">
          Usamos cookies para mejorar la experiencia y recopilar datos anónimos (Google Analytics). Al continuar aceptas su uso.
        </div>
        <div className="flex-shrink-0">
          <button onClick={accept} className="px-5 py-2 bg-bronce text-tinta rounded-md uppercase tracking-widest font-mono hover:brightness-105 transition">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
