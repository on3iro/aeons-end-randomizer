import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import Nemeses from '../pages/Nemeses'
import Mages from '../pages/Mages'
import Supply from '../pages/Supply'
import Settings from '../pages/Settings'
import TurnOrder from '../pages/TurnOrder'

import { ROUTES } from '../../routes'
import HeaderPlaceholder from './HeaderPlaceholder'
import Wrapper from './Wrapper'

type Props = {
  route: string
  isLoading: boolean
  drawerIsOpen: boolean
}

const Content = React.memo(({ route, isLoading, drawerIsOpen }: Props) => (
  <Wrapper isLoading={isLoading} drawerIsOpen={drawerIsOpen}>
    <HeaderPlaceholder />
    {isLoading ? (
      <CircularProgress />
    ) : (
      {
        [ROUTES.nemeses]: <Nemeses />,
        [ROUTES.mages]: <Mages />,
        [ROUTES.supply]: <Supply />,
        [ROUTES.turnOrder]: <TurnOrder />,
        [ROUTES.settings]: <Settings />,
      }[route]
    )}
  </Wrapper>
))

Content.displayName = 'Content'

export default Content
