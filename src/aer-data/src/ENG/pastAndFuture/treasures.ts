import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'IncosCarnivorousSunflower',
    name: "Inco's Carnivours Sunflower",
    expansion: 'PAF',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Spend 1 <span class="aether">&AElig;</span> to destroy a card in your hand.
      </p>
      `,
  },
  {
    id: 'GygarsRisingTide',
    name: "Gygar's Rising Tide",
    expansion: 'PAF',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      When you prep this, gain 1 <span class="aether">&AElig;</span>.
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'ThraxirsShatteredQuartz',
    name: "Thraxir's Shattered Quartz",
    expansion: 'PAF',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
     If you have focused or opened a breach this turn, you may discard a card in hand to gain a spell that costs 4 <span class="aether"> or less from the supply.
      </p>
      `,
  },
  {
    id: 'DezmodiasVoidspark',
    name: "Dezmodia's Voidspark",
    expansion: 'PAF',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      While prepped, an additional spell may be prepped to this breach.
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'YanMagdasEternalEye',
    name: "Yan Magda's Eternal Eye",
    expansion: 'PAF',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      While prepped, when you open a breach during your turn, deal 3 damage.
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'MoltenGold',
    name: 'Molten Gold',
    expansion: 'PAF',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a supply pile that costs 7 <span class="aether">&AElig;</span> or more.
      When a player gains a card from that supply pile, Gravehold gains 2 life.
      </p>
      `,
  },
  {
    id: 'ClockworkSpindle',
    name: 'Clockwork Spindle',
    expansion: 'PAF',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a supply pile that costs 4
      <span class="aether">&AElig;</span> or more.
      When a player gains a card from this supply pile, any ally gains an <span class="aether">&AElig;</span> token.
      </p>
      `,
  },
  {
    id: 'BlackenedClaw',
    name: 'Blackened Claw',
    expansion: 'PAF',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a supply pile that costs 4
      <span class="aether">&AElig;</span> or more.
      When a player gains a card from this supply pile, they silence a minion.
      </p>
      `,
  },
  {
    id: 'RewindPendant',
    name: 'Rewind Pendant',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      Before you draw cards during your draw phase, you may return a relic or spell from your discard pile to your hand.
      </p>
      `,
  },
  {
    id: 'AccelerationStaff',
    name: 'Acceleration Staff',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      When you gain a spell that costs 4 <span class="aether">&AElig;</span> or
      more, focus your closed breach with the lowest focus cost.
      </p>
      `,
  },
  {
    id: 'CurrentConductor',
    name: 'Current Conductor',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      At the beginning of your turn, if you have three or more opened breaches, gain 1 charge.
      </p>
      `,
  },
  {
    id: 'VolatileReagent',
    name: 'Volatile Reagent',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      Once per turn, when you cast a spell that costs 6 <span class="aether">&AElig;</span> or more, you may destroy a card in your discard pile.
      </p>
      `,
  },
  {
    id: 'BeadedCrown',
    name: 'Beaded Crown',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      At the start of your main phase, if you have three cards that cost 4 <span class="aether">&AElig;</span> or more in your hand, gain 2 charges.
      </p>
      `,
  },
  {
    id: 'XaxossAetherSiphon',
    name: "Xaxos's Aether Siphon",
    expansion: 'PAF',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      While prepped, when an ally gains a charge for the first time on their turn, you may discard a card to gain 1 charge.<br/>
      <b>Cast:</b> Deal 1 damage.
      </p>
      `,
  },
  {
    id: 'QusOblivionRelic',
    name: "Qu's Oblivion Relic",
    expansion: 'PAF',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      If there are three or more player turn order cards in the turn order discard pile, gain a charge.
      </p>
      `,
  },
  {
    id: 'TalixsEverlight',
    name: "Talix's Everlight",
    expansion: 'PAF',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      If you have two or more prepped Sparks, gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'TalixsEverlight',
    name: "Talix's Everlight",
    expansion: 'PAF',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
        <span class="or">OR</span>
      Destroy this. Gain 2 <span class="aether">&AElig;</span>. Any ally gains a charge.
      </p>
      `,
  },
  {
    id: 'LostsMoltenForge',
    name: "Lost's Molten Forge",
    expansion: 'PAF',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
        <span class="or">OR</span>
      <b>Cast:</b> Gain 2 <span class="aether">&AElig;</span> that can only be used to gain spells.
      </p>
      `,
  },
  {
    id: 'AnceintTexts',
    name: 'Ancient Texts',
    expansion: 'PAF',
    level: 2,
    effect: `
      <p>
      After a player finishes resolving their ability, they silence a minion.
      </p>
      `,
  },
  {
    id: 'EmbeddedLight',
    name: 'Embedded Light',
    expansion: 'PAF',
    level: 2,
    effect: `
      <p>
      After a player finishes resolving their ability, they gain 1 life.
      </p>
      `,
  },
  {
    id: 'GarnetDust',
    name: 'Garnet Dust',
    expansion: 'PAF',
    level: 2,
    effect: `
      <p>
      Once per turn, during any player's main phase, that player may spend 3 <span class="aether">&AElig;</span> to have each ally draw a card.
      </p>
      `,
  },
  {
    id: 'WovenMail',
    name: 'Woven Mail',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      Whenever you suffer damage, gain <span class="aether">&AElig;</span> tokens equal to the amount of damage you suffered.
      </p>
      `,
  },
  {
    id: 'SapphireLens',
    name: 'Sapphire Lens',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      At the end of your casting phase, if you've cast only one spell this turn, gain 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'DimensionalPurse',
    name: 'Dimensional Purse',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      When you gain a card that costs 5 <span class="aether">&AElig;</span> or more, gain 1 <span class="aether">&AElig;</span> token.
      You do not lose <span class="aether">&AElig;</span> tokens at the end of your turn.
      </p>
      `,
  },
  {
    id: 'MemoryCoin',
    name: 'Memory Coin',
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      At the start of your first turn of the game, gain a spell that costs 5 <span class="aether">&AElig;</span> or less.
      </p>
      `,
  },
  {
    id: 'InventorsKit',
    name: "Inventor's Kit",
    expansion: 'PAF',
    level: 3,
    effect: `
      <p>
      At the start of your first turn of the game, gain a relic from any supply pile.
      </p>
      `,
  },
]
