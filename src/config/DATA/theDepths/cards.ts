import { ICard } from 'aer-types'

export const cards: ICard[] = [
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
        Destory a card in hand.<br/>
        You may gain a card from any supply pile that costs up to 
        3 <span class="aether">&AElig;</span> more than the destroyed card.
      </p>
        `,
    keywords: [],
  },
]
