import React from 'react'
import CardContent from '@material-ui/core/CardContent'

import Card from '../../atoms/Card'

import P from 'components/atoms/_styled_/P'
import Link from 'components/atoms/Link'

import Section from './_styled_/Section'
import Title from './_styled_/Title'
import SectionHeadline from './_styled_/SectionHeadline'
import List from './_styled_/List'

const About = React.memo(() => (
  <Card>
    <CardContent>
      <Section>
        <Title>Aeons End Randomizer</Title>
        <P>
          <b>Aeons End Randomizer</b> is an unofficial companion app for the
          popular deck building game Aeons End. It helps you draw random mages,
          nemeses and supply cards (gems, relics, spells) and also provides a
          simulated turn order deck. You still need at least one Aeons End
          standalone box to actually play the game.
        </P>
        <P>
          To get started simply select which expansions you own and would like
          to use for randomization inside the settings. You can also disable
          specific cards/mages/nemeses inside the settings.
          <Link to="/settings"> Click here to go to the settings</Link>.
        </P>
      </Section>
      <Section>
        <SectionHeadline>Supported Expansions</SectionHeadline>
        <P>
          <b>Aeons End Randomizer</b> supports all expansions released to date
          as well as all promos. The following expansions are supported:
        </P>
        <List>
          <li>Aeons End</li>
          <li>Aeons End: War Eternal</li>
          <li>Aeons End Legacy</li>
          <li>Aeons End: The New Age</li>
          <li>The Depths</li>
          <li>The Nameless</li>
          <li>The Void</li>
          <li>Outer Dark</li>
          <li>Buried Secrets</li>
          <li>Into The Wild</li>
          <li>The Ancients</li>
          <li>Shattered Dreams</li>
        </List>
      </Section>
      <Section>
        <SectionHeadline>A note on collected user data</SectionHeadline>
        <P>We do not track any user specific data whatsoever.</P>
      </Section>
      <Section>
        <SectionHeadline>A note on official imagery</SectionHeadline>
        <P>
          Unfortunately we cannot provide any official imagery. We do not want
          to get into any legal trouble ;)
        </P>
      </Section>
      <Section>
        <SectionHeadline>Copyright Disclaimer</SectionHeadline>
        <P>
          Aeons End is copyrighted &#169; 2016-2019 by Indie Boards & Cards and
          ActionPhase Games, all rights reserved.
        </P>
      </Section>
    </CardContent>
  </Card>
))

export default About
