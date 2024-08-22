import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'Rupture',
    name: 'Aufreissen',
    expansion: 'TA',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        SPEZIAL 1. Fügt 1 Spieler eurer WAhl 4 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'FurrowOfDestruction',
    name: 'Furche der Zerstörung',
    expansion: 'TA',
    tier: 1,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Verhindern:</b> Bezahle 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Zeit 2:</b> SPEZIAL 2. Fügt der <i>Feste</i> 3 Schaden zu.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Mangle',
    name: 'Zerfetzen',
    expansion: 'TA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
      Fügt dem Spieler mit der meisten Energie 3 Schaden zu. Dieser Spieler wirft 3 Energie ab.<br/>
      Wählt 1 anderen Spieler, der 3 Karten seiner Wahl von der Hand abwirft.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'HowlingSlayer',
    name: 'Jaulender Schlitzer',
    expansion: 'TA',
    tier: 2,
    type: 'Minion',
    hp: 14,
    effect: `
      <p>
        <b>Ansturm:</b> Fügt 1 Spieler eurer Wahl 2 Schaden zu. Wählt 1 Spieler, der 1 Karte seiner
        Wahl von der Hand abwirft.
      </p>
    `,
    upgraded: true,
  },
]
