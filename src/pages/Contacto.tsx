import { motion } from 'framer-motion';
import Monogram from '../components/Monogram';

export default function Contacto() {
  return (
    <div className="pt-20 bg-tinta min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-56">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="mb-16 text-bronce opacity-80">
              <Monogram size={90} />
            </div>

            <div className="w-16 h-px bg-bronce mb-12" />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-hueso mb-8 leading-[1.1] tracking-tight">
              <span className="font-bold">Hablemos sobre</span> <br />
              <span className="italic font-light">tu proyecto.</span>
            </h1>
            
            <p className="text-piedra font-light text-lg mb-20 max-w-md leading-relaxed">
              Ya sea que tengas una idea clara o apenas estés explorando opciones, estamos listos para escucharte y diseñar la mejor solución para tu negocio.
            </p>

            <div className="space-y-12 w-full mb-20">
              <div className="border-l border-bronce/30 pl-8 group">
                <div className="text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Teléfono / WhatsApp</div>
                <a href="https://wa.me/525636800314" target="_blank" rel="noopener noreferrer" className="text-hueso text-xl font-light hover:text-bronce transition-colors inline-block group-hover:translate-x-2 duration-300">
                  +52 56 3680 0314
                </a>
              </div>
              
              <div className="border-l border-bronce/30 pl-8 group">
                <div className="text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Correo Electrónico</div>
                <a href="mailto:planoestudiowebs@gmail.com" className="text-hueso text-xl font-light hover:text-bronce transition-colors inline-block group-hover:translate-x-2 duration-300">
                  planoestudiowebs@gmail.com
                </a>
              </div>
              
              <div className="border-l border-bronce/30 pl-8 group">
                <div className="text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Instagram</div>
                <a 
                  href="https://www.instagram.com/planoestudio10?igsh=c3UyMmpwc2Rrb3pp&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-hueso text-xl font-light hover:text-bronce transition-colors inline-block group-hover:translate-x-2 duration-300"
                >
                  @planoestudio10
                </a>
              </div>
            </div>

            <a 
              href="https://wa.me/525636800314?text=Hola,%20quiero%20cotizar%20un%20sitio%20web%20con%20PLANO%20ESTUDIO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 border border-bronce bg-bronce/5 text-bronce font-mono uppercase tracking-[0.2em] text-sm hover:bg-bronce hover:text-tinta hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(176,141,87,0.25)] transition-all duration-500 w-full text-center md:w-auto"
            >
              Cotizar por WhatsApp
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[3/4] overflow-hidden relative border border-bronce/20 p-2">
              <div 
                className="absolute inset-2 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead27d2?q=80&w=2000&auto=format&fit=crop")' }}
              />
              <div className="absolute inset-2 bg-tinta/60 mix-blend-color" />
              <div className="absolute inset-2 bg-tinta/60 mix-blend-multiply" />
              <div className="absolute inset-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-tinta/50 to-tinta opacity-90" />
              <div className="absolute inset-2 bg-bronce/10 mix-blend-color" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
