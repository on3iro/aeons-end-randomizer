import React from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components/macro'

import { Nemesis } from '../../../types'
import { RootState, selectors } from '../../../Redux/Store'

import InfoItem from '../InfoItem'
import SectionHeadline from '../../atoms/SectionHeadline'
import List from 'components/atoms/_styled_/List'

import AdditionalInfo from './AdditionalInfo'

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expansion = ownProps.nemesis
    ? selectors.Settings.Expansions.SelectedExpansions.getExpansionById(
        state,
        ownProps.nemesis.expansion
      )
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

const NemesisInformation = React.memo(
  ({ nemesis, expansion, theme }: Props) => {
    if (!expansion || !nemesis) {
      return null
    }

    return (
      <React.Fragment>
        <List>
          <InfoItem label="Expansion" info={expansion.name} />
          <InfoItem label="Health" info={nemesis.health.toString()} />
          <InfoItem label="Difficulty" info={nemesis.difficulty.toString()} />
          <InfoItem
            label="Expedition tier"
            info={nemesis.expeditionRating.toString()}
          />
        </List>

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
)

export default withTheme(
  connect(mapStateToProps, mapDispatchToProps)(NemesisInformation)
)
