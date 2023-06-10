import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'RTG',
    name: 'Ohat And Ulgimor',
    id: 'OhatAndUlgimor',
    aliases: ['Ulgimor'],
    mageTitle: '',
    ability: `
      <h2>Enrapture</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Ohat mode: Suffer 2 damage. Any ally draws five cards and discards two cards in hand.<br />
        Ulgimor mode: Cast a spell prepped to Ulgimor's IV breach without discarding it.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Shower Of Coals',
        expansion: 'RTG',
        id: 'ShowerOfCoals',
        cost: 0,
        effect: `
          <p>
            Ohat Mode:<br />
            <b>Cast:</b> Suffer 1 damage and gain 2 <span class="aether">&AElig;</span>.<br />
            Ulgimor Mode:<br />
            <b>Cast:</b> Deal 3 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'RTG',
    name: 'Cairna',
    id: 'Cairna',
    mageTitle: '',
    ability: `
      <h2>Energize</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Gain a spell that costs 5 <span class="aether">&AElig;</span> or less from a supply pile. 
        You may lose two charges to gain any spell from a supply pile instead. You may 
        lose a charge to prep a spell in your discard pile to one of your opened breaches.
      </p>
    `,
    numberOfCharges: 3,
    numberOfOvercharges: 3,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Invigorate',
        expansion: 'RTG',
        id: 'Invigorate',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage.
            <span class="or">OR</span>
            <b>Cast:</b> Return a spell in your discard pile to your hand.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
]
