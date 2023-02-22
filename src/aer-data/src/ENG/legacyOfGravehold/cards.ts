import { ICard } from '../../../../aer-types/types'

const gems: ICard[] = [
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Darklite Sample',
    id: 'DarkliteSample',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        You may place your deck into your discard pile without rearranging the cards.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Nebula Shard',
    id: 'NebulaShard',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
        Gain 1 <span class="aether">&AElig;</span> for each spell you cast during
        your casting phase this turn.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Scrying Sugilite',
    id: 'ScryingSugilite',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br/>
        You may reveal the top card of your deck. If it is a spell,
        gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Starglass',
    id: 'Starglass',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br/>
        <span class="or">OR</span>
        <b>Conjure</b>.
      </p>
    `,
    keywords: ['conjure'],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Sunken Onyx',
    id: 'SunkenOnyx',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br/><br/>
        You may discard this after any ally focuses a breach. If you do,
        they focus that breach again.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Cobalt Clump',
    id: 'CobaltClump',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br/>
        The next time you gain a card that costs 5 <span class="aether">&AElig;</span>
        or more this turn, silence a minion.
      </p>
    `,
    keywords: ['silence'],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Glint Splinter',
    id: 'GlintSplinter',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br/><br/>
        <b>Recall:</b> You may discard a prepped spell. If you do,
        gain 1 <span class="aether">&AElig;</span> and you may place
        the next card you gain this turn on top of your deck.
      </p>
    `,
    keywords: ['recall'],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Voidsteel Vein',
    id: 'VoidsteelVein',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br/><br/>
        You may discard this when any ally casts a spell that costs
        1 <span class="aether">&AElig;</span> or more. If you do,
        that spell deals 2 additional damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Aether Dust',
    id: 'AetherDust',
    cost: 5,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br/>
        Each ally gains an <span class="aether">&AElig;</span> token.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Frozen Light',
    id: 'Frozen Light',
    cost: 5,
    effect: `
      <p>
        Gain 3 <span class="aether">&AElig;</span>.<br/><br/>
        You may discard this during any ally's turn. If you do,
        they gain 1 charge and you gain 1 charge.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'LOG',
    name: 'Shattered Rupix',
    id: 'ShatteredRupix',
    cost: 5,
    effect: `
      <p>
        Gain 3 <span class="aether">&AElig;</span>.<br/><br/>
        When another card or effect would cause you to discard or
        destroy this, you may return this to your hand.
        <i>(Ignore this effect while this card is in the supply.)</i>
      </p>
    `,
    keywords: [],
  },
]

const relics: ICard[] = [
  {
    type: 'Relic',
    expansion: 'LOG',
    name: 'Echo Rune',
    id: 'EchoRune',
    cost: 2,
    effect: `
      <p>
        Any player gains 1 charge.<br/><br/>
        You may discard this during any ally's main phase. If you do,
        they gain 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'LOG',
    name: 'Electrum Rod',
    id: 'ElectrumRod',
    cost: 3,
    effect: `
      <p>
        Any player may focus one of their breaches.<br/>
        If that player has a prepped spell that costs 5 <span class="aether">&AElig;</span>
        or more, gain 1 charge.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'LOG',
    name: `Martyr's Bone`,
    id: 'MartyrsBone',
    cost: 3,
    effect: `
      <p>
        Focus one of your breaches of <b>Conjure</b>.<br/>
        You may lose 1 charge to do both.
      </p>
    `,
    keywords: ['conjure'],
  },
  {
    type: 'Relic',
    expansion: 'LOG',
    name: 'Chaos Charm',
    id: 'ChaosCharm',
    cost: 5,
    effect: `
      <p>
        Two different players may destroy a card in hand.<br/>
        You may destroy this. If you do, remove a fire token from your location on the map.
      </p>
    `,
    keywords: ['fire token'],
  },
  {
    type: 'Relic',
    expansion: 'LOG',
    name: `Summoner's Horn`,
    id: 'SummonersHorn',
    cost: 5,
    effect: `
      <p>
        Any player may prep a spell in their discard pile to their opened
        or closed breaches.<br/><br/>
        <b>Recall:</b> Discard a card to gain 1 charge.
      </p>
    `,
    keywords: ['recall'],
  },
  {
    type: 'Relic',
    expansion: 'LOG',
    name: 'Void Anchor',
    id: 'VoidAnchor',
    cost: 5,
    effect: `
      <p>
        Silence a minion. Any ally gains 2 <span class="aether">&AElig;</span> tokens.<br/><br/>
        <b>Recall:</b> Gravehold gains 1 life.
      </p>
    `,
    keywords: ['recall', 'silence'],
  },
  {
    type: 'Relic',
    expansion: 'LOG',
    name: 'Lightbringer Staff',
    id: 'LightbringerStaff',
    cost: 6,
    effect: `
      <p>
        The players collectively destroy up to to cards in their hands.
        <span class="or">OR</span>
        Silence up to two minions.
        <span class="or">OR</span>
        Destroy this. Remove a fire token from your location on the map.
      </p>
    `,
    keywords: ['fire token', 'silence'],
  },
  {
    type: 'Relic',
    expansion: 'LOG',
    name: 'Phoenix Quill',
    id: 'PhoenixQuill',
    cost: 6,
    effect: `
      <p>
        Two different players gain 1 life each.<br/><br/>
        <b>Recall:</b> Lose 1 charge to return a card that costs 3 <span class="aether">&AElig;</span>
        or less from your discard pile to your hand.
      </p>
    `,
    keywords: ['recall'],
  },
]

