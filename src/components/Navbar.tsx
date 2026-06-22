import { Link, useLocation } from 'react-router-dom';
import Monogram from './Monogram';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-tinta/90 backdrop-blur-md border-b border-bronce/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-bronce hover:opacity-80 transition-opacity" aria-label="Inicio">
          <Monogram size={36} />
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={`group relative text-xs uppercase tracking-[0.2em] transition-colors py-2 ${
                  isActive 
                    ? 'text-bronce font-medium' 
                    : 'text-hueso/80 hover:text-bronce'
                }`}
              >
                {link.name}
                {/* Animated Underline */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-px bg-bronce origin-center transition-transform duration-300 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
          <a 
            href="https://wa.me/525636800314?text=Hola,%20quiero%20cotizar%20un%20sitio%20web%20con%20PLANO%20ESTUDIO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-[0.2em] uppercase border border-bronce text-bronce px-6 py-2.5 hover:bg-bronce/10 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(176,141,87,0.3)] transition-all duration-300 ml-4"
          >
            Cotizar
          </a>
        </div>
      </div>
    </nav>
  );
}
