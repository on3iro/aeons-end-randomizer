import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'IndirasWeatheredOpal',
    name: "Indira's Weathered Opal",
    expansion: 'PFPromo',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      You may cast a spell in your discard pile.
      </p>
      `,
  },
  {
    id: 'SoskelsTacticalGambit',
    name: "Soskel's Tactical Gambit",
    expansion: 'PFPromo',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      While prepped, you may cast this during any player's casting phase.
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'IlyaAndKelsTourmalineFragment',
    name: "Ilya And Kel's Tourmaline Fragment",
    expansion: 'PFPromo',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Place a card from your hand into any player's hand. That player places a card from their hand into your hand.
      </p>
      `,
  },
  {
    id: 'MalastarsImperectZanite',
    name: "Malastar's Imperfect Zanite",
    expansion: 'PFPromo',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Reveal the top card of your deck. If it is a relic, gain 1 additional <span class="aether">&AElig;</span>. Then, you may place that card on the bottom of your deck.
      </p>
      `,
  },
  {
    id: 'ClaudiasKaleidoscope',
    name: "Claudia's Kaleidoscope",
    expansion: 'PFPromo',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      You may return a gem from your discard pile to your hand.
      </p>
      `,
  },
  {
    id: 'CrackedAntler',
    name: 'Cracked Antler',
    expansion: 'PFPromo',
    level: 2,
    effect: `
      <p>
      When a player focuses a III or IV breach, any ally gains an <span class="aether">&AElig;</span> token.
      </p>
      `,
  },
  {
    id: 'SoulEngine',
    name: 'Soul Engine',
    expansion: 'PFPromo',
    level: 3,
    effect: `
      <p>
      You may prep up to two additional spells that cost 1 <span class="aether">&AElig;</span> or omore to your I breach.
      </p>
      `,
  },
]
