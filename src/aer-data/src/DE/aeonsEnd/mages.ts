import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'AE',
    name: 'Adelheim',
    id: 'Adelheim',
    mageTitle: 'Riss-Magier-Waffenschmied',
    ability: `
        <h2>Aetherium Schutzwall</h2>
        <p class="ability-activation">Im ERZFEIND-ZUG während der <i>Erzfeind-Aktion</i>:</p>
        <p>Zieht ihr einen ANGRIFF oder PLAN? Wirf ihn ab. Er wird nicht ausgeführt und ihr zieht keinen Ersatz.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Amethyst-Scherbe',
        expansion: 'AE',
        id: 'AmethystShard',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Wähle 1 anderen Spieler.<br />
              Dieser Spieler darf 1 Karte ziehen und 
              dann 1 Karte seiner Wahl von der Hand abwerfen.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Brama',
    id: 'Brama',
    mageTitle: 'Riss-Magier-Älteste',
    ability: `
        <h2>Den Abgrund Abschöpfen</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wähle 1 Spieler, der 4 Leben heilt.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Verschüttetes Licht',
        expansion: 'AE',
        id: 'BuriedLight',
        cost: 0,
        effect: `
            <p>
              <b>Wirken:</b> Füge 1 Schaden zu.<br/>
              Erhalte 1 <span class="aether">&AElig;</span> im Schritt <i>Aktionen ausführen</i>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Jian',
    id: 'Jian',
    mageTitle: 'Riss-Magier-Waise',
    ability: `
        <h2>Schwarzer Spiegel</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wähle 1 Spieler und wirke 1 seiner gebundenen Zauber. Der Zauber bleibt gebunden.</p>
        <p>Dann wirke diesen Zauber erneut
        <span class="hint">(und er wird abgelegt, wie üblich).</span></p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Mondstein-Scherbe',
        expansion: 'AE',
        id: 'MoonstoneShard',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Erhalte 1 <span class="aether">&AElig;</span>, aber nur zum Erwerb von Kristallen.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Kadir',
    id: 'Kadir',
    mageTitle: 'Riss-Magier-Forscherin',
    ability: `
        <h2>Tor ins Anderseits</h2>
        <p class="ability-activation">Im SPIELER-ZUG DEINER WAHL während <i>Aktionen ausführen</i>:</p>
        <p>Der Spieler darf bis zu 3 Zauber aus seinem Ablagestapel zurück auf die Hand 
          nehmen. Dann darf er bis zu 2 Zauber an jeden seiner 
          aktiven Risse binden.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Smaragd-Scherbe',
        expansion: 'AE',
        id: 'EmeraldShard',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.
              <span class="or">ODER</span>
              Wähle 1 Spieler, der 1 Leben heilt.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Lash',
    id: 'Lash',
    mageTitle: 'Riss-Magier-Späher',
    ability: `
        <h2>Blitzschnell Reagieren</h2>
        <p class="ability-activation">Im SPIELER-ZUG DEINER WAHL während <i>Aktionen ausführen</i>:</p>
        <p>Mische die Spieler-Reihenfolgekarte 1 Spielers deiner 
          Wahl zurück in das Reihenfolgedeck und füge diesem 
          Spieler 1 Schaden zu.
        </p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Quartz-Scherbe',
        expansion: 'AE',
        id: 'QuartzShard',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Sieh dir die oberste Karte des Reihenfolgedecks an. Siehst du eine 
              Spieler-Reihenfolgekarte? Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Dann darfst du die angesehene Karte unter das Deck schieben.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Mist',
    id: 'Mist',
    mageTitle: 'Kapitänin der Dolchspitze',
    ability: `
        <h2>Rat der Zukunft</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wähle 1 anderen Spieler, der 4 Karten zieht.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Granatium-Scherbe',
        expansion: 'AE',
        id: 'Garnet Shard',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.
              <span class="or">ODER</span>
              Wähle 1 Spieler und wirke 1 seiner gebundenen Zauber.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Phaedraxa',
    id: 'Phaedraxa',
    mageTitle: 'Riss-Magier-Seherin',
    ability: `
        <h2>Rune der Vorsicht</h2>
        <p class="ability-activation">Direkt nachdem ihr eine REIHENFOLGEKARTE GEZOGEN habt:</p>
        <p>Verhindere in diesem Zug allen Schaden, der den Spielern 
          wie auch der <i>Feste der letzten Ruhe</i> zugefügt wird.
        </p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Turmalin-Scherbe',
        expansion: 'AE',
        id: 'TourmalineShard',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Wähle 1 anderen Spieler. Dieser Spieler darf 1 Schaden erleiden, 
              um 1 Karte seiner Wahl auf seiner Hand zu zerstören.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'AE',
    name: 'Xaxos',
    id: 'Xaxos',
    mageTitle: 'Riss-Magier-Adept',
    ability: `
        <h2>Metaphysische Verbindung</h2>
        <p class="ability-activation">Im SPIELER-ZUG DEINER WAHL während <i>Aktionen ausführen</i>:</p>
        <p>Erhalte insgesamt 4 Energie und verteile sie auf andere Spieler deiner Wahl. 
          Decke alle noch verdeckten Reihenfolgekarten auf und lege sie in einer Reihenfolge 
          deiner Wahl verdeckt zurück.
        </p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Leuchtfeuer',
        expansion: 'AE',
        id: 'Flare',
        cost: 0,
        effect: `
            <p>
              <b>Wirken:</b> Füge 1 Schaden zu.<br />
              Sieh dir die oberste Karte des Reihenfolgedecks an. Siehst du eine Spieler-Reihenfolgekarte?<br />
              +2 Schaden.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
