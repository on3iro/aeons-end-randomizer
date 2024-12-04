import { ICard } from '../../../../aer-types/types'

export const banners: ICard[] = [
  {
    name: 'Banner of Chronicles',
    id: 'BannerOfChronicles',
    type: 'Gem',
    cost: 0,
    expansion: 'ATD',
    keywords: [],
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      The foe loses 1 charge.
      </p>
    `,
  },
  {
    name: 'Banner of Energy',
    id: 'BannerOfEnergy',
    type: 'Gem',
    cost: 0,
    expansion: 'ATD',
    keywords: [],
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      You may discard a card in hand that costs 2 <span class="aether">&AElig;</span> or more.
      If you do, the friend gains 2 charges.
      </p>
    `,
  },
  {
    name: 'Banner of Infusion',
    id: 'BannerOfInfusion',
    type: 'Gem',
    cost: 0,
    expansion: 'ATD',
    keywords: [],
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      Any player loses 1 charge. If they do, the friend gains 2 charges.
      </p>
    `,
  },
  {
    name: 'Banner of Sagas',
    id: 'BannerOfSagas',
    type: 'Gem',
    cost: 0,
    expansion: 'ATD',
    keywords: [],
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      The friend gains 1 charge.
      </p>
    `,
  },
  {
    name: 'Banner of Siphon',
    id: 'BannerOfSiphon',
    type: 'Spell',
    cost: 0,
    expansion: 'ATD',
    keywords: [],
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.
      <span class="or">OR</span>
      <b>Cast:</b> The foe loses 1 charge.
      </p>
    `,
  },
  {
    name: 'Banner of Volt',
    id: 'BannerOfVolt',
    type: 'Spell',
    cost: 0,
    expansion: 'ATD',
    keywords: [],
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.
      <span class="or">OR</span>
      <b>Cast:</b> The friend gains 1 charge.
      </p>
    `,
  },
]