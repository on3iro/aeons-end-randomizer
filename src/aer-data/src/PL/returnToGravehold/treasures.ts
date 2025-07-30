import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'ClaudiasAetherscope',
    name: "Eteroskop Claudii",
    expansion: 'RTG',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
        Dowolny sojusznik może odrzucić 1 Ładunek. Jeśli to zrobi, otrzymujesz 2 Ładunki.
      </p>
    `,
  },
  {
    id: 'SoskelsLuckyCoin',
    name: "Szczęśliwa Moneta Soskela",
    expansion: 'RTG',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.<br />
        Możesz odrzucić 1 Ładunek. Jeśli to zrobisz, otrzymujesz dodatkowo 2 <span class="aether">&AElig;</span>.
      </p>
    `,
  },
  {
    id: 'QusVoidRadite',
    name: "Zespolony Radyt Qu",
    expansion: 'RTG',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.<br />
        Możesz aktywować przygotowane Zaklęcie dowolnego gracza. To Zaklęcie zadaje o 1 obrażenie mniej, minimum 1.
      </p>
    `,
  },
  {
    id: 'TaqrensGiftOfSpirit',
    name: "Dar Ducha Taqrena",
    expansion: 'RTG',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 1 obrażenie.
        <span class="or">ALBO</span>
        <b>Aktywacja:</b> Dowolny sojusznik dobiera kartę.
      </p>
    `,
  },
  {
    id: 'GygarsTsunami',
    name: "Przepływ Energii Gygara",
    expansion: 'RTG',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 1 obrażenie.<br />
        Możesz odrzucić 1 Ładunek. Jeśli to zrobisz, zadaj dodatkowe 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'EnergizedHusk',
    name: 'Łuska Energii',
    expansion: 'RTG',
    level: 2,
    effect: `
      <p>
        Po tym, jak gracz zakończy rozpatrywanie swojej zdolności, dowolny sojusznik dobiera kartę.
      </p>
    `,
  },
  {
    id: 'SparkingShards',
    name: 'Iskrzący Odłamek',
    expansion: 'RTG',
    level: 2,
    effect: `
      <p>
        Na początku gry umieść tę kartę obok stosu Klejnotów. Gdy gracz pozyskuje kartę 
        z tego stosu, otrzymuje również 1 Ładunek.
      </p>
    `,
  },
  {
    id: 'SigilPendant',
    name: 'Wisior Pieczęci',
    expansion: 'RTG',
    level: 2,
    effect: `
      <p>
        Raz na turę, dowolny gracz podczas swojej fazy głównej może wydać 3 <span class="aether">&AElig;</span>, 
        aby każdy gracz otrzymał po 1 Ładunku.
      </p>
    `,
  },
  {
    id: 'HornOfPlenty',
    name: 'Róg Obfitości',
    expansion: 'RTG',
    level: 3,
    effect: `
      <p>
        Dobierz dwie karty z talii Skarbów poziomu 1 i dodaj je do Koszar.<br />
        <br />
        Dodaj dwa dodatkowe Skarby poziomu 1 do swojej talii początkowej, stosując się do zasad
        dotyczących Skarbów poziomu 1.
      </p>
    `,
  },
  {
    id: 'ImbuedCirclet',
    name: 'Przepełniony Diadem',
    expansion: 'RTG',
    level: 3,
    effect: `
      <p>
        Gdy pozyskujesz Klejnot, Gravehold otrzymuje 1 punkt żywotności.<br />
        <br />
        Może to spowodować, że Gravehold będzie miało więcej punktów żywotności, 
        niż wynosi jego maksimum.
      </p>
    `,
  },
  {
    id: 'BurstingBracelet',
    name: 'Pękająca Bransoletka',
    expansion: 'RTG',
    level: 3,
    effect: `
      <p>
        Kiedy wzmacniasz albo otwierasz Bramę, możesz aktywować przygotowane Zaklęcie dowolnego gracza. 
        To Zaklęcie zadaje 1 dodatkowe obrażenie.
      </p>
    `,
  },
]
