/* ============================================================
   i18n — tradução completa PT / ES / EN / FR
   Cada elemento traduzível tem data-i18n="chave".
   Idioma é detectado pelo navegador, salvo em localStorage e
   trocável pelo seletor no topo.
   ============================================================ */
(function () {
  'use strict';

  const I18N = {
    pt: {
      'nav.how': `Como participar`, 'nav.prizes': `Prêmios`, 'nav.ranking': `Ranking`, 'nav.faq': `Dúvidas`, 'nav.cta': `Participar`,
      'announce.ends': `encerra em`,
      'hero.badge': `A seleção dos melhores traders`,
      'hero.lead': `Concorra a <strong>R$ 100 mil</strong> em prêmios e aproveite a Copa do Mundo como um verdadeiro campeão.`,
      'hero.cta': `Pegue seu ticket`,
      'hero.min': `Depósito mínimo: <strong>$20</strong>`,
      'hero.cue': `role para ver a taça`,
      'hero.capk': `A taça está em jogo`,
      'hero.capt': `<span class="text-gold">R$ 100 mil</span><br>esperando por você`,
      'trust.fast': `Saque rápido`, 'trust.secure': `Ambiente seguro`, 'trust.support': `Suporte 24/7`, 'trust.assets': `Forex, Cripto e Ações`,
      'stats.prizes': `em prêmios`, 'stats.winners': `ganhadores`, 'stats.draws': `sorteios ao vivo`, 'stats.minticket': `ticket mínimo`,
      'how.kicker': `Simples e rápido`, 'how.title': `Como participar`,
      'step1.t': `Deposite`, 'step1.d': `A cada <strong>$20</strong> depositados, <strong>1 ticket</strong>. O saldo continua seu para operar.`,
      'step2.t': `Opere`, 'step2.d': `A cada <strong>$5</strong> operados, mais <strong>1 ticket</strong>. Os dois somam e multiplicam suas chances.`,
      'step3.t': `Concorra`, 'step3.d': `<strong>3 sorteios</strong> ao vivo, <strong>30 ganhadores</strong> no total. É só acompanhar.`,
      'prizes.kicker': `Calendário oficial`, 'prizes.title': `R$ 100 mil em 3 sorteios`,
      'draw1.r': `1º Sorteio`, 'draw2.r': `2º Sorteio`, 'draw3.r': `3º Sorteio`, 'draw.flag': `Maior premiação`,
      'winners5': `5 ganhadores`, 'winners10': `10 ganhadores`, 'prizes.cta': `Quero meu lugar`,
      'rank.kicker': `Tempo real`, 'rank.title': `Ranking de participantes`, 'rank.sub': `Veja quem está liderando a disputa pela taça. Atualizado automaticamente.`, 'rank.loading': `Carregando ranking…`,
      'vip.kicker': `Programa VIP`, 'vip.title': `2× mais chances de ganhar`, 'vip.text': `Deposite <strong>$1.000</strong> ou mais e cada ticket passa a valer por dois.`, 'vip.badge': `tickets`, 'vip.cta': `Desbloquear VIP`,
      'faq.kicker': `Sem letra miúda`, 'faq.title': `Dúvidas frequentes`,
      'faq.q1': `Como ganho tickets?`, 'faq.a1': `De duas formas que se somam: <b>$20 depositados</b> = 1 ticket e <b>$5 operados</b> = 1 ticket.`,
      'faq.q2': `O depósito fica preso?`, 'faq.a2': `Não. O saldo é <b>100% seu</b> para operar. Os tickets são um bônus por usar a plataforma.`,
      'faq.q3': `Quando são os sorteios?`, 'faq.a3': `Ao vivo em <b>27/06</b>, <b>11/07</b> e <b>15/07</b>, no Trading Club. A campanha vai de 12/06 a 15/07.`,
      'faq.q4': `Posso depositar via PIX?`, 'faq.a4': `Sim, com valor mínimo baixo e saque processado rapidamente.`,
      'cta.title': `Não fique <span class="text-gold">na reserva</span>`,
      'cta.text': `Inscrições até <strong>15/07</strong>. Deposite, opere e dispute os <b class="text-gold">R$ 100 mil</b>.`,
      'cta.prog': `Campanha em andamento`, 'cd.days': `dias`, 'cd.hours': `horas`, 'cd.min': `min`, 'cd.sec': `seg`,
      'cta.btn': `Quero meu título`, 'cta.note': `$20 depositados ou $5 operados = 1 ticket · Sujeito aos termos da promoção.`,
      'footer.desc': `Corretora profissional de trading — Forex, Cripto e Ações. Suporte 24/7 em português.`,
      'footer.terms': `Termos`, 'footer.privacy': `Privacidade`, 'footer.withdrawal': `Política de Saque`,
      'footer.disclaimer': `Operar Forex, Cripto e Ações envolve risco de perda de capital. A Safirion não garante resultados. Campanha válida de 12/06 a 15/07/2026.`,
      'footer.copyright': `© 2026 Safirion. Todos os direitos reservados.`,
      'sticky.cta': `Participar`,
      'modal.title': `Falta pouco para o seu ticket! 🎟️`,
      'modal.text': `Faça um depósito a partir de <strong>$20</strong> e receba <strong>1 ticket</strong> na hora para concorrer aos <b class="text-gold">R$ 100 mil</b>. Cada $5 operados valem mais 1 ticket.`,
      'modal.cta': `Depositar e receber meu ticket`, 'modal.note': `Sem burocracia · Depósito via PIX · Seu saldo continua seu`,
      'ticket.tag': `SEU TICKET`, 'ticket.sub': `a cada $20 depositados`,
      'toast.verified': `Verificado`,
      'rank.noteAuto': `Atualizado automaticamente a partir da planilha.`, 'rank.noteDemo': `Dados de exemplo — conecte sua planilha no arquivo ranking.js.`,
      'rank.empty': `Nenhum participante ainda.`, 'rank.tickets': `tickets`, 'rank.ticket1': `ticket`,
      toastActions: [`realizou um depósito e está participando da Copa 100K`, `acumulou novos tickets operando na plataforma`, `ativou o programa VIP e dobrou as chances`, `garantiu a participação nos próximos sorteios`, `fez um depósito via PIX em poucos segundos`, `entrou na disputa pelos R$ 100 mil em prêmios`],
      toastTimes: [`há 1 minuto`, `há 3 minutos`, `há 5 minutos`, `há 8 minutos`, `há 12 minutos`, `há 16 minutos`]
    },
    es: {
      'nav.how': `Cómo participar`, 'nav.prizes': `Premios`, 'nav.ranking': `Ranking`, 'nav.faq': `Preguntas`, 'nav.cta': `Participar`,
      'announce.ends': `termina en`,
      'hero.badge': `La selección de los mejores traders`,
      'hero.lead': `Compite por <strong>R$ 100 mil</strong> en premios y vive el Mundial como un verdadero campeón.`,
      'hero.cta': `Consigue tu ticket`,
      'hero.min': `Depósito mínimo: <strong>$20</strong>`,
      'hero.cue': `desliza para ver la copa`,
      'hero.capk': `La copa está en juego`,
      'hero.capt': `<span class="text-gold">R$ 100 mil</span><br>te están esperando`,
      'trust.fast': `Retiro rápido`, 'trust.secure': `Entorno seguro`, 'trust.support': `Soporte 24/7`, 'trust.assets': `Forex, Cripto y Acciones`,
      'stats.prizes': `en premios`, 'stats.winners': `ganadores`, 'stats.draws': `sorteos en vivo`, 'stats.minticket': `ticket mínimo`,
      'how.kicker': `Simple y rápido`, 'how.title': `Cómo participar`,
      'step1.t': `Deposita`, 'step1.d': `Por cada <strong>$20</strong> depositados, <strong>1 ticket</strong>. El saldo sigue siendo tuyo para operar.`,
      'step2.t': `Opera`, 'step2.d': `Por cada <strong>$5</strong> operados, <strong>1 ticket</strong> más. Ambos se suman y multiplican tus chances.`,
      'step3.t': `Concursa`, 'step3.d': `<strong>3 sorteos</strong> en vivo, <strong>30 ganadores</strong> en total. Solo sigue la transmisión.`,
      'prizes.kicker': `Calendario oficial`, 'prizes.title': `R$ 100 mil en 3 sorteos`,
      'draw1.r': `1er Sorteo`, 'draw2.r': `2º Sorteo`, 'draw3.r': `3er Sorteo`, 'draw.flag': `Mayor premio`,
      'winners5': `5 ganadores`, 'winners10': `10 ganadores`, 'prizes.cta': `Quiero mi lugar`,
      'rank.kicker': `Tiempo real`, 'rank.title': `Ranking de participantes`, 'rank.sub': `Mira quién lidera la disputa por la copa. Se actualiza automáticamente.`, 'rank.loading': `Cargando ranking…`,
      'vip.kicker': `Programa VIP`, 'vip.title': `2× más chances de ganar`, 'vip.text': `Deposita <strong>$1.000</strong> o más y cada ticket vale por dos.`, 'vip.badge': `tickets`, 'vip.cta': `Desbloquear VIP`,
      'faq.kicker': `Sin letra pequeña`, 'faq.title': `Preguntas frecuentes`,
      'faq.q1': `¿Cómo gano tickets?`, 'faq.a1': `De dos formas que se suman: <b>$20 depositados</b> = 1 ticket y <b>$5 operados</b> = 1 ticket.`,
      'faq.q2': `¿El depósito queda bloqueado?`, 'faq.a2': `No. El saldo es <b>100% tuyo</b> para operar. Los tickets son un bono por usar la plataforma.`,
      'faq.q3': `¿Cuándo son los sorteos?`, 'faq.a3': `En vivo el <b>27/06</b>, <b>11/07</b> y <b>15/07</b>, en el Trading Club. La campaña va del 12/06 al 15/07.`,
      'faq.q4': `¿Puedo depositar por PIX?`, 'faq.a4': `Sí, con un mínimo bajo y retiro procesado rápidamente.`,
      'cta.title': `No te quedes <span class="text-gold">en la banca</span>`,
      'cta.text': `Inscripciones hasta el <strong>15/07</strong>. Deposita, opera y compite por los <b class="text-gold">R$ 100 mil</b>.`,
      'cta.prog': `Campaña en curso`, 'cd.days': `días`, 'cd.hours': `horas`, 'cd.min': `min`, 'cd.sec': `seg`,
      'cta.btn': `Quiero mi título`, 'cta.note': `$20 depositados o $5 operados = 1 ticket · Sujeto a los términos de la promoción.`,
      'footer.desc': `Bróker profesional de trading — Forex, Cripto y Acciones. Soporte 24/7 en español.`,
      'footer.terms': `Términos`, 'footer.privacy': `Privacidad`, 'footer.withdrawal': `Política de Retiro`,
      'footer.disclaimer': `Operar Forex, Cripto y Acciones implica riesgo de pérdida de capital. Safirion no garantiza resultados. Campaña válida del 12/06 al 15/07/2026.`,
      'footer.copyright': `© 2026 Safirion. Todos los derechos reservados.`,
      'sticky.cta': `Participar`,
      'modal.title': `¡Tu ticket está a un paso! 🎟️`,
      'modal.text': `Haz un depósito desde <strong>$20</strong> y recibe <strong>1 ticket</strong> al instante para competir por los <b class="text-gold">R$ 100 mil</b>. Cada $5 operados suman 1 ticket más.`,
      'modal.cta': `Depositar y recibir mi ticket`, 'modal.note': `Sin burocracia · Depósito por PIX · Tu saldo sigue siendo tuyo`,
      'ticket.tag': `TU TICKET`, 'ticket.sub': `por cada $20 depositados`,
      'toast.verified': `Verificado`,
      'rank.noteAuto': `Actualizado automáticamente desde la planilla.`, 'rank.noteDemo': `Datos de ejemplo — conecta tu planilla en el archivo ranking.js.`,
      'rank.empty': `Aún no hay participantes.`, 'rank.tickets': `tickets`, 'rank.ticket1': `ticket`,
      toastActions: [`hizo un depósito y está participando en la Copa 100K`, `acumuló nuevos tickets operando en la plataforma`, `activó el programa VIP y duplicó sus chances`, `aseguró su participación en los próximos sorteos`, `hizo un depósito por PIX en pocos segundos`, `entró en la disputa por los R$ 100 mil en premios`],
      toastTimes: [`hace 1 minuto`, `hace 3 minutos`, `hace 5 minutos`, `hace 8 minutos`, `hace 12 minutos`, `hace 16 minutos`]
    },
    en: {
      'nav.how': `How it works`, 'nav.prizes': `Prizes`, 'nav.ranking': `Leaderboard`, 'nav.faq': `FAQ`, 'nav.cta': `Join now`,
      'announce.ends': `ends in`,
      'hero.badge': `The best traders' lineup`,
      'hero.lead': `Compete for <strong>R$ 100k</strong> in prizes and enjoy the World Cup like a true champion.`,
      'hero.cta': `Get your ticket`,
      'hero.min': `Minimum deposit: <strong>$20</strong>`,
      'hero.cue': `scroll to see the trophy`,
      'hero.capk': `The trophy is up for grabs`,
      'hero.capt': `<span class="text-gold">R$ 100k</span><br>waiting for you`,
      'trust.fast': `Fast withdrawal`, 'trust.secure': `Secure platform`, 'trust.support': `24/7 support`, 'trust.assets': `Forex, Crypto & Stocks`,
      'stats.prizes': `in prizes`, 'stats.winners': `winners`, 'stats.draws': `live draws`, 'stats.minticket': `minimum ticket`,
      'how.kicker': `Simple and fast`, 'how.title': `How to take part`,
      'step1.t': `Deposit`, 'step1.d': `Every <strong>$20</strong> deposited = <strong>1 ticket</strong>. Your balance stays yours to trade.`,
      'step2.t': `Trade`, 'step2.d': `Every <strong>$5</strong> traded = <strong>1 more ticket</strong>. Both add up and multiply your chances.`,
      'step3.t': `Compete`, 'step3.d': `<strong>3 live draws</strong>, <strong>30 winners</strong> in total. Just tune in.`,
      'prizes.kicker': `Official schedule`, 'prizes.title': `R$ 100k across 3 draws`,
      'draw1.r': `1st Draw`, 'draw2.r': `2nd Draw`, 'draw3.r': `3rd Draw`, 'draw.flag': `Biggest prize`,
      'winners5': `5 winners`, 'winners10': `10 winners`, 'prizes.cta': `Claim my spot`,
      'rank.kicker': `Live`, 'rank.title': `Participants leaderboard`, 'rank.sub': `See who's leading the race for the trophy. Updates automatically.`, 'rank.loading': `Loading leaderboard…`,
      'vip.kicker': `VIP Program`, 'vip.title': `2× more chances to win`, 'vip.text': `Deposit <strong>$1,000</strong> or more and each ticket counts double.`, 'vip.badge': `tickets`, 'vip.cta': `Unlock VIP`,
      'faq.kicker': `No fine print`, 'faq.title': `Frequently asked questions`,
      'faq.q1': `How do I earn tickets?`, 'faq.a1': `Two ways that add up: <b>$20 deposited</b> = 1 ticket and <b>$5 traded</b> = 1 ticket.`,
      'faq.q2': `Is my deposit locked?`, 'faq.a2': `No. Your balance is <b>100% yours</b> to trade. Tickets are a bonus for using the platform.`,
      'faq.q3': `When are the draws?`, 'faq.a3': `Live on <b>27/06</b>, <b>11/07</b> and <b>15/07</b>, in the Trading Club. The campaign runs from 12/06 to 15/07.`,
      'faq.q4': `Can I deposit via PIX?`, 'faq.a4': `Yes, with a low minimum and fast withdrawals.`,
      'cta.title': `Don't stay <span class="text-gold">on the bench</span>`,
      'cta.text': `Entries until <strong>15/07</strong>. Deposit, trade and compete for the <b class="text-gold">R$ 100k</b>.`,
      'cta.prog': `Campaign in progress`, 'cd.days': `days`, 'cd.hours': `hours`, 'cd.min': `min`, 'cd.sec': `sec`,
      'cta.btn': `I want the title`, 'cta.note': `$20 deposited or $5 traded = 1 ticket · Subject to the promotion terms.`,
      'footer.desc': `Professional trading broker — Forex, Crypto & Stocks. 24/7 support in English.`,
      'footer.terms': `Terms`, 'footer.privacy': `Privacy`, 'footer.withdrawal': `Withdrawal Policy`,
      'footer.disclaimer': `Trading Forex, Crypto & Stocks involves risk of capital loss. Safirion does not guarantee results. Campaign valid from 12/06 to 15/07/2026.`,
      'footer.copyright': `© 2026 Safirion. All rights reserved.`,
      'sticky.cta': `Join`,
      'modal.title': `Your ticket is almost here! 🎟️`,
      'modal.text': `Deposit from <strong>$20</strong> and get <strong>1 ticket</strong> instantly to compete for the <b class="text-gold">R$ 100k</b>. Every $5 traded adds 1 more ticket.`,
      'modal.cta': `Deposit and get my ticket`, 'modal.note': `No red tape · Deposit via PIX · Your balance stays yours`,
      'ticket.tag': `YOUR TICKET`, 'ticket.sub': `every $20 deposited`,
      'toast.verified': `Verified`,
      'rank.noteAuto': `Updated automatically from the spreadsheet.`, 'rank.noteDemo': `Sample data — connect your spreadsheet in the ranking.js file.`,
      'rank.empty': `No participants yet.`, 'rank.tickets': `tickets`, 'rank.ticket1': `ticket`,
      toastActions: [`made a deposit and joined the Copa 100K`, `earned new tickets trading on the platform`, `activated the VIP program and doubled the odds`, `secured a spot in the upcoming draws`, `deposited via PIX in just seconds`, `entered the race for R$ 100k in prizes`],
      toastTimes: [`1 minute ago`, `3 minutes ago`, `5 minutes ago`, `8 minutes ago`, `12 minutes ago`, `16 minutes ago`]
    },
    fr: {
      'nav.how': `Comment participer`, 'nav.prizes': `Prix`, 'nav.ranking': `Classement`, 'nav.faq': `FAQ`, 'nav.cta': `Participer`,
      'announce.ends': `se termine dans`,
      'hero.badge': `La sélection des meilleurs traders`,
      'hero.lead': `Jouez pour <strong>100 000 R$</strong> de prix et vivez la Coupe du Monde en vrai champion.`,
      'hero.cta': `Obtenez votre ticket`,
      'hero.min': `Dépôt minimum : <strong>$20</strong>`,
      'hero.cue': `faites défiler pour voir le trophée`,
      'hero.capk': `Le trophée est en jeu`,
      'hero.capt': `<span class="text-gold">100 000 R$</span><br>vous attendent`,
      'trust.fast': `Retrait rapide`, 'trust.secure': `Environnement sécurisé`, 'trust.support': `Support 24/7`, 'trust.assets': `Forex, Crypto et Actions`,
      'stats.prizes': `en prix`, 'stats.winners': `gagnants`, 'stats.draws': `tirages en direct`, 'stats.minticket': `ticket minimum`,
      'how.kicker': `Simple et rapide`, 'how.title': `Comment participer`,
      'step1.t': `Déposez`, 'step1.d': `Chaque <strong>$20</strong> déposés = <strong>1 ticket</strong>. Votre solde reste à vous pour trader.`,
      'step2.t': `Tradez`, 'step2.d': `Chaque <strong>$5</strong> tradés = <strong>1 ticket</strong> de plus. Les deux s'additionnent et multiplient vos chances.`,
      'step3.t': `Concourez`, 'step3.d': `<strong>3 tirages</strong> en direct, <strong>30 gagnants</strong> au total. Il suffit de suivre.`,
      'prizes.kicker': `Calendrier officiel`, 'prizes.title': `100 000 R$ en 3 tirages`,
      'draw1.r': `1er Tirage`, 'draw2.r': `2e Tirage`, 'draw3.r': `3e Tirage`, 'draw.flag': `Plus gros prix`,
      'winners5': `5 gagnants`, 'winners10': `10 gagnants`, 'prizes.cta': `Je veux ma place`,
      'rank.kicker': `Temps réel`, 'rank.title': `Classement des participants`, 'rank.sub': `Découvrez qui mène la course au trophée. Mise à jour automatique.`, 'rank.loading': `Chargement du classement…`,
      'vip.kicker': `Programme VIP`, 'vip.title': `2× plus de chances de gagner`, 'vip.text': `Déposez <strong>$1 000</strong> ou plus et chaque ticket compte double.`, 'vip.badge': `tickets`, 'vip.cta': `Débloquer VIP`,
      'faq.kicker': `Sans petits caractères`, 'faq.title': `Questions fréquentes`,
      'faq.q1': `Comment gagner des tickets ?`, 'faq.a1': `Deux façons qui s'additionnent : <b>$20 déposés</b> = 1 ticket et <b>$5 tradés</b> = 1 ticket.`,
      'faq.q2': `Le dépôt est-il bloqué ?`, 'faq.a2': `Non. Votre solde est <b>100% à vous</b> pour trader. Les tickets sont un bonus.`,
      'faq.q3': `Quand ont lieu les tirages ?`, 'faq.a3': `En direct les <b>27/06</b>, <b>11/07</b> et <b>15/07</b>, au Trading Club. La campagne va du 12/06 au 15/07.`,
      'faq.q4': `Puis-je déposer via PIX ?`, 'faq.a4': `Oui, avec un minimum bas et des retraits rapides.`,
      'cta.title': `Ne restez pas <span class="text-gold">sur le banc</span>`,
      'cta.text': `Inscriptions jusqu'au <strong>15/07</strong>. Déposez, tradez et jouez pour les <b class="text-gold">100 000 R$</b>.`,
      'cta.prog': `Campagne en cours`, 'cd.days': `jours`, 'cd.hours': `heures`, 'cd.min': `min`, 'cd.sec': `sec`,
      'cta.btn': `Je veux le titre`, 'cta.note': `$20 déposés ou $5 tradés = 1 ticket · Soumis aux conditions de la promotion.`,
      'footer.desc': `Courtier de trading professionnel — Forex, Crypto et Actions. Support 24/7 en français.`,
      'footer.terms': `Conditions`, 'footer.privacy': `Confidentialité`, 'footer.withdrawal': `Politique de retrait`,
      'footer.disclaimer': `Trader le Forex, la Crypto et les Actions comporte un risque de perte en capital. Safirion ne garantit aucun résultat. Campagne valable du 12/06 au 15/07/2026.`,
      'footer.copyright': `© 2026 Safirion. Tous droits réservés.`,
      'sticky.cta': `Participer`,
      'modal.title': `Votre ticket est tout proche ! 🎟️`,
      'modal.text': `Déposez à partir de <strong>$20</strong> et recevez <strong>1 ticket</strong> immédiatement pour jouer les <b class="text-gold">100 000 R$</b>. Chaque $5 tradés = 1 ticket de plus.`,
      'modal.cta': `Déposer et obtenir mon ticket`, 'modal.note': `Sans paperasse · Dépôt via PIX · Votre solde reste à vous`,
      'ticket.tag': `VOTRE TICKET`, 'ticket.sub': `tous les $20 déposés`,
      'toast.verified': `Vérifié`,
      'rank.noteAuto': `Mis à jour automatiquement depuis le tableur.`, 'rank.noteDemo': `Données d'exemple — connectez votre tableur dans le fichier ranking.js.`,
      'rank.empty': `Pas encore de participants.`, 'rank.tickets': `tickets`, 'rank.ticket1': `ticket`,
      toastActions: [`a fait un dépôt et participe à la Copa 100K`, `a accumulé de nouveaux tickets en tradant`, `a activé le programme VIP et doublé ses chances`, `a assuré sa place aux prochains tirages`, `a déposé via PIX en quelques secondes`, `est entré dans la course aux 100 000 R$ de prix`],
      toastTimes: [`il y a 1 minute`, `il y a 3 minutes`, `il y a 5 minutes`, `il y a 8 minutes`, `il y a 12 minutes`, `il y a 16 minutes`]
    }
  };

  const SUPPORTED = ['pt', 'es', 'en', 'fr'];
  const NAMES = { pt: 'Português', es: 'Español', en: 'English', fr: 'Français' };

  function detect() {
    // Respeita a escolha salva pelo usuário; caso contrário, padrão é português.
    try { var s = localStorage.getItem('lang'); if (s && SUPPORTED.indexOf(s) >= 0) return s; } catch (e) {}
    return 'pt';
  }

  var lang = detect();
  window.I18N = I18N;
  window.getLang = function () { return lang; };
  window.t = function (k) { var d = I18N[lang] || I18N.pt; return d[k] != null ? d[k] : (I18N.pt[k] || ''); };

  function apply(l) {
    if (SUPPORTED.indexOf(l) < 0) l = 'pt';
    lang = l;
    var dict = I18N[l] || I18N.pt;
    document.documentElement.lang = (l === 'pt') ? 'pt-BR' : l;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    var cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = l.toUpperCase();
    document.querySelectorAll('#langMenu [data-lang]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === l);
    });
    try { localStorage.setItem('lang', l); } catch (e) {}
    window.dispatchEvent(new Event('langchange'));
  }
  window.setLang = apply;

  function init() {
    apply(lang);
    var wrap = document.getElementById('langSwitch');
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    if (wrap && btn && menu) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = wrap.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      menu.querySelectorAll('[data-lang]').forEach(function (b) {
        b.addEventListener('click', function () {
          apply(b.getAttribute('data-lang'));
          wrap.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', function () { wrap.classList.remove('open'); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
