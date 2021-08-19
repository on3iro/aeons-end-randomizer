import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'AgonyField-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Feld der Qualen',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Zerstöre 1 Karte deiner Wahl auf deiner Hand, die 2 <span class="aether">&AElig;</span> oder mehr kostet.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 1. Wählt 1 Spieler, der 3 Karten seiner Wahl von der Hand abwirft und 1 Karte zieht.
      </p>
    `,
  },
  {
    id: 'BaneSire-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Unheilbringer',
    hp: 6,
    effect: `
      <p>
        <b>Ansturm:</b> SPEZIAL 1.
      </p>
    `,
  },
  {
    id: 'BleedStatic-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Laufendes Blut',
    power: 3,
    effect: `
      <p>
        <b>Zeit 3:</b> Wählt den Spieler mit den meisten Zaubern auf seinen Rissen: Erleide 2 Schaden für jeden Zauber auf deinen Rissen.
      </p>
    `,
  },
  {
    id: 'EyeofNothing-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Auge des Nichts',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2.
      </p>
    `,
  },
  {
    id: 'HazeSpewer-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Dunstspeier',
    hp: 5,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt der <i>Feste</i> Schaden in Höhe des übrigen Lebens dieses Monsters zu. Dieses Monster erleidet 1 Schaden.
      </p>
    `,
  },
  {
    id: 'Skewer-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Aufspiessen',
    effect: `
      <p>
        SPEZIAL 1.<br />
        Fügt 1 Spieler eurer Wahl 3 Schaden zu. Dieser Spieler zieht 1 Karte.
      </p>
    `,
  },
  {
    id: 'Slaughter-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Abschlachten',
    effect: `
      <p>
        SPEZIAL 1.<br />
        Fügt der <i>Feste der letzten Ruhe</i> 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'WovenSky-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Verwobener Himmel',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Wirf 3 Karten deiner Wahl von deiner Hand ab.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 1. Fügt 1 Spieler eurer Wahl 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Awaken-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Erwachen',
    effect: `
      <p>
        SPEZIAL 2. Fügt der <i>Feste der letzten Ruhe</i> 3 Schaden zu. 
        <span class="or">ODER</span>
        Bringt das zuletzt getötete Monster vom Ablagestapel zurück ins Spiel.
      </p>
    `,
  },
  {
    id: 'Cauterizer-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Veröder',
    shields: 3,
    hp: 0,
    effect: `
      <p>
        <b>Dauerhaft:</b> Wenn du diesem Monster Schaden zufügst, fügst du nur 1 Schaden zu.<br />
        <br />
        <b>Ansturm:</br> Wählt 1 Spieler und fügt ihm Schaden in Höhe des aktuellen Lebens dieses Monsters zu.
      </p>
    `,
  },
  {
    id: 'Dispel-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Verbannen',
    effect: `
      <p>
        SPEZIAL 2.<br />
        Der Spieler mit den meisten gebundenen Zaubern, wählt seinen gebundenen Zauber mit den höchsten 
        <span class="aether">&AElig;</span>-Kosten und wirft ihn ab.
      </p>
    `,
  },
  {
    id: 'Needlemaw-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Nadelmaul',
    hp: 11,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt der <i>Feste der letzten Ruhe</i> 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'LayWaste-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Lay Waste',
    effect: `
      <p>
        SPEZIAL 2.<br />
        Fügt 1 Spieler eurer Wahl 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'PulverizingRay-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Power',
    name: 'Pulverisierungsstrahl',
    power: 1,
    effect: `
      <p>
        <b>Zeit 1:</b> Entscheidet 6x:<br />
        Fügt der <i>Feste</i> der letzten Ruhe 3 Schaden zu.
        <span class="or">ODER</span>
        Wählt 1 Spieler, der 1 Kristall von seiner Hand abwirft.
      </p>
    `,
  },
  {
    id: 'Venomite-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Giftmilbe',
    hp: 9,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt dem Spieler eurer Wahl mit dem geringsten übrigen Leben 2 Schaden zu.
        <span class="or">ODER</span>
        Wählt 1 Spieler, der 1 seiner gebundenen Zauber abwirft, der 3 <span class="aether">&AElig;</span> oder mehr kostet.
      </p>
    `,
  },
  {
    id: 'DoomAegis-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Mantel des Untergangs',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 1:</b> Fügt dem Spieler mit der meisten Energie 4 Schaden zu. Dieser Spieler wirft all seine Energie ab.
      </p>
    `,
  },
  {
    id: 'GatherDarkness-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Aufziehende Dunkelheit',
    effect: `
      <p>
        Wählt 1 Spieler, der seinen Ablagestapel auf sein Deck legt und es mischt. Dann zerstört dieser Spieler die 4 obersten Karten seines Decks.<br />
        SPEZIAL 2.
      </p>
    `,
  },
  {
    id: 'JaggedOne-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Minion',
    name: 'Splitterwesen',
    hp: 14,
    effect: `
      <p>
        <b>Ansturm:</b> SPEZIAL 2.
      </p>
    `,
  },
  {
    id: 'Obliterate-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Auslöschen',
    effect: `
      <p>
        SPEZIAL 2.<br />
        Der Spieler mit den meisten aktiven Rissen: Zerstört 4 Karten auf seiner Hand
        <span class="or">ODER</span>
        erleidet 4 Schaden.
      </p>
    `,
  },
  {
    id: 'RealityRupture-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Realitätsbruch',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Zerstöre 2 deiner gebundenen Zauber mit 
        <span class="aether">&AElig;</span>-Kosten von jeweils 3 oder mehr.<br />
        <br />
        <b>Zeit 1:</b> SPEZIAL 3.
      </p>
    `,
  },
  {
    id: 'Sunder-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Entzweien',
    effect: `
      <p>
        Fügt der <i>Feste</i> 4 Schaden zu. Fügt dem Spieler eurer Wahl mit dem geringsten übrigen Leben 4 Schaden zu.
        <span class="or">ODER</span>
        Mischt alle Erzfeind-Reihenfolgekarten im Ablagestapel zurück in das Reihenfolgedeck.
      </p>
    `,
  },
  {
    id: 'Topple-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Topple',
    effect: `
      <p>
        SPEZIAL 2.<br />
        Fügt der <i>Feste der letzten Ruhe</i> 4 Schaden zu.
      </p>
    `,
  },
]
