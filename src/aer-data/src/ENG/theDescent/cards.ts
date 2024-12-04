import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'ATD',
    name: 'Acidic Flomite',
    id: 'AcidicFlomite',
    cost: 5,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      You may lose 1 charge. If you do, place an immolate token on an enemy.
      </p>
      `,
    keywords: ['elemental token'],
  },
  {
    type: 'Gem',
    expansion: 'ATD',
    name: 'Flamium',
    id: 'Flamium',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      Place an immolate token on an enemy.
      </p>
      `,
    keywords: ['elemental token'],
  },
  {
    type: 'Gem',
    expansion: 'ATD',
    name: 'Hungry Avite',
    id: 'HungryAvite',
    cost: 6,
    developCost: 4,
    effect: `
      <p>
      If you have 2 or more charges, you may gain or develop this for 1 less <span class="aether">&AElig;</span>.
      <hr>
      When you develop this, focus a breach.
      <hr>
      Gain 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Gem',
    expansion: 'ATD',
    name: 'Infused Galvite',
    id: 'InfusedGalvite',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      Gain 1 <span class="aether">&AElig;</span>. Place an electrify token on any enemy.
      </p>
      `,
    keywords: ['elemental token'],
  },
  {
    type: 'Gem',
    expansion: 'ATD',
    name: 'Washium',
    id: 'Washium',
    cost: 4,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      You may spend 1 <span class="aether">&AElig;</span> to
      focus your closed breach with the lowest focus cost.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'ATD',
    name: 'Coruscating Mirror',
    id: 'CoruscatingMirror',
    cost: 3,
    effect: `
      <p>
      When a minion is drawn from the nemesis deck, you may reveal this from hand to place an electrify token on that minion.
      <hr>
      Any ally draws a card and gains an <span class="aether">&AElig;</span> token.
      </p>
      `,
    keywords: ['elemental token'],
  },
  {
    type: 'Relic',
    expansion: 'ATD',
    name: 'Defensive Dome',
    id: 'DefensiveDome',
    cost: 7,
    developCost: 4,
    effect: `
      <p>
      When an attack is drawn from the nemesis deck, you may reveal and destroy this to discard that attack without resolving it.
      <hr>
      Any player gains 2 life.
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Relic',
    expansion: 'ATD',
    name: 'Redistributor',
    id: 'Redistributor',
    cost: 4,
    effect: `
      <p>
      Gain 1 charge.<br/>
      Any ally gans an <span class="aether">&AElig;</span> token.
      If you have 3 or more charges, that ally gains an additional <span class="aether">&AElig;</span> token.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'ATD',
    name: 'Tuned Reconstructor',
    id: 'TunedReconstructor',
    cost: 4,
    effect: `
      <p>
      Any ally reveals the top card of their deck. If it is a spell, you may cast it.
      If the revealed card is not a spell, they may destroy it,
      gain a card that costs up to 3 <span class="aether">&AElig;</span> more than it,
      and place the gained card on top of their deck.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Alchemical Ignition',
    id: 'AlchemicalIgnition',
    cost: 8,
    effect: `
      <p>
      While prepped, once per turn when any player places an elemental token,
      they place an additional elemental token of the same type on that enemy.
      </p>
      <p><b>Cast:</b> Place 2 venom tokens on an enemy and deal 2 damage to it.</p>
      `,
    keywords: ['elemental token'],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Boundless Engulf',
    id: 'BoundlessEngulf',
    cost: 6,
    effect: `
      <p>
      <b>Cast:</b> Deal 4 damage. If your discard pile has eight or more cards,
      including this, you may return this to your hand.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Endless Weave',
    id: 'EndlessWeave',
    cost: 5,
    effect: `
      <p>
      While prepped, when you use your ability, any ally may draw a card
      and prep a spell in hand to an opened or closed breach.
      </p>
      <p><b>Cast:</b> Deal 4 damage.</p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Flame Geyser',
    id: 'FlameGeyser',
    cost: 5,
    developCost: 3,
    effect: `
      <p>
      When you develop this, place an immolate token on any enemy.
      <hr>
      <b>Cast:</b> Place a venom token on an enemy and deal 2 damage to it.
      </p>
      `,
    keywords: ['develop', 'elemental token'],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Fountain of Elements',
    id: 'FountainOfElements',
    cost: 6,
    developCost: 4,
    effect: `
      <p>
      While prepped, once per turn when any player develops a card,
      that player places an elemental token on any enemy.
      </p>
      <p><b>Cast:</b> Deal 4 damage.</p>
      `,
    keywords: ['develop', 'elemental token'],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Legacy Slayer',
    id: 'LegacySlayer',
    cost: 4,
    effect: `
      <p>While prepped, when any player gains a relic, gain 1 charge.</p>
      <p><b>Cast:</b> Deal 3 damage.</p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Restoration Siphon',
    id: 'RestorationSiphon',
    cost: 7,
    effect: `
      <p>
      <b>Cast:</b> Deal 6 damage.
      <span class="or">OR</span>
      <b>Cast:</b> Deal 1 damage. Gravehold gains 3 life.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Silent Sting',
    id: 'SilentSting',
    cost: 3,
    developCost: 2,
    effect: `
      <p><b>Cast:</b> Place a venom token on any enemy and deal 1 damage to it.</p>
      `,
    keywords: ['develop', 'elemental token'],
  },
  {
    type: 'Spell',
    expansion: 'ATD',
    name: 'Time Rift',
    id: 'TimeRift',
    cost: 5,
    effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      Each player may reveal the top card of their deck and
      either discard it or return it to the top of their deck.
      </p>
      `,
    keywords: [],
  },
]
