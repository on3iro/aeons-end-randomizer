import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'AurensRustedAutomaton',
    name: "Auren's Rusted Automaton",
    expansion: 'TDPromo',
    level: 1,
    subtype: 'Spell',
    effect: `
	<p>
       <b>Cast:</b> Deal 1 damage.<br/>
	   If you've defeated a minion from the nemesis
	   deck this turn, you may destroy this and gain
	   a relic that costs up to 5 <span class="aether">&AElig;</span> from the supply.
      </p>
      `,
  },
  {
    id: 'BaylisBurningAura',
    name: "Bayli's Burning Aura",
    expansion: 'TDPromo',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Prep a spell from your hand.
      </p>
      `,
  },
  {
    id: 'DoriansSpatialDistortion',
    name: "Dorian's Spatial Distortion",
    expansion: 'TDPromo',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
	  While prepped, you may Develop a
	  card in the supply or Develop zone
	  that does not have a Develop cost
	  for half of that card's cost rounded up.
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
    {
    id: 'KirisPhoenixClaw',
    name: "Kiri's Phoenix Claw",
    expansion: 'TDPromo',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
	  You may discard three gems in hand
	  to destroy this and gain a spell from
	  the supply that costs 4 <span class="aether">&AElig;</span> or less.
      </p>
      `,
  },
    {
    id: 'OnasDestroyedGeode',
    name: "Ona's Destroyed Geode",
    expansion: 'TDPromo',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
	  Gain 1 <span class="aether">&AElig;</span>.<br/>
	  The next time you use your ability
	  this turn, gain a spell from the
	  supply that costs 5 <span class="aether">&AElig;</span> or less.
      </p>
      `,
  },
  {
    id: 'Doublefang',
    name: 'Doublefang',
    expansion: 'TDPromo',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this
	  next to a supply pile whose cards
	  have no Develop cost. Those
	  cards can be Developed for
	  half of their cost rounded up.
      </p>
      `,
  },
  {
    id: 'LookingGlass',
    name: 'Looking Glass',
    expansion: 'TDPromo',
    level: 2,
    effect: `
      <p>
      When a player focuses a breach,
	  reveal the top card of the turn
	  order deck. You may place the
	  revealed card on the bottom.
      </p>
      `,
  },
  {
    id: 'StormOrb',
    name: 'Storm Orb',
    expansion: 'TDPromo',
    level: 3,
    effect: `
      <p>
      At the end of your turn, if you
	  have no closed breaches, place
	  5 elemental tokens distributed
	  among any number of enemies.
	  Then, destroy this treasure.
      </p>
      `,
  },
  {
    id: 'FleshGauntlets',
    name: 'Flesh Gauntlets',
    expansion: 'TDPromo',
    level: 3,
    effect: `
      <p>
     At the start of your turn, gain 2 charges.<br/>
	 After you finish resolving
	 your ability, suffer 1 damage.<br/>
	 At the end of your turn, lose all of your charges.
      </p>
      `,
  },
  {
    id: 'InfinityBracer',
    name: 'Infinity Bracer',
    expansion: 'TDPromo',
    level: 3,
    effect: `
      <p>
     At the start of your first turn of the
	 game, you may prep any number
	 of spells in hand to your opened
	 or closed breaches. Draw a card
	 for each spell prepped this way.
      </p>
      `,
  },
]