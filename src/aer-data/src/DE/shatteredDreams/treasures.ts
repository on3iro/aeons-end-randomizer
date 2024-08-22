import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'MazahaedronsWorldheartShard',
    name: 'Mazahaedrons Weltherz-Scherbe',
    expansion: 'SD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Erhalte 2 <span class="aether">&AElig;</span>, aber nur zum Erwerb einer Karte.
      Die nächste Karte, die du erwirbst, legst du auf den Ablagestapel 1 anderen Spielers
      deiner Wahl.
      </p>
      `,
  },
  {
    id: 'PhaedraxasTourmalineShard',
    name: 'Phaedraxas Turmalin-Scherbe',
    expansion: 'SD',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.<br/>
      Wähle 1 anderen Spieler. Dieser Spieler darf 1 Schaden erleiden um 1 Karte seiner Wahl auf
      der Hand zu zerstören.
      </p>
      `,
  },
  {
    id: 'FracturedShell',
    name: 'Zerbrochene Hülle',
    expansion: 'SD',
    level: 2,
    effect: `
      <p>
      <b>Im Spielaufbau:</b><br/>
      Legt diese Karte neben einen Vorrat mit <span class="aether">&AElig;</span>-Kosten
      von 4 oder mehr.<br/><br/>
      <b>Immer wenn ein Spieler eine Karte dieses Vorrats erwirbt:</b><br/>
      Dieser Spieler erhält 1 Energie.
      </p>
      `,
  },
  {
    id: 'Extra-DimensionalLens',
    name: 'Extra-Dimensionale Linse',
    expansion: 'SD',
    level: 3,
    effect: `
      <p>
      <b>In deinem Schritt <i>Aktionen ausführen</i> (1x pro Zug):</b><br/>
      Du darfst dir die obersten 3 Karten des Erzfeind-Stapels ansehen. Lege sie in
      einer Reihenfolge deiner Wahl zurück.
      </p>
      `,
  },
  {
    id: 'SeersBracer',
    name: 'Armschienen des Sehers',
    expansion: 'SD',
    level: 3,
    effect: `
      <p>
      <b>Wenn du in deinem Schritt <i>Aktionen ausführen</i> 1 Energie erhältst (1x pro Zug):</b><br/>
      Wähle 1 anderen Spieler, der 1 Karte zieht.
      </p>
      `,
  },
]
