import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'PAF',
    name: 'Auren',
    id: 'Auren',
    mageTitle: 'Mechanic',
    ability: `
        <h2>Execute Program</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Cast any number of spells prepped to breaches with relics attached to them without discarding those spells.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Iron Scrap',
        expansion: 'PAF',
        id: 'IronScrap',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
        You may spend 3 Knowledge to swap this card for Energy Router. When you open a breach this turn, gain 1 Knowledge. </p>`,
        keywords: ['swap'],
      },
      {
        type: 'Gem',
        name: 'Copper Scrap',
        expansion: 'PAF',
        id: 'CopperScrap',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
        If you've cast three or more spells this turn, gain 1 Knowledge. You may spend 3 Knowledge to swap this card for Structure Stabilizer.</p>`,
        keywords: ['swap'],
      },
      {
        type: 'Gem',
        name: 'Aluminum Scrap',
        expansion: 'PAF',
        id: 'AluminumScrap',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
        You may spend 2 Knowledge to swap this card for Aether Infuser. When you gain a spell this turn, gain 1 Knowledge.</p>`,
        keywords: ['swap'],
      },
      {
        type: 'Spell',
        name: 'Automaton Prototype',
        expansion: 'PAF',
        id: 'Automaton Prototype',
        cost: 0,
        effect: `<p><b>Cast:</b> Deal 1 damage<br/>
        If you've defeated a minion from the nemesis deck this turn, gain 1 Knowledge. You may spend 2 Knowledge to swap this card for Heliocopter.</p>`,
        keywords: ['swap'],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'PAF',
    name: 'Willow',
    id: 'Willow',
    mageTitle: 'Neophyte',
    ability: `
        <h2>Flash of Genius</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain 5 Knowledge Cards you gain this turn may be placed on top of your deck.
        <span class="or">OR</span>
        Gravehold gains 5 life</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Innovation',
        expansion: 'PAF',
        id: 'Innovation',
        cost: 0,
        effect: `<p>Gain 1 Knowledge.<br/>
        <span class="or">OR</span>
        Spend 2 Knowledge. Destroy a card in your hand or discard pile
        and gain a card of the same type from the supply that costs up to 4 <span class="aether">&AElig;</span> more than the destroyed card.</p>`,
        keywords: [],
      },
      {
        type: 'Relic',
        name: 'Suncatcher',
        expansion: 'PAF',
        id: 'Suncatcher',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span></p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'PAF',
    name: 'Ona',
    id: 'Ona',
    mageTitle: 'Wraithtouched Elder',
    ability: `
        <h2>Building Power</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Cast one of your prepped spells without discarding it.
        Then, resolve all effects on cards in the ability zone in any order.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Fossilized Flame',
        expansion: 'PAF',
        id: 'FossilizedFlame',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            You may spend 2 Knowledge to swap this card for Overwhelm.
            When you gain a card that costs 5 <span class="aether">&AElig;</span> or more this turn, gain 1 Knowledge.</p>`,
        keywords: ['swap'],
      },
      {
        type: 'Spell',
        name: 'Leeching Beacon',
        expansion: 'PAF',
        id: 'LeechingBeacon',
        cost: 0,
        effect: `<p>When you prep this, if there is a spell that costs 5 <span class="aether">&AElig;</span> or more prepped to an adjacent breach, gain 1 Knowledge.<br/>
            <b>Cast:</b> Deal 1 damage.<br/>
            You may spend 2 Knowledge to swap this card for Sustain.</p>`,
        keywords: ['swap'],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'PAF',
    name: 'Nadea',
    id: 'Nadea',
    mageTitle: 'Town Guard',
    ability: `
        <h2>Wall Off</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Any player gains 3 life.<br/>
        If you have five or more cards that cost more than 0 <span class="aether">&AElig;</span> in your discard pile, any ally gains a spell and places it into their hand.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Raw Tourmaline',
        expansion: 'PAF',
        id: 'RawTourmaline',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
        You may spend 3 Knowledge to swap this card for Spectralite. When you gain a card that costs 6 <span class="aether">&AElig;</span> or more this turn, gain 1 Knowledge.</p>`,
        keywords: ['swap'],
      },
      {
        type: 'Gem',
        name: 'Royal Inscriptions',
        expansion: 'PAF',
        id: 'RoyalInscriptions',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>. You may pay 3 Knowledge to swap this card for Legacy Coin.
        <b>Recall:</b> Gain 1 Knowledge.</p>`,
        keywords: ['swap'],
      },
    ],
    complexityRating: 2,
  },
  {
    expansion: 'PAF',
    name: 'Kavoc',
    id: 'Kavoc',
    mageTitle: 'Breach Scholar',
    ability: `
        <h2>Experiment</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Any ally draws two cards. Gain 3 Knowledge.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Forbidden Ritual',
        expansion: 'PAF',
        id: 'Forbidden Ritual',
        cost: 0,
        effect: `<p>While prepped, once during your main phase, you may suffer 1 damage to gain 1 Knowledge.
        <b>Cast:</b> Deal 1 damage.</p>`,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Bloodstone',
        expansion: 'PAF',
        id: 'Bloodstone',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
        You may spend 3 Knowledge to swap this card for Soulstone.</p>`,
        keywords: ['swap'],
      },
      {
        type: 'Spell',
        name: 'Darkspark',
        expansion: 'PAF',
        id: 'Darkspark',
        cost: 0,
        effect: `<p><b>Cast</b> Deal 1 damage. <br/>
        You may spend 2 Knowledge to swap this card for Brain Lance.</p>`,
        keywords: ['swap'],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'PAF',
    name: 'Bayli',
    id: 'Bayli',
    mageTitle: 'Beacon',
    ability: `
        <h2>Fusion Reaction</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Return up to two spells from your discard pile to your hand.
        Choose up to two of your prepped spells. Cast those spells.
        Then, cast one of your prepped spells.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Flaming Aura',
        expansion: 'PAF',
        id: 'FlamingAura',
        cost: 0,
        effect: `<p><b>Cast:</b> Prep a spell from your hand that costs 5 <span class="aether">&AElig;</span> or less.
        Return this to your hand.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'PAF',
    name: 'Shoshana',
    id: 'Shoshana',
    mageTitle: 'Ultimate Tether',
    ability: `
        <h2>Redirect Flow</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>After the end of your turn, before another card is drawn from the turn order deck, your Tether takes a turn.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Imbued Ink',
        expansion: 'PAF',
        id: 'ImbuedInk',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Your Tether may discard a gem. If they do, gain 2 <span class="aether">&AElig;</span> and the next card you gain this turn goes on top of your Tether's discard pile.</p>`,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Soul Facet',
        expansion: 'PAF',
        id: 'SoulFacet',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            Shoshana may discard any number of cards in hand. Then, she may gain a gem from the suplly that costs less than or equal to the number
            of cards discarded this way and place it into her hand.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'PAF',
    name: 'Rhys',
    id: 'Rhys',
    mageTitle: 'Artificial Breach Mage',
    ability: `
        <h2>Loop Data</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain up to two spells from the supply that cost 5 <span class="aether">&AElig;</span> or less.
        You may place up to two spells from your discard pile into your hand.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Circuit Board',
        expansion: 'PAF',
        id: 'CircuitBoard',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Remove 3 cost counters from an Artificial breach.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'PAF',
    name: 'Naftir',
    id: 'Naftir',
    mageTitle: 'Void Inheritor',
    ability: `
        <h2>Amplify</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Place a Link token on any opened breach.
        <span class="or">OR</span>
        Cast all the spells prepped to one breach with a Link token on it.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Vorpal Fang',
        expansion: 'PAF',
        id: 'VorpalFang',
        cost: 0,
        effect: `<p><b>Cast:</b> If this was cast from Naftir's Consuming breach, deal 2 damage. Otherwise, deal 1 damage.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'PAF',
    name: 'Lilly',
    id: 'Lilly',
    mageTitle: 'Beast Master',
    ability: `
        <h2>Pack Tactics</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Return up to two minions from your discard pile to your hand. you may prep up to two spells to each of your opened breaches this turn.
        <span class="or">OR</span>
        Deal 3 damage to a minion. If you defeat a minion from the nemesis deck this way, place it into your discard pile.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Lure',
        expansion: 'PAF',
        id: 'Lure',
        cost: 0,
        effect: `<p><b>Cast:</b> Deal 1 damage.<br/>
        If a minion from the nemesis deck is defeated this way, place that minion on top of Lilly's discard pile.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
]
