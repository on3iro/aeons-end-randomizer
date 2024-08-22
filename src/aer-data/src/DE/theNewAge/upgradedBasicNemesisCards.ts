import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'HissingAcid',
    name: 'Zischende Säure',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    power: 3,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 3:</b> Sieh dir die oberste Karte des Reihenfolgedecks an.
        <b>Siehst du eine Spieler-Reihenfolgekarte?</b> SPEZIAL 3.<br/>
        <b>Andernfalls:</b> Fügt 1 Spieler eurer Wahl 5 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Wreck',
    name: 'Demolieren',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
      SPEZIAL 2.<br/>
      Fügt der <i>Feste</i> 1 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BaneCommander',
    name: 'Unheilkommandant',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    hp: 6,
    effect: `
      <p>
        <b>Ansturm:</b> SPEZIAL 1.<br/>
        Fügt 1 Spieler eurer Wahl 1 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SkyTremor',
    name: 'Himmelsbeben',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 1:</b> SPEZIAL 2. Fügt der <i>Feste</i> 4 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'EngulfingMadness',
    name: 'Verschlingender Wahn',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2. Fügt 1 Spieler eurer Wahl 4 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Separate',
    name: 'Zerlegen',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
      SPEZIAL 2.<br/>
      Fügt der <i>Feste</i> 2 Schaden zu.<br/>
      Wählt den Spieler mit dem gebundenen Zauber mit den höchsten <span class="aether">&AElig;</span>-Kosten.
      Dieser Spieler wirft diesen Zauber ab.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'NeedleDoom',
    name: 'Nadelspeier',
    expansion: 'NA',
    tier: 2,
    type: 'Minion',
    hp: 12,
    effect: `
      <p>
        <b>Ansturm:</b> SPEZIAL 1.<br/>
        Fügt der <i>Feste</i> 2 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Marked',
    name: 'Gebrandmarkt',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
      SPEZIAL 2.<br/>
      Fügt dem Spieler mit den geringsten übrigen Leben 3 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Eradicate',
    name: 'Vernichten',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
      SPEZIAL 2.<br/>
      Wählt 1 Spieler, der die 3 Karten mit den höchsten <span class="aether">&AElig;</span>-Kosten
      von seiner Hand abwirft.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'FlashOfDecay',
    name: 'Strahl des Verfalls',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
      <b>Zeit 2:</b> SPEZIAL 2.<br/>
      Wählt den Spieler mit dem gebundenen Zauber mit den höchsten <span class="aether">&AElig;</span>-Kosten.
      Dieser Spieler zerstört diesen Zauber. Hat dieser Zauber <span class="aether">&AElig;</span>-Kosten von
      4 oder weniger oder wurde gerade kein Zauber zerstört? SPEZIAL 1.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Terrify',
    name: 'Verängstigen',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
      SPEZIAL 3.<br/>
      Fügt der <i>Feste</i> 2 Schaden zu.<br/>
      Wählt 1 Spieler, der 2 Karten seiner Wahl auf der Hand zerstört.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RayOfDesolation',
    name: 'Strahl der Verwüstung',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Zeit 1:</b> SPEZIAL 2.<br/>
        Wählt die insgesamt 2 gebundenen Zauber mit den höchsten <span class="aether">&AElig;</span>-Kosten.
        Zerstört sie.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'ThunderousTempest',
    name: 'Tosender Sturm',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 9 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 1.<br/>
        <b>Befinden sich 2 Erzfeind-Reihenfolgekarten im Ablagestapel?</b> Fügt 1 Spieler eurer
        Wahl 8 Schaden zu. <b>Andernfalls:</b> Fügt 1 Spieler eurer Wahl 5 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Sacrifice',
    name: 'Opferung',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        SPEZIAL 2.
        <span class="or">OR</span>
        Fügt der <i>Feste</i> 4 Schaden zu. Fügt 1 Spieler eurer Wahl 4 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Burialskulk',
    name: 'Feuergräber',
    expansion: 'NA',
    tier: 3,
    type: 'Minion',
    hp: 18,
    effect: `
      <p>
        <b>Ansturm:</b> SPEZIAL 2.
      </p>
    `,
    upgraded: true,
  },
]
