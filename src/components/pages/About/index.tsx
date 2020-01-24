import React from 'react'
import CardContent from '@material-ui/core/CardContent'

import Card from '../../atoms/Card'

import H1 from 'components/atoms/_styled_/H1'
import H2 from 'components/atoms/_styled_/H2'
import P from 'components/atoms/_styled_/P'
import Link from 'components/atoms/Link'

const About = React.memo(() => (
  <Card>
    <CardContent>
      <H1>Aeons End Randomizer</H1>
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
        <Link to="/settings"> Click here to go to the settings</Link>.
      </P>
      <H2>Supported Expansions</H2>
      <P>
        <b>Aeons End Randomizer</b> supports all expansions released to date as
        well as all promos. The following expansions are supported:
        <i>Aeons End</i>, <i>Aeons End: War Eternal</i>, <i>Aeons End Legacy</i>
        , <i>Aeons End: The New Age</i>, <i>The Depths</i>, <i>The Nameless</i>,{' '}
        <i>The Void</i>, <i>Outer Dark</i>, <i>Buried Secrets</i>,{' '}
        <i>Into The Wild</i>, <i>The Ancients</i>, <i>Shattered Dreams</i>.
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
    </CardContent>
  </Card>
))

export default About
