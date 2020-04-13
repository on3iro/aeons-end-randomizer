import { ICard } from 'aer-types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Drown in Flames',
    id: 'DrownInFlames',
    cost: 6,
    effect: `
      <p>
      <b>Cast:</b> Deal 4 damage to a minion or the nemesis.<br/>
        You may lose 2 charges. If you do, repeat this.<br/>
        <span class="hint">(Effects that modify damage affect each 
        instance of damage this spell deals)</span>
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Fleeting Vision',
    id: 'FleetingVision',
    cost: 3,
    effect: `
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      Each player may reveal the top two cards of their deck and may discard 
      any of those cards.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Splinter Missile',
    id: 'SplinterMissile',
    cost: 5,
    effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      Any ally may discard a card in hand. 
      If they do, divide this damage however you choose among the nemesis 
      and any number of minions.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Echo Stone',
    id: 'EchoStone',
    cost: 4,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      If you have played another Echo Stone this turn, gain an additional 
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
