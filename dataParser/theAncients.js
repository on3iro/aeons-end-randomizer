const theAncientsData = {
  id: 'TA',
  name: 'The Ancients',
  type: 'mini',
  nemeses: [
    {
      expansion: 'TA',
      name: 'The Wanderer',
      id: 'TheWanderer',
      health: 40,
      difficulty: 5,
      expeditionRating: 3,
      additionalInfo: '',
    },
  ],
  mages: [
    {
      expansion: 'TA',
      name: 'Mazra',
      id: 'Mazra',
      mageTitle: 'The Reader',
      ability: `
        <h2>Research</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Destroy a card with "Mazra" in its name in your hand. 
        Gain a card with "Mazra" in its name from the personal upgrade deck 
        that costs 3 <span class="aether">&AElig;</span> more than the destroyed card 
        and place that card into your hand.
        <span class="or">OR</span>
        Return to your hand all cards with "Mazra" in their name 
        in your discard pile.</p>`,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Spell',
          name: "Mazra's Studies",
          expansion: 'TA',
          id: 'MazrasStudies',
          cost: 0,
          effect: `<p><b>Cast:</b> Deal 1 damage.
            <span class="or">OR</span>
            <b>Cast:</b> Focus your III breach.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 6,
    },
    {
      expansion: 'TA',
      name: 'Qu',
      id: 'Qu',
      mageTitle: 'Builder And Destroyer',
      ability: `
        <h2>Duality Embrace</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>If you are in Destroyer form, cast up to two different spells prepped 
        by any number of players, and then flip over the Form token. 
        Otherwise, any player preps up to two spells in their discard pile 
        to their opened breaches, and then flip over the Form token.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Relic',
          name: 'Change Form',
          expansion: 'TA',
          id: 'ChangeForm',
          cost: 0,
          effect: `<p>Qu flips over the Form token.</p>`,
          keywords: [],
        },
        {
          type: 'Gem',
          name: 'Melded Radite',
          expansion: 'TA',
          id: 'MeldedRadite',
          cost: 0,
          effect: `<p>Gain 0 <span class="aether">&AElig;</span>.<br/>
            You may cast any player's prepped spell.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 8,
    },
  ],
  cards: [
    {
      type: 'Gem',
      expansion: 'TA',
      name: 'Shining Fluorite',
      id: 'ShiningFluorite',
      cost: 7,
      effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      Place the next spell you gain this turn into your hand.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'TA',
      name: 'Polyphase Turbine',
      id: 'PolyphaseTurbine',
      cost: 3,
      effect: `
      <p>
        If this is the first time you've played a Polyphase Turbine this turn, 
        gain 2 <span class="aether">&AElig;</span>. Otherwise, gain 1 charge 
        and 1 <span class="aether">&AElig;</span>.
      </p>
        `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'TA',
      name: 'Breach Extractor',
      id: 'BreachExtractor',
      cost: 5,
      effect: `
      <p>
      Any player destroys up to two cards in hand.
        <span class="or">OR</span>
      Destroy this. Gravehold gains 3 life.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'TA',
      name: 'Focusing Conduit',
      id: 'FocusingConduit',
      cost: 5,
      effect: `
      <p>
        <b>Attach</b> this to any player's breach.
      </p>
      <p>
        At the end of that player's casting phase, focus this breach.
        When this breach is opened, destroy this card.
      </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'TA',
      name: 'Dual Flash',
      id: 'DualFlash',
      cost: 3,
      effect: `
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      If this is the first time you have cast Dual Flash during your casting 
      phase this turn, you may cast any player's prepped Dual Flash without
      discarding it.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'TA',
      name: 'Dust Caller',
      id: 'DustCaller',
      cost: 5,
      effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      Any ally returns a card that costs 0 <span class="aether">&AElig;</span> 
      from their discard pile to their hand.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'TA',
      name: 'Symbiotic Synapse',
      id: 'SymbioticSynapse',
      cost: 7,
      effect: `
      <p>
        If there is another Symbiotic Synapse in any player's discard pile, this
        gains <b>Echo</b>.
        </p>
        <p>
        <b>Cast:</b> Deal 4 damage.
        </p>
        `,
      keywords: ['echo'],
    },
  ],
  treasures: [
    {
      id: 'RemnantsVoidShard',
      name: "Remnant's Void Shard",
      expansion: 'TA',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Gain an additional 1 <span class="aether">&AElig;</span> that can only 
      be used to focus or open a breach.
      </p>
      `,
    },
    {
      id: 'QuiliussErasure',
      name: "Quilius's Erasure",
      expansion: 'TA',
      level: 1,
      subtype: 'Spell',
      effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      If this damages a minion, deal 1 additional damage.
      </p>
      `,
    },
    {
      id: 'ZhanasFleetingEmber',
      name: "Z'hana's Fleeting Ember",
      expansion: 'TA',
      level: 1,
      subtype: 'Spell',
      effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.
        <span class="or">OR</span>
      <b>Cast:</b> Cast one of your prepped spells that costs 4 
      <span class="aether">&AElig;</span> or less without discarding it.
      </p>
      `,
    },
    {
      id: 'BlightedRootClump',
      name: 'Blighted Root Clump',
      expansion: 'TA',
      level: 2,
      effect: `
      <p>
      When the last card in a supply pile is gained or destroyed, any player 
      gains 3 life.
      </p>
      `,
    },
    {
      id: 'PetrifiedWitchFinger',
      name: 'Petrified Witch Finger',
      expansion: 'TA',
      level: 2,
      effect: `
      <p>
      When the last card in a supply pile is gained or destroyed, any player 
      gains 3 charges.
      </p>
      `,
    },
    {
      id: 'WaywardScraps',
      name: 'Wayward Scraps',
      expansion: 'TA',
      level: 2,
      effect: `
      <p>
      Once per turn during any player's main phase that player may spend 
      4 <span class="aether">&AElig;</span> to focus each player's IV breach.
      </p>
      `,
    },
    {
      id: 'TrueSightMonocle',
      name: 'True Sight Monocle',
      expansion: 'TA',
      level: 3,
      effect: `
      <p>
      At the start of your main phase, if there are six or more cards in 
      your discard pile, gain 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    },
    {
      id: 'EntwinedAetherStrands',
      name: 'Entwined Aether Strands',
      expansion: 'TA',
      level: 3,
      effect: `
      <p>
      At the end of your draw phase, you may discard one card in hand and 
      draw a card.
      </p>
      `,
    },
    {
      id: 'SiphoningBlade',
      name: 'Siphoning Blade',
      expansion: 'TA',
      level: 3,
      effect: `
      <p>
      Once per turn when you focus or open a breach, gain 1 charge.
      </p>
      `,
    },
    {
      id: 'GemEncrustedAnklet',
      name: 'Gem Encrusted Anklet',
      expansion: 'TA',
      level: 3,
      effect: `
      <p>
      At the start of your first turn of the game, gain 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    },
  ],
  upgradedBasicNemesisCards: [
    {
      id: 'Rupture',
      name: 'Rupture',
      expansion: 'TA',
      tier: 1,
      type: 'Attack',
    },
    {
      id: 'FurrowOfDestruction',
      name: 'Furrow Of Destruction',
      expansion: 'TA',
      tier: 1,
      type: 'Power',
    },
    {
      id: 'Mangle',
      name: 'Mangle',
      expansion: 'TA',
      tier: 2,
      type: 'Attack',
    },
    {
      id: 'HowlingSlayer',
      name: 'Howling Slayer',
      expansion: 'TA',
      tier: 2,
      type: 'Minion',
    },
  ],
}

module.exports = theAncientsData
