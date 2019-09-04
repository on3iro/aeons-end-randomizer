import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import HeaderPlaceholder from './HeaderPlaceholder'
import Wrapper from './Wrapper'

type Props = {
  isLoading: boolean
  drawerIsOpen: boolean
  contentComponent: React.ReactNode
}

const Content = React.memo(
  ({ isLoading, drawerIsOpen, contentComponent }: Props) => (
    <Wrapper isLoading={isLoading} drawerIsOpen={drawerIsOpen}>
      <HeaderPlaceholder />
      {isLoading ? <CircularProgress /> : contentComponent}
    </Wrapper>
  )
)

Content.displayName = 'Content'

export default Content
