import { ICard } from 'aer-types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Triplite Core',
    id: 'TripliteCore',
    cost: 4,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span> that can only be used to gain 
      cards.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Nerve Jab',
    id: 'NerveJab',
    cost: 2,
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Silence a minion.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Double Tap',
    id: 'DoubleTap',
    cost: 3,
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage. Deal 1 damage.<br/>
      <span class="hint">(Effects that modify damage affect both 
      instances of damage this spell deals.)</span>
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Oblivium Resin',
    id: 'ObliviumResin',
    cost: 5,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      If you have three or more cards that cost 0 <span class="aether">&AElig;</span> 
      in hand, gain an additional 2 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Summonite',
    id: 'Summonite',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Gain a Summonite from the supply and place it on top of any ally's 
      discard pile.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Manifold Container',
    id: 'ManifoldContainer',
    cost: 4,
    effect: `
      <p>
      Gain 1 <span class="aether">&AElig;</span>.<br/>
      The next time you gain a card this turn, you may also gain a card 
      that costs less than the gained card.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Draining Touch',
    id: 'DrainingTouch',
    cost: 2,
    effect: `
      <p>
      <b>Cast:</b> Deal 1 damage.<br/>
      Gain 1 charge.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Jolting Crust',
    id: 'JoltingCrust',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>. Gain 1 pulse token.
        <span class="or">OR</span>
      Gain 2 <span class="aether">&AElig;</span>. Lose 1 pulse token.
        If you do, gain 1 charge.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Mentite Chunk',
    id: 'MentiteChunk',
    cost: 5,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      If there are seven or more cards in your discard pile, gain an additional 
      1 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Soul Cords',
    id: 'SoulCords',
    cost: 5,
    effect: `
      <p>
      Any player gains 1 pulse token.<br/>
      Each player with 2 or more pulse tokens gains 1 charge.
      </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Voidium Spike',
    id: 'VoidiumSpike',
    cost: 3,
    effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>
      Each ally may discard a card in hand. Each ally that does gains 1 charge.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Precision Shot',
    id: 'PrecisionShot',
    cost: 3,
    effect: `
      <p>
        <b>Link</b> <span class="hint">(Two spells with Link mat be prepped to the same breach.)</span>
        </p>
        <p>
        <b>Cast:</b> Deal 2 damage.<br/>
        If there are six or more other cards in your 
        discard pile, deal 2 additional damage.
        </p>
        `,
    keywords: ['link'],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Muted Lacosite',
    id: 'MutedLacosite',
    cost: 5,
    effect: `
      <p>
      When you gain this, Silence a minion.<br/>
      Gain 3 <span class="aether">&AElig;</span>.
      </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Blade Of Wisdom',
    id: 'BladeOfWisdom',
    cost: 6,
    effect: `
      <p>
      When you gain this, if there are seven or more other cards in your 
        discard pile, gain 2 life.<br/>
        <b>Cast:</b> Deal 5 damage.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Stunning Force',
    id: 'StunningForce',
    cost: 5,
    effect: `
      <p>
      <b>Cast:</b> Deal 4 damage to the nemesis.<br/>
      Silence a minion.
        </p>
      `,
    keywords: ['silence'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Flash Of Intellect',
    id: 'FlashOfIntellect',
    cost: 4,
    effect: `
      <p>
      <b>Link</b> <span class="hint">(Two spells with Link mat be prepped to the same breach.)</span>
      </p>
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      If there are six or more other cards in your 
      discard pile, you may gain a Flash of Intellect from the supply and 
      place it on top of your deck.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Scholars Opus',
    id: 'ScholarsOpus',
    cost: 3,
    effect: `
      <p>
      Gain 1 charge.<br/>
      If there are seven or more cards in your discard pile, gain 1 
      additional charge.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Bottled Star',
    id: 'BottledStar',
    cost: 7,
    effect: `
      <p>
      Gain 3 charges.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Burning Current',
    id: 'BurningCurrent',
    cost: 3,
    effect: `
      <p>
      While prepped, during your casting phase you may lose 2 pulse tokens. 
        If you do, spells you cast this turn deal 1 additional damage.<br/>
        <b>Cast:</b> Deal 1 damage.<br/>
        Gain 1 pulse token.
        </p>
      `,
    keywords: ['pulse'],
  },
  {
    type: 'Spell',
    expansion: 'BS',
    name: 'Psychic Eruption',
    id: 'PsychicEruption',
    cost: 8,
    effect: `
      <p>
      <b>Cast:</b> Deal damage equal to the number of cards in any player's 
      discard pile.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Living Gauntlet',
    id: 'LivingGauntlet',
    cost: 4,
    effect: `
      <p>
      Reveal the top card of your deck.<br/>
      You may destroy or discard it. Each ally may draw a card. Each ally 
      that does discards a card in hand.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'BS',
    name: 'Shining Tetrite',
    id: 'ShiningTetrite',
    cost: 6,
    effect: `
      <p>
      Gain 4 <span class="aether">&AElig;</span> that cannot be used to gain 
      a card.
      </p>
      `,
    keywords: [],
  },
]
