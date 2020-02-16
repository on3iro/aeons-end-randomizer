import React from 'react'

import Link from './Link'
import Wrapper from './Wrapper'

const BottomNavigation = () => (
  <Wrapper>
    <Link to="/randomizer/nemesis" label="Nemesis" icon="ra-broken-skull" />
    <Link
      to="/randomizer/basic-nemesis-cards"
      label="Nemesis Cards"
      icon=" ra-monster-skull"
    />
    <Link to="/randomizer/mages" label="Mages" icon="ra-crystal-wand" />
    <Link to="/randomizer/supply" label="Supply" icon="ra-campfire" />
  </Wrapper>
)

export default React.memo(BottomNavigation)
