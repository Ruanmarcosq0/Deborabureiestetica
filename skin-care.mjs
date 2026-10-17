// Fotografias fornecidas pelo cliente. Exibidas integralmente, sem filtros ou retoques.
export function skinCare(link) {
  const photos = [
    ['pele-registro-01.jpg', 'Comparação fotográfica do rosto em dois momentos, com detalhes da textura da pele.', 1440, 1437],
    ['pele-registro-02.jpg', 'Duas fotografias do rosto lado a lado, mostrando a região da bochecha.', 1440, 1436],
    ['pele-registro-03.jpg', 'Registro comparativo do rosto em dois momentos, com foco na bochecha e na testa.', 1440, 1436],
  ];
  return `<section class="treatments skin-care" id="cuidados" aria-labelledby="skin-title"><div class="wrap">
    <div class="skin-heading"><div><p class="eyebrow">Limpeza de pele · Um olhar mais atento</p><h2 id="skin-title">Sua pele merece<br><em>esse momento.</em></h2></div><div class="skin-intro"><p>Você não precisa decidir tudo agora. Comece pelo que deseja para a sua pele — e converse com Débora sobre limpeza de pele e os próximos passos do cuidado.</p><a class="text-link" href="#registros">Veja os registros de perto ↓</a></div></div>
    <div class="skin-gallery" id="registros" aria-label="Fotografias de cuidados com a pele enviadas pelo cliente">
    ${photos.map(([file,alt,w,h],i)=>`<figure class="skin-photo skin-photo-${i+1}"><a href="/images/${file}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar registro ${i+1} na resolução original"><img src="/images/${file}" width="${w}" height="${h}" loading="lazy" decoding="async" alt="${alt}"><span class="photo-zoom" aria-hidden="true">Ver em detalhe ↗</span></a><figcaption><span>Registro 0${i+1}</span><span>Cuidados com a pele</span></figcaption></figure>`).join('')}
    </div>
    <p class="skin-context">Fotografias fornecidas pelo cliente. Os procedimentos e o intervalo entre os registros não foram informados; as imagens não demonstram, por si só, o efeito isolado de uma limpeza de pele. Resultados individuais variam.</p>
    <div class="skin-invitation"><div><span class="eyebrow">Do interesse ao primeiro contato</span><h3>Que tal reservar um tempo<br>para falar da sua pele?</h3><p>Envie “Quero saber sobre limpeza de pele”. Pergunte como funciona, tire suas dúvidas e consulte os horários antes de agendar.</p></div><div class="skin-cta">${link('skin-care','Quero saber sobre limpeza de pele')}<span>Uma conversa para entender o próximo passo.</span></div></div>
    <div class="skin-prompts"><div><span>01 / Seu objetivo</span><p>Conte o que você gostaria de cuidar.</p></div><div><span>02 / Suas dúvidas</span><p>Entenda a proposta antes de escolher.</p></div><div><span>03 / Seu momento</span><p>Consulte um horário que faça sentido para você.</p></div></div>
  </div></section>`;
}
