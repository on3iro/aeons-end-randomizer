import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Ambush-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Zasadzka',
    effect: `
      <p>
        Wyzwolenie. Gravehold otrzymuje 2 obrażenia. Dowolny gracz otrzymuje 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'Conduct-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Pułapka',
    effect: `
      <p>
        Wyzwolenie. Gracz posiadający najwięcej Ładunków otrzymuje 2 obrażenia oraz Ładunek.
      </p>
    `,
  },
  {
    id: 'CreepingCurse-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Pełzająca Klątwa',
    power: 3,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 3:</b> Wyzwolenie. Dowolny gracz otrzymuje 2 obrażenia. Gracze wspólnie odrzucają dwie karty z ręki.
      </p>
    `,
  },
  {
    id: 'Daze-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Attack',
    name: 'Oszołomienie',
    effect: `
      <p>
        Dowolny gracz otrzymuje 2 obrażenia oraz odrzuca kartę z ręki. Jeżeli odrzucona karta ma koszt 0 <span class="aether">&AElig;</span>, Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'EndlessChasm-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Nieskończona Przepaść',
    power: 2,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 2:</b> Dwukrotne Wyzwolenie. Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'AetherExtract-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Power',
    name: 'Wyciąg z Eteru',
    power: 2,
    effect: `
      <p>
        <b>Moc 2:</b> Wyzwolenie. Dowolny gracz odrzuca dwa Klejnoty. Jeżeli obydwa z tych Klejnotów mają koszt 0 <span class="aether">&AElig;</span>, następuje Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'RavenousLeviathan-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Minion',
    name: 'Wygłodniały Lewiatan',
    hp: 6,
    effect: `
      <p>
        <b>Trwały:</b> Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'SpineThresher-Legacy',
    expansion: 'Legacy',
    tier: 1,
    type: 'Minion',
    name: 'Młocarniak',
    shields: 3,
    hp: 1,
    effect: `
      <p>
        <b>Trwały:</b> Wyzwolenie. Dowolny gracz otrzymuje 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'CausticCocoon-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Minion',
    name: 'Żrący Kokon',
    hp: 9,
    effect: `
      <p>
        <b>Trwały:</b> Wyzwolenie. Gravehold otrzymuje 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'Sap-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Wycisk',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Dowolny gracz odrzuca 2 Ładunki.
        <span class="or">ALBO</span>
        Dwukrotne Wyzwolenie. Dowolny gracz otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'Tremor-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Power',
    name: 'Wstrząsy',
    power: 2,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 2:</b> Dwukrotne Wyzwolenie. Gravehold otrzymuje 4 obrażenia.
      </p>
    `,
  },
  {
    id: 'Drain-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Odsączenie',
    effect: `
      <p>
        Wyzwolenie. Gravehold otrzymuje 2 obrażenia. Gracze wspólnie odrzucają dwa przygotowane Zaklęcia. Następnie, jeżeli którykolwiek gracz ma przygotowane Zaklęcie o koszcie 4 <span class="aether">&AElig;</span> lub więcej, następuje Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'HummingHive-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Minion',
    name: 'Buczący Ul',
    shields: 3,
    hp: 5,
    effect: `
      <p>
        <b>Trwały:</b> Dowolny gracz otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'Hunted-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Attack',
    name: 'Wytropienie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Gracz z najmniejszą liczbą punktów życia otrzymuje 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'TemptingOffer-Legacy',
    expansion: 'Legacy',
    tier: 2,
    type: 'Power',
    name: 'Kusząca Propozycja',
    power: 3,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 3:</b> Dwukrotne Wyzwolenie. Gracz z najmniejszą liczbą punktów życia otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'Annihilate-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Anihilacja',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Gracz z najdroższą kartą na ręce odrzuca dwie karty z ręki. Następnie, za każdą kartę na ręce tego gracza, kosztującą 2 <span class="aether">&AElig;</span> lub więcej, Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'FacetOgre-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Minion',
    name: 'Ludojad',
    shields: 4,
    hp: 1,
    effect: `
      <p>
        <b>Trwały:</b> Gravehold otrzymuje tyle obrażeń, ile żetonów Tarcz ma na sobie ten Poplecznik. Jeżeli ten Poplecznik ma na sobie dwa lub mniej żetonów Tarcz, otrzymuje jeden żeton Tarczy.
      </p>
    `,
  },
  {
    id: 'FlashofDecay-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Power',
    name: 'Przebłysk Zgnilizny',
    power: 2,
    effect: `
      <p>
        <b>Moc 2:</b> Dwukrotne Wyzwolenie. Gracz z najdroższym przygotowanym Zaklęciem niszczy je. Jeżeli to zaklęcie kosztowało 4 <span class="aether">&AElig;</span> lub mniej, lub żadne Zaklęcie nie zostało zniszczone, następuje Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'GatheringStorm-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Power',
    name: 'Nadciągający Huragan',
    power: 2,
    effect: `
      <p>
        <b>Aby odrzucić:</b> Wydaj 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>Moc 2:</b> Dwukrotne Wyzwolenie. Jeżeli na stosie odrzuconych kart tury znajdują się dwie karty Nemezis, dowolny gracz otrzymuje 4 obrażenia. W przeciwnym przypadku, Gravehold otrzymuje 4 obrażenia.
      </p>
    `,
  },
  {
    id: 'MaddeningSpectre-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Minion',
    name: 'Irytujące Widmo',
    shields: 2,
    hp: 7,
    effect: `
      <p>
        <b>Trwały:</b> Dwukrotne Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'Scatter-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Rozsianie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Dowolny gracz niszczy najdroższą kartę z ręki.
      </p>
    `,
  },
  {
    id: 'Suffocate-Legacy',
    expansion: 'Legacy',
    tier: 3,
    type: 'Attack',
    name: 'Duszność',
    effect: `
      <p>
        Trzykrotne Wyzwolenie.
        <span class="or">ALBO</span>
        Gravehold otrzymuje 3 obrażenia oraz dowolny gracz otrzymuje 3 obrażenia.
      </p>
    `,
  },
]
