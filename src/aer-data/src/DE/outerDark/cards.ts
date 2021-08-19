import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Karbonisieren (1. Auflage: Verkohlen)',
    id: 'Char',
    cost: 8,
    effect: `
        <p>
          <b>Wirken:</b> Füge 6 Schaden zu.<br/>
          Wird dadurch ein MONSTER getötet? Wähle 1 Spieler, der 2 Leben heilt.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Fremdkörper',
    id: 'AlienElement',
    cost: 4,
    effect: `
        <p>
          Erhalte 1 <span class="aether">&AElig;</span>.<br/>
          Erhalte 1 <span class="aether">&AElig;</span> für jeden deiner Risse mit einem
          gebundenen Zauber.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Versengen',
    id: 'Scorch',
    cost: 5,
    effect: `
        <p>
          <b>Wirken:</b> Füge 4 Schaden zu.<br/>
          Wird dadurch ein MONSTER aus dem Erzfeind-Stapel getötet? Wähle 1 anderen Spieler, der 2
          Energie erhält.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Pyromantie',
    id: 'Pyromancy',
    cost: 7,
    effect: `
        <b>Wirken:</b> Füge 1 Schaden zu.<br/>
        Werfen die anderen Spieler jetzt insgesamt bis zu 2 Karten ab? +X Schaden.
        X = 0/3/6 für 0/1/2 abgeworfene Karten.
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Blitz-Aura',
    id: 'FeedbackAura',
    cost: 5,
    effect: `
        <p>
          <b>Wirken:</b> Füge 3 Schaden zu.<br/>
          Hast du 4 oder mehr Energie? +3 Schaden.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Vernichtung',
    id: 'Catalyst',
    cost: 6,
    effect: `
        <p>
          <b>Wirken:</b> Füge 2 Schaden zu.<br/>
          Hast du 2 oder weniger übriges Leben? +5 Schaden.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Schmerzstein',
    id: 'PainStone',
    cost: 6,
    effect: `
        <p>
          Erhalte 3 <span class="aether">&AElig;</span>.
          <span class="or">ODER</span>
          Erhalte 2 <span class="aether">&AElig;</span>. Füge 1 Schaden zu.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'OD',
    name: 'Astral-Würfel',
    id: 'AstralCube',
    cost: 5,
    effect: `
        <p>
          Hast du gerade 1 Kristall gespielt? Nimm ihn zurück auf deine Hand.<br/>
          Sieh dir die oberste Karte des Reihenfolgedecks an. Siehst du eine Spieler-
          Reihenfolgekarte? Dieser Spieler heilt 1 Leben.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'OD',
    name: 'Mystische Sphäre',
    id: 'RiddleSphere',
    cost: 3,
    effect: `
        <p>
          Erhalte 1 Energie.
          <span class="or">ODER</span>
          Wirfst du jetzt 2 Energie ab? Erhalte 5 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'OD',
    name: 'Verbindung zum Nichts',
    id: 'NetherConduit',
    cost: 7,
    effect: `
        <b>Wirken:</b> Wähle 1 Karte auf der Hand mit <span class="aether">&AElig;</span>-Kosten
        von 2 oder mehr.<br/>
        Füge X Schaden zu. X = Anzahl fehlender Karten im Vorrat dieser Karte.<br/>
        1 anderer Spieler deiner Wahl erwirbt gratis 1 Karte dieses Vorrats.<br/>
        <span class="hint">(Hilfe: Kristall-Vorräte haben 7 Karten. Artefakte und Zauber 5.)</span>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'OD',
    name: 'Verfluchter Beryllit',
    id: 'HauntedBerylite',
    cost: 3,
    effect: `
        <p>
          Erhalte 2 <span class="aether">&AElig;</span>.
          <span class="or">ODER</span>
          Wirfst du jetzt 1 Karte deiner Wahl von der Hand ab? Erhalte 2 Energie.
        </p>
      `,
    keywords: [],
  },
]
