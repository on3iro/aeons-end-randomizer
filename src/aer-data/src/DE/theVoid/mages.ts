import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'TV',
    name: 'Sparrow',
    id: 'Sparrow',
    mageTitle: 'Riss-Magier-Soldatin',
    ability: `
        <h2>Arkane Verbindung</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wähle 4x je 1 Spieler und bündele 1 seiner Risse.
        <span class="or">ODER</span>
        Wähle 1 anderen Spieler ohne dunkle Risse. Dieser Spieler zieht 3 Karten und bindet dann bis zu
        3 Zauber seiner Wahl von der Hand an seine Risse.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Schwelbrand',
        expansion: 'TV',
        id: 'Smolder',
        cost: 0,
        effect: `
            <p>
              <b>Dauerhaft:</b> Darf an einen dunklen Riss gebunden werden (<i>ohne ihn gebündelt zu haben</i>).<br/>
              <b>Wirken:</b> Füge 1 Schaden zu.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'TV',
    name: 'Xaxos',
    id: 'XaxosTV',
    mageTitle: 'Herold der Leere',
    ability: `
        <h2>Schein der Praetorianer</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wähle 1 anderen Spieler, der 1 Energie erhält und 1 zufällige Karte von seiner Hand abwirft.
        Bündele 1 deiner Risse. Heile 1 Leben. Zerstöre 1 Karte deiner Wahl auf deiner Hand oder in deinem
        Ablagestapel.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Scheiterhaufen',
        expansion: 'TV',
        id: 'Pyre',
        cost: 0,
        effect: `
            <p>
              <b>Wirken:</b> Füge 1 Schaden zu.<br/>
              Wirft 1 anderer Spieler 1 Karte seiner Wahl von der Hand? +2 Schaden.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
