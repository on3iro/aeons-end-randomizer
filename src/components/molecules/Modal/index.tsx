import React from 'react'
import ReactDOM from 'react-dom'

import Wrapper from './Wrapper'
import Backdrop from './Backdrop'
import Content from './Content'
import Header from './Header'
import Body from './Body'
import Title from './Title'
import CloseButton from './CloseButton'

import CloseIcon from '@material-ui/icons/Close'

type Props = {
  titleLabel: string
  titleColor: string
  body: React.ReactChild
  closeModal: () => void
}

const Modal = React.memo(
  ({ titleColor, titleLabel, body, closeModal }: Props) => {
    const domEl = document.getElementById('modal-root')

    if (!domEl) return null

    return ReactDOM.createPortal(
      <React.Fragment>
        <Wrapper>
          <Backdrop onClick={closeModal} />
          <Content>
            <Header>
              <Title variant="h1" themeColor={titleColor}>
                {titleLabel}
              </Title>
              <CloseButton onClick={closeModal}>
                <CloseIcon />
              </CloseButton>
            </Header>
            <Body>{body}</Body>
          </Content>
        </Wrapper>
      </React.Fragment>,
      domEl
    )
  }
)

export default Modal
