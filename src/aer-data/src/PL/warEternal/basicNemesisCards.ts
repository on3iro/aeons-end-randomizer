import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Afflict-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Dokuczliwy Dotyk',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Dowolny gracz otrzymuje 3 obrażenia i może dobrać na rękę kartę ze swojego stosu kart odrzuconych.
      </p>
    `,
  },
  {
    id: 'CatacombDrone-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Minion',
    name: 'Robotnica z Katakumb',
    hp: 5,
    effect: `
      <p>
        <b>TRWAŁY:</b> Wyzwolenie. Gravehold otrzymuje 1 obrażenie.
      </p>
    `,
  },
  {
    id: 'Encroach-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Wtargnięcie',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Odkryj wierzchnią kartę talii tur. Jeżeli odkryta została karta tury gracza, ten gracz otrzymuje 2 obrażenia. W innym przypadku, 
        Gravehold otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'HeartofNothing-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Serce Nicości',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Odrzuć cztery karty z ręki.<br />
        <br />
        <b>MOC 2:</b> Dwukrotne Wyzwolenie.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Dowolny gracz otrzymuje 4 obrażenia.
      </p>
    `,
  },
  {
    id: 'HowlingSpinners-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Minion',
    name: 'Wijący Tkacze',
    hp: 5,
    effect: `
      <p>
        <b>TRWAŁY:</b> Dowolny gracz otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'NightUnending-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Niekończąca się noc',
    power: 3,
    effect: `
      <p>
        <b>MOC 3:</b> Gravehold otrzymuje 2 obrażenia za każde Zaklęcie przygotowane przez gracza, który ma najwięcej przygotowanych Zaklęć.
      </p>
    `,
  },
  {
    id: 'Nix-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Wykończenie',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Dowolny gracz otrzymuje 1 obrażenie i odrzuca z ręki kartę o najwyższej wartości.
      </p>
    `,
  },
  {
    id: 'PlanarCollision-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Power',
    name: 'Kolizja Planarna',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Odrzuć dwa przygotowane Zaklęcia.<br />
        <br />
        <b>MOC 2:</b> Dwukrotne Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'Thrash-WE',
    expansion: 'WE',
    tier: 1,
    type: 'Attack',
    name: 'Młócka',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Gracze wspólnie odrzucają 2 karty z ręki.
      </p>
    `,
  },
  {
    id: 'AphoticSun-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Posępne Słońce',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Wyzwolenie. Gracz posiadający najwięcej Ładunków otrzymuje 3 obrażenia i traci wszystkie swoje Ładunki.
      </p>
    `,
  },
  {
    id: 'ChaosFlail-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Kiścień Chaosu',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Dwukrotne Wyzwolenie. Dowolny gracz umieszcza swój stos kart odrzuconych na wierzchu swojej talii po czym ją tasuje.
        Następnie ten gracz odkrywa dwie wierzchnie karty swojej talii i niszczy najdroższą z odkrytych kart.
      </p>
    `,
  },
  {
    id: 'MageEnder-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Zabójca Magów',
    hp: 9,
    effect: `
      <p>
        <b>TRWAŁY:</b> Gracz z największą liczbą otwartych Bram otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'Mangleroot-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Rozrywokrzew',
    hp: 12,
    effect: `
      <p>
        <b>TRWAŁY:</b> Gravehold otrzymuje 3 obrażenia. Ten Poplecznik otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'MorbidGyre-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Power',
    name: 'Makabryczny Wir',
    power: 1,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 1:</b> Dwukrotne Wyzwolenie. Gracze wspólnie odrzucają 3 karty z ręki.
      </p>
    `,
  },
  {
    id: 'Mutilate-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Attack',
    name: 'Okaleczenie',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Gracze wspólnie odrzucają 2 przygotowane Zaklęcia. Dowolny gracz otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'NullScion-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Minion',
    name: 'Potomek Nicości',
    hp: 11,
    effect: `
      <p>
        <b>TRWAŁY:</b> Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'Smite-WE',
    expansion: 'WE',
    tier: 2,
    type: 'Attack',
    name: 'Porażenie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },

  {
    id: 'ApocalypseRitual-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Rytuał Apokalipsy',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Gravehold otrzymuje 5 obrażeń za każdą kartę tury Nemezis w stosie odrzuconych kart tur.
      </p>
    `,
  },
  {
    id: 'Banish-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Wygnanie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gracz z największą liczbą przygotowanych Zaklęć otrzymuje po 1 obrażeniu za każde z nich.
      </p>
    `,
  },
  {
    id: 'CataclysmicFate-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Skazanie na Zagładę',
    power: 1,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Zniszcz przygotowane Zaklęcie o koszcie 5 lub więcej <span class="aether">&AElig;</span> oraz Bramę, 
        na której było ono przygotowane.<br />
        <br />
        <b>MOC 1:</b> Gracz z najmniejszą liczbą punktów życia otrzymuje 4 obrażenia.
      </p>
    `,
  },
  {
    id: 'MonstrosityofOmens-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Minion',
    name: 'Abominacja Omenów',
    shields: 5,
    hp: 0,
    effect: `
      <p>
        Wartość obrażeń zadawanych temu Poplecznikowi jest obniżana do 1 obrażenia.<br />
        <br />
        <b>TRWAŁY:</b> Gravehold otrzymuje obrażenia w liczbie równej aktualnej liczbie punktów życia tego Poplecznika.
      </p>
    `,
  },
  {
    id: 'Engulf-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Przytłoczenie',
    effect: `
      <p>
        Rozpatrz ponownie ostatnią odrzuconą kartę Ataku ze stosu kart odrzuconych Nemezis.
      </p>
    `,
  },
  {
    id: 'Quell-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Stłamszenie',
    effect: `
      <p>
        Gravehold otrzymuje 7 obrażeń.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Trzykrotne Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'Throttle-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Attack',
    name: 'Przyduszenie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Dowolny gracz niszczy trzy karty o najwyższej wartości, które ma na ręce.
      </p>
    `,
  },
  {
    id: 'WitheringBeam-WE',
    expansion: 'WE',
    tier: 3,
    type: 'Power',
    name: 'Promień Uwiądu',
    power: 2,
    effect: `
      <p>
        <b>MOC 2:</b> Dwukrotne Wyzwolenie. Gracze wspólnie niszczą 2 przygotowane Zaklęcia o najwyższej wartości.
      </p>
    `,
  },
]
