import { ICard } from 'aer-types'

export const cards: ICard[] = [
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
]
