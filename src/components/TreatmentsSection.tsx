import { ArrowRight } from "lucide-react";
import treatmentCst from "@/assets/treatment-cst.png";
import treatmentActiveAging from "@/assets/treatment-active-aging.png";
import treatmentDepression from "@/assets/treatment-depression.png";

const TreatmentsSection = () => {
  const treatments = [
    {
      image: treatmentCst,
      title: "Terapia de Estimulação Cognitiva (CST)",
      description: "Intervenção psicossocial criada no Reino Unido para pessoas com demência e adaptada para a população brasileira.",
    },
    {
      image: treatmentActiveAging,
      title: "Estimulação Cognitiva para Idosos Saudáveis",
      description: "Atividades que fortalecem as funções cognitivas de idosos saudáveis, protegendo de perdas associadas ao envelhecimento.",
    },
    {
      image: treatmentDepression,
      title: "Intervenção Integrativa para Depressão",
      description: "Intervenção multicomponente baseada nos tratamentos mais eficazes contra a depressão.",
    },
  ];

  return (
    <section id="tratamentos" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-lg font-semibold text-amber-dark uppercase tracking-wider mb-4">
            Nossos Tratamentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-balance">
            Cuidado especializado e baseado em evidências
          </h2>
          <p className="text-lg text-slate-600">
            Conheça nossas abordagens terapêuticas desenvolvidas para promover qualidade de vida e bem-estar.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-science transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {treatment.description}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-science font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                  Saiba mais
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
