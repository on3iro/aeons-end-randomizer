import React from 'react'

import { Nemesis } from '../../../../types'

import InfoItem from '../../../InfoItem'

import SectionHeadline from './SectionHeadline'
import AdditionalInfo from './AdditionalInfo'

type Props = {
  nemesis: Nemesis
  expansionName: string
}

const Body = ({ nemesis, expansionName }: Props) => (
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
        <SectionHeadline>Additional Information</SectionHeadline>
        <AdditionalInfo
          dangerouslySetInnerHTML={{
            __html: nemesis.additionalInfo,
          }}
        />
      </React.Fragment>
    ) : null}
  </React.Fragment>
)

export default Body
