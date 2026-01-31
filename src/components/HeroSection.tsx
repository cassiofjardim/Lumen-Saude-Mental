import { ArrowRight, Brain, Shield, Users } from "lucide-react";
import heroVideo from "@/assets/hero-neural-video.mp4";
import cstLogo from "@/assets/cst-brasil-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white/80 to-white" />
      </div>

      <div className="container-narrow mx-auto section-padding relative z-10 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-science/10 backdrop-blur-sm border border-science/20 mb-8 animate-fade-in">
            <Brain size={16} className="text-science" />
            <span className="text-sm font-medium text-science">
              Origem em Laboratório de Neurociência da PUC-Rio
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 animate-slide-up text-balance text-slate-900">
            A Lumen entende que a ciência é o melhor caminho para gerar{" "}
            <span className="text-science">bem-estar</span> e diminuir o{" "}
            <span className="text-amber">sofrimento humano</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-slide-up text-balance" style={{ animationDelay: "0.1s" }}>
            Desenvolvemos tratamentos inovadores e ferramentas digitais baseados em evidências científicas para transformar a saúde mental no Brasil.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-6 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a
                href="https://cstbrasil.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta px-8 py-4 text-base w-full sm:w-auto"
              >
                Conhecer Treinamento CST
                <ArrowRight size={18} />
              </a>
              <a href="#tratamentos" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base w-full sm:w-auto rounded-full font-medium border-2 border-slate-200 text-slate-700 bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300">
                Ver Tratamentos
              </a>
            </div>

            {/* CST Logo */}
            <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
              <span className="text-sm text-slate-500 font-medium">Em parceria com:</span>
              <img src={cstLogo} alt="CST Brasil" className="h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-science/10 flex items-center justify-center">
                <Brain size={20} className="text-science" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-slate-900">15+</p>
                <p className="text-xs text-slate-600">Anos de Pesquisa</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-science/10 flex items-center justify-center">
                <Users size={20} className="text-science" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-slate-900">5.000+</p>
                <p className="text-xs text-slate-600">Pacientes Atendidos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-science/10 flex items-center justify-center">
                <Shield size={20} className="text-science" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-slate-900">39</p>
                <p className="text-xs text-slate-600">Países com CST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
