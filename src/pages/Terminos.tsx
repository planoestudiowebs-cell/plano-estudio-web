import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Terminos() {
  return (
    <div className="pt-20 bg-tinta min-h-screen">
      <SEO 
        title="Términos y Condiciones" 
        description="Términos y condiciones de servicio para los proyectos de diseño y desarrollo web de PLANO ESTUDIO."
        canonicalUrl="https://planoestudio.mx/terminos"
      />
      <div className="max-w-4xl mx-auto px-6 py-32 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-bronce mb-12" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-hueso mb-12 leading-[1.1] tracking-tight">
            Términos y <span className="italic font-light">Condiciones.</span>
          </h1>

          <div className="space-y-10 text-piedra font-light text-base leading-relaxed">
            <p>
              Bienvenido a PLANO ESTUDIO. Estos términos y condiciones describen las reglas y regulaciones para el uso de nuestros servicios de diseño y desarrollo web.
            </p>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">1. Servicios Ofrecidos</h2>
              <p>
                PLANO ESTUDIO provee servicios de diseño, desarrollo y mantenimiento de sitios web, bajo los parámetros específicos acordados en cada cotización individual. No garantizamos resultados específicos de ventas, ya que nuestro trabajo es estructural y visual.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">2. Pagos y Anticipos</h2>
              <p>
                Todos los proyectos requieren un anticipo del 50% no reembolsable antes de iniciar cualquier labor de diseño o programación. El 50% restante deberá ser cubierto previo a la entrega final y publicación del sitio web.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">3. Revisiones y Cambios</h2>
              <p>
                Cada paquete de servicio incluye un número definido de rondas de revisión. Cualquier cambio adicional solicitado fuera de estas rondas será cotizado y facturado por separado.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">4. Propiedad del Código y Diseño</h2>
              <p>
                Una vez liquidado el pago total del proyecto, el cliente recibe los derechos de uso sobre el código y el diseño. Sin embargo, PLANO ESTUDIO se reserva el derecho de mostrar el proyecto completado en nuestro portafolio y materiales promocionales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-hueso mb-4">5. Responsabilidad del Cliente</h2>
              <p>
                El cliente es responsable de proveer textos, imágenes, logotipos y cualquier otro material necesario de forma oportuna. Retrasos en la entrega de estos materiales afectarán las fechas de entrega acordadas del proyecto.
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
