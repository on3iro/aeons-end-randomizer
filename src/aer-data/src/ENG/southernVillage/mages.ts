import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'SV',
    name: 'Lucien',
    id: 'Lucien',
    mageTitle: '',
    ability: `
      <h2>Magnetism</h2>
      <p class="ability-activation">Activate during your casting phase:</p>
      <p>
        Open all of your breaches. Prep any number of spells in hand to your opened breaches.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Sun Shard',
        expansion: 'SV',
        id: 'SunShard',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Gain 3 <span class="aether">&AElig;</span> that can only be used to open a breach.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'SV',
    name: 'Reth',
    id: 'Reth',
    mageTitle: '',
    ability: `
      <h2>Missing Half</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Reveal your deck. Place up to two spells with the same name from your deck into 
        your hand, and up to two spells with that same name from your discard into 
        your hand. Return your deck in the same order.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Fossilized Rose',
        expansion: 'SV',
        id: 'FossilizedRose',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Discard a card in hand. If you do, gain a spell that costs 
            5 <span class="aether">&AElig;</span> or less from any supply pile.
            <span class="or">OR</span>
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
]
