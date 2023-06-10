import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'DezmodiasOblivionShard',
    name: "Strzęp Zapomnienia Dezmodii",
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span>, którego nie możesz wykorzystać do 
        pozyskania Artefaktu ani Zaklęcia.
        </p>
      `,
  },
  {
    id: 'UlgimorsCoalFragment',
    name: "Odłamek Węgla Ulgimora",
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Otrzymujesz 2 <span class="aether">&AElig;</span> i 1 obrażenie.
          <span class="or">ALBO</span>
        Otrzymujesz 1 punkt życia.
        </p>
      `,
  },
  {
    id: 'IndirasLoneOpal',
    name: "Samotny Opal Indiry",
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
        Możesz aktywować z ręki Zaklęcie o koszcie do 4 <span class="aether">&AElig;</span>.
        </p>
      `,
  },
  {
    id: 'MistsAmethystParagon',
    name: "Ametystowa Perfekcja Mist",
    expansion: 'IW',
    level: 1,
    subtype: 'Gem',
    effect: `
        <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
        Dowolny sojusznik może przygotować Zaklęcie z ręki na swojej otwartej
        albo zamkniętej Bramie (Bramach).
        </p>
      `,
  },
  {
    id: 'MalastarsImmolate',
    name: "Samospalenie Malastara",
    expansion: 'IW',
    level: 1,
    subtype: 'Spell',
    effect: `
        <p>
        Gdy przygotowane: gdy otrzymujesz obrażenie(a), otrzymujesz 1 Ładunek.<br/>
        <b>Aktywacja:</b> Zadaj 1 obrażenie.
        </p>
      `,
  },
  {
    id: 'YanMagdasIlluminate',
    name: "Rozblask Yan Magdy",
    expansion: 'IW',
    level: 1,
    subtype: 'Spell',
    effect: `
        <p>
        Gdy przygotowane: zadaj 1 obrażenie, gdy w swojej turze wzmacniasz albo otwierasz swoją Bramę.<br/>
        <b>Aktywacja:</b> Zadaj 1 obrażenie.
        </p>
      `,
  },
  {
    id: 'EyeOfTheMaelstrom',
    name: 'Oko Wszechostrza',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        Na początku rozgrywki umieść tę kartę obok stosu zasobów o koszcie 
        4 <span class="aether">&AElig;</span> lub wyższym. Gdy gracz pozyskuje kartę z tego stosu,
        otrzymuje również 1 punkt życia.
        </p>
      `,
  },
  {
    id: 'WellOfDespair',
    name: 'Studnia Rozpaczy',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        Gdy gracz jednym Zaklęciem zadaje Nemezis co najmniej 6 obrażeń, dołóż na tę kartę 1 żeton Mocy.<br/>
        <br/>
        Na początku swojej tury Nemezis otrzymuje obrażenia w liczbie żetonów znajdujących się na tej karcie.
        </p>
      `,
  },
  {
    id: 'CronesAmulet',
    name: "Amulet Wiedźmy",
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        Gdy gracz otwiera Bramę, może zniszczyć kartę ze swojej ręki.
        </p>
      `,
  },
  {
    id: 'EdibleFungusChunks',
    name: 'Pylaki Jadalne',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        Gdy gracz otrzymuje punkt(y) życia, otrzymuje dodatkowo 1 punkt życia.
        </p>
      `,
  },
  {
    id: 'UmbralHornOfWar',
    name: 'Cienisty Róg Wojny',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        Na początku rogrywki umieść tę kartę obok stosu zasobów Zaklęcia o koszcie 
        6 <span class="aether">&AElig;</span> lub wyższym. Te Zaklęcia zadają dodatkowo
        2 obrażenia podczas aktywacji.
        </p>
      `,
  },
  {
    id: 'TheBrokenMask',
    name: 'Przełamana Maska',
    expansion: 'IW',
    level: 2,
    effect: `
        <p>
        Gdy gracz skończy rozpatrywać swoją zdolność, dowolny sojusznik otrzymuje 1 Ładunek.
        </p>
      `,
  },
  {
    id: 'AlchemistsAlembic',
    name: "Alembik Alchemika",
    expansion: 'IW',
    level: 3,
    effect: `
        <p>
          Raz na turę, gdy w swojej fazie głównej po raz drugi zagrywasz Klejnot
          albo Artefakt o koszcie co najmniej 4 <span class="aether">&AElig;</span>, zadajesz 3 obrażenia.
        </p>
      `,
  },
  {
    id: 'SoothsayersPouch',
    name: "Mieszek Wróżbity",
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      W swojej początkowej talii umieść dodatkowy Skarb poziomu 1. 
      (zgodnie z zasadami dobierania Skarbów) <br/>
      <br/>
      Możecie (ty i twoja drużyna) korzystać z dodatkowego Skarbu poziomu 2.
      </p>
      `,
  },
  {
    id: 'SuppressingPin',
    name: 'Brosza Tłumienia',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      Raz na turę w swojej fazie głównej możesz odrzucić kartę z ręki. Jeśli to zrobisz, dowolny sojusznik dobiera kartę,
      a ty możesz dołożyć żeton Mocy na będącą w grze Moc.
      </p>
      `,
  },
  {
    id: 'Quicksilver',
    name: 'Żywe Srebro',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      Gdy aktywujesz Zaklęcie o koszcie co najmniej 2 <span class="aether">&AElig;</span> 
      , zamiast je odrzucać, możesz dać je na rękę dowolnemu sojusznikowi.
      </p>
      `,
  },
  {
    id: 'BandOfRetrieval',
    name: 'Opaska Odzyskania',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      Na początku swojej fazy aktywacji możesz odrzucić 1 Ładunek.
      Jeśli to zrobisz, zamiast odrzucić następne Zaklęcie, które aktywujesz w tej fazie, umieść je na ręce.
      </p>
      `,
  },
  {
    id: 'PurifiedBangle',
    name: 'Oczyszczona Bransoleta',
    expansion: 'IW',
    level: 3,
    effect: `
      <p>
      Raz na turę w swojej fazie głównej możesz wydać 9 <span class="aether">&AElig;</span> 
      i otrzymać 1 obrażenie, by odłożyć będącą w grze kartę Nemezis na wierzch talii Nemezis.
      </p>
      `,
  },
]
