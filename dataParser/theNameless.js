const theNamelessData = {
  id: 'Nameless',
  name: 'The Nameless',
  type: 'mini',
  nemeses: [
    {
      expansion: 'Nameless',
      name: 'Blight Lord',
      id: 'BlightLord',
      health: 70,
      difficulty: 4,
      expeditionRating: 2,
      additionalInfo: '',
    },
    {
      expansion: 'Nameless',
      name: 'Wayward One',
      id: 'WaywardOne',
      health: 60,
      difficulty: 7,
      expeditionRating: 3,
      additionalInfo: '',
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
              While prepped, when you suffer damage gain 1 charge.<br/>
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
      effect: `
      <p>
        Gain 1 charge.<br/>
        You may destroy a card in hand or on top of any player's discard pile.
      </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'Nameless',
      name: 'Radiance',
      id: 'Radiance',
      cost: 8,
      effect: `
      <p>
      <b>Cast:</b> Deal 5 damage.<br/>
      Each ally draws a card.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'Nameless',
      name: 'Blaze',
      id: 'Blaze',
      cost: 4,
      effect: `
      <p>
        When you gain this, you may place it on top of any player's discard pile.<br/>
          <b>Cast:</b> Deal 2 damage.<br/>
        Deal 1 additional damage for each other time you have cast Blaze this 
          turn and for each other Blaze you currently have prepped.
        </p>
            `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'Nameless',
      name: 'Scrying Bolt',
      id: 'ScryingBolt',
      cost: 6,
      effect: `
      <p>
      <b>Cast:</b> Deal 5 damage.<br/>
      You may lose 1 charge. If you do, reveal the top two cards of the 
      nemesis deck. Return them in any order.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'Nameless',
      name: 'Sages Brand',
      id: 'SagesBrand',
      cost: 7,
      effect: `
      <p>
        This spell must be prepped to two adjacent breaches so that this card 
        touches both breaches. This fully occupies both breaches.<br/>
        While prepped, draw an additional card during your draw phase.<br/>
        <b>Cast:</b> Deal 6 damage.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'Nameless',
      name: 'Leeching Agate',
      id: 'LeechingAgate',
      cost: 3,
      effect: `
      <p>
        When you gain this, gain 1 charge.<br/>
        Gain 2 <span class="aether">&AElig;</span>.
      </p>
        `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'Nameless',
      name: 'Temporal Helix',
      id: 'TemporalHelix',
      cost: 7,
      effect: `
      <p>
      Cast any player's prepped spell without discarding it.
      </p>
      `,
      keywords: [],
    },
  ],
}

module.exports = theNamelessData
