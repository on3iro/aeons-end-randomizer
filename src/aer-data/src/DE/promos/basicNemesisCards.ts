import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Menace-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    name: 'Dunkle Bedrohung',
    effect: `
      <p>
        Werft insgesamt 4 Karten eurer Wahl von der Hand ab.
      </p>
    `,
  },
  {
    id: 'GlyphEnigma-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Minion',
    name: 'Glyph Enigma',
    hp: 7,
    effect: `
      <p>
        <b>Persistent:</b> Gravehod suffers 1 damage. If the nemesis tier is 2 or higher, Gravehold suffers 2 additional damage.
      </p>
    `,
  },
  {
    id: 'GravitySplinter-promos',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    name: 'Schwerefeld-Splitter',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2. Wählt den Spieler mit den wenigsten aktiven Rissen und fügt ihm 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'WorldPurge-promos',
    expansion: 'promos',
    tier: 3,
    type: 'Power',
    name: 'Schleier der Welt',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 3.
        <span class="or">ODER</span>
        Fügt der <i>Feste der letzten Ruhe</i> 7 Schaden zu.
      </p>
    `,
  },
  {
    id: 'BaneSire-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Minion',
    name: 'Bane Sire',
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'Decimate-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    name: 'Hinraffen',
    effect: `
      <p>
        SPEZIAL 2 und wählt 1 Spieler der 2 Energie erhält.
        <span class="or">ODER</span>
        Fügt der <i>Feste der letzten Ruhe</i> 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'SpiritCage-promos',
    expansion: 'promos',
    tier: 1,
    type: 'Power',
    name: 'Eingekerkerte Seele',
    power: 3,
    effect: `
      <p>
        <b>Verhindern:</b> Wirf 1 Karte deiner Wahl mit <span class="aether">&AElig;</span>-Kosten von 5 oder mehr von deiner Hand ab.<br />
        <br />
        <b>Power 3:</b> SPEZIAL 2. Wählt 1 Spieler, der 1 Zauber seiner Wahl von seiner Hand abwirft.
      </p>
    `,
  },
  {
    id: 'BanefulCrux-promos',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    name: 'Verheerende Rache',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Wirf 2 Karten deiner Wahl mit <span class="aether">&AElig;</span>-Kosten von 4 oder mehr von deiner Hand ab.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2. Fügt der <i>Feste der letzten Ruhe</i> 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Negate-promos',
    expansion: 'promos',
    tier: 2,
    type: 'Attack',
    name: 'Zunichte machen',
    effect: `
      <p>
        SPEZIAL 2.<br />
        Wählt 1 Spieler, der 1 Karte auf seiner Hand mit den höchsten <span class="aether">&AElig;</span>-Kosten zerstört.
        <span class="or">ODER</span>
        SPEZIAL 2. Fügt der <i>Feste der letzten Ruhe</i> 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Gallowskulk-promos',
    expansion: 'promos',
    tier: 3,
    type: 'Minion',
    name: 'Knochennager',
    hp: 10,
    effect: `
      <p>
        Fügt dem Spieler mit dem geringsten übrigen Leben 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Unmake-promos',
    expansion: 'promos',
    tier: 3,
    type: 'Attack',
    name: 'Aus den Welten bannen',
    effect: `
      <p>
        SPEZIAL 2.<br />
        Wählt 1 Spieler, der die 3 obersten Karten seines Decks zerstört. Fügt diesem Spieler 3 Schaden zu.
      </p>
    `,
  },
]
