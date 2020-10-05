import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'Nameless',
    name: 'Malastar',
    id: 'Malastar',
    mageTitle: 'Riss-Magier-Mentor',
    ability: `
        <h2>Aetherium-Geschenk</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>
          Erwirb 1 Zauber deiner Wahl gratis. Du darfst diesen Zauber sofort an den aktiven 
          Riss 1 Spielers deiner Wahl binden.
        </p>
      `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Brennende Luft',
        expansion: 'Nameless',
        id: 'Immolate',
        cost: 0,
        effect: `
          <p>
            <b>Gebunden:</b> mmer wenn du 1 oder mehr Leben verlierst, erhalte 1 Energie.<br />
            <b>Wirken:</b> Füge 1 Schaden zu.
          </p>
        `,
        keywords: [],
      },
    ],
  },
]
