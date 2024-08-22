import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'RemnantsVoidShard',
    name: 'Reliquiors Leere-Scherbe',
    expansion: 'TA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Erhalte 1 <span class="aether">&AElig;</span>.<br/>
      Erhalte 1 <span class="aether">&AElig;</span>, aber nur zum Bündeln
      oder Aktivieren eines Risses.
      </p>
      `,
  },
  {
    id: 'QuiliussErasure',
    name: "Quilius' Beseitigung",
    expansion: 'TA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Wirken:</b> Füge 1 Schaden zu.<br/>
      Fügst du damit einem MONSTER Schaden zu? +1 Schaden.
      </p>
      `,
  },
  {
    id: 'ZhanasFleetingEmber',
    name: "Z'hanas Flüchtige Glut",
    expansion: 'TA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Wirken:</b> Füge 1 Schaden zu.
        <span class="or">OR</span>
      <b>Wirken:</b> Wirke 1 anderen deiner gebundenen Zauber mit 
      <span class="aether">&AElig;</span>-Kosten von 4 oder weniger. Der Zauber
      bleibt gebunden.
      </p>
      `,
  },
  {
    id: 'BlightedRootClump',
    name: 'Verdorbener Wurzelballen',
    expansion: 'TA',
    level: 2,
    effect: `
      <p>
      <b>Immer wenn die letzte Karte eines Vorrats erworben oder zerstört wird:</b><br/>
      Wählt 1 Spieler, der 3 Leben heilt.
      </p>
      `,
  },
  {
    id: 'PetrifiedWitchFinger',
    name: 'Erstarrter Finger der Furie',
    expansion: 'TA',
    level: 2,
    effect: `
      <p>
      <b>Immer wenn die letzte Karte eines Vorrats erworben oder zerstört wird:</b><br/>
      Wählt 1 Spieler, der 3 Energie erhält.
      </p>
      `,
  },
  {
    id: 'WaywardScraps',
    name: 'Überreste des Wegbereiters',
    expansion: 'TA',
    level: 2,
    effect: `
      <p>
      <b>Im Schritt <i>Aktionen ausführen</i> jedes Spieler-Zuges (1x pro Zug):</b><br/>
      Du darfst 4 <span class="aether">&AElig;</span> bezahlen. Tust du das? Bündele jeden Riss IV
      (bei allen Spielern).
      </p>
      `,
  },
  {
    id: 'TrueSightMonocle',
    name: 'Monokel der Klarsicht',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      <b>Zu Beginn deines Schrittes <i>Aktionen ausführen</i>:</b><br/>
      Sind 6 oder mehr Karten in deinem Ablagestapel? Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'EntwinedAetherStrands',
    name: 'Verschlungene Ätherstränge',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      <b>Am Ende deines Schrittes <i>Karten ziehen</i>:</b><br/>
      Du darfst 1 Karte deiner Wahl von der Hand ablegen und 1 Karte ziehen.
      </p>
      `,
  },
  {
    id: 'SiphoningBlade',
    name: 'Kanalisierende Klinge',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      <b>Wenn du einen Riss bündelst oder aktivierst (1x pro Zug):</b><br/>
      Erhalte 1 Energie.
      </p>
      `,
  },
  {
    id: 'GemEncrustedAnklet',
    name: 'Kristallverkrustete Fusskette',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      <b>Einmalig zu Beginn deines ersten Zuges:</b><br/>
      Erhalte 3 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
]
