import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'LOG',
    name: 'Arachnos',
    id: 'ArachnosLOG',
    mageTitle: 'Void Weaver',
    ability: `
      <h2>Weaver's Web</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Return up to three cards that cost 4 <span class="aether">&AElig;</span> or
        less from your discard pile to your hand.
        <span class="or">OR</span>
        Any player gains 3 life.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Gossamer Web',
        expansion: 'LOG',
        id: 'GossamerWeb',
        cost: 0,
        effect: `
          <p>
            While prepped, when you gain a card from a supply pile,
            gain 1 charge.<br/>
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'LOG',
    name: 'Claudia',
    id: 'ClaudiaLOG',
    mageTitle: 'Visionary',
    ability: `
      <h2>Aetherial Echo</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Any player gains 3 life.
        <span class="or">OR</span>
        The next time you gain a card this turn, you may place it into an ally's hand.
        Then, that ally gains a copy of the same card and places it into their hand.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Jubilant Halo',
        expansion: 'LOG',
        id: 'JubilantHalo',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage.<br/>
            Gain 1 <span class="aether">&AElig;</span> that can only be used
            to gain gems.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Mirror Shard',
        expansion: 'LOG',
        id: 'MirrorShard',
        cost: 0,
        effect: `
          <p>
            Play this as a copy of a gem in your hand.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'LOG',
    name: 'Dezmodia',
    id: 'DezmodiaLOG',
    mageTitle: 'Void Phantom',
    ability: `
      <h2>Void Tear</h2>
      <p class="ability-activation">Activate during any player's main phase:</p>
      <p>
        Return up to two spells from your discard pile to your hand.<br/>
        You may prep two additional spells to each of your opened breaches this turn.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Devouring Voidspark',
        expansion: 'LOG',
        id: 'DevouringVoidspark',
        cost: 0,
        effect: `
          <p>
            While this is prepped, an additional spell may be prepped to this breach.<br/>
            <b>Cast:</b> Deal 1 damage. Deal additional damage equal to the number of other spells
            prepped to this breach.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Spell',
        name: 'Invigorating Voidspark',
        expansion: 'LOG',
        id: 'InvigoratingVoidspark',
        cost: 0,
        effect: `
          <p>
            While this is prepped, an additional spell may be prepped to this breach.<br/>
            <b>Cast:</b> Deal 1 damage. Any ally draw a card for each other spell
            prepped to this breach.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'LOG',
    name: 'Gygar',
    id: 'GygarLOG',
    mageTitle: 'Treasure Hunter',
    ability: `
      <h2>Contained Burst</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Cast two of your prepped spells without discarding them.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Bide',
        expansion: 'LOG',
        id: 'Bide',
        cost: 0,
        effect: `
          <p>
            While prepped, once per turn during your main phase
            you may gain 1 <span class="aether">&AElig;</span>.<br/>
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'LOG',
    name: 'Ilya',
    id: 'IlyaLOG',
    mageTitle: 'Force of Aether',
    ability: `
      <h2>Surge of Power</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Reveal the top four cards of your deck.
        Place any number of spells revealed this way into you hand.
        You may prep spells to closed breaches this turn.
        You may prep up to two spells to each of your breaches this turn.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Shared Heart',
        expansion: 'LOG',
        id: 'SharedHeart',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage. If you are Ilya, deal 1 additional damage.
            <span class="or">OR</span>
            <b>Cast:</b> Deal 1 damage. If you are Kel, gain 1 life.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Entangled Tourmaline',
        expansion: 'LOG',
        id: 'EntangledTourmaline',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            You may place a card from your hand into Kel's or Ilya's hand.
            If you do, they place a card from their hand into your hand.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'LOG',
    name: 'Inco',
    id: 'IncoLOG',
    mageTitle: 'Growing Soul',
    ability: `
      <h2>Uproot</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Harvest up to two cards in your hand or discard pile.
        Resolve the Harvest effects of these cards twice.
        <span class="or">OR</span>
        Gravehold gains 5 life.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Iris',
        expansion: 'LOG',
        id: 'Iris',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When this is Harvested, gain 2 <span class="aether">&AElig;</span>.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Tulip',
        expansion: 'LOG',
        id: 'Tulip',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When this is Harvested, gain a card from the supply
            that costs 4 <span class="aether">&AElig;</span> or less.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Dahlia',
        expansion: 'LOG',
        id: 'Dahlia',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When this is Harvested, deal 2 damage.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Spell',
        name: 'Rose',
        expansion: 'LOG',
        id: 'Rose',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage.<br/>
            When this is Harvested, focus one of your breaches.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Violet',
        expansion: 'LOG',
        id: 'Violet',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When this is Harvested, any ally may return a card in
            their discard pile to their hand.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Tulip',
        expansion: 'LOG',
        id: 'Tulip',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When this is Harvested, gain a card from the supply
            that costs 4 <span class="aether">&AElig;</span> or less.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Iris',
        expansion: 'LOG',
        id: 'Iris',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When this is Harvested, gain 2 <span class="aether">&AElig;</span>.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Dahlia',
        expansion: 'LOG',
        id: 'Dahlia',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            When this is Harvested, deal 2 damage.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Sunflower',
        expansion: 'LOG',
        id: 'Sunflower',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.You may Harvest a gem in your hand.<br/>
            When this is Harvested, gain 2 life.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Spell',
        name: 'Rose',
        expansion: 'LOG',
        id: 'Rose',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage.<br/>
            When this is Harvested, focus one of your breaches.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'LOG',
    name: 'Indira',
    id: 'IndiraLOG',
    mageTitle: 'Ascended Apprentice',
    ability: `
      <h2>Reanimate Magic</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Cast up to two spells from your discard pile.
        You may destroy a card in your discard pile.
      </p>
    `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Aetherial Glow',
        expansion: 'LOG',
        id: 'AetherialGlow',
        cost: 0,
        effect: `
          <p>
            While prepped, once per each player's turn, you may
            discard a spell in hand to have that player gain 1 <span class="aether">&AElig;</span>.<br/>
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'LOG',
    name: 'Kadir',
    id: 'KadirLOG',
    mageTitle: 'Gemcrafter',
    ability: `
      <h2>Refine Prototype</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Either choose a side of a path token that is not on your mat and place it on
        you mat, or flip over one of your path tokens on your mat.
        Then, if you have four path tokens on your mat, set one aside.<br/>
        Resolve all of the path tokens on your mat in any order.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Ancient Emerald',
        expansion: 'LOG',
        id: 'AncientEmerald',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            If you have 4 or more charges, any ally gains 1 life.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'LOG',
    name: 'Kel',
    id: 'KelLOG',
    mageTitle: 'Source of Aether',
    ability: `
      <h2>Absorb Aether</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Any ally places up to two cards from their hand or discard pile
        into your discard pile. Then, if you have ten or more card in your discard pile,
        shuffle any player's turn order card into the turn order deck.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Entangled Tourmaline',
        expansion: 'LOG',
        id: 'EntangledTourmaline',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            You may place a card from your hand into Kel's or Ilya's hand.
            If you do, they place a card from their hand into your hand.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Spell',
        name: 'Split Soul',
        expansion: 'LOG',
        id: 'SplitSoul',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage. If you are Kel, gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            <b>Cast:</b> If you are Ilya, gain 1 charge.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'LOG',
    name: 'Lost',
    id: 'LostLOG',
    mageTitle: 'Forgotten Forge',
    ability: `
      <h2>Encase in Steel</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Deal damage equal to the number of spells in your discard pile.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Molten Forge',
        expansion: 'LOG',
        id: 'MoltenForge',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage.
            <span class="or">OR</span>
            <b>Cast:</b> Gain 2 <span class="aether">&AElig;</span> that can only be
            used to gain spells.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Bronze Ingot',
        expansion: 'LOG',
        id: 'BronzeIngot',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            If you have five or more spells in your discard pile,
            gain an additional 2 <span class="aether">&AElig;</span>.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'LOG',
    name: 'Malastar',
    id: 'MalastarLOG',
    mageTitle: 'Inventor',
    ability: `
      <h2>Burst of Inspiration</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Draw a card from the top or bottom of the Inventions deck and place
        it into an ally's hand.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Zanite, Perfected',
        expansion: 'LOG',
        id: 'ZanitePerfected',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            Reveal the top card of the Inventions deck. If it is a relic,
            gain 1 <span class="aether">&AElig;</span>. Then, place that card
            on the bottom of that deck.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'LOG',
    name: 'Mazra',
    id: 'MazraLOG',
    mageTitle: 'The Learned',
    ability: `
      <h2>Research</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Destroy a card with "Mazra" in its name in your hand.
        Gain a card with "Mazra" in its name from the personal upgrade deck
        that costs up to 3 <span class="aether">&AElig;</span> more than the destroyed card
        and place that card into your hand.
        <span class="or">OR</span>
        Return to your hand all cards with "Mazra" in their name
        in your discard pile.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Spell',
        name: "Mazra's Studies",
        expansion: 'LOG',
        id: 'MazrasStudiesLOG',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage.
            <span class="or">OR</span>
            <b>Cast:</b> Focus your III breach.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Spell',
        name: "Mazra's Studies",
        expansion: 'LOG',
        id: 'MazrasStudiesLOG',
        cost: 0,
        effect: `
          <p>
            <b>Cast:</b> Deal 1 damage.
            <span class="or">OR</span>
            <b>Cast:</b> Focus your III breach.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'LOG',
    name: 'Nook',
    id: 'NookLOG',
    mageTitle: 'Timeless',
    ability: `
      <h2>Time Ripple</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Return up to three Crystals from your hand or discard pile
        to the Regularity deck. Place up to three Anomaly cards from the Regularity
        deck into your hand.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Zeronia Anomaly',
        expansion: 'LOG',
        id: 'ZeroniaAnomaly',
        cost: 5,
        effect: `
          <p>
            Gain 2 <span class="aether">&AElig;</span>. Any ally gains a charge.<br/>
            If this is the first Anomaly card you have played this turn, return this to the Regularity deck
            and gain a Crystal from that deck.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Photonix Anomaly',
        expansion: 'LOG',
        id: 'PhotonixAnomaly',
        cost: 5,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            If this is the first Anomaly card you have played this turn, return this to the Regularity deck
            and gain a Spark from that deck.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Relic',
        name: 'Mechanek Anomaly',
        expansion: 'LOG',
        id: 'MechanekAnomaly',
        cost: 5,
        effect: `
          <p>
            Focus one of your breaches. Repeat this once.
            If this is the first Anomaly card you have played this turn, return this to the Regularity deck
            and gain a Crystal from that deck.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Eternus Anomaly',
        expansion: 'LOG',
        id: 'EternusAnomaly',
        cost: 5,
        effect: `
          <p>
            Gain 2 <span class="aether">&AElig;</span>.<br/>
            If this is the first Anomaly card you have played this turn, return this to the Regularity deck
            and gain a Crystal from that deck.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Nihilum Anomaly',
        expansion: 'LOG',
        id: 'NihilumAnomaly',
        cost: 5,
        effect: `
          <p>
            Gain 2 <span class="aether">&AElig;</span>. Silence a minion.<br/>
            If this is the first Anomaly card you have played this turn, return this to the Regularity deck
            and gain a Crystal from that deck.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 8,
  },
  {
    expansion: 'LOG',
    name: 'Qu',
    id: 'QuLOG',
    mageTitle: 'Builder',
    ability: `
      <h2>Feed the Corruption</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Any ally draws two cards. Any player destroys up to two cards in hand or discard pile.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Oblivion Lode',
        expansion: 'LOG',
        id: 'OblivionLode',
        cost: 0,
        effect: `
          <p>
            Resolve the builder token. Then, flip it over.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Corrupted Vein',
        expansion: 'LOG',
        id: 'CorruptedVein',
        cost: 0,
        effect: `
          <p>
            Resolve the destroyer token. Then, flip it over.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'LOG',
    name: 'Razra',
    id: 'RazraLOG',
    mageTitle: 'The Tamer',
    ability: `
      <h2>Train Rip</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Destroy a card with "Rip" in its name in your hand.
        Gain a card with "Rip" in its name from the personal upgrade deck
        that costs up to 3 <span class="aether">&AElig;</span> more than the destroyed card
        and place that card into your hand.
        <span class="or">OR</span>
        Return to your hand all cards with "Rip" in their name that
        you have played this turn or that are in your discard pile.
      </p>
    `,
    numberOfCharges: 4,
    uniqueStarters: [
      {
        type: 'Relic',
        name: 'Rip, Help!',
        expansion: 'LOG',
        id: 'RipHelpLOG',
        cost: 0,
        effect: `<p>Gain 1 charge.</p>`,
        keywords: [],
      },
      {
        type: 'Relic',
        name: 'Rip, Help!',
        expansion: 'LOG',
        id: 'RipHelpLOG',
        cost: 0,
        effect: `<p>Gain 1 charge.</p>`,
        keywords: [],
      },
    ],
    complexityRating: 7,
  },
  {
    expansion: 'LOG',
    name: 'Soskel',
    id: 'SoskelLOG',
    mageTitle: 'Tactician',
    ability: `
      <h2>Tactician's Gambit</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Players collectively return up to two cards from their discard piles
        to their hands. Reveal the turn order deck and return it in any order.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Blinding Gambit',
        expansion: 'LOG',
        id: 'BlindingGambit',
        cost: 0,
        effect: `
          <p>
            While prepped, when your turn order card is drawn, you may place it on
            the bottom of the turn order deck instead of resolving your turn.<br/>
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Bastion Flint',
        expansion: 'LOG',
        id: 'BastionFLint',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            If there are three or more player cards in the turn order discard pile,
            gain 1 charge.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 5,
  },
  {
    expansion: 'LOG',
    name: 'Talix',
    id: 'TalixLOG',
    mageTitle: 'Heart of Flame',
    ability: `
      <h2>Soaring Ash</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Cast any number of your prepped Sparks.<br/>
        Those spells deal 2 additional damage.<br/>
        You may destroy a Spark in your discard pile.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Powdered Infinitum',
        expansion: 'LOG',
        id: 'PowderedInfinitum',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span> for each
            of your prepped Sparks.
          </p>
        `,
        keywords: [],
      },
      {
        type: 'Gem',
        name: 'Powdered Infinitum',
        expansion: 'LOG',
        id: 'PowderedInfinitum',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span> for each
            of your prepped Sparks.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 6,
  },
  {
    expansion: 'LOG',
    name: 'Taqren',
    id: 'TaqrenLOG',
    mageTitle: 'Reignited Guardian',
    ability: `
      <h2>Guardian's Strength</h2>
      <p class="ability-activation">Activate during your turn:</p>
      <p>
        Focus any player's breach or any ally preps a spell
        to one of their opened or closed breaches. Repeat this three times.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Warding Stone',
        expansion: 'LOG',
        id: 'WardingStone',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.<br/>
            The next time you focus or open a breach this turn, gain
            an additional 2 <span class="aether">&AElig;</span>.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'LOG',
    name: 'Thraxir',
    id: 'ThraxirLOG',
    mageTitle: 'The Returned',
    ability: `
      <h2>Sever Reality</h2>
      <p class="ability-activation">Activate after the turn order deck is shuffled:</p>
      <p>
        Reveal cards from the top of the turn order deck equal to the number of open breaches you have.
        Return those cards to the top of the turn order deck in any order.
        You may place the top card of the turn order deck in the turn order discard pile.
      </p>
    `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Cleansing Quartz',
        expansion: 'LOG',
        id: 'CleansingQuartz',
        cost: 0,
        effect: `
          <p>
            Gain 1 <span class="aether">&AElig;</span>.
            <span class="or">OR</span>
            If you have focused or opened a breach this turn, gain a spell that costs
            4 <span class="aether">&AElig;</span> or less from the supply.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 3,
  },
  {
    expansion: 'LOG',
    name: 'Xaxos',
    id: 'XaxosLOG',
    mageTitle: 'Reckoner',
    ability: `
      <h2>Expand Potential</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Look at and gain the top card of the Reckoning deck. Then, place it on top of your deck.
        <span class="or">OR</span>
        Return one Reckoning card from your discard pile to your hand.
      </p>
    `,
    numberOfCharges: 6,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Essence Leech',
        expansion: 'LOG',
        id: 'EssenceLeech',
        cost: 0,
        effect: `
          <p>
            While prepped, when an ally gains a charge the first time on their turn, gain 1 charge.<br/>
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
  {
    expansion: 'LOG',
    name: 'Yan Magda',
    id: 'YanMagdaLOG',
    mageTitle: 'Recovered Exile',
    ability: `
      <h2>Devour Magic</h2>
      <p class="ability-activation">Activate during your main phase:</p>
      <p>
        Cast a spell prepped to an opened Incanted breach three times,
        then reset that breach to its starting position.
      </p>
    `,
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Eldritch Eye',
        expansion: 'LOG',
        id: 'EldritchEye',
        cost: 0,
        effect: `
          <p>
            While this is prepped, when you open a breach during your turn, deal 2 damage.<br/>
            <b>Cast:</b> Deal 1 damage.
          </p>
        `,
        keywords: [],
      },
    ],
    complexityRating: 4,
  },
]
