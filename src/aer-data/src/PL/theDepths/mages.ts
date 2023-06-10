import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'Depths',
    name: 'Nym',
    id: 'Nym',
    mageTitle: 'Nowicjusz Magii Bram',
    ability: `
        <h2>Ostateczna Bariera</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Odrzuć wierzchnią kartę z talii Nemezis.</p>
        <p>W przypadku odrzucenia karty Ataku, odrzuć dodatkową kartę.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Spopielenie',
        expansion: 'Depths',
        id: 'Cinder',
        cost: 0,
        effect: `
            <p>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.
              <span class="or">ALBO</span>
              <b>Aktywacja:</b> Otrzymujesz 2 <span class="aether">&AElig;</span>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'Depths',
    name: 'Reeve',
    id: 'Reeve',
    mageTitle: 'Elitarny Mag Bram',
    ability: `
        <h2>Rozrywające Ostrze</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Zadaj 5 obrażeń Poplecznikowi.</p>
        <p>Zadaj 3 obrażenia innemu Poplecznikowi.</p>
      `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Odłamek Obsydianu',
        expansion: 'Depths',
        id: 'ObsidianShard',
        cost: 0,
        effect: `
            <p>
              Otrzymujesz 1 <span class="aether">&AElig;</span>.<br/>
              Możesz otrzymać 1 obrażenie. Jeżeli to zrobisz, otrzymujesz dodatkowe 2 <span class="aether">&AElig;</span>.
            </p>
          `,
        keywords: [],
      },
    ],
  },
  {
    expansion: 'Depths',
    name: "Z'hana",
    id: 'Zhana',
    mageTitle: 'Zbuntowana Magini Bram',
    ability: `
        <h2>Glif Strażniczy</h2>
        <p class="ability-activation">Użyj podczas swojej fazy głównej:</p>
        <p>Gravehold otrzymuje 7 żywotności.</p>
      `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Wieczny Żar',
        expansion: 'Depths',
        id: 'EternalEmber',
        cost: 0,
        effect: `
            <p>
              <b>Aktywacja:</b> Zadaj 1 obrażenie.
              <span class="or">ALBO</span>
              <b>Aktywacja:</b> Aktywuj jedno ze swoich przygotowanych Zaklęć bez odrzucania go.
            </p>
          `,
        keywords: [],
      },
    ],
  },
]
