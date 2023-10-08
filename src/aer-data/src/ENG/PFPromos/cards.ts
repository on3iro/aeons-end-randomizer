import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'PFPromo',
    name: 'Citrine Shrapnel',
    id: 'CitrineShrapnel',
    cost: 3,
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span> for each copy of this card in the Develop zone.
        <span class="or">OR</span>
      Develop a Citrine Shrapnel.
      Develop cost: 3
      </p>
      `,
    keywords: ['develop'],
  },
  {
    type: 'Relic',
    expansion: 'PFPromo',
    name: 'Cataclysm Seed',
    id: 'CataclysmSeed',
    cost: 7,
    effect: `
      <p>
      Gain a charge
        <span class="or">OR</span>
      Destroy this. Each player may destroy any number of cards in hand.
      </p>
      `,
    keywords: [],
  },
]
