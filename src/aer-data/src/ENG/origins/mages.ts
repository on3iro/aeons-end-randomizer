import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'ORI',
    name: 'Kiri and Phoenix',
    id: 'KiriAndPhoenix',
    mageTitle: 'The First Breach Mage',
    abilityName: `Rain Fire`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Prep the top card of the Phoenix deck to the Phoenix breach.
        Cast that spell. Repeat this once.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Condensed Pyre',
        expansion: 'ORI',
        id: 'CondensedPyre',
        cost: 0,
        effect: `<p>While prepped, once per turn during your main phase, gain 1 Knowledge.
        <b>Cast:</b> Deal 1 damage.</p>`,
        keywords: [],
      },
      {
        type: 'Spell',
        name: 'Phoenix Spark',
        expansion: 'ORI',
        id: 'PhoenixSpark',
        cost: 0,
        effect: `<p><b>Cast:</b> Deal 1 damage.<br/>
        You may spend 2 Knowledge to swap this card for Phoenix Blaze</p>`,
        keywords: [],
      },
      {
        type: 'Spell',
        name: 'Phoenix Ember',
        expansion: 'ORI',
        id: 'PhoenixEmber',
        cost: 0,
        effect: `<p><b>Cast:</b> Deal 1 damage.<br/>
        You may spend 2 Knowledge to swap this card for Phoenix Blast</p>`,
        keywords: [],
      },
      {
        type: 'Spell',
        name: 'Phoenix Flare',
        expansion: 'ORI',
        id: 'PhoenixFlare',
        cost: 0,
        effect: `<p><b>Cast:</b> Deal 1 damage.<br/>
        You may spend 2 Knowledge to swap this card for Phoenix Scorch</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
]
