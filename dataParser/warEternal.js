const warEternalData = {
  id: 'WE',
  name: 'War Eternal',
  type: 'standalone',
  nemeses: [
    {
      expansion: 'WE',
      name: 'Gate Witch',
      id: 'GateWitch',
      health: 70,
      difficulty: 7,
      expeditionRating: 4,
      additionalInfo: `
        <p>
          When Gate Witch accelerates time, it loses five nemesis tokens 
          instead of four nemesis tokens.
        </p>
      `,
    },
    {
      expansion: 'WE',
      name: 'Hollow Crown',
      id: 'HollowCrown',
      health: 1,
      difficulty: 5,
      expeditionRating: 3,
      additionalInfo: '',
    },
    {
      expansion: 'WE',
      name: 'Magus Of Cloaks',
      id: 'MagusOfCloaks',
      health: 35,
      difficulty: 7,
      expeditionRating: 3,
      additionalInfo: '',
    },
    {
      expansion: 'WE',
      name: 'Umbra Titan',
      id: 'UmbraTitan',
      health: 70,
      difficulty: 3,
      expeditionRating: 1,
      additionalInfo: '',
    },
  ],
  mages: [
    {
      expansion: 'WE',
      name: 'Dezmodia',
      id: 'Dezmodia',
      mageTitle: 'Voidborn Prodigy',
      ability: `
        <h2>Tempest Sigil</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Any player destroys an opened I or II breach and 
        returns any spells prepped to that breach to their hand. 
        That player gains a Sigil breach and places it where the destroyed 
        breach was. Then, that player may prep a spell from their hand 
        to a breach.</p>`,
      numberOfCharges: 6,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Oblivion Shard',
          expansion: 'WE',
          id: 'OblivionShared',
          cost: 0,
          effect: `
            <p>
              Gain 2 <span class="aether">&AElig;</span> that cannot be used 
              to gain a relic or spell.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'WE',
      name: 'Garu',
      id: 'Garu',
      mageTitle: 'Oathsworn Protector',
      ability: `
        <h2>Colossal Force</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Discard up to four of your prepped spells.</p>
        <p>Deal 2 damage plus 4 additional damage for each spell you 
        discarded divided however you choose to the nemesis or any 
        number of minions.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Torch',
          expansion: 'WE',
          id: 'Torch',
          cost: 0,
          effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.
              <span class="or">OR</span>
              <b>Cast:</b> Focus any player's breach.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'WE',
      name: 'Gex',
      id: 'Gex',
      mageTitle: 'Breach Mage Adviser',
      ability: `
        <h2>Vimcraft Oath</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Destroy up to two cards in your discard pile that cost 
        0 <span class="aether">&AElig;</span>.</p>
        <p>Any ally draws one card and gains 2 life.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Shattered Geode',
          expansion: 'WE',
          id: 'ShatteredGeode',
          cost: 0,
          effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              You may place the top card of any ally's discard pile into your hand.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'WE',
      name: 'Mazahaedron',
      id: 'Mazahaedron',
      mageTitle: 'Henge Mystic',
      ability: `
        <h2>Underearth Mantra</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>You may gain a gem that costs 4 <span class="aether">&AElig;</span> or 
        less from any supply pile.</p>
        <p>Gravehold gains 4 life.</p>`,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Worldheart Shard',
          expansion: 'WE',
          id: 'WorldheartShard',
          cost: 0,
          effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.
              <span class="or">OR</span>
              Gain 2 <span class="aether">&AElig;</span> that can only be used 
              to gain a card. Place the next card you gain this turn on top of 
              any ally's discard pile.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'WE',
      name: 'Mist',
      id: 'MistWE',
      mageTitle: 'Voidwalker',
      ability: `
        <h2>Exalted Brand</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Cast up to three different spells prepped by any number of players. 
        For each spell cast this way, place that spell into any ally's hand.</p>`,
      numberOfCharges: 6,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Amethyst Paragon',
          expansion: 'WE',
          id: 'AmethystParagon',
          cost: 0,
          effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              Any ally may prep a spell in hand to their opened or closed 
              breach(es).
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'WE',
      name: 'Quilius',
      id: 'Quilius',
      mageTitle: 'Breach Mage Assassin',
      ability: `
        <h2>Quietus Vow</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Deal 2 damage for each Trophy token you have.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Extinguish',
          expansion: 'WE',
          id: 'Extinguish',
          cost: 0,
          effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.<br/>
              If this damage causes a minion from the nemesis deck to be 
              discarded, Quilius gains a Trophy token.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'WE',
      name: 'Ulgimor',
      id: 'Ulgimor',
      mageTitle: 'Shadowkin Beast',
      ability: `
        <h2>Eidolon Shroud</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain 6 life.</p>
        <p>If you are exhausted, any ally gains 5 life instead.</p>`,
      numberOfCharges: 6,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Coal Shard',
          expansion: 'WE',
          id: 'CoalShard',
          cost: 0,
          effect: `
            <p>
              If you have 2 life or less, destroy this. Otherwise, gain 
              3 <span class="aether">&AElig;</span>, gain 1 charge, and 
              suffer 2 damage.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'WE',
      name: 'Yan Magda',
      id: 'YanMagda',
      mageTitle: 'Enlightened Exile',
      ability: `
        <h2>Imperium Ritual</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gain a card from any supply pile. If you have four 
        opened breaches, any ally gains a card from any supply pile and 
        places it on top of their deck.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Illuminate',
          expansion: 'WE',
          id: 'Illuminate',
          cost: 0,
          effect: `
            <p>
              While prepped, when you focus or open one of your breaches 
              during your turn, deal 1 damage.<br/>
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
      type: 'Gem',
      expansion: 'WE',
      name: 'Erratic Ingot',
      id: 'ErraticIngot',
      cost: 5,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      Gain an additional 2 <span class="aether">&AElig;</span> if there is 
        at least one nemesis turn order card in the turn order discard pile.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Reduce To Ash',
      id: 'ReduceToAsh',
      cost: 7,
      effect: `
      <p>
      While prepped, at the start of your casting phase reveal the top card 
      of your deck. You may destroy the revealed card.<br/>
        <b>Cast:</b> Deal 4 damage.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'WE',
      name: 'Vortex Gauntlet',
      id: 'VortexGauntlet',
      cost: 6,
      effect: `
      <p>
      Cast any player's prepped spell.<br/>
      Return that spell to that player's hand.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Carbonize',
      id: 'Carbonize',
      cost: 4,
      effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      Reveal the top card of the turn order deck. You may place that card on 
      the bottom of the turn order deck.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Equilibrium',
      id: 'Equilibrium',
      cost: 7,
      effect: `
      <p>
      While prepped, when you suffer damage reduce that damage by 1, to a 
      minimum of 1.<br/>
        <b>Cast:</b> Deal 4 damage.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'WE',
      name: 'Volcanic Glass',
      id: 'VolcanicGlass',
      cost: 3,
      effect: `
      <p>
      When you gain this on your turn, you may spend 2 <span class="aether">&AElig;</span>. 
        If you do, any ally also gains a Volcanic Glass and places it on top 
      of their deck.<br/>
      Gain 2 <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Convection Field',
      id: 'ConvectionField',
      cost: 5,
      effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.
        <span class="or">OR</span>
      <b>Cast:</b> Deal 2 damage. Any ally day destroy a card in hand.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Jagged Lightning',
      id: 'JaggedLightning',
      cost: 4,
      effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      You may discard a card in hand. If you do, any player focuses their 
      closed breach with the lowest focus cost.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'WE',
      name: 'Bloodstone Jewel',
      id: 'BloodstoneJewel',
      cost: 6,
      effect: `
      <p>
      When you gain a Bloodstone Jewel for the first time on you turn, gain
        3 <span class="aether">&AElig;</span>. <br/>
      Gain 3 <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Kindle',
      id: 'Kindle',
      cost: 4,
      effect: `
      <p>
      While prepped, during your main phase you may also prep on Spark to the 
      breach this spell is prepped to.<br/>
        <b>Cast:</b> Deal 3 damage.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Thoughtform Familiar',
      id: 'ThoughtformFamiliar',
      cost: 3,
      effect: `
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      Deal 1 additional damage for each of your other prepped spells.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Crystallize',
      id: 'Crystallize',
      cost: 8,
      effect: `
      <p>
      This spell must be prepped to two adjacent breaches so that this card 
      touches both breaches. This fully occupies both breaches.<br/>
      <b>Cast:</b> Any ally reveals their hand.<br/>
      Deal 2 damage for each gem in that ally's hand.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Fiery Torrent',
      id: 'FieryTorrent',
      cost: 5,
      effect: `
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      Deal 2 additional damage for each other Fiery Torrent prepped by any 
        player.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Celestial Spire',
      id: 'CelestialSpire',
      cost: 5,
      effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      If this card's supply pile is empty, any ally draws a card.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Conjure The Lost',
      id: 'ConjureTheLost',
      cost: 6,
      effect: `
      <p>
      <b>Cast:</b> Deal 5 damage.<br/>
      You may destroy this. If you do, Gravehold gains 4 life.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Nova Forge',
      id: 'NovaForge',
      cost: 6,
      effect: `
      <p>
      While prepped, once per turn during your main phase you may gain 2 
      <span class="aether">&AElig;</span> that can only be used to gain a spell.<br/>
        <b>Cast:</b> Deal 4 damage.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'WE',
      name: 'Dread Diamond',
      id: 'DreadDiamond',
      cost: 3,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      You may discard a prepped spell. If you do, gain an additional 1 
      <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'WE',
      name: 'Cairn Compass',
      id: 'CairnCompass',
      cost: 4,
      effect: `
      <p>
      Any ally may prep a spell in their discard pile to their opened or 
      closed breach(es).
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'WE',
      name: 'Scoria Slag',
      id: 'ScoriaSlag',
      cost: 4,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      If the nemesis tier is 2 or higher, gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'WE',
      name: 'Breach Ore',
      id: 'BreachOre',
      cost: 4,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      <span class="or">OR</span>
      Focus your closed breach with the lowest focus cost.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'WE',
      name: 'Fiend Catcher',
      id: 'FiendCatcher',
      cost: 3,
      effect: `
      <p>
      You may destroy a card in your hand or discard pile.<br/>
      Reveal the top card of the turn order deck. If you revealed a nemesis 
      turn order card, you may place that card on the bottom of the turn order deck.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Pyrotechnic Surge',
      id: 'PyrotechnicSurge',
      cost: 4,
      effect: `
      <p>
      This spell must be prepped to two adjacent breaches so that this card 
      touches both breaches. This fully occupies both breaches.<br/>
      <b>Cast:</b> Deal 4 damage.<br/>
      You may destroy a card in your discard pile.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'WE',
      name: 'Aurora',
      id: 'Aurora',
      cost: 5,
      effect: `
      <p>
      While prepped, once per turn during your main phase you may gain 1 charge.<br/>
        <b>Cast:</b> Deal 3 damage.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'WE',
      name: 'Conclave Scroll',
      id: 'ConclaveScroll',
      cost: 3,
      effect: `
      <p>
      Gain 1 charge.<br/>
      If this card's supply pile is empty, you may destroy the top card of 
      any ally's discard pile.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'WE',
      name: 'Primordial Fetish',
      id: 'PrimordialFetish',
      cost: 4,
      effect: `
      <p>
      Focus any player's breach.
        <span class="or">OR</span>
      Destroy this. Gain 3 life.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'WE',
      name: 'Frozen Magmite',
      id: 'FrozenMagmite',
      cost: 3,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      You may place the next card you gain this turn on top of your deck.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'WE',
      name: 'Mages Totem',
      id: 'MagesTotem',
      cost: 2,
      effect: `
      <p>
      Destroy a gem or relic you played this turn.
        <span class="or">OR</span>
      Destroy this. Gravehold gains 1 life.
      </p>
      `,
      keywords: [],
    },
  ],
}

module.exports = warEternalData
