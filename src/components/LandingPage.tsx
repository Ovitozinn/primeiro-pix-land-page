import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progressPerc = (scrollTop / pageHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progressPerc)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-landing-bg">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        
        {/* HERO / COPY PRINCIPAL */}
        <section className="mb-16">
          <div className="text-base leading-relaxed text-foreground space-y-4">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="animate-spin text-4xl">🔑</div>
                <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-landing-cta to-landing-cta/70 bg-clip-text text-transparent">
                  PARA DE ASSISTIR: ESTE DOC É A CHAVE DO SEU PRIMEIRO R$50.000
                </h1>
                <div className="animate-spin text-4xl">🔑</div>
              </div>
            </div>
            
            <p>
              Você está segurando metade do tesouro: o mesmo caminho que usei para fechar meus 5 primeiros clientes — sem gastar um centavo em tráfego, postar carrossel ou prometer "ROAS infinito".
            </p>
            
            <p>
              Porém é claro, você não vai fazer o que eu fiz no meu início, vou te dar a versão otimizada e validada por mais de 78 alunos e 27 mentorados que já fecharam seus primeiros contratos - apenas usando pelo menos 1 das estratégias que irei te passar - imagina se você juntar todas? É o que eu fiz mês passado e faturei mais de R$55 mil reais em 34 dias
            </p>
            
            <p>Mas só metade.</p>
            
            <p>
              O resto das chaves — as que ligam o motor e explodem em contratos assinados — estão dentro do mini-curso. Leia até o fim, pegue o mapa e decida se quer abrir a porta ou continuar do lado de fora.
            </p>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">🫵 Para quem é Sistema?</h3>
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
              <h3 className="font-bold text-lg mb-4">🕸️A Armadilha: Por Que Você Vai Travar Sem o Sistema de vendas?</h3>
              
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
                <li>1 Aula Cirúrgica para quebrar todas as pedras que ficaram no caminho.</li>
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
              <p>Investimento total: R$ 997,00</p>
              <p className="font-bold">Investimento hoje: R$ 147,00</p>
              <p className="mt-2">Quem entrar agora recebe exatamente o que futuramente será vendido mais caro — e ainda leva bônus no meio do caminho.</p>
            </div>
            
            <div className="my-8">
              <h3 className="font-bold text-lg mb-4">💎 Garanta seu acesso!</h3>
              <p>Metade do mapa já é seu.</p>
              <p>A porta continua trancada até você garantir seu acesso!</p>
            </div>
            
            {/* CTA BUTTON */}
            <div className="my-8">
              <Button 
                className="w-full h-14 text-lg font-semibold bg-landing-cta hover:bg-landing-cta/90 text-white rounded-md transition-colors"
                onClick={() => window.open('https://pay.hub.la/58gUhZ4eDfD8QtTZzgdk', '_blank')}
              >
                Quero fechar meu primeiro contrato
              </Button>
            </div>
            
            <p className="text-right">— Victor Castilho</p>
          </div>
        </section>
        
        {/* BLOCO DE VÍDEO (VSL) */}
        <section className="mb-16">
