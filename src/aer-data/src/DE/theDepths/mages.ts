import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'Depths',
    name: 'Nym',
    id: 'Nym',
    mageTitle: 'Riss-Magier-Lehrling',
    ability: `
        <h2>Barriere</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Sieh dir die oberste Erzfeind-Karte an und wirf sie ab.</p>
        <p>Hast du einen ANGRIFF gesehen, wiederhole das (1x).</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Zunder',
        expansion: 'Depths',
        id: 'Cinder',
        cost: 0,
        effect: `
          <p>
            <b>Wirken:</b> Füge 1 Schaden zu.
            <span class="or">ODER</span>
            <b>Wirken:</b> Erhalte 2 <span class="aether">&AElig;</span>.
          </p>
        `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'Depths',
    name: 'Reeve',
    id: 'Reeve',
    mageTitle: 'Riss-Magier-Elite',
    ability: `
        <h2>Quelling Blade</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Füge 1 Monster 5 Schaden zu.</p>
        <p>Füge 1 anderen Monster 3 Schaden zu.</p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Obsidian-Scherbe',
        expansion: 'Depths',
        id: 'ObsidianShard',
        cost: 0,
        effect: `
          <p>
            Erhalte 1 <span class="aether">&AElig;</span>.<br/>
            Fügst du dir jetzt 1 Schaden zu? Erhalte 2 <span class="aether">&AElig;</span>.
          </p>
        `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'Depths',
    name: "Z'hana",
    id: 'Zhana',
    mageTitle: 'Abtrünnige Riss-Magierin',
    ability: `
        <h2>Das Licht Der Welt, Die War</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Die <i>Feste der letzten Ruhe</i> heilt 7 Leben.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Ewige Glut',
        expansion: 'Depths',
        id: 'EternalEmber',
        cost: 0,
        effect: `
          <p>
            <b>Wirken:</b> Füge 1 Schaden zu.
            <span class="or">ODER</span>
            <b>Wirken:</b> Wirke 1 anderen deiner gebundenen Zauber. Der Zauber bleibt gebunden.
          </p>
        `,
        keywords: [],
      },
    ],
  },
]
