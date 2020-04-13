import { Mage } from 'aer-types'

export const mages: Mage[] = [
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
]
