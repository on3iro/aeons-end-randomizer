import { Mage } from 'aer-types'

export const mages: Mage[] = [
  {
    expansion: 'AE',
    name: 'Adelheim',
    id: 'Adelheim',
    mageTitle: 'Breach Mage Weaponsmith',
    ability: `
        <h2>Aethereal Ward</h2>
        <p class="ability-activation">Activate during the nemesis draw phase:</p>
        <p>When a nemesis attack or power card is drawn but before it is resolved, 
        you may discard it. It has no effect.
        <span class="hint">(The nemesis does not draw a replacement card)</span></p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Amethyst Shard',
        expansion: 'AE',
        id: 'AmethystShard',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              Any ally may draw a card and then discard a card in hand.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Brama',
    id: 'Brama',
    mageTitle: 'Breach Mage Elder',
    ability: `
        <h2>Brink Siphon</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Any player gains 4 life.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Buried Light',
        expansion: 'AE',
        id: 'BuriedLight',
        cost: 0,
        effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.<br/>
              Gain 1 <span class="aether">&AElig;</span>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Jian',
    id: 'Jian',
    mageTitle: 'Breach Mage Orphan',
    ability: `
        <h2>Black Mirror</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Cast any player's prepped spell without discarding it.</p>
        <p>Then cast that prepped spell again.
        <span class="hint">(Discard it afterward.)</span></p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Moonstone Shard',
        expansion: 'AE',
        id: 'MoonstoneShard',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              Gain an additional 1 <span class="aether">&AElig;</span> that can 
              only be used to gain a gem.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Kadir',
    id: 'Kadir',
    mageTitle: 'Breach Mage Delver',
    ability: `
        <h2>Otherworldly Gate</h2>
        <p class="ability-activation">Activate during any player's main phase:</p>
        <p>That player may return up to three spells in their discard pile 
        to their hand. That player may prep up to two spells to each 
        of their opened breaches this turn.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Emerald Shard',
        expansion: 'AE',
        id: 'EmeraldShard',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.
              <span class="or">OR</span>
              Any player gains 1 life.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Lash',
    id: 'Lash',
    mageTitle: 'Breach Mage Scout',
    ability: `
        <h2>Quicken Thought</h2>
        <p class="ability-activation">Activate during any player's main phase:</p>
        <p>Shuffle any player's turn order card into the turn order deck. 
        That player suffers 1 damage. <span class="hint">(You may not choose the 
        wildcard turn order card.)</span></p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Quartz Shard',
        expansion: 'AE',
        id: 'QuartzShard',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              Reveal the top card of the turn order deck. You may place that card 
              on the bottom or the top of the turn order deck. If you revealed 
              a player turn order card, gain an additional 1 <span class="aether">&AElig;</span>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Mist',
    id: 'Mist',
    mageTitle: 'Dagger Captain',
    ability: `
        <h2>Divine Augury</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Any ally draws 4 cards.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Garnet Shard',
        expansion: 'AE',
        id: 'Garnet Shard',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.
              <span class="or">OR</span>
              Cast any player's prepped spell.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Phaedraxa',
    id: 'Phaedraxa',
    mageTitle: 'Breach Mage Seer',
    ability: `
        <h2>Auspex Rune</h2>
        <p class="ability-activation">Activate immediately after a turn order card is drawn:</p>
        <p>Prevent any damage that the players or Gravehold would suffer during that turn.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Tourmaline Shard',
        expansion: 'AE',
        id: 'TourmalineShard',
        cost: 0,
        effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              Any ally may suffer 1 damage. If they do, they destroy a card in hand.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Xaxos',
    id: 'Xaxos',
    mageTitle: 'Breach Mage Adept',
    ability: `
        <h2>Metaphysical Link</h2>
        <p class="ability-activation">Activate during any player's main phase:</p>
        <p>Allies collectively gain 4 charges. Reveal the turn order deck and return 
        the revealed cards in any order.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Flare',
        expansion: 'AE',
        id: 'Flare',
        cost: 0,
        effect: `
            <p>
              <b>Cast:</b> Reveal the top card of the turn order deck, 
              and then place it back on top of the turn order deck. If you 
              revealed a player turn order card, deal 3 damage. Otherwise, 
              deal 1 damage.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
