import { Mage } from 'aer-types'

export const mages: Mage[] = [
  {
    expansion: 'TV',
    name: 'Sparrow',
    id: 'Sparrow',
    mageTitle: 'Breach Mage Soldier',
    ability: `
        <h2>Eldritch Tether</h2>
        <p class="ability-activation">Activate during your casting or main phase:</p>
        <p>Focus any player's breach. Repeat this three additional times.
        <span class="or">OR</span>
        Any ally with no closed breaches draws three cards and then 
        preps up to three spells from their hand.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Smolder',
        expansion: 'TV',
        id: 'Smolder',
        cost: 0,
        effect: `
            <p>
              This spell may be prepped to a closed breach without focusing it.<br/>
              <b>Cast:</b> Deal 1 damage.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'TV',
    name: 'XaxosTV',
    id: 'XaxosTV',
    mageTitle: 'Voidbringer',
    ability: `
        <h2>Praetorian Halo</h2>
        <p class="ability-activation">Activate during your casting or main phase:</p>
        <p>Any ally gains 1 charge and discards a random card in hand. Focus 
        one of your breaches. Gain 1 life. Destroy a card in your hand or 
        discard pile.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Pyre',
        expansion: 'TV',
        id: 'Pyre',
        cost: 0,
        effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.<br/>
              Any ally may discard a card in hand. If they do, 
              deal 2 additional damage.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
