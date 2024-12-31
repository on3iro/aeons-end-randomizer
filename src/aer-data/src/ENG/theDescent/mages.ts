import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'ATD',
    name: 'Brama',
    id: 'BramaATD',
    mageTitle: 'The Leader',
    abilityName: `Regenerate`,
    abilityActivation: `Activate during any player's main phase:`,
    abilityEffect: `
        <p>Gain 4 life.<br/>
        You may suffer 2 damage. If you do, Gravehold gains 4 life.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Eternium',
        expansion: 'ATD',
        id: 'Eternium',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            You may suffer 1 damage. If you do, any ally gains an <span class="aether">&AElig;</span> token.`,
        keywords: ['aether token'],
      },
      {
        type: 'Spell',
        name: 'Funneled Rage',
        expansion: 'ATD',
        id: 'Funneled Rage',
        cost: 0,
        effect: `<p>While prepped, when you suffer damage, gain an <span class="aether">&AElig;</span> token.<br/>
            When a player would suffer damage, you may suffer that damage instead.<br/>
            <b>Cast:</b> deal 1 damage.`,
        keywords: ['aether token'],
      },
    ],
    complexityRating: 2,
  },
  {
    expansion: 'ATD',
    name: 'Janti',
    id: 'Janti',
    mageTitle: 'The Breachspeaker',
    abilityName: `Interlace`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Gain the top card of the Infusion deck and place it into your hand.
        <span class="or">OR</span>
        Destroy an Infusion in play. If you do, deal 8 damage.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Redirector',
        expansion: 'ATD',
        id: 'Redirector',
        cost: 0,
        effect: `<p><b>Cast:</b> Deal 1 damage.<br/>
            Resolve any effects on or attached to the breach this was cast from one additional time.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'ATD',
    name: 'Leisan',
    id: 'Leisan',
    mageTitle: 'The Huntress',
    abilityName: `Manifest Monstrosity`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Place the Manifest token on your player mat so it covers this ability
        and resolve its &ldquo;<b>IMMEDIATELY</b>&rdquo; effects.
        You cannot activate this ability again this game.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Unsealed Essence',
        expansion: 'ATD',
        id: 'UnsealedEssence',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            If you have not activated your ability this game,
            gain an additional 1 <span class="aether">&AElig;</span>.`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'ATD',
    name: 'Mazahaedron',
    id: 'MazahaedronATD',
    mageTitle: 'The Monk',
    abilityName: `Mantra of Earth`,
    abilityActivation: `Activate during any player's main phase:`,
    abilityEffect: `
        <p>Gain a card that costs 4 <span class="aether">&AElig;</span>
        or less from any supply pile. Any ally gains a destiny token.
        <span class="or">OR</span>
        Any player returns a destiny token to its supply and draws five cards.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Fragment of Earth',
        expansion: 'ATD',
        id: 'FragmentOfEarth',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            You may place the next card you gain this turn on top of
            any ally's discard pile. If you do, gain 1 Knowledge.
            <span class="or">OR</span>
            Spend 2 Knowledge. If you do, gain 3 charges.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'ATD',
    name: 'Raven',
    id: 'Raven',
    mageTitle: 'The Lone Survivor',
    abilityName: `Exhume`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Gain 4 knowledge. Reveal the top three cards of the Forgotten Ritual deck.
        You may gain any number of the revealed cards by paying their cost using Knowledge.
        Place the gained cards into your hand. Place the rest on the bottom of the Forgotten Ritual deck.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: "Raven's Eye",
        expansion: 'ATD',
        id: 'RavensEye',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            You may spend Knowledge equal to the cost of the
            top card of the Forgotten Ritual deck to gain it.</p>`,
        keywords: [],
      },
      {
        type: 'Gem',
        name: "Seeker's Light",
        expansion: 'ATD',
        id: 'SeekersLight',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            You may place the top card of the Forgotten Ritual deck on the bottom of it.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 8,
  },
  {
    expansion: 'ATD',
    name: 'Thraxir',
    id: 'ThraxirATD',
    mageTitle: 'The Commander',
    abilityName: `Reality Warp`,
    abilityActivation: `Activate during any player's main phase:`,
    abilityEffect: `
        <p>That player focuses a breach. Then, you gain a card from the supply that
        costs up to twice the focus cost of their opened breach with the highest focus cost.
        <span class="or">OR</span>
        If that player has no closed breaches, deal 8 damage.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Infuser',
        expansion: 'ATD',
        id: 'Infuser',
        cost: 0,
        effect: `<p>During any player's turn, when that player focuses a breach, you may discard this.
            If you do, gain 2 <span class="aether">&AElig;</span> tokens.
            <hr>
            Gain 1 <span class="aether">&AElig;</span>.</p>`,
        keywords: ['aether token'],
      },
    ],
    complexityRating: 3,
  },
]
