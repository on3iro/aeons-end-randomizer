import { Treasure } from 'aer-types'

export const treasures: Treasure[] = [
  {
    id: 'KadirsEmeraldShard',
    name: "Kadir's Emerald Shard",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Any player gains 1 life.
      </p>
      `,
  },
  {
    id: 'GexsShatteredGeode',
    name: "Gex's Shattered Geode",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      You may place the top card of any ally's discard pile into your hand.
      </p>
      `,
  },
  {
    id: 'JiansMoonstoneShard',
    name: "Jian's Moonstone Shard",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Gain an additional 1 <span class="aether">&AElig;</span> that can only 
      be used to gain a gem.
      </p>
      `,
  },
  {
    id: 'LashsQuartzShard',
    name: "Lash's Quartz Shard",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Reveal the top card of the turn order deck. You may place that card on the bottom or
      the top of the turn order deck. If you revealed a player turn order card, gain an 
      additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'XaxosFlare',
    name: "Xaxo's Flare",
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Reveal the top card of the turn order deck, and then place it 
      back on top of the turn order deck. If you revealed a player turn order 
      card, deal 3 damage. Otherwise, deal 1 damage.
      </p>
      `,
  },
  {
    id: 'AdelheimsAmethystShard',
    name: "Adelheim's Amethyst Shard",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Any ally may draw a card and then discard a card in hand.
      </p>
      `,
  },
  {
    id: 'BramasBuriedLight',
    name: "Brama's Buried Light",
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Gain 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'GarusTorch',
    name: "Garu's Torch",
    expansion: 'NA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.
        <span class="or">OR</span>
      <b>Cast:</b> Focus any player's breach.
      </p>
      `,
  },
  {
    id: 'XaxosPyre',
    name: "Xaxo's Pyre",
    expansion: 'NA',
    subtype: 'Spell',
    level: 1,
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Any ally may discard a card in hand. If they do, deal 2 additional damage.
      </p>
      `,
  },
  {
    id: 'MistsGarnetShard',
    name: "Mist's Garnet Shard",
    expansion: 'NA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Cast any player's prepped spell.
      </p>
      `,
  },
  {
    id: 'ShimmeringCloakOfTheMagus',
    name: 'Shimmering Cloak Of The Magus',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      After a player finishes resolving their ability, that player deals 2 damage.
      </p>
      `,
  },
  {
    id: 'ImbuedShackles',
    name: 'Imbued Shackles',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a supply pile that costs 7 
      <span class="aether">&AElig;</span> or more. These cards cost players 1 
      less <span class="aether">&AElig;</span> to gain.
      </p>
      `,
  },
  {
    id: 'GluttonsTooth',
    name: "Glutton's Tooth",
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      When the last card in a supply pile is gained or destroyed, any player deals 
      6 damage.
      </p>
      `,
  },
  {
    id: 'CoreOfRage',
    name: 'Core Of Rage',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a spell or relic supply pile. 
      When a player gains a card from that supply pile, they deal 2 damage.
      </p>
      `,
  },
  {
    id: 'CleansingAmulet',
    name: 'Cleansing Amulet',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      After a player finishes resolving their ability, any player may destroy 
      a card in hand.
      </p>
      `,
  },
  {
    id: 'CarapaceFragement',
    name: 'Carapace Fragement',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a relic or spell supply pile. 
      When a player gains a card from that supply pile, that player focuses one 
      of their breaches.
      </p>
      `,
  },
  {
    id: 'ThornedWhip',
    name: 'Thorned Whip',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      When a player opens a breach, that player deals 2 damage.
      </p>
      `,
  },
  {
    id: 'BonesOfDeathmind',
    name: 'Bones Of Deathmind',
    expansion: 'NA',
    level: 2,
    effect: `
      <p>
      When a player opens a breach, that player gains 1 charge.<br/>
      <br/>
      At the start of any player's turn, if that player has no closed breaches, 
      that player gains 1 charge.
      </p>
      `,
  },
  {
    id: 'AcceleratingGauntlets',
    name: 'Accelerating Gauntlets',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      At the start of your first turn of the game, gain a card that costs 
      4 <span class="aether">&AElig;</span> or less.
      </p>
      `,
  },
  {
    id: 'EssenceExtractor',
    name: 'Essence Extractor',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      When you play a gem that costs 5 <span class="aether">&AElig;</span> or 
      more, gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'BroochOfAttunment',
    name: 'Brooch Of Attunment',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Once per turn, when you cast a spell that costs 6 <span class="aether">&AElig;</span> 
      or more, gain 2 charges.
      </p>
      `,
  },
  {
    id: 'BladedCrystal',
    name: 'Bladed Crystal',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      When you deal damage to the nemesis with a spell, that spell deals 
      1 additional damage.
      </p>
      `,
  },
  {
    id: 'PrismOfDestruction',
    name: 'Prism Of Destruction',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      If you have no closed breaches, spells you cast deal 2 additional damage.
      </p>
      `,
  },
  {
    id: 'ForgottenTrinket',
    name: 'Forgotten Trinket',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      At the start of your first turn of the game, focus each of your closed 
      breaches once.
      </p>
      `,
  },
  {
    id: 'PrecisionMagnifier',
    name: 'Precision Magnifier',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      Spells you cast that cost 2 <span class="aether">&AElig;</span> or 
      more deal 1 additional damage.
      </p>
      `,
  },
  {
    id: 'ShroudOfObfucation',
    name: 'Shroud of Obfucation',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      When you cast two or more spells during your casting phase, gain 2 
      <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'VerdantStaff',
    name: 'Verdant Staff',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      When you gain a spell, gain 1 life.
      </p>
      `,
  },
  {
    id: 'FlowingMantle',
    name: 'Flowing Mantle',
    expansion: 'NA',
    level: 3,
    effect: `
      <p>
      At the start of your turn, gain 1 <span class="aether">&AElig;</span> 
      that can onlly be used to gain relics.<br/>
      <br/>
      When you gain a relic, you may place it on top of your deck.
      </p>
      `,
  },
]
