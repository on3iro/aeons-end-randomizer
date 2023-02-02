import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

import Snackbar from './Snackbar'

const mapStateToProps = (state: RootState) => {
  return {
    firstSnackbarElement: selectors.Snackbars.selectFirstSnackbarElement(state),
  }
}

const mapDispatchToProps = {
  dequeue: actions.Snackbars.dequeue,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Snackbars = ({ firstSnackbarElement, dequeue }: Props) => {
  const currentSnackbar = firstSnackbarElement

  const handleClose = () => {
    dequeue()
  }

  useEffect(() => {
    if (currentSnackbar) {
      const timer = setTimeout(() => {
        dequeue()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [currentSnackbar, dequeue])

  if (!currentSnackbar) {
    return null
  }

  return (
    <Snackbar type={currentSnackbar.type} handleClose={handleClose}>
      {currentSnackbar.message}
    </Snackbar>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Snackbars))
