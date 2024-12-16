import { Mage } from '../../../../aer-types/types'

export const mages: Mage[] = [
  {
    expansion: 'Depths',
    name: 'Nym',
    id: 'Nym',
    mageTitle: 'Breach Mage Apprentice',
    abilityName: `Terminus Barrier`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
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
    abilityName: `Quelling Blade`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
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
    abilityName: `Sanctum Glyph`,
    abilityActivation: `Activate during your main phase:`,
    abilityEffect: `
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
