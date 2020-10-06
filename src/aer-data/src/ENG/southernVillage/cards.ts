import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'SV',
    name: 'Quickening Qitite',
    id: 'QuickeningQitite',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        You may discard a card in hand. If you do, focus any player's II breach.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'SV',
    name: 'Jeweled Urup',
    id: 'JeweledUrup',
    cost: 5,
    effect: `
      <p>
        Gain 3 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
        If this is the second time you have played Jeweled Urup this turn, 
        you may destroy this. If you do, gain a card from any supply pile 
        that costs 7 <span class="aether">&AElig;</span> or less.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SV',
    name: "Cat's Eye",
    id: 'CatsEye',
    cost: 1,
    effect: `
      <p>
        You cannot gain this card if you have gained another card this turn. You cannot 
        gain any other cards the turn you gain this.<br />
        Gain 1 charge. You may destroy this. If you do, gain 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SV',
    name: 'Volt Replicator',
    id: 'VoltReplicator',
    cost: 4,
    effect: `
      <p>
        Any ally gains a card that costs 5 <span class="aether">&AElig;</span> or less. 
        If there are two or fewer Volt Replicator in the supply, you may destroy this. If you do, 
        place the gained card into that ally's hand instead.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'SV',
    name: 'Energized Conduit',
    id: 'EnergizedConduit',
    cost: 7,
    effect: `
      <p>
        <b>Attach</b> this to any player's breach.
      </p>
      <p>
        When a spell is cast from this breach, the player who cast that spell gains 1 charge.
      </p>
    `,
    keywords: ['attach'],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: 'Flame Jab',
    id: 'FlameJab',
    cost: 1,
    effect: `
      <p>
        <b>Cast:</b> Deal 2 damage to a minion.<br />
        You may destroy this. If you do, gain 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: 'Gathering Winds',
    id: 'GatheringWinds',
    cost: 3,
    effect: `
      <p>
        <b>Cast:</b> Deal 2 damage.<br />
        If there are six or more other cards in your discard pile, focus any player's breach.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: 'Cinder Shower',
    id: 'CinderShower',
    cost: 5,
    effect: `
      <p>
        While prepped, when you gain a card, deal 1 damage.<br />
        <b>Cast:</br> Deal 3 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: "Reaper's Flame",
    id: 'ReapersFlame',
    cost: 7,
    effect: `
      <p>
        While prepped, once per turn when you cast another spell, you may gain a card that costs 
        5 <span class="aether">&AElig;</span> or less from any supply pile.<br />
        <b>Cast:</br> Deal 5 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'SV',
    name: 'Erasure Of Mind',
    id: 'ErasureOfMind',
    cost: 7,
    effect: `
      <p>
        <b>Cast:</b> Destroy a card in hand that costs 3<span class="aether">&AElig;</span> or more. 
        If you do, deal 10 damage.
        <span class="or">OR</span>
        <b>Cast:</b> Deal 5 damage. Reveal the top two cards of your deck and place any number on top 
        of your discard pile.
      </p>
    `,
    keywords: [],
  },
]
