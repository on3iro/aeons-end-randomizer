import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'DezmodiasOblivionShard',
    name: 'Dezmodias Nihil-Scherbe',
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Erhalte 2 <span class="aether">&AElig;</span>, aber nicht zum Erwerb von Artefakten oder Zaubern.
        </p>
      `,
  },
  {
    id: 'UlgimorsCoalFragment',
    name: 'Ulgimors Kohlen-Fragment',
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Erhalte 2 <span class="aether">&AElig;</span> und erleide 1 Schaden.
        <span class="or">OR</span>
        Heile 1 Leben.
        </p>
      `,
  },
  {
    id: 'IndirasLoneOpal',
    name: 'Indiras Einsamer Opal',
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Erhalte 1 <span class="aether">&AElig;</span>.<br/>
        Du darfst 1 Zauber mit <span class="aether">&AElig;</span>-Kosten von 4 oder
        weniger von der Hand wirken.
        </p>
      `,
  },
  {
    id: 'MistsAmethystParagon',
    name: 'Mists Makellose Amethyst-Scherbe',
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Erhalte 1 <span class="aether">&AElig;</span>.<br/>
        Wähle 1 anderen Spieler. Dieser Spieler darf 1 Zauber seiner Wahl von der Hand an seine
        (auch dunklen) Risse binden.
        </p>
      `,
  },
  {
    id: 'MalastarsImmolate',
    name: 'Malastars Brennende Luft',
    expansion: 'IW',
    level: 1,
    subtype: 'Spell',
    effect: `
        <p>
        <b>Gebunden:</b> Immer wenn du 1 oder mehr Leben verlierst, erhalte 1 Energie.<br/>
        <b>Wirken:</b> Füge 1 Schaden zu.
        </p>
      `,
  },
  {
    id: 'YanMagdasIlluminate',
    name: 'Yan Magdas Erleuchtung',
    expansion: 'IW',
    level: 1,
    subtype: 'Spell',
    effect: `
        <p>
        <b>Gebunden:</b> Aktivierst oder bündelst du 1 deiner Risse in deinem Zug? Füge 1 Schaden zu.<br/>
        <b>Wirken:</b> Füge 1 Schaden zu.
        </p>
      `,
  },
  {
    id: 'EyeOfTheMaelstrom',
    name: 'Auge des Malstroms',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        <b>Im Spielaufbau:</b><br/>
        Legt diese Karte neben einen Vorrat mit <span class="aether">&AElig;</span>-Kosten
        von 4 oder mehr.
        </p>
        <p>
        <b>Immer wenn ein Spieler eine Karte dieses Vorrats erwirbt:</b><br/>
        Dieser Spieler heilt 1 Leben.
        </p>
      `,
  },
  {
    id: 'WellOfDespair',
    name: 'Brunnen der Verzweiflung',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        <b>Immer wenn ein Spieler dem Erzfeind mit einem einzelnen Zauber insgesamt 6
        oder mehr Schaden zufügt:</b><br/>
        Legt 1 Zeitmarker hierauf.<br/>
        <span class="hint">(Hinweis: Hierbei werden mehrere Schadensquellen eines Zaubers zusammengezählt.)</span>
        </p>
        <p>
        <b>Zu Beginn des Erzfeind-Zuges:</b><br/>
        Fügt dem Erzfeind X Schaden zu. X = Anzahl Zeitmarker hierauf.
        </p>
      `,
  },
  {
    id: 'CronesAmulet',
    name: 'Amulett der Muhme',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        <b>Immer wenn ein Spieler einen Riss aktiviert:</b><br/>
        Dieser Spieler darf 1 Karte auf seiner Hand zerstören.
        </p>
      `,
  },
  {
    id: 'EdibleFungusChunks',
    name: 'Geniessbare Pilzhappen',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        <b>Immer wenn ein Spieler Leben heilt:</b><br/>
        Dieser Spieler heilt +1 Leben.
        </p>
      `,
  },
  {
    id: 'UmbralHornOfWar',
    name: 'Kriegshorn des Schattens',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        <b>Im Spielaufbau:</b><br/>
        Legt diese Karte neben einen Zauber-Vorrat mit <span class="aether">&AElig;</span>-Kosten
        von 6 oder mehr.
        </p>
        <p>
        <b>Dauerhaft:</b><br/>
        Zauber dieses Vorrats fügen +2 Schaden zu, wenn sie gewirkt werden.
        </p>
      `,
  },
  {
    id: 'TheBrokenMask',
    name: 'Maske des Königs',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        <b>Immer nachdem ein Spieler seine Spezialfähigkeit eingesetzt hat:</b><br/>
        Dieser Spieler wählt 1 anderen Spieler, der 1 Energie erhält.
        </p>
      `,
  },
  {
    id: 'AlchemistsAlembic',
    name: 'Alchemistischer Destillier-Kolben',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      <b>In deinem Schritt <i>Aktionen ausführen</i> (1x pro Zug):</b><br/>
      Wenn du zum zweiten Mal in diesem Zug ein Artefakt oder einen Kristall mit
      <span class="aether">&AElig;</span>-Kosten von jeweils 4 oder mehr spielst: Füge 3 Schaden zu.
      </p>
      `,
  },
  {
    id: 'SoothsayersPouch',
    name: 'Beutel des Wahrsagers',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      <b>Im Spielaufbau:</b><br/>
      Wähle 1 weiteren Schatz der Stufe 1 und füge ihn deinem STARTDECK hinzu.<br/><br/>
      Als Gruppe dürft ihr 1 weiteren Schatz der Stufe 2 wählen.<br/><br/>
      Für beides gelten die normalen Schatz-Regeln.
      </p>
      `,
  },
  {
    id: 'SuppressingPin',
    name: 'Stecknadel der Unterbindung',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      <b>In deinem Schritt <i>Aktionen ausführen</i> (1x pro Zug):</b><br/>
      Du darfst 1 Karte deiner Wahl von der Hand abwerfen. Tust du das? Wähle 1 anderen Spieler, der
      1 Karte zieht, und du darfst 1 Zeitmarker auf einen PLAN in der Auslage legen.
      </p>
      `,
  },
  {
    id: 'Quicksilver',
    name: 'Quecksilber',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      <b>Immer wenn du einen Zauber mit <span class="aether">&AElig;</span>-Kosten von 2 oder mehr wirkst:</b><br/>
      Du darfst 1 anderen Spieler wählen, der den gewirkten Zauber auf die Hand nimmt (statt ihn auf deinen
      Ablagestapel zu legen).
      </p>
      `,
  },
  {
    id: 'BandOfRetrieval',
    name: 'Kordel der Rückholung',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      <b>Zu Beginn deines Schritts <i>Zauber wirken</i>:</b><br/>
      Wirfst du jetzt 1 Energie ab? Den nächsten Zauber, den du in diesem Schritt wirkst, nimmst
      du zuürck auf die Hand (statt auf den Ablagestapel).
      </p>
      `,
  },
  {
    id: 'PurifiedBangle',
    name: 'Geläuterter Armreif',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      <b>In deinem Schritt <i>Aktionen ausführen</i> (1x pro Zug):</b><br/>
      Du darfst 9 <span class="aether">&AElig;</span> bezahlen und 1 Schaden erleiden. Tust du das?
      Lege 1 Erzfeind Karte in der Auslage zurück auf den Erzfeind-Stapel.
      </p>
      `,
  },
]
