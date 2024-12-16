import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'IW',
    name: 'Inco',
    id: 'Inco',
    mageTitle: 'Child Of Green',
    abilityName: `Massive Growth`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Cast any number of Rose Thorns prepped by any number of players. 
        Those spells deal 2 additional damage.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Verdant Emerald',
        expansion: 'IW',
        id: 'VerdantEmerald',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Gain a Rose Thorn from the Rose Thorn deck. 
            Place that card on top of any player's discard pile.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'IW',
    name: 'Razra',
    id: 'Razra',
    mageTitle: 'The Trainer',
    abilityName: `Train Rip`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
        <p>Destroy a card with "Rip" in its name in your hand. 
        Gain a card with "Rip" in its name from the personal upgrade deck 
        that costs 3 <span class="aether">&AElig;</span> more than the destroyed card 
        and place that card into your hand.
        <span class="or">OR</span>
        Return to your hand all cards with "Rip" in their name 
        you have played this turn or are in your discard pile.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Rip, Help!',
        expansion: 'IW',
        id: 'RipHelp',
        cost: 0,
        effect: `<p>Gain 1 charge.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
]
