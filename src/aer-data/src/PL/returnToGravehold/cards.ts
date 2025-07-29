import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Relic',
    expansion: 'RTG',
    name: 'Wyrocznia o Szklanym Oku',
    id: 'GlassEyedOracle',
    cost: 1,
    effect: `
      <p>
        Otrzymujesz 1 <span class="aether">&AElig;</span>.
        <span class="or">ALBO</span>
        Zniszcz tę kartę i dowolną liczbę kopii tej karty z ręki. Możesz pozyskać kartę, której koszt 
        jest maksymalnie trzykrotnie większy od liczby zniszczonych kopii.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RTG',
    name: 'Oczyszczenie',
    id: 'Cleanse',
    cost: 4,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.<br />
        Jeśli masz nie więcej niż 3 punkty życia, zyskaj 1 punkt życia.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'RTG',
    name: 'Uszkodzenie Pamięci',
    id: 'MemoryBreak',
    cost: 6,
    effect: `
      <p>
        <b>Aktywacja:</b> Zadaj 3 obrażenia.<br />
        Możesz zniszczyć kartę z ręki. Jeśli to zrobisz, zadaj
        dodatkowe obrażenia równe kosztowi zniszczonej karty.
      </p>
    `,
    keywords: [],
  },
]
