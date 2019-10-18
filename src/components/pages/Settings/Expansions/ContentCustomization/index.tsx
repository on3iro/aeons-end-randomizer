import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'

import BackLink from '../../../../molecules/BackLink'

import Nemeses from './Nemeses'
import Mages from './Mages'
import Gems from './Gems'
import Relics from './Relics'
import Spells from './Spells'

type Props = { expansionId: string }

const ContentCustomization = React.memo(({ expansionId }: Props) => (
  <Card>
    <CardContent>
      <BackLink to="/settings" label="Back to settings" />
      <FormControl component={'fieldset' as 'div'}>
        <Nemeses expansionId={expansionId} />
        <Mages expansionId={expansionId} />
        <Gems expansionId={expansionId} />
        <Relics expansionId={expansionId} />
        <Spells expansionId={expansionId} />
      </FormControl>
    </CardContent>
  </Card>
))

export default ContentCustomization
