import Monogram from '../components/Monogram';

export default function AvisoPrivacidad() {
  return (
    <div className="pt-20 bg-tinta min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-16 h-px bg-bronce mb-8" />
          <Monogram size={100} />
          <h1 className="text-4xl md:text-5xl font-serif text-hueso mt-6">Aviso de Privacidad</h1>
          <p className="text-piedra mt-4 max-w-2xl">Aviso de privacidad de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>
        </div>

        <div className="space-y-8 text-piedra font-sans leading-relaxed text-base">
          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Responsable del tratamiento</h2>
            <p>El responsable del tratamiento de sus datos personales es PLANO ESTUDIO, con domicilio en CDMX.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Datos recabados</h2>
            <p>Podemos recabar los siguientes datos personales: nombre, correo electrónico, teléfono y mensaje proporcionado a través del formulario de contacto.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Finalidades</h2>
            <p>Los datos se usan para: responder solicitudes de contacto, cotizaciones, gestionar proyectos, envío de información y atender requerimientos del Cliente.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Derechos ARCO</h2>
            <p>Usted puede ejercer sus derechos de acceso, rectificación, cancelación y oposición (ARCO) enviando una solicitud al correo planoestudiowebs@gmail.com. Se le informará el procedimiento y requisitos para la atención de su solicitud.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Cookies y herramientas</h2>
            <p>Este sitio utiliza cookies de terceros como Google Analytics para fines estadísticos. Las cookies no contienen información personal identificable. Al aceptar las cookies usted consiente su uso.</p>
          </section>

          <section>
            <h2 className="text-bronce font-medium uppercase tracking-widest mb-3">Encargado</h2>
            <p>Formspree actúa como encargado del tratamiento para los datos enviados a través del formulario de contacto. Consulte la política de Formspree para detalles sobre su tratamiento y medidas de seguridad.</p>
          </section>

          <p className="text-piedra/80 text-sm">Fecha de última actualización: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
