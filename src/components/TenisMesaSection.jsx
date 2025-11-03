import pingpongImage from '../assets/images/pingpong.png';

const TenisMesaSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Liderazgo y Deporte
          </h2>
          <p className="text-xl text-gray-600 mb-2">Training Pong Club · 2024</p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen a la izquierda */}
          <div className="flex justify-center">
            <div className="aspect-[4/3] w-full max-w-lg bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all">
              <img
                src={pingpongImage}
                alt="Martín García con el equipo del Training Pong Club"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          {/* Texto a la derecha */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Fundador – Training Pong Club
            </h3>
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base leading-relaxed">Creación de un espacio inclusivo para practicar tenis de mesa, abierto a expertos y principiantes.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base leading-relaxed">Fomento del liderazgo colaborativo, la constancia y el trabajo en equipo.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base leading-relaxed">Promoción del deporte como herramienta de integración y desarrollo personal.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenisMesaSection;