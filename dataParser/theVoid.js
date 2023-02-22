const theVoidData = {
  id: 'TV',
  name: 'The Void',
  type: 'mini',
  nemeses: [
    {
      expansion: 'TV',
      name: 'Knight Of Shackles',
      id: 'KnightOfShackles',
      health: 70,
      difficulty: 4,
      expeditionRating: 1,
      additionalInfo: '',
    },
    {
      expansion: 'TV',
      name: 'Maiden Of Thorns',
      id: 'MaidenOfThorns',
      health: 80,
      difficulty: 4,
      expeditionRating: 3,
      additionalInfo: '',
    },
  ],
  mages: [
    {
      expansion: 'TV',
      name: 'Sparrow',
      id: 'Sparrow',
      mageTitle: 'Breach Mage Soldier',
      ability: `
        <h2>Eldritch Tether</h2>
        <p class="ability-activation">Activate during your casting or main phase:</p>
        <p>Focus any player's breach. Repeat this three additional times.
        <span class="or">OR</span>
        Any ally with no closed breaches draws three cards and then 
        preps up to three spells from their hand.</p>`,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Smolder',
          expansion: 'TV',
          id: 'Smolder',
          cost: 0,
          effect: `
            <p>
              This spell may be prepped to a closed breach without focusing it.<br/>
              <b>Cast:</b> Deal 1 damage.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'TV',
      name: 'Xaxos',
      id: 'XaxosTV',
      mageTitle: 'Voidbringer',
      ability: `
        <h2>Praetorian Halo</h2>
        <p class="ability-activation">Activate during your casting or main phase:</p>
        <p>Any ally gains 1 charge and discards a random card in hand. Focus 
        one of your breaches. Gain 1 life. Destroy a card in your hand or 
        discard pile.</p>`,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Spell',
          name: 'Pyre',
          expansion: 'TV',
          id: 'Pyre',
          cost: 0,
          effect: `
            <p>
              <b>Cast:</b> Deal 1 damage.<br/>
              Any ally may discard a card in hand. If they do, 
              deal 2 additional damage.
            </p>
          `,
          keywords: [],
        },
      ],
    },
  ],
  cards: [
    {
      type: 'Gem',
      expansion: 'TV',
      name: 'Fossilized Scarab',
      id: 'FossilizedScarab',
      cost: 3,
      effect: `
      <p>
      Gain 2 <span class="aether">&AElig;</span>.
        <span class="or">OR</span>
      Destroy a card in hand.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'TV',
      name: 'Thermal Dart',
      id: 'ThermalDart',
      cost: 4,
      effect: `
      <p>
      <b>Link</b> <span class="hint">(Two spells with Link may be prepped to the same breach.)</span>
      </p>
      <p>
      <b>Cast:</b> Deal 3 damage.<br/>
      If this is not the first Thermal Dart you have cast this turn, gain 1 charge.
        </p>
      `,
      keywords: ['link'],
    },
    {
      type: 'Spell',
      expansion: 'TV',
      name: 'Resonate',
      id: 'Resonate',
      cost: 6,
      effect: `
      <p>
      <b>Cast:</b> Deal 4 damage.<br/>
      If there are six or more other cards in your discard pile, deal 3 
      additional damage.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'TV',
      name: 'Conflagration',
      id: 'Conflagration',
      cost: 3,
      effect: `
      <p>
      <b>Link</b> <span class="hint">(Two spells with Link may be prepped to the same breach.)</span>
      </p>
      <p>
      <b>Cast:</b> Deal 2 damage.<br/>
      Gain 1 <span class="aether">&AElig;</span>.
        </p>
      `,
      keywords: ['link'],
    },
    {
      type: 'Relic',
      expansion: 'TV',
      name: 'Dimensional Key',
      id: 'DimensionalKey',
      cost: 8,
      effect: `
      <p>
      Any ally draws two cards.
        <span class="or">OR</span>
      Destroy this. Suffer 1 damage. Place a card in play from the nemesis deck
      on top of the nemesis deck.
      </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'TV',
      name: 'Inner Fire',
      id: 'InnerFire',
      cost: 2,
      effect: `
      <p>
        <b>Link</b> <span class="hint">(Two spells with Link may be prepped to the same breach.)</span>
      </p>
      <p>
        <b>Cast:</b> Deal 1 damage.<br/>
        If the nemesis tier is 2 or higher, deal 1 additional damage.
        </p>
        `,
      keywords: ['link'],
    },
    {
      type: 'Spell',
      expansion: 'TV',
      name: 'Fulminate',
      id: 'Fulminate',
      cost: 5,
      effect: `
      <p>
      While prepped, other spells you cast deal 1 additional damage.
      </p>
      <p>
      <b>Link</b> <span class="hint">(Two spells with Link may be prepped to the same breach.)</span>
      </p>  
      <b>Cast:</b> Deal 3 damage.
        </p>
        `,
      keywords: ['link'],
    },
    {
      type: 'Relic',
      expansion: 'TV',
      name: 'Eternity Charm',
      id: 'EternityCharm',
      cost: 3,
      effect: `
      <p>
        Focus your closed breach with the lowest focus cost. Reveal the top 
        three cards of your deck. You may prep on of the revealed cards.
      </p>
        `,
      keywords: [],
    },
  ],
}

module.exports = theVoidData
