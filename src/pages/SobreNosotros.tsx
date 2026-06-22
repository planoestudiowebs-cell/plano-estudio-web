import { motion } from 'framer-motion';
import Monogram from '../components/Monogram';

export default function SobreNosotros() {
  return (
    <div className="pt-20 bg-tinta min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-48">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Image Section - Left (Spans 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:col-span-5"
          >
            <div className="aspect-[3/4] overflow-hidden relative border border-bronce/20 p-2">
              <div 
                className="absolute inset-2 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")' }}
              />
              {/* Vignette & Duotone Overlay */}
              <div className="absolute inset-2 bg-tinta/40 mix-blend-multiply" />
              <div className="absolute inset-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-tinta/60 to-tinta opacity-90" />
              <div className="absolute inset-2 bg-bronce/10 mix-blend-color" />
            </div>
            
            {/* Decorative Monogram */}
            <div className="absolute -bottom-12 -right-12 text-bronce opacity-40 hidden md:block">
              <Monogram size={180} />
            </div>
          </motion.div>

          {/* Text Section - Right (Spans 7 cols, slightly shifted down) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-7 lg:pl-12 lg:translate-y-24"
          >
            <div className="w-16 h-px bg-bronce mb-12" />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-hueso mb-10 leading-[1.1] tracking-tight">
              <span className="font-bold">Diseño con</span> <br />
              <span className="italic font-light">propósito y detalle.</span>
            </h1>

            <div className="space-y-8 text-piedra font-light text-lg leading-relaxed mb-20">
              <p>
                PLANO ESTUDIO es un atelier digital en crecimiento, nacido en la Ciudad de México con una convicción clara: los pequeños negocios locales merecen una presencia web con el mismo nivel de refinamiento que las grandes marcas.
              </p>
              <p>
                Trabajamos de la mano con tatuajerías, barberías, spas, hoteles boutique y espacios gastronómicos. Entendemos que tu oficio es un arte, y nuestra labor es traducir esa calidad artesanal a la pantalla. No usamos plantillas repetitivas; cada proyecto es una pieza única.
              </p>
            </div>
              
            <div className="w-16 h-px bg-bronce/30 mb-12" />
            
            <h3 className="text-3xl font-serif text-hueso mb-10">Nuestro Proceso</h3>
            <ul className="space-y-12">
              <li className="flex gap-6 group">
                <span className="text-bronce font-mono text-sm tracking-widest mt-1 block">01</span>
                <div>
                  <h4 className="text-hueso text-xl font-serif mb-3 group-hover:text-bronce transition-colors">Entendimiento</h4>
                  <p className="text-piedra font-light leading-relaxed">Escuchamos la historia de tu negocio, tu visión y qué es lo que te hace diferente en tu industria.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <span className="text-bronce font-mono text-sm tracking-widest mt-1 block">02</span>
                <div>
                  <h4 className="text-hueso text-xl font-serif mb-3 group-hover:text-bronce transition-colors">Propuesta Visual</h4>
                  <p className="text-piedra font-light leading-relaxed">Diseñamos una identidad digital alineada a tu estética, prestando atención a la tipografía, el color y la experiencia del usuario.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <span className="text-bronce font-mono text-sm tracking-widest mt-1 block">03</span>
                <div>
                  <h4 className="text-hueso text-xl font-serif mb-3 group-hover:text-bronce transition-colors">Desarrollo y Lanzamiento</h4>
                  <p className="text-piedra font-light leading-relaxed">Escribimos código limpio y optimizado para que tu sitio sea rápido y funcione perfectamente en cualquier dispositivo.</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
