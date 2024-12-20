import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'OD',
    name: 'Indira',
    id: 'Indira',
    mageTitle: 'Breach Apprentice',
    abilityName: `Pyromancer's Guile`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Cast any number of spells in hand. Those spells each 
        deal 1 additional damage.</p>
        <p>You may destroy a card in your discard pile.</p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Twin Opal',
        expansion: 'OD',
        id: 'TwinOpal',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              You may cast a spell in hand.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'OD',
    name: 'Remnant',
    id: 'Remnant',
    mageTitle: 'Aethereal Entity',
    abilityName: `Ephemera Masque`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Any ally returns two cards in their discard pile to their hand.
        <span class="or">OR</span>
        Gravehold gains 5 life.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Void Shard',
        expansion: 'OD',
        id: 'VoidShard',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              Gain an additional 1 <span class="aether">&AElig;</span> that can only 
              be used to focus or open a breach.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
