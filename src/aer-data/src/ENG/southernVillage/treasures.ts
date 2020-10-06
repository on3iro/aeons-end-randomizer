import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'IncosSpreadingEmerald',
    name: "Inco's Spreading Emerald",
    expansion: 'SV',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
        The next time you gain a card that costs 3 <span class="aether">&AElig;</span> 
        or less this turn, any ally gains a copy of that card from the supply.
      </p>
    `,
  },
  {
    id: 'LostsForgedCrystal',
    name: "Lost's Forged Crystal",
    expansion: 'SV',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
        <span class="hint">(When the game starts, add a Crystal to your discard pile.)</span><br />
        Gain 2 <span class="aether">&AElig;</span>.
      </p>
    `,
  },
  {
    id: 'OnyxElixir',
    name: 'Onyx Elixir',
    expansion: 'SV',
    level: 2,
    effect: `
      <p>
        At the start of the game, set this next to a supply pile that costs 
        7 <span class="aether">&AElig;</span> or more. When a player gains a card 
        from that supply pile, that player gains 2 life.
      </p>
    `,
  },
  {
    id: 'AshenRib',
    name: 'Ashen Rib',
    expansion: 'SV',
    level: 2,
    effect: `
      <p>
        Once per turn after a player plays their second relic, any ally draws a card.
      </p>
    `,
  },
  {
    id: 'MassacreHelm',
    name: 'Massacre Helm',
    expansion: 'SV',
    level: 3,
    effect: `
      <p>
        When you cast three or more spells during your casting phase, deal 3 damage.
      </p>
    `,
  },
  {
    id: 'CloakOfWisdom',
    name: 'Cloak Of Wisdom',
    expansion: 'SV',
    level: 3,
    effect: `
      <p>
        At the start of tyour main phase, if there are five or more cards in your 
        discard pile, focus one of your closed breaches.
      </p>
    `,
  },
]
