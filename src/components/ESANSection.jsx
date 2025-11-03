import esanImage from '../assets/images/esan-inen.jpg';

const ESANSection = () => {
  return (
    <section id="project" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">PROYECTO DE TESIS</h2>
          <p className="text-gray-700 mt-2">2025</p>
        </div>

        {/* Contenido: foto + video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Foto del INEN */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Presentación en el INEN</h3>
            <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src={esanImage}
                alt="Martín García presentando tesis en el Instituto Nacional de Enfermedades Neoplásicas"
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <p className="mt-3 text-gray-700 text-sm">
              Presentación del proyecto de tesis en el Instituto Nacional de Enfermedades Neoplásicas.
            </p>
          </div>

          {/* Video de YouTube + Logos */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Demostración de la Aplicación</h3>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.youtube.com/embed/6gJygsTT9D8" // ✅ sin espacios
                title="Segmentación automática de cáncer de pulmón con IA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <p className="mt-3 text-gray-700 text-sm">
              Aplicación web que segmenta automáticamente el cáncer de pulmón en imágenes CT.
            </p>

            {/* Logos de tecnologías: justo debajo del texto del video */}
            <div className="flex justify-center mt-4 gap-4">
              <div className="group relative">
                <img 
                  src="/logos/python.png" 
                  alt="Python" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Python
                </span>
              </div>
              <div className="group relative">
                <img 
                  src="/logos/react.png" 
                  alt="React" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  React
                </span>
              </div>
              <div className="group relative">
                <img 
                  src="/logos/azure.png" 
                  alt="Azure" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Azure
                </span>
              </div>
              <div className="group relative">
                <img 
                  src="/logos/nodejs.png" 
                  alt="Node.js" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Node.js
                </span>
              </div>
              <div className="group relative">
                <img 
                  src="/logos/pytorch.png" 
                  alt="PyTorch" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  PyTorch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESANSection;