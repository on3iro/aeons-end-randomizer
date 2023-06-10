import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'O',
    name: 'Ilya',
    id: 'Ilya',
    mageTitle: '',
    ability: `
      <h2>Life Embrace</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Cast all of your prepped spells without discarding them. 
        Any ally returns a card in their discard pile to their hand.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Entwined Amethyst',
        expansion: 'O',
        id: 'EntwinedAmethyst',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When you discard this during an ally's turn, you gain 1 charge.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Entwined Amethyst',
        expansion: 'O',
        id: 'EntwinedAmethyst',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When you discard this during an ally's turn, you gain 1 charge.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Trulite Of Force',
        expansion: 'O',
        id: 'TruliteOfForce',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            Any ally may discard a card in hand. If they do, gain 1 <span class="aether">&AElig;</span> that 
            can only be used to gain a spell or to focus or open a breach.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Trulite Of Force',
        expansion: 'O',
        id: 'TruliteOfForce',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            Any ally may discard a card in hand. If they do, gain 1 <span class="aether">&AElig;</span> that 
            can only be used to gain a spell or to focus or open a breach.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'O',
    name: 'Kel',
    id: 'Kel',
    mageTitle: '',
    ability: `
      <h2>Soul Invigoration</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Return up to two gems or relics you played this turn to your hand. 
        Any ally draws a card and may prep a spell in hand to an opened or closed breach.
      </p>
    `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Entwined Amethyst',
        expansion: 'O',
        id: 'EntwinedAmethyst',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When you discard this during an ally's turn, you gain 1 charge.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Entwined Amethyst',
        expansion: 'O',
        id: 'EntwinedAmethyst',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When you discard this during an ally's turn, you gain 1 charge.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Trulite Of Energy',
        expansion: 'O',
        id: 'TruliteOfEnergy',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            Any ally may discard a card in hand. If they do, gain 1 <span class="aether">&AElig;</span> that 
            can only be used to gain a gem or relic.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Trulite Of Energy',
        expansion: 'O',
        id: 'TruliteOfEnergy',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            Any ally may discard a card in hand. If they do, gain 1 <span class="aether">&AElig;</span> that 
            can only be used to gain a gem or relic.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'O',
    name: "Z'hana",
    id: 'ZhanaO',
    mageTitle: '',
    ability: `
      <h2>Inscribe</h2>
      <p class="ability-activation">Activate during any player's main phase:</p>
      <p>
        Gravehold gains 5 life. Place two glyph tokens on top of any card in the supply.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Glyph Carver',
        expansion: 'O',
        id: 'GlyphCarver',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Place 1 glyph token on top of any card in the supply.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Glyph Carver',
        expansion: 'O',
        id: 'GlyphCarver',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Place 1 glyph token on top of any card in the supply.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'O',
    name: 'Taqren',
    id: 'TaqrenO',
    mageTitle: '',
    ability: `
      <h2>Sustain</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        If you are not exhausted, gain 3 life.<br />
        Otherwise, Gravehold gains 3 life.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Esoteric Amplifier',
        expansion: 'O',
        id: 'EsotericAmplifier',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br />
            You may suffer 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'O',
    name: 'Qu',
    id: 'QuO',
    mageTitle: '',
    ability: `
      <h2>Combust Aether</h2>
      <p class="ability-activation">Activate at the end of your draw phase:</p>
      <p>
        Draw three cards.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Call Of The Void',
        expansion: 'O',
        id: 'CallOfTheVoid',
        cost: 0,
        effect: `
          <p>
            While prepped, the first time you play a gem or relic that costs 1 <span class="aether">&AElig;</span> or more 
            each turn, play that card twice and then return it to the supply.<br/>
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'O',
    name: 'Thraxir',
    id: 'Thraxir',
    mageTitle: '',
    ability: `
      <h2>Shackles Unleashed</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Cast up to three spells prepped by any players. If you have three opened breaches, 
        those spells deal 1 additional damage. If you have four opened breaches, 
        you may cast up to four spells and those spells deal 2 additional damage instead.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Nameless Siphon',
        expansion: 'O',
        id: 'NamelessSiphon',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            Any ally may discard a card in hand. If they do, focus one of your breaches.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'O',
    name: 'Dezmodia',
    id: 'DezmodiaO',
    mageTitle: '',
    ability: `
      <h2>Void Vortex</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Any ally draws three cards. Then, place any number of cards in your hand into their hand. 
        Then, that ally places the same number of cards in their hand into your hand.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Swirling Darkness',
        expansion: 'O',
        id: 'SwirlingDarkness',
        cost: 0,
        effect: `
          <p>
            This may be prepped to closed breaches.<br />
            <b>Cast:</b> Focus the breach this was cast from.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'O',
    name: 'Arachnos',
    id: 'Arachnos',
    mageTitle: '',
    ability: `
      <h2>Expunge</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Cast any player's prepped spell. That spell deals 3 additional damage.
      </p>
    `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Convergence',
        expansion: 'O',
        id: 'Convergence',
        cost: 0,
        effect: `
          <p>
            While prepped, when you play a gem or relic that costs 3 <span class="aether">&AElig;</span> or more, 
            gain 1 charge.<br />
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
]
