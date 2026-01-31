import faperjLogo from "@/assets/faperj-logo.png";
import pucLogo from "@/assets/puc-logo.png";
import genesisLogo from "@/assets/genesis-logo.png";
import cnpqLogo from "@/assets/cnpq-logo.png";

const InstitutionsBar = () => {
  const institutions = [
    { name: "PUC-Rio", logo: pucLogo, width: "h-20 md:h-24" },
    { name: "FAPERJ", logo: faperjLogo, width: "h-24 md:h-32" }, // Much larger as requested
    { name: "Instituto Gênesis", logo: genesisLogo, width: "h-16 md:h-20" },
    { name: "CNPq", logo: cnpqLogo, width: "h-14 md:h-18" },
  ];

  return (
    <section className="section-padding bg-secondary/30 border-y border-border/50">
      <div className="container-narrow mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-lg font-semibold text-amber-dark uppercase tracking-wider mb-4">
            Parcerias Estratégicas
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            Apoio e parceria de instituições renomadas
          </h2>
          <p className="text-base text-muted-foreground">
            Instituições que acreditam e impulsionam nossa inovação.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {institutions.map((institution) => (
            <div
              key={institution.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
            >
              <img
                src={institution.logo}
                alt={institution.name}
                className={`${institution.width} w-auto object-contain mix-blend-multiply`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsBar;
