import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Triplit-Kern',
    id: 'TripliteCore',
    cost: 4,
    effect: `
      <p>
        Erhalte 3 <span class="aether">&AElig;</span>, aber nur zum Erwerb von Karten.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Lähmungsschlag',
    id: 'NerveJab',
    cost: 2,
    effect: `
      <p>
        <b>WIRKEN:</b> Füge <b>1</b> Schaden zu.
        Betäube 1 MONSTER deiner Wahl.
      </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Doppelblitz',
    id: 'DoubleTap',
    cost: 3,
    effect: `
      <p>
        <b>WIRKEN:</b> Füge <b>1</b> Schaden zu.<br />
        Füge <b>1</b> Schaden zu.<br />
        <span class="hint">(Hinweis: Das sind 2 Schadensquellen.)</span>
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Geschliffenes Harz',
    id: 'ObliviumResin',
    cost: 5,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.<br />
        Hast du 3 oder mehr Karten auf der Hand mit <span class="aether">&AElig;</span>-Kosten von 0? Erhalte 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Dopplerit',
    id: 'Summonite',
    cost: 3,
    effect: `
      <p>
      Erhalte 2 <span class="aether">&AElig;</span>.
      <span class="or">ODER</span>
      Erwirb gratis 1 <i>Dopplerit</i> und lege ihn auf den Ablagestapel
      1 Spielers deiner Wahl.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Insignien-Kubus',
    id: 'ManifoldContainer',
    cost: 4,
    effect: `
      <p>
        Erhalte 1 <span class="aether">&AElig;</span>.<br />
        Beim nächsten Erwerb einer Karte in diesem Zug: Du darfst gratis 1 weitere Karte erwerben,
        die weniger kostet als die gerade erworbene Karte.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Energie-Entzug',
    id: 'DrainingTouch',
    cost: 2,
    effect: `
      <p>
        <b>WIRKEN:</b> Füge <b>1</b> Schaden zu.
        Erhalte 1 Energie.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Diopsid-Dornen',
    id: 'JoltingCrust',
    cost: 3,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>. Erhalte 1 Impuls.
        <span class="or">ODER</span>
        Erhalte 2 <span class="aether">&AElig;</span>. Wirfst du jetzt 1 Impuls ab? Erhalte 1 Energie.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Mentit-Klumpen',
    id: 'MentiteChunk',
    cost: 5,
    effect: `
      <p>
        Erhalte 3 <span class="aether">&AElig;</span>.<br />
        Sind 7 oder mehr Karten in deinem Ablagestapel? Erhalte 1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Seelen-Strick',
    id: 'SoulCords',
    cost: 5,
    effect: `
      <p>
        Wähle 1 Spieler, der 1 Impuls erhält.<br />
        Jeder Spieler mit 2 oder mehr Impulsen: Erhalte 1 Energie.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Voidium-Stachel',
    id: 'VoidiumSpike',
    cost: 3,
    effect: `
      <p>
        Erhalte 2 <span class="aether">&AElig;</span>.<br />
        Jeder andere Spieler: Wirfst du jetzt 1 Karte deiner Wahl von der Hand ab? Erhalte 1 Energie.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Präzisions-Schuss',
    id: 'PrecisionShot',
    cost: 3,
    effect: `
      <p>
        <b>VERKNÜPFBAR.</b><br />
        <span class="hint">(Bis zu 2 verknüpfbare Zauber dürfen gleichzeitig an 1 Riss gebunden sein.)</span><br />
        <b>WIRKEN:</b> Füge <b>2</b> Schaden zu. Sind 6 oder mehr weitere Karten in deinem Ablagestapel? <b>+2</b> Schaden.
      </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Strahlender Lacosit',
    id: 'MutedLacosite',
    cost: 5,
    effect: `
      <p>
        <b>Einmalig bei Erwerb:</b><br />
        Betäube 1 MONSTER deiner Wahl.<br />
        Erhalte 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Klinge der Weisheit',
    id: 'BladeOfWisdom',
    cost: 6,
    effect: `
      <p>
        <b>Einmalig bei Erwerb:</b><br />
        Sind 6 oder mehr weitere Karten in deinem Ablagestapel? Heile 2 Leben.<br />
        <b>WIRKEN:</b> Füge <b>5</b> Schaden zu.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Macht-Stoss',
    id: 'StunningForce',
    cost: 5,
    effect: `
      <p>
        <b>WIRKEN:</b> Füge dem Erzfeind <b>4</b> Schaden zu.
        Betäube 1 MONSTER deiner Wahl.
      </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Geistesblitz',
    id: 'FlashOfIntellect',
    cost: 4,
    effect: `
      <p>
        <b>VERKNÜPFBAR.</b><br />
        <span class="hint">(Bis zu 2 verknüpfbare Zauber dürfen gleichzeitig an 1 Riss gebunden sein.)</span><br />
        <b>WIRKEN:</b> Füge <b>3</b> Schaden zu. Sind 6 oder mehr weitere Karten in deinem Ablagestapel? Du darfst 1 <i>Geistesblitz</i> gratis erwerben
        und oben auf dein Deck legen.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Meisterstück',
    id: 'ScholarsOpus',
    cost: 3,
    effect: `
      <p>
        Erhalte 1 Energie.<br />
        Sind 7 oder mehr Karten in deinem Ablagestapel? Erhalte 1 Energie.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Sternen-Amulett',
    id: 'BottledStar',
    cost: 7,
    effect: `
      <p>
        Erhalte 3 Energie.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Brennende Energie',
    id: 'BurningCurrent',
    cost: 3,
    effect: `
      <p>
        <b>GEBUNDEN:</b> Wirfst du in deinem Schritt <i>Zauber wirken</i> 2 Impulse ab?
        <b>+1</b> Schaden für deine gewirkten Zauber.<br />
        <b>WIRKEN:</b> Füge <b>1</b> Schaden zu. Erhalte 1 Impuls.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Übersinnliche Explosion',
    id: 'PsychicEruption',
    cost: 8,
    effect: `
      <p>
        <b>WIRKEN:</b> Füge <b>X</b> Schaden zu.<br />
        X= Anzahl Karten im Ablagestapel 1 Spielers deiner Wahl.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Lebendiger Handschuh',
    id: 'LivingGauntlet',
    cost: 4,
    effect: `
      <p>
        Sieh dir die oberste Karte deines Decks an. Du darfst sie zerstören oder abwerfen.<br />
        Jeder andere Spieler: Du darfst 1 Karte ziehen. Tust du das? Wird 1 Karte von deiner Hand ab.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Schimmerndes Tetrit',
    id: 'ShiningTetrite',
    cost: 6,
    effect: `
      <p>
        Erhalte 4 <span class="aether">&AElig;</span>, aber nicht zum Erwerb von Karten.
      </p>
      `,
    keywords: [],
  },
]
