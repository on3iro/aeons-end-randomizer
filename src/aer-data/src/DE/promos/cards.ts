import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'In Flammen ertrinken',
    id: 'DrownInFlames',
    cost: 6,
    effect: `
      <p>
        <b>Wirken:</b> Füge 4 Schaden zu.<br />
        Wiederhole das, wenn du 2 Energie abwirfst.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Flüchtiger Blick',
    id: 'FleetingVision',
    cost: 3,
    effect: `
      <p>
        <b>Wirken:</b> Füge 2 Schaden zu.<br />
        <b>Jeder Spieler:</b> Sieh dir die 2 obersten Karten deines
		Decks an. Du darfst sie jeweils abwerfen.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Splitter-Geschoss',
    id: 'SplinterMissile',
    cost: 5,
    effect: `
      <p>
        <b>Wirken:</b> Füge 4 Schaden zu.<br />
        Wirft 1 anderer Spieler deiner Wahl 1 Karte
		von seiner Hand ab?
		Der Schaden ist nun aufteilbar.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Resonanz-Stein',
    id: 'EchoStone',
    cost: 4,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.<br />
        Ist dies dein mindestens zweiter gerade gespielter Resonanz-Stein? 
        Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Diebischer Wichtel',
    id: 'ThievingSpirit',
    cost: 5,
    effect: `
      <p>
        <b>Wirken:</b> Füge 4 Schaden zu.<br />
        Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Gesplitterter Quarz',
    id: 'FracturedQuartz',
    cost: 4,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.<br />
        Zerstörst du jetzt 2 Karten dieses Vorrats?
        Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Kristallwerfer',
    id: 'RockLauncher',
    cost: 3,
    effect: `
      <p>
        Wähle 1 Karte von deiner Hand.<br />
        Wirf sie ab <b>ODER</b> zerstöre sie.<br />
        Ist das passiert? Füge X Schaden zu.<br />
        X = Kosten der abgeworfenen/zerstörten Karte.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Flammakus',
    id: 'AbacusOfIgnition',
    cost: 4,
    effect: `
      <p>
        Wähle 1 anderen Spieler. Du darfst 1 seiner gebundenen Zauber wirken.<br />
        Wähle erneut 1 anderen Spieler, der 1 Karte zieht.
      </p>
      <p>
        <span class="hint">(Du darfst bei beiden Effekten denselben Spieler wählen.)</span>
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Erleuchtende Flamme',
    id: 'IlluminatingFlame',
    cost: 6,
    effect: `
      <p>
        <b>Wirken:</b> Füge 5 Schaden zu.<br />
        Ist dieser Zauber an einen aktiven Riss III oder IV gebunden?
        Du darfst diesen Zauber zerstören. Tust du das? Erhalte 3 Energie.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Zeitbogen',
    id: 'ChronalArc',
    cost: 7,
    effect: `
      <p>
        <b>Dauerhaft:</b> Dieser Zauber muss auf 2 aneinandergrenzende Risse
        gebunden werden. Beide Risse sind damit nicht mehr frei.
      </p>
      <p>
        <b>Wirken:</b> Füge 4 Schaden zu.<br />
        Du darfst diesen Zauber zurück auf die Hand nehmen.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Coruscating Sapal',
    id: 'CoruscatingSapal',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        You may lose 1 charge. If you do, 
        gain an additional 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Humming Shell',
    id: 'HummingShell',
    cost: 7,
    effect: `
      <p>
        Destroy up to two cards in hand or discard pile.
        <span class="or">OR</span>
        Gain 2 charges.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Force Catalyst',
    id: 'ForceCatalyst',
    cost: 4,
    effect: `
      <p>
        While prepped, during you main phase you may spend 3 <span class="aether">&AElig;</span> 
        to cast any player's prepped spell.<br />
        <b>Cast:</b> Deal 3 damage.
      </p>
    `,
    keywords: [],
  },
]
