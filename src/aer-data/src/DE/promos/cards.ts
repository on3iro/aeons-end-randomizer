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
    name: 'Thieving Spirit',
    id: 'ThievingSpirit',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 4 damage.<br />
        Gain 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'promos',
    name: 'Fractured Quartz',
    id: 'FracturedQuartz',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        You may destroy two cards in this card's supply pile. If you do, 
        gain an additional 1 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Rock Launcher',
    id: 'RockLauncher',
    cost: 3,
    effect: `
      <p>
        Discard or destroy a card in hand. If you do, deal damage equal to its cost.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'promos',
    name: 'Abacus of Ignition',
    id: 'AbacusOfIgnition',
    cost: 4,
    effect: `
      <p>
        You may casdt any ally's prepped spell.<br />
        Any ally draws a card.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Illuminating Flame',
    id: 'IlluminatingFlame',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 5 damage.<br/>
        If this was cast from an opened III or IV breach, you may destroy this.
        If you do, gain 3 charges.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'promos',
    name: 'Chronal Arc',
    id: 'ChronalArc',
    cost: 7,
    effect: `
      <p>
        This spell must be prepped to two adjacent breaches so that this card 
        touches both breaches. This fully occupies both breaches.<br />
        <b>Cast:</b> Deal 4 damage.<br />
        You may place this card into your hand.
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
