# Débora Burei — site institucional

SEO nacional e canais: metadados com temas de estética e microagulhamento, entidade da profissional conectada ao Instagram e mensagem do WhatsApp com destaque explícito ao site oficial. Regiões reais de atendimento preservadas. Plano editorial, sugestão de bio e saudação pronta do WhatsApp Business em SEO-NACIONAL-E-INSTAGRAM.md. Não foram ativadas respostas automáticas, modificada a conta Instagram ou garantidas posições de busca.

Revisão de CTA: botões direcionam ao agendamento; textos corridos aprovados foram preservados. Regiões Ipiranga/São Paulo e Mogi das Cruzes, informadas pelo cliente, foram incluídas somente nos metadados e dados estruturados. Sem promessa de posição no Google.

## Texto reduzido e blocos sem foto

Após aprovação do visual, o cliente pediu menos texto e remoção dos blocos sem foto. Foram removidos a faixa decorativa, os três passos e o contato como seção separada. FAQ compacta foi integrada à introdução com foto; WhatsApp, Instagram e telefone permanecem acessíveis. Mensagens e títulos foram encurtados, mantendo a certificação e os avisos essenciais das fotos. O bege intermediário #e9ddcc e todos os arquivos de imagem foram preservados.

WhatsApp confirmado pelo cliente em 17/10/2026: +55 11 94065-5939. CTAs principais e botão flutuante levam ao WhatsApp com mensagens de contexto; Instagram segue disponível para conhecer procedimentos e publicações. Revisão técnica registrada em SEO-AUDIT.md.

Tema claro: meta estática darkreader-lock solicita que Dark Reader não aplique tema; color-scheme e fundos da marca têm prioridade explícita no CSS. HTML é servido com no-store e CSS com hash. Identificação desta revisão: bege-claro-20261017. Extensões ou configurações que deliberadamente ignoram as preferências do site podem exigir ajuste no próprio navegador; não é possível garantir controle sobre todas elas a partir do código da página.

## Tema claro obrigatório e retrato de proximidade

O site declara `color-scheme: only light` no documento e no CSS, incluindo metadados, para evitar a conversão automática do bege #f7f4ed para modo escuro. O CSS segue com hash de conteúdo. Novo retrato abaixo da hero em #conversa: recorte gerado de 1125×1398 com alpha real, exportado em WebP lossless e carregado sob demanda. Original JPEG e recorte PNG preservados no workspace; edição generativa não é idêntica pixel a pixel ao original. O retrato acompanha a introdução existente, sem repetir a biografia.

## Apresentação única e atualização de estilos

A apresentação da profissional fica somente na hero, com âncora `#inicio`. O bloco institucional repetido foi removido. Meta theme-color usa #f7f4ed e as antigas superfícies marrons foram substituídas pela variável de bege. O build gera CSS com hash do conteúdo no nome, para que cada alteração de estilo tenha uma URL nova. HTML de início e privacidade exige revalidação de cache.

## Hero e paleta bege

A abertura destaca Débora e a Certificação Internacional em Microagulhamento Avançado informada pelo cliente. Superfícies usam o bege `#f7f4ed`, igual ao fundo original da abertura; texto e botões mantêm contraste escuro. O recorte `public/images/debora-burei-recorte.png` foi gerado com remoção de fundo e alpha real, 1122×1402 RGBA, sem compressão com perdas posterior. A fotografia original 1440×1800 segue preservada em `debora-burei.jpg`. O recorte por ferramenta generativa não equivale à preservação pixel a pixel do original e não representa resolução 4K. Sua finalidade é a composição da hero e da apresentação; as fotos de procedimentos permanecem intactas.

## Retrato, qualificação e estética labial

O cliente identificou a foto `debora-burei.jpg` como Débora e informou diretamente “Certificação Internacional — Microagulhamento Avançado”. Essa informação foi publicada na apresentação e no schema Person/hasCredential; não se informa país, instituição, carga horária, registro ou titulação acadêmica. As imagens de lábios ficam em seção própria, sem atribuir técnica, durabilidade ou fase de cicatrização. Não são apresentadas como resultados de microagulhamento. Retrato 1440×1800, detalhe dos lábios 747×904 e comparativo 1440×1436, preservados sem regravação ou filtros. Todas podem ser abertas na resolução original.

## Atualização de fotografias

Três fotos fornecidas pelo cliente em 16/10/2026 foram copiadas sem regravação para `public/images/`. Dimensões: 1440 × 1437, 1440 × 1436 e 1440 × 1436. Os arquivos são idênticos aos originais, verificados por SHA-256. São exibidos integralmente, sem filtros e com dimensões reservadas. Cada imagem pode ser aberta na resolução original; carregamento sob demanda abaixo da primeira dobra. Não há ampliação artificial para 4K. FPS não se aplica a fotografias.

A seção de cuidados dá destaque à limpeza de pele solicitada pelo cliente. Não atribui a evolução das imagens a um procedimento isolado, nem informa número de sessões ou intervalo não fornecidos. Texto de conversão usa curiosidade, identificação e orientação para contato, sem escassez fabricada, depoimentos ou resultados garantidos.

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
