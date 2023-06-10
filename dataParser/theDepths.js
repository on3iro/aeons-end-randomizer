const theDepthsData = {
  id: 'Depths',
  name: 'The Depths',
  type: 'mini',
  nemeses: [
    {
      expansion: 'Depths',
      name: 'Horde-Crone',
      id: 'HordeCrone',
      health: 60,
      difficulty: 6,
      expeditionRating: 2,
      additionalInfo: '',
    },
  ],
  mages: [
    {
      expansion: 'Depths',
      name: 'Nym',
      id: 'Nym',
      mageTitle: 'Breach Mage Apprentice',
      ability: `
        <h2>Terminus Barrier</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Discard the top card of the nemesis deck.</p>
        <p>If you discarded an attack card, discard an additional card.</p>
      `,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Cinder',
          expansion: 'Depths',
          id: 'Cinder',
          cost: 0,
          effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.
              <span class="or">OR</span>
              <b>Cast:</b> Gain 2 <span class="aether">&AElig;</span>.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'Depths',
      name: 'Reeve',
      id: 'Reeve',
      mageTitle: 'Breach Mage Elite',
      ability: `
        <h2>Quelling Blade</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Deal 5 damage to a minion.</p>
        <p>Deal 3 damage to a different minion.</p>
      `,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Obsidian Shard',
          expansion: 'Depths',
          id: 'ObsidianShard',
          cost: 0,
          effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              You may suffer 1 damage. If you do, gain an additional 2 <span class="aether">&AElig;</span>.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'Depths',
      name: "Z'hana",
      id: 'Zhana',
      mageTitle: 'Breach Mage Renegade',
      ability: `
        <h2>Sanctum Glyph</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Gravehold gains 7 life.</p>
      `,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Eternal Ember',
          expansion: 'Depths',
          id: 'EternalEmber',
          cost: 0,
          effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.
              <span class="or">OR</span>
              <b>Cast:</b> Cast one of your prepped spells without 
              discarding it.
            </p>
          `,
          keywords: [],
        },
      ],
    },
  ],
  cards: [
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Void Bond',
      id: 'VoidBond',
      cost: 4,
      effect: `
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      You may cast any player's prepped spell.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Combustion',
      id: 'Combustion',
      cost: 5,
      effect: `
      <p>
      <b>Cast:</b> Deal 2 damage to a minion.<br/>
      Deal 2 damage to a different minion or the nemesis.<br/>
      <span class="hint">Effects that modify damage affect both instances 
      of damage this spell deals.
      </span>
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'Depths',
      name: 'Vim Dynamo',
      id: 'VimDynamo',
      cost: 4,
      effect: `
      <p>
        Suffer 1 damage. Any player draws two cards.
          <span class="or">OR</span>
        Destroy this. Any player gains 2 life and 1 charge.
      </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Disintegrating Scythe',
      id: 'DisintegratingScythe',
      cost: 7,
      effect: `
      <p>
      <b>Cast:</b> Deal 8 damage.<br/>
        Suffer 1 damage. Instead of discarding this, destroy it or place it 
        on top of any player's discard pile.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Monstrous Inferno',
      id: 'MonstrousInferno',
      cost: 8,
      effect: `
      <p>
        This spell must be prepped to two adjacent breaches so that this card 
        touches both breaches. This fully occupies both breaches.<br/>
        <b>Cast:</b> Deal 7 damage divided however you choose to the nemesis 
        and any number of minions.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Devouring Shadow',
      id: 'DevouringShadow',
      cost: 6,
      effect: `
      <p>
        While prepped, once per turn during your main phase you may 
        destroy a card in hand.<br/>
        <b>Cast:</b> Deal 3 damage.
        </p>
        `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'Depths',
      name: 'Banishing Topaz',
      id: 'BanishingTopaz',
      cost: 5,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      You may place any card in hand on top of your deck. If you do, 
      gain an additional 2 <span class="aether">&AElig;</span>.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'Depths',
      name: 'Transmogrifier',
      id: 'Transmogrifier',
      cost: 4,
      effect: `
      <p>
        Destroy a card in hand.<br/>
        You may gain a card from any supply pile that costs up to 
        3 <span class="aether">&AElig;</span> more than the destroyed card.
      </p>
        `,
      keywords: [],
    },
  ],
}

module.exports = theDepthsData
