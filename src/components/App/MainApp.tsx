import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../Redux/Store'

import Content from '../organisms/Content'
import TopBar from '../organisms/TopBar'
import DrawerMenu from '../organisms/DrawerMenu'

import * as serviceWorker from '../../serviceWorker'
import { Snackbar } from '@material-ui/core'

const mapStateToProps = (state: RootState) => ({
  isLoading: selectors.Main.ContentLoading.getIsLoading(state),
})

const mapDispatchToProps = {
  getUserConfiguration: actions.Main.getUserConfiguration,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const MainApp = ({ getUserConfiguration, isLoading }: Props) => {
  const [waitingWorker, setWaitingWorker] = useState<Worker | undefined>(
    undefined
  )
  const [newVersionAvailable, setNewVersionAvailable] = useState(false)
  const [showSnackBar, setShowSnackBar] = useState(false)

  const onServiceWorkerUpdate = (registration: {
    waiting: Worker
    postMessage: Function
  }) => {
    if (registration && registration.waiting) {
      setWaitingWorker(registration.waiting)
    }

    setNewVersionAvailable(true)
  }

  const updateServiceWorker = useCallback(() => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' })
      setNewVersionAvailable(false)
      window.location.reload()
    }
  }, [waitingWorker, setNewVersionAvailable])

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate })
    }

    if (newVersionAvailable) {
      setShowSnackBar(true)
    }
  }, [])
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  useEffect(() => {
    getUserConfiguration()
  }, [getUserConfiguration])

  return (
    <React.Fragment>
      <TopBar drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} />
      <DrawerMenu drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} />
      <Content isLoading={isLoading} />
      <Snackbar
        open={showSnackBar}
        autoHideDuration={undefined}
        onClose={updateServiceWorker}
      >
        <>
          <button
            onClick={() => {
              setShowSnackBar(false)
              updateServiceWorker()
            }}
          >
            close
          </button>
          <p>New update available</p>
        </>
      </Snackbar>
      <div id="modal-root" />
    </React.Fragment>
  )
}

MainApp.displayName = 'MainApp'

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MainApp))
