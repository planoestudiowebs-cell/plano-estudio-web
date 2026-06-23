import React from 'react';
import Monogram from '../components/Monogram';

export default function TerminosCondiciones() {
  return (
    <div className="pt-20 bg-tinta min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-16 h-px bg-bronce mb-8" />
          <Monogram size={100} />
          <h1 className="text-4xl md:text-5xl font-serif text-hueso mt-6">Términos y Condiciones</h1>
          <p className="text-piedra mt-4 max-w-2xl">Estos Términos y Condiciones rigen la relación entre PLANO ESTUDIO y el cliente con respecto a los servicios ofrecidos en este sitio.</p>
        </div>

        <div className="space-y-10 text-piedra font-sans leading-relaxed text-base">
          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Partes del acuerdo</h2>
            <p>El presente acuerdo se celebra entre PLANO ESTUDIO (en adelante, "nosotros") y la persona o empresa que contrata los servicios (en adelante, "el Cliente").</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Servicios y precios</h2>
            <p>Ofrecemos los siguientes paquetes y precios:</p>
            <ul className="list-disc list-inside mt-3">
              <li><strong>Esencial:</strong> $1,700 MXN</li>
              <li><strong>Profesional:</strong> $2,500 MXN</li>
              <li><strong>Signature:</strong> $4,200 MXN</li>
            </ul>
            <p className="mt-3">Los precios son por proyecto y las características incluidas por paquete se describen en la página de Servicios.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Modelo de pago</h2>
            <p>El esquema de pago es 50% de anticipo al iniciar el proyecto y 50% contra entrega. No se entregará el sitio en producción hasta recibir el pago final acordado.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Revisiones</h2>
            <p>Cada paquete incluye las rondas de revisiones especificadas: Esencial (1), Profesional (2), Signature (variable según alcance). Revisiones adicionales pueden implicar cargos extra y se acordarán por escrito.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Tiempos de entrega</h2>
            <p>Los tiempos estimados de entrega son aproximados y se indican por paquete. Pueden variar según la claridad de los materiales entregados por el Cliente y la comunicación durante el proyecto.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Derechos de propiedad</h2>
            <p>Al completarse y pagarse la totalidad del proyecto, el Cliente recibe los derechos sobre el diseño y el código entregado. PLANO ESTUDIO podrá mostrar el trabajo como parte de su portafolio y material promocional.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Cancelaciones y reembolsos</h2>
            <p>Si el Cliente cancela el proyecto después de iniciado, el anticipo no será reembolsable. En caso de incumplimiento por nuestra parte, se evaluará la devolución proporcional de pagos según el avance.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Limitación de responsabilidad</h2>
            <p>PLANO ESTUDIO no será responsable por daños indirectos, lucro cesante, pérdida de datos o cualquier perjuicio derivado del uso del sitio una vez entregado. Nuestra responsabilidad máxima estará limitada al monto total pagado por el Cliente por el proyecto.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
