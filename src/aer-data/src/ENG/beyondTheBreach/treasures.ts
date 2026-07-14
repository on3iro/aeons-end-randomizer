import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'BramasEternium',
    name: "Brama's Eternium",
    expansion: 'BTB',
    level: 1,
    subtype: 'Gem',
    effect: `
		<p>Gain 1 <span class="aether">&AElig;</span>.</p>
		<p>You may suffer 1 damage. If you do, any ally gains an <span class="aether">&AElig;</span> token.</p>
      `,
  },
  {
    id: 'JantisRedirector',
    name: "Janti's Redirector",
    expansion: 'BTB',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
		  <b>Cast:</b> Deal 1 damage. Deal an additional 1 damage if this is cast from an opened III breach. Gain a charge if this is cast from an opened IV breach.
      </p>
      `,
  },
  {
    id: 'MazahaedronsEarth',
    name: "Mazahaedron's Earth",
    expansion: 'BTB',
    level: 1,
    subtype: 'Gem',
    effect: `
		<p>Gain 1 <span class="aether">&AElig;</span>.</p>
		<p>You may place the next card you gain this turn on top of any ally's discard pile. If you do, gain 1 charge.</p>
      `,
  },
  {
    id: 'RavensOculus',
    name: "Raven's Oculus",
    expansion: 'BTB',
    level: 1,
    subtype: 'Gem',
    effect: `
		<p>Gain 1 <span class="aether">&AElig;</span>.</p>
		<span class="or">OR</span>
		<p>Gain a card from the supply by losing charges equal to half its cost, rounded up.</p>
      `,
  },
  {
    id: 'RavensSeekersLight',
    name: "Raven's Seeker's Light",
    expansion: 'BTB',
    level: 1,
    subtype: 'Gem',
    effect: `
		<p>Gain 1 <span class="aether">&AElig;</span>.</p>
		<p>Reveal the top card of your deck. You may discard that card or return it to the top of your deck.</p>
      `,
  },
  {
    id: 'AbsorbentFang',
    name: 'Absorbent Fang',
    expansion: 'BTB',
    level: 2,
    effect: `
      <p>
		At the start of the game, set this next to a supply pile. Players may spend <span class="aether">&AElig;</span> to place <span class="aether">&AElig;</span> tokens on this card equal to the <span class="aether">&AElig;</span> spent. During any player's main phase, that player may remove <span class="aether">&AElig;</span> tokens from this card to gain that much <span class="aether">&AElig;</span> that can only be spent to gain cards from the supply pile this was set next to.
      </p>
      `,
  },
  {
    id: 'InfusedCradle',
    name: 'Infused Cradle',
    expansion: 'BTB',
    level: 2,
    effect: `
		<p>At the start of the game, set this next to a supply pile that costs 6 <span class="aether">&AElig;</span> or more.</p>
		<p>When a player gains a card from this supply pile, any ally gains 1 charge and an <span class="aether">&AElig;</span> token.</p>
      `,
  },
  {
    id: 'ThunderSurge',
    name: 'Thunder Surge',
    expansion: 'BTB',
    level: 2,
    effect: `
		<p>At the start of the game, set this next to any supply pile that costs 5 <span class="aether">&AElig;</span> or less.</p>
		<p>When a player gains a card from this supply pile, they deal 1 damage.</p>
		<p>When the last card in this supply pile is gained, destroyed, or developed, any player gains 3 life.</p>
      `,
  },
  {
    id: 'BalancedEssence',
    name: 'Balanced Essence',
    expansion: 'BTB',
    level: 3,
    effect: `
      <p>
		At the start of your turn, if your discard pile contains six or more cards, you may destroy a card in hand.
      </p>
      `,
  },
  {
    id: 'EternalCadence',
    name: 'Eternal Cadence',
    expansion: 'BTB',
    level: 3,
    effect: `
		<p>When your III breach is opened, deal 5 damage.</p>
		<p>When your IV breach is opened, gain 5 <span class="aether">&AElig;</span> tokens.</p>
      `,
  },
  {
    id: 'HoningGoggles',
    name: 'Honing Goggles',
    expansion: 'BTB',
    level: 3,
    effect: `
		<p>When you cast the second spell during your casting phase, deal 1 damage.</p>
		<p>At the end of your casting phase, if you cast four or more spells this turn, return a spell from your discard pile to your hand.</p>
      `,
  },
  {
    id: 'QuiliussTrophies',
    name: 'Quilius\'s Trophies',
    expansion: 'BTB',
    level: 3,
    effect: `
		<p>When you cast the second spell during your casting phase, deal 1 damage.</p>
		<p>At the end of your casting phase, if you cast four or more spells this turn, return a spell from your discard pile to your hand.</p>
      `,
  },
  {
    id: 'ThoughtSpike',
    name: 'Thought Spike',
    expansion: 'BTB',
    level: 3,
    effect: `
		<p>When you gain a card that costs 1 <span class="aether">&AElig;</span> or more, deal 1 damage.</p>
		<p>If that card costs 6 <span class="aether">&AElig;</span> or more, deal 2 additional damage.</p>
      `,
  },
  {
    id: 'LuckStone',
    name: 'Luck Stone',
    expansion: 'BTB',
    level: 3,
    effect: `
		<p>At the start of the game, place your player number token next to a supply pile.</p>
		<p>Cards from that supply pile cost you 2 less <span class="aether">&AElig;</span> to gain and 1 less <span class="aether">&AElig;</span> to to Develop.</p>
		<p>Other players cannot gain cards from this supply pile.</p>
      `,
  },
  {
    id: 'BreachAndesite',
    name: 'Breach Andesite',
    expansion: 'BTB',
    level: 4,
	subtype: 'Gem',
    effect: `
      <p>
		Gain 2 <span class="aether">&AElig;</span> and focus your closed breach with your lowest focus cost. If all your breaches are opened, gain an additional 1 Aether.png.
      </p>
      `,
  },
  {
    id: 'BrilliantSapphire',
    name: 'Brilliant Sapphire',
    expansion: 'BTB',
    level: 4,
	subtype: 'Gem',
    effect: `
		<p>Gain 3 <span class="aether">&AElig;</span>.</p>
		<p>Players collectively gain 2 charges.</p>
      `,
  },
  {
    id: 'FeedbackResonance',
    name: 'Feedback Resonance',
    expansion: 'BTB',
    level: 4,
	subtype: 'Spell',
    effect: `
		<p><b>Cast:</b> Deal 4 damage and gain a charge.</p>
		<p>Then, if you have 4 or more charges, deal 3 additional damage.</p>
      `,
  },
  {
    id: 'HarmonicRadiance',
    name: 'Harmonic Radiance',
    expansion: 'BTB',
    level: 4,
	subtype: 'Spell',
    effect: `
		<p><b>Cast:</b> Deal 6 damage.</p>
		<p>Each ally draws a card.</p>
      `,
  },
  {
    id: 'PhantasmalEcho',
    name: 'Phantasmal Echo',
    expansion: 'BTB',
    level: 4,
	subtype: 'Spell',
    effect: `
		<p><b>Cast:</b> Deal 3 damage.</p>
		<p>You may discard or destroy a card in your hand. If you do, deal additional damage equal to its cost.</p>
      `,
  },
  {
    id: 'QuantumTransmogrifier',
    name: 'Quantum Transmogrifier',
    expansion: 'BTB',
    level: 4,
	subtype: 'Relic',
    effect: `
		<p>Any player destroys a card in hand and gains a card costing up to 3 <span class="aether">&AElig;</span> more than its cost. That player places the gained card into their hand.</p>
      `,
  },
  {
    id: 'RegeneratingScythe',
    name: 'Regenerating Scythe',
    expansion: 'BTB',
    level: 4,
	subtype: 'Spell',
    effect: `
		<p><b>Cast:</b> Deal 8 damage.</p>
		<p>Gain 2 life and place this on top of any player's discard pile.</p>
      `,
  },
  {
    id: 'UntetheredHelix',
    name: 'Untethered Helix',
    expansion: 'BTB',
    level: 4,
	subtype: 'Relic',
    effect: `
		<p>Cast any player's prepped spell without discarding it. It deals 1 additional damage.</p>
      `,
  },
]