<div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
  <iframe
    src="https://www.youtube.com/embed/NNtA2ybXECo?rel=0&modestbranding=1"
    title="VSL – Primeiro Contrato"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>

          <p className="text-center font-bold">
            ▶ Clique para assistir à VSL e destravar seu primeiro contrato (5 min)
          </p>
        </section>
        
        {/* FAQ SECTION */}
        <section className="mb-16">
          <h2 className="text-center font-extrabold text-2xl sm:text-3xl mb-10">
            📌 FAQ – Respostas Diretas pra Fechar Sua Decisão
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "1. Não sei nada de automação. O que devo fazer?",
                answer: "Simples: no momento da compra você pode adicionar o meu curso extra de automação do zero, onde eu mesmo te ensino, passo a passo, a criar suas primeiras automações. Zero experiência? Zero problema."
              },
              {
                question: "2. Em quanto tempo vou fechar contrato?",
                answer: "Se aplicar o método como ensino, você tem tudo pra fechar em até 15 dias. Sem enrolação, direto ao cliente e ao contrato."
              },
              {
                question: "3. Esse valor de R$297 é todo mês?",
                answer: "Não! É uma vez só. Paga hoje e recebe o acesso"
              },
              {
                question: "4. E se eu não fechar contrato?",
                answer: "Se você aplicar exatamente o que ensino e não fechar, eu mesmo vou te orientar até destravar sua primeira venda. Aqui não tem aluno perdido."
              },
              {
                question: "5. Preciso largar meu trabalho pra fazer o curso?",
                answer: "De jeito nenhum. 35 min por dia é o suficiente pra seguir o passo a passo e já começar a faturar no paralelo."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:shadow-landing-cta/20 transition-all duration-300 hover:border-landing-cta/30">
                <details className="group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-gradient-to-r from-white to-gray-50 hover:from-landing-cta/5 hover:to-landing-cta/10 transition-all duration-300">
                    <h3 className="font-semibold text-foreground group-hover:text-landing-cta transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-landing-cta transform group-open:rotate-180 transition-transform duration-300 text-xl">
                      ▼
                    </span>
                  </summary>
                  <div className="p-4 pt-0 bg-white">
                    <p className="text-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* GAMIFIED TIMELINE SECTION */}
        <section className="mb-16">
          {/* Título */}
          <h2 className="text-center font-extrabold text-2xl sm:text-3xl mb-10">
            Plano de Ataque – 15 Dias até o PIX
          </h2>

          {/* Barra de Progresso */}
          <div className="w-full bg-gray-300 rounded-full h-2 mb-14 sticky top-4 z-20">
            <div 
              className="h-2 rounded-full bg-landing-cta transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* LISTA DE DIAS */}
          <ul className="space-y-8">
            {[
              {num:'01', titulo:'Boas-Vindas & Mentalidade de Vendas 🎯', desc:'Domine a cabeça do closer antes de qualquer script.'},
              {num:'02', titulo:'Escolha de Nicho + Compromisso Público 🧭', desc:'Selecione o alvo certo e anuncie pra não voltar atrás.'},
              {num:'03', titulo:'Lista-Builder: empresas do seu nicho em minutos 📂', desc:'Encontrando clientes qualificados do seu nicho.'},
              {num:'04', titulo:'Oferta Magnética validada ao vivo 💣', desc:'Crie a isca que faz o prospecto implorar pela call.'},
              {num:'05', titulo:'Scripts de Prospecção (e-mail, DM, VIP) ✉️', desc:'Copie e cole mensagens que pingam PIX.'},
              {num:'06', titulo:'Follow-Up que Vende (exemplos prontos) 🔁', desc:'Nunca mais perder lead no "vou pensar".'},
              {num:'07', titulo:'Aprimoramento & Correções de Rota 🔧', desc:'Refina oferta + lista antes de entrar em campo.'},
              {num:'08', titulo:'Aula Cirúrgica Q&A: todas as dúvidas resolvidas 🩺', desc:'Aula cirúrgica tirar qualquer pedra do caminho.'},
              {num:'09', titulo:'Diagnóstico Pré-Call (planilha + perguntas) 📝', desc:'Chegue na reunião sabendo onde dói – e quanto custa.'},
              {num:'10', titulo:'Call Matadora: adeus "vou pensar" ☎️', desc:'Técnicas de urgência ética pra fechar na hora.'},
              {num:'11', titulo:'Proposta Assassin\'s Creed (template + preço) 📜', desc:'Modelo de PDF FOMO pronto pra enviar.'},
              {num:'12', titulo:'Fechamento & Contrato Plug-and-Play 🤝', desc:'Roteiro + contrato pra selar o acordo sem dor de cabeça.'},
              {num:'13', titulo:'Alinhamento de Expectativas & Upsell 📈', desc:'Prepare terreno pra entrega e venda recorrente.'},
              {num:'14', titulo:'MVP que Dobra Conversão em 48h 🚀', desc:'Mini-projeto técnico pra mostrar valor em tempo recorde.'},
              {num:'15', titulo:'Live Final + Próximos Passos e Bônus 🎉', desc:'Roadmap pra escalar acima dos 5 contratos.'}
            ].map((aula, index) => (
              <li key={index} className="flex items-start">
                {/* Checkbox interativo */}
                <input 
                  type="checkbox" 
                  className="mt-1 mr-3 accent-landing-cta w-5 h-5"
                />
                {/* Badge Numérico */}
                <span className="w-9 h-9 flex items-center justify-center text-white bg-landing-cta rounded-full mr-4 font-bold">
                  {aula.num}
                </span>
                {/* Conteúdo */}
                <div>
                  <h3 className="font-semibold">{aula.titulo}</h3>
                  <p className="text-sm leading-relaxed">{aula.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        
        {/* SEGUNDA CHAMADA PARA AÇÃO */}
        <section className="mb-16">
          <Button 
            className="w-full h-14 text-lg font-semibold bg-landing-cta hover:bg-landing-cta/90 text-white rounded-md transition-colors"
            onClick={() => window.open('https://pay.hub.la/58gUhZ4eDfD8QtTZzgdk', '_blank')}
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