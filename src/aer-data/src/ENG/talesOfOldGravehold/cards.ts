import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Relic',
    expansion: 'TOG',
    name: 'Blackened Orb',
    id: 'BlackenedOrd',
    cost: 4,
    effect: `
      <p>
      Cast any player's prepped spell without discarding
	  it. That spell deals 2 less damage, minimum 0.<br/>
	  <span class="or">OR</span><br/>
	  Cast any player's prepped spell and destroy
	  it. That spell deals 1 additional damage.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TOG',
    name: 'Spiritual Infusion',
    id: 'SpiritualInfusion',
    cost: 4,
    effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.
	  If you've dealt 7 or more damage
	  this turn, Gravehold gains 1 life.
      </p>
      `,
    keywords: [],
  },
]
