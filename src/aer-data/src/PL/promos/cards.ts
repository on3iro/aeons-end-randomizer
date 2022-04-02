import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Utonięcie w Płomieniach',
    id: 'DrownInFlames',
    cost: 6,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia Poplecznikowi lub Nemezis.<br/>
        Możesz odrzucić 2 Ładunki, aby wykonać to ponownie.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Przelotna Wizja',
    id: 'FleetingVision',
    cost: 3,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 2 obrażenia.<br/>
      Każdy gracz może odkryć 2 karty z wierzchu swojej talii i odrzucić lub odłożyć z powrotem każdą z nich.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Magiczny Pocisk',
    id: 'SplinterMissile',
    cost: 5,
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 4 obrażenia.<br/>
      Dowolny sojusznik może odrzucić kartę z ręki. Jeżeli to zrobi, podziel te obrażenia dowolnie pomiędzy
      Nemezis i dowolną liczbę Popleczników.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Echo Kryształ',
    id: 'EchoStone',
    cost: 4,
    effect: `
      <p>
      Otrzymaj 2 <span class="aether">&AElig;</span>.<br/>
      Jeżeli zagrałeś inny Echo Kryształ w tej turze, otrzymujesz dodatkowo
      1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Thieving Spirit',
    id: 'ThievingSpirit',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 4 damage.<br/>
        Gain 1 <span class="aether">&AElig;</span>.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Fractured Quartz',
    id: 'FracturedQuartz',
    cost: 4,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      You may destroy two cards in this card's supply pile. If you do, 
      gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Rock Launcher',
    id: 'RockLauncher',
    cost: 3,
    effect: `
      <p>
      Discard or destroy a card in hand. If you do, deal damage equal to its cost.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Abacus of Ignition',
    id: 'AbacusOfIgnition',
    cost: 4,
    effect: `
      <p>
      You may casdt any ally's prepped spell.<br/>
      Any ally draws a card.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Illuminating Flame',
    id: 'IlluminatingFlame',
    cost: 6,
    effect: `
      <p>
      <b>Cast:</b> Deal 5 damage.<br/>
      If this was cast from an opened III or IV breach, you may destroy this.
        If you do, gain 3 charges.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Chronal Arc',
    id: 'ChronalArc',
    cost: 7,
    effect: `
      <p>
        This spell must be prepped to two adjacent breaches so that this card 
        touches both breaches. This fully occupies both breaches.<br/>
        <b>Cast:</b> Deal 4 damage.<br/>
        You may place this card into your hand.
        </p>
        `,
    keywords: [],
  },
]
