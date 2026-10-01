import React, { useState } from 'react';
import { MapPin, Phone, Mail, Bike, Clock, ChevronDown, CheckCircle2, MessageCircle, Star, Send, ExternalLink, Flame } from 'lucide-react';
import { ReservationRequest } from '../types';

interface ContactPageProps {
  onNavigate: (tab: string) => void;
  onOpenCart: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenCart }) => {
  // Form State
  const [formData, setFormData] = useState<ReservationRequest>({
    fullName: '',
    phone: '',
    email: '',
    reason: 'duvida',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '4',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const scrollToForm = () => {
    const el = document.getElementById('reservas-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Header Section */}
      <section className="relative w-full overflow-hidden pt-10 pb-12 bg-[#0c0e10]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#f77f00]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-96 -right-24 w-[420px] h-[420px] bg-[#ffba27]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1c1e] border border-[#333537] text-[#ffba27]">
                <span className="w-2 h-2 rounded-full bg-[#ffba27] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#dec1af]">
                  Central de Atendimento • Jardins SP
                </span>
              </div>
              <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#e2e2e5] font-extrabold">
                Venha nos Visitar <br className="hidden sm:inline" />
                <span className="text-[#ffb784] italic font-light">ou Faça seu Pedido</span>
              </h1>
              <p className="text-base sm:text-lg text-[#dec1af] max-w-2xl leading-relaxed">
                Sinta o calor da brasa viva, o perfume da lenha de macieira e a atmosfera acolhedora da nossa casa nos Jardins. Estamos prontos para receber você, sua família ou enviar seu hambúrguer preferido fumegante até sua porta.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="flex items-center gap-3.5 p-4 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-lg shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#f77f00]/20 border border-[#f77f00]/40 flex items-center justify-center text-[#f77f00] shrink-0">
                <Flame className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a68c7b] font-bold">Status Hoje</span>
                <p className="font-syne text-base font-bold text-[#e2e2e5] flex items-center gap-2">
                  Brasa Acesa
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ffba27] animate-pulse" />
                </p>
                <span className="text-xs text-[#dec1af]">Salão • Delivery ativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Mosaic / Contact Cards */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Endereço */}
          <div className="p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-[#1e2022] hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#282a2c] flex items-center justify-center text-[#ffb784]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffb784]">
                  Localização Nobre
                </span>
                <h2 className="font-syne text-xl font-bold text-[#e2e2e5] mt-1">Nossa Casa</h2>
              </div>
              <p className="text-xs text-[#dec1af] leading-relaxed">
                Rua das Brasas, 450<br />
                Bairro Jardins • São Paulo - SP<br />
                <span className="text-[#a68c7b]">CEP: 01410-000</span>
              </p>
            </div>
            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=Rua+das+Brasas+450+Jardins+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffb784] hover:text-[#ffba27] transition-colors"
              >
                <span>Abrir rotas</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Telefones & WhatsApp */}
          <div className="p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-[#1e2022] hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#282a2c] flex items-center justify-center text-[#ffb784]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffb784]">
                  Voz &amp; Chat
                </span>
                <h2 className="font-syne text-xl font-bold text-[#e2e2e5] mt-1">Contato Direto</h2>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[11px] text-[#a68c7b] block">WhatsApp Oficial:</span>
                  <span className="text-sm font-bold text-[#e2e2e5]">(11) 98765-4321</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#a68c7b] block">Telefone Fixo / Balcão:</span>
                  <span className="text-sm font-bold text-[#e2e2e5]">(11) 3214-5678</span>
                </div>
              </div>
            </div>
            <div className="pt-6 flex flex-wrap gap-2">
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] font-bold text-xs inline-flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href="tel:1132145678"
                className="px-3.5 py-2 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#e2e2e5] text-xs font-semibold inline-flex items-center gap-1 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#ffb784]" />
                Ligar
              </a>
            </div>
          </div>

          {/* Card 3: E-mails */}
          <div className="p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-[#1e2022] hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#282a2c] flex items-center justify-center text-[#ffb784]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffb784]">
                  Correio Eletrônico
                </span>
                <h2 className="font-syne text-xl font-bold text-[#e2e2e5] mt-1">E-mails</h2>
              </div>
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="text-[11px] text-[#a68c7b] block">Atendimento Geral:</span>
                  <a
                    href="mailto:contato@fagoebrasa.com.br"
                    className="text-[#e2e2e5] hover:text-[#ffb784] break-all transition-colors"
                  >
                    contato@fagoebrasa.com.br
                  </a>
                </div>
                <div>
                  <span className="text-[11px] text-[#a68c7b] block">Eventos &amp; Reservas:</span>
                  <a
                    href="mailto:reservas@fagoebrasa.com.br"
                    className="text-[#e2e2e5] hover:text-[#ffb784] break-all transition-colors"
                  >
                    reservas@fagoebrasa.com.br
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <span className="text-[11px] text-[#ffba27] font-semibold">
                Resposta média em até 3 horas
              </span>
            </div>
          </div>

          {/* Card 4: Raio de Delivery */}
          <div className="p-6 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-[#1e2022] hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#282a2c] flex items-center justify-center text-[#ffb784]">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffb784]">
                  Entrega Rápida
                </span>
                <h2 className="font-syne text-xl font-bold text-[#e2e2e5] mt-1">Delivery Artesanal</h2>
              </div>
              <p className="text-xs text-[#dec1af] leading-relaxed">
                Atendemos em um raio exclusivo de <strong className="text-[#e2e2e5]">até 8 km</strong> para garantir a crocância do pão e o ponto exato da carne.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-[#121416] text-[#dec1af] text-[10px] font-semibold border border-[#333537]">
                  Site Próprio
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#121416] text-[#dec1af] text-[10px] font-semibold border border-[#333537]">
                  iFood Gourmet
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#121416] text-[#dec1af] text-[10px] font-semibold border border-[#333537]">
                  WhatsApp
                </span>
              </div>
            </div>
            <div className="pt-6">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-[#dec1af]">
                <CheckCircle2 className="w-4 h-4 text-[#ffba27]" />
                Embalagem térmica selada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Ambience Banner Split */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Atmosphere Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[380px] flex flex-col justify-end p-8 bg-[#1a1c1e] border border-[#333537]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvNHZluSw72Hkw-S5AybjOCx_gU3IODOG61ntCfoJVqYvJT7A46umvnde35R5v_Yn8Atoc2eNffMRb3jtaPNsY9TnmpDJxTlXp-GtuZ7etmwKOnvY5bCdOmMjB3_vLD6EnSiRj72aCfX2x0AWUfCFW_9aZv-ldIBvT-v9ApWKgwsKARbCPk-shyuliZ7NYNqMGd8AIu6k2rRUv7piAtZnDZCZW3mMaasqM03Fq29knA2Pg1nbWi1upbQ"
              alt="Ambiente Fogo e Brasa Jardins"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10] via-[#0c0e10]/60 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#121416]/80 backdrop-blur-md text-[#ffba27] text-[11px] font-bold uppercase tracking-wider inline-block border border-[#333537]">
                A Casa dos Mestres Grelhadores
              </span>
              <h3 className="font-syne text-2xl font-bold text-[#e2e2e5]">
                Experiência ao Vivo da Brasa
              </h3>
              <p className="text-xs text-[#dec1af] leading-relaxed">
                Balcão integrado, carta de chopes artesanais locais e coquetelaria autoral em harmonia com defumados.
              </p>
            </div>
          </div>

          {/* Detailed Opening Hours Panel */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-4 border-b border-[#333537]/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#f77f00]/20 flex items-center justify-center text-[#f77f00]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-bold text-[#e2e2e5]">Horários de Funcionamento</h3>
                    <p className="text-xs text-[#dec1af]">Sintonize com o fogo em cada turno da semana</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#121416] border border-[#333537] text-[#a68c7b] text-[10px] font-semibold">
                  Fuso: Horário de Brasília (GMT-3)
                </span>
              </div>

              {/* Schedule Timetable Rows */}
              <div className="space-y-3">
                {/* Terça a Quinta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-[#1e2022] border border-[#333537] hover:border-[#f77f00]/40 transition-colors gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f77f00]" />
                    <span className="text-sm font-semibold text-[#e2e2e5]">
                      Terça-feira a Quinta-feira
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-syne text-base font-bold text-[#ffba27]">
                      18h00 • 23h30
                    </span>
                    <span className="text-xs text-[#dec1af]">(Cozinha encerra 23h00)</span>
                  </div>
                </div>

                {/* Sexta e Sábado */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-[#1e2022] border border-[#333537] hover:border-[#f77f00]/40 transition-colors gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffba27]" />
                    <span className="text-sm font-semibold text-[#e2e2e5]">
                      Sexta-feira e Sábado
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#f77f00]/20 text-[#ffb784] text-[10px] uppercase font-bold">
                      Pico Noturno
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-syne text-base font-bold text-[#ffba27]">
                      18h00 • 01h00
                    </span>
                    <span className="text-xs text-[#dec1af]">(Cozinha encerra 00h30)</span>
                  </div>
                </div>

                {/* Domingo */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-[#1e2022] border border-[#333537] hover:border-[#f77f00]/40 transition-colors gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffb784]" />
                    <span className="text-sm font-semibold text-[#e2e2e5]">
                      Domingo em Família
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-syne text-base font-bold text-[#ffba27]">
                      17h30 • 23h00
                    </span>
                    <span className="text-xs text-[#dec1af]">(Abertura mais cedo)</span>
                  </div>
                </div>

                {/* Segunda-feira */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-[#121416]/70 border border-[#333537]/50 text-[#a68c7b] gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]" />
                    <span className="text-sm font-medium">Segunda-feira</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#ffb4ab] uppercase tracking-wider">
                      Fechado
                    </span>
                    <span className="text-xs text-[#a68c7b] ml-2">
                      Descanso da equipe &amp; curadoria das grelhas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#333537]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-[#dec1af]">
                Recomendamos reservas antecipadas para grupos com mais de 6 pessoas de quinta a sábado.
              </div>
              <button
                onClick={scrollToForm}
                className="px-6 py-2.5 rounded-full bg-[#282a2c] hover:bg-[#f77f00] hover:text-[#121416] text-[#e2e2e5] font-bold text-xs transition-all shrink-0 cursor-pointer"
              >
                Agendar Horário
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Directions Section */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#333537]/50">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffb784]">
                Navegação &amp; Rotas
              </span>
              <h2 className="font-syne text-3xl font-bold text-[#e2e2e5] mt-1">Como Chegar</h2>
              <p className="text-xs sm:text-sm text-[#dec1af] mt-1">
                Localizado a 400 metros da Estação Oscar Freire (Linha 4-Amarela do Metrô).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://waze.com/ul?q=Rua+das+Brasas+450+Jardins+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#e2e2e5] text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#ffb784]" />
                <span>Abrir no Waze</span>
              </a>
              <a
                href="https://maps.google.com/?q=Rua+das+Brasas+450+Jardins+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] text-xs font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Como Chegar (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Embedded Map Component */}
          <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden mt-6 border border-[#333537] shadow-inner">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLgIu2vXoCMrPfyc6Pu0WT8JJde8AiJycMKYrABebTHO-bL6PDt88VS-VCwZz_UdR1_rWxKEQ3eORbY6GaRBlROmsgrAMOFsYzQZUxEk8tttDI40mBPxSLQqvnuwz2dLaixY1j1sAy1ezRQS4cvLXIGwrCSuzIoj4rCQvL2sBiPXrTxQ0ukDB_9q3c6M0FXY84cawYU4_JeDaxkG2kp9Ew1s5CgyUZh4hSRGKyMJ-7mvJU0zP-k4wzlw"
              alt="Mapa ilustrativo São Paulo Jardins"
              className="w-full h-full object-cover filter contrast-105"
            />
            {/* Floating Map Interactive Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md p-5 rounded-2xl bg-[#0c0e10]/90 backdrop-blur-md border border-[#333537] shadow-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f77f00] flex items-center justify-center text-[#121416] shrink-0 shadow-md">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <div className="space-y-1 text-xs">
                <h3 className="font-syne text-base font-bold text-[#e2e2e5]">
                  Fogo &amp; Brasa Smokehouse
                </h3>
                <p className="text-[#dec1af]">Rua das Brasas, 450 • Jardins, São Paulo</p>
                <div className="pt-2 flex items-center gap-3 text-[11px] text-[#ffba27]">
                  <span>Valet cortesia na porta</span>
                  <span>•</span>
                  <span>Acessibilidade total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation & Contact Form */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-20" id="reservas-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side: Engaging copy & Visual proof */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffb784]">
                Fale com os Mestres
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] font-bold">
                Mande uma Mensagem ou Reserve sua Mesa
              </h2>
              <p className="text-sm text-[#dec1af] leading-relaxed">
                Dúvidas sobre o cardápio, restrições alimentares, celebrações com menu degustação exclusivo na brasa ou apenas um feedback saboroso: adoramos ouvir você.
              </p>
            </div>

            {/* Testimonial Box */}
            <div className="rounded-3xl p-6 bg-[#1a1c1e] border border-[#333537] shadow-md space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-[#333537]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2YRA9d6XYM984Vi1oixuRJQvMJSqtfL7MOSw87jzqofAnyv2a33c1kjDAZ3UNfjzxGyMstknWikinxN__SI79bRXZbSNH8mZk9m05FQyG9yaLQe2aNlyfytOE7UEjKUrru-pg9R0Ms1qMYd6jWlHuLeeagn0Of1YLRpYhN7AQLaxkug6g3tHFNvHLUYgc3sMS-6eSzMEvSEgoI4tfd4QICUMzyZ8DJHoCi9BlmbI55mJa6oo_AlmHTg"
                    alt="Smash burger premium"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-[#ffba27]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="font-syne text-sm font-bold text-[#e2e2e5] mt-1">
                    “O melhor smash defumado de SP.”
                  </p>
                  <span className="text-[11px] text-[#a68c7b]">
                    Guia Gastronômico Paulistano 2024
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-[#dec1af] pt-2 border-t border-[#333537]/50">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ffba27]" />
                  Mesas internas climatizadas e deck ao ar livre pet friendly
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ffba27]" />
                  Atendimento especial para aniversários e eventos corporativos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ffba27]" />
                  Resposta ágil por WhatsApp ou e-mail
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#121416] border border-[#333537] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ffba27]" />
                <div className="text-xs">
                  <p className="text-[#a68c7b]">Prefere atendimento em tempo real?</p>
                  <p className="font-bold text-[#e2e2e5] text-sm">(11) 98765-4321</p>
                </div>
              </div>
              <a
                href="https://wa.me/5511987654321"
                className="px-4 py-2 rounded-full bg-[#282a2c] hover:bg-[#f77f00] hover:text-[#121416] text-[#ffb784] text-xs font-bold transition-colors cursor-pointer"
              >
                Chamar
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#1a1c1e] border border-[#333537] shadow-xl">
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome Completo */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#e2e2e5]">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ex: Lucas Guimarães"
                    className="w-full px-4 py-3 rounded-2xl bg-[#121416] border border-[#333537] text-xs text-[#e2e2e5] placeholder:text-[#a68c7b] focus:outline-none focus:border-[#f77f00] transition-all shadow-inner"
                  />
                </div>

                {/* Telefone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#e2e2e5]">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 90000-0000"
                    className="w-full px-4 py-3 rounded-2xl bg-[#121416] border border-[#333537] text-xs text-[#e2e2e5] placeholder:text-[#a68c7b] focus:outline-none focus:border-[#f77f00] transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* E-mail */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#e2e2e5]">
                  E-mail para Confirmação *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-3 rounded-2xl bg-[#121416] border border-[#333537] text-xs text-[#e2e2e5] placeholder:text-[#a68c7b] focus:outline-none focus:border-[#f77f00] transition-all shadow-inner"
                />
              </div>

              {/* Motivo do Contato */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#e2e2e5]">
                  Motivo do Contato
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'duvida', label: 'Dúvida' },
                    { id: 'reserva', label: 'Reserva de Mesa' },
                    { id: 'evento', label: 'Evento Privado' },
                    { id: 'feedback', label: 'Feedback' },
                  ].map((motivo) => {
                    const isSelected = formData.reason === motivo.id;
                    return (
                      <button
                        key={motivo.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, reason: motivo.id as any })}
                        className={`p-3 rounded-2xl text-xs font-semibold transition-all cursor-pointer border text-center ${
                          isSelected
                            ? 'bg-[#f77f00] text-[#121416] border-[#f77f00] font-bold shadow-md'
                            : 'bg-[#121416] border-[#333537] text-[#dec1af] hover:bg-[#282a2c]'
                        }`}
                      >
                        {motivo.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Conditional Reservation Fields */}
              {(formData.reason === 'reserva' || formData.reason === 'evento') && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#121416] border border-[#333537]">
                  <div className="space-y-1">
                    <label className="block text-[11px] text-[#a68c7b]">Data Pretendida</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1e2022] border border-[#333537] text-xs text-[#e2e2e5] focus:outline-none focus:border-[#f77f00]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[11px] text-[#a68c7b]">Horário Sugerido</label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1e2022] border border-[#333537] text-xs text-[#e2e2e5] focus:outline-none focus:border-[#f77f00]"
                    >
                      <option value="18:30">18h30</option>
                      <option value="19:00">19h00</option>
                      <option value="19:30">19h30</option>
                      <option value="20:00">20h00</option>
                      <option value="20:30">20h30</option>
                      <option value="21:00">21h00</option>
                      <option value="21:30">21h30</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[11px] text-[#a68c7b]">Nº de Pessoas</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1e2022] border border-[#333537] text-xs text-[#e2e2e5] focus:outline-none focus:border-[#f77f00]"
                    >
                      <option value="2">2 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="6">6 pessoas</option>
                      <option value="8">8 pessoas</option>
                      <option value="10+">10 ou mais pessoas</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Mensagem */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#e2e2e5]">
                  Mensagem / Observações
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Conte-nos os detalhes do seu pedido, ocasião especial ou perguntas..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#121416] border border-[#333537] text-xs text-[#e2e2e5] placeholder:text-[#a68c7b] focus:outline-none focus:border-[#f77f00] transition-all resize-none shadow-inner"
                />
              </div>

              {/* Submit Button & Feedback */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-[#a68c7b] text-center sm:text-left">
                  Seus dados são protegidos e nunca compartilhados.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffba27] hover:brightness-110 text-[#121416] font-bold text-xs shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Success Notice */}
              {formSubmitted && (
                <div className="p-4 rounded-2xl bg-[#ffba27]/20 border border-[#ffba27]/40 text-[#ffba27] flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-[#e2e2e5]">Mensagem enviada com sucesso!</p>
                    <p className="text-[#dec1af]">
                      Entraremos em contato em instantes via WhatsApp ou e-mail informado.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb784]">
              Tire Suas Dúvidas
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl text-[#e2e2e5] font-bold">
              Perguntas Frequentes
            </h2>
            <p className="text-xs sm:text-sm text-[#dec1af] max-w-xl mx-auto">
              Tudo o que você precisa saber antes de chegar à nossa mesa ou pedir seu smash burger na brasa.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                question: 'Possuem opções vegetarianas?',
                answer:
                  'Sim! Criamos artesanalmente o nosso burger "Brasa Verde" (Green Ember): blend de cogumelos Portobello tostados e grão-de-bico sob defumação suave, coberto por queijo gouda curado derretido, maionese de alho negro e rúcula selvagem fresca no brioche dourado. Há também a opção de substituir o queijo tradicional por creme vegetal à base de castanhas para adeptos do veganismo.',
              },
              {
                question: 'Tem estacionamento ou serviço de valet no local?',
                answer:
                  'Dispomos de serviço conveniado de manobrista (valet) diretamente na porta do restaurante durante todo o período de funcionamento. Além disso, a Rua das Brasas conta com bolsões de estacionamento rotativo com iluminação reforçada e vigia parceiro.',
              },
              {
                question: 'Aceitam reservas para comemorações e aniversários?',
                answer:
                  'Com certeza! Para reservas a partir de 6 convidados, o aniversariante ganha como cortesia uma sobremesa especial da casa (nossa torta banoffee tostada no maçarico) ou um drink autoral. Para grupos maiores de 15 pessoas, recomendamos contato com pelo menos 48h de antecedência pelo WhatsApp de reservas para separarmos o mezanino exclusivo.',
              },
              {
                question: 'Quais as formas de pagamento aceitas? (PIX, Cartões, Vale Refeição)',
                answer:
                  'Aceitamos pagamentos instantâneos via PIX (com 5% de desconto nas compras diretas), todos os cartões de crédito e débito (Visa, Mastercard, Elo, Amex) e os principais cartões de Vale Refeição / Alimentação: Alelo Refeição, Sodexo / Pluxee, VR Refeição, Ticket Restaurante e Flash Benefícios, tanto no salão quanto nas entregas pelo nosso aplicativo próprio.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#1a1c1e] border border-[#333537] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-syne text-base font-bold text-[#e2e2e5] hover:text-[#ffb784] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#a68c7b] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#ffba27]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[#dec1af] text-xs leading-relaxed border-t border-[#333537]/30 animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Callout Strip */}
      <section className="w-full bg-[#1a1c1e] border-t border-[#333537] py-12">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-syne text-2xl font-bold text-[#e2e2e5]">
              Pronto para provar a verdadeira defumação?
            </h3>
            <p className="text-xs sm:text-sm text-[#dec1af]">
              Peça agora online e acompanhe a rota do entregador em tempo real.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('cardapio')}
              className="px-6 py-3 rounded-full bg-[#121416] hover:bg-[#282a2c] text-[#e2e2e5] hover:text-[#ffb784] text-xs font-bold transition-colors cursor-pointer border border-[#333537]"
            >
              Ver Cardápio
            </button>
            <button
              onClick={onOpenCart}
              className="px-8 py-3 rounded-full bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] text-xs font-bold shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Fazer Pedido Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
