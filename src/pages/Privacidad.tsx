import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Privacidad() {
  return (
    <div className="pt-20 bg-tinta min-h-screen">
      <SEO 
        title="Aviso de Privacidad" 
        description="Aviso de privacidad y manejo de datos personales de PLANO ESTUDIO."
        canonicalUrl="https://planoestudio.mx/privacidad"
      />
      <div className="max-w-4xl mx-auto px-6 py-32 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-bronce mb-12" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-hueso mb-12 leading-[1.1] tracking-tight">
            Aviso de <span className="italic font-light">Privacidad.</span>
          </h1>

          <div className="space-y-10 text-piedra font-light text-base leading-relaxed">
            <p>
              En PLANO ESTUDIO estamos comprometidos con proteger y respetar su privacidad. Este Aviso de Privacidad explica cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona.
            </p>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">1. Información que Recopilamos</h2>
              <p>
                Recopilamos información personal básica (como nombre, número de teléfono y dirección de correo electrónico) exclusivamente cuando usted nos contacta de manera directa para solicitar una cotización o información sobre nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">2. Uso de la Información</h2>
              <p>
                La información proporcionada se utiliza únicamente para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Responder a sus consultas y proporcionar cotizaciones.</li>
                <li>Llevar a cabo la prestación de nuestros servicios de diseño y desarrollo web.</li>
                <li>Mantener un registro de la comunicación comercial y técnica del proyecto.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">3. Tecnologías de Rastreo y Terceros</h2>
              <p>
                Para mejorar la experiencia en nuestro sitio, <strong>podemos utilizar</strong> herramientas analíticas (como Google Analytics) o de gestión de formularios que emplean cookies y tecnologías similares. Estas herramientas, en caso de estar activas, recopilan datos anónimos sobre el tráfico y comportamiento de navegación. No compartimos, vendemos ni alquilamos su información personal a terceros para fines comerciales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">4. Seguridad de sus Datos</h2>
              <p>
                Adoptamos prácticas estándar de la industria para proteger su información contra accesos no autorizados, alteraciones o destrucción. Sin embargo, ninguna transmisión por internet es 100% segura, por lo que no podemos garantizar su seguridad absoluta.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">5. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre este Aviso de Privacidad o desea ejercer sus derechos sobre sus datos personales, por favor contáctenos a través de planoestudiowebs@gmail.com.
              </p>
            </div>

            <p className="pt-12 text-sm opacity-60">
              Última actualización: Junio 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
