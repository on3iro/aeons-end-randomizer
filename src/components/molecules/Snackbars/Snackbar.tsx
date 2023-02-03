import React from 'react'
import { SnackbarType } from 'Redux/Store/Snackbars'
import CloseIcon from '@material-ui/icons/Close'

import CloseButton from './__styled__/CloseButton'
import Content from './__styled__/Content'
import Wrapper from './__styled__/Wrapper'

type Props = {
  type: SnackbarType
  children: React.ReactChild
  handleClose: () => void
}

const Snackbar = (props: Props) => {
  return (
    <Wrapper type={props.type}>
      <Content>{props.children}</Content>
      <CloseButton onClick={props.handleClose}>
        <CloseIcon />
      </CloseButton>
    </Wrapper>
  )
}

export default React.memo(Snackbar)
