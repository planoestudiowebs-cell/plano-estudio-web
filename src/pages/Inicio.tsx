import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Monogram from '../components/Monogram';
import SEO from '../components/SEO';
import { ChevronDown } from 'lucide-react';

export default function Inicio() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar mi sitio web?',
      answer: 'Dependiendo del paquete seleccionado, los tiempos varían entre 5 y 14 días hábiles una vez que contamos con toda la información, textos e imágenes de tu negocio.'
    },
    {
      question: '¿El dominio y hosting están incluidos?',
      answer: 'Alojamos tu sitio de forma gratuita utilizando el tier sin costo de Netlify, ideal para negocios locales. El dominio se adquiere por separado a tu nombre (aprox. $300-$500 MXN anuales) para que tú conserves la propiedad total.'
    },
    {
      question: '¿Cómo funciona el esquema de pagos?',
      answer: 'Trabajamos con un esquema de 50% de anticipo para iniciar el proyecto y 50% contra entrega, una vez que el sitio está aprobado y listo para publicarse.'
    },
    {
      question: '¿Qué pasa si necesito hacer cambios después?',
      answer: 'Cada paquete incluye rondas de revisión durante el proceso. Una vez publicado, ofrecemos un plan de mantenimiento opcional por $350 MXN mensuales, o cotizamos actualizaciones puntuales según lo necesites.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <SEO 
        title="Estudio de Diseño y Desarrollo Web" 
        description="PLANO ESTUDIO es un atelier digital en México. Creamos sitios web premium, elegantes y funcionales para negocios locales que buscan destacar."
        canonicalUrl="https://planoestudio.mx/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2000&auto=format&fit=crop")',
            y: shouldReduceMotion ? 0 : backgroundY
          }}
        />
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
            <Monogram size={140} animated={!shouldReduceMotion} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-hueso mb-8 leading-[1.1] tracking-tight break-words"
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
              className="inline-block px-10 py-5 border border-bronce text-bronce font-mono uppercase tracking-[0.2em] text-sm hover:bg-bronce/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(176,141,87,0.25)] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta"
            >
              Cotizar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why a Website Section */}
      <section className="py-32 lg:py-48 bg-tinta relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="w-16 h-px bg-bronce mb-12" />
            <h2 className="text-4xl md:text-6xl font-serif text-hueso mb-6 break-words">
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

      {/* Portfolio Placeholder */}
      <section className="py-32 lg:py-48 bg-marfil text-tinta border-b border-tinta/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-16 h-px bg-tinta mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 break-words">Proyectos <span className="italic font-light">Seleccionados</span></h2>
            <p className="text-tinta/60 font-mono tracking-widest text-xs uppercase">Curaduría en proceso</p>
          </div>
          
          <div className="aspect-[16/9] md:aspect-[21/9] bg-tinta/5 border border-tinta/10 relative overflow-hidden group flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-60" />
            <div className="relative z-10 text-center">
              <div className="bg-hueso/90 backdrop-blur-sm px-8 py-4 border border-tinta/10 inline-block">
                <span className="font-serif text-xl md:text-2xl text-tinta">Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers Summary */}
      <section className="py-32 lg:py-48 bg-marfil text-tinta">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="w-16 h-px bg-tinta mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif mb-6 font-bold break-words">Nuestros <span className="italic font-light">Servicios</span></h2>
              <p className="text-tinta/70 font-light leading-relaxed text-lg">
                Paquetes diseñados específicamente para las etapas de crecimiento de negocios locales. 
                Desde una presencia sólida hasta plataformas con funcionalidades a medida.
              </p>
            </div>
            <Link 
              to="/servicios"
              className="group flex items-center gap-4 text-tinta hover:text-bronce transition-colors font-mono uppercase tracking-[0.2em] text-xs focus:outline-none focus:ring-2 focus:ring-tinta focus:ring-offset-2 focus:ring-offset-marfil"
            >
              Ver detalles completos
              <span className="w-12 h-px bg-tinta group-hover:bg-bronce transition-colors block" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: 'Esencial', price: '$1,700 MXN', desc: 'Landing de una página ideal para establecer tu presencia digital profesional.' },
              { name: 'Profesional', price: '$2,500 MXN', desc: 'Sitio multi-sección con optimización SEO local para destacar en tu ciudad.' },
              { name: 'Signature', price: '$4,200 MXN', desc: 'Experiencia a medida con integraciones personalizadas (citas, galerías dinámicas).' }
            ].map((tier, i) => (
              <div key={tier.name} className="border border-tinta/10 p-8 lg:p-10 hover:border-bronce transition-colors bg-hueso group relative overflow-hidden flex flex-col h-full">
                <span className="text-bronce font-mono text-xs tracking-widest mb-6 block">0{i + 1}</span>
                <h3 className="text-2xl lg:text-3xl font-serif mb-2">{tier.name}</h3>
                <div className="text-xs font-mono tracking-widest text-tinta/50 mb-6">{tier.price}</div>
                <p className="text-sm font-light text-tinta/80 mb-10 leading-relaxed">{tier.desc}</p>
                <Link 
                  to="/servicios"
                  className="mt-auto relative text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono text-tinta pb-1 self-start focus:outline-none focus:ring-2 focus:ring-bronce"
                >
                  Explorar
                  <span className="absolute bottom-0 left-0 w-full h-px bg-tinta/30 group-hover:bg-bronce transition-colors" />
                </Link>
                
                <div className="absolute bottom-0 left-0 h-px bg-bronce w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Empezamos & FAQ */}
      <section className="py-32 lg:py-48 bg-tinta text-hueso border-t border-bronce/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Como Empezamos */}
            <div>
              <div className="w-16 h-px bg-bronce mb-12" />
              <h2 className="text-3xl md:text-4xl font-serif mb-10">¿Cómo <span className="italic font-light">empezamos?</span></h2>
              
              <ul className="space-y-10">
                <li className="flex gap-6">
                  <span className="text-bronce font-mono text-sm tracking-widest block mt-1">01</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Contáctanos</h4>
                    <p className="text-piedra font-light text-sm leading-relaxed">Escríbenos por WhatsApp o correo. Cuéntanos brevemente sobre tu negocio y qué necesitas.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-bronce font-mono text-sm tracking-widest block mt-1">02</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Propuesta y Anticipo</h4>
                    <p className="text-piedra font-light text-sm leading-relaxed">Te confirmamos el paquete ideal, resolvemos tus dudas y realizas el anticipo del 50% para agendar tu proyecto.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-bronce font-mono text-sm tracking-widest block mt-1">03</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Materiales</h4>
                    <p className="text-piedra font-light text-sm leading-relaxed">Nos compartes tu logotipo, fotos de tu local/trabajo y la información básica de tus servicios.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-bronce font-mono text-sm tracking-widest block mt-1">04</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Diseño y Lanzamiento</h4>
                    <p className="text-piedra font-light text-sm leading-relaxed">Nosotros nos encargamos del resto. Te presentamos el sitio, aplicamos revisiones y, tras liquidar el saldo, lo publicamos.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <div className="w-16 h-px bg-bronce mb-12 hidden lg:block" />
              <h2 className="text-3xl md:text-4xl font-serif mb-10">Preguntas <span className="italic font-light">Frecuentes</span></h2>
              
              <div className="border-t border-bronce/20">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-bronce/20">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full py-6 flex justify-between items-center text-left focus:outline-none focus:bg-bronce/5 transition-colors group"
                      aria-expanded={openFaq === index}
                    >
                      <span className="font-serif text-lg md:text-xl group-hover:text-bronce transition-colors pr-8">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-bronce flex-shrink-0"
                      >
                        <ChevronDown size={20} strokeWidth={1.5} />
                      </motion.div>
                    </button>
                    <motion.div 
                      initial={false}
                      animate={{ 
                        height: openFaq === index ? 'auto' : 0,
                        opacity: openFaq === index ? 1 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-piedra font-light text-sm leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 lg:py-48 bg-tinta text-center px-6 relative overflow-hidden border-t border-bronce/10">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bronce/5 via-tinta to-tinta" />
        <div className="relative z-10">
          <div className="w-16 h-px bg-bronce/50 mx-auto mb-10" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-hueso mb-10 break-words">
            ¿Listo para <span className="italic font-light text-bronce">elevar</span> tu marca?
          </h2>
          <a 
            href="https://wa.me/525636800314?text=Hola,%20quiero%20cotizar%20un%20sitio%20web%20con%20PLANO%20ESTUDIO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 border border-bronce text-bronce font-mono uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-bronce/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(176,141,87,0.25)] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta"
          >
            Iniciar Proyecto por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
