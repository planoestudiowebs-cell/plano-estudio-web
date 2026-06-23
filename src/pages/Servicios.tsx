import { motion } from 'framer-motion';
import Monogram from '../components/Monogram';

export default function Servicios() {
  const tiers = [
    {
      name: 'Esencial',
      price: '$1,700 MXN',
      whatsappText: 'Hola, me interesa el plan Esencial de PLANO ESTUDIO',
      features: [
        'Landing de una página (Hero, Servicios, Sobre, Contacto)',
        'CTA de WhatsApp integrado',
        'Diseño responsive (móvil/desktop)',
        'SEO básico (title, meta description, estructura semántica)',
        '1 ronda de revisiones',
        'Entrega en 5–7 días'
      ],
      offsetClass: 'lg:translate-y-0'
    },
    {
      name: 'Profesional',
      price: '$2,500 MXN',
      whatsappText: 'Hola, me interesa el plan Profesional de PLANO ESTUDIO',
      features: [
        'Sitio multi-sección ampliado (Hero, Servicios, Sobre, Galería, Contacto)',
        'Animaciones con Framer Motion (scroll reveals, micro-interacciones)',
        'Formulario de contacto funcional con notificación por correo',
        'Optimización de Google Business Profile (ficha, categorías, fotos)',
        'Configuración de Google Analytics + Search Console',
        '2 rondas de revisiones',
        'Entrega en 10–14 días'
      ],
      offsetClass: 'lg:translate-y-12'
    },
    {
      name: 'Signature',
      price: '$4,200 MXN',
      whatsappText: 'Hola, me interesa el plan Signature de PLANO ESTUDIO',
      features: [
        'Todo lo de Profesional',
        'Funcionalidad a medida: widget de citas/reservas o galería dinámica',
        'Soporte multi-sucursal (si aplica)',
        'Asesoría de copywriting para textos del sitio',
        '1 mes de soporte post-lanzamiento incluido',
        'Mantenimiento mensual opcional aparte: $350 MXN/mes'
      ],
      offsetClass: 'lg:translate-y-24'
    }
  ];

  return (
    <div className="pt-20 bg-tinta min-h-screen relative overflow-hidden">
      {/* Subtle Background Texture/Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none grayscale"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-tinta/80 to-tinta opacity-90 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-48">
        <div className="flex flex-col items-center text-center mb-32">
          <div className="w-16 h-px bg-bronce mb-12" />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-hueso mb-8 tracking-tight"
          >
            <span className="font-bold">Nuestros</span> <span className="italic font-light">Servicios</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-piedra font-light text-lg max-w-2xl mx-auto"
          >
            Inversiones claras y transparentes para potenciar la presencia digital de tu negocio.
          </motion.p>
        </div>

        {/* Tiers Grid - Asymmetrical Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-56 lg:mb-72">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className={`relative border border-bronce/80 p-10 md:p-14 flex flex-col h-full bg-tinta/80 backdrop-blur-sm group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-bronce transition-all duration-500 ease-out ${tier.offsetClass}`}
            >
              {/* Corner Monogram */}
              <div className="absolute top-8 right-8 text-bronce/30 transition-colors duration-500 group-hover:text-bronce/60">
                <Monogram size={40} />
              </div>

              <h2 className="text-3xl font-serif text-hueso mb-3">{tier.name}</h2>
              <div className="text-bronce font-mono tracking-[0.1em] text-sm mb-12">{tier.price}</div>

              <ul className="space-y-5 mb-16 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex gap-4 items-start text-piedra font-light text-sm">
                    <span className="text-bronce mt-1 block w-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">—</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/525636800314?text=${encodeURIComponent(tier.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block text-center w-full py-5 border border-bronce text-bronce font-mono uppercase tracking-[0.2em] text-xs hover:bg-bronce/10 transition-colors"
              >
                Cotizar por WhatsApp
              </a>

              {/* Animated decorative line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-bronce group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>

        <div className="text-center text-xs text-hueso/60 mt-6">Precios expresados en pesos mexicanos (MXN) · No incluyen IVA</div>

        {/* Investment Notes */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl mx-auto border-t border-bronce/20 pt-32"
        >
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-bronce mx-auto mb-10" />
            <h3 className="text-3xl md:text-4xl font-serif text-hueso">
              Lo que incluye <span className="italic font-light">tu inversión</span>
            </h3>
          </div>
          
          <div className="space-y-16 text-piedra font-mono text-sm leading-relaxed max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="text-bronce font-medium md:w-1/3 flex-shrink-0 tracking-widest uppercase">
                Dominio aparte <br/>
                <span className="text-xs opacity-60 font-light mt-1 block tracking-normal normal-case">(~$300–500 MXN/año vía Namecheap)</span>
              </div>
              <div className="md:w-2/3 group-hover:text-piedra/80 transition-colors font-sans font-light text-base">
                El dominio queda registrado directamente a tu nombre, así tú tienes la propiedad y el control total — nunca dependes de nosotros para conservarlo.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="text-bronce font-medium md:w-1/3 flex-shrink-0 tracking-widest uppercase">
                Hosting en Netlify <br/>
                <span className="text-xs opacity-60 font-light mt-1 block tracking-normal normal-case">(tier gratuito)</span>
              </div>
              <div className="md:w-2/3 group-hover:text-piedra/80 transition-colors font-sans font-light text-base">
                Tu sitio queda alojado sin costo adicional de hosting, lo que reduce tus gastos fijos mientras tu negocio crece.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="text-bronce font-medium md:w-1/3 flex-shrink-0 tracking-widest uppercase">
                Esquema de pago <br/>
                <span className="text-xs opacity-60 font-light mt-1 block tracking-normal normal-case">(50% / 50%)</span>
              </div>
              <div className="md:w-2/3 group-hover:text-piedra/80 transition-colors font-sans font-light text-base">
                Divides la inversión en dos partes (anticipo y contra entrega) y solo cubres el resto cuando ya viste el sitio terminado y funcionando, dándote seguridad durante todo el proceso.
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
