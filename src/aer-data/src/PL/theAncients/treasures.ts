import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'RemnantsVoidShard',
    name: "Odłamek Otchłani Remnanta",
    expansion: 'TA',
    level: 1,
    subtype: 'Gem',
    effect: `
      <p>
      Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
      Otrzymujesz dodatkowo 1 <span class="aether">&AElig;</span>, który możesz wydać tylko na 
      wzmocnienie albo otwarcie Bramy.
      </p>
      `,
  },
  {
    id: 'QuiliussErasure',
    name: "Wymazanie Quilius",
    expansion: 'TA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
      Jeżeli to Zaklęcie zadaje obrażenie Poplecznikowi, zadaj dodatkowo 1 obrażenie.
      </p>
      `,
  },
  {
    id: 'ZhanasFleetingEmber',
    name: "Nikły Żar Z'hany",
    expansion: 'TA',
    level: 1,
    subtype: 'Spell',
    effect: `
      <p>
      <b>Aktywacja:</b> Zadaj 1 obrażenie.
        <span class="or">ALBO</span>
      <b>Aktywacja:</b> Aktywuj jedno ze swoich przygotowanych Zaklęć o koszcie nie większym niż 4 
      <span class="aether">&AElig;</span> bez odrzucania go.
      </p>
      `,
  },
  {
    id: 'BlightedRootClump',
    name: 'Korzeń Plagi',
    expansion: 'TA',
    level: 2,
    effect: `
      <p>
      Gdy ostatnia karta ze stosu zasobów zostanie pozyskana lub zniszczona, dowolny gracz otrzymuje 3 punkty życia.
      </p>
      `,
  },
  {
    id: 'PetrifiedWitchFinger',
    name: 'Skamieniały Palec Megiery',
    expansion: 'TA',
    level: 2,
    effect: `
      <p>
      Gdy ostatnia karta ze stosu zasobów zostanie pozyskana lub zniszczona, dowolny gracz otrzymuje 3 Ładunki.
      </p>
      `,
  },
  {
    id: 'WaywardScraps',
    name: 'Strzępy Marnotrawnego',
    expansion: 'TA',
    level: 2,
    effect: `
      <p>
      Raz na turę podczas fazy głównej dowolnego gracza ten gracz może wydać  
      4 <span class="aether">&AElig;</span>, by wzmocnić Bramę IV każdego z graczy.
      </p>
      `,
  },
  {
    id: 'TrueSightMonocle',
    name: 'Monokl Prawdziwego Widzenia',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      Na początku swojej fazy głównej, jeśli w twoim stosie kart odrzuconych jest co najmniej
      6 kart, otrzymujesz 2 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
  {
    id: 'EntwinedAetherStrands',
    name: 'Splecione Wątki Eteru',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      Na koniec swojej fazy dobierania możesz odrzucić jedną kartę z ręki, by dobrać kartę.
      </p>
      `,
  },
  {
    id: 'SiphoningBlade',
    name: 'Spijający Sztylet',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      Raz na turę, gdy wzmacniasz lub otwierasz Bramę, otrzymujesz 1 Ładunek.
      </p>
      `,
  },
  {
    id: 'GemEncrustedAnklet',
    name: 'Drogocenna Bransoleta na Kostkę',
    expansion: 'TA',
    level: 3,
    effect: `
      <p>
      Na początku twojej pierwszej tury w rozgrywce otrzymujesz 3 <span class="aether">&AElig;</span>.
      </p>
      `,
  },
]
