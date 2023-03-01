import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'HissingAcid',
    name: 'Sssyczący Kwasss',
    expansion: 'NA',
    tier: 1,
    type: 'Power',
    power: 3,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 6 <span class="aether">&AElig;</span>.<br />
        <br /> 
        <b>Moc 3:</b> Odkryj wierzchnią kartę talii tur. Jeżeli jest nią karta tury gracza, następuje trzykrotne Wyzwolenie.
        W innym przypadku dowolny gracz otrzymuje 5 obrażeń.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Wreck',
    name: 'Ruina',
    expansion: 'NA',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Gravehold otrzymuje 1 obrażenie.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BaneCommander',
    name: 'Herszt Zguby',
    expansion: 'NA',
    tier: 1,
    type: 'Minion',
    hp: 6,
    effect: `
      <p>
        <b>Trwały:</b> Wyzwolenie. Dowolny gracz otrzymuje 1 obrażenie.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SkyTremor',
    name: 'Niebowstrząs',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 1:</b> Dwukrotne Wyzwolenie. Gravehold otrzymuje 4 obrażenia.	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'EngulfingMadness',
    name: 'Pochłaniające Szaleństwo',
    expansion: 'NA',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 2:</b> Dwukrotne Wyzwolenie. Dowolny gracz otrzymuje 4 obrażenia.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Separate',
    name: 'Rozłączenie',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Gravehold otrzymuje 2 obrażenie. Gracz z najdroższym przygotowanym Zaklęciem odrzuca to Zaklęcie.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'NeedleDoom',
    name: 'Żądlec Zagłady',
    expansion: 'NA',
    tier: 2,
    type: 'Minion',
    hp: 12,
    effect: `
      <p>
        <b>Trwały:</b> Wyzwolenie. Gravehold otrzymuje 2 obrażenia.	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Marked',
    name: 'Oznaczony',
    expansion: 'NA',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Gracz z najmniejszą liczbą punktów życia otrzymuje 3 obrażenia.	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Eradicate',
    name: 'Eliminacja',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Dowolny gracz odrzuca z ręki trzy najdroższe karty.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'FlashOfDecay',
    name: 'Przebłysk Zgnilizny',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Moc 2:</b> Dwukrotne wyzwolenie. Gracz z najdroższym przygotowanym Zaklęciem niszczy je.
        Jeżeli to Zaklęcie kosztowało nie więcej niż 4 <span class="aether">&AElig;</span> lub żadne Zaklęcie nie zostało zniszczone, 
        następuje Wyzwolenie.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Terrify',
    name: 'Przerażenie',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Trzykrotne Wyzwolenie. Gravehold otrzymuje 2 obrażenia. Dowolny gracz niszczy dwie karty z ręki.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RayOfDesolation',
    name: 'Fala Rozpaczy',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>Moc 1:</b> Dwukrotne Wyzwolenie. Gracze wspólnie niszczą 2 najdroższe przygotowane Zaklęcia.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'ThunderousTempest',
    name: 'Ogłuszająca Burza',
    expansion: 'NA',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 9 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 2:</b> Wyzwolenie. Jeżeli na stosie odrzuconych kart tury znajdują się dwie karty Nemezis, 
        dowolny gracz otrzymuje 8 obrażeń, W innym wypadku dowolny gracz otrzymuje 5 obrażeń.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Sacrifice',
    name: 'Poświęcenie',
    expansion: 'NA',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Czterokrotne Wyzwolenie. 
        <span class="or">ALBO</span> 
        Gravehold otrzymuje 4 obrażenia i dowolny gracz otrzymuje 4 obrażenia.	
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Burialskulk',
    name: 'Pogrobowy Prześladowca',
    expansion: 'NA',
    tier: 3,
    type: 'Minion',
    hp: 18,
    effect: `
      <p>
        <b>Trwały:</b> Dwukrotne Wyzwolenie.	
      </p>
    `,
    upgraded: true,
  },
]
