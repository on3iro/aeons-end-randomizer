import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'RU',
    name: 'Witchglass',
    id: 'Witchglass',
    cost: 2,
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>. Any ally gains an <span class="aether">&AElig;</span> token.<br />
        You may discard this during an ally's main phase. If you do that player may <b>Conjure</b>.
      </p>
    `,
    keywords: ['conjure'],
  },
  {
    type: 'Gem',
    expansion: 'RU',
    name: 'Shimmerbead',
    id: 'Shimmerbead',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.
      </p>
      <p>
        <b>Recall:</b> Il you have activated your ability this turn, gain 1 life.
      </p>
    `,
    keywords: ['recall'],
  },
  {
    type: 'Gem',
    expansion: 'RU',
    name: 'Allaying Shell',
    id: 'AllayingShell',
    cost: 5,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
	Silence a minion.
      </p>
    `,
    keywords: ['silence'],
  },
  {
    type: 'Gem',
    expansion: 'RU',
    name: 'Pulsyrium Globe',
    id: 'PulsyriumGlobe',
    cost: 5,
    effect: `
      <p>
        Gain 3 <span class="aether">&AElig;</span>.
      </p>
      <p>
	<b>Recall:</b> Discard a card in hand. If you do, any player gains an <span class="aether">&AElig;</span> token.
      </p>
    `,
    keywords: ['recall'],
  },
  {
    type: 'Gem',
    expansion: 'RU',
    name: 'Rainbow Fluorite',
    id: 'RainbowFluorite',
    cost: 6,
    effect: `
      <p>
        Gain 3 <span class="aether">&AElig;</span>.<br />
        <span class="or">OR</span>
	Gain 2 charges.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'RU',
    name: "Aether Widget",
    id: 'AetherWidget',
    cost: 2,
    effect: `
      <p>
        Any ally may prep a spell in hand to one of their opened or closed breaches.
      </p>
      <p>
	You may discard this during any ally's main phase. If you do, that ally may cast one of their prepped spells.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'RU',
    name: 'Vim Infusor',
    id: 'VimInfusor',
    cost: 3,
    effect: `
      <p>
        Gain 1 charge.<br />
	If you have 2 life or less, repeat this effect.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'RU',
    name: 'Contingency Kit',
    id: 'ContingencyKit',
    cost: 4,
    effect: `
      <p>
        Any ally draws two cards and then discards one card.
        <span class="or">OR</span>
	Focus any player's breach. If you have 2 life or less, do both.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'RU',
    name: 'Ghost Harness',
    id: 'GhostHarness',
    cost: 6,
    effect: `
      <p>
        Each player focuses their closed breach with the lowest cost.
        <span class="or">OR</span>
	Each player may <b>Conjure</b>.
      </p>
    `,
    keywords: ['conjure'],
  },
  {
    type: 'Relic',
    expansion: 'RU',
    name: 'Element Convertor',
    id: 'ElementConvertor',
    cost: 6,
    effect: `
      <p>
        The players collectively destroy up to two gems from their hands or discard piles.<br />
	Reveal the top card of the turn order deck. If it is a player card, that player gains an <span class="aether">&AElig;</span> token.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Magnify',
    id: 'Magnify',
    cost: 2,
    effect: `
      <p>
        While prepped, an additional spell that costs 2 <span class="aether">&AElig;</span> or less may be prepped to this brech.<br />
        <b>Cast:</b> Deal 1 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Dawn Barrage',
    id: 'DawnBarrage',
    cost: 3,
    effect: `
      <p>
        <b>Cast:</b> Deal 1 damage.<br />
        Other spells you cast during your casting phase this turn deal an additional 1 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Stupefy',
    id: 'Stupefy',
    cost: 3,
    effect: `
      <p>
        <b>Cast:</b> Deal 2 damage.
      </p>
      <p>
        <b>Recall:</b> You may discard a card to silence a minion.
      </p>
    `,
    keywords: ['recall', 'silence'],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Force Bubble',
    id: 'ForceBubble',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 2 damage.
        <span class="or">OR</span>
        <b>Cast:</b> Return this to your hand. You may prep a spell from your hand that is not named Force Bubble.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Accelerating Field',
    id: 'AcceleratingField',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br />
	If this is the first time you have cast an Accelerating Field this turn, you may reveal the top four cards of your deck. You may place any cards named Accelerating Field revealed this way into your hand.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Harmonize',
    id: 'Harmonize',
    cost: 5,
    effect: `
      <p>
        You may discard this card from your hand when any ally casts a spell to have that spell deal an additional 2 damage.
      </p>
      <p>
        <b>Cast:</b> Deal 4 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Phantasmagoria',
    id: 'Phantasmagoria',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.
      </p>
      <p>
        <b>Recall:</b> <b>Conjure</b>.
      </p>
    `,
    keywords: ['recall', 'conjure'],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Rune Tutor',
    id: 'RuneTutor',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Gain a card that costs 6 <span class="aether">&AElig;</span> or less from any supply pile and place it on top of your deck.
        <span class="or">OR</span>
        <b>Cast:</b> Deal 4 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Bestowing Light',
    id: 'BestowingLight',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 5 damage.<br />
	Any ally gains an <span class="aether">&AElig;</span> token for each spell prepped in an adjacent breach.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RU',
    name: 'Reverse Gravity',
    id: 'ReverseGravity',
    cost: 7,
    effect: `
      <p>
        <b>Cast:</b> Deal 6 damage.
      </p>
      <p>
        When this is placed into your discard pile, you may place this on the botton of your discard pile.
      </p>
    `,
    keywords: [],
  },
]
