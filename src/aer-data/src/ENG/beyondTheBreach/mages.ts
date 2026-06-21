import { Mage } from '../../../../aer-types/types'
 
export const mages: Mage[] = [
 {
    expansion: 'BTB',
    name: 'Indira',
    id: 'IndiraBTB',
    mageTitle: 'Light Caller',
    abilityName: `Pyromancer's Guile`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Cast a spell in any ally's hand without discarding it. Then, cast it again.</p>
		<span class="or">OR</span>
		<p>Gain 5 <span class="aether">&AElig;</span> that can only be used to gain a spell.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Fused Opal',
        expansion: 'BTB',
        id: 'FusedOpal',
        cost: 0,
        effect: `
		<p>
			Gain 1 <span class="aether">&AElig;</span>.</p>
			<span class="or">OR</span>
			<p>Conjure. 
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'BTB',
    name: 'Nook',
    id: 'NookBTB',
    mageTitle: 'The Lost',
    abilityName: `Rupture Time`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>
			Place up to three cards with Crystal or Spark in their name in your hand or discard pile into the Swap zone. Gain a card from the Swap zone with Crystal or Spark in its name.
		</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Superior Crystal',
        expansion: 'BTB',
        id: 'SuperiorCrystal',
        cost: 0,
        effect: `
		<p>
			Gain 3 <span class="aether">&AElig;</span> and swap this for Infused Crystal.</p>
			<span class="or">OR</span>
			<p>Gain 1 <span class="aether">&AElig;</span>.
		</p>`,
        keywords: [],
      },
	  {
        type: 'Spell',
        name: 'Superior Spark',
        expansion: 'BTB',
        id: 'SuperiorSpark',
        cost: 0,
        effect: `
		<p>
			<b>Cast:</b> Deal 3 damage and swap this for Infused Spark.</p>
			<span class="or">OR</span>
			<p><b>Cast:</b> Deal 1 damage.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'BTB',
    name: 'Stake',
    id: 'Stake',
    mageTitle: 'The Professor',
    abilityName: `Tinker`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Return a spell in your discard pile to hand. Until end of turn, you may prep any number of spells to your breach.</p>
		<span class="or">OR</span>
		<p>Choose a set-aside breach upgrade. Spend Knowledge equal to its cost. Then, add that card and its effect to the Prototype breach.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Sagestone',
        expansion: 'BTB',
        id: 'Sagestone',
        cost: 0,
        effect: `
		<p>
			Gain 1 <span class="aether">&AElig;</span>.</p>
			<p>You may lose 1 Knowledge. If you do, gain a charge. 
		</p>`,
        keywords: [],
      },
	  {
        type: 'Spell',
        name: 'Piercing Light',
        expansion: 'BTB',
        id: 'PiercingLight',
        cost: 0,
        effect: `
		<p>
			<b>Cast:</b> Deal 1 damage. If Stake has upgraded his Prototype breach at least once this game, you may destroy this.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 8,
  },
  {
    expansion: 'BTB',
    name: 'Wolf',
    id: 'Wolf',
    mageTitle: 'The Strike Leader',
    abilityName: `Aegis of Hope`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Lose all of your doom.<br/>Any ally draws a card. Repeat this for each doom lost this way. </p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Doomstone',
        expansion: 'BTB',
        id: 'Doomstone',
        cost: 0,
        effect: `
		<p>
			Gain 3 <span class="aether">&AElig;</span>. Wolf gains 2 doom.</p>
			<span class="or">OR</span>
			<p>Wolf loses 1 doom.
		</p>`,
        keywords: [],
      },
	  {
        type: 'Spell',
        name: 'Doom Howl',
        expansion: 'BTB',
        id: 'DoomHowl',
        cost: 0,
        effect: `
		<p>
			<b>Cast:</b> Deal 3 damage. Wolf gains 2 doom.</p>
			<span class="or">OR</span>
			<p><b>Cast:</b> Wolf loses 1 doom.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'BTB',
    name: 'Dezmodia',
    id: 'DezmodiaBTB',
    mageTitle: 'The Unscarred',
    abilityName: `Pilfer the Past`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Reveal the top two cards of Dezmodia's Stash and choose one to put into play and one to put on the bottom of that deck.</p>
		<span class="or">OR</span>
		<p>Any player gains 3 life.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Vision Shard',
        expansion: 'BTB',
        id: 'VisionShard',
        cost: 0,
        effect: `
		<p>
			Gain 1 <span class="aether">&AElig;</span>.
			<span class="or">OR</span>
			Reveal the top two cards of Dezmodia's Stash. Return each card either to the top or bottom of that deck. 
		</p>`,
        keywords: [],
      },
	  {
        type: 'Gem',
        name: 'Energized Stone',
        expansion: 'BTB',
        id: 'EnergizedStone',
        cost: 0,
        effect: `
		<p>
			Gain a charge.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'BTB',
    name: 'Remnant',
    id: 'RemnantBTB',
    mageTitle: 'What Remains',
    abilityName: `Rebuild Matter`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Return up to two spells from your discard pile to your hand. You may prep one additional spell to your III and IV breaches this turn.</p>
		<span class="or">OR</span>
		<p>Gravehold gains 4 life.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Violet Shard',
        expansion: 'BTB',
        id: 'VioletShard',
        cost: 0,
        effect: `
		<p>
			Gain 1 <span class="aether">&AElig;</span>.</p>
			<p>Any ally may discard a card in hand. If they do, gain 2 <span class="aether">&AElig;</span> that can only be used to focus or open a breach.
		</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
 ]
 