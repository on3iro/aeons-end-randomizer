import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'IndirasAetherialGlow',
    name: "Indira's Aetherial Glow",
    expansion: 'EVO',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      While prepped, once per each player's turn, you may discard a spell in hand to have that player gain 1 <span class="aether">&AElig;</span>.
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'NooksMechanek',
    name: "Nook's Mechanek",
    expansion: 'EVO',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
        <span class="or">OR</span>
      Focus one of your breaches. Repeat this once. Then, destroy this card and gain a Crystal.
      </p>
      `,
  },
  {
    id: 'ArachnosCobwebs',
    name: "Arachnos' Cobwebs",
    expansion: 'EVO',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      While prepped, when you gain a card from a supply pile that costs 5 <span class="aether">&AElig;</span> or more, gain 1 charge.<br/>
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'FossilizedFeather',
    name: 'Fossilized Feather',
    expansion: 'EVO',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a relic or spell supply pile that costs 4 <span class="aether">&AElig;</span> or less.
      When a player opens a breach, any player may gain a card from this supply pile.
      </p>
      `,
  },
  {
    id: 'PortableFurnace',
    name: 'Portable Furnace',
    expansion: 'EVO',
    level: 3,
    effect: `
      <p>
      When you cast a spell that costs 0 <span class="aether">&AElig;</span>, you may destroy it.
      </p>
      `,
  },
]
