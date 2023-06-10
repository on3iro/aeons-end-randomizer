import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'

const GameLanguageSelection = () => (
  <Typography paragraph>
    To select a language, go to the Expansion tab above and use the edit button
    to select the language for each Expansion.
  </Typography>
)

export default connect()(React.memo(GameLanguageSelection))
