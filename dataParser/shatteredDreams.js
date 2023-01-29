const shatteredDreamsData = {
  id: 'SD',
  name: 'Shattered Dreams',
  type: 'mini',
  nemeses: [
    {
      expansion: 'SD',
      name: 'The Wailing',
      id: 'TheWailing',
      health: 50,
      difficulty: 6,
      expeditionRating: 3,
      additionalInfo: '',
    },
  ],
  mages: [
    {
      expansion: 'SD',
      name: 'Nook',
      id: 'Nook',
      mageTitle: 'Orb Caller',
      ability: `
        <h2>Condense Aether</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>You my destroy a card in your hand or discard pile.
        Gain 4 <span class="aether">&AElig;</span>.<br/>
        You may place the next spell you gain this turn into your hand.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Mystic Orb',
          expansion: 'SD',
          id: 'MysticOrb',
          cost: 0,
          effect: `<p>Gain 1 charge.<br/>
          Cast a spell in your hand. Return that spell to its supply pile, 
          if able. You may lose 1 charge to gain a spell from any supply pile 
          that costs less than the cast spell.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 9,
    },
  ],
  cards: [
    {
      type: 'Gem',
      expansion: 'SD',
      name: 'Olivinite',
      id: 'Olivinite',
      cost: 3,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Deal 1 damage to a minion.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'SD',
      name: 'Cache Glass',
      id: 'CacheGlass',
      cost: 4,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      If there is a Cache Glass in your discard pile, you may destroy a card 
      in your discard pile.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'SD',
      name: 'Reflective Conduit',
      id: 'ReflectiveConduit',
      cost: 3,
      effect: `
      <p>
      <b>Attach</b> this to any player's breach.
      </p>
      <p>
      When a spell is cast from this breach, the player who cast that spell may 
      return it to their hand instead of discarding it. If they do, discard this.
      </p>
      `,
      keywords: ['attach'],
    },
    {
      type: 'Relic',
      expansion: 'SD',
      name: 'Will Weaver',
      id: 'WillWeaver',
      cost: 7,
      effect: `
      <p>
      Gain 2 charges.<br/>
      After the next time you activate your ability this turn, deal 3 damage.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Breach Seeker',
      id: 'BreachSeeker',
      cost: 5,
      effect: `
      <p>
      <b>Echo</b>
      </p>
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Focus any ally's breach.
        </p>
      `,
      keywords: ['echo'],
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Crescendo Ray',
      id: 'CrescendoRay',
      cost: 4,
      effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      Gain 1 <span class="aether">&AElig;</span> for each other spell you have 
        prepped.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Storm Vapors',
      id: 'StormVapors',
      cost: 4,
      effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      If there is another Storm Vapors in any player's discard pile, 
      focus any player's breach.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Mantra of Strength',
      id: 'MantraOfStrength',
      cost: 3,
      effect: `
      <p>
      <b>Cast:</b> Any player focuses their closed breach wich the highest 
      focus cost.<br/>
      Deal 1 damage.<br/>
      You may destroy this. If you do, deal 2 additional damage.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Embody Flame',
      id: 'EmbodyFlame',
      cost: 7,
      effect: `
      <p>
      <b>Cast:</b> Deal 5 damage.<br/>
      You may destroy a card in this card's supply pile. If you do deal 3 
      additional damage.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Snap Ritual',
      id: 'SnapRitual',
      cost: 6,
      effect: `
      <p>
      While prepped once per turn during your main phase, you may discard 
      a card in hand to deal 2 damage.<br/>
        <b>Cast:</b> Deal 3 damage.
        </p>
        `,
      keywords: [],
    },
  ],
  treasures: [
    {
      id: 'MazahaedronsWorldheartShard',
      name: "Mazahaedron's Worldheart Shard",
      expansion: 'SD',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Gain 2 <span class="aether">&AElig;</span> that can only be used to gain 
      a card. Place the next card you gain this turn on top of any ally's discard pile.
      </p>
      `,
    },
    {
      id: 'PhaedraxasTourmalineShard',
      name: "Phaedraxa's Tourmaline Shard",
      expansion: 'SD',
      level: 1,
      subtype: 'Gem',
      effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      Any ally may suffer 1 damage. If they do, they destroy a card in hand.
      </p>
      `,
    },
    {
      id: 'FracturedShell',
      name: 'Fractured Shell',
      expansion: 'SD',
      level: 2,
      effect: `
      <p>
      At the start of the game, set this next to asupply pile that costs 4 
      <span class="aether">&AElig;</span> or more. When a player gains a card 
      from that supply, that player gains a charge.
      </p>
      `,
    },
    {
      id: 'Extra-DimensionalLens',
      name: 'Extra-Dimensional Lens',
      expansion: 'SD',
      level: 3,
      effect: `
      <p>
      Once per turn during your main phase, you may reveal the top three cards 
      of the nemesis deck. Return them in any order.
      </p>
      `,
    },
    {
      id: 'SeersBracer',
      name: "Seer's Bracer",
      expansion: 'SD',
      level: 3,
      effect: `
      <p>
      Once per turn during your main phase when you gain a charge, any ally 
      draws a card.
      </p>
      `,
    },
  ],
}

module.exports = shatteredDreamsData
