# Débora Burei — site institucional

Site estático com HTML semântico, CSS responsivo e JavaScript progressivo. Node.js 20 ou superior. Sem dependências de execução, fontes externas, cookies ou rastreadores.

## Executar

`node build.mjs` gera `dist/`. `node check.mjs` valida a estrutura. `node server.mjs` abre a prévia em http://127.0.0.1:4173.

## Conteúdo e publicação

Edite `site.config.json`. Campos vazios são placeholders intencionais. `whatsapp` exige país, DDD e telefone em dígitos; ao preencher, os CTAs passam a apontar para WhatsApp com mensagem. Sem telefone confirmado, o contato usa o Instagram, identificado corretamente. `services` aceita objetos `name` e `description`; só adicionar serviços confirmados.

Defina `siteUrl` com a origem HTTPS real, sem barra final. Na Vercel, a variável automática VERCEL_PROJECT_PRODUCTION_URL também é aceita. Isso gera canonical, Open Graph, robots e sitemap. Nunca preencher com domínio presumido. Inclua a imagem `public/og.png` no repositório.

Vercel: framework Other, build `node build.mjs`, saída `dist`, sem instalação. Conecte um NOVO repositório deste cliente ao NOVO projeto; produção em main, previews nas demais branches. O push só passa a publicar automaticamente depois de a integração Git ser confirmada no painel.

## Fontes e limites editoriais

Referência: https://www.instagram.com/deboraburei/ consultada em 16/10/2026. O título público identifica “Débora Burei - Esteticista e Cosmetóloga”. Bio, feed e fotos estavam restritos a login. Nenhuma cor, serviço, cidade, foto, resultado, formação ou telefone foi atribuído à profissional sem confirmação. A direção em areia, vinho e cobre é uma proposta, não uma reprodução de identidade verificada. A arte da capa é ilustrativa; o retrato é um placeholder identificado. O tratamento “Dra.” não foi usado para inferir uma titulação ou registro.

Especificação: arquivo Texto colado.txt fornecido pelo usuário. Campos pendentes: WhatsApp, cidade, endereço, horários, serviços, registro, formação, fotografia oficial, identidade, avaliações e domínio. SEO local com cidade, NAP e schema LocalBusiness dependem desses dados; o site usa apenas Person, WebSite e FAQPage com conteúdo visível. Nenhum resultado enriquecido ou indexação é garantido. llms.txt é complementar.

## Privacidade e métricas

Sem coleta por formulário, pixels e analytics. Cliques em CTA emitem somente o evento local clinic:contact, sem envio de dados. Qualquer integração futura exige revisar a política e implementar consentimento quando aplicável. A página de privacidade descreve a versão atual e não substitui a identificação jurídica do responsável, ainda pendente.

## Segurança e QA

Cabeçalhos definidos em vercel.json. Não inserir segredos em arquivos públicos. QA estrutural e revisão visual devem acompanhar o build. Core Web Vitals reais dependem de dados de campo; não confundir com resultados laboratoriais.
