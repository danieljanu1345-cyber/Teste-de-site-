import React from 'react';
import { Flame, Award, Clock, Sparkles, MessageCircle, RotateCw, CheckCircle, Users, Cake, Beer } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
  onOpenVirtualTour: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenVirtualTour }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Immersive Storytelling Hero Section with Charcoal Gradient Scrim */}
      <section className="relative w-full pt-16 pb-20 lg:pb-28 bg-[#0c0e10] overflow-hidden">
        {/* Atmospheric Ambient Ember Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCS4-ncc8Iw0LqwO6J8SbjgmKNJxAJaYS4bcMnWtpuXPldGkgJ0T6I1X_g_AudhmMPUsTBNyQyhzvbEXc_gMbOyCiDO_SEhFsF5yoWSyMO7R3jLLdtv9DRASB6DfGq8zetqJE2P9qAti7hp9hCliTtcbcRkl2OwzzPl50nTTH2sSbTfFuq1OM4g901t7fPqg0WP7ujgAz9p6muosCtkBnnDM3ZAjBPj7FmUZDHa8DmBhPc5AFDO1ybrQ"
            alt="Interior da parrilla com chamas abertas e fumaça aromática"
            className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121416] via-[#121416]/85 to-[#121416]/40" />
          <div className="absolute -right-32 top-1/4 w-96 h-96 bg-[#f77f00]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -left-20 bottom-10 w-80 h-80 bg-[#d19500]/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-col justify-end min-h-[500px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f77f00]/20 border border-[#f77f00]/30 text-[#ffba27] text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ffba27] animate-ping" />
              Tradição • Fogo Vivo • Alta Charcutaria
            </span>
            <span className="hidden sm:inline-block text-[#574335] text-xs">|</span>
            <span className="hidden sm:inline-block text-[#dec1af] text-xs font-semibold">
              Desde 2018
            </span>
          </div>

          <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl text-[#e2e2e5] max-w-4xl tracking-tight leading-[1.08] mb-5">
            A Arte de Transformar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb784] via-[#f77f00] to-[#ffba27]">
              Fogo e Carne
            </span>{' '}
            em Experiência.
          </h1>

          <p className="text-base sm:text-lg text-[#dec1af] max-w-2xl leading-relaxed mb-8">
            Esqueça a pressa do fast-food convencional. Aqui, a lenha nobre de macieira crepita em brasa mansa para forjar hambúrgueres artesanais de sabor defumado inigualável e textura impecável.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('galeria')}
              className="flex items-center gap-2 bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] font-bold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_24px_-2px_rgba(247,127,0,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explorar Galeria Fotográfica</span>
              <Sparkles className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('cardapio')}
              className="flex items-center gap-2 bg-[#282a2c] hover:bg-[#333537] border border-[#a68c7b]/30 text-[#e2e2e5] font-semibold text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer"
            >
              <span>Ver Cardápio Completo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Section: Nossa História, Filosofia & Citação */}
      <section className="w-full py-16 lg:py-24 bg-[#121416] relative" id="historia">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#f77f00]" />
                <span className="text-xs font-bold tracking-widest text-[#ffb784] uppercase">
                  Nossa Gênese &amp; Convicção
                </span>
              </div>

              <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] tracking-tight font-bold">
                Nascido no calor do carvão vegetal e na paixão visceral pelo ofício.
              </h2>

              <div className="space-y-4 text-sm text-[#dec1af] leading-relaxed">
                <p>
                  O <strong className="text-[#e2e2e5] font-semibold">Fogo &amp; Brasa</strong> surgiu do anseio de resgatar o sabor primal da carne grelhada na chama direta. Não acreditamos em processos industriais ou esteiras elétricas. Cada hambúrguer que sai de nossa parrilla carrega o selo de uma alquimia rústica: carne nobre com corte artesanal, charcutaria de cura própria e a intensidade aromática da fumaça natural.
                </p>
                <p>
                  Valorizamos o tempo dos ingredientes. Nossos queijos chegam de pequenos laticínios artesanais, os pães de brioche passam por fermentação biológica lenta de 24 horas, e os vegetais são colhidos por produtores locais parceiros. Para nós, servir à mesa é um pacto de confiança e acolhimento caloroso em cada mordida.
                </p>
              </div>

              {/* Highlight Quote Box */}
              <div className="mt-2 p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-[0_4px_24px_rgba(0,0,0,0.4)] relative overflow-hidden">
                <div className="absolute -right-4 -bottom-6 text-[#282a2c] font-serif text-[120px] select-none leading-none opacity-40">
                  “
                </div>
                <div className="relative z-10 flex flex-col gap-3">
                  <Flame className="w-7 h-7 text-[#ffba27]" />
                  <blockquote className="font-syne text-lg text-[#e2e2e5] italic font-normal leading-snug">
                    “Não fazemos apenas sanduíches, criamos memórias defumadas na brasa viva.”
                  </blockquote>
                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f77f00] flex items-center justify-center text-[#121416] font-bold">
                      MC
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#e2e2e5]">Mestre Churrasqueiro &amp; Fundador</p>
                      <p className="text-[11px] text-[#ffba27]">Parrillero Chefe da Casa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Burger & Atmosphere Composition Mosaic */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="flex flex-col gap-4">
                <div className="group relative rounded-3xl overflow-hidden bg-[#1e2022] border border-[#333537] shadow-xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF7AMuPa-06pXyeKcUIha3h2RsfThKszGHRWGHtbmfDXAuPIa5ScOUSrz7vberBLLYrTp3AcwD3KnHNJ1GgybbT0wBnqz24lF-2AldtU9Bc3Psf6RcHhHpEIBXJ0mMg4wL71ySpfluXiJ-Pa7wAAGJb2f7bPbww0gksugplTwH8cHX52yVN79QbgEwz5l_jE_M7VKYhHVWcFQGkpaO8nnE9ORNM75N7f003y5FiuPl-iBSKL2xj1PQSg"
                    alt="Smash Burger com queijo derretido e bacon crocante"
                    className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10]/90 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-[#e2e2e5]">
                      Crosta Perfeita • Selagem a 300°C
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-[#1a1c1e] border border-[#333537] flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#ffba27] font-syne text-xl font-bold">
                    <Flame className="w-5 h-5 fill-current" />
                    <span>100% Angus</span>
                  </div>
                  <p className="text-xs text-[#dec1af] mt-1">
                    Blend autoral moído 3 vezes diariamente com proporção de gordura calibrada ao milímetro.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-8">
                <div className="p-5 rounded-3xl bg-[#1a1c1e] border border-[#333537] flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#ffb784] font-syne text-xl font-bold">
                    <Sparkles className="w-5 h-5" />
                    <span>Carbono Neutro</span>
                  </div>
                  <p className="text-xs text-[#dec1af] mt-1">
                    100% dos resíduos orgânicos compostados e lenha exclusivamente de podas sustentáveis.
                  </p>
                </div>

                <div className="group relative rounded-3xl overflow-hidden bg-[#1e2022] border border-[#333537] shadow-xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnKEEEDc0q2ZqXL_5vZn4XzxJOqly0drX99CTCznGBgneHUrZO3vogVVdGdXVzT13exeJowtoIBulr-lYYLfij0p7uqBrrgfHF-q_34BSRwRVOnMb7yzadqcg4Y1dExLqo44z8O9HW32is6g4_EgszXrImd0r-b7r3jcrzr5giryyqNF5XqDTdh4JWmUNQIN2Gi9KuX-moniJAjrOSEDeb3fFulKRW8itnmWjxTJTcxQ1vuuTduHcCHg"
                    alt="Double Smash com molho barbecue defumado"
                    className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10]/90 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-[#e2e2e5]">
                      Barbecue de Frutas Vermelhas Defumadas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Excelência (Bento Grid) */}
      <section className="w-full py-16 lg:py-24 bg-[#0c0e10]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#ffba27]" />
                <span className="text-xs font-bold tracking-widest text-[#ffba27] uppercase">
                  O Nosso Compromisso
                </span>
              </div>
              <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] tracking-tight font-bold">
                Os 4 Pilares da Nossa Cozinha de Fogo
              </h2>
            </div>
            <p className="text-sm text-[#dec1af] max-w-md">
              Cada ingrediente que atravessa nossa porta passa por um crivo rigoroso de frescor, sustentabilidade e integridade artesanal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pilar 1 */}
            <div className="p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] hover:bg-[#282a2c] transition-all flex flex-col justify-between shadow-md">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#f77f00]/15 flex items-center justify-center text-[#f77f00] mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#ffb784] uppercase tracking-wider">
                  01. Autenticidade
                </span>
                <h3 className="font-syne text-base font-bold text-[#e2e2e5] mt-1 mb-2">
                  Seleção Angus Certificada
                </h3>
                <p className="text-xs text-[#dec1af] leading-relaxed">
                  Cortes nobres com marmoreio superior, resultando em uma carne extremamente macia e suculenta que derrete sem esforço na boca.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-[#ffba27] text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Rastreabilidade Total</span>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] hover:bg-[#282a2c] transition-all flex flex-col justify-between shadow-md">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ffba27]/15 flex items-center justify-center text-[#ffba27] mb-4">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#ffba27] uppercase tracking-wider">
                  02. Panificação
                </span>
                <h3 className="font-syne text-base font-bold text-[#e2e2e5] mt-1 mb-2">
                  Pães de Fermentação Lenta
                </h3>
                <p className="text-xs text-[#dec1af] leading-relaxed">
                  Descanso de 24 horas em câmara fria com leveduras selvagens, assados em forno de lastro a cada amanhecer e tostados na manteiga da terra.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-[#ffba27] text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Leveza Digestiva Ímpar</span>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] hover:bg-[#282a2c] transition-all flex flex-col justify-between shadow-md">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ad0224]/20 flex items-center justify-center text-[#ffb3b1] mb-4">
                  <Flame className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-[11px] font-bold text-[#ffb3b1] uppercase tracking-wider">
                  03. O Fogo Sagrado
                </span>
                <h3 className="font-syne text-base font-bold text-[#e2e2e5] mt-1 mb-2">
                  Brasa &amp; Fumaça Nobre
                </h3>
                <p className="text-xs text-[#dec1af] leading-relaxed">
                  Lenha frutífera de macieira e carvão vegetal puro de reflorestamento conferem notas aromáticas elegantes e defumação suave inconfundível.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-[#ffb3b1] text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Zero Produtos Químicos</span>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] hover:bg-[#282a2c] transition-all flex flex-col justify-between shadow-md">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#38393c] flex items-center justify-center text-[#e2e2e5] mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#a68c7b] uppercase tracking-wider">
                  04. Planeta &amp; Comunidade
                </span>
                <h3 className="font-syne text-base font-bold text-[#e2e2e5] mt-1 mb-2">
                  100% Biodegradável
                </h3>
                <p className="text-xs text-[#dec1af] leading-relaxed">
                  Embalagens de papel kraft certificado livres de plástico, descarte consciente e suporte ativo à agricultura familiar regional.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-[#ffb784] text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Impacto Positivo Real</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Virtual, Espaço para Eventos & Aniversários */}
      <section className="w-full py-16 lg:py-24 bg-[#121416]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1a1c1e] border border-[#333537] p-8 lg:p-12 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#ffba27]" />
                  <span className="text-xs font-bold text-[#ffba27] uppercase tracking-wider">
                    Reserve o Espaço
                  </span>
                </div>
                <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] font-bold tracking-tight">
                  Celebre Momentos Especiais em Torno do Nosso Fogo
                </h2>
                <p className="text-sm text-[#dec1af] leading-relaxed">
                  Nosso salão rústico-industrial dispõe de mezanino exclusivo, mesas compartilhadas em carvalho e cabines privativas perfeitas para comemorações de aniversários, confraternizações corporativas e encontros memoráveis de amigos.
                </p>

                {/* Key Features Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#1e2022] border border-[#333537] flex flex-col gap-1">
                    <Users className="w-5 h-5 text-[#ffb784]" />
                    <span className="text-xs font-bold text-[#e2e2e5]">Até 80 Pessoas</span>
                    <span className="text-[11px] text-[#a68c7b]">Capacidade no mezanino</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#1e2022] border border-[#333537] flex flex-col gap-1">
                    <Cake className="w-5 h-5 text-[#ffb784]" />
                    <span className="text-xs font-bold text-[#e2e2e5]">Menu Personalizado</span>
                    <span className="text-[11px] text-[#a68c7b]">Mini burgers e sobremesas</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#1e2022] border border-[#333537] flex flex-col gap-1">
                    <Beer className="w-5 h-5 text-[#ffb784]" />
                    <span className="text-xs font-bold text-[#e2e2e5]">Torneiras de Chope</span>
                    <span className="text-[11px] text-[#a68c7b]">6 rótulos artesanais</span>
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/5511987654321?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20disponibilidade%20para%20reserva%20de%20evento%20no%20Fogo%20%26%20Brasa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_-2px_rgba(247,127,0,0.5)] transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar Data no WhatsApp</span>
                  </a>
                  <span className="text-xs text-[#a68c7b]">
                    Sem taxa de reserva para grupos até 15 pessoas
                  </span>
                </div>
              </div>

              {/* Virtual Tour Preview Card */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div
                  onClick={onOpenVirtualTour}
                  className="relative rounded-3xl overflow-hidden bg-[#1e2022] border border-[#333537] shadow-2xl group cursor-pointer"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLgIu2vXoCMrPfyc6Pu0WT8JJde8AiJycMKYrABebTHO-bL6PDt88VS-VCwZz_UdR1_rWxKEQ3eORbY6GaRBlROmsgrAMOFsYzQZUxEk8tttDI40mBPxSLQqvnuwz2dLaixY1j1sAy1ezRQS4cvLXIGwrCSuzIoj4rCQvL2sBiPXrTxQ0ukDB_9q3c6M0FXY84cawYU4_JeDaxkG2kp9Ew1s5CgyUZh4hSRGKyMJ-7mvJU0zP-k4wzlw"
                    alt="Mapa do salão Fogo & Brasa"
                    className="w-full h-72 object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0c0e10]/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center transition-all group-hover:bg-[#0c0e10]/40">
                    <div className="w-14 h-14 rounded-full bg-[#f77f00] text-[#121416] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform mb-3">
                      <RotateCw className="w-7 h-7" />
                    </div>
                    <h3 className="font-syne text-lg font-bold text-[#e2e2e5]">Tour Virtual Interativo</h3>
                    <p className="text-xs text-[#dec1af] max-w-xs mt-1">
                      Conheça cada canto do nosso salão, a parrilla e o mezanino em 360°
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[#ffba27] font-bold text-xs">
                      <span>Clique para Navegar</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#1e2022] border border-[#333537] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#e2e2e5]">
                    <Clock className="w-4 h-4 text-[#ffba27]" />
                    <span className="font-semibold">Horário de Funcionamento:</span>
                  </div>
                  <span className="text-[#ffb784] font-bold uppercase">
                    Terça a Domingo • 18h às 23h30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
