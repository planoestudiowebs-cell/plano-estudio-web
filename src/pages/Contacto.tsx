
import { type FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Monogram from '../components/Monogram';
import SEO from '../components/SEO';

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Gracias, ${name || 'cliente'}! Hemos recibido tu mensaje.`);
    console.log('Contacto enviado:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="pt-20 bg-tinta min-h-screen">
      <SEO 
        title="Contacto y Cotización" 
        description="Ponte en contacto con PLANO ESTUDIO vía WhatsApp o correo electrónico para agendar tu proyecto o solicitar una cotización personalizada."
        canonicalUrl="https://planoestudio.mx/contacto"
      />
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-56">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-hueso mb-8 leading-[1.1] tracking-tight break-words">
              <span className="font-bold">Hablemos sobre</span> <br />
              <span className="italic font-light">tu proyecto.</span>
            </h1>
            
            <p className="text-piedra font-light text-base md:text-lg mb-20 max-w-md leading-relaxed">
              Ya sea que tengas una idea clara o apenas estés explorando opciones, estamos listos para escucharte y diseñar la mejor solución para tu negocio.
            </p>

            <div className="space-y-12 w-full mb-20">
              <div className="border-l border-bronce/30 pl-8 group">
                <div className="text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Teléfono / WhatsApp</div>
                <a href="https://wa.me/525636800314" target="_blank" rel="noopener noreferrer" className="text-hueso text-lg md:text-xl font-light hover:text-bronce transition-colors inline-block group-hover:translate-x-2 duration-300 focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta rounded-sm">
                  +52 56 3680 0314
                </a>
              </div>
              
              <div className="border-l border-bronce/30 pl-8 group">
                <div className="text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Correo Electrónico</div>
                <a href="mailto:planoestudiowebs@gmail.com" className="text-hueso text-lg md:text-xl font-light hover:text-bronce transition-colors inline-block group-hover:translate-x-2 duration-300 focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta rounded-sm break-all md:break-normal">
                  planoestudiowebs@gmail.com
                </a>
              </div>
              
              <div className="border-l border-bronce/30 pl-8 group">
                <div className="text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Instagram</div>
                <a 
                  href="https://www.instagram.com/planoestudio10?igsh=c3UyMmpwc2Rrb3pp&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-hueso text-lg md:text-xl font-light hover:text-bronce transition-colors inline-block group-hover:translate-x-2 duration-300 focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta rounded-sm"
                >
                  @planoestudio10
                </a>
              </div>
            </div>

            <div className="w-full max-w-2xl bg-tinta/90 border border-bronce/20 rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <p className="text-piedra font-light text-sm mb-8 max-w-xl leading-relaxed">
                Completa el formulario y te responderemos lo antes posible. Por ahora el envío mostrará un aviso local para probar el flujo.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Tu nombre completo"
                    required
                    className="w-full rounded-3xl border border-bronce/30 bg-tinta text-hueso placeholder:text-piedra px-5 py-4 outline-none focus:border-bronce focus:ring-2 focus:ring-bronce/20 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Correo</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="tu@correo.com"
                    required
                    className="w-full rounded-3xl border border-bronce/30 bg-tinta text-hueso placeholder:text-piedra px-5 py-4 outline-none focus:border-bronce focus:ring-2 focus:ring-bronce/20 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-bronce font-mono text-xs uppercase tracking-[0.2em] mb-3">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Cuéntanos sobre tu proyecto o consulta"
                    required
                    className="w-full min-h-[180px] rounded-3xl border border-bronce/30 bg-tinta text-hueso placeholder:text-piedra px-5 py-4 outline-none focus:border-bronce focus:ring-2 focus:ring-bronce/20 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full rounded-3xl border border-bronce bg-bronce/10 text-bronce px-8 py-4 text-sm font-mono uppercase tracking-[0.2em] hover:bg-bronce hover:text-tinta transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            <a 
              href="https://wa.me/525636800314?text=Hola,%20quiero%20cotizar%20un%20sitio%20web%20con%20PLANO%20ESTUDIO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-5 border border-bronce bg-bronce/5 text-bronce font-mono uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-bronce hover:text-tinta hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(176,141,87,0.25)] transition-all duration-500 w-full text-center md:w-auto focus:outline-none focus:ring-2 focus:ring-bronce focus:ring-offset-2 focus:ring-offset-tinta"
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
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead27d2?q=80&w=1200&auto=format&fit=crop")' }}
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
