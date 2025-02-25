import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'WitheringRot-O',
    expansion: 'O',
    tier: 1,
    type: 'Attack',
    name: 'Withering Rot',
    effect: `
      <p>
        Any player suffers 3 damage and gains a Curse of Rot from the Curse deck.
      </p>
    `,
  },
  {
    id: 'WeepingHex-O',
    expansion: 'O',
    tier: 1,
    type: 'Attack',
    name: 'Weeping Hex',
    effect: `
      <p>
        Unleash.<br />
        <br />
        Any player suffers 2 damage, gains a Cursed Shard from the Curse deck, and 
        places it on top of their deck.
      </p>
    `,
  },
  {
    id: 'Hemorrhage-O',
    expansion: 'O',
    tier: 1,
    type: 'Attack',
    name: 'Hemorrhage',
    effect: `
      <p>
        Unleash.<br />
        <br />
        Gravehold suffers 1 damage.<br />
        <br />
        Place this in front of the player with the most opened breaches.<br />
        <br />
        At the start of that player's turn they suffer 1 damage. When that player gains a card 
        that costs 5 <span class="aether">&AElig;</span> or more, this card is discarded.<br />
        If there are no cards in the supply that cost 5 <span class="aether">&AElig;</span> or more, 
        discard this when they gain a card with the highest cost in the supply.
      </p>
    `,
  },
  {
    id: 'MoonstruckHound-O',
    expansion: 'O',
    tier: 1,
    type: 'Minion',
    name: 'Moonstruck Hound',
    hp: 5,
    effect: `
      <p>
        Reduce to 1 all damage dealt to this minion by spells that cost 5 <span class="aether">&AElig;</span> 
        or more.<br />
        <b>Persistent:</b> Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'WanderingLasher-O',
    expansion: 'O',
    tier: 1,
    type: 'Minion',
    name: 'Wandering Lasher',
    hp: 6,
    effect: `
      <p>
        <b>Wandering</b> <span class="hint">(Reduce to 1 all damage that is dealt to this 
        by abilities and player cards. During any player's main phase, that player 
        may spend any amount of <span class="aether">&AElig;</span> to deal an 
        equal amount of damage to this.)</span><br />
        <b>Persistent:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'AuraDrain-O',
    expansion: 'O',
    tier: 1,
    type: 'Power',
    name: 'Aura Drain',
    power: 2,
    effect: `
      <p>
        When a power token is removed from this, any player suffers 2 damage.<br />
        <br />
        <b>To Discard:</b> Spend 5 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'HauntedForce-O',
    expansion: 'O',
    tier: 1,
    type: 'Power',
    name: 'Haunted Force',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. Gravehold suffers 2 damage. Any player gaines 
        a Cursed Bolt from the Curse deck.
      </p>
    `,
  },
  {
    id: 'NoxiousWinds-O',
    expansion: 'O',
    tier: 1,
    type: 'Power',
    name: 'Noxious Winds',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 5 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Gravehold suffers 3 damage. Any player gains a Cursed Shard 
        from the Curse deck. Any player gains a Cursed Bolt from the Curse deck.
      </p>
    `,
  },
  {
    id: 'MarkedForDeath-O',
    expansion: 'O',
    tier: 2,
    type: 'Attack',
    name: 'Marked For Death',
    effect: `
      <p>
        Unleash twice.<br />
        <br />
        Place this card in front of any player.<br />
        <br />
        For the rest of the game, when a nemesis card specifies 'any player' 
        the player with this card must resolve that effect if possible.<br />
        <br />
        When the player with this card becomes exhausted, discard this.
      </p>
    `,
  },
  {
    id: 'ConjuredGrapple-O',
    expansion: 'O',
    tier: 2,
    type: 'Attack',
    name: 'Conjured Grapple',
    effect: `
      <p>
        Unleash twice.<br />
        <br />
        Any player suffers 2 damage and discards two cards in hand. That 
        player gains a Cursed Manacles from the Curse deck and places it into 
        their hand.
      </p>
    `,
  },
  {
    id: 'ChitinCrawler-O',
    expansion: 'O',
    tier: 2,
    type: 'Minion',
    name: 'Chitin Crawler',
    hp: 9,
    effect: `
      <p>
        Reduce to 1 all damage dealt to this minion by spells that cost 3 <span class="aether">&AElig;</span> 
        or less.<br />
        <b>Persistent:</b> Any player suffers 3 damage.
        <span class="or">OR</span>
        Unleash.
      </p>
    `,
  },
  {
    id: 'WanderingObserver-O',
    expansion: 'O',
    tier: 2,
    type: 'Minion',
    name: 'Wandering Observer',
    hp: 11,
    effect: `
      <p>
        <b>Wandering</b> <span class="hint">(Reduce to 1 all damage that is dealt to this 
        by abilities and player cards. During any player's main phase, that player 
        may spend any amount of <span class="aether">&AElig;</span> to deal an 
        equal amount of damage to this.)</span><br />
        <b>Persistent:</b> Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'SeekingDestruction-O',
    expansion: 'O',
    tier: 2,
    type: 'Power',
    name: 'Seeking Destruction',
    power: 3,
    effect: `
      <p>
        <b>Immediately:</b> Place the player number token of the player with the most opened breaches 
        on this.<br />
        <br />
        <b>To Discard:</br> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 3:</b> If the player whose player token is on this has the most opened breaches, 
        that player suffers 5 damage. Otherwise, Unleash twice.
      </p>
    `,
  },
  {
    id: 'SuffocatingHaze-O',
    expansion: 'O',
    tier: 2,
    type: 'Power',
    name: 'Suffocating Haze',
    power: 3,
    effect: `
      <p>
        Reduce by 1 all damage dealt to minions from the nemesis deck, to a minimum of 1.<br />
        <br />
        <b>Power 3:</b> Unleash twice. Gravehold suffers 2 damage.
      </p>
    `,
  },
  {
    id: 'ToxicSubterfuge-O',
    expansion: 'O',
    tier: 2,
    type: 'Power',
    name: 'Toxic Subterfuge',
    power: 3,
    effect: `
      <p>
        When a power token is removed from this, Gravehold suffers 2 damage.<br />
        <br />
        <b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 3:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'Throttle-O',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    name: 'Throttle',
    effect: `
      <p>
        Unleash twice.<br />
        <br />
        Any player destroys their three most expensive cards in hand.
      </p>
    `,
  },
  {
    id: 'Topple-O',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    name: 'Topple',
    effect: `
      <p>
        Unleash twice.<br />
        <br />
        Gravehold suffers 4 damage.
      </p>
    `,
  },
  {
    id: 'BreachSpike-O',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    name: 'Breach Spike',
    effect: `
      <p>
        Unleash twice.<br />
        <br />
        The player with the most prepped spells suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'NyxTheSpineCruncher-O',
    expansion: 'O',
    tier: 3,
    type: 'Minion',
    name: 'Nyx, The Spine Cruncher',
    hp: 14,
    effect: `
      <p>
        <b>Persistent:</b> Unleash. Any player suffers 2 damage.      
      </p>
    `,
  },
  {
    id: 'EndlessTorment-O',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    name: 'Endless Torment',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</br> Spend 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash three times.
        <span class="or">OR</span>
        Any player suffers 6 damage.
      </p>
    `,
  },
  {
    id: 'DarkeningDepths-O',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    name: 'Darkening Depths',
    power: 1,
    effect: `
      <p>
        <b>To Discard:</br> Destroy a prepped spell that costs 3 <span class="aether">&AElig;</span> 
        or more and a breach in which it was prepped.<br />
        <br />
        <b>Power 1:</b> Unleash. The player with the lowest life suffers 3 damage.
      </p>
    `,
  },
  {
    id: 'ApocalypseRitual-O',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    name: 'Apocalypse Ritual',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</br> Spend 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Gravehold suffers 5 damage for each nemesis turn order card in the turn order 
        discard pile.
      </p>
    `,
  },
]
