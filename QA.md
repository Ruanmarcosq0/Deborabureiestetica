# Revisão — 16/10/2026

- Build local e primeiro build Vercel concluídos. Build Vercel: 825 ms, conforme log.
- Sem overflow horizontal em 320, 360, 375, 390, 430, 768 e 1440 px, verificado no navegador.
- Revisão visual desktop e mobile 390 px realizada.
- Menu mobile abre, atualiza aria-expanded e fecha com Escape.
- FAQ expande resposta; privacidade abre na rota correspondente.
- Console da prévia sem erros durante os testes.
- H1 único, idioma pt-BR, JSON-LD parseável, FAQ coerente com conteúdo e âncoras válidas.
- robots.txt, sitemap.xml, llms.txt, favicon, imagem OG, privacidade e página 404 gerados.
- Sem dependências de frontend, fontes remotas, pixels ou cookies próprios.

## Limites

Não foram medidos Lighthouse ou Core Web Vitals de campo. Auditoria automática de acessibilidade não realizada; revisão cobriu semântica, foco, teclado, tamanho dos controles e adaptação de layout. Não houve teste real de envio de mensagem ao Instagram nem WhatsApp, pois não se deve enviar mensagens sem autorização e o telefone não foi confirmado. Bio, fotos e feed do Instagram exigiam login. Dados locais, credenciais e procedimentos permanecem pendentes. A integração Git está sendo verificada com um segundo commit após o primeiro deploy.
