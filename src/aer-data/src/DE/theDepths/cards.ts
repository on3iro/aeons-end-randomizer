import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Verbindung mit der Leere',
    id: 'VoidBond',
    cost: 4,
    effect: `
      <p>
        <b>Wirken:</b> Füge 3 Schaden zu.<br />
        Wähle 1 Spieler und wirke 1 seiner gebundenen Zauber.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Flammenmeer',
    id: 'Combustion',
    cost: 5,
    effect: `
      <p>
        <b>Wirken:</b> Füge 1 Monster deiner Wahl 2 Schaden zu.<br />
        Füge 1 anderem Monster oder dem Erzfeind 2 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Depths',
    name: 'Vim-Generator',
    id: 'VimDynamo',
    cost: 4,
    effect: `
      <p>
        Erleide 1 Schaden und wähle 1 Spieler, der 2 Karten zieht.
        <span class="or">ODER</span>
        Zerstöre diese Karte und wähle 1 Spieler, der 2 Leben heilt und 1 Energie erhält.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Zersetzende Sense',
    id: 'DisintegratingScythe',
    cost: 7,
    effect: `
      <p>
        <b>Wirken:</b> Füge 8 Schaden zu.<br />
        Erleide 1 Schaden. Anstatt diesen Zauber abzuwerfen, zerstöre ihn oder lege ihn auf den Ablagestapel 1 Spielers deiner Wahl.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Ungeheures Inferno',
    id: 'MonstrousInferno',
    cost: 8,
    effect: `
      <p>
        <b>Dauerhaft:</b> Dieser Zauber muss auf 2 aneinandergrenzende Risse gebunden werden. Beide Risse sind damit nicht mehr frei.<br />
        <b>Wirken:</b> Füge 7 Schaden zu. Dieser Schaden ist aufteilbar.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Depths',
    name: 'Verschlingender Schatten',
    id: 'DevouringShadow',
    cost: 6,
    effect: `
      <p>
        <b>Gebunden:</b> In deinem Schritt <i>Aktionen ausführen</i> wähle 1 Karte auf deiner Hand und zerstöre sie.<br />
        <b>Wirken:</b> Füge 3 Schaden zu.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Depths',
    name: 'Topas der Verbannung',
    id: 'BanishingTopaz',
    cost: 5,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.<br />
        Legst du jetzt 1 Karte deiner Wahl von deiner Hand auf dein Deck? Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Depths',
    name: 'Verwandler',
    id: 'Transmogrifier',
    cost: 4,
    effect: `
      <p>
        Zerstöre 1 Karte deiner Wahl auf deiner Hand.<br />
        Erwirb 1 Karte gratis, die bis zu 3 <span class="aether">&AElig;</span> mehr kostet als die zerstörte Karte.
      </p>
    `,
    keywords: [],
  },
]
