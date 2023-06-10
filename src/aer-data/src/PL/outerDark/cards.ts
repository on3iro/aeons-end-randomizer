import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Zwęglenie',
    id: 'Char',
    cost: 8,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 6 obrażeń.<br/>
          Jeżeli te obrażenia spowodują odrzucenie Poplecznika, dowolny gracz otrzymuje 2 punkty życia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Obcy Pierwiastek',
    id: 'AlienElement',
    cost: 4,
    effect: `
        <p>
          Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
          Za każdą twoją Bramę z przygotowanym na niej Zaklęciem otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Przypiekanie',
    id: 'Scorch',
    cost: 5,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
          Jeżeli te obrażenia spowodują odrzucenie unikalnego Poplecznika z talii Nemezis, dowolny sojusznik otrzymuje 2 Ładunki.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Piromancja',
    id: 'Pyromancy',
    cost: 7,
    effect: `
        <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
        Sojusznicy mogą wspólnie odrzucić do dwóch kart z ręki. Za każdą odrzuconą w ten sposób kartę, zadaj 3 dodatkowe obrażenia.
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Aura Zwrotna',
    id: 'FeedbackAura',
    cost: 5,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 3 obrażenia.<br/>
          Jeżeli masz 4 lub więcej Ładunków, zadaj 3 dodatkowe obrażenia.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Katalizator',
    id: 'Catalyst',
    cost: 6,
    effect: `
        <p>
          <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
          Jeżeli masz 2 lub mniej punktów życia, zadaj 5 dodatkowych obrażeń.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Kamień Bólu',
    id: 'PainStone',
    cost: 6,
    effect: `
        <p>
          Otrzymaj 3 <span class="aether">&AElig;</span>.
          <span class="or">ALBO</span>
          Otrzymaj 2 <span class="aether">&AElig;</span> i zadaj 1 obrażenie.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'OD',
    name: 'Astralny Sześcian',
    id: 'AstralCube',
    cost: 5,
    effect: `
        <p>
          Weź z powrotem na rękę kartę Klejnotu, zagraną przez ciebie w tej turze.<br/>
          Odkryj wierzchnią kartę z talii tur. Jeżeli odkryłeś kartę tury gracza, ten gracz otrzymuje 1 punkt życia.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'OD',
    name: 'Zagadkosfera',
    id: 'RiddleSphere',
    cost: 3,
    effect: `
        <p>
          Otrzymujesz 1 Ładunek.
          <span class="or">ALBO</span>
          Możesz stracić 2 Ładunki. Jeżeli to zrobisz, otrzymujesz 5 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Podziemna Więź',
    id: 'NetherConduit',
    cost: 7,
    effect: `
        <b>Aktywacja:</b> Odkryj kartę z ręki o koszcie 2 <span class="aether">&AElig;</span> 
        lub więcej.<br/>
        Jeżeli to zrobisz, zadaj tyle obrażeń, ile takich kart brakuje w ich stosie na rynku zasobów. 
        Następnie dowolny sojusznik może pozyskać kartę z tego stosu zasobów.<br/>
        <span class="hint">(Na początku gry stosy Klejnotów mają po 7 kart, a stosy Artefaktów i Zaklęć po 5 kart.)</span>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Nawiedzony Beryl',
    id: 'HauntedBerylite',
    cost: 3,
    effect: `
      <p>
      Otrzymujesz 2 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
      Odrzuć kartę z ręki. Jeżeli to zrobisz, otrzymujesz 2 Ładunki.
      </p>
      `,
    keywords: [],
  },
]
