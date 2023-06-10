import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Afflict-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Heimsuchung',
    effect: `
      <p>
        SPEZIAL 1.<br/>
        Fügt 1 Spieler eurer Wahl 3 Schaden zu. Dieser Spieler darf 1 Karte seiner Wahl aus seinem
        Ablagestapel zurück auf die Hand nehmen.
      </p>
    `,
  },
  {
    id: 'CatacombDrone-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Minion',
    name: 'Katakomben-Drohne',
    hp: 5,
    effect: `
      <p>
        <b>Ansturm:</b> SPEZIAL 1.<br/>
        Fügt der <i>Feste der letzten Ruhe</i> 1 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Encroach-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Eindringen',
    effect: `
      <p>
        SPEZIAL 1.<br/> 
        Seht euch die oberste Karte des Reihenfolgedecks an. Ist es eine Spieler-Reihenfolgekarte? Fügt genau diesem Spieler
        2 Schaden zu.<br/>
        <b>Andernfalls:</b> Fügt der <i>Feste der letzten Ruhe</i> 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'HeartofNothing-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Herz des Nichts',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Wirf 4 Karten deiner Wahl von der Hand ab.<br />
        <br/>
        <b>Zeit 2:</b> SPEZIAL 2.
        <span class="or">ODER</span>
        Fügt 1 Spieler eurer Wahl 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'HowlingSpinners-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Minion',
    name: 'Jaulendes Gebein',
    hp: 5,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt 1 Spieler eurer Wahl 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'NightUnending-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Endlose Nacht',
    power: 3,
    effect: `
      <p>
        <b>Zeit 3:</b> Wählt den Spieler mit den meisten gebundenen Zaubern. Fügt der Feste X Schaden zu.
        X = 2 je gebundenen Zauber dieses Spielers.
      </p>
    `,
  },
  {
    id: 'Nix-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Ins Nichts',
    effect: `
      <p>
        SPEZIAL 1.<br/>
        Wählt einen Spieler. Fügt diesem Spieler 1 Schaden zu. Dann wählt dieser Spieler 1 Karte auf seiner
        Hand mit den höchsten <span class="aether">&AElig;</span>-Kosten und wirft sie ab.
      </p>
    `,
  },
  {
    id: 'PlanarCollision-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Kollision der Ebenen',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Wähle 2 deiner gebundenen Zauber. Wirf sie ab.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2.
      </p>
    `,
  },
  {
    id: 'Thrash-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Zerschmettern',
    effect: `
      <p>
        SPEZIAL 1. Werft insgesamt 2 Karten eurer Wahl von der Hand ab.
      </p>
    `,
  },
  {
    id: 'AphoticSun-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Lichtlose Sonne',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 1. Wählt den Spieler mit der meisten Energie und werft alle seine Energie ab.
        Fügt diesem Spieler 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'ChaosFlail-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Wüstes Chaos',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2. Wählt 1 Spieler. Dieser legt seinen Ablagestapel auf sein Deck und mischt es. Dann sieht er
        sich die 2 obersten Karten seines Decks an und zerstört die Karte mit den höchsten <span class="aether">&AElig;</span>-Kosten
        davon.
      </p>
    `,
  },
  {
    id: 'MageEnder-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Magier-Vernichter',
    hp: 9,
    effect: `
      <p>
        <b>Ansturm:</b> Wählt den Spieler mit den meisten aktiven Rissen. Fügt diesem Spieler 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Mangleroot-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Wurzel der Zerstörung',
    hp: 12,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt der <i>Feste der letzten Ruhe</i> 3 Schaden zu. Dieses Monster erleidet 2 Schaden.
      </p>
    `,
  },
  {
    id: 'MorbidGyre-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Tödlicher Mahlstrom',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 1:</b> SPEZIAL 2. Werft insgesamt 3 Karten eurer Wahl von der Hand ab.
      </p>
    `,
  },
  {
    id: 'Mutilate-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Attack',
    name: 'Verstümmeln',
    effect: `
      <p>
        SPEZIAL 1.<br/>
        Wählt insgesamt 2 gebundene Zauber und werft sie ab. Fügt 1 Spieler eurer Wahl 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'NullScion-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Abkömmling der Leere',
    hp: 11,
    effect: `
      <p>
        <b>Ansturm:</b> SPEZIAL 1.
      </p>
    `,
  },
  {
    id: 'Smite-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Attack',
    name: 'Niederschmettern',
    effect: `
      <p>
        SPEZIAL 2.<br/>
        Fügt der <i>Feste der letzten Ruhe</i> 2 Schaden zu.
      </p>
    `,
  },

  {
    id: 'ApocalypseRitual-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Apokalyptisches Ritual',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> Fügt der <i>Feste</i> 5 Schaden für jede Erzfeind-Reihenfolgekarte im Ablagestapel zu.
      </p>
    `,
  },
  {
    id: 'Banish-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Verbannen',
    effect: `
      <p>
        SPEZIAL 2.<br/>
        Wählt den Spieler mit den meisten gebundenen Zaubern. Fügt diesem Spieler X Schaden zu.
        X = Anzahl gebundene Zauber dieses Spielers.
      </p>
    `,
  },
  {
    id: 'CataclysmicFate-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Verheerendes Schicksal',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Wähle 1 deiner gebundenen Zauber mit <span class="aether">&AElig;</span>-Kosten von 5 oder mehr. Zerstöre ihn und 1 Riss,
        an den er gebunden ist.<br/>
        <br/>
        <b>Zeit 1:</b> Fügt dem Spieler mit dem geringsten übrigen Leben 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'MonstrosityofOmens-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Minion',
    name: 'Das Omen',
    shields: 5,
    hp: 0,
    effect: `
      <p>
        <b>Dauerhaft:</b> Wenn du diesem MONSTER Schaden zufügst, fügst du nur 1 Schaden zu.<br />
        <br />
        <b>Ansturm:</b> Fügr der <i>Feste</i> Schaden in Höhe des aktuellen Lebens dieses MONSTERS zu.
      </p>
    `,
  },
  {
    id: 'Engulf-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Verschlingen',
    effect: `
      <p>
        Nehmt den zuletzt abgelegten ANGRIFF im Erzfeind-Ablagestapel und führt ihn erneut aus.
      </p>
    `,
  },
  {
    id: 'Quell-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Bändigen',
    effect: `
      <p>
        Fügt der <i>Feste der letzten Ruhe</i> 7 Schaden zu.
        <span class="or">ODER</span>
        SPEZIAL 3.
      </p>
    `,
  },
  {
    id: 'Throttle-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Erdrosseln',
    effect: `
      <p>
        SPEZIAL 2.<br/>
        Wählt 1 Spieler. Dieser Spieler zerstört 3 Karten seiner Wahl auf der Hand mit den höchsten <span class="aether">&AElig;</span>-Kosten.
      </p>
    `,
  },
  {
    id: 'WitheringBeam-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Vernichtender Strahl',
    power: 2,
    effect: `
      <p>
        <b>Zeit 2:</b> SPEZIAL 2. Wählt die ingesamt 2 gebundenen Zauber mit den höchsten <span class="aether">&AElig;</span>-Kosten. Zerstört sie.
      </p>
    `,
  },
]
