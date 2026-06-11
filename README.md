# Safirion — Copa 100K (Landing Page)

Landing page promocional da campanha **Copa 100K** da Safirion: depósito/operação geram tickets para concorrer a R$ 100 mil em prêmios, com ranking de participantes em tempo real via Google Sheets.

## Estrutura
- `index.html` — marcação da página
- `styles.css` — estilos e animações
- `script.js` — contador regressivo, animações de scroll (taça), modal de ticket, prova social, etc.
- `ranking.js` — ranking de participantes lido de uma planilha Google Sheets
- `assets/` — imagens otimizadas (WebP) e logo

## Ranking via Google Sheets
1. Monte a planilha com a 1ª linha de títulos: `Nome | Tickets | Cidade`.
2. No Sheets: **Arquivo → Compartilhar → Publicar na web** → formato **CSV**.
3. Cole o link gerado em `CSV_URL` no início do arquivo [`ranking.js`](ranking.js).

O ranking ordena automaticamente por tickets (maior → menor) e atualiza sozinho.

## Rodar localmente
Abra o `index.html` no navegador, ou sirva a pasta com qualquer servidor estático (ex.: extensão Live Server do VS Code).
