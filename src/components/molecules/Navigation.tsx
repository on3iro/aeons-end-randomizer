import React from 'react'

import BuildIcon from '@material-ui/icons/Build'
import InfoIcon from '@material-ui/icons/Info'
import List from '@material-ui/core/List'

import NavLink from './NavLink'

type Props = {
  clickHandler: () => void
}

const Navigation = ({ clickHandler }: Props) => (
  <List>
    <NavLink text="Randomizer" to="/randomizer/nemesis" onClick={clickHandler}>
      <i className="ra ra-lg ra-perspective-dice-random" />
    </NavLink>
    <NavLink text="Turn Order" to="/turnorder" onClick={clickHandler}>
      <i className="ra ra-lg ra-player-lift" />
    </NavLink>
    <NavLink text="Expeditions" to="/expeditions" onClick={clickHandler}>
      <i className="ra ra-lg ra-quill-ink" />
    </NavLink>
    <NavLink text="Settings" to="/settings" onClick={clickHandler}>
      <BuildIcon
        style={{
          width: '0.9em',
        }}
      />
    </NavLink>
    <NavLink text="About" to="/about" onClick={clickHandler}>
      <InfoIcon
        style={{
          width: '0.9em',
        }}
      />
    </NavLink>
  </List>
)

export default React.memo(Navigation)
