import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'MazahaedronsWorldheartShard',
    name: "Odłamek Serca Świata Mazaheadrona",
    expansion: 'SD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
      Otrzymujesz 2 <span class="aether">&AElig;</span>, które mogą zostać wykorzystane wyłącznie do pozyskania karty.
      Umieść następną kartę, którą pozyskasz w tej turze, na wierzchu stosu kart odrzuconych dowolnego sojusznika.
      </p>
      `,
  },
  {
    id: 'PhaedraxasTourmalineShard',
    name: "Odłamek Turmalinu Pheadraxy",
    expansion: 'SD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
      Dowolny sojusznik może otrzymać 1 obrażenie, by zniszczyć kartę ze swojej ręki.
      </p>
      `,
  },
  {
    id: 'FracturedShell',
    name: 'Pęknięta Skorupa',
    expansion: 'SD',
    level: 2,
    effect: `
      <p>
      Na początku rozgrywki umieść tę kartę obok stosu zasobów o koszcie 4 
      <span class="aether">&AElig;</span> lub wyższym. Gdy gracz pozyskuje
      kartę z tego stosu, otrzymuje również 1 Ładunek.
      </p>
      `,
  },
  {
    id: 'Extra-DimensionalLens',
    name: 'Międzywymiarowa Soczewka',
    expansion: 'SD',
    level: 3,
    effect: `
      <p>
      Raz na turę w swojej fazie głównej możesz odkryć 3 karty z wierzchu talii Nemezis.
      Odłóż je w dowolnej kolejności.
      </p>
      `,
  },
  {
    id: 'SeersBracer',
    name: "Karwasz Prorokini",
    expansion: 'SD',
    level: 3,
    effect: `
      <p>
      Raz na turę, gdy w swojej fazie głównej pozyskujesz Ładunek, dowolny sojusznik dobiera kartę.
      </p>
      `,
  },
]
