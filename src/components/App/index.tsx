import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { BrowserRouter as Router } from 'react-router-dom'

import 'rpg-awesome/css/rpg-awesome.min.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { mainTheme, muiTheme } from '../../mainTheme'

import MainApp from './MainApp'
import Wrapper from './Wrapper'

import * as serviceWorker from '../../serviceWorker'
import { Snackbar } from '@material-ui/core'

const App = () => {
  const [waitingWorker, setWaitingWorker] = useState<Worker | undefined>(
    undefined
  )
  const [newVersionAvailable, setNewVersionAvailable] = useState(true)
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

  return (
    <ThemeProvider theme={mainTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <Router>
          <Wrapper>
            <CssBaseline />
            <MainApp />
            <Snackbar
              open={showSnackBar}
              autoHideDuration={undefined}
              onClose={updateServiceWorker}
            >
              <button
                onClick={() => {
                  setShowSnackBar(false)
                  updateServiceWorker()
                }}
              >
                close
              </button>
              <p>New update available</p>
            </Snackbar>
          </Wrapper>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

export default React.memo(App)
