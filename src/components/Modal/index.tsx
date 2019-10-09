import React from 'react'

import Wrapper from './Wrapper'
import Backdrop from './Backdrop'
import Content from './Content'
import Header from './Header'
import Body from './Body'
import Title from './Title'
import CloseButton from './CloseButton'

import CloseIcon from '@material-ui/icons/Close'

type Props = {
  visible: boolean
  titleLabel: string
  titleColor: string
  body: React.ReactElement | string
  closeModal: () => void
}

const Modal = React.memo(
  ({ visible, titleColor, titleLabel, body, closeModal }: Props) => (
    <React.Fragment>
      {visible && (
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
      )}
    </React.Fragment>
  )
)

export default Modal
