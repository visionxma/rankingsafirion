/* ============================================================
   RANKING via Google Sheets
   ------------------------------------------------------------
   COMO CONECTAR SUA PLANILHA:
   1) No Google Sheets, monte as colunas (a 1ª linha são os títulos):
        Nome | Tickets | Cidade
        João Pedro S. | 182 | São Paulo, SP
        ...
   2) Arquivo > Compartilhar > Publicar na web
   3) Em "Vincular", escolha a aba e o formato "Valores separados por
      vírgula (.csv)" e clique em Publicar.
   4) Copie o link gerado e cole abaixo em CSV_URL.
   (a coluna de pontuação pode se chamar Tickets, Pontos ou Pontuação)
   ============================================================ */
const RANKING_CONFIG = {
  CSV_URL: "",          // <-- cole aqui o link CSV publicado da planilha
  TOP_N: 5,             // quantas posições mostrar
  REFRESH_MS: 60000     // atualiza a cada 60s (0 = não atualizar)
};

(function () {
  'use strict';

  const listEl = document.getElementById('rankList');
  const podiumEl = document.getElementById('rankPodium');
  const noteEl = document.getElementById('rankNote');
  if (!listEl || !podiumEl) return;

  // dados de exemplo: saldos baixos (campanha recém-começada) e nomes naturais
  const DEMO = [
    { name: 'João P.', tickets: 9, city: 'São Paulo, SP' },
    { name: 'Marina', tickets: 7, city: 'Curitiba, PR' },
    { name: 'Léo Andrade', tickets: 6, city: 'Rio de Janeiro, RJ' },
    { name: 'Bia R.', tickets: 5, city: 'Recife, PE' },
    { name: 'Carlos M.', tickets: 4, city: 'Fortaleza, CE' }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  function initials(name) {
    const p = name.trim().split(/\s+/);
    return ((p[0] ? p[0][0] : '') + (p[1] ? p[1][0] : '')).toUpperCase();
  }
  function fmt(n) { return Number(n).toLocaleString('pt-BR'); }

  /* ---------- CSV parser (lida com aspas e vírgulas) ---------- */
  function parseCSV(text) {
    const rows = [];
    let row = [], field = '', inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else inQuotes = false;
        } else field += c;
      } else {
        if (c === '"') inQuotes = true;
        else if (c === ',') { row.push(field); field = ''; }
        else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
        else if (c === '\r') { /* ignora */ }
        else field += c;
      }
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  function rowsToData(rows) {
    if (!rows.length) return [];
    const header = rows[0].map(h => h.trim().toLowerCase());
    const nameIdx = header.findIndex(h => /nome|name|participante|trader/.test(h));
    const ptsIdx = header.findIndex(h => /ticket|ponto|pontua|score|pts/.test(h));
    const cityIdx = header.findIndex(h => /cidade|city|local|estado/.test(h));
    const out = [];
    for (let i = 1; i < rows.length; i++) {
      const r = rows[i];
      const name = (r[nameIdx >= 0 ? nameIdx : 0] || '').trim();
      if (!name) continue;
      const raw = (r[ptsIdx >= 0 ? ptsIdx : 1] || '0').replace(/[^\d.-]/g, '');
      out.push({
        name: name,
        tickets: parseInt(raw, 10) || 0,
        city: cityIdx >= 0 ? (r[cityIdx] || '').trim() : ''
      });
    }
    return out;
  }

  function render(data, isDemo) {
    data = data.slice().sort((a, b) => b.tickets - a.tickets).slice(0, RANKING_CONFIG.TOP_N);
    if (podiumEl) podiumEl.innerHTML = '';
    if (!data.length) { listEl.innerHTML = '<li class="rank-loading">Nenhum participante ainda.</li>'; return; }

    // leaderboard único e sóbrio; top 3 com badge de posição destacado
    listEl.innerHTML = data.map((d, idx) => {
      const pos = idx + 1;
      const topCls = pos <= 3 ? ' top t' + pos : '';
      const t = d.tickets;
      return '<li class="rank-row' + topCls + '">' +
        '<span class="rank-pos">' + pos + '</span>' +
        '<span class="rank-av">' + esc(initials(d.name)) + '</span>' +
        '<span class="rank-name">' + esc(d.name) + (d.city ? '<small>' + esc(d.city) + '</small>' : '') + '</span>' +
        '<span class="rank-pts">' + fmt(t) + '<small>' + (t === 1 ? 'ticket' : 'tickets') + '</small></span>' +
      '</li>';
    }).join('');

    noteEl.textContent = isDemo
      ? 'Dados de exemplo — conecte sua planilha no arquivo ranking.js (CSV_URL).'
      : 'Atualizado automaticamente a partir da planilha.';
  }

  async function load() {
    if (!RANKING_CONFIG.CSV_URL) { render(DEMO, true); return; }
    try {
      const res = await fetch(RANKING_CONFIG.CSV_URL + (RANKING_CONFIG.CSV_URL.includes('?') ? '&' : '?') + 't=' + Date.now());
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = rowsToData(parseCSV(await res.text()));
      render(data.length ? data : DEMO, !data.length);
    } catch (e) {
      console.warn('Ranking: falha ao carregar planilha, usando demo.', e);
      render(DEMO, true);
    }
  }

  load();
  if (RANKING_CONFIG.REFRESH_MS > 0) setInterval(load, RANKING_CONFIG.REFRESH_MS);
})();
