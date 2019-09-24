import { IExpansion } from '../../types'

export const shatteredDreamsData: IExpansion = {
  id: 'SD',
  name: 'Shattered Dreams',
  type: 'mini',
  nemeses: [
    {
      expansion: 'SD',
      name: 'The Wailing',
      id: 'The Wailing',
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
    },
    {
      type: 'Gem',
      expansion: 'SD',
      name: 'Cache Glass',
      id: 'CacheGlass',
      cost: 4,
    },
    {
      type: 'Relic',
      expansion: 'SD',
      name: 'Reflective Conduit',
      id: 'ReflectiveConduit',
      cost: 3,
    },
    {
      type: 'Relic',
      expansion: 'SD',
      name: 'Will Weaver',
      id: 'WillWeaver',
      cost: 7,
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Breach Seeker',
      id: 'BreachSeeker',
      cost: 5,
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Crescendo Ray',
      id: 'CrescendoRay',
      cost: 4,
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Storm Vapors',
      id: 'StormVapors',
      cost: 4,
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Mantra of Strength',
      id: 'MantraOfStrength',
      cost: 3,
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Embody Flame',
      id: 'EmbodyFlame',
      cost: 7,
    },
    {
      type: 'Spell',
      expansion: 'SD',
      name: 'Snap Ritual',
      id: 'SnapRitual',
      cost: 6,
    },
  ],
}
