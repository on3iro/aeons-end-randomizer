import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'WitheringRot-O',
    expansion: 'O',
    tier: 1,
    type: 'Attack',
    name: 'Zaschnięta Zgnilizna',
    effect: `
      <p>
        Dowolny gracz otrzymuje 3 obrażenia i pozyskuje Klątwę Zgnilizny z talii Klątw.
      </p>
    `,
  },
  {
    id: 'WeepingHex-O',
    expansion: 'O',
    tier: 1,
    type: 'Attack',
    name: 'Szlochająca Klątwa',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Dowolny gracz otrzymuje 2 obrażenia oraz pozyskuje Przeklęty Odłamek z talii Klątw
        i umieszcza go na wierzchu swojej talii.
      </p>
    `,
  },
  {
    id: 'Hemorrhage-O',
    expansion: 'O',
    tier: 1,
    type: 'Attack',
    name: 'Krwotok',
    effect: `
      <p>
        Wyzwolenie.<br />
        <br />
        Gravehold otrzymuje 1 obrażenie.<br />
        <br />
        Umieść tę kartę przed graczem z największą liczbą otwartych Bram.<br />
        <br />
        Na początku tury tego gracza otrzymuje on 1 obrażenie. Kiedy ten gracz pozyskuje
        kartę o koszcie 5 <span class="aether">&AElig;</span> lub więcej, ta karta zostaje odrzucona.<br />
        Jeśli na rynku zasobów nie ma już kart o koszcie 5 <span class="aether">&AElig;</span> lub więcej, 
        niniejszą kartę należy odrzucić, gdy ten gracz pozyska kartę o najwyższym koszcie 
        dostępnym na rynku zasobów.
      </p>
    `,
  },
  {
    id: 'MoonstruckHound-O',
    expansion: 'O',
    tier: 1,
    type: 'Minion',
    name: 'Ogar Księżycowego Zewu',
    hp: 5,
    effect: `
      <p>
        Obniż do 1 wszystkie obrażenia zadawane temu Poplecznikowi przez Zaklęcia, których koszt to 5 <span class="aether">&AElig;</span> 
        lub więcej.<br />
        <b>TRWAŁY:</b> Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'WanderingLasher-O',
    expansion: 'O',
    tier: 1,
    type: 'Minion',
    name: 'Tułacz Biczownik',
    hp: 6,
    effect: `
      <p>
        <b>Tułacz</b> <span class="hint">(Obniż do 1 wszystkie obrażenia zadawane mu obrażenia 
        przez zdolności i karty gracza. W swojej fazie głównej dowolny gracz może wydać dowolną liczbę <span class="aether">&AElig;</span>, 
        aby zadać Tułaczowi obrażenia równe wydanej liczbie <span class="aether">&AElig;</span>.)</span><br />
        <b>TRWAŁY:</b> Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'AuraDrain-O',
    expansion: 'O',
    tier: 1,
    type: 'Power',
    name: 'Wyssanie Aury',
    power: 2,
    effect: `
      <p>
        Kiedy żeton Mocy zostaje usunięty z tej karty, dowolny gracz otrzymuje 2 obrażenia.<br />
        <br />
        <b>ABY ODRZUCIĆ:</b> Wydaj 5 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'HauntedForce-O',
    expansion: 'O',
    tier: 1,
    type: 'Power',
    name: 'Nawiedzona Siła',
    power: 2,
    effect: `
      <p>
        <b>MOC 2:</b> Wyzwolenie. Gravehold otrzymuje 2 obrażenia. Dowolny gracz pozyskuje 
        Przeklęty Pocisk z talii Klątw.
      </p>
    `,
  },
  {
    id: 'NoxiousWinds-O',
    expansion: 'O',
    tier: 1,
    type: 'Power',
    name: 'Niezdrowy Wiatr',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 5 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Gravehold otrzymuje 3 obrażenia. Dowolny gracz pozyskuje Przeklęty Odłamek
        z talii Klątw. Dowolny gracz pozyskuje Przeklęty Pocisk z talii Klątw.
      </p>
    `,
  },
  {
    id: 'MarkedForDeath-O',
    expansion: 'O',
    tier: 2,
    type: 'Attack',
    name: 'Naznaczony, by Umrzeć',
    effect: `
      <p>
        Dwukrotne wyzwolenie.<br />
        <br />
        Umieść tę kartę przed dowolnym graczem.<br />
        <br />
        Do końca gry, kiedy karta Nemesis wskazuje na "dowolnego gracza",
        gracz posiadający tę kartę musi rozpatrzeć ten efekt, jeśli to możliwe.<br />
        <br />
        Kiedy gracz z tą kartą zostanie Wyczerpany, odrzuć tę kartę.
      </p>
    `,
  },
  {
    id: 'ConjuredGrapple-O',
    expansion: 'O',
    tier: 2,
    type: 'Attack',
    name: 'Magiczny Chwyt',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Dowolny gracz otrzymuje 2 obrażenia i odrzuca dwie karty z ręki. Ten 
        gracz pozyskuje Przeklęte Kajdany z talii Klątw i bierze je na rękę.
      </p>
    `,
  },
  {
    id: 'ChitinCrawler-O',
    expansion: 'O',
    tier: 2,
    type: 'Minion',
    name: 'Chitynowy Pełzacz',
    hp: 9,
    effect: `
      <p>
        Obniż do 1 wszystkie obrażenia zadawane temu Poplecznikowi przez Zaklęcia, których koszt to 3 <span class="aether">&AElig;</span> 
        lub mniej.<br />
        <b>TRWAŁY:</b> Dowolny gracz otrzymuje 3 obrażenia.
        <span class="or">ALBO</span>
        Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'WanderingObserver-O',
    expansion: 'O',
    tier: 2,
    type: 'Minion',
    name: 'Tułacz Obserwator',
    hp: 11,
    effect: `
      <p>
        <b>Tułacz</b> <span class="hint">(Obniż do 1 wszystkie obrażenia zadawane mu obrażenia 
        przez zdolności i karty gracza. W swojej fazie głównej dowolny gracz może wydać dowolną liczbę <span class="aether">&AElig;</span>, 
        aby zadać Tułaczowi obrażenia równe wydanej liczbie <span class="aether">&AElig;</span>.)</span><br />
        <b>TRWAŁY:</b> Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'SeekingDestruction-O',
    expansion: 'O',
    tier: 2,
    type: 'Power',
    name: 'Poszukiwanie Zniszczenia',
    power: 3,
    effect: `
      <p>
        <b>NATYCHMIAST:</b> Umieść na tej karcie żeton kolejności gracza z największą liczbą otwartych Bram.<br />
        <br />
        <b>ABY ODRZUCIĆ:</br> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 3:</b> Jeśli gracz, którego żeton znajduje się na tej karcie, ma najwięcej otwartych Bram, 
        ten gracz otrzymuje 5 obrażeń. W przeciwnym razie następuje dwukrotne Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'SuffocatingHaze-O',
    expansion: 'O',
    tier: 2,
    type: 'Power',
    name: 'Duszący Opar',
    power: 3,
    effect: `
      <p>
        Obniż o 1 wszystkie obrażenia zadawane Poplecznikom z talii Nemezis, ale do minimum 1.<br />
        <br />
        <b>MOC 3:</b> Dwukrotne Wyzwolenie. Gravehold otrzymuje 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'ToxicSubterfuge-O',
    expansion: 'O',
    tier: 2,
    type: 'Power',
    name: 'Toksyczny Podstęp',
    power: 3,
    effect: `
      <p>
        Kiedy żeton Mocy zostaje usunięty z tej karty, Gravehold otrzymuje 2 obrażenia.<br />
        <br />
        <b>ABY ODRZUCIĆ:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 3:</b> Wyzwolenie.
      </p>
    `,
  },
  {
    id: 'Throttle-O',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    name: 'Przyspieszenie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Dowolny gracz niszczy trzy najdroższe karty z ręki.
      </p>
    `,
  },
  {
    id: 'Topple-O',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    name: 'Powalenie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gravehold otrzymuje 4 obrażenia.
      </p>
    `,
  },
  {
    id: 'BreachSpike-O',
    expansion: 'O',
    tier: 3,
    type: 'Attack',
    name: 'Kolec z Bramy',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Gracz z największą liczbą przygotowanych Zaklęć otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'NyxTheSpineCruncher-O',
    expansion: 'O',
    tier: 3,
    type: 'Minion',
    name: 'Nyx, Pożeracz Kręgosłupów',
    hp: 14,
    effect: `
      <p>
        <b>TRWAŁY:</b> Wyzwolenie. Dowolny gracz otrzymuje 2 obrażenia.      
      </p>
    `,
  },
  {
    id: 'EndlessTorment-O',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    name: 'Nieskończona Udręka',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</br> Wydaj 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Trzykrotne Wyzwolenie.
        <span class="or">ALBO</span>
        Dowolny gracz otrzymuje 6 obrażeń.
      </p>
    `,
  },
  {
    id: 'DarkeningDepths-O',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    name: 'Mroczne Głębiny',
    power: 1,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</br> Zniszcz przygotowane Zaklęcie o koszcie 3 <span class="aether">&AElig;</span> 
        lub więcej oraz Bramę, na której zostało ono przygotowane.<br />
        <br />
        <b>MOC 1:</b> Wyzwolenie. Gracz z najmniejszą liczbą punktów życia otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'ApocalypseRitual-O',
    expansion: 'O',
    tier: 3,
    type: 'Power',
    name: 'Rytuał Apokalipsy',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</br> Wydaj 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Gravehold otrzymuje 5 obrażeń za każdą kartę tury Nemezis w stosie 
        kart odrzuconych talii tur.
      </p>
    `,
  },
]
