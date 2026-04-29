import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'QuiliussBackstab',
    name: "Quilius's Backstab",
    expansion: 'TR',
    level: 1,
    subtype: 'Spell',
    effect: `
	<p>
       <b>Cast:</b> Deal 2 damage to a minion.<br/>
      <span class="or">OR</span><br/>
	  <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'ThraxirsInfuser',
    name: "Thraxir's Infuser",
    expansion: 'TR',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      During any player's turn, when that player
	  focuses or opens a breach, you may discard this.
	  If you do, gain 2 <span class="aether">&AElig;</span> tokens.
	  <br/>
	  Gain 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'AncientArchive',
    name: 'Ancient Archive',
    expansion: 'TR',
    level: 2,
    effect: `
      <p>
	  At the start of the game and whenever the last card of a supply pile is gained, developed, or destroyed,
	  add 3 power tokens to this. Once per turn during any player's main phase, that player may
	  remove one power token from this card to focus their closed breach with the lowest focus cost
	  or remove 2 power tokens from this card to place the next card they gain into their hand.
      </p>
      `,
  },
  {
    id: 'RelayAmplifier',
    name: 'Relay Amplifier',
    expansion: 'TR',
    level: 2,
    effect: `
      <p>
      At the start of the game, set
	  this next to a gem supply pile.
	  When a player plays a gem
	  from that supply pile, any ally
	  may discard a copy of that gem
	  in their hand to gain 2 <span class="aether">&AElig;</span>
	  tokens and draw a card.
      </p>
      `,
  },
  {
    id: 'LeisansBook',
    name: 'Leisan\'s Book',
    expansion: 'TR',
    level: 3,
    effect: `
      <p>
      The first time you use your ability
	  this game, gain any card from
	  the supply and place it into your
	  hand. Then, destroy this treasure.
      </p>
      `,
  },
  {
    id: 'TetheredBracers',
    name: 'Tethered Bracers',
    expansion: 'TR',
    level: 3,
    effect: `
      <p>
     At the start of the game, choose an ally.
	 At the end of your turn, if that ally has
	 two or more prepped spells, draw a card.
      </p>
      `,
  },
]
