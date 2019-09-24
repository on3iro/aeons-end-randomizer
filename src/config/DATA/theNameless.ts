import { IExpansion } from '../../types'

export const theNamelessData: IExpansion = {
  id: 'Nameless',
  name: 'Nameless',
  type: 'mini',
  nemeses: [
    {
      expansion: 'Nameless',
      name: 'Blight Lord',
      id: 'BlightLord',
    },
    {
      expansion: 'Nameless',
      name: 'Wayward One',
      id: 'WaywardOne',
    },
  ],
  mages: [
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
  ],
  cards: [
    {
      type: 'Relic',
      expansion: 'Nameless',
      name: 'Molten Hammer',
      id: 'MoltenHammer',
      cost: 5,
    },
    {
      type: 'Spell',
      expansion: 'Nameless',
      name: 'Radiance',
      id: 'Radiance',
      cost: 8,
    },
    {
      type: 'Spell',
      expansion: 'Nameless',
      name: 'Blaze',
      id: 'Blaze',
      cost: 4,
    },
    {
      type: 'Spell',
      expansion: 'Nameless',
      name: 'Scrying Bolt',
      id: 'ScryingBolt',
      cost: 6,
    },
    {
      type: 'Spell',
      expansion: 'Nameless',
      name: 'Sages Brand',
      id: 'SagesBrand',
      cost: 7,
    },
    {
      type: 'Gem',
      expansion: 'Nameless',
      name: 'Leeching Agate',
      id: 'LeechingAgate',
      cost: 3,
    },
    {
      type: 'Relic',
      expansion: 'Nameless',
      name: 'Temporal Helix',
      id: 'TemporalHelix',
      cost: 7,
    },
  ],
}
