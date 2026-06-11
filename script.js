(function () {
  'use strict';

  /* ---------- Bloqueia zoom de pinça/duplo-toque (iOS ignora user-scalable) ---------- */
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (ev) {
    document.addEventListener(ev, function (e) { e.preventDefault(); }, { passive: false });
  });
  var lastTap = 0;
  document.addEventListener('touchend', function (e) {
    var now = Date.now();
    if (now - lastTap <= 300 && e.touches.length === 0) e.preventDefault(); // anti duplo-toque-zoom
    lastTap = now;
  }, { passive: false });

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Header shadow + scroll progress ---------- */
  var header = document.getElementById('top');
  var progress = document.getElementById('scrollProgress');
  var onScroll = function () {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    if (progress) {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    }
    handleSticky();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu offset (below sticky header) ---------- */
  function setNavOffset() {
    if (header) document.documentElement.style.setProperty('--nav-offset', header.getBoundingClientRect().bottom + 'px');
  }
  setNavOffset();
  window.addEventListener('resize', setNavOffset);

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          // small stagger for siblings
          e.target.style.transitionDelay = (Math.min(i, 4) * 60) + 'ms';
          e.target.classList.add('in');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Countdown ---------- */
  // Encerramento da campanha: 15/07/2026 23:59:59 (horário de Brasília -03:00)
  var DEADLINE = new Date('2026-07-15T23:59:59-03:00').getTime();
  var cdSpans = document.querySelectorAll('[data-cd]');
  var stickyCount = document.getElementById('stickyCount');

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function tick() {
    var diff = DEADLINE - Date.now();
    if (diff < 0) diff = 0;
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    var map = { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
    cdSpans.forEach(function (el) {
      var k = el.getAttribute('data-cd');
      if (map[k] !== undefined && el.textContent !== map[k]) el.textContent = map[k];
    });
    if (stickyCount) stickyCount.textContent = 'encerra em ' + d + 'd ' + pad(h) + 'h ' + pad(m) + 'm';
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Campaign progress (urgência) ---------- */
  var START = new Date('2026-06-12T00:00:00-03:00').getTime();
  var cpFill = document.getElementById('cpFill');
  var cpPct = document.getElementById('cpPct');
  if (cpFill) {
    var pct = Math.round(((Date.now() - START) / (DEADLINE - START)) * 100);
    pct = Math.max(2, Math.min(100, pct));
    var paint = function () {
      cpFill.style.width = pct + '%';
      if (cpPct) cpPct.textContent = pct + '% concluída';
    };
    if ('IntersectionObserver' in window) {
      var po = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { paint(); po.unobserve(e.target); } });
      }, { threshold: 0.4 });
      po.observe(cpFill);
    } else { paint(); }
  }

  /* ---------- Sticky mobile CTA ---------- */
  var sticky = document.getElementById('stickyCta');
  function handleSticky() {
    if (!sticky) return;
    var show = window.scrollY > 600;
    // hide when the final CTA is in view to avoid overlap
    var cta = document.getElementById('cta');
    if (cta) {
      var r = cta.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) show = false;
    }
    sticky.classList.toggle('show', show);
  }
  handleSticky();

  /* ---------- Live "winner" toasts (prova social) ---------- */
  var toast = document.getElementById('toast');
  if (toast) {
    var people = [
      ['Rafael', 'Almeida', 'São Paulo, SP'],
      ['Juliana', 'Santos', 'Rio de Janeiro, RJ'],
      ['Pedro', 'Henrique', 'Belo Horizonte, MG'],
      ['Mariana', 'Costa', 'Curitiba, PR'],
      ['Lucas', 'Oliveira', 'Porto Alegre, RS'],
      ['Fernanda', 'Teixeira', 'Salvador, BA'],
      ['Bruno', 'Carvalho', 'Fortaleza, CE'],
      ['Camila', 'Rocha', 'Recife, PE'],
      ['Diego', 'Martins', 'Brasília, DF'],
      ['Patrícia', 'Lima', 'Campinas, SP'],
      ['Thiago', 'Fernandes', 'Goiânia, GO'],
      ['Amanda', 'Ribeiro', 'Florianópolis, SC']
    ];
    var actions = [
      'realizou um depósito e está participando da Copa 100K',
      'acumulou novos tickets operando na plataforma',
      'ativou o programa VIP e dobrou as chances',
      'garantiu a participação nos próximos sorteios',
      'fez um depósito via PIX em poucos segundos',
      'entrou na disputa pelos R$ 100 mil em prêmios'
    ];
    var avColors = [
      'linear-gradient(150deg,#2389e6,#0f4f96)',
      'linear-gradient(150deg,#1aa179,#0c6f4f)',
      'linear-gradient(150deg,#c98a2b,#8a5b14)',
      'linear-gradient(150deg,#6b59d6,#3d2f8f)',
      'linear-gradient(150deg,#c44a6b,#82243d)'
    ];
    var times = ['há 1 minuto', 'há 3 minutos', 'há 5 minutos', 'há 8 minutos', 'há 12 minutos', 'há 16 minutos'];
    var i = 0;

    function esc(s){ return s.replace(/[&<>]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]; }); }

    function renderToast() {
      var p = people[(i * 5) % people.length];
      var act = actions[(i * 7) % actions.length];
      var col = avColors[(i * 3) % avColors.length];
      var t = times[(i * 11) % times.length];
      i++;
      var initials = (p[0][0] + p[1][0]).toUpperCase();
      var name = p[0] + ' ' + p[1][0] + '.';
      toast.innerHTML =
        '<div class="toast-inner">' +
          '<div class="toast-av" style="background:' + col + '">' + initials +
            '<span class="vbadge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-11"/></svg></span>' +
          '</div>' +
          '<div class="toast-body">' +
            '<div class="toast-name">' + esc(name) + '</div>' +
            '<div class="toast-action">' + esc(act) + '</div>' +
            '<div class="toast-meta"><span class="live"><i></i>Verificado</span><span class="sep">·</span>' + t + '<span class="sep">·</span>' + esc(p[2]) + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="toast-progress"></div>';
      toast.classList.add('show');
      setTimeout(function () { toast.classList.remove('show'); }, 4800);
    }

    // primeiro após 7s; intervalo levemente variável (mais natural)
    setTimeout(function () {
      renderToast();
      setInterval(renderToast, 13000);
    }, 7000);
  }

  /* ---------- Respect reduced motion ---------- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Floating particles (hero) ---------- */
  var pField = document.getElementById('particles');
  if (pField && !reduce) {
    var count = window.innerWidth < 700 ? 18 : 34;
    var colors = ['', 'c-green', 'c-white', 'c-blue', '', '']; // dourado domina
    var shapes = ['sq', 'dot', 'bar', 'sq', 'dot'];
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var p = document.createElement('span');
      p.className = 'particle ' + shapes[i % shapes.length] + ' ' + colors[(i * 5) % colors.length];
      var left = (i * 29 + (i % 3) * 7) % 100;            // espalha pela largura
      var dur = 8 + ((i * 13) % 11);                      // 8-18s
      var delay = -((i * 17) % 18);                       // negativo = já em curso
      p.style.left = left + '%';
      p.style.animationDuration = dur + 's';
      p.style.animationDelay = delay + 's';
      if (!p.classList.contains('bar')) {                 // 'bar' mantém proporção de fita
        var s = 5 + ((i * 7) % 5);
        p.style.width = p.style.height = s + 'px';
      }
      frag.appendChild(p);
    }
    pField.appendChild(frag);
  }

  /* ---------- Hero: taça cresce ao descer o scroll (suavizado) ---------- */
  var heroScroll = document.getElementById('heroScroll');
  if (heroScroll && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    var targetP = 0, curP = 0, hsRaf = null;
    function computeTarget() {
      var rect = heroScroll.getBoundingClientRect();
      var total = heroScroll.offsetHeight - window.innerHeight;
      targetP = total > 0 ? Math.max(0, Math.min(1, (-rect.top) / total)) : 0;
      if (hsRaf === null) hsLoop();
    }
    function hsLoop() {
      // interpolação (lerp) -> movimento fluido e leve
      curP += (targetP - curP) * 0.12;
      if (Math.abs(targetP - curP) < 0.0008) curP = targetP;
      heroScroll.style.setProperty('--p', curP.toFixed(4));
      if (curP !== targetP) { hsRaf = requestAnimationFrame(hsLoop); }
      else { hsRaf = null; }
    }
    window.addEventListener('scroll', computeTarget, { passive: true });
    window.addEventListener('resize', computeTarget);
    computeTarget();
  }

  /* ---------- Confete do clímax do hero ---------- */
  var confettiField = document.getElementById('heroConfetti');
  if (confettiField && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    var cCount = window.innerWidth < 700 ? 22 : 40;
    var cColors = ['', 'c-green', 'c-white', 'c-amber', '', ''];
    var cShapes = ['', 'r', 'bar', 'r', ''];
    var cFrag = document.createDocumentFragment();
    for (var ci = 0; ci < cCount; ci++) {
      var c = document.createElement('span');
      c.className = ('confetti ' + cShapes[ci % cShapes.length] + ' ' + cColors[(ci * 5) % cColors.length]).trim();
      c.style.left = ((ci * 23 + (ci % 4) * 6) % 100) + '%';
      c.style.animationDuration = (3.5 + ((ci * 7) % 30) / 10) + 's';   // 3.5-6.5s
      c.style.animationDelay = (-((ci * 13) % 50) / 10) + 's';
      cFrag.appendChild(c);
    }
    confettiField.appendChild(cFrag);
  }

  /* ---------- Ticket modal (todos os CTAs abrem o modal) ---------- */
  var modal = document.getElementById('ticketModal');
  if (modal) {
    var lastFocus = null;
    function openModal(e) {
      if (e) e.preventDefault();
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      var cta = modal.querySelector('.modal-cta');
      if (cta) cta.focus();
    }
    function closeModal() {
      modal.classList.add('closing');
      setTimeout(function () {
        modal.hidden = true;
        modal.classList.remove('closing');
        document.body.style.overflow = '';
        if (lastFocus) lastFocus.focus();
      }, 240);
    }
    // qualquer CTA marcado com data-ticket abre o modal
    document.querySelectorAll('[data-ticket]').forEach(function (el) {
      el.addEventListener('click', openModal);
    });
    modal.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
  }

  /* ---------- Trophy parallax (pointer + scroll) ---------- */
  var trophy = document.querySelector('.trophy');
  var heroArt = document.querySelector('.hero-art');
  if (trophy && heroArt && !reduce && window.matchMedia('(pointer:fine)').matches) {
    heroArt.addEventListener('pointermove', function (e) {
      var r = heroArt.getBoundingClientRect();
      var dx = (e.clientX - r.left - r.width / 2) / r.width;
      var dy = (e.clientY - r.top - r.height / 2) / r.height;
      trophy.style.transform = 'translate(' + (dx * 16) + 'px,' + (dy * 16) + 'px) rotateX(' + (-dy * 8) + 'deg) rotateY(' + (dx * 10) + 'deg)';
    });
    heroArt.addEventListener('pointerleave', function () {
      trophy.style.transform = '';
    });
  }
})();
