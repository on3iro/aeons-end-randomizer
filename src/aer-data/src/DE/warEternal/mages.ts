import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'WE',
    name: 'Dezmodia',
    id: 'Dezmodia',
    mageTitle: 'Wunderkind der Leere',
    ability: `
        <h2>Sturmwind-Sigille</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wähle 1 Spieler, der 1 seiner aktiven Risse I oder II mit 1 deiner entsprechenden
        Sigillen-Risse ersetzt. Gebundene Zauber kommen zurück auf die Hand. Dann darf dieser Spieler
        sofort 1 Zauber seiner Wahl von der Hand an seine Risse binden.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Nihil-Scherbe',
        expansion: 'WE',
        id: 'OblivionShared',
        cost: 0,
        effect: `
            <p>
              Erhalte 2 <span class="aether">&AElig;</span>, aber nicht zum Erwerb von Artefakten oder
              Zaubern.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Garu',
    id: 'Garu',
    mageTitle: 'Vereidigter Beschützer',
    ability: `
        <h2>Kolossale Kraft</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wirf bis zu 4 deiner gebundenen Zauber ab.</p>
        <p>Füge 2 Schaden zu. +X Schaden. X = 4 pro gerade abgeworfenem Zauber. Dieser Schaden ist aufteilbar.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Fackel',
        expansion: 'WE',
        id: 'Torch',
        cost: 0,
        effect: `
            <p>
              <b>Wirken:</b> Füge 1 Schaden zu.
              <span class="or">ODER</span>
              <b>Wirken:</b> Bündele 1 Riss deiner Wahl (bei 1 Spieler deiner Wahl).
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Gex',
    id: 'Gex',
    mageTitle: 'Riss-Magier-Beraterin',
    ability: `
        <h2>Vimkunst-Schwur</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Wähle bis zu 2 Karten in deinem Ablagestapel mit <span class="aether">&AElig;</span>-Kosten von 0. Zerstöre sie.</p>
        <p>Wähle 1 anderen Spieler, der 1 Karte zieht und 2 Leben heilt.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Bruchgeoden-Scherbe',
        expansion: 'WE',
        id: 'ShatteredGeode',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Wähle 1 anderen Spieler. Du darfst die oberste Karte seines Ablagestapels auf die Hand nehmen.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Mazahaedron',
    id: 'Mazahaedron',
    mageTitle: 'Steinkreis-Mystiker',
    ability: `
        <h2>Untererde-Mantra</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Du darfst gratis 1 Kristall mit <span class="aether">&AElig;</span>-Kosten von 4 oder weniger
        erwerben.</p>
        <p>Die <i>Feste der letzten Ruhe</i> heilt 4 Leben.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Weltherz-Scherbe',
        expansion: 'WE',
        id: 'WorldheartShard',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.
              <span class="or">ODER</span>
              Erhalte 2 <span class="aether">&AElig;</span>, aber nur zum Erwerb einer Karte. Die nächste Karte, die du
              erwirbst, legst du auf den Ablagestapel 1 anderen Spielers deiner Wahl.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Mist',
    id: 'MistWE',
    mageTitle: 'Leeren-Schreiter',
    ability: `
        <h2>Gesegnetes Brandmal</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Zauber wirken</i>:</p>
        <p>Wähle bis zu 3 gebundene Zauber auf den Rissen der Spieler. Wirke sie. Nach jedem Wirken
        dieser Zauber: Wähle 1 anderen Spieler, der diesen Zauber auf die Hand nimmt (das muss
        nicht der Spieler sein, bei dem er gebunden war).</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Makellose Amethyst-Scherbe',
        expansion: 'WE',
        id: 'AmethystParagon',
        cost: 0,
        effect: `
            <p>
              Erhalte 1 <span class="aether">&AElig;</span>.<br/>
              Wähle 1 anderen Spieler. Dieser Spieler darf 1 Zauber seiner Wahl von der Hand an seine
              (auch dunklen) Risse binden.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Quilius',
    id: 'Quilius',
    mageTitle: 'Riss-Magier-Assassine',
    ability: `
        <h2>Quietus-Gelübde</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Füge X Schaden zu. X = 2 pro Trophäe.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Auslöschen',
        expansion: 'WE',
        id: 'Extinguish',
        cost: 0,
        effect: `
            <p>
              <b>Wirken:</b> Füge 1 Schaden zu.<br/>
              Tötest du damit ein MONSTER vom Erzfeind Stapel? Quilius erhält 1 Trophäe.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Ulgimor',
    id: 'Ulgimor',
    mageTitle: 'Schattenhaut-Biest',
    ability: `
        <h2>Eidolon-Schleier</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Heile 6 Leben.</p>
        <p>Bist du ERSCHÖPFT? Wähle stattdessen 1 anderen Spieler, der 5 Leben heilt.</p>`,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Kohlen-Scherbe',
        expansion: 'WE',
        id: 'CoalShard',
        cost: 0,
        effect: `
            <p>
              Hast du 3 oder mehr Leben? Erhalte 3 <span class="aether">&AElig;</span>, 1 Energie und
              erleide 2 Schaden.<br />
              <b>Andernfalls:</b> Zerstöre diese Karte.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'WE',
    name: 'Yan Magda',
    id: 'YanMagda',
    mageTitle: 'Erleuchtete im Exil',
    ability: `
        <h2>Kaiserliches Ritual</h2>
        <p class="ability-activation">In DEINEM SPIELER-ZUG während <i>Aktionen ausführen</i>:</p>
        <p>Erwirb gratis 1 Karte von 1 Vorrat deiner Wahl. Hast du 4 aktive Risse? Wähle 1 anderen Spieler.
        Dieser Spieler erwirbt gratis 1 Karte von 1 Vorrat seiner Wahl, die er oben auf sein Deck legt.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Erleuchtung',
        expansion: 'WE',
        id: 'Illuminate',
        cost: 0,
        effect: `
            <p>
              <b>Gebunden:</b> Aktivierst oder bündelst du 1 deiner Risee in diesem Zug? Füge 1 Schaden zu.<br/>
              <b>Wirken:</b> Füge 1 Schaden zu.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
