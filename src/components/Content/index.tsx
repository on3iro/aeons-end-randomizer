import React from 'react'
import { useRoutes } from 'hookrouter'

import CircularProgress from '@material-ui/core/CircularProgress'

import Nemeses from '../pages/Nemeses'
import Mages from '../pages/Mages'
import Supply from '../pages/Supply'
import Settings from '../pages/Settings'
import TurnOrder from '../pages/TurnOrder'

import HeaderPlaceholder from './HeaderPlaceholder'
import Wrapper from './Wrapper'

const routes = {
  '/': () => <div>TODO</div>,
  '/nemesis': () => <Nemeses />,
  '/mages': () => <Mages />,
  '/supply': () => <Supply />,
  '/turnorder': () => <TurnOrder />,
  '/settings': () => <Settings />,
}

type Props = {
  isLoading: boolean
  drawerIsOpen: boolean
}

const Content = React.memo(({ isLoading, drawerIsOpen }: Props) => {
  const match = useRoutes(routes)

  return (
    <Wrapper isLoading={isLoading} drawerIsOpen={drawerIsOpen}>
      <HeaderPlaceholder />
      {isLoading ? <CircularProgress /> : match}
    </Wrapper>
  )
})

Content.displayName = 'Content'

export default Content
