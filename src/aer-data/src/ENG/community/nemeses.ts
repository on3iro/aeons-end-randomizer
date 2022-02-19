import { Nemesis } from '../../../../aer-types/types'

export const nemeses: Nemesis[] = [
  {
    expansion: 'community',
    name: 'Haze Fiend',
    id: 'HazeFiend',
    health: 75,
    difficulty: 5,
    expeditionRating: 2,
    additionalInfo: `
      <p>
      Required adjustments (by Michael Hunter) to make Haze Fiend (from Legacy) playable outside of the campaign:<br/>
      <b>Setup:</b> Setup twelve crystal cards with the flawed stickers on them. These form the flawed crystal deck.<br/>
      <b>Unleash:</b> A player degrades a card in their hand that costs 2 or more <span class="aether">&AElig;</span>. OR Each player suffers 1 damage for each flawed crystal in their hand and one player places a flawed sticker on a crystal in their hand or discard pile.<br/>
      <b>Flawed Crystals:</b> When you are instructed to place a flawed sticker on a crystal, instead destroy that crystal and replace it with a card from the flawed crystal deck.<br/>
      <b>Increased Difficulty:</b> When a spell deals damage to the nemesis, reduce that damage by 1 for every flawed crystal in your hand to a minimum of 1.<br/><br/>
      Original files can be found on <a href="https://boardgamegeek.com/filepage/191166/legacy-nemesis-tweaks-regular-play" target="_blank">BoardGameGeek</a>.
	  </p>
	  `,
  },
]
