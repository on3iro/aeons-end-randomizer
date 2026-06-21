import { ICard } from '../../../../aer-types/types'

export const banners: ICard[] = [
  {
    name: 'Banner of Courage',
    id: 'BannerOfCourage',
    type: 'Spell',
    cost: 0,
    expansion: 'BTB',
    keywords: [],
    effect: `
      <p><b>Cast:</b> Deal 1 damage.</p>
	  <p>If this dealt damage to the nemesis, the friend gains 1 charge.</p>
    `,
  },
  {
    name: 'Banner of Insight',
    id: 'BannerOfInsight',
    type: 'Gem',
    cost: 0,
    expansion: 'BTB',
    keywords: [],
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      You may discard the top card of the friend's deck. You may discard the top card of the foe's deck.
      </p>
    `,
  },
  {
    name: 'Banner of Schemes',
    id: 'BannerOfSchemes',
    type: 'Spell',
    cost: 0,
    expansion: 'BTB',
    keywords: [],
    effect: `
      <p>
      <p><b>Cast:</b> Deal 1 damage.</p>
      <span class="or">OR</span>
      <p><b>Cast:</b> You may place a card in hand on top of your deck. If you do, the friend gains 2 charges.</p>
    `,
  },
  {
    name: 'Banner of Unity',
    id: 'BannerOfUnity',
    type: 'Gem',
    cost: 0,
    expansion: 'BTB',
    keywords: [],
    effect: `
      <p>Gain 1 <span class="aether">&AElig;</span>.</p>
	  <p>If the friend has 1 charge or less, the friend gains 1 charge.</p>
    `,
  },
  {
    name: 'Banner of Valor',
    id: 'BannerOfValor',
    type: 'Gem',
    cost: 0,
    expansion: 'BTB',
    keywords: [],
    effect: `
      <p>Gain 1 <span class="aether">&AElig;</span>.</p>
	  <span class="or">OR</span>
      <p>The friend gains 2 charges. The foe gains 1 charge.</p>
    `,
  },
  {
    name: 'Banner of Vigilance',
    id: 'BannerOfVigilance',
    type: 'Gem',
    cost: 0,
    expansion: 'BTB',
    keywords: [],
    effect: `
		<p>Gain 1 <span class="aether">&AElig;</span>.</p>
		<p>You may gain a trinket and place it on top of your deck. If you do, the friend gains 1 charge.</p>
    `,
  },
]