import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TV',
    name: 'Bernstein-Skarabäus',
    id: 'FossilizedScarab',
    cost: 3,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.
        <span class="or">ODER</span>
      Wähle 1 Karte auf deiner Hand und zerstöre sie.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Thermalpfeil',
    id: 'ThermalDart',
    cost: 4,
    effect: `
      <p>
      <b>Verknüpfbar.</b> <span class="hint">(Bis zu 2 verknüpfbare Zauber dürfen gleichzeitig an 1 Riss gebunden sein.)</span>
      </p>
      <p>
      <b>Wirken:</b> Füge 3 Schaden zu.<br/>
      Ist dies dein mindestens 2. gerade gewirkter Thermalpfeil? Erhalte 1 Energie.
      </p>
      `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Widerhall',
    id: 'Resonate',
    cost: 6,
    effect: `
      <p>
      <b>Wirken:</b> Füge 4 Schaden zu.<br/>
      Sind 6 oder mehr Karten in deinem Ablagestapel? +3 Schaden.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Feuersbrunst',
    id: 'Conflagration',
    cost: 3,
    effect: `
      <p>
      <b>Verknüpfbar.</b> <span class="hint">(Bis zu 2 verknüpfbare Zauber dürfen gleichzeitig an 1 Riss gebunden sein.)</span>
      </p>
      <p>
      <b>Wirken:</b> Füge 2 Schaden zu.<br/>
      Erhalte 1 <span class="aether">&AElig;</span> für <i>Aktionen ausführen</i>.
      </p>
      `,
    keywords: ['link'],
  },
  {
    type: 'Relic',
    expansion: 'TV',
    name: 'Dimensions-Schlüssel',
    id: 'DimensionalKey',
    cost: 8,
    effect: `
      <p>
      Wähle 1 anderen Spieler, der 2 Karten zieht.
        <span class="or">ODER</span>
      Zerstöre diese Karte. Erleide 1 Schaden. Lege 1 Erzfeind-Karte in der Auslage zurück auf den Erzfeind-Stapel.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Inneres Feuer',
    id: 'InnerFire',
    cost: 2,
    effect: `
      <p>
      <b>Verknüpfbar.</b> <span class="hint">(Bis zu 2 verknüpfbare Zauber dürfen gleichzeitig an 1 Riss gebunden sein.)</span>
      </p>
      <p>
        <b>Wirken:</b> Füge 1 Schaden zu.<br/>
        Ist das Erzfeind-Level 2 oder höher? +1 Schaden.
      </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'TV',
    name: 'Feuerstoss',
    id: 'Fulminate',
    cost: 5,
    effect: `
      <p>
      <b>Verknüpfbar.</b> <span class="hint">(Bis zu 2 verknüpfbare Zauber dürfen gleichzeitig an 1 Riss gebunden sein.)</span>
      </p>  
      <p>
      <b>Gebunden:</b> Deine anderen Zauber fügen +1 Schaden zu.
      </p>
      <b>Wirken:</b> Füge 3 Schaden zu.
      </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Relic',
    expansion: 'TV',
    name: 'Amulett der Ewigkeit',
    id: 'EternityCharm',
    cost: 3,
    effect: `
      <p>
        Bündele 1 deiner dunklen Risse mit den geringsten <span class="aether">&AElig;</span>-Kosten. 
        Sieh dir die 3 obersten Karten deines Decks an. Siehst du Zauber? 1 davon darfst du an deine 
        aktiven/gerade gebündelten Risse binden.
      </p>
        `,
    keywords: [],
  },
]
