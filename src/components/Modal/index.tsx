import React, { useState } from 'react'
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
  body: React.ReactElement | string
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

// Renders a modal to the modal root and handles the visibility state
// of this modal.
//
// NOTE: Each modal you want to render should use a separate hook!!!
// Otherwise your modals will share their visibility state which might lead
// to overlapping and unclosable elements.
export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)
  const renderModal = (
    titleColor: string,
    titleLabel: string,
    body: React.ReactElement | string
  ) => (
    <React.Fragment>
      {isVisible && (
        <Modal
          titleColor={titleColor}
          titleLabel={titleLabel}
          body={body}
          closeModal={hide}
        />
      )}
    </React.Fragment>
  )

  return {
    show,
    hide,
    renderModal,
  }
}

export default Modal
