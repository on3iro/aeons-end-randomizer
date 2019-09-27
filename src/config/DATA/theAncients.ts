import { IExpansion } from '../../types'

export const theAncientsData: IExpansion = {
  id: 'TA',
  name: 'The Ancients',
  type: 'mini',
  nemeses: [
    {
      expansion: 'TA',
      name: 'The Wanderer',
      id: 'TheWanderer',
      health: 40,
      difficulty: 5,
      expeditionRating: 3,
      additionalInfo: '',
    },
  ],
  mages: [
    {
      expansion: 'TA',
      name: 'Mazra',
      id: 'Mazra',
      mageTitle: 'The Reader',
      ability: `
        <h2>Research</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>Destroy a card with "Mazra" in its name in your hand. 
        Gain a card with "Mazra" in its name from the personal upgrade deck 
        that costs 3 <span class="aether">&AElig;</span> more than the destroyed card 
        and place that card into your hand.
        <span class="or">OR</span>
        Return to your hand all cards with "Mazra" in their name 
        in your discard pile.</p>`,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Spell',
          name: "Mazra's Studies",
          expansion: 'TA',
          id: 'MazrasStudies',
          cost: 0,
          effect: `<p><b>Cast:</b> Deal 1 demage.
            <span class="or">OR</span>
            <b>Cast:</b> Focus your III breach.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 6,
    },
    {
      expansion: 'TA',
      name: 'Qu',
      id: 'Qu',
      mageTitle: 'Builder And Destroyer',
      ability: `
        <h2>Duality Embrace</h2>
        <p class="ability-activation">Activate during your main phase:</p>
        <p>If you are in Destroyer form, cast up to two different spells prepped 
        by any number of players, and then flip over the Form token. 
        Otherwise, any player preps up to two spells in their discard pile 
        to their opened breaches, and then flip over the Form token.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Relic',
          name: 'Change Form',
          expansion: 'TA',
          id: 'ChangeForm',
          cost: 0,
          effect: `<p>Qu flips over the Form token.</p>`,
          keywords: [],
        },
        {
          type: 'Gem',
          name: 'MeldedRadite',
          expansion: 'TA',
          id: 'MeldedRadite',
          cost: 0,
          effect: `<p>Gain 0 <span class="aether">&AElig;</span>.<br/>
            You may cast any player's prepped spell.</p>`,
          keywords: [],
        },
      ],
      complexityRating: 8,
    },
  ],
  cards: [
    {
      type: 'Gem',
      expansion: 'TA',
      name: 'Shining Fluorite',
      id: 'ShiningFluorite',
      cost: 7,
    },
    {
      type: 'Relic',
      expansion: 'TA',
      name: 'Polyphase Turbine',
      id: 'PolyphaseTurbine',
      cost: 3,
    },
    {
      type: 'Relic',
      expansion: 'TA',
      name: 'Breach Extractor',
      id: 'BreachExtractor',
      cost: 5,
    },
    {
      type: 'Relic',
      expansion: 'TA',
      name: 'Focusing Conduit',
      id: 'FocusingConduit',
      cost: 5,
    },
    {
      type: 'Spell',
      expansion: 'TA',
      name: 'Dual Flash',
      id: 'DualFlash',
      cost: 3,
    },
    {
      type: 'Spell',
      expansion: 'TA',
      name: 'Dust Caller',
      id: 'DustCaller',
      cost: 5,
    },
    {
      type: 'Spell',
      expansion: 'TA',
      name: 'Symbiotic Synapse',
      id: 'SymbioticSynapse',
      cost: 7,
    },
  ],
}
