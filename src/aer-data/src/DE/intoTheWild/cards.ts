import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'IW',
    name: 'Juwelen-Cerebrum',
    id: 'JeweledBrain',
    cost: 3,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>.
          <span class="or">OR</span>
          Erhalte 1 <span class="aether">&AElig;</span>. Wähle 1 Karte in deinem Ablagestapel
          mit <span class="aether">&AElig;</span>-Kosten von 0 und nimm sie zurück auf die Hand.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'IW',
    name: 'Sprengkugel',
    id: 'BlastSphere',
    cost: 8,
    effect: `
        <p>
          Wähle 1 Spieler und wirke 1 seiner gebundenen Zauber 3-mal, ohne ihn abzuwerfen. Dann zerstöre
          den gewirkten Zauber.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'IW',
    name: 'Wunderheilung',
    id: 'WoundMender',
    cost: 8,
    effect: `
        <p>
          <b>ECHO.</b>
        </p>
        <p>
          <b>Wirken:</b> Füge 2 Schaden zu.<br/>
          Ist dieser Zauber an einen aktiven Riss III oder IV gebunden? Heile 1 Leben.
        </p>
      `,
    keywords: ['echo'],
  },
]
