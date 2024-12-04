import { ICard } from '../../../../aer-types/types'

export const banners: ICard[] = [
  {
    name: 'Banner of Overcharge',
    id: 'BannerOfOvercharge',
    type: 'Spell',
    cost: 0,
    expansion: 'TC',
    keywords: [],
    effect: `
      <p>
      While prepped, once per turn,
	  you may discard a card in hand. If
	  you do, the friend gains 1 charge.
	  <b>Cast:</b> Deal 1 damage.
      </p>
    `,
  },
]