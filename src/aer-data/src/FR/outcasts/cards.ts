import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Pyrite Instable',
    id: 'UnstablePyrite',
    cost: 2,
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>.<br />
        You may destroy this. If you do, gain an additional 2 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Péridot en Fusion',
    id: 'MoltenPeridot',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        If this is the second time you have played Molten Peridot this turn, 
        you may destroy this. If you do, gain a card that costs 4 <span class="aether">&AElig;</span> 
        or less from any supply pile.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Spirale d\'Ambre',
    id: 'HelixOfAmber',
    cost: 3,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        You may suffer 1 damage. If you do, destroy a card that costs 0 <span class="aether">&AElig;</span> 
        in your hand.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Phénixium Fossilisé',
    id: 'PetrifiedPhoenixium',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        The next time you gain a card this turn, you may cast any player's prepped spell.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Saphir Galvanisé',
    id: 'GalvanizedSapphire',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        Xaxos: Outcast gains 1 charge.
      </p>
    `,
    keywords: ['xaxos'],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Cyclite Oblongue',
    id: 'ElongatedLooq',
    cost: 4,
    effect: `
      <p>
        Gain 2 <span class="aether">&AElig;</span>.<br />
        The next time you focus or open a breach this turn, gain 1 charge.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Héliolite Intense',
    id: 'VigorousSunstone',
    cost: 5,
    effect: `
      <p>
        When you gain this, if this is the second card you gained this turn, 
        place it into your hand.<br />
        Gain 3 <span class="aether">&AElig;</span>.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'O',
    name: 'Sazite de Duplication',
    id: 'DuplicatingSazite',
    cost: 6,
    effect: `
      <p>
        Gain 3 <span class="aether">&AElig;</span>.<br />
        The next time you gain a card this turn, you may discard a prepped spell 
        that costs 1 <span class="aether">&AElig;</span> or more. If you do, 
        any ally gains a card from the supply that costs less than or equal to the card 
        you gained.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Orbe des Profondeurs',
    id: 'OrbOfTheDeep',
    cost: 2,
    effect: `
      <p>
        Focus your closed breach with the lowest focus cost.
        <span class="or">OR</span>
        Destroy this. Gain 1 charge.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Racive Carnivore',
    id: 'CarnivorousRoox',
    cost: 3,
    effect: `
      <p>
        Gain 1 <span class="aether">&AElig;</span>. You may destroy a card in hand 
        to gain <span class="aether">&AElig;</span> equal to its cost.
        <span class="or">OR</span>
        Destroy this. Focus your closed breach with the lowest focus cost twice.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Dague de Faille',
    id: 'RiftDagger',
    cost: 3,
    effect: `
      <p>
        Gain a card from any other supply pile that costs 3 <span class="aether">&AElig;</span> 
        or less. You may destroy this to gain a card that costs up to 4 <span class="aether">&AElig;</span> 
        instead.<br />
        You may spend 1 <span class="aether">&AElig;</span>. If you do, place that card 
        into your hand.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Circuit de Reconstitution',
    id: 'ReconstitutingCircuit',
    cost: 3,
    effect: `
      <p>
        Xaxos: Outcast gains 1 charge.<br />
        You may destroy a card in hand.
      </p>
    `,
    keywords: ['xaxos'],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Altérateur de Destin',
    id: 'DestinyForger',
    cost: 4,
    effect: `
      <p>
        Any ally may destroy a card in hand. That player may gain a card that costs 
        up to 2 <span class="aether">&AElig;</span> more than the destroyed card and 
        place it into their hand.
        <span class="or">OR</span>
        Destroy this. Gain 2 charges.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Chaîne de Restitution',
    id: 'ChainOfRetrieval',
    cost: 4,
    effect: `
      <p>
        Focus any ally's breach.
        <span class="or">OR</span>
        Return a card in your discard pile to your hand that costs 
        6 <span class="aether">&AElig;</span> or less.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Soleil en Bouteille',
    id: 'BottledSun',
    cost: 6,
    effect: `
      <p>
        Xaxos: Outcast gains 3 charges.
      </p>
    `,
    keywords: ['xaxos'],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: "Réflecteur de Transmutation",
    id: 'TransmutersLens',
    cost: 5,
    effect: `
      <p>
        Destroy this.<br />
        You may destroy a card in your hand or discard pile.<br />
        Gain a card that costs up to 6 <span class="aether">&AElig;</span> from 
        any supply pile.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'O',
    name: 'Vortex Déséquilibré',
    id: 'UnhingedVortex',
    cost: 7,
    effect: `
      <p>
        Any ally draws three cards. Then, they discard a card in hand.
        <span class="or">OR</span>
        You may focus any ally's breach. Any ally may return a card in their discard pile 
        to their hand.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Givre Renforcé',
    id: 'FortifiedFrost',
    cost: 2,
    effect: `
      <p>
        <b>Cast:</b> Deal 2 damage.<br />
        You may discard a card in hand. If you do, deal 1 additional damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Orage Jumelé',
    id: 'PairedStorm',
    cost: 3,
    effect: `
      <p>
        <b>Link</b> <span class="hint">(Two spells with Link may be prepped to the same breach.)</span>
      </p>
      <p>
        <b>Cast:</b> Deal 2 damage.<br />
        If this is the second time you have cast a Paired Storm this turn, 
        deal 2 additional damage.
      </p>
    `,
    keywords: ['link'],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Morsure Ingénieuse',
    id: 'TwistedFang',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br />
        If this card's supply pile is empty, deal 1 additional damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Éclair Destructeur',
    id: 'ShatteringBolt',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 2 damage.<br />
        You may destroy a card in your hand.
        <span class="or">OR</span>
        <b>Cast:</b> Discard a gem in hand.<br />
        If you do, deal 4 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Combustion Enrichie',
    id: 'InfusedIgnition',
    cost: 4,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br />
        If Xaxos: Outcast has 4 or less charges, he gains 1 charge.
      </p>
    `,
    keywords: ['xaxos'],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Flèche Éclair',
    id: 'LightningArrow',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br />
        You may discard a card in hand. If you do, Gravehold gains 1 life.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Confluence de Radiance',
    id: 'RadiantConflux',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 3 damage.<br />
        Any ally may draw a card and then discard a card in hand.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Faille Instable',
    id: 'UnstableRift',
    cost: 5,
    effect: `
      <p>
        While prepped, at the end of your casting phase deal 1 damage and 
        gain 1 <span class="aether">&AElig;</span>.<br />
        <b>Cast:</b> Deal 4 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Afflux de Volonté',
    id: 'GatheredWill',
    cost: 5,
    effect: `
      <p>
        <b>Cast:</b> Deal 2 damage.<br />
        You may gain a spell from any supply pile that costs 4 <span class="aether">&AElig;</span> 
        or less and place it on top of your deck.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Tornade de Lucidité',
    id: 'TornadoOfInsight',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 5 damage.<br />
        If you have no closed breaches, gain 1 charge.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Vivacité d\'Esprit',
    id: 'HastedIntellect',
    cost: 6,
    effect: `
      <p>
        While prepped, when you gain a card, you may place that card on top 
        of your deck.<br />
        <b>Cast:</b> Deal 4 damage.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Effusion de Flammes',
    id: 'SwarmOfFlame',
    cost: 6,
    effect: `
      <p>
        <b>Cast:</b> Deal 5 damage.<br />
        You may cast any player's prepped spell that costs 5 <span class="aether">&AElig;</span> or less.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Relais Arcanique',
    id: 'ArcaneRelay',
    cost: 8,
    effect: `
      <p>
        <b>Cast:</b> Any ally draws a card then reveals their hand.<br />
        Deal 4 damage. Deal 1 additional damage for each card in that ally's 
        hand that costs 1 <span class="aether">&AElig;</span> or more.
      </p>
    `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'O',
    name: 'Explosion Étourdissante',
    id: 'DizzyingBurst',
    cost: 8,
    effect: `
      <p>
        <b>Cast:</b> Deal 6 damage.<br />
        Reveal the turn order deck.<br />
        Return it in any order.
      </p>
    `,
    keywords: [],
  },
]
