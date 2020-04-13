import { ICard } from 'aer-types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'TA',
    name: 'Shining Fluorite',
    id: 'ShiningFluorite',
    cost: 7,
    effect: `
      <p>
      Gain 3 <span class="aether">&AElig;</span>.<br/>
      Place the next spell you gain this turn into your hand.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Polyphase Turbine',
    id: 'PolyphaseTurbine',
    cost: 3,
    effect: `
      <p>
        If this is the first time you've played a Polyphase Turbine this turn, 
        gain 2 <span class="aether">&AElig;</span>. Otherwise, gain 1 charge 
        and 1 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Breach Extractor',
    id: 'BreachExtractor',
    cost: 5,
    effect: `
      <p>
      Any player destroys up to two cards in hand.
        <span class="or">OR</span>
      Destroy this. Gravehold gains 3 life.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'TA',
    name: 'Focusing Conduit',
    id: 'FocusingConduit',
    cost: 5,
    effect: `
      <p>
        <b>Attach</b> this to any player's breach.
      </p>
      <p>
        At the end of that player's casting phase, focus this breach.
        When this breach is opened, destory this card.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Dual Flash',
    id: 'DualFlash',
    cost: 3,
    effect: `
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      If this is the first time you have cast Dual Flash during your casting 
      phase this turn, you may cast any player's prepped Dual Flash without
      discarding it.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Dust Caller',
    id: 'DustCaller',
    cost: 5,
    effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      Any ally returns a card that costs 0 <span class="aether">&AElig;</span> 
      from their discard pile to their hand.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'TA',
    name: 'Symbiotic Synapse',
    id: 'SymbioticSynapse',
    cost: 7,
    effect: `
      <p>
        If there is another Symbiotic Synapse in any player's discard pile, this
        gains <b>Echo</b>.
        </p>
        <p>
        <b>Cast:</b> Deal 4 damage.
        </p>
        `,
    keywords: ['echo'],
  },
]
