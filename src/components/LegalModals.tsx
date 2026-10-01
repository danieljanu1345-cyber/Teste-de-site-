import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0e10]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#1a1c1e] max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-[#333537] shadow-[0_24px_50px_rgba(0,0,0,0.95)] max-h-[85vh] overflow-y-auto space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#333537]">
          <div className="flex items-center gap-2">
            {isPrivacy ? (
              <ShieldCheck className="w-5 h-5 text-[#ffba27]" />
            ) : (
              <FileText className="w-5 h-5 text-[#ffba27]" />
            )}
            <h3 className="font-syne text-lg font-bold text-[#e2e2e5]">
              {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#282a2c] hover:bg-[#333537] text-[#a68c7b] hover:text-[#e2e2e5] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-[#dec1af] space-y-3 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                No <strong>Fogo &amp; Brasa Burger Artesanal</strong>, a privacidade e a segurança dos dados dos nossos clientes são prioridades absolutas.
              </p>
              <h4 className="font-bold text-[#e2e2e5] text-sm">1. Coleta e Uso de Informações</h4>
              <p>
                Coletamos apenas as informações essenciais para a preparação dos pratos e a logística da entrega (como nome, endereço, telefone WhatsApp e detalhes de pedidos). Seus dados nunca são vendidos ou comercializados.
              </p>
              <h4 className="font-bold text-[#e2e2e5] text-sm">2. Segurança dos Pagamentos</h4>
              <p>
                Transações financeiras realizadas via PIX ou operadoras de cartão de crédito utilizam criptografia de ponta a ponta e padrões rígidos de conformidade PCI-DSS.
              </p>
              <h4 className="font-bold text-[#e2e2e5] text-sm">3. Seus Direitos</h4>
              <p>
                Você pode a qualquer momento solicitar a atualização ou remoção dos seus dados de cadastro enviando uma mensagem para <strong>contato@fagoebrasa.com.br</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao <strong>Fogo &amp; Brasa</strong>. Ao utilizar nosso aplicativo e cardápio online, você concorda com as condições descritas a seguir.
              </p>
              <h4 className="font-bold text-[#e2e2e5] text-sm">1. Horário e Área de Atendimento</h4>
              <p>
                Nosso salão e delivery operam de Terça a Domingo, das 18h00 às 23h30 (Sexta e Sábado até 01h00). O raio de entrega é de até 8 km a partir da unidade Jardins (Rua das Brasas, 450).
              </p>
              <h4 className="font-bold text-[#e2e2e5] text-sm">2. Ponto da Carne e Personalizações</h4>
              <p>
                Preparamos nossos blends Angus no ponto solicitado pelo cliente (ao ponto, mal passado ou bem passado). Modificações especiais devem ser sinalizadas nas observações do pedido.
              </p>
              <h4 className="font-bold text-[#e2e2e5] text-sm">3. Cupons Promocionais</h4>
              <p>
                O cupom <strong>PRIMEIRACOMPRA10</strong> concede 10% de desconto no valor total dos itens para primeiros pedidos, não cumulativo com outras promoções sazonais vigentes.
              </p>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-full bg-[#f77f00] hover:bg-[#ffba27] text-[#121416] text-xs font-bold transition-colors cursor-pointer mt-4"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
