import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'AB',
    name: 'Spirit Jewel',
    id: 'SpiritJewel',
    cost: 4,
    effect: `
      <p>
	  Gain 2 <span class="aether">&AElig;</span>. You may have Gravehold
	  suffer 1 damage. If you do,
	  gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AB',
    name: 'Pulsing Garnet',
    id: 'PulsingGarnet',
    cost: 5,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
	  You may have an enemy gain 2 life.
	  If you do, any ally draws a card.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AB',
    name: 'Whisper of Amethyst',
    id: 'WhisperofAmethyst',
    cost: 6,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
	  You may discard the top card
	  of the nemesis deck. If you do,
	  any ally gains 2 <span class="aether">&AElig;</span> tokens.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AB',
    name: 'Fate\'s Edge',
    id: 'FatesEdge',
    cost: 6,
    effect: `
      <p>
      Any player and Gravehold each gain 1 life.<br/>
	  <span class="or">OR</span><br/>
	  Destroy this. Place the bottom two cards
	  of the nemesis deck on top of the nemesis
	  deck. Then, shuffle any player's turn
	  order card into the turn order deck.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AB',
    name: 'Bottled Demon',
    id: 'BottledDemon',
    cost: 2,
    effect: `
      <p>
      Gain 1 charge. You may have
	  an enemy gain 2 life. If you do,
	  gain an additional 1 charge.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AB',
    name: 'All-Out Barrage',
    id: 'AllOutBarrage',
    cost: 5,
    effect: `
      <p>
      <b>Cast:</b>Deal 4 damage. You may place
	  the bottom card of the nemesis deck
	  on top of the nemesis deck. If you
	  do, deal an additional 3 damage.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AB',
    name: 'Void Grasp',
    id: 'VoidGrasp',
    cost: 4,
    effect: `
      <p>
      While prepped, once per turn during
	  your main phase, you may have a
	  minion from the nemesis deck gain
	  a shield token. If you do, gain 3 <span class="aether">&AElig;</span>.<br/>
	  <b>Cast:</b> Deal 3 damage.
      </p>
      `,
    keywords: [],
  },
]
