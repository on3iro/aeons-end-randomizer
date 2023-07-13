import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'TA',
    name: 'Mazra',
    id: 'Mazra',
    mageTitle: 'Oczytana magini bram',
    ability: `
        <h2>Magiczny umysł</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Zniszcz z ręki kartę z Mazrą w nazwie. Z osobistej talii Ulepszeń dobierz na rękę kartę z Mazrą w nazwie, 
        której koszt wynosi 3 <span class="aether">&AElig;</span> więcej niż zniszczona karta
        <span class="or">ALBO</span>
        Weź na rękę wszystkie karty z Mazrą w nazwie ze swojego stosu kart odrzuconych.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: "Badania Mazry",
        expansion: 'TA',
        id: 'MazrasStudies',
        cost: 0,
        effect: `<p><b>Aktywacja:</b> Zadaj 1 obrażenie.
            <span class="or">ALBO</span>
            <b>Aktywacja:</b> Wzmocnij swoją Bramę III.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'TA',
    name: 'Qu',
    id: 'Qu',
    mageTitle: 'Twórczyni i niszczycielka',
    ability: `
        <h2>Harmonia Przeciwieństw</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Gdy znacznik Oblicza znajduje się stroną Niszczycielki ku górze, aktywuj do dwóch różnych Zaklęć
        przygotowanych przez dowolnych graczy, a następnie odwróć znacznik Oblicza.
        W innym przypadku dowolny gracz przygotowuje na swoich otwartych Bramach do 
        dwóch Zaklęć ze swojego stosu kart odrzuconych. Następnie odwróć znacznik Oblicza. </p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Zmiana Oblicza',
        expansion: 'TA',
        id: 'ChangeForm',
        cost: 0,
        effect: `<p>Qu odwraca znacznik Oblicza.</p>`,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Zespolony Radyt',
        expansion: 'TA',
        id: 'MeldedRadite',
        cost: 0,
        effect: `<p>Otrzymujesz 0 <span class="aether">&AElig;</span>.<br/>
            Możesz aktywować przygotowane Zaklęcie dowolnego gracza.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 8,
  },
]
