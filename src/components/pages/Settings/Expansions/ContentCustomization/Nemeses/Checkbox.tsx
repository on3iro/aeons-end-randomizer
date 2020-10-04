import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'

import { useModal } from 'hooks/useModal'

import CheckboxWithDetails from 'components/molecules/CheckboxWithDetails'
import NemesisModal from 'components/molecules/NemesisModal'

import { ChangeHandler } from './index'
import { RootState, selectors } from 'Redux/Store'

type OwnProps = {
  nemesis: types.Nemesis
  changeHandler: ChangeHandler
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    selected: selectors.Settings.Expansions.Nemeses.selected.getIsSelected(
      state,
      { id: ownProps.nemesis.id }
    ),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Checkbox = ({ nemesis, changeHandler, selected }: Props) => {
  const { show, RenderModal } = useModal()

  const handleChange = useCallback(
    (id: string) => {
      changeHandler(id)
    },
    [changeHandler]
  )

  const handleDetails = useCallback(() => {
    show()
  }, [show])

  return (
    <React.Fragment>
      <CheckboxWithDetails
        id={nemesis.id}
        checked={selected}
        label={nemesis.name}
        changeHandler={handleChange}
        showDetails={handleDetails}
      />
      <NemesisModal id={nemesis.id} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Checkbox))
