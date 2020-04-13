import { ICard } from 'aer-types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TV',
    name: 'Fossilized Scarab',
    id: 'FossilizedScarab',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Destroy a card in hand.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Thermal Dart',
    id: 'ThermalDart',
    cost: 4,
    effect: `
      <p>
      <b>Link</b> <span class="hint">(Two spells with Link may be prepped to the same breach.)</span>
      </p>
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      If this is not the first Thermal Dart you have cast this turn, gain 1 charge.
        </p>
      `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Resonate',
    id: 'Resonate',
    cost: 6,
    effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      If there are six or more other cards in your discard pile, deal 3 
      additional damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Conflagration',
    id: 'Conflagration',
    cost: 3,
    effect: `
      <p>
      <b>Link</b> <span class="hint">(Two spells with Link mat be prepped to the same breach.)</span>
      </p>
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      Gain 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['link'],
  },
  {
    type: 'Relic',
    expansion: 'TV',
    name: 'Dimensional Key',
    id: 'DimensionalKey',
    cost: 8,
    effect: `
      <p>
      Any ally draws two cards.
        <span class="or">OR</span>
      Destroy this. Suffer 1 damage. Place a card in play from the nemesis deck
      on top of the nemesis deck.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Inner Fire',
    id: 'InnerFire',
    cost: 2,
    effect: `
      <p>
        <b>Link</b> <span class="hint">(Two spells with Link mat be prepped to the same breach.)</span>
      </p>
      <p>
        <b>Cast:</b> Deal 1 damage.<br/>
        If the nemesis tier is 2 or higher, deal 1 additional damage.
        </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Fulminate',
    id: 'Fulminate',
    cost: 5,
    effect: `
      <p>
      While prepped, other spells you cast deal 1 additional damage.
      </p>
      <p>
      <b>Link</b> <span class="hint">(Two spells with Link mat be prepped to the same breach.)</span>
      </p>  
      <b>Cast:</b> Deal 3 damage.
        </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Relic',
    expansion: 'TV',
    name: 'Eternity Charm',
    id: 'EternityCharm',
    cost: 3,
    effect: `
      <p>
        Focus your closed breach with the lowest focus cost. Reveal the top 
        three cards of your deck. You may prep on of the revealed cards.
      </p>
        `,
    keywords: [],
  },
]
