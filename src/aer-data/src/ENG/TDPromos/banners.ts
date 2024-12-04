import { ICard } from '../../../../aer-types/types'

export const banners: ICard[] = [
  {
    name: 'Banner of Vitality',
    id: 'BannerOfVitality',
    type: 'Gem',
    cost: 0,
    expansion: 'TDPromo',
    keywords: [],
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
	  <span class="or">OR</span>
	  You may suffer 1 damage. If you do,
	  shuffle the friend's turn order card in the
	  discard pile into the turn order deck.
      </p>
    `,
  },
]