import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'TV',
    name: 'Sparrow',
    id: 'Sparrow',
    mageTitle: 'Żołnierz Magów Bram',
    ability: `
        <h2>Niezwykła Więź</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Wzmocnij Bramę dowolnego gracza. Powtórz to jeszcze trzy razy.
        <span class="or">ALBO</span>
        Dowolny sojusznik, który nie ma zamkniętych Bram, dobiera trzy karty, a następnie może przygotować do trzech Zaklęć ze swojej ręki.</p>`,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Zarzewie',
        expansion: 'TV',
        id: 'Smolder',
        cost: 0,
        effect: `
            <p>
              To Zaklęcie może być przygotowane na zamkniętej bramie bez jej wzmocnienia.<br/>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'TV',
    name: 'Xaxos',
    id: 'XaxosTV',
    mageTitle: 'Siewca Pustki',
    ability: `
        <h2>Ochrona Poświata</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Dowolny sojusznik otrzymuje 1 Ładunek i odrzuca losową kartę z ręki. Wzmocnij jedną ze swoich Bram. Otrzymujesz 1 punkt życia. 
        Zniszcz kartę ze swojej ręki lub stosu kart odrzuconych.</p>`,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Stos',
        expansion: 'TV',
        id: 'Pyre',
        cost: 0,
        effect: `
            <p>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.<br/>
              Dowolny sojusznik może odrzucić kartę z ręki. Jeżeli to zrobi, zadaj 2 dodatkowe obrażenia.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
