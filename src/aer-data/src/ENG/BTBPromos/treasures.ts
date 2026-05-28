import { Treasure } from '../../../../aer-types/types'

export const treasures: Treasure[] = [
  {
    id: 'AlcheiasGeode',
    name: "Alcheia's Geode",
    expansion: 'BTBPromo',
    level: 1,
    subtype: 'Gem',
    effect: `
	<p>
      Gain a trinket and place it into your hand.
    </p>
      `,
  },
  {
    id: 'LeisansUnsealedEssence',
    name: "Leisan's Unsealed Essence",
    expansion: 'BTBPromo',
    level: 1,
    subtype: 'Gem',
    effect: `
	<p>
	  When the game starts, place a nemesis token on your ability.
	  When you use your ability, remove it.</p>
	  <p>Gain 1 <span class="aether">&AElig;</span>. If your ability doesn't have
	  a nemesis token on it, gain an additional 1 <span class="aether">&AElig;</span>.
    </p>
      `,
  },
  {
    id: 'XaxossSiphonite',
    name: "Xaxos's Siphonite",
    expansion: 'BTBPromo',
    level: 1,
    subtype: 'Gem',
    effect: `
	<p>
      Gain 1 <span class="aether">&AElig;</span>. You may have an enemy gain 1 life. If you do, gain an additional 1 <span class="aether">&AElig;</span>.
    </p>
      `,
  },
  {
    id: 'BlindingDawn',
    name: 'Blinding Dawn',
    expansion: 'BTBPromo',
    level: 2,
    effect: `
      <p>
	  When the last card in a supply pile is gained, developed, or destroyed, any player
	  destroys every card in their discard pile and deals 1 damage for each card destroyed this way.
      </p>
      `,
  },
  {
    id: 'BottledMelody',
    name: 'Bottled Melody',
    expansion: 'BTBPromo',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a relic supply pile.
	  When a player plays a card from that supply pile, a different player draws a card.
      </p>
      `,
  },
  {
    id: 'CrystallineEcho',
    name: 'Crystallline Echo',
    expansion: 'BTBPromo',
    level: 2,
    effect: `
      <p>
      At the start of the game, set this next to a supply pile.
	  When a player gains a card from this supply pile, that player places the gained card into hand.
	  Then, they gain two trinkets and place them on top of their deck.
      </p>
      `,
  },
  {
    id: 'SkysBounty',
    name: 'Sky\'s Bounty',
    expansion: 'BTBPromo',
    level: 2,
    effect: `
      <p>
      Once per turn, when the last card in a supply pile is gained, developed, or destroyed,
	  choose a supply pile that has a card that costs less than the card that was gained, developed, or destroyed.
	  Any player gains all the cards in the chosen supply pile.
      </p>
      `,
  },
  {
    id: 'ArcaneReach',
    name: 'Arcane Reach',
    expansion: 'BTBPromo',
    level: 3,
    effect: `
      <p>
     Spells that cost 7 <span class="aether">&AElig;</span> or more
	 cost you 2 less <span class="aether">&AElig;</span> to gain.
      </p>
      `,
  },
  {
    id: 'WrathsMemory',
    name: 'Wrath\'s Memory',
    expansion: 'BTBPromo',
    level: 3,
    effect: `
      <p>
     When you suffer damage:</p>
	 <p>If you suffered exactly 1 damage, gain 1 <span class="aether">&AElig;</span> token.</p>
	 <p>If you suffered exactly 2 damage, focus any ally's breach.</p>
	 <p>If you suffered 3 damage or more, gain a card from the least expensive supply pile.
      </p>
      `,
  },
  {
    id: 'XaxossUnderstudy',
    name: 'Xaxos\'s Understudy',
    expansion: 'BTBPromo',
    level: 3,
    effect: `
      <p>
     Once per turn during your main phase, you may have an enemy gain 2 life. If you do, gain 1 charge.
      </p>
      `,
  },
  {
    id: 'AgonyStone',
    name: "Agony Stone",
    expansion: 'BTBPromo',
    level: 4,
    subtype: 'Gem',
    effect: `
	<p>
      Gain 3 <span class="aether">&AElig;</span> and deal 1 damage.</p>
	  <span class="or">OR</span>
	  <p>Gain 1 <span class="aether">&AElig;</span> and deal 3 damage.
    </p>
      `,
  },
  {
    id: 'CrystallizedHeart',
    name: "Crystallized Heart",
    expansion: 'BTBPromo',
    level: 4,
    subtype: 'Spell',
    effect: `
	<p>
      <b>Cast:</b> Any player gains a gem from any supply pile and places it into their hand.</p>
	  <span class="or">OR</span>
	  <p><b>Cast:</b> Any player discards a gem. Deal damage equal to that gem's cost plus 6.
    </p>
      `,
  },
  {
    id: 'JiansFocusingOrb',
    name: "Jian's Focusing Orb",
    expansion: 'BTBPromo',
    level: 4,
    subtype: 'Relic',
    effect: `
	<p>
      Focus any player's breach. Any ally draws a card.</p>
	  <span class="or">OR</span>
	  <p>Destroy this. Gravehold gains 5 life.
    </p>
      `,
  },
  {
    id: 'RealityKey',
    name: "Reality Key",
    expansion: 'BTBPromo',
    level: 4,
    subtype: 'Relic',
    effect: `
	<p>
      Any ally draws three cards, then discards a card.<br/>You may destroy this to put a card in play from the nemesis deck on top of the nemesis deck.
    </p>
      `,
  },
  {
    id: 'ViridescentJade',
    name: "Viridescent Jade",
    expansion: 'BTBPromo',
    level: 4,
    subtype: 'Gem',
    effect: `
	<p>
      Gain 2 <span class="aether">&AElig;</span>.<br/>Any player gains 2 <span class="aether">&AElig;</span> tokens.
    </p>
      `,
  },
]
