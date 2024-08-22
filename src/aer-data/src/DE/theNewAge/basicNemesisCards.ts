import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'DrillbeakWurm-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    name: 'Maulwurm',
    hp: 6,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt 1 Spieler eurer Wahl 1 Schaden zu.
        Fügt der <i>Feste</i> 1 Schaden zu.
      </p>
    `,
  },
  {
    id: 'CarriodeColony-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    name: 'Dornenschnäbel',
    hp: 4,
    effect: `
      <p>
        <b>Sofort:</b> Dieses MONSTER erleidet X Schaden. X= Anzahl der Spieler.<br />
        <b>Ansturm:</b> SPEZIAL 1.
      </p>
    `,
  },
  {
    id: 'ChaosOrb-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Chaos Orb',
    power: 3,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 3:</b> SPEZIAL 1.<br/>
        Fügt der <i>Feste</i> 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Disorient-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    name: 'Verstören',
    effect: `
      <p>
      SPEZIAL 1.
      </p>
      <p>
      Fügt 1 Spieler eurer Wahl 1 Schaden zu. Dieser Spieler wirft 1 Karte von der Hand ab.
      </p>
      <p>
      Ist die gerade abgeworfene Karte ein Kristall? Fügt der <i>Feste</i> 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Rend-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    name: 'Zerreissen',
    effect: `
      <p>
      SPEZIAL 1.
      </p>
      <p>
      Fügt der <i>Feste</i> 1 Schaden zu.
      </p>
      <p>
      Fügt 1 Spieler eurer Wahl 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'UnnervingHowl-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Bedrohendes Geheul',
    power: 2,
    effect: `
      <p>
        <b>Zeit 2:</b> SPEZIAL 1.<br/>
        Wählt 1 Spieler, der 2 Kristalle seiner Wahl von der Hand abwirft.
      </p>
    `,
  },
  {
    id: 'CeaselessDarkness-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Endlose Dunkelheit',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 5 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 1.<br/>
        Fügt 1 Spieler eurer Wahl 3 Schaden zu. Wählt 1 Spieler, der 1 Karte seiner
        Wahl von der Hand abwirft.
      </p>
    `,
  },
  {
    id: 'AetherShock-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    name: 'Ätherischer Schock',
    effect: `
      <p>
        SPEZIAL 1.<br/>
        Fügt dem Spieler mit den meisten gebundenen Zaubern 1 Schaden zu.
        Dieser Spieler wirft 1 gebundenen Zauber seiner Wahl ab.
      </p>
    `,
  },
  {
    id: 'Decimate-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    name: 'Dezimieren',
    effect: `
      <p>
      SPEZIAL 2.<br/>
      Wählt 1 Spieler, der 2 Energie erhält.
      <span class="or">OR</span>
      Fügt der <i>Feste</i> 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'BlindEnigma-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    name: 'Kristall-Koloss',
    hp: 7,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt 1 Spieler eurer Wahl 1 Schaden zu. Ist das Erzfeind-Level 2 oder höher? +2 Schaden.
      </p>
    `,
  },
  {
    id: 'PlanarCollision-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Kollision der Ebenen',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Wähle 2 deiner gebundenen Zauber und wirf sie ab.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2.
      </p>
    `,
  },
  {
    id: 'SpiritSnare-NA',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    name: 'Geistschlange',
    power: 3,
    effect: `
      <p>
        <b>Verhindern:</b> Wirf 1 Karte mit <span class="aether">&AElig;</span>-Kosten von 5 oder mehr von deiner Hand ab.<br />
        <br />
        <b>Zeit 3:</b> SPEZIAL 1.<br/>
        Fügt 1 Spieler eurer Wahl 2 Schaden zu. Dieser Spieler wirft 1 Zauber seiner Wahl von der Hand ab.
      </p>
    `,
  },
  {
    id: 'Dement-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    name: 'Dement',
    effect: `
      <p>
      SPEZIAL 2.<br/>
      Fügt 1 Spieler eurer Wahl 1 Schaden zu. Dieser Spieler legt die Karte mit den höchsten
      <span class="aether">&AElig;</span>-Kosten von seiner Hand oben auf sein Deck.
      </p>
    `,
  },
  {
    id: 'Decay-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    name: 'Verfall',
    effect: `
      <p>
      SPEZIAL 2.
      </p>
      <p>
      Fügt 1 Spieler eurer Wahl 3 Schaden zu.
      <span class="or">OR</span>
      Fügt der <i>Feste</i> 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'CullingScythe-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    name: 'Aussieben',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 1.<br/>
        Fügt dem Spieler mit dem geringsten übrigen Leben 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Fugue-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    name: 'Umnachtung',
    effect: `
      <p>
      Wählt 1 Spieler, der 3 Karten seiner Wahl von der Hand abwirft.
      Fügt diesem Spieler 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'VolcanicZala-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Minion',
    name: 'Speiender Zala',
    hp: 10,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt der <i>Feste</i> 3 Schaden zu.
        <span class="or">OR</span>
        Wählt 1 Spieler, der 2 Energie abwirft.
      </p>
    `,
  },
  {
    id: 'PortalGuardian-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Minion',
    name: 'Portal Wächter',
    hp: 8,
    effect: `
      <p>
        <b>Ansturm:</b> SPEZIAL 1.<br/>
        Fügt einem Spieler eurer Wahl 1 Schaden zu.
      </p>
    `,
  },
  {
    id: 'ObliteratingMeteor-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    name: 'Vernichtender Meteor',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Wirf 4 Karten deiner Wahl von der Hand ab.<br />
        <br />
        <b>Zeit 1:</b> SPEZIAL 2.<br/>
        Fügt der <i>Feste</i> 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Mutilate-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    name: 'Verstümmeln',
    effect: `
      <p>
        SPEZIAL 1.<br/>
        Wählt insgesamt 2 gebundene Zauber und werft sie ab. Fügt 1 Spieler eurer Wahl
        2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Needlemaw-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Minion',
    name: 'Nadelmaul',
    hp: 11,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt der <i>Feste</i> 2 Schaden zu.
      </p>
    `,
  },
  {
    id: 'MorbidGyre-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    name: 'Tödlicher Mahlstrom',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 1:</b> SPEZIAL 2.<br/>
        Werft insgesamt 3 Karten eurer Wahl von der Hand ab.
      </p>
    `,
  },
  {
    id: 'GravitySplinter-NA',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    name: 'Gravitationssplitter',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2.<br/>
        Fügt dem Spieler mit den wenigsten aktiven Rissen 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Eliminate-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Eliminieren',
    effect: `
      <p>
        SPEZIAL 3.
        <span class="or">OR</span>
        Fügt der <i>Feste</i> 6 Schaden zu.
        <span class="or">OR</span>
        Fügt 1 Spieler eurer Wahl 5 Schaden zu.
      </p>
    `,
  },
  {
    id: 'CrushingStorm-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    name: 'Wütender Sturm',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Zerstöre 2 deiner aktiven Risse.<br />
        <br />
        <b>Zeit 1:</b> SPEZIAL 3.
      </p>
    `,
  },
  {
    id: 'GnashingMaw-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    name: 'Zermalmender Kiefer',
    power: 2,
    effect: `
      <p>
        <b>Zeit 2:</b> SPEZIAL 1.<br/>
        Wählt den Spieler mit dem gebundenen Zauber mit den höchsten <span class="aether">&AElig;</span>-Kosten.
        Dieser Spieler zersört diesen Zauber. Hat der zerstörte Zauber <span class="aether">&AElig;</span>-Kosten
        von 4 oder weniger? SPEZIAL 1 und fügt 1 Spieler eurer Wahl 3 Schaden zu.
      </p>
    `,
  },
  {
    id: 'Disperse-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Zerstreuen',
    effect: `
      <p>
        SPEZIAL 2.<br/>
        Fügt 1 Spieler eurer Wahl 2 Schaden zu. Dieser Spieler zerstört die Karte mit den höchsten
        <span class="aether">&AElig;</span>-Kosten auf seiner Hand.
      </p>
    `,
  },
  {
    id: 'Gore-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Ausbluten',
    effect: `
      <p>
      SPEZIAL 2.<br/>
      Wählt den Spieler mit der Karte mit den höchsten <span class="aether">&AElig;</span>-Kosten auf der Hand.
      Dieser Spieler wirft 3 Karten seiner WAhl von der Hand ab. Dann erleidet er 2 Schaden für jede Karte mit
      <span class="aether">&AElig;</span>-Kosten von 2 oder mehr auf seiner Hand.
      </p>
    `,
  },
  {
    id: 'HexofDestruction-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    name: 'Fluch der Zerstörung',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2.<br/>
        Fügt der <i>Feste</i> 4 Schaden zu. Wählt 1 Spieler, der die obersten 4 Karten seines Decks zerstört.
      </p>
    `,
  },
  {
    id: 'EternalWatcher-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Minion',
    name: 'Ewiger Wächter',
    hp: 10,
    effect: `
      <p>
      <b>Ansturm:</b> Fügt 1 Spieler eurer Wahl 3 Schaden zu. Hat dieses MONSTER 6 oder weniger
      Leben? Es heilt 3 Leben.
      </p>
    `,
  },
  {
    id: 'Sunder-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Entzweien',
    effect: `
      <p>
      Fügt der <i>Feste</i> 4 Schaden zu. Fügt dem Spieler eurer Wahl mit dem geringsten übrigen Leben
      4 Schaden zu.
      <span class="or">OR</span>
      Mischt alle Erzfeind-Reihenfolgekarten im Ablagestapel zurück in das Reihenfolgedeck.
      </p>
    `,
  },
  {
    id: 'Topple-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    name: 'Einsturz',
    effect: `
      <p>
      SPEZIAL 2.<br/>
      Fügt der <i>Feste</i> 4 Schaden zu.
      </p>
    `,
  },
  {
    id: 'MonstrosityofOmens-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Minion',
    name: 'Das Omen',
    shields: 5,
    hp: 0,
    effect: `
      <p>
        <b>Dauerhaft:</b> Wenn du diesem MONSTER Schaden zufügst, fügst du nur 1 Schaden zu.<br />
        <br />
        <b>Ansturm:</b> Fügt der <i>Feste</i> Schaden in Höhe des aktuellen Lebens dieses
        MONSTERS zu.
      </p>
    `,
  },
  {
    id: 'DoomAegis-NA',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    name: 'Mantel des Untergangs',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 1:</b> SPEZIAL 1.<br/>
        Fügt dem Spieler mit der meisten Energie 4 Schaden zu. Dieser Spieler wirft all seine
        Energie ab.
      </p>
    `,
  },
]
