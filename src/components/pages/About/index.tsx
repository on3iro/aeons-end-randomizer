import React from 'react'
import CardContent from '@material-ui/core/CardContent'

import Card from '../../atoms/Card'
import H1 from '../../atoms/H1'
import H2 from '../../atoms/H2'
import P from '../../atoms/P'
import A from '../../atoms/A'
import Li from '../../atoms/Li'

const About = () => (
  <Card>
    <CardContent>
      <H1>Aeons End Randomizer</H1>

      <a href="https://on3iro.github.io/aeons-end-randomizer">
        <img
          alt="docs"
          src="https://img.shields.io/badge/Docs-on3iro.github.io%2Faeons--end--randomizer-success"
        />
      </a>

      <P>
        <b>Aeons End Randomizer</b> is an unofficial companion app for the
        popular deck building game Aeons End. It helps you draw random mages,
        nemeses and supply cards (gems, relics, spells) and also provides a
        simulated turn order deck. You still need at least one Aeons End
        standalone box to actually play the game.
      </P>
      <P>
        To get started simply select which expansions you own and would like to
        use for randomization inside the settings. You can also disable specific
        cards/mages/nemeses inside the settings.
        <A to="/settings"> Click here to go to the settings</A>.
      </P>
      <H2>Supported Expansions</H2>
      <P>
        <b>Aeons End Randomizer</b> supports all expansions released to date as
        well as all promos. The following expansions are supported:
      </P>
      <ul>
        <Li>Aeons End</Li>
        <Li>The Depths</Li>
        <Li>The Nameless</Li>
        <Li>Aeons End: War Eternal</Li>
        <Li>The Void</Li>
        <Li>The Outer Dark</Li>
        <Li>Aeons End: Legacy</Li>
        <Li>Buried Secrets</Li>
        <Li>Aeons End: The New Age</Li>
        <Li>Into The Wild</Li>
        <Li>The Ancients</Li>
        <Li>Shattered Dreams</Li>
        <Li>Aeons End: Outcasts</Li>
        <Li>Return To Gravehold</Li>
        <Li>Southern Village</Li>
      </ul>

      <H2>Supported Languages</H2>
      <P>
        We currently do only support english as language for the user interface.
        However some content has already been translated into different
        languages. We will continue supporting multiple languages as they become
        available in their respective countries and might even start adding
        UI-translations in the future as well. The following languages are
        currently (partly) supported:
      </P>
      <ul>
        <Li>English (full support)</Li>
        <Li>Polish</Li>
        <Li>French</Li>
        <Li>German</Li>
      </ul>
      <P>
        <i>
          If you are interested in contributing language files, please file an
          issue inside our Github-repository or contact us on discord.
        </i>
      </P>

      <H2>User documentation:</H2>
      <P>
        You can find our documentation on how to use the randomizer and how to
        create custom expeditions here:{' '}
        <a href="https://on3iro.github.io/aeons-end-randomizer/">
          https://on3iro.github.io/aeons-end-randomizer/
        </a>
      </P>

      <H2>Premade expeditions</H2>
      <P>
        We've created{' '}
        <a href="https://github.com/on3iro/aeons-end-randomizer/blob/main/expeditions/newAge.json">
          "The New Age"
        </a>{' '}
        as well as{' '}
        <a href="https://github.com/on3iro/aeons-end-randomizer/blob/main/expeditions/intoTheWild.json">
          "Into The Wild"
        </a>{' '}
        as replayable expeditions. To play them, you also need the respective
        expansions physically. You can then copy and import these expeditions,
        whenever you create a new expedition from the expedition screen.
      </P>

      <H2>A note on collected user data</H2>
      <P>We do not track any user specific data whatsoever.</P>
      <H2>A note on official imagery</H2>
      <P>
        Unfortunately we cannot provide any official imagery. We do not want to
        get into any legal trouble ;)
      </P>
      <H2>Copyright Disclaimer</H2>
      <P>
        Aeons End is copyrighted &#169; 2016-2019 by Indie Boards & Cards and
        ActionPhase Games, all rights reserved.
      </P>
      <P>
        All the used RPG-Icons are from Rpg-Awesome, Copyright (c) 2014, Daniela
        Howe All rights reserved.
      </P>
    </CardContent>
  </Card>
)

export default React.memo(About)
