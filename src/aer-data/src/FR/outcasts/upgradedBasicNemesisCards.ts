import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'ChaosStrike',
    name: 'Chaos Strike',
    expansion: 'O',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Unleash.<br />
        <br />
        Gravehold suffers 4 damage.<br />
        <br />
        Any player gains a Cursed Shard from the Curse deck and places it on top of their deck.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'LabyrinthWraith-O',
    expansion: 'O',
    tier: 1,
    type: 'Minion',
    name: 'Labyrinth Wraith',
    hp: 6,
    effect: `
      <p>
        <b>Wandering</b> <span class="hint">(Reduce to 1 all damage that is dealt to this 
        by abilities and player cards. During any player's main phase, that player 
        may spend any amount of <span class="aether">&AElig;</span> to deal an 
        equal amount of damage to this.)</span><br />
        <b>Persistent:</b> Unleash. Any player suffers 1 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RainOfDevastation',
    name: 'Rain Of Devastation',
    expansion: 'O',
    tier: 1,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Any player suffers 3 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'HuntTheWeak',
    name: 'Hunt The Weak',
    expansion: 'O',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Any player suffers 3 damage.<br />
        <br />
        Gravehold suffers 3 damage.<br />
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Rescind',
    name: 'Rescind',
    expansion: 'O',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Unleash twice.<br />
        <br />
        The player with the most expensive prepped spell discards that spell and suffers 2 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'HarbingerOfMonstrosity-O',
    expansion: 'O',
    tier: 2,
    type: 'Minion',
    name: 'Harbinger Of Monstrosity',
    hp: 8,
    effect: `
      <p>
        When a player deals damage to this minion, reduce that damage by 2, 
        to a minimum of 1.<br />
        <b>Persistent:</b> Gravehold suffers 2 damage. Any player discards a card in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'MageDevourer-O',
    expansion: 'O',
    tier: 2,
    type: 'Minion',
    name: 'Mage Devourer',
    hp: 11,
    effect: `
      <p>
        When a player deals damage to this minion, the player with the most opened breaches 
        suffers 1 damage.<br />
        <b>Persistent:</b> Unleash. Gravehold suffers 1 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SilentDecay',
    name: 'Silent Decay',
    expansion: 'O',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Unleash twice. Gravehold suffers 3 damage. Any player gains a Cursed Bolt 
        from the Curse deck and places it on top of their deck.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SkyCrush',
    name: 'Sky Crush',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash three times.<br />
        <br />
        Any player destroys two cards in hand and suffers 2 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Scour',
    name: 'Scour',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash three times.<br />
        <br />
        The player with the most expensive card in hand discards their three most expensive cards in hand.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Sacrifice-O',
    name: 'Sacrifice',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Unleash four times.
        <span class="or">OR</span>
        Gravehold suffers 4 damage and any player suffers 4 damage.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'ScionOfTheVoid-O',
    expansion: 'O',
    tier: 3,
    type: 'Minion',
    name: 'Scion Of The Void',
    hp: 13,
    effect: `
      <p>
        When a player deals damage to this minion, Unleash.<br />
        <b>Persistent:</b> Unleash twice.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RayOfDesolation-O',
    name: 'Ray Of Desolation',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Power 1:</b> Unleash twice. The players collectively destroy the two most expensive 
        prepped spells.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BlightedMagic',
    name: 'Blighted Magic',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Power 2:</b> Unleash. The player with the most expensive prepped spell destroyed it. 
        A different player destroys two cards in hand that cost 1 <span class="aether">&AElig;</span> 
        or more.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BlackenedStars',
    name: 'Blackened Stars',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 9 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> Any player suffers 7 damage.
      </p>
    `,
    upgraded: true,
  },
]
