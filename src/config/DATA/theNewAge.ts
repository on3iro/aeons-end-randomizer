import { IExpansion } from '../../types'

export const newAgeData: IExpansion = {
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
        If they do, gain an additional 1 <span class="aether">&AElig;</span>/
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
      <b>Attach<b/> this to any player's breach.<br/>
      Whena spell is cast from this breach, the player who cast that spell 
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
      <b>Attach<b/> this to any player's breach.<br/>
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
      <b>Attach<b/> this to any player's breach.<br/>
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
      <b>Echo<b/><br/>
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
      If they do, deal 3 damage. <span class="hint">(Effects that 
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
      <b>Echo</b><br/>
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
      You may discard a card in hand. If you do, deal 2 damage to the nemesis.
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
}
