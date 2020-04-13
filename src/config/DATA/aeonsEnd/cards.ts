import { ICard } from 'aer-types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Diamond Cluster',
    id: 'DiamondCluster',
    cost: 4,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>.<br/>
          If this is the second time you have played Diamond Cluster this turn 
          gain an additional 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Chaos Arc',
    id: 'ChaosArc',
    cost: 6,
    effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      Deal 2 additional damage for each prepped spell in an adjacent breach.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Ignite',
    id: 'Ignite',
    cost: 4,
    effect: `
        <p>
          <b>Cast:</b> Deal 2 damage.<br/>
          Any ally gains 1 charge.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Essence Theft',
    id: 'EssenceTheft',
    cost: 5,
    effect: `
        <p>
          <b>Cast:</b> Deal 3 damage.<br/>
          You may discard a card in hand. If your do, any player gains 1 life.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Searing Ruby',
    id: 'SearingRuby',
    cost: 4,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      Gain an additional 1 <span class="aether">&AElig;</span> that can only 
      be used to gain a spell.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Feral Lightning',
    id: 'FeralLightning',
    cost: 5,
    effect: `
        <p>
          This spell may be prepped to a closed breach without focusing it.<br/>
          <b>Cast:</b> Deal 3 damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Planar Insight',
    id: 'PlanarInsight',
    cost: 6,
    effect: `
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
        Deal 1 addtional damage for each of your opened breaches.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Spectral Echo',
    id: 'SpectralEcho',
    cost: 3,
    effect: `
        <p>
          <b>Cast:</b> Deal 2 damage.<br/>
          You may destroy a card in hand.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Burning Opal',
    id: 'BurningOpal',
    cost: 5,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      You may discard a card in hand. If you do, any ally draws a card.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Consuming Void',
    id: 'ConsumingVoid',
    cost: 7,
    effect: `
      <p>
      <b>Cast:</b> Destory up to two cards in hand.<br/>
      Deal 3 damage for each card destroyed in this way.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Unstable Prism',
    id: 'UnstablePrism',
    cost: 3,
    effect: `
      <p>
        Play a gem in hand twice and destroy it.
        <span class="or">OR</span>
        Gain 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Clouded Sapphire',
    id: 'CloudedSapphire',
    cost: 6,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      If this is the first time you have played Clouded Sapphire this turn, 
      any ally gains 1 charge.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Mages Talisman',
    id: 'MagesTalisman',
    cost: 5,
    effect: `
      <p>
        Gain 1 charge.<br/>
        Any ally gains 1 charge.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Flexing Dagger',
    id: 'FlexingDagger',
    cost: 2,
    effect: `
      <p>
        The next time you focus or open a breach this turn, it costs 3 
        <span class="aether">&AElig;</span> less.
        <span class="or">OR</span>
        Destory this. Deal 1 damage.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Lava Tendril',
    id: 'LavaTendril',
    cost: 4,
    effect: `
      <p>
        While prepped, at the end of your casting phase deal 1 damage.<br/>
        <b>Cast:</b> Deal 3 damage.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Bottled Vortex',
    id: 'BottledVortex',
    cost: 3,
    effect: `
      <p>
        Destroy this.<br/>
        Destory up to two cards in your hand or discard pile.<br/>
        Draw a card.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Arcane Nexus',
    id: 'ArcaneNexus',
    cost: 7,
    effect: `
      <p>
      While prepped, once per turn during your main phase you may return a gem 
      you played this turn to your hand.<br/>
        <b>Cast:</b> Deal 4 damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Dark Fire',
    id: 'DarkFire',
    cost: 5,
    effect: `
        <p>
        <b>Cast:</b> Discard up to two cards in hand.<br/>
        Deal 3 damage for each card discarded this way.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Phoenix Flame',
    id: 'PhoenixFlame',
    cost: 3,
    effect: `
        <p>
          <b>Cast:</b> Deal 2 damage.<br/>
          You may lose 1 charge to deal 2 additional damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Jade',
    id: 'Jade',
    cost: 2,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Amplify Vision',
    id: 'AmplifyVision',
    cost: 4,
    effect: `
      <p>
      <b>Cast:</b> Focus your closed breach with the lowest focus cost.<br/>
      Deal 2 damage.<br/>
      If all of your breaches are opened, deal 1 additional damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Vriswood Amber',
    id: 'VriswoodAmber',
    cost: 3,
    effect: `
      <p>
        When gain this, you may place it on top of your deck.<br/>
        Gain 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Blasting Staff',
    id: 'BlastingStaff',
    cost: 4,
    effect: `
      <p>
        You may cast a prepped spell that you prepped this turn. If you do, 
        that spell deals 2 additional damage.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Sifters Pearl',
    id: 'SiftersPearl',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      Each player reveals the top card of their deck and either discards it or 
      returns it to the top of their deck.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Wildfire Whip',
    id: 'WildfireWhip',
    cost: 6,
    effect: `
      <p>
      While prepped, during your main phase you may spend 2 <span class="aether">&AElig;</span> 
      to cast any player's prepped spell.<br/>
        <b>Cast:</b> Deal 4 damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Focusing Orb',
    id: 'FocusingOrb',
    cost: 4,
    effect: `
      <p>
        Focus any player's breach.
        <span class="or">OR</span>
        Destory this. Gravehold gains 3 life.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Oblivion Swell',
    id: 'OblivionSwell',
    cost: 5,
    effect: `
      <p>
      While prepped, once per turn during your main phase you may gain 1 
      <span class="aether">&AElig;</span>.<br/>
      <b>Cast:</b> Deal 2 damage.<br/>
      You may discard a gem. If you do, deal additional damage equal to its cost.
        </p>
      `,
    keywords: [],
  },
]
