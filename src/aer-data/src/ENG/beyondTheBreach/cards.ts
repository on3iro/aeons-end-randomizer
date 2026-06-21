import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'BTB',
    name: 'Atomized Ash',
    id: 'AtomizedAsh',
    cost: 5,
    effect: `
		<p>When you gain this, gain 1 pulse token.</p>
		<p>Gain 2 <span class="aether">&AElig;</span>.</p>
		<p>Recall: Lose 1 pulse token to deal 1 damage.</p>
      `,
    keywords: ['pulse token', 'recall'],
  },
  {
    type: 'Gem',
    expansion: 'BTB',
    name: 'Hewn Gravitite',
    id: 'HewnGravitite',
    cost: 3,
    effect: `
		<p>Gain 2 <span class="aether">&AElig;</span>. You may lose 2 pulse tokens. If you do, cast any player's prepped spell.</p>
		<p>Recall: Gain 1 pulse token.</p>
      `,
    keywords: ['pulse token', 'recall'],
  },
  {
    type: 'Gem',
    expansion: 'BTB',
    name: 'Irradiax Lump',
    id: 'IrradiaxLump',
    cost: 6,
    effect: `
		<p>Gain 3 <span class="aether">&AElig;</span>.</p>
		<p>Gain two trinkets. Place one of the gained trinkets into your hand.</p>
      `,
    keywords: ['trinket'],
  },
  {
    type: 'Gem',
    expansion: 'BTB',
    name: 'Luminous Facet',
    id: 'LuminousFacet',
    cost: 4,
    effect: `
		<p>Gain 3 <span class="aether">&AElig;</span>.</p>
		<p>Gain a trinket.</p>
      `,
    keywords: ['trinket'],
  },
  {
    type: 'Gem',
    expansion: 'BTB',
    name: 'Phosphor Nugget',
    id: 'PhosphorNugget',
    cost: 4,
    effect: `
		<p>Gain 2 <span class="aether">&AElig;</span>.</p>
		<p>Recall: Any ally gains an <span class="aether">&AElig;</span> token.</p>
      `,
    keywords: ['recall', 'aether token'],
  },
  {
    type: 'Relic',
    expansion: 'BTB',
    name: 'Chronoid',
    id: 'Chronoid',
    cost: 5,
    effect: `
		<p>Any ally gains 3 <span class="aether">&AElig;</span> tokens.</p>
		<p>Recall: Look at the top card of the turn order deck. You may place that card on the bottom or the top of the turn order deck.</p>
      `,
    keywords: ['recall', 'aether token'],
  },
  {
    type: 'Relic',
    expansion: 'BTB',
    name: 'Omen Loop',
    id: 'OmenLoop',
    cost: 3,
	developCost: 2,
    effect: `
		<p>When you Develop this, gain 2 pulse tokens.</p>
		<p>Destroy this. Reveal the turn order deck. Return it in any order. You may lose 1 pulse token. If you do, any ally draws a card.</p>
      `,
    keywords: ['develop', 'pulse token'],
  },
  {
    type: 'Relic',
    expansion: 'BTB',
    name: 'Rift Ring',
    id: 'RiftRing',
    cost: 5,
    effect: `
		<p>Gain 2 charges. Gain two trinkets and place them on top of your deck.</p>
		<span class="or">OR</span>
		<p>Destroy this. If you do, gain 2 life.</p>
      `,
    keywords: ['trinket'],
  },
  {
    type: 'Relic',
    expansion: 'BTB',
    name: 'Tearstone Amulet',
    id: 'TearstoneAmulet',
    cost: 4,
	developCost: 3,
    effect: `
		<p>When you Develop this, gain 1 charge.</p>
		<p>Attach this to any player's breach.</p>
		<p>When a player casts a spell from this breach, any ally may Conjure.</p>
      `,
    keywords: ['develop', 'attach', 'conjure'],
  },
  {
    type: 'Relic',
    expansion: 'BTB',
    name: 'Thought Totem',
    id: 'ThoughtTotem',
    cost: 7,
	developCost: 4,
    effect: `
		<p>When you Develop this, any ally gains 2 <span class="aether">&AElig;</span> tokens.</p>
		<p>Gain 2 charges. Reveal the top three cards of your deck. Discard any number of them. Return the rest to the top of your deck in any order.</p>
      `,
    keywords: ['develop', 'aether token'],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Deadly Accord',
    id: 'DeadlyAccord',
    cost: 3,
	developCost: 2,
    effect: `
		<p><b>Cast:</b> Deal 2 damage.</p>
		<p>Any ally may discard a Deadly Accord in hand and draw a card. If they do, deal 1 additional damage and you may destroy a card in hand.</p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Descent of Destruction',
    id: 'DescentOfDestruction',
    cost: 8,
    effect: `
		<p>While prepped, once per turn during your main phase, you may Conjure to an opened or closed breach.</p>
		<p><b>Cast:</b> Deal 4 damage. Spells you cast this turn that cost 2 <span class="aether">&AElig;</span> or less deal 2 additional damage.</p>
      `,
    keywords: ['conjure'],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Ember Gale',
    id: 'EmberGale',
    cost: 5,
    effect: `
		<p><b>Cast:</b> Deal 4 damage.</p>
		<p>Each ally who has six or more cards in their discard pile focuses one of their breaches.</p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Eternity\'s Echo',
    id: 'EternitysEcho',
    cost: 7,
    effect: `
		<p><b>Cast:</b> Deal 3 damage.</p>
		<p>Recall: You may cast one of your prepped spells. Conjure.</p>
      `,
    keywords: ['recall', 'conjure'],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Frostfire Maelstrom',
    id: 'FrostfireMaelstrom',
    cost: 4,
    effect: `
		<p>While prepped, once per turn during your main phase, gain 1 pulse token.</p>
		<p><b>Cast:</b> Deal 2 damage divided however you choose among enemies. Lose any number of pulse tokens. Deal 1 additional damage for each pulse token lost this way.</p>
      `,
    keywords: ['pulse token'],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Inundate',
    id: 'Inundate',
    cost: 8,
    effect: `
		<p><b>Cast:</b> Deal 6 damage.</p>
		<p>Any ally may discard a card in hand that costs 4 <span class="aether">&AElig;</span> or more and draw a card. If they do, deal 4 damage.</p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Jeweled Shrapnel',
    id: 'JeweledShrapnel',
    cost: 4,
    effect: `
		<p><b>Cast:</b> Deal 4 damage.</p>
		<p>Gain two trinkets and place them on top of your deck. You may destroy a card in hand.</p>
      `,
    keywords: ['trinket'],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Megaflux Slice',
    id: 'MegafluxSlice',
    cost: 4,
    effect: `
		<p><b>Cast:</b> Deal 2 damage. Gain 1 pulse token.</p>
		<span class="or">OR</span>
		<p>You may lose 3 pulse tokens. If you do, deal 7 damage.</p>
      `,
    keywords: ['pulse token'],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Stonefury Eruption',
    id: 'StonefuryEruption',
    cost: 5,
    effect: `
		<p><b>Cast:</b> Deal 4 damage.</p>
		<p>Each ally who has a Stonefury Eruption in their discard pile gains 1 charge.</p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Vitrification',
    id: 'Vitrification',
    cost: 6,
    effect: `
		<p><b>Cast:</b> Deal 8 damage.</p>
		<p>Gain three trinkets and place them on top of your deck.</p>
      `,
    keywords: ['trinket'],
  },
  {
    type: 'Spell',
    expansion: 'BTB',
    name: 'Worldshift',
    id: 'Worldshift',
    cost: 6,
    effect: `
		<p>While prepped, once per turn during your main phase you may gain 1 pulse token.</p>
		<p><b>Cast:</b> Deal 5 damage. You may lose 2 pulse tokens. If you do, focus any ally's breach.</p>
      `,
    keywords: ['pulse token'],
  },
]
