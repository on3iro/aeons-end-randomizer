import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'LabyrinthWisp-OD',
    expansion: 'OD',
    tier: 1,
    type: 'Minion',
    name: 'Nebel-Irrlicht',
    hp: 5,
    effect: `
      <p>
        <b>Ansturm:</b> Wählt 1 Spieler, der 1 gebundenen Zauber abwirft.
        <span class="or">ODER</span>
        Wählt 1 Spieler, der 1 Energie abwirft.
      </p>
    `,
  },
  {
    id: 'Assail-OD',
    expansion: 'OD',
    tier: 2,
    type: 'Attack',
    name: 'Überfall',
    effect: `
      <p>
        SPEZIAL 2.<br/>
        Wähle 1 Spieler mit dem gebundenen Zauber mit den höchsten <span class="aether">&AElig;</span>-Kosten. Diesen Zauber
        legt er oben auf sein Deck.
      </p>
    `,
  },
  {
    id: 'DireAbbatoir-OD',
    expansion: 'OD',
    tier: 3,
    type: 'Power',
    name: 'Schlachthof',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 8 <span class="aether">&AElig;</span>.<br/>
        <br/>
        <b>Zeit 2:</b> Fügt dem Spieler mit dem meisten Leben Schaden in Höhe des aktuellen Lebens dieses Spielers zu.
      </p>
    `,
  },
]
