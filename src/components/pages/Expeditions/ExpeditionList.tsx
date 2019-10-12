import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'
import { usePrompt } from '../../../hooks/useModal'

import A from '../../A'
import DeleteButton from '../../DeleteButton'

const renderExpeditions = (
  expeditions: Array<{ id: string; name: string }>,
  deleteHandler: (id: string) => void
) => {
  return expeditions.map(expedition => {
    const { show, hide, RenderPrompt } = usePrompt()
    const url = `/expeditions/${expedition.id}`
    const openDeletionDialog = () => {
      show()
    }
    const yesHandler = () => {
      deleteHandler(expedition.id)
    }

    const deletionDialogTitle = `Would you really like to delete Expedition: "${expedition.name}"?`

    return (
      <React.Fragment>
        <li key={expedition.id}>
          <A to={url}>
            {expedition.name} {expedition.id}
          </A>
          <DeleteButton onClick={openDeletionDialog} />
        </li>
        <RenderPrompt
          titleColor="#333"
          titleLabel={deletionDialogTitle}
          yesHandler={yesHandler}
          noHandler={hide}
        />
      </React.Fragment>
    )
  })
}

const mapStateToProps = (state: RootState) => ({
  expeditions: selectors.Expeditions.Expeditions.getExpeditionList(state),
})

const mapDispatchToProps = {
  deleteHandler: actions.Expeditions.Expeditions.deleteExpedition,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ExpeditionList = React.memo(({ expeditions, deleteHandler }: Props) => {
  return (
    <React.Fragment>
      <p>Expeditions</p>
      {expeditions.length > 0 ? (
        <ul>{renderExpeditions(expeditions, deleteHandler)}</ul>
      ) : (
        <p>No expeditions</p>
      )}
    </React.Fragment>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpeditionList)
