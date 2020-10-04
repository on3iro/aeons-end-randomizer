import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import * as types from 'aer-types/types'

import { useModal } from 'hooks/useModal'

import CheckboxWithDetails from 'components/molecules/CheckboxWithDetails'
import SupplyModal from 'components/molecules/SupplyModal'

import { ChangeHandler } from './index'
import { RootState, selectors } from 'Redux/Store'

type OwnProps = {
  card: types.ICard
  changeHandler: ChangeHandler
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    selected: selectors.Settings.Expansions.Cards.selected.getIsSelected(
      state,
      { cardId: ownProps.card.id }
    ),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Checkbox = ({ card, changeHandler, selected }: Props) => {
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
        id={card.id}
        checked={selected}
        label={card.name}
        changeHandler={handleChange}
        showDetails={handleDetails}
      />
      <SupplyModal card={card} RenderModal={RenderModal} />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Checkbox))
