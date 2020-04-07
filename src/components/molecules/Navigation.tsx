import React from 'react'

import BuildIcon from '@material-ui/icons/Build'
import InfoIcon from '@material-ui/icons/Info'
import List from '@material-ui/core/List'

import Link from './Link'

type Props = {
  clickHandler: () => void
}

const Navigation = ({ clickHandler }: Props) => (
  <List>
    <Link text="Randomizer" to="/randomizer/nemesis" onClick={clickHandler}>
      <i className="ra ra-lg ra-perspective-dice-random" />
    </Link>
    <Link text="Turn Order" to="/turnorder" onClick={clickHandler}>
      <i className="ra ra-lg ra-player-lift" />
    </Link>
    <Link text="Expeditions" to="/expeditions" onClick={clickHandler}>
      <i className="ra ra-lg ra-raven" />
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
)

export default React.memo(Navigation)
