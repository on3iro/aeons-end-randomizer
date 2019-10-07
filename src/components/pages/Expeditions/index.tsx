import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import A from '../../A'
import ShuffleButton from '../../ShuffleButton'

const mapStateToProps = (state: RootState) => ({
  expeditions: selectors.Expeditions.getExpeditions(state),
})

const mapDispatchToProps = {
  createExpedition: actions.Expeditions.createExpedition,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Expeditions = React.memo(({ expeditions, createExpedition }: Props) => {
  const handleNewExpeditionSetup = () => {
    createExpedition(`${expeditions.length}`, 'Test')
  }

  const renderExpeditions = (
    expeditions: Array<{ id: string; name: string }>
  ) => {
    return expeditions.map(expedition => {
      const url = `/expeditions/${expedition.id}`
      return (
        <li key={expedition.id}>
          <A to={url}>
            {expedition.name} {expedition.id}
          </A>
        </li>
      )
    })
  }

  return (
    <React.Fragment>
      <p>Expeditions</p>
      {expeditions.length > 0 ? (
        <ul>{renderExpeditions(expeditions)}</ul>
      ) : (
        <p>No expeditions</p>
      )}
      <ShuffleButton
        onClick={handleNewExpeditionSetup}
        color="primary"
        variant="extended"
      >
        Start new expedition
      </ShuffleButton>
    </React.Fragment>
  )
})

Expeditions.displayName = 'Expeditions'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expeditions)
