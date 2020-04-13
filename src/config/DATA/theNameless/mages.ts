import { Mage } from 'aer-types'

export const mages: Mage[] = [
  {
    expansion: 'Nameless',
    name: 'Malastar',
    id: 'Malastar',
    mageTitle: 'Breach Mage Mentor',
    ability: `
        <h2>Gift Of Aether</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain a spell from any supply pile. You may prep that spell to 
        any player's opened breach.</p>
      `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Immolate',
        expansion: 'Nameless',
        id: 'Immolate',
        cost: 0,
        effect: `
            <p>
              While prepped, when you suffer 1 damage gain 1 charge.<br/>
              <b>Cast:</b> Deal 1 damage.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
