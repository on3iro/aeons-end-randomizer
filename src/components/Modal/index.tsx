import React from 'react'

import Wrapper from './Wrapper'
import Backdrop from './Backdrop'
import Content from './Content'
import Header from './Header'
import Body from './Body'
import CloseButton from './CloseButton'

import CloseIcon from '@material-ui/icons/Close'

// FixMe Typings
type Props = {
  visible: boolean | string
  title: any
  body: any
  closeModal: any
  children?: any
}

const Modal = React.memo(({ visible, title, body, closeModal }: Props) => (
  <Wrapper className={visible ? 'is-open' : ''}>
    <Backdrop onClick={closeModal} />
    <Content>
      <Header>
        {title}
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
      </Header>
      <Body>{body}</Body>
    </Content>
  </Wrapper>
))

export default Modal
