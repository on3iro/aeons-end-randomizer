import { IExpansion } from '../../types'

export const theDepthsData: IExpansion = {
  id: 'Depths',
  name: 'Depths',
  type: 'mini',
  nemeses: [
    {
      expansion: 'Depths',
      name: 'Horde Crone',
      id: 'HordeCrone',
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
      name: 'Zhana',
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
    },
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Combustion',
      id: 'Combustion',
      cost: 5,
    },
    {
      type: 'Relic',
      expansion: 'Depths',
      name: 'Vim Dynamo',
      id: 'VimDynamo',
      cost: 4,
    },
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Disintegrating Scythe',
      id: 'DisintegratingScythe',
      cost: 7,
    },
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Monstrous Inferno',
      id: 'MonstrousInferno',
      cost: 8,
    },
    {
      type: 'Spell',
      expansion: 'Depths',
      name: 'Devouring Shadow',
      id: 'DevouringShadow',
      cost: 6,
    },
    {
      type: 'Gem',
      expansion: 'Depths',
      name: 'Banishing Topaz',
      id: 'BanishingTopaz',
      cost: 5,
    },
    {
      type: 'Relic',
      expansion: 'Depths',
      name: 'Transmogrifier',
      id: 'Transmogrifier',
      cost: 4,
    },
  ],
}
