import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'Rupture',
    name: 'Rozwarcie',
    expansion: 'TA',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Wyzwolenie. Dowolny gracz otrzymuje 4 obrażenia.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'FurrowOfDestruction',
    name: 'Szczelina Zniszczenia',
    expansion: 'TA',
    tier: 1,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 2:</b> Dwukrotne Wyzwolenie. Gravehold otrzymuje 3 obrażenia.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Mangle',
    name: 'Wycisk',
    expansion: 'TA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Gracz z największą liczbą Ładunków odrzuca 3 Ładunki i otrzymuje 3 obrażenia. Inny gracz odrzuca 3 karty z ręki.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'HowlingSlayer',
    name: 'Wyjący Zabójca',
    expansion: 'TA',
    tier: 2,
    type: 'Minion',
    hp: 14,
    effect: `
      <p>
        <b>Trwały:</b> Dowolny gracz otrzymuje 2 obrażenia. Dowolny gracz odrzuca kartę z ręki.
      </p>
    `,
    upgraded: true,
  },
]
