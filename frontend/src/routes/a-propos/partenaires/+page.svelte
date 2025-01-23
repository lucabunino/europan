<script>
  const { data } = $props()
  $inspect(data)
  import { urlFor } from '$lib/utils/image';
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l page-title">Partenaires</h2>
  </section>
  <section class="grid cols-3 text-xs">
    {#each data.partners as partner, i}
      <a href={partner.url} target="_blank" rel="noopener noreferrer">
        <div class="logo">
          {#if partner.logo}
            <img src={partner.logoUrl} alt="">
          {/if}
        </div>
        <h3>{partner.title}</h3>
      </a>
    {/each}
  </section>
</article>
  
  <style>
  .content {
    row-gap: calc(var(--gutter)*3);
  }
  .logo {
    height: 6rem;
    max-width: 40%;
    /* max-width: 50%; */
    /* aspect-ratio: 1; */
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: bottom left;
  }
  </style>
  
  <!-- <article>
  <h2 class="text-l page-title">Partenaires</h2>
  <div class="content cols-2 text-xs">
    <div>
      <p>Dans un appel public, plus de 350 expert·es en mobilité rejettent les six extensions  autoroutières soumises à votation le 24 novembre, et devisées à 4.9  mia CHF. Celles-ci contredisent non seulement les projets de  développements des agglomérations, mais également celui de la  Confédération: le plan sectoriel des transports mise en priorité sur  l’optimisation des infrastructures existantes et sur une diminution du  trafic automobile dès 2030. Surtout, ces projets ne relèvent pas de la science et du professionnalisme, car ils ne sont pas issus d’une  démarche concertée et méthodique.</p>
      <p>Dans le cas de  l’A1, a-t-on établi un véritable diagnostic, mesuré les files  d’attentes, sondé les usagers pour savoir si elles sont vraiment  inacceptables – plus que les embouteillages actuels dans les  agglomérations? Et si c’était le cas, a-t-on analysé précisément  les causes du problème: les tronçons, le manque d’alternative... ou  peut-être les habitudes? C’est bien là qu’il faut agir et les  spécialistes le savent: un faible report des usagers suffit en  général à réduire de 30-40% la congestion d’un tronçon.</p>
      <p>Accroître la capacité de l’A1 entre Nyon et le Vengeron est inutile, voire  dangereux, explique le professeur Yves Delacrétaz (HEIG-VD), qui  préconise plutôt de réaménager l’échangeur. Et surtout de regarder  tout ce qu’il y a autour: le contournement de Genève va évoluer  prochainement, la congestion se déplacer. Le vrai problème, c’est que  l’Office fédéral des routes (OFROU) n’intègre pas les enjeux urbains  dans sa vision. Il travaille dans son coin et se concentre sur «son»  autoroute, comme si c’était un objet en soi.</p>
      <p>Par définition, l’autoroute relie des territoires. C’est donc  à partir de leurs perspectives qu’il faut travailler. Le Conseil  fédéral martèle que l’objectif vise à désengorger les villes; mais  en imposant sa solution, il bafoue le principe de subsidiarité qui est  au fondement même du fédéralisme: ce sont les communes et les cantons qui ont la compétence communes et les cantons qui ont la compétence d’initier des mesures qui les concernent. Or  depuis 20 ans les villes mettent tout en œuvre pour diminuer les  nuisances liées au trafic: les bouchons, la cacophonie, l’espace  confisqué (30% des zones bâties), les atteintes à la santé, etc.  Alors si le but est vraiment de s’attaquer à ce problème colossal, la  bonne nouvelle est que la Confédération dispose de 4.9 milliards! De  quoi réaliser un véritable projet de territoire, concerté, rigoureux  et créatif.</p>
      <p>L’autoroute n’appartient pas à l’OFROU, mais à nous! Comme nos lacs et nos  montagnes, c’est un commun, un gigantesque patrimoine en partage, que  nous devons soigner et, surtout, faire évoluer à la hauteur des  exigences actuelles et futures. Si nous investissons aujourd’hui.</p>
    </div>
    <div>
      <p>Dans le cas de  l’A1, a-t-on établi un véritable diagnostic, mesuré les files  d’attentes, sondé les usagers pour savoir si elles sont vraiment  inacceptables – plus que les embouteillages actuels dans les  agglomérations? Et si c’était le cas, a-t-on analysé précisément  les causes du problème: les tronçons, le manque d’alternative... ou  peut-être les habitudes? C’est bien là qu’il faut agir et les  spécialistes le savent: un faible report des usagers suffit en  général à réduire de 30-40% la congestion d’un tronçon. Accroître la capacité de l’A1 entre Nyon et le Vengeron est inutile, voire  dangereux, explique le professeur Yves Delacrétaz (HEIG-VD), qui  préconise plutôt de réaménager l’échangeur. Et surtout de regarder  tout ce qu’il y a autour: le contournement de Genève va évoluer  prochainement, la congestion se déplacer. Le vrai problème, c’est que  l’Office fédéral des routes (OFROU) n’intègre pas les enjeux urbains  dans sa vision.
      <h3 class="text-m subtitle">Urbanisme et de paysage</h3>
      <p>Il travaille dans son coin et se concentre sur «son»  autoroute, comme si c’était un objet en soi.<br>
        Par définition, l’autoroute relie des territoires. C’est donc  à partir de leurs perspectives qu’il faut travailler. Le Conseil  fédéral martèle que l’objectif vise à désengorger les villes; mais  en imposant sa solution, il bafoue le principe de subsidiarité qui est  au fondement même du fédéralisme: ce sont les communes et les cantons qui ont la compétence communes et les cantons qui ont la compétence d’initier des mesures qui les concernent.<br>
        Nous pourrions développer des solutions innovantes, comme des pistes pour gérer le stockage pendant les pics  de congestion ou l’introduction d’outils d’analyse pour mieux  connaître, enfin, les comportements des usagers (besoins professionnels ou confort?) Cela serait vraiment utile, dans un pays où l’on estime  à 45% les trajets effectués pour des besoins professionnels.  Aujourd’hui, bien qu’elle soit entièrement sponsorisée par l’État, on ne comprend pas quels intérêts l’autoroute sert exactement.</p>
      <p><a href="">www.urbanisme-paysage.org/habitation ↗</a></p>
      <p class="mt-0"><a href="">www.urbanisme-paysage.org/home ↗</a></p>
      <p class="mt-0"><a href="">www.sia.ch/fr ↗</a></p>
    </div>
  </div>
</article> -->