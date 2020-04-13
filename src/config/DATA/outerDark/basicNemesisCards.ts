import { BasicNemesisCard } from 'aer-types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'LabyrinthWisp',
    expansion: 'OD',
    tier: 1,
    type: 'Minion',
    name: 'Labyrinth Wisp',
    hp: 5,
    effect: `
      <p>
        <b>Persistent:</b> Any player discards a prepped spell.
        <span class="or">OR</span>
        Any player loses 1 charge.
      </p>
    `,
  },
  {
    id: 'Assail',
    expansion: 'OD',
    tier: 2,
    type: 'Attack',
    name: 'Assail',
    effect: `
      <p>
        Unleash twice. The player with the most expensive prepped spell places that spell on top of their deck.
      </p>
    `,
  },
  {
    id: 'DireAbbatoir',
    expansion: 'OD',
    tier: 3,
    type: 'Power',
    name: 'Dire Abbatoir',
    power: 2,
    effect: `
      <p>
        <b>To Discard:</b> Spend 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Power 2:</b> The player with the most life suffers damage equal to their current life.
      </p>
    `,
  },
]
