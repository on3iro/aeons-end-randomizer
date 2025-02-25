import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Radite Ramifiée',
    id: 'BranchingRadite',
    cost: 4,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>. <br/>
          If you have two or more prepped spells, gain an additional 1 
          <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Chakra de Feu',
    id: 'FireChakram',
    cost: 2,
    effect: `
        <p>
          <b>Cast:</b> Deal 2 damage.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Lame de Brane',
    id: 'BraneKnife',
    cost: 3,
    effect: `
        <p>
          Gain 1 charge. <br/>
          Any ally focuses their closed breach with 
          the lowest focus cost.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Bloc de Fulminate',
    id: 'FulmiteSlab',
    cost: 6,
    effect: `
        <p>
          Gain 1 <span class="aether">&AElig;</span>. Gain 2 pulse tokens. <br/>
          Until the end of the turn, you may lose 1 pulse token to gain 
          1 <span class="aether">&AElig;</span> any number of times.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Marbre Doré',
    id: 'GildedMarble',
    cost: 6,
    effect: `
        <p>
          Gain 3 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Relais Voltaïque',
    id: 'VoltaicRelay',
    cost: 4,
    effect: `
        <p>
          Any player gains 3 pulse tokens. <br/>
          That player may lose 1 pulse token. If they do, 
          they destroy a card in hand.
        </p>
      `,
    keywords: ['strong', 'pulse'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Siphon Étincelant',
    id: 'SparkingSiphon',
    cost: 3,
    effect: `
        <p>
          When you gain this, gain 2 pulse tokens. <br/>
          <b>Cast:</b> Deal 2 damage. <br/>
          You may lose 1 pulse token. If you do, any player gains 1 life.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Communion des Brèches',
    id: 'BreachCommunion',
    cost: 4,
    effect: `
        <p>
          While prepped, once per turn during your main phase 
          you may gain 1 pulse token. <br/>
          <b>Cast:</b> Deal 2 damage.<br/>
          You may lose 2 pulse tokens. 
          If you do, deal 3 additional damage.
        </p>
      `,
    keywords: ['strong', 'pulse'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Miroir Infernal',
    id: 'InfernalMirror',
    cost: 5,
    effect: `
        <p>
          Any ally gains 1 charge. Any player gains 2 pulse tokens. 
          You may lose 2 pulse tokens. If you do, cast any player's 
          prepped spell. That spell deals 1 additional damage.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Gemmophage',
    id: 'Geophage',
    cost: 3,
    effect: `
        <p>
          Gain 1 <span class="aether">&AElig;</span>. <br/>
          You may destroy a gem in hand.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Transfusion de Force',
    id: 'ForceTransfusion',
    cost: 4,
    effect: `
        <p>
          <b>Cast:</b> Deal 3 damage. <br/>
          If you have 3 or more charges, gain 1 charge.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Poussière Conductrice',
    id: 'ConductiveGrit',
    cost: 3,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>. Gain 1 pulse token.
          <span class="or">OR</span>
          You may lose 1 pulse token. If you do, gain 3 
          <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Cyanolithe Ancien',
    id: 'AncientCyanolith',
    cost: 3,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Main Éthérée',
    id: 'EtherealHand',
    cost: 6,
    effect: `
        <p>
          Any ally draws two cards.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Rayon Courbé',
    id: 'BendingBeam',
    cost: 5,
    effect: `
        <p>
          <b>Cast:</b> Deal 2 damage. <br/>
          If this spel was cast from an opened III breach, 
          deal 3 additional damage.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Orgues Cristallins',
    id: 'EntangledShard',
    cost: 4,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>. If you have 3 or more 
          charges, gain an additional 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Salve des Arcanes',
    id: 'ArcaneSalvo',
    cost: 5,
    effect: `
        <p>
          While prepped, once per turn during your main
          phase you may place a relic you played this turn 
          or a relic in your discard pile on top of your deck. <br/>
          <b>Cast:</b> Deal 4 damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Portalithe Cristallisée',
    id: 'PhasedPortalite',
    cost: 4,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>. If your III breach is 
          opened, gain an additional 1 <span class="aether">&AElig;</span>.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Double de Feu',
    id: 'PyroGeist',
    cost: 6,
    effect: `
        <p>
          When you prep this, deal 1 damage. <br/>
          <b>Cast:</b> Deal 1 damage. Deal 2 damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Flamboiement de Brèche',
    id: 'BreachFlare',
    cost: 3,
    effect: `
        <p>
          <b>Cast:</b> Deal 2 damage. <br/>
          Focus any player's III breach.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Serment Implacable',
    id: 'ThunderousOath',
    cost: 8,
    effect: `
        <p>
          <b>Cast:</b> Deal 6 damage.<br/> 
          Gain 1 pulse token.<br/>
          You may lose any number of pulse tokens. 
          If you do, any ally draws cards equal to the number 
          of pulse tokens lost this way.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Torporene Apaisante',
    id: 'SoothingTorporene',
    cost: 3,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>.
          <span class="or">OR</span>
          Silence a minion.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Silicate Électrostatique',
    id: 'ArcingSilicate',
    cost: 4,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>. Gain 1 pulse token. <br/>
          You may lose any number of pulse tokens. Deal damage equal to the 
          number of pulse tokens lost this way.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Brouillard Déformant',
    id: 'WarpingHaze',
    cost: 3,
    effect: `
        <p>
          <b>Cast:</b> Deal 2 damage. <br/>
          If you have two or more other prepped spells, deal 1 additional damage.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Poing Incinérateur',
    id: 'IncineratingFist',
    cost: 4,
    effect: `
        <p>
          <b>Cast:</b> Deal 3 damage.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Stabilisateur de Réalité',
    id: 'RealityStabilizer',
    cost: 6,
    effect: `
        <p>
          Gain 2 charges. <br/>
          Silence a minion.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Collision de Brèches',
    id: 'BreachCollision',
    cost: 7,
    effect: `
        <p>
          When you gain this, you may place it on top 
          of any player's discard pile. <br/>
          <b>Cast:</b> Deal 5 damage. <br/>
          Gravehold gains 1 life.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Conclusion Ardente',
    id: 'FieryConclusion',
    cost: 5,
    effect: `
        <p>
          <b>Cast:</b> Deal 4 damage.<br/>
          If there are three or more empty supply piles, 
          deal 3 additional damage.
        </p>
      `,
    keywords: ['strong'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Frénésie Stellaire',
    id: 'StarfireFrenzy',
    cost: 6,
    effect: `
        <p>
          <b>Cast:</b> Deal 4 damage.<br/>
          You may discard a spell in hand. If you do, deal 1 additional 
          damage and gain 1 charge.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Composé Friable',
    id: 'CrumblingCompound',
    cost: 5,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>. You may discard a gem in 
          in hand. If you do, gain an additional 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Jumelles de Prophétie',
    id: 'PropheticLens',
    cost: 4,
    effect: `
        <p>
          Gain 1 charge. <br/>
          Reveal the top card of your deck. You may destroy it. If you
          don't, gain 1 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: ['strong'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Batteries Surrénales',
    id: 'AdrenalBatteries',
    cost: 7,
    effect: `
        <p>
          Gain 2 pulse tokens. You may lose 4 pulse tokens. 
          If you do, open any player's closed breach. Then, 
          gain a spell from any supply pile that costs 5 
          <span class="aether">&AElig;</span> or less and 
          prep that spell to any player's opened breach.
        </p>
      `,
    keywords: ['pulse', 'strong'],
  },
  {
    type: 'Gem',
    expansion: 'Legacy',
    name: 'Luménium Raffiné',
    id: 'RefinedLumenium',
    cost: 5,
    effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>. <br/>
          Any ally draws a card.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Moulin du Néant',
    id: 'VoidMill',
    cost: 5,
    effect: `
        <p>
          Focus any player's breach. <br/>
          Two different players may destroy the top card of their 
          discard pile.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Nœud Gravitationnel',
    id: 'GravityNode',
    cost: 5,
    effect: `
        <p>
          <b>Cast: Any player discards a card in hand. 
          If they do, deal 4 damage.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Relic',
    expansion: 'Legacy',
    name: 'Couronne Neurale',
    id: 'NeuralWreath',
    cost: 4,
    effect: `
        <p>
          Focus any player's breach. Any player may prep a spell in hand.
        </p>
      `,
    keywords: ['weak'],
  },
  {
    type: 'Spell',
    expansion: 'Legacy',
    name: 'Sphère d\'Inversion',
    id: 'SphereOfInversion',
    cost: 9,
    effect: `
        <p>
          <b>Cast:</b> Deal 7 damage. <br/>
          Any ally may destroy a card in hand. 
          If they do, they gain 2 life.
        </p>
      `,
    keywords: ['strong'],
  },
]
