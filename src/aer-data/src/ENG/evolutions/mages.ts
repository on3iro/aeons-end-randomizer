import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'EVO',
    name: 'Dorian',
    id: 'Dorian',
    mageTitle: 'Magic Theorist',
    ability: `
        <h2>Redesign</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain 3 <span class="aether">&AElig;</span>.<br/>
        The next time you gain a spell this turn,
        prep it to any player's opened breach.
        </p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Spatial Distortion',
        expansion: 'EVO',
        id: 'SpatialDistorion',
        cost: 0,
        effect: `<p>While prepped, you may Develop a card in the supply or Develop zone
        that does not have a Develop cost for half of that card's cost rounded up.
            <b>Cast:</b> Deal 1 damage.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
]
