import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Unscheinbarer Sionit',
    id: 'LurkingSionite',
    cost: 3,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      Befindet sich mindestens 1 Unscheinbarer Sionit im Ablagestapel eines anderen Spielers?
      Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Unreiner Sprengstein',
    id: 'UnrefinedBlaststone',
    cost: 6,
    effect: `
      <p>
      Erhalte 3 <span class="aether">&AElig;</span>.
      <span class="or">OR</span>
      Zerstörst du jetzt 1 Karte dieses Vorrats? Füge 3 Schaden zu.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Exogranit',
    id: 'Exogranite',
    cost: 3,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>
      <span class="or">OR</span>
      Zerstöre diese Karte. Erhalte 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Wiederkehrender Jaspis',
    id: 'RecurringJasper',
    cost: 4,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      Ist die oberste Karte deines Ablagestapels ein Zauber?
      Du darfst diesen Kristall oben auf dein Deck legen.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Aufgeladenes Rubidium',
    id: 'EnergizedRubidium',
    cost: 5,
    effect: `
      <p>
      Erhalte 3 <span class="aether">&AElig;</span>.<br/>
      Wirft 1 anderer Spieler 1 Karte seiner Wahl von der Hand ab?
      Dieser Spieler erhält 1 Energie.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'NA',
    name: 'Resonanzperle',
    id: 'ResonantPearl',
    cost: 3,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.<br/>
      Wirft 1 anderer Spieler eine Resonanzperle von der Hand ab und zieht 1 Karte?
      Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Gebändigtes Feuer',
    id: 'CagedFire',
    cost: 3,
    effect: `
      <p>
      Wähle 1 Spieler und zerstöre die oberste Karte seines Ablagestapels.
      <span class="or">OR</span>
      Zerstöre diese Karte. Heile 2 Leben.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Galvanisierter Polyeder',
    id: 'GalvanizedBauble',
    cost: 3,
    effect: `
      <p>
      Wähle 1 anderen Spieler und bündele 1 seiner Risse deiner Wahl.
      <span class="or">OR</span>
      Wähle 1 Spieler und wirke 1 seiner gebundenen Zauber. Du darfst diesen Zauber zerstören.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Ätherkanal',
    id: 'AetherConduit',
    cost: 4,
    effect: `
      <p>
      Hänge diese Karte an 1 Riss deiner Wahl an (bei einem Spieler deiner Wahl).
      </p>
      <p>
      <b>Angehängt:</b> Wird ein Zauber von diesem Riss gewirkt? Der Spieler, der den Zauber gewirkt
      hat, erhält 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Wohltuende Quelle',
    id: 'WellOfEnergy',
    cost: 7,
    effect: `
      <p>
      Die <i>Feste</i> heilt 2 Leben.
      <span class="or">OR</span>
      Wähle 1 Spieler, der 2 Leben heilt.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Schmerzkanal',
    id: 'PainConduit',
    cost: 3,
    effect: `
      <p>
      Hänge diese Karte an einen Riss deiner Wahl an (bei 1 Spieler deiner Wahl).
      </p>
      <p>
      <b>Angehängt:</b> Wird ein Zauber von diesem Riss gewirkt? +2 Schaden. Wirf diese Karte danach ab.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Verkettungskanal',
    id: 'LinkConduit',
    cost: 6,
    effect: `
      <p>
      Hänge diese Karte an 1 Riss deiner Wahl an (bei einem Spieler deiner Wahl).
      </p>
      <p>
      <b>Angehängt:</b> An diesen Riss dürfen 2 Zauber gleichzeitig gebunden sein.
      </p>
      `,
    keywords: ['attach'],
  },
  {
    type: 'Relic',
    expansion: 'NA',
    name: 'Galaxiekugel',
    id: 'MarbleGalaxy',
    cost: 2,
    effect: `
      <p>
      Erhalte 1 Energie.
      <span class="or">OR</span>
      Bündele 1 deiner dunklen Risse.
      </p>
      <p>
      Wirft 1 anderer Spieler 1 Galaxiekugel von der Hand ab und zieht 1 Karte? Führe
      zusätzlich den obigen, gerade nicht gewählten Effekt dieser Karte aus.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Reinigende Flut',
    id: 'DelugeOfPower',
    cost: 6,
    effect: `
      <p>
        <b>Wirken:</b> Füge 4 Schaden zu.<br/>
        Wähle 1 anderen Spieler. Dieser Spieler darf bis zu 2 Karten seiner Wahl von der Hand abwerfen und dann
        1 Karte für jede so abgeworfene Karte ziehen.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Nachhallender Schock',
    id: 'ReverberatingShock',
    cost: 4,
    effect: `
      <p>
        <b>ECHO.</b>
      </p>
      <p>
        <b>Wirken:</b> Füge 1 Schaden zu.<br/>
        Erhalte 1 <span class="aether">&AElig;</span>, aber nur zum Erwerb von Karten.
      </p>
      `,
    keywords: ['echo'],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Fatale Harmonie',
    id: 'FatalHarmony',
    cost: 5,
    effect: `
      <p>
      <b>Wirken:</b> Füge 4 Schaden zu.<br/>
      Wirft 1 anderer Spieler Fatale Harmonie von seiner Hand ab und zieht 1 Karte? Füge 3 Schaden zu.<br/>
      <span class="hint">(Hinweis: Das sind 2 Schadensquellen.)</span>
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Springendes Geschoss',
    id: 'BouncingBoom',
    cost: 6,
    effect: `
      <p>
      <b>ECHO.</b>
      </p>
      <p>
      <b>Wirken:</b> Füge 2 Schaden zu.
      </p>
        `,
    keywords: ['echo'],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Machtschub',
    id: 'SpiritLift',
    cost: 8,
    effect: `
      <p>
      <b>Gebunden (1x pro Zug):</b> Erhältst du 1 Energie? Wähle 1 anderen Spieler, der
      2 Energie erhält.<br/>
      <b>Wirken:</b> Füge 5 Schaden zu.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Lenk-Pfeile',
    id: 'Tethered Darts',
    cost: 3,
    effect: `
      <p>
      <b>Wiken:</b> Füge 2 Schaden zu.<br/>
      Ist dieser Zauber an einen aktiven Riss III oder IV gebunden? Wähle 1 anderen Spieler.
      Dieser Spieler darf diesen Zauber auf die Hand nehmen.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Kraftverstärker',
    id: 'ForceAmplifier',
    cost: 4,
    effect: `
      <p>
      <b>Wirken:</b> Füge 3 Schaden zu.<br/>
      Ist dieser Zauber an einen aktiven Riss III oder IV gebunden? +1 Schaden.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Geballte Ladung',
    id: 'ImbuedSmash',
    cost: 5,
    effect: `
      <p>
      <b>Wirken:</b> Füge 4 Schaden zu.<br/>
      Wirfst du jetzt 1 Karte von der Hand ab? Füge dem Erzfeind 2 Schaden zu.<br/>
      <span class="hint">(Hinweis: Das sind 2 Schadensquellen.)</span>
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'NA',
    name: 'Schematischer Schlag',
    id: 'PatternStrike',
    cost: 7,
    effect: `
      <p>
      <b>Wirken:</b> Füge 4 Schaden zu.<br/>
      Du darfst bis zu 2 Karten mit <span class="aether">&AElig;</span>-Kosten von 0 aus deinem
      Ablagestapel zurück auf die Hand nehmen.
      </p>
      `,
    keywords: [],
  },
]
