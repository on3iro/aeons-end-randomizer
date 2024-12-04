import { ICard } from '../../../../aer-types/types'

export const banners: ICard[] = [
  {
    name: 'Banner of Transference',
    id: 'BannerOfTransference',
    type: 'Gem',
    cost: 0,
    expansion: 'AB',
    keywords: [],
    effect: `
      <p>
     Gain 1 <span class="aether">&AElig;</span>.
	 <span class="or">OR</span>
	 You may suffer 1 damage. If you
	 do, the friend gains 2 charges.
      </p>
    `,
  },
]