import cloudFoundationsImg from '../assets/images/aws-academy-cloud-foundations.png';
import genAIFoundationsImg from '../assets/images/aws-academy-generative-ai-foundations.png';
import cloudQuestImg from '../assets/images/aws-cloud-quest-cloud-practitioner.png';
import genAIPractitionerImg from '../assets/images/aws-cloud-quest-generative-ai-practitioner.png';

const AWSBadges = () => {
  const badges = [
    {
      name: 'Cloud Foundations',
      url: 'https://www.credly.com/badges/93dbd333-cfd6-44ca-b2bd-c41abae652be/public_url',
      img: cloudFoundationsImg,
    },
    {
      name: 'Generative AI Foundations',
      url: 'https://www.credly.com/badges/9b64397c-ad32-4069-816c-2ef7006e4a57/public_url',
      img: genAIFoundationsImg,
    },
    {
      name: 'AWS Cloud Quest: Cloud Practitioner',
      url: 'https://www.credly.com/badges/b1bbf509-292b-46d5-a5e4-34f7fd88b33f/public_url',
      img: cloudQuestImg,
    },
    {
      name: 'AWS Cloud Quest: Generative AI Practitioner',
      url: 'https://www.credly.com/badges/edf42144-a804-48bd-a22a-5dd8005af9db/public_url',
      img: genAIPractitionerImg,
    },
  ];

  return (
    <section id="certifications" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Bloque 2x2 de insignias */}
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <a
                key={index}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-52 h-52 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 relative"
              >
                <img
                  src={badge.img}
                  alt={badge.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold text-sm text-center px-2">{badge.name}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Texto descriptivo */}
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Cursos AWS</h3>
            <p className="text-gray-700 mb-4">
              Cuatro cursos oficiales en Cloud Computing y Generative AI, obtenidos en 2025.
            </p>
            <p className="text-sm text-gray-500">
              Haz clic en cualquier insignia para ver el detalle en Credly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AWSBadges;