import { ICard } from 'aer-types'

export const cards: ICard[] = [
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
      You may destroy a card in you discard pile.
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
]
