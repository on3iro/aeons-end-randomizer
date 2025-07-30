import { UpgradedBasicNemesisCard } from '../../../../aer-types/types'

export const upgradedBasicNemesisCards: UpgradedBasicNemesisCard[] = [
  {
    id: 'ChaosStrike',
    name: 'Uderzenie Chaosu',
    expansion: 'O',
    tier: 1,
    type: 'Attack',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Gravehold otrzymuje 4 obrażenia.<br />
        <br />
        Dowolny gracz pozyskuje Przeklęty Odłamek z talii Klątw i umieszcza go na wierzchu swojej talii.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'LabyrinthWraith-O',
    expansion: 'O',
    tier: 1,
    type: 'Minion',
    name: 'Zjawa Labiryntu',
    hp: 6,
    effect: `
      <p>
        <b>Tułacz</b> <span class="hint">(Obniż do 1 wszystkie obrażenia zadawane mu obrażenia 
        przez zdolności i karty gracza. W swojej fazie głównej dowolny gracz może wydać dowolną liczbę <span class="aether">&AElig;</span>, 
        aby zadać Tułaczowi obrażenia równe wydanej liczbie <span class="aether">&AElig;</span>.)</span><br />
        <b>TRWAŁY:</b> Wyzwolenie. Dowolny gracz otrzymuje 1 obrażenie.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RainOfDevastation',
    name: 'Deszcz Zniszczenia',
    expansion: 'O',
    tier: 1,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Dwukrotne Wyzwolenie. Dowolny gracz otrzymuje 3 obrażenia.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'HuntTheWeak',
    name: 'Polowanie na Słabych',
    expansion: 'O',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Dowolny gracz otrzymuje 3 obrażenia.<br />
        <br />
        Gravehold otrzymuje 3 obrażenia.<br />
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Rescind',
    name: 'Unieważnienie',
    expansion: 'O',
    tier: 2,
    type: 'Attack',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gracz z najdroższym przygotowanym Zaklęciem odrzuca to Zaklęcie i otrzymuje 2 obrażenia.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'HarbingerOfMonstrosity-O',
    expansion: 'O',
    tier: 2,
    type: 'Minion',
    name: 'Herold Omenów',
    hp: 8,
    effect: `
      <p>
        Kiedy gracz zadaje obrażenia temu Poplecznikowi, obniż te obrażenia o 2, 
        do minimum 1.<br />
        <b>TRWAŁY:</b> Gravehold otrzymuje 2 obrażenia. Dowolny gracz odrzuca kartę z ręki.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'MageDevourer-O',
    expansion: 'O',
    tier: 2,
    type: 'Minion',
    name: 'Pożeracz Magów',
    hp: 11,
    effect: `
      <p>
        Kiedy gracz zadaje obrażenia temu Poplecznikowi, gracz z największą liczbą otwartych Bram 
        otrzymuje 1 obrażenie.<br />
        <b>TRWAŁY:</b> Wyzwolenie. Gravehold otrzymuje 1 obrażenie.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SilentDecay',
    name: 'Cichy Rozkład',
    expansion: 'O',
    tier: 2,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Dwukrotne Wyzwolenie. Gravehold otrzymuje 3 obrażenia. Dowolny gracz pozyskuje 
        Przeklęty Pocisk z talii Klątw i umieszcza go na wierzchu swojej talii.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'SkyCrush',
    name: 'Miażdżące Niebo',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Trzykrotne Wyzwolenie.<br />
        <br />
        Dowolny gracz niszczy dwie karty na ręce i otrzymuje 2 obrażenia.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Scour',
    name: 'Wypłukanie',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    effect: `
      <p>
        Trzykrotne Wyzwolenie.<br />
        <br />
        Gracz z najdroższą kartą na ręce odrzuca trzy najdroższe karty z ręki.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'Sacrifice-O',
    name: 'Ofiara',
    expansion: 'O',
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
    id: 'ScionOfTheVoid-O',
    expansion: 'O',
    tier: 3,
    type: 'Minion',
    name: 'Zrodzony z Pustki',
    hp: 13,
    effect: `
      <p>
        Kiedy gracz zada co najmniej 1 obrażenie temu Poplecznikowi, następuje Wyzwolenie.<br />
        <b>TRWAŁY:</b> Dwukrotne Wyzwolenie.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'RayOfDesolation-O',
    name: 'Promień Spustoszenia',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    power: 1,
    effect: `
      <p>
        <b>MOC 1:</b> Dwukrotne Wyzwolenie. Gracze wspólnie niszczą dwa najdroższe przygotowane Zaklęcia.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BlightedMagic',
    name: 'Przeklęta Magia',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>MOC 2:</b> Wyzwolenie. Gracz z najdroższym przygotowanym Zaklęciem niszczy je. 
        Inny gracz niszczy dwie karty ze swojej ręki o koszcie 1 <span class="aether">&AElig;</span> 
        lub więcej.
      </p>
    `,
    upgraded: true,
  },
  {
    id: 'BlackenedStars',
    name: 'Przygaszone Gwiazdy',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 9 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Dowolny gracz otrzymuje 7 obrażeń.
      </p>
    `,
    upgraded: true,
  },
]
