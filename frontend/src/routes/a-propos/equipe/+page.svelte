<script>
const members = [
  {
    name: "Jürg",
    surname: "Capol",
    email: "juerg.capol@europan.swiss",
    role: "Président",
    jobs: ["Architecte EPFL, Urbaniste UNIGE", "CEO Utilita Management"],
    city: "Rolle"
  },
  {
    name: "Barbara",
    surname: "Stettler",
    email: "barbara.stettler@europan.swiss",
    role: "Vice-Président",
    jobs: ["Architecte EPF SIA"],
    city: "Biel/Bienne"
  },
  {
    name: "Konrad",
    surname: "Scheffer",
    email: "konrad.scheffer@europan.swiss",
    role: "Secrétaire général",
    jobs: ["Architekt Dipl.-Ing, M.Arch.", "Lauréat Europan 14", "Office Oblique"],
    city: "Zürich"
  },
  {
    name: "Jürg",
    surname: "Bart",
    email: "juerg.bart@europan.swiss",
    role: "",
    jobs: ["Architekt EPFZ BSA SIA", "Studio WOW"],
    city: "Biel/Bienne"
  },
  {
    name: "Alberto",
    surname: "Figuccio",
    email: "alberto.figuccio@europan.swiss",
    role: "",
    jobs: ["Architecte AAM SIA", "Lauréat Europan 10 et 11", "Studio Alberto Figuccio"],
    city: "Genève"
  },
  {
    name: "Marine",
    surname: "Girault",
    email: "marine.girault@europan.swiss",
    role: "",
    jobs: ["Architecte HMONP SIA, Paysagiste CESP", "Urbanité(s)"],
    city: "Genève"
  },
  {
    name: "Ariane",
    surname: "Widmer",
    email: "",
    role: "",
    jobs: [
      "Urbaniste cantonale",
      "République et canton de Genève",
      "Département du territoire (DT) Office de l'urbanisme",
      "Direction générale (DG)"
    ],
    city: "Genève"
  },
  {
    name: "Mathias",
    surname: "Heinz",
    email: "m.heinz@poolarch.ch",
    role: "",
    jobs: ["Architecte ETHZ", "pool Architekten"],
    city: "Zürich"
  },
  {
    name: "Glenn",
    surname: "Fischer",
    email: "glenn.fischer@bern.ch",
    role: "",
    jobs: [
      "Chef de projet développement et réalisation",
      "Direction du génie civil des transports et des espaces verts de la ville"
    ],
    city: "Ville de Berne"
  }
];
</script>

<h2 class="text-l page-title">Equipe</h2>
<div class="content cols-3 text-xs">
  {#each members as member, i}
  <div class="member">
    <img src="" alt="">
    <p class="mt-0">{member.role}</p>
    <h2 class="mt-0"><a href="mailto:{member.email}">{member.name} {member.surname} ↗</a></h2>
    <p class="mt-0">{member.email}</p>
    {#each member.jobs as job, i}
      <p class="mt-0">{job}</p>
    {/each}
    <p class="mt-0">{member.city}</p>
  </div>
  {/each}
</div>

<style>
h2 {
  grid-column: 3 / span 4;
}
.content {
  grid-column: 3 / span 3;
}
img {
  background-color: var(--gray);
  width: 50%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
}
</style>