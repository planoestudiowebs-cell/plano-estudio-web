import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Monogram from '../components/Monogram';

export default function Inicio() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '50%']);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0 z-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop")',
            y: backgroundY
          }}
        />
        {/* Vignette & Duotone Overlay */}
        <div className="absolute inset-0 z-0 bg-tinta/60 mix-blend-color" />
        <div className="absolute inset-0 z-0 bg-tinta/60 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-tinta/60 to-tinta opacity-90" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mb-12 text-bronce"
          >
            <Monogram size={140} animated={true} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-hueso mb-8 leading-[1.1] tracking-tight"
          >
            <span className="font-bold">ATELIER DIGITAL</span><br />
            <span className="italic font-light text-hueso/90">para Negocios Locales</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-piedra md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed"
          >
            Diseñamos y desarrollamos sitios web a la medida. 
            Sin plantillas genéricas. Nos enfocamos en el detalle, el proceso artesanal y el compromiso total con cada proyecto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <a 
              href="https://wa.me/525636800314?text=Hola,%20quiero%20cotizar%20un%20sitio%20web%20con%20PLANO%20ESTUDIO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 border border-bronce text-bronce font-mono uppercase tracking-[0.2em] text-sm hover:bg-bronce/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(176,141,87,0.25)] transition-all duration-500"
            >
              Cotizar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why a Website Section */}
      <section className="py-48 lg:py-56 bg-tinta relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-32">
            <div className="w-16 h-px bg-bronce mb-12" />
            <h2 className="text-4xl md:text-6xl font-serif text-hueso mb-6">
              ¿Por qué tener una <br className="md:hidden" /><span className="italic font-light">página web</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            <div className="border-t border-bronce/20 pt-8 relative group">
              <span className="text-bronce font-mono text-xs tracking-widest mb-6 block">01</span>
              <h3 className="text-2xl font-serif text-hueso mb-4">Credibilidad Inmediata</h3>
              <p className="text-piedra font-light text-base leading-relaxed group-hover:text-piedra/80 transition-colors">
                Un sitio web propio te distingue al instante de competidores que solo operan a través de redes sociales, proyectando una imagen de negocio establecido y formal.
              </p>
            </div>
            <div className="border-t border-bronce/20 pt-8 relative group">
              <span className="text-bronce font-mono text-xs tracking-widest mb-6 block">02</span>
              <h3 className="text-2xl font-serif text-hueso mb-4">Control Total</h3>
              <p className="text-piedra font-light text-base leading-relaxed group-hover:text-piedra/80 transition-colors">
                Eres dueño de tu espacio digital. No dependes de los cambios en los algoritmos de Instagram o Facebook para que tus clientes vean tu trabajo y tus servicios.
              </p>
            </div>
            <div className="border-t border-bronce/20 pt-8 relative group">
              <span className="text-bronce font-mono text-xs tracking-widest mb-6 block">03</span>
              <h3 className="text-2xl font-serif text-hueso mb-4">Disponibilidad 24/7</h3>
              <p className="text-piedra font-light text-base leading-relaxed group-hover:text-piedra/80 transition-colors">
                Tu sitio trabaja para ti todo el día. Los clientes potenciales pueden conocerte, ver tus servicios y contactarte sin importar la hora o el día de la semana.
              </p>
            </div>
            <div className="border-t border-bronce/20 pt-8 relative group">
              <span className="text-bronce font-mono text-xs tracking-widest mb-6 block">04</span>
              <h3 className="text-2xl font-serif text-hueso mb-4">Presencia en Google</h3>
              <p className="text-piedra font-light text-base leading-relaxed group-hover:text-piedra/80 transition-colors">
                Asegura que tu negocio aparezca cuando alguien en tu ciudad busque los servicios que ofreces, captando clientes que tienen una intención de compra real.
              </p>
            </div>
            <div className="border-t border-bronce/20 pt-8 lg:col-span-2 relative group">
              <span className="text-bronce font-mono text-xs tracking-widest mb-6 block">05</span>
              <h3 className="text-2xl font-serif text-hueso mb-4">Primera Impresión Refinada</h3>
              <p className="text-piedra font-light text-base leading-relaxed lg:w-2/3 group-hover:text-piedra/80 transition-colors">
                El diseño a medida nos permite construir una experiencia visual que comunique exactamente el nivel de calidad y atención al detalle que pones en tu propio trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers Summary */}
      <section className="py-48 lg:py-56 bg-marfil text-tinta">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="w-16 h-px bg-bronce mb-12" />
              <h2 className="text-4xl md:text-6xl font-serif mb-6 font-bold">Nuestros <span className="italic font-light">Servicios</span></h2>
              <p className="text-tinta/70 font-light leading-relaxed text-lg">
                Paquetes diseñados específicamente para las etapas de crecimiento de negocios locales. 
                Desde una presencia sólida hasta plataformas con funcionalidades a medida.
              </p>
            </div>
            <Link 
              to="/servicios"
              className="group flex items-center gap-6 text-tinta hover:text-bronce transition-colors font-mono uppercase tracking-[0.2em] text-xs"
            >
              Ver todos los detalles
              <span className="w-16 h-px bg-tinta group-hover:bg-bronce transition-colors block" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Esencial', price: '$1,700 MXN', desc: 'Landing de una página ideal para establecer tu presencia digital profesional.' },
              { name: 'Profesional', price: '$2,500 MXN', desc: 'Sitio multi-sección con optimización SEO local para destacar en tu ciudad.' },
              { name: 'Signature', price: '$4,200 MXN', desc: 'Experiencia a medida con integraciones personalizadas (citas, galerías dinámicas).' }
            ].map((tier, i) => (
              <div key={tier.name} className="border border-tinta/10 p-10 lg:p-12 hover:border-bronce transition-colors bg-hueso group relative overflow-hidden">
                <span className="text-bronce font-mono text-xs tracking-widest mb-6 block">0{i + 1}</span>
                <h3 className="text-3xl font-serif mb-3">{tier.name}</h3>
                <div className="text-sm font-mono tracking-widest text-tinta/50 mb-8">{tier.price}</div>
                <p className="text-base font-light text-tinta/80 mb-12 leading-relaxed">{tier.desc}</p>
                <Link 
                  to="/servicios"
                  className="relative text-xs uppercase tracking-[0.2em] font-mono text-tinta pb-1"
                >
                  Explorar
                  <span className="absolute bottom-0 left-0 w-full h-px bg-tinta/30 group-hover:bg-bronce transition-colors" />
                </Link>
                
                {/* Decorative Line on Hover */}
                <div className="absolute bottom-0 left-0 h-px bg-bronce w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 lg:py-56 bg-tinta text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bronce/5 via-tinta to-tinta" />
        <div className="relative z-10">
          <div className="w-16 h-px bg-bronce/50 mx-auto mb-12" />
          <h2 className="text-4xl md:text-7xl font-serif text-hueso mb-12">
            ¿Listo para <span className="italic font-light text-bronce">elevar</span> tu marca?
          </h2>
          <a 
            href="https://wa.me/525636800314?text=Hola,%20quiero%20cotizar%20un%20sitio%20web%20con%20PLANO%20ESTUDIO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 border border-bronce text-bronce font-mono uppercase tracking-[0.2em] text-sm hover:bg-bronce/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(176,141,87,0.25)] transition-all duration-500"
          >
            Iniciar Proyecto
          </a>
        </div>
      </section>
    </div>
  );
}
