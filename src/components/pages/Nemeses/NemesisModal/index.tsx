import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import Modal from '../../../Modal'
import Body from './Body'

// FIXME refine type
const mapStateToProps = (state: RootState, props: any) => ({
  nemesis: selectors.Settings.Expansions.SelectedNemeses.getNemesisById(
    state,
    props
  ),
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
})

type Props = ReturnType<typeof mapStateToProps> & {
  id: string
  visible: boolean
  closeModal: () => void
  theme: any
}

const NemesisModal = React.memo(
  ({ visible, closeModal, nemesis, selectedExpansions, theme }: Props) => {
    const { expansions } = selectedExpansions

    return (
      <Modal
        visible={visible}
        titleColor={theme.colors.turnOrderCards.nemesis.normal}
        titleLabel={nemesis.name}
        body={
          nemesis ? (
            <Body
              nemesis={nemesis}
              expansionName={expansions[nemesis.expansion].name || ''}
            />
          ) : (
            'No content'
          )
        }
        closeModal={closeModal}
      />
    )
  }
)

export default withTheme(
  connect(
    mapStateToProps,
    null
  )(NemesisModal)
)
