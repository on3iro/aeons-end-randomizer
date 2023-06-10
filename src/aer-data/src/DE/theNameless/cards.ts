import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Relic',
    expansion: 'Nameless',
    name: 'Flüssig-Hammer',
    id: 'MoltenHammer',
    cost: 5,
    effect: `
      <p>
        Erhalte 1 Energie.<br />
        Wähle 1 Spieler. Dieser Spieler darf 1 Karte seiner Wahl auf seiner Hand 
        oder die oberste Karte seines Ablagestapels zerstören.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Ausstrahlung',
    id: 'Radiance',
    cost: 8,
    effect: `
      <p>
        <b>Wirken:</b> Füge 5 Schaden zu.<br />
        Jeder andere Spieler zieht 1 Karte.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Feuerbrunst',
    id: 'Blaze',
    cost: 4,
    effect: `
      <p>
        <b>Einmalig bei Erwerb:</b><br />
        Wähle 1 Spieler und lege diesen Zauber auf seinen Ablagestapel.<br />
        <b>Wirken:</b> Füge 2 Schaden zu.<br />
        +1 Schaden für jeden anderen deiner gebundenen und gerade gewirkten Feuersbrunst-Zauber.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Blitz der Vorsehung',
    id: 'ScryingBolt',
    cost: 6,
    effect: `
      <p>
        <b>Wirken:</b> Füge 5 Schaden zu.<br />
        Wirfst du jetzt 1 Energie ab? Sieh dir die obersten 2 Karten des Erzfeind- Stapels an 
        und lege sie in einer Reihenfolge deiner Wahl zurück.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Nameless',
    name: 'Mal des Weisen',
    id: 'SagesBrand',
    cost: 7,
    effect: `
      <p>
        <b>Dauerhaft:</b> Dieser Zauber muss auf 2 an einandergrenzende Risse gebunden werden. Beide Risse sind damit nicht mehr frei.<br />
        <b>Gebunden:</b> Ziehe in deinem Schritt <i>Karten ziehen</i> 1 Karte mehr.<br />
        <b>Wirken:</b> Füge 6 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Nameless',
    name: 'Blutsauger-Achat',
    id: 'LeechingAgate',
    cost: 3,
    effect: `
      <p>
        <b>Einmalig bei Erwerb:</b><br />
        Erhalte 1 Energie.<br />
        Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Nameless',
    name: 'Zeitspirale',
    id: 'TemporalHelix',
    cost: 7,
    effect: `
      <p>
        Wähle 1 Spieler und wirke 1 seiner gebundenen Zauber. Der Zauber bleibt gebunden.
      </p>
    `,
    keywords: [],
  },
]
