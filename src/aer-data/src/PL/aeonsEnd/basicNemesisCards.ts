import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'AgonyField-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Pole Agonii',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Zniszcz kartę na ręce kosztującą 2 <span class="aether">&AElig;</span> lub więcej.<br />
        <br />
        <b>MOC 2:</b> Wyzwolenie. Dowolny gracz odrzuca trzy karty z ręki, a następnie dobiera jedną kartę.
      </p>
    `,
  },
  {
    id: 'BaneSire-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Demiurg Zguby',
    hp: 6,
    effect: `
      <p>
        <b>TRWAŁY:</b> Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'BleedStatic-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Zakrzepły Krwotok',
    power: 3,
    effect: `
      <p>
        <b>MOC 3:</b> Gracz z największą liczbą przygotowanych Zaklęć, otrzymuje po 2 obrażenia za każde z nich.
      </p>
    `,
  },
  {
    id: 'EyeofNothing-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Oko Nicości',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Dwukrotne Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'HazeSpewer-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Mglaki',
    hp: 5,
    effect: `
      <p>
        <b>TRWAŁY:</b> Gravehold otrzymuje tyle obrażeń, ile obecnie życia ma ten Poplecznik. Następnie, ten Poplecznik otrzymuje 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'Skewer-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Szpikulec',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Dowolny gracz otrzymuje 3 obrażenia i dobiera kartę.
      </p>
    `,
  },
  {
    id: 'Slaughter-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Rzeź',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Gravehold otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'WovenSky-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Osnowa Firmamentu',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Odrzucić trzy karty z ręki.<br />
        <br />
        <b>MOC 2:</b> Wyzwolenie. Dowolny gracz otrzymuje 4 obrażenia.
      </p>
    `,
  },
  {
    id: 'Awaken-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Przebudzenie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        Gravehold otrzymuje 3 obrażenia.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Umieść z powrotem w grze ostatnią odrzuconą kartę Poplecznika ze stosu kart odrzuconych Nemezis.
      </p>
    `,
  },
  {
    id: 'Cauterizer-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Przyżegacz',
    shields: 3,
    hp: 0,
    effect: `
      <p>
        Wartość obrażeń zadawanych temu Poplecznikowi jest zawsze redukowana do 1.<br />
        <br />
        <b>TRWAŁY:</b> Dowolny gracz otrzymuje tyle obrażeń, ile obecnie życia ma ten Poplecznik.
      </p>
    `,
  },
  {
    id: 'Dispel-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Odrzucenie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gracz z największą liczbą przygotowanych Zaklęć odrzuca najdroższe przygotowane Zaklęcie.
      </p>
    `,
  },
  {
    id: 'Needlemaw-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Szpilopaszcze',
    hp: 11,
    effect: `
      <p>
        <b>TRWAŁY:</b> Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'LayWaste-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Zrównanie z Ziemią',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Dowolny gracz otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'PulverizingRay-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Power',
    name: 'Promień Zniszczenia',
    power: 1,
    effect: `
      <p>
        <b>Power 1:</b> Gravehold otrzymuje 3 obrażenia.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Dowolny gracz odrzuca kartę Klejnotu z ręki. Należy powtórzyć tę czynności dodatkowo 5 razy.
      </p>
    `,
  },
  {
    id: 'Venomite-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Jadomit',
    hp: 9,
    effect: `
      <p>
        <b>TRWAŁY:</b> Gracz z najmniejszą liczbą punktów życia otrzymuje 2 obrażenia. 
        <span class="or">ALBO</span>
        Dowolny gracz odrzuca przygotowane Zaklęcie kosztujące 3 <span class="aether">&AElig;</span> lub więcej.
      </p>
    `,
  },
  {
    id: 'DoomAegis-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Egida Zagłady',
    power: 1,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 1:</b> Gracz z największą liczbą Ładunków otrzymuje 4 obrażenia i odrzuca wszystkie Ładunki.
      </p>
    `,
  },
  {
    id: 'GatherDarkness-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Narastająca Ciemność',
    effect: `
      <p>
        Dowolny gracz umieszcza swój stos kart odrzuconych na wierzchu swojej talii, tasuje ją, a następnie niszczy cztery wierzchnie karty.<br />
        <br />
        Dwukrotne Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'JaggedOne-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Minion',
    name: 'Wyszczerbiony',
    hp: 14,
    effect: `
      <p>
        <b>TRWAŁY:</b> Dwukrotne Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'Obliterate-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Unicestwienie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gracz z największą liczbą otwartych Bram niszczy cztery karty ze swojej ręki lub otrzymuje 4 obrażenia.
      </p>
    `,
  },
  {
    id: 'RealityRupture-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Rozdarcie Materii',
    power: 1,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Zniszcz dwa przygotowane Zaklęcia, każde kosztujące 3 <span class="aether">&AElig;</span> lub więcej.<br />
        <br />
        <b>MOC 1:</b> Trzykrotne Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'Sunder-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Rozszarpanie',
    effect: `
      <p>
        Gravehold otrzymuje 4 obrażenia.<br />
        Gracz z najmniejszą liczbą punktów życia otrzymuje 4 obrażenia.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Wtasuj wszystkie karty tury Nemezis do talii tur.
      </p>
    `,
  },
  {
    id: 'Topple-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Obalenie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gravehold otrzymuje 4 obrażenia.
      </p>
    `,
  },
]
