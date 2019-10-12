import React from 'react'

import { withTheme } from 'styled-components/macro'

import { Nemesis } from '../../../../types'

import InfoItem from '../../../InfoItem'
import SectionHeadline from '../../../SectionHeadline'

import AdditionalInfo from './AdditionalInfo'

type Props = {
  nemesis: Nemesis
  expansionName: string
  theme: any
}

const Body = React.memo(({ nemesis, expansionName, theme }: Props) => (
  <React.Fragment>
    <InfoItem label="Expansion" info={expansionName} />
    <InfoItem label="Health" info={nemesis.health.toString()} />
    <InfoItem label="Difficulty" info={nemesis.difficulty.toString()} />
    <InfoItem
      label="Expedition tier"
      info={nemesis.expeditionRating.toString()}
    />
    {nemesis.additionalInfo ? (
      <React.Fragment>
        <SectionHeadline
          themeColor={theme.colors.turnOrderCards['nemesis'].normal}
        >
          Additional Information
        </SectionHeadline>
        <AdditionalInfo
          dangerouslySetInnerHTML={{
            __html: nemesis.additionalInfo,
          }}
        />
      </React.Fragment>
    ) : null}
  </React.Fragment>
))

export default withTheme(Body)
