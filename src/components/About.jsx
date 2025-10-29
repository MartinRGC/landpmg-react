import React from 'react';
import { Brain, Database, Award, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'Inteligencia Artificial',
      description: 'Especialización en Deep Learning y Computer Vision'
    },
    {
      icon: Database,
      title: 'Análisis de Datos',
      description: 'Procesamiento y visualización de datos complejos'
    },
    {
      icon: Award,
      title: 'Universidad Esan',
      description: 'Egresado de Ingeniería de Sistemas'
    },
    {
      icon: Code,
      title: 'Desarrollo Full Stack',
      description: 'React, Node.js, Python, Azure'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Acerca de Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ingeniero de Sistemas
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Egresado de <strong className="text-blue-600">Ingeniería de Sistemas</strong> de la{' '}
              <strong className="text-blue-600">Universidad Esan</strong> con sólida formación en{' '}
              <strong>Inteligencia Artificial</strong> y <strong>Análisis de Datos</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Apasionado por aplicar la tecnología para resolver problemas reales, como en mi 
              proyecto de <strong className="text-purple-600">segmentación automática de cáncer de pulmón</strong> 
              {' '}utilizando Deep Learning y Computer Vision.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mi enfoque combina conocimientos técnicos avanzados con una visión práctica para 
              desarrollar soluciones innovadoras en el campo de la salud digital.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Mis Habilidades en Software
          </h3>
          <p className="text-center text-lg mb-10 opacity-90">
            Conocimiento de lenguajes de programación y tecnologías
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Python', level: 85, color: 'bg-blue-500' },
              { name: 'React', level: 75, color: 'bg-cyan-500' },
              { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
              { name: 'Node.js', level: 70, color: 'bg-green-500' },
              { name: 'PyTorch', level: 75, color: 'bg-orange-500' },
              { name: 'Azure', level: 65, color: 'bg-blue-400' }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-sm opacity-90">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;