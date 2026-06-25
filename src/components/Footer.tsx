import { Link } from 'react-router-dom';
import Monogram from './Monogram';

export default function Footer() {
  return (
    <footer className="bg-tinta border-t border-bronce/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
        <Link to="/" className="text-bronce" aria-label="Inicio">
          <Monogram size={40} />
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-piedra text-xs font-mono tracking-widest uppercase">
          <a href="https://wa.me/525636800314" target="_blank" rel="noopener noreferrer" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">
            +52 56 3680 0314
          </a>
          <span className="hidden md:inline text-bronce font-bold">·</span>
          <a href="mailto:planoestudiowebs@gmail.com" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">
            planoestudiowebs@gmail.com
          </a>
          <span className="hidden md:inline text-bronce font-bold">·</span>
          <a href="https://www.instagram.com/planoestudio10?igsh=c3UyMmpwc2Rrb3pp&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">
            @planoestudio10
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-hueso/70 pt-4">
          <Link to="/" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">Inicio</Link>
          <Link to="/sobre-nosotros" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">Sobre Nosotros</Link>
          <Link to="/servicios" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">Servicios</Link>
          <Link to="/contacto" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">Contacto</Link>
        </div>

        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="flex gap-4 text-[10px] uppercase tracking-widest text-piedra/60 font-mono">
            <Link to="/terminos" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">Términos</Link>
            <span>|</span>
            <Link to="/privacidad" className="hover:text-bronce transition-colors focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta">Privacidad</Link>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-piedra/40 font-mono text-center">
            &copy; {new Date().getFullYear()} PLANO ESTUDIO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
