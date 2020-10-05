import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Relic',
    expansion: 'Nameless',
    name: 'Roztapiający Młot',
    id: 'MoltenHammer',
    cost: 5,
    effect: `
      <p>
        Otrzymujesz 1 Ładunek.<br/>
        Możesz zniszczyć kartę na ręce lub z wierzchu kart odrzuconych dowolnego gracza.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Luminacja',
    id: 'Radiance',
    cost: 8,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 5 obrażeń.<br/>
      Każdy sojusznik dobiera kartę.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Płomień',
    id: 'Blaze',
    cost: 4,
    effect: `
      <p>
        Gdy pozyskujesz tę kartę, możesz ją umieścić na wierzchu stosu kart odrzuconych dowolnego gracza.<br/>
          <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
        Zadaj 1 dodatkowe obrażenie za każdą wcześniejszą swoją aktywację Płomienia w tej turze oraz za każdy inny Płomień, 
        który masz przygotowany.
        </p>
            `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Uderzenie Wróżby',
    id: 'ScryingBolt',
    cost: 6,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 5 obrażeń.<br/>
      Możesz stracić 1 Ładunek. Jeżeli się na to zdecydujesz, odkryj dwie wierzchnie karty z talii Nemezis. 
      Ułóż je z powrotem w dowolnej kolejności.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Piętno Mędrca',
    id: 'SagesBrand',
    cost: 7,
    effect: `
      <p>
        To zaklęcie musi być przygotowane na dwóch przylegających Bramach w taki sposób, aby karta dotykała obu Bram. 
        Ta karta w pełni zajmuje obie Bramy.<br/>
        Gdy przygotowane: podczas swojej fazy dobierania dobierz dodatkową kartę.<br/>
        <b>Aktywacja:</b> Zadaj 6 obrażeń.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Nameless',
    name: 'Wysysający Agat',
    id: 'LeechingAgate',
    cost: 3,
    effect: `
      <p>
        Gdy pozyskujesz tę kartę, otrzymujesz 1 Ładunek.<br/>
        Otrzymujesz 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Nameless',
    name: 'Spirala Czasoprzestrzenna',
    id: 'TemporalHelix',
    cost: 7,
    effect: `
      <p>
      Aktywuj przygotowane Zaklęcie dowolnego gracza bez odrzucania go.
      </p>
      `,
    keywords: [],
  },
]