const spells: ICard[] = [
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Grassblade',
    id: 'Grassblade',
    cost: 2,
    effect: `
      <p>
        You may destroy this from your hand during any ally's main phase.
        If you do, draw a card.<br/>
        <b>Cast:</b> Deal 2 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Aether Ripple',
    id: 'AetherRipple',
    cost: 3,
    effect: `
      <p>
        <b>Cast:</b> Deal 2 damage.<br/>
        Each ally gains an <span class="aether">&AElig;</span> token.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Douse',
    id: 'Douse',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br/>
        You may destroy this. If you do, remove a fire token
        from your location on the map.
      </p>
    `,
    keywords: ['fire token'],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Evaporating Ray',
    id: 'EvaporatingRay',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br/>
        Any ally may discard a card in hand that costs 2 <span class="aether">&AElig;</span>
        or more. If they do, this deals an additional 2 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Galvanize',
    id: 'Galvanize',
    cost: 4,
    effect: `
      <p>
        While prepped, once during your main phase, you may <b>Conjure</b>.<br/>
        <b>Cast:</b> Deal 2 damage.
      </p>
    `,
    keywords: ['conjure'],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Magnetic Burst',
    id: 'MagneticBurst',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br/>
        You may reveal the top two cards of your deck and place any number
        of those cards on top of your discard pile.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Backfire',
    id: 'Backfire',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 4 damage.<br/>
        You may lose 1 charge to return this to your hand.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Cascade',
    id: 'Cascade',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br/>
        You may return a card that costs 4 <span class="aether">&AElig;</span> or less
        from your discard pile to your hand.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Crystal Carapace',
    id: 'CrystalCarapace',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 4 damage.<br/><br/>
        When another card or effect would cause you to discard or destroy this,
        you may return this to your hand. If it was prepped, you may prep it.
        <i>(Ignore this effect while this card is in the supply.)</i>
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Flame Quake',
    id: 'FlameQuake',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 5 damage.<br/><br/>
        <b>Recall:</b> Lose 2 charges to remove a fire token from your location on the map.
      </p>
    `,
    keywords: ['recall', 'fire token'],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Parallel Self',
    id: 'Parallel Self',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 5 damage.<br/><br/>
        <b>Recall:</b> Spend 2 <span class="aether">&AElig;</span> to deal 2 damage.
      </p>
    `,
    keywords: ['recall'],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Temporal Strike',
    id: 'TemporalStrike',
    cost: 6,
    effect: `
      <p>
        While prepped, when you cast a spell that costs 2 <span class="aether">&AElig;</span>
        or less, it deals 1 additional damage and you may return it to your hand.<br/>
        <b>Cast:</b> Deal 4 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Paradigm Flux',
    id: 'ParadigmFlux',
    cost: 7,
    effect: `
      <p>
        <b>Cast:</b> Remove up to 2 shield tokens from minions.<br/>
        Deal 5 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Entwined Tremor',
    id: 'Entwined Tremor',
    cost: 8,
    effect: `
      <p>
        <b>Cast:</b> Deal 6 damage.<br/>
        If there is a spell that costs 5 <span class="aether">&AElig;</span> or more
        prepped to an adjacent breach, this deals 2 additional damage.<br/>
        If there is a spell that costs 4 <span class="aether">&AElig;</span> or less
        prepped to an adjacent breach, gain 1 charge.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'LOG',
    name: 'Volcanic Shrapnel',
    id: 'VolcanicShrapnel',
    cost: 8,
    effect: `
      <p>
        <b>Cast:</b> Deal 1 damage. Deal 1 damage. Deal 1 damage.<br/>
        You may return to your hand up to two card from your discard pile
        that cost 0 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
]

export const cards: ICard[] = [...gems, ...relics, ...spells]
