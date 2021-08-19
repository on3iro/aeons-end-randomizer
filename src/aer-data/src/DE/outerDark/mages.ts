import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'OD',
    name: 'Indira',
    id: 'Indira',
    mageTitle: 'Riss-Magier-Lehrling',
    ability: `
        <h2>List der Pyromanen</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Zauber wirken</i>:</p>
        <p>Wirke eine Anzahl Zauber deiner Wahl direkt von deiner Hand. +1 Schaden für jeden so gewirkten
        Zauber. Dann darfst du 1 Karte deiner Wahl in deinem Ablagestapel zerstören.</p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Zwillings-Opal',
        expansion: 'OD',
        id: 'TwinOpal',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Du darfst 1 Zauber deiner Wahl von der Hand wirken.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'OD',
    name: 'Reliquior',
    id: 'Remnant',
    mageTitle: 'Ätherisches Wesen',
    ability: `
        <h2>Hauch des Nichts</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wähle 1 anderen Spieler, der 2 Karten von seinem Ablagestapel zurück auf die Hand nimmt.
        <span class="or">ODER</span>
        Die <i>Feste der letzten Ruhe</i> heilt 5 Leben.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Leere-Scherbe',
        expansion: 'OD',
        id: 'VoidShard',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Erhalte 1 <span class="aether">&AElig;</span>, aber nur zum Bündeln oder Aktivieren
              eines Risses.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
