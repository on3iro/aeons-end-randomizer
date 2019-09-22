import React from 'react'

import BuildIcon from '@material-ui/icons/Build'
import InfoIcon from '@material-ui/icons/Info'
import List from '@material-ui/core/List'

import Link from './Link'

type Props = {
  clickHandler: () => void
}

const Navigation = React.memo(({ clickHandler }: Props) => (
  <List>
    <Link text="Nemesis" to="/nemesis" onClick={clickHandler}>
      <i className="ra ra-lg ra-broken-skull" />
    </Link>
    <Link text="Mages" to="/mages" onClick={clickHandler}>
      <i className="ra ra-lg ra-crystal-wand" />
    </Link>
    <Link text="Supply" to="/supply" onClick={clickHandler}>
      <i className="ra ra-lg ra-campfire" />
    </Link>
    <Link text="Turn Order" to="/turnorder" onClick={clickHandler}>
      <i className="ra ra-lg ra-player-lift" />
    </Link>
    <Link text="Settings" to="/settings" onClick={clickHandler}>
      <BuildIcon
        style={{
          width: '0.9em',
        }}
      />
    </Link>
    <Link text="About" to="/about" onClick={clickHandler}>
      <InfoIcon
        style={{
          width: '0.9em',
        }}
      />
    </Link>
  </List>
))

Navigation.displayName = 'Navigation'

export default Navigation
