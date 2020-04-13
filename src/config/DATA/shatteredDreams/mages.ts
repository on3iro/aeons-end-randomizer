import { Mage } from 'aer-types'

export const mages: Mage[] = [
  {
    expansion: 'SD',
    name: 'Nook',
    id: 'Nook',
    mageTitle: 'Orb Caller',
    ability: `
        <h2>Condense Aether</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>You my destroy a card in your hand or discard pile.
        Gain 4 <span class="aether">&AElig;</span>.<br/>
        You may place the next spell you gain this turn into your hand.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Mystic Orb',
        expansion: 'SD',
        id: 'MysticOrb',
        cost: 0,
        effect: `<p>Gain 1 charge.<br/>
          Cast a spell in your hand. Return that spell to its supply pile, 
          if able. You may lose 1 charge to gain a spell from any supply pile 
          that costs less than the cast spell.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 9,
  },
]
