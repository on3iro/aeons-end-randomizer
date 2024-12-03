import { Friend } from '../../../../aer-types/types'

export const friends: Friend[] = [
  {
    name: 'Adelheim, the Blacksmith',
    id: 'AdelheimTheBlacksmith',
    expansion: 'ATD',
    charges: 4,
    abilityName: 'Gather Scrap',
    abilityEffect: `
      Each player may return up to three cards in their discard pile
      that cost 0 <span class="aether">&AElig;</span> to their hand.
    `,
    deck: [
      {
        name: 'Amplify',
        id: 'Amplify',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Adelheim, the Blacksmith gains 2 charges.
          <span class="or">OR</span>
          Any player destroys a Spark in hand or discard pile and gains a Forged Spark.
          </p>
        `,
      },
      {
        name: 'Blazing Furnace',
        id: 'BlazingFurnace',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Any player destroys a Crystal in hand or discard pile and gains a Forged Crystal.
          <span class="or">OR</span>
          Any player returns up to two cards from their discard pile
          that cost 0 <span class="aether">&AElig;</span> to their hand.
          </p>
        `,
      },
      {
        name: 'Burnish',
        id: 'Burnish',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Any player destroys a Crystal or Spark in hand.
          That player gains the corresponding Forged card and places it in their hand.
          <span class="or">OR</span>
          Any player loses 2 charges. If they do, Adelheim, the Blacksmith gains 4 charges.
          </p>
        `,
      },
      {
        name: 'Polished Steel',
        id: 'PolishedSteel',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Adelheim, the Blacksmith gains 2 charges.
          <span class="or">OR</span>
          Any player discards a card in hand that costs
          2 <span class="aether">&AElig;</span> or more.
          If they do, they gain 3 charges.
          </p>
        `,
      },
    ],
    extraCards: [
      {
        type: 'Gem',
        cost: 0,
        name: 'Forged Crystal',
        id: 'ForgedCrystal',
        effect: '<p>Gain 2 <span class="aether">&AElig;</span>.</p>',
        expansion: 'ATD',
        keywords: [],
      },
      {
        type: 'Spell',
        cost: 0,
        name: 'Forged Spark',
        id: 'ForgedSpark',
        effect: '<p><b>Cast:</b> Deal 2 damage.</p>',
        expansion: 'ATD',
        keywords: [],
      },
    ],
  },
  {
    name: 'Dalana, the Healer',
    id: 'DalanaTheHealer',
    expansion: 'ATD',
    charges: 5,
    abilityName: 'Bandage',
    abilityEffect: 'Any player or Gravehold gains 4 life.',
    deck: [
      {
        name: 'Energize',
        id: 'Energize',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Dalana, the Healer gains 2 charges.
          <span class="or">OR</span>
          Any player gains 1 charge.
          </p>
        `,
      },
      {
        name: 'Enhance',
        id: 'Enhance',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Any player focuses a breach
          <span class="or">OR</span>
          Any player discards a prepped spell.
          If they do, Dalana, the Healer gains 3 charges.
          </p>
        `,
      },
      {
        name: 'Restore',
        id: 'Restore',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Dalana, the Healer gains 2 charges.
          <span class="or">OR</span>
          Any player returns a card from their discard pile to their hand.
          </p>
        `,
      },
      {
        name: 'Soothing Aura',
        id: 'SoothingAura',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Any player draws a card.
          <span class="or">OR</span>
          Any player gains 2 <span class="aether">&AElig;</span> tokens.
          </p>
        `,
      },
    ],
  },
  {
    name: 'Fawn, the Alchemist',
    id: 'FawnTheAlchemist',
    expansion: 'ATD',
    charges: 6,
    rules: 'The Cauldron is a zone above this mat.',
    abilityName: 'Caustic Brew',
    abilityEffect: `
      For each spell in the Cauldron, deal damage equal to its cost twice.
      Then, destroy a spell in the Cauldron.
    `,
    deck: [
      {
        name: 'Arcane Infusion',
        id: 'ArcaneInfusion',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Any player may gain an Incendiary Catalyst and place it on top of their deck.
          <span class="or">OR</span>
          Any player casts a prepped spell. That spell deals an additional 1 damage.
          </p>
        `,
      },
      {
        name: 'Bubbling Brew',
        id: 'BubblingBrew',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Fawn, the Alchemist gains 2 charges.
          <span class="or">OR</span>
          Any player places a spell that costs 2 <span class="aether">&AElig;</span>
          or more from their hand into the Cauldron and draws a card.
          </p>
        `,
      },
      {
        name: 'Gather Ingredients',
        id: 'GatherIngredients',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Any player gains a spell that costs 5 <span class="aether">&AElig;</span> or less from the supply.
          <span class="or">OR</span>
          Any player gains 1 charge.
          </p>
        `,
      },
      {
        name: 'Prepare',
        id: 'Prepare',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Fawn, the Alchemist gains 2 charges.
          <span class="or">OR</span>
          Any player gains an Incendiary Catalyst and an <span class="aether">&AElig;</span> token.
          </p>
        `,
      },
    ],
    extraCards: [
      {
        type: 'Spell',
        cost: 4,
        name: 'IncendiaryCatalyst',
        id: 'IncendiaryCatalyst',
        effect: `
          <p>
          <b>Cast:</b> Deal 3 damage. You may place a spell that costs
          2 <span class="aether">&AElig;</span> or more from your hand
          or discard pile into the Cauldron.
          </p>
        `,
        expansion: 'ATD',
        keywords: [],
      },
    ],
  },
  {
    name: 'Myrna, the Scholar',
    id: 'MyrnaTheScholar',
    expansion: 'ATD',
    charges: 4,
    abilityName: 'Study the Ancients',
    abilityEffect: 'Myrna gains 4 Knowledge.',
    deck: [
      {
        name: 'Ancient Secrets',
        id: 'AncientSecrets',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Myrna, the Scholar gains 2 charges.
          <span class="or">OR</span>
          Myrna, the Scholar loses 1 Knowledge. If she does,
          reveal the turn order deck and return it in any order.
          </p>
        `,
      },
      {
        name: 'Archive',
        id: 'Archive',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Any player draws three cards and discards any cards drawn this
          way that cost 3 <span class="aether">&AElig;</span> or more.
          <span class="or">OR</span>
          Myrna loses any amount of Knowledge. The players collectively
          draw cards equal to the Knowledge lost in this way.
          </p>
        `,
      },
      {
        name: 'Delve',
        id: 'Delve',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Myrna, the Scholar gains 2 charges.
          <span class="or">OR</span>
          Myrna, the Scholar loses 1 Knowledge. If she does, any player
          gains 4 <span class="aether">&AElig;</span> tokens.
          </p>
        `,
      },
      {
        name: 'Study',
        id: 'Study',
        expansion: 'ATD',
        type: 'Attack',
        effect: `
          <p>
          Myrna, the Scholar gains 1 charge.
          You may have the foe gain 1 charge.
          If you do, Myrna gains an additional 2 charges.
          <span class="or">OR</span>
          Myrna, the Scholar loses 2 Knowledge. If she does,
          any player casts a prepped spell without discarding it.
          </p>
        `,
      },
    ],
  },
]
