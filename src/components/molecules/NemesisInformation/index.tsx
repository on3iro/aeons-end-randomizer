import React from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components/macro'

import { Nemesis } from 'aer-types/types'
import { RootState, selectors } from 'Redux/Store'

import InfoItem from '../InfoItem'
import SectionHeadline from 'components/atoms/SectionHeadline'

import AdditionalInfo from './AdditionalInfo'

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expansion = ownProps.nemesis
    ? selectors.Settings.Expansions.Expansions.content.getExpansionById(state, {
        expansionId: ownProps.nemesis.expansion,
      })
    : null

  return {
    expansion,
  }
}

const mapDispatchToProps = {}

type OwnProps = {
  nemesis?: Nemesis
  theme: any
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const NemesisInformation = ({ nemesis, expansion, theme }: Props) => {
  if (!expansion || !nemesis) {
    return null
  }

  return (
    <React.Fragment>
      <InfoItem label="Expansion" info={expansion.name} />
      <InfoItem label="Wave" info={expansion.wave || '-'} />
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
  )
}

export default withTheme(
  connect(mapStateToProps, mapDispatchToProps)(React.memo(NemesisInformation))
)
