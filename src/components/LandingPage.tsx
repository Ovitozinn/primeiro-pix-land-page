import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-landing-bg">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        
        {/* HERO / COPY PRINCIPAL */}
        <section className="mb-16">
          <div className="text-base leading-relaxed text-foreground space-y-4">
            <p className="font-bold text-lg">🔑PARA DE ASSISTIR: ESTE DOC É A CHAVE DO SEU PRIMEIRO R$ 10 K</p>
            
            <p>
              Você está segurando metade do tesouro: o mesmo caminho que usei para fechar meus 5 primeiros clientes — sem gastar um centavo em tráfego, postar carrossel ou prometer "ROAS infinito".
            </p>
            
            <p>
              Porém é claro, você não vai fazer o que eu fiz no meu início, vou te dar a versão otimizada e validada por mais de 78 alunos e 12 mentorados que já fecharam seus primeiros contratos - apenas usando pelo menos 1 das estratégias que irei te passar - imagina se você juntar todas? É o que eu fiz mês passado e faturei mais de R$55 mil reais em 34 dias
            </p>
            
            <p>Mas só metade.</p>
            
            <p>
              O resto das chaves — as que ligam o motor e explodem em contratos assinados — estão dentro do mini-curso. Leia até o fim, pegue o mapa e decida se quer abrir a porta ou continuar do lado de fora.
            </p>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">🫵 Para quem é esse mini - curso?</h3>
              <ul className="space-y-2">
                <li>Profissional no-code / n8n com fluxos lindos e conta bancária vazia.</li>
                <li>Freelancer dev que vive ouvindo "manda proposta" e nunca recebe PIX.</li>
                <li>Micro-agência que precisa de contratos pagos já, não "awareness" futurista.</li>
                <li>Ainda não colocou pelo menos R$10mil reais no bolso usando IA</li>
              </ul>
              <p className="mt-2 text-sm">(Se você já fechou 10+ contratos de IA, feche este arquivo. Isto é para quem ainda engasga.)</p>
            </div>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">🏹 3 Balas de Prata Para Fechar 5 Clientes Sem Gastar 1 Real</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">1. Sniper de Dor</p>
                  <p>Escolho o único problema que custa pelo menos R$20 mil/mês ao prospecto. Se a ferida não sangra dinheiro, mudo de alvo.</p>
                </div>
                
                <div>
                  <p className="font-semibold">2. Prova-Lixo</p>
                  <p>Demonstro um MVP feio (um agente base pronto com o prompt editado) por 5 minutos e corto o acesso.</p>
                  <p>Frase-chave: "Se isso que montei em 15 min já te economiza tempo, imagina o completo." Resultado: FOMO imediato.</p>
                </div>
                
                <div>
                  <p className="font-semibold">3. Preço 10 % da Hemorragia</p>
                  <p>Descubro quanto o problema sangra por mês; cobro 30 % desse valor por 3 meses.</p>
                  <p>Proposta: "INVESTIMENTO R$5 K → RETORNO R$45 K."</p>
                  <p>O cliente chama isso de "barato" antes que você termine a frase.</p>
                </div>
              </div>
              
              <p className="mt-4">Essas três balas já acendem o pavio — mas sem a pólvora certa o estalo morre antes de virar explosão.</p>
            </div>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">🕸️A Armadilha: Por Que Você Vai Travar Sem o Mini-Curso</h3>
              
              <p className="font-semibold mb-3">Peças que Faltam</p>
              <p className="mb-3">Sem, isso acontece com você:</p>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Script DM-PIX</p>
                  <p>Conversa morna que some no "vou pensar".</p>
                </div>
                
                <div>
                  <p className="font-semibold">Planilha Síndrome do Custo</p>
                  <p>Você nunca prova em números a dor que quer cobrar.</p>
                </div>
                
                <div>
                  <p className="font-semibold">Template Proposta FOMO</p>
                  <p>PDF genérico que o cliente envia ao concorrente mais barato.</p>
                </div>
                
                <div>
                  <p className="font-semibold">Aula Cirúrgica (dia 8)</p>
                  <p>Travou na negociação? Fica travado — ninguém corrige seu pitch.</p>
                </div>
                
                <div>
                  <p className="font-semibold">Checklist 15 Dias</p>
                  <p>"O que faço hoje?" vira paralisia e o relógio vence você.</p>
                </div>
              </div>
            </div>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">💀O Pacote de Armamento Pesado Que Destrava os 15 Dias</h3>
              
              <ul className="space-y-2">
                <li>Mais de 15 aulas direto‐ao-ponto (para você consultar quando precisar).</li>
                <li>1 Aula Cirúrgica (dia 8) para quebrar todas as pedras que ficaram no caminho.</li>
                <li>3 Documentos de Scripts Infalíveis — DM, planilha de custo e PDF FOMO prontos para copiar e colar.</li>
                <li>Suporte direto comigo na plataforma pelos 15 dias + 25 dias de acompanhamento (para garantir que você fature pelo menos 5K com esse cursinho)</li>
              </ul>
            </div>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">PIX no Bolso ou PIX de Volta – Garantia Sem Choro</h3>
              <ul className="space-y-2">
                <li>Execute todas as tarefas.</li>
                <li>Fez tudo que eu disse e não fechou pelo menos 1 contrato em 40 dias?</li>
                <li>Eu devolvo 100 % do seu dinheiro ou te dou uma mentoria grátis (o plano mais barato custa R$1500)</li>
              </ul>
            </div>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">Troco de Padaria Agora ou Preço de Luxo Depois</h3>
              <p>Investimento total: R$ 300,00</p>
              <p className="font-bold">Investimento da primeira turma: R$ 147,00</p>
              <p className="mt-2">Quem entrar agora recebe exatamente o que futuramente será vendido mais caro — e ainda leva mentoria individual no meio do caminho.</p>
            </div>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">💎 Garanta seu acesso!</h3>
              <p>Metade do mapa já é sua.</p>
              <p>A porta continua trancada até você,</p>
            </div>
            
            {/* CTA BUTTON */}
            <div className="my-8">
              <Button 
                className="w-full h-14 text-lg font-semibold bg-landing-cta hover:bg-landing-cta/90 text-white rounded-md transition-colors"
                onClick={() => window.open('https://pay.kiwify.com.br/c8eywu5', '_blank')}
              >
                Quero fechar meu primeiro contrato
              </Button>
            </div>
            
            <p className="text-right">— Victor Castilho</p>
          </div>
        </section>
        
        {/* BLOCO DE VÍDEO (VSL) */}
        <section className="mb-16">
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center text-white">
              <Play className="mx-auto mb-4 h-16 w-16 opacity-80" />
              <p className="text-lg">Vídeo de Vendas</p>
              <p className="text-sm opacity-80">Clique para assistir</p>
            </div>
          </div>
          <p className="text-center font-bold">
            ▶ Clique para assistir à VSL e destravar seu primeiro contrato (2 min)
          </p>
        </section>
        
        {/* SUMÁRIO PODEROSO */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Plano de Ataque – 15 Dias até o PIX</h2>
          
          <div className="space-y-6">
            {[
              "Boas-Vindas & Mentalidade de Vendas",
              "Escolha de Nicho + Compromisso Público",
              "Lista-Builder: empresas do seu nicho em minutos",
              "Oferta Magnética validada ao vivo",
              "Scripts de Prospecção (e-mail, DM, VIP)",
              "Follow-Up que Vende (exemplos prontos)",
              "Aprimoramento & Correções de Rota",
              "Aula Cirúrgica Q&A: todas as dúvidas resolvidas",
              "Diagnóstico Pré-Call (planilha + perguntas)",
              "Call Matadora: adeus \"vou pensar\"",
              "Proposta Assassin's Creed (template + preço)",
              "Fechamento & Contrato Plug-and-Play",
              "Alinhamento de Expectativas & Upsell",
              "MVP que Dobra Conversão em 48 h",
              "Live Final + Próximos Passos e Bônus"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-landing-cta text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="pt-1">
                  <p className="text-lg leading-relaxed">
                    Dia {String(index + 1).padStart(2, '0')} – {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* SEGUNDA CHAMADA PARA AÇÃO */}
        <section className="mb-16">
          <Button 
            className="w-full h-14 text-lg font-semibold bg-landing-cta hover:bg-landing-cta/90 text-white rounded-md transition-colors"
            onClick={() => window.open('https://pay.kiwify.com.br/c8eywu5', '_blank')}
          >
            Quero fechar meu primeiro contrato
          </Button>
        </section>
        
      </div>
      
      {/* RODAPÉ SIMPLES */}
      <footer className="border-t border-gray-300 py-8">
        <div className="max-w-[960px] mx-auto px-6">
          <p className="text-center text-sm text-landing-footer">
            © 2025 Victor Castilho · Todos os direitos reservados · Suporte: vitocastilho12@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;