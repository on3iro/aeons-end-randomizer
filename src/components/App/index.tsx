import React, { useState, useEffect } from 'react';

import 'rpg-awesome/css/rpg-awesome.min.css'

import axios from 'axios'

import CssBaseline from '@material-ui/core/CssBaseline'
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'

import { styles } from './appStyles'

import UpdateScreen from './UpdateScreen'
import MainApp from './MainApp'


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
});

type UpdateInformation = {
  updateAvailable: boolean,
  newVersion: string
}

const App = React.memo(({ classes }: { classes: any }) => {
  const [ updateInformation, setUpdateAvailable ] = useState<UpdateInformation>({
    updateAvailable: false,
    newVersion: ''
  })

  useEffect(() => {
    axios.get('https://api.github.com/repos/on3iro/aeons-end-randomizer/releases')
      .then(response => {
        const newestRelease = response.data[0]
        const localAppVersion = process.env.REACT_APP_VERSION
        const newVersion = newestRelease['tag_name']
        if (newVersion !== `v${localAppVersion}`) {
          setUpdateAvailable({
            updateAvailable: true,
            newVersion
          })
        }
      })
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        {
          updateInformation.updateAvailable
            ? <UpdateScreen newVersion={updateInformation.newVersion} />
            : <MainApp classes={classes} />
        }
      </div>
    </MuiThemeProvider>
  );
})

export default withStyles(styles, { withTheme: true })(App)
