const newAgeData = {
  id: 'NA',
  name: 'The New Age',
  type: 'standalone',
  nemeses: [
    {
      expansion: 'NA',
      name: 'Maggoth',
      id: 'Maggoth',
      health: 45,
      difficulty: 3,
      expeditionRating: 1,
      additionalInfo: '',
    },
    {
      expansion: 'NA',
      name: 'Arachnos',
      id: 'Arachnos',
      health: 70,
      difficulty: 4,
      expeditionRating: 2,
      additionalInfo: '',
    },
    {
      expansion: 'NA',
      name: 'Ageless Walker',
      id: 'AgelessWalker',
      health: 80,
      difficulty: 5,
      expeditionRating: 3,
      additionalInfo: '',
    },
    {
      expansion: 'NA',
      name: 'Fenrix',
      id: 'Fenrix',
      health: 60,
      difficulty: 7,
      expeditionRating: 4,
      additionalInfo: '',
    },
  ],
  mages: [
    {
      expansion: 'NA',
      name: 'Sahala',
      id: 'Sahala',
      mageTitle: 'Oracle',
      ability: `
        <h2>Star Bind</h2>
        <p class="ability-activation">Activate during your casting or main phase:</p>
        <p>Reveal the top three cards of your deck. 
        Place a spell revealed this way into your hand. 
        If there are no spells prepped to your Celestial Breach, 
        prep up to two spells in hand to your Celestial Breach.</p>`,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Sparkling Meteorite',
          expansion: 'NA',
          id: 'SparklingMeteorite',
          cost: 0,
          effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Gain 3 <span class="aether">&AElig;</span> that can only be used to focus or open a breach.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 3,
    },
    {
      expansion: 'NA',
      name: 'Gygar',
      id: 'Gygar',
      mageTitle: 'Tide Master',
      ability: `
        <h2>High Tide</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Place a Surge token on your Ancient Breach.
        <span class="or">OR</span>
        Cast a spell prepped to your Ancient Breach. Gain 2 charges.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Tidal Surge',
          expansion: 'NA',
          id: 'TidalSurge',
          cost: 0,
          effect: `<p><b>Cast:</b> Gain 1 charge.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 3,
    },
    {
      expansion: 'NA',
      name: 'Soskel',
      id: 'Soskel',
      mageTitle: 'Aristocrat',
      ability: `
        <h2>Energized Sigil</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Place an Energize token on any player's breach that doesn't have one.
        <span class="or">OR</span>
        Discard an Energize token on any player's breach. 
        That player gains 4 life.</p>`,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Lucky Coin',
          expansion: 'NA',
          id: 'LuckyCoin',
          cost: 0,
          effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            You may lose 1 charge. If you do, gain 2 additional <span class="aether">&AElig;</span>.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 4,
    },
    {
      expansion: 'NA',
      name: 'Taqren',
      id: 'Taqren',
      mageTitle: 'The Shield',
      ability: `
        <h2>Breach Siphon</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Focus any player's breach. 
        Any player gains 1 life for each opened breach you have.</p>`,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Gift Of Spirit',
          expansion: 'NA',
          id: 'GiftOfSpirit',
          cost: 0,
          effect: `<p><b>Cast:</b> Deal 1 damage.
            <span class="or">OR</span>
            <b>Cast:</b> Any ally draws a card.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 2,
    },
    {
      expansion: 'NA',
      name: 'Talix',
      id: 'Talix',
      mageTitle: 'The Chain',
      ability: `
        <h2>Soaring Ash</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Destroy two sparks in hand. If you do, 
        shuffle your turn order card into the turn order deck.
        <span class="or">OR</span>
        Gravehold gains 5 life.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Relic',
          name: 'Furnacium',
          expansion: 'NA',
          id: 'Furnacium',
          cost: 0,
          effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            Discard up to three spells in hand. 
            Gain 1 <span class="aether">&AElig;</span> for each spell discarded this way. 
            You may place this on top of your deck.`,
          keywords: [],
        },
      ],
      complexityRating: 6,
    },
    {
      expansion: 'NA',
      name: 'Rhia',
      id: 'Rhia',
      mageTitle: 'Relic Hunter',
      ability: `
        <h2>Sublimate</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Return a card in your hand or discard pile to its supply pile. 
        If you returned a relic, gain a card from any supply pile 
        that costs up to 3 <span class="aether">&AElig;</span> more than the returned card. 
        Otherwise, gain a card from any supply pile 
        that costs up to 2 <span class="aether">&AElig;</span> more than the returned card. 
        Either way, place the gained card into your hand.</p>`,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Planar Pocket',
          expansion: 'NA',
          id: 'PlanarPocket',
          cost: 0,
          effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            Gain an additional 2 <span class="aether">&AElig;</span> that can only be used to gain a relic.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 6,
    },
    {
      expansion: 'NA',
      name: 'Claudia',
      id: 'Claudia',
      mageTitle: 'Prospector',
      ability: `
        <h2>Aeplosion</h2>
        <p class="ability-activation">Activate during any ally's main phase:</p>
        <p>That ally gains 2 <span class="aether">&AElig;</span>. The next time that ally 
        gains a card from a supply pile this turn, 
        you gain a copy of that card from that supply pile.
        <span class="or">OR</span>
        That ally gains 5 <span class="aether">&AElig;</span>.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Aetherscope',
          expansion: 'NA',
          id: 'Aetherscope',
          cost: 0,
          effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Any ally may lose 1 charge. If they do, gain 2 charges.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 5,
    },
    {
      expansion: 'NA',
      name: 'Lost',
      id: 'Lost',
      mageTitle: 'Living Forge',
      ability: `
        <h2>Meek's Might</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Return up to four cards that cost 0 <span class="aether">&AElig;</span> 
        in your discard pile to your hand.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Heart Forge',
          expansion: 'NA',
          id: 'HeartForge',
          cost: 0,
          effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Destroy a Spark or Crystal in hand. 
            Gain a card of the same type from the Forged deck 
            and place it into your hand.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 5,
    },
  ],
  cards: [
    {
      type: 'Gem',
      expansion: 'NA',
      name: 'Lurking Sionite',
      id: 'LurkingSionite',
      cost: 3,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      If there is a Lurking Sionite in any ally's discard pile, gain an 
      additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'NA',
      name: 'Unrefined Blaststone',
      id: 'UnrefinedBlaststone',
      cost: 6,
      effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Destroy a card in this card's supply pile. If you do, deal 3 damage.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'NA',
      name: 'Exogranite',
      id: 'Exogranite',
      cost: 3,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>
      <span class="or">OR</span>
      Destroy this. Gain 3 <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'NA',
      name: 'Recurring Jasper',
      id: 'RecurringJasper',
      cost: 4,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      If the top card of your discard pile is a spell, you may place this 
      gem on top of your deck.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'NA',
      name: 'Energized Rubidium',
      id: 'EnergizedRubidium',
      cost: 5,
      effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      Any ally may discard a card in hand. If they do, that player gains 
      1 charge.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'NA',
      name: 'Resonant Pearl',
      id: 'ResonantPearl',
      cost: 3,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      Any ally may discard a Resonant Pearl in hand and draw a card. 
        If they do, gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'NA',
      name: 'Caged Fire',
      id: 'CagedFire',
      cost: 3,
      effect: `
      <p>
      Destroy the top card of any player's discard pile.
        <span class="or">OR</span>
      Destroy this. Gain 2 life.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'NA',
      name: 'Galvanized Bauble',
      id: 'GalvanizedBauble',
      cost: 3,
      effect: `
      <p>
      Focus any ally's breach.
        <span class="or">OR</span>
      Cast any player's prepped spell. You may destroy it.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'NA',
      name: 'Aether Conduit',
      id: 'AetherConduit',
      cost: 4,
      effect: `
      <p>
      <b>Attach</b> this to any player's breach.
      </p>
      <p>
      When a spell is cast from this breach, the player who cast that spell 
      gains 1 <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: ['attach'],
    },
    {
      type: 'Relic',
      expansion: 'NA',
      name: 'Well of Energy',
      id: 'WellOfEnergy',
      cost: 7,
      effect: `
      <p>
      Gravehold gains 2 life.
        <span class="or">OR</span>
      Any player gains 2 life.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'NA',
      name: 'Pain Conduit',
      id: 'PainConduit',
      cost: 3,
      effect: `
      <p>
      <b>Attach</b> this to any player's breach.
      </p>
      <p>
      When a spell is cast from this breach, it deals 2 additional damage, 
      and discard this card.
      </p>
      `,
      keywords: ['attach'],
    },
    {
      type: 'Relic',
      expansion: 'NA',
      name: 'Link Conduit',
      id: 'LinkConduit',
      cost: 6,
      effect: `
      <p>
      <b>Attach</b> this to any player's breach.
      </p>
      <p>
      Two spells may be prepped to this breach.
      </p>
      `,
      keywords: ['attach'],
    },
    {
      type: 'Relic',
      expansion: 'NA',
      name: 'Marble Galaxy',
      id: 'MarbleGalaxy',
      cost: 2,
      effect: `
      <p>
      Any ally may discard a Marble Galaxy in hand and draw a card.<br/>
      Gain 1 charge or focus your closed breach with the lowest focus cost.
        If an ally discarded Marble Galaxy, resolve both effects.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Deluge of Power',
      id: 'DelugeOfPower',
      cost: 6,
      effect: `
      <p>
        <b>Cast:</b> Deal 4 damage.<br/>
        Any ally may discard up to two cards in hand. They draw a card for each 
        card discarded this way.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Reverberating Shock',
      id: 'ReverberatingShock',
      cost: 4,
      effect: `
      <p>
        <b>Echo</b>
      </p>
      <p>
        <b>Cast:</b> Deal 1 damage.<br/>
        Gain 1 <span class="aether">&AElig;</span> that can only be used to 
        gain cards.
      </p>
      `,
      keywords: ['echo'],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Fatal Harmony',
      id: 'FatalHarmony',
      cost: 5,
      effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      Any ally may discard a Fatal Harmony in hand and draw a card.<br/>
      If they do, deal 3 damage.<br/>
      <span class="hint">(Effects that 
      modify damage affect both instances of damage.)</span>
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Bouncing Boom',
      id: 'BouncingBoom',
      cost: 6,
      effect: `
      <p>
      <b>Echo</b>
      </p>
      <p>
        <b>Cast:</b> Deal 2 damage.
        </p>
        `,
      keywords: ['echo'],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Spirit Lift',
      id: 'SpiritLift',
      cost: 8,
      effect: `
      <p>
        While prepped once during your turn when you gain a charge, any ally 
        gains 2 charges.<br/>
        <b>Cast:</b> Deal 5 damage.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Tethered Darts',
      id: 'Tethered Darts',
      cost: 3,
      effect: `
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      If this was cast from an opened III or IV breach, you may place this 
      into any ally's hand.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Force Amplifier',
      id: 'ForceAmplifier',
      cost: 4,
      effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      If this was cast from an opened III or IV breach, deal 1 additional 
      damage.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Imbued Smash',
      id: 'ImbuedSmash',
      cost: 5,
      effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      You may discard a card in hand. If you do, deal 2 damage to the nemesis.<br/>
        <span class="hint">(Effects that modify damage affect both 
        instances of damage.)</span>
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'NA',
      name: 'Pattern Strike',
      id: 'PatternStrike',
      cost: 7,
      effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      You may return to your hand up to two cards in your discard pile 
      that cost 0 <span class="aether">&AElig;</span>.
        </p>
      `,
      keywords: [],
    },
  ],
  treasures: [
    {
      id: 'KadirsEmeraldShard',
      name: "Kadir's Emerald Shard",
      expansion: 'NA',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Any player gains 1 life.
      </p>
      `,
    },
    {
      id: 'GexsShatteredGeode',
      name: "Gex's Shattered Geode",
      expansion: 'NA',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      You may place the top card of any ally's discard pile into your hand.
      </p>
      `,
    },
    {
      id: 'JiansMoonstoneShard',
      name: "Jian's Moonstone Shard",
      expansion: 'NA',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Gain an additional 1 <span class="aether">&AElig;</span> that can only 
      be used to gain a gem.
      </p>
      `,
    },
    {
      id: 'LashsQuartzShard',
      name: "Lash's Quartz Shard",
      expansion: 'NA',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Reveal the top card of the turn order deck. You may place that card on the bottom or
      the top of the turn order deck. If you revealed a player turn order card, gain an 
      additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    },
    {
      id: 'XaxosFlare',
      name: "Xaxo's Flare",
      expansion: 'NA',
      level: 1,
      subtype: 'Spell',
      effect: `
      <p>
      <b>Cast:</b> Reveal the top card of the turn order deck, and then place it 
      back on top of the turn order deck. If you revealed a player turn order 
      card, deal 3 damage. Otherwise, deal 1 damage.
      </p>
      `,
    },
    {
      id: 'AdelheimsAmethystShard',
      name: "Adelheim's Amethyst Shard",
      expansion: 'NA',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Any ally may draw a card and then discard a card in hand.
      </p>
      `,
    },
    {
      id: 'BramasBuriedLight',
      name: "Brama's Buried Light",
      expansion: 'NA',
      level: 1,
      subtype: 'Spell',
      effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Gain 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    },
    {
      id: 'GarusTorch',
      name: "Garu's Torch",
      expansion: 'NA',
      level: 1,
      subtype: 'Spell',
      effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.
        <span class="or">OR</span>
      <b>Cast:</b> Focus any player's breach.
      </p>
      `,
    },
    {
      id: 'XaxosPyre',
      name: "Xaxo's Pyre",
      expansion: 'NA',
      subtype: 'Spell',
      level: 1,
      effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Any ally may discard a card in hand. If they do, deal 2 additional damage.
      </p>
      `,
    },
    {
      id: 'MistsGarnetShard',
      name: "Mist's Garnet Shard",
      expansion: 'NA',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Cast any player's prepped spell.
      </p>
      `,
    },
    {
      id: 'ShimmeringCloakOfTheMagus',
      name: 'Shimmering Cloak Of The Magus',
      expansion: 'NA',
      level: 2,
      effect: `
      <p>
      After a player finishes resolving their ability, that player deals 2 damage.
      </p>
      `,
    },
    {
      id: 'ImbuedShackles',
      name: 'Imbued Shackles',
      expansion: 'NA',
      level: 2,
      effect: `
      <p>
      At the start of the game, set this next to a supply pile that costs 7 
      <span class="aether">&AElig;</span> or more. These cards cost players 1 
      less <span class="aether">&AElig;</span> to gain.
      </p>
      `,
    },
    {
      id: 'GluttonsTooth',
      name: "Glutton's Tooth",
      expansion: 'NA',
      level: 2,
      effect: `
      <p>
      When the last card in a supply pile is gained or destroyed, any player deals 
      6 damage.
      </p>
      `,
    },
    {
      id: 'CoreOfRage',
      name: 'Core Of Rage',
      expansion: 'NA',
      level: 2,
      effect: `
      <p>
      At the start of the game, set this next to a spell or relic supply pile. 
      When a player gains a card from that supply pile, they deal 2 damage.
      </p>
      `,
    },
    {
      id: 'CleansingAmulet',
      name: 'Cleansing Amulet',
      expansion: 'NA',
      level: 2,
      effect: `
      <p>
      After a player finishes resolving their ability, any player may destroy 
      a card in hand.
      </p>
      `,
    },
    {
      id: 'CarapaceFragement',
      name: 'Carapace Fragement',
      expansion: 'NA',
      level: 2,
      effect: `
      <p>
      At the start of the game, set this next to a relic or spell supply pile. 
      When a player gains a card from that supply pile, that player focuses one 
      of their breaches.
      </p>
      `,
    },
    {
      id: 'ThornedWhip',
      name: 'Thorned Whip',
      expansion: 'NA',
      level: 2,
      effect: `
      <p>
      When a player opens a breach, that player deals 2 damage.
      </p>
      `,
    },
    {
      id: 'BonesOfDeathmind',
      name: 'Bones Of Deathmind',
      expansion: 'NA',
      level: 2,
      effect: `
      <p>
      When a player opens a breach, that player gains 1 charge.<br/>
      <br/>
      At the start of any player's turn, if that player has no closed breaches, 
      that player gains 1 charge.
      </p>
      `,
    },
    {
      id: 'AcceleratingGauntlets',
      name: 'Accelerating Gauntlets',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      At the start of your first turn of the game, gain a card that costs 
      4 <span class="aether">&AElig;</span> or less.
      </p>
      `,
    },
    {
      id: 'EssenceExtractor',
      name: 'Essence Extractor',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      When you play a gem that costs 5 <span class="aether">&AElig;</span> or 
      more, gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    },
    {
      id: 'BroochOfAttunment',
      name: 'Brooch Of Attunment',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      Once per turn, when you cast a spell that costs 6 <span class="aether">&AElig;</span> 
      or more, gain 2 charges.
      </p>
      `,
    },
    {
      id: 'BladedCrystal',
      name: 'Bladed Crystal',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      When you deal damage to the nemesis with a spell, that spell deals 
      1 additional damage.
      </p>
      `,
    },
    {
      id: 'PrismOfDestruction',
      name: 'Prism Of Destruction',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      If you have no closed breaches, spells you cast deal 2 additional damage.
      </p>
      `,
    },
    {
      id: 'ForgottenTrinket',
      name: 'Forgotten Trinket',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      At the start of your first turn of the game, focus each of your closed 
      breaches once.
      </p>
      `,
    },
    {
      id: 'PrecisionMagnifier',
      name: 'Precision Magnifier',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      Spells you cast that cost 2 <span class="aether">&AElig;</span> or 
      more deal 1 additional damage.
      </p>
      `,
    },
    {
      id: 'ShroudOfObfucation',
      name: 'Shroud of Obfucation',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      When you cast two or more spells during your casting phase, gain 2 
      <span class="aether">&AElig;</span>.
      </p>
      `,
    },
    {
      id: 'VerdantStaff',
      name: 'Verdant Staff',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      When you gain a spell, gain 1 life.
      </p>
      `,
    },
    {
      id: 'FlowingMantle',
      name: 'Flowing Mantle',
      expansion: 'NA',
      level: 3,
      effect: `
      <p>
      At the start of your turn, gain 1 <span class="aether">&AElig;</span> 
      that can onlly be used to gain relics.<br/>
      <br/>
      When you gain a relic, you may place it on top of your deck.
      </p>
      `,
    },
  ],
  upgradedBasicNemesisCards: [
    {
      id: 'HissingAcid',
      name: 'Hissing Acid',
      expansion: 'NA',
      tier: 1,
      type: 'Power',
    },
    {
      id: 'Wreck',
      name: 'Wreck',
      expansion: 'NA',
      tier: 1,
      type: 'Attack',
    },
    {
      id: 'BaneCommander',
      name: 'Bane Commander',
      expansion: 'NA',
      tier: 1,
      type: 'Minion',
    },
    {
      id: 'SkyTremor',
      name: 'Sky Tremor',
      expansion: 'NA',
      tier: 2,
      type: 'Power',
    },
    {
      id: 'EngulfingMadness',
      name: 'Engulfing Madness',
      expansion: 'NA',
      tier: 2,
      type: 'Power',
    },
    {
      id: 'Separate',
      name: 'Separate',
      expansion: 'NA',
      tier: 2,
      type: 'Attack',
    },
    {
      id: 'NeedleDoom',
      name: 'Needle Doom',
      expansion: 'NA',
      tier: 2,
      type: 'Minion',
    },
    {
      id: 'Marked',
      name: 'Marked',
      expansion: 'NA',
      tier: 2,
      type: 'Attack',
    },
    {
      id: 'Eradicate',
      name: 'Eradicate',
      expansion: 'NA',
      tier: 3,
      type: 'Attack',
    },
    {
      id: 'FlashOfDecay',
      name: 'Flash Of Decay',
      expansion: 'NA',
      tier: 3,
      type: 'Power',
    },
    {
      id: 'Terrify',
      name: 'Terrify',
      expansion: 'NA',
      tier: 3,
      type: 'Attack',
    },
    {
      id: 'RayOfDesolation',
      name: 'Ray Of Desolation',
      expansion: 'NA',
      tier: 3,
      type: 'Power',
    },
    {
      id: 'ThunderousTempest',
      name: 'Thunderous Tempest',
      expansion: 'NA',
      tier: 3,
      type: 'Power',
    },
    {
      id: 'Sacrifice',
      name: 'Sacrifice',
      expansion: 'NA',
      tier: 3,
      type: 'Attack',
    },
    {
      id: 'Burialskulk',
      name: 'Burialskulk',
      expansion: 'NA',
      tier: 3,
      type: 'Minion',
    },
  ],
}

module.exports = newAgeData
