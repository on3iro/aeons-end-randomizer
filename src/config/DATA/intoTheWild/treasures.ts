import { Treasure } from 'aer-types'

export const treasures: Treasure[] = [
  {
    id: 'DezmodiasOblivionShard',
    name: "Dezmodia's Oblivion Shard",
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Gain 2 <span class="aether">&AElig;</span> that cannot be used to gain 
        a relic or spell.
        </p>
      `,
  },
  {
    id: 'UlgimorsCoalFragment',
    name: "Ulgimor's Coal Fragment",
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Gain 2 <span class="aether">&AElig;</span> and suffer 1 damage.
          <span class="or">OR</span>
        Gain 1 life.
        </p>
      `,
  },
  {
    id: 'IndirasLoneOpal',
    name: "Indiras's Lone Opal",
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Gain 1 <span class="aether">&AElig;</span>.<br/>
        You may cast a spell in hand that costs 4 aether or less.
        </p>
      `,
  },
  {
    id: 'MistsAmethystParagon',
    name: "Mist's Amethyst Paragon",
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Gain 1 <span class="aether">&AElig;</span>.<br/>
        Any ally may prep a spell in hand to their opened or closed breach(es).
        </p>
      `,
  },
  {
    id: 'MalastarsImmolate',
    name: "Malastar's Immolate",
    expansion: 'IW',
    level: 1,
    subtype: 'Spell',
    effect: `
        <p>
        While prepped, when you suffer damage gain 1 charge.<br/>
        <b>Cast:</b> Deal 1 damage.
        </p>
      `,
  },
  {
    id: 'YanMagdasIlluminate',
    name: "Yan Magda's Illuminate",
    expansion: 'IW',
    level: 1,
    subtype: 'Spell',
    effect: `
        <p>
        While prepped, when you focus or open one of your breaches during your turn, 
        deal 1 damage.<br/>
        <b>Cast:</b> Deal 1 damage.
        </p>
      `,
  },
  {
    id: 'EyeOfTheMaelstrom',
    name: 'Eye Of The Maelstrom',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        At the start of the game, set this next to a supply pile that costs 
        4 <span class="aether">&AElig;</span> or more. When a player gains a 
        card from that supply pile, that player gains 1 life.
        </p>
      `,
  },
  {
    id: 'WellOfDespair',
    name: 'Well Of Despair',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        When a player deals 6 or more damage to the nemesis with a single spell, 
        add a power token to this card.<br/>
        <br/>
        At the start of the nemesis turn, the nemesis suffers damage equal to the 
        number of tokens on this card.
        </p>
      `,
  },
  {
    id: 'CronesAmulet',
    name: "Crones's Amulet",
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        When a player opens a breach, that player may destroy a card in hand.
        </p>
      `,
  },
  {
    id: 'EdibleFungusChunks',
    name: 'Edible Fungus Chunks',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        When a player gains life, they gain an additional 1 life.
        </p>
      `,
  },
  {
    id: 'UmbralHornOfWar',
    name: 'Umbral Horn Of War',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        At the start of the game, set this next to a spell supply pile that costs 
        6 <span class="aether">&AElig;</span> or more. Those spells deal 2 
        additional damage when cast.
        </p>
      `,
  },
  {
    id: 'TheBrokenMask',
    name: 'The Broken Mask',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        After a player finishes resolving their ability, any ally gains a charge.
        </p>
      `,
  },
  {
    id: 'AlchemistsAlembic',
    name: "Alchemist's Alembic",
    expansion: 'IW',
    level: 3,
    effect: `
        <p>
          Once per turn during your main phase, when you play the second 
          gem or relic that costs 4 <span class="aether">&AElig;</span> or more, deal 3 damage.
        </p>
      `,
  },
  {
    id: 'SoothsayersPouch',
    name: "Soothsayer's Pouch",
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      Add an additional level 1 treasure to your starting deck using the level 1 treasure rules. <br/>
      <br/>
      Your group can use an additional level 2 treasure.
      </p>
      `,
  },
  {
    id: 'SuppressingPin',
    name: 'Suppressing Pin',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      Once per turn during your main phase, you may discard a card in hand. If you do, any ally draws a card and you may add a power token to a power in play.
      </p>
      `,
  },
  {
    id: 'Quicksilver',
    name: 'Quicksilver',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      When you cast a spell that costs 2 <span class="aether">&AElig;</span> 
      or more, you may place it into any ally's hand instead of discarding it.
      </p>
      `,
  },
  {
    id: 'BandOfRetrieval',
    name: 'Band of Retrieval',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      At the start of your casting phase, you may lose 1 charge. If you do, 
      return the next spell you cast during this casting phase to your hand 
      instead of discarding it.
      </p>
      `,
  },
  {
    id: 'PurifiedBangle',
    name: 'Purified Bangle',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      Once per turn during your main phase, you may spend 9 <span class="aether">&AElig;</span> 
      and suffer 1 damage to place a card in play from the nemesis deck on top 
      of the nemesis deck.
      </p>
      `,
  },
]
