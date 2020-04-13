import { Mage } from 'aer-types'

export const mages: Mage[] = [
  {
    expansion: 'NA',
    name: 'Sahala',
    id: 'Sahala',
    mageTitle: 'Oracle',
    ability: `
        <h2>Star Bind</h2>
        <p class="ability-activation">Activate during your casting or main phase:</p>
        <p>Reveal the top three cards of your deck. 
        Place a spell revealed this way into your hand. 
        If there are no spells prepped to your Celestial Breach, 
        prep up to two spells in hand to your Celestial Breach.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Sparkling Meteorite',
        expansion: 'NA',
        id: 'SparklingMeteorite',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Gain 3 <span class="aether">&AElig;</span> that can only be used to focus or open a breach.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'NA',
    name: 'Gygar',
    id: 'Gygar',
    mageTitle: 'Tide Master',
    ability: `
        <h2>High Tide</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Place a Surge token on your Ancient Breach.
        <span class="or">OR</span>
        Cast a spell prepped to your Ancient Breach. Gain 2 charges.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Tidal Surge',
        expansion: 'NA',
        id: 'TidalSurge',
        cost: 0,
        effect: `<p><b>Cast:</b> Gain 1 charge.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'NA',
    name: 'Soskel',
    id: 'Soskel',
    mageTitle: 'Aristocrat',
    ability: `
        <h2>Energized Sigil</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Place an Energize token on any player's breach that doesn't have one.
        <span class="or">OR</span>
        Discard an Energize token on any player's breach. 
        That player gains 4 life.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Lucky Coin',
        expansion: 'NA',
        id: 'LuckyCoin',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            You may lose 1 charge. If you do, gain 2 additional <span class="aether">&AElig;</span>.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'NA',
    name: 'Taqren',
    id: 'Taqren',
    mageTitle: 'The Shield',
    ability: `
        <h2>Breach Siphon</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Focus any player's breach. 
        Any player gains 1 life for each opened breach you have.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Gift Of Spirit',
        expansion: 'NA',
        id: 'GiftOfSpirit',
        cost: 0,
        effect: `<p><b>Cast:</b> Deal 1 damage.
            <span class="or">OR</span>
            <b>Cast:</b> Any ally draws a card.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 2,
  },
  {
    expansion: 'NA',
    name: 'Talix',
    id: 'Talix',
    mageTitle: 'The Chain',
    ability: `
        <h2>Soaring Ash</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Destroy two sparks in hand. If you do, 
        shuffle your turn order card into the turn order deck.
        <span class="or">OR</span>
        Gravehold gains 5 life.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Furnacium',
        expansion: 'NA',
        id: 'Furnacium',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            Discard up to three spells in hand. 
            Gain 1 <span class="aether">&AElig;</span> for each spell discarded this way. 
            You may place this on top of your deck.`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'NA',
    name: 'Rhia',
    id: 'Rhia',
    mageTitle: 'Relic Hunter',
    ability: `
        <h2>Sublimate</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Return a card in your hand or discard pile to its supply pile. 
        If you returned a relic, gain a card from any supply pile 
        that costs up to 3 <span class="aether">&AElig;</span> more than the returned card. 
        Otherwise, gain a card from any supply pile 
        that costs up to 2 <span class="aether">&AElig;</span> more than the returned card. 
        Either way, place the gained card into your hand.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Planar Pocket',
        expansion: 'NA',
        id: 'PlanarPocket',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.<br/>
            Gain an additional 2 <span class="aether">&AElig;</span> that can only be used to gain a relic.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'NA',
    name: 'Claudia',
    id: 'Claudia',
    mageTitle: 'Prospector',
    ability: `
        <h2>Aeplosion</h2>
        <p class="ability-activation">Activate during any ally's main phase:</p>
        <p>That ally gains 2 <span class="aether">&AElig;</span>. The next time that ally 
        gains a card from a supply pile this turn, 
        you gain a copy of that card from that supply pile.
        <span class="or">OR</span>
        That ally gains 5 <span class="aether">&AElig;</span>.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Aetherscope',
        expansion: 'NA',
        id: 'Aetherscope',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Any ally may lose 1 charge. If they do, gain 2 charges.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'NA',
    name: 'Lost',
    id: 'Lost',
    mageTitle: 'Living Forge',
    ability: `
        <h2>Meek's Might</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Return up to four cards that cost 0 <span class="aether">&AElig;</span> 
        in your discard pile to your hand.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Heart Forge',
        expansion: 'NA',
        id: 'HeartForge',
        cost: 0,
        effect: `<p>Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Destroy a Spark or Crystal in hand. 
            Gain a card of the same type from the Forged deck 
            and place it into your hand.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
]
