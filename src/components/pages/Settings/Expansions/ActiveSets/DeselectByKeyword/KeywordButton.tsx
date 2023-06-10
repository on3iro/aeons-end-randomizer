import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { RootState, selectors, actions } from 'Redux/Store'
import Button from '@material-ui/core/Button'

type OwnProps = {
  keyword: string,
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {selectedByKeyword: selectors.Settings.Expansions.Cards.getSelectedCardIdsByKeyword(state, ownProps)}
}

const mapDispatchToProps = {
  handleDeselect: actions.Settings.Expansions.Cards.selected.deselectCards
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const KeywordButton = ({keyword, selectedByKeyword, handleDeselect}: Props) => {
  const deselect = useCallback(
    () => {
      handleDeselect(selectedByKeyword)},
    [selectedByKeyword, handleDeselect]
  )
  const disabled = selectedByKeyword.length === 0
  return <Button variant="outlined" disabled={disabled} onClick={deselect}>{keyword}</Button>
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(KeywordButton))
