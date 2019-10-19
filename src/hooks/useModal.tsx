import React, { useState } from 'react'

import Modal from '../components/molecules/Modal'
import Prompt from '../components/molecules/Prompt'

type ModalProps = {
  titleColor: string
  titleLabel: string
  children: React.ReactChild
  closeCallback?: () => void
}

export type RenderModalType = (props: ModalProps) => JSX.Element

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
  const RenderModal: RenderModalType = ({
    titleColor,
    titleLabel,
    children,
    closeCallback,
  }) => {
    const handleClose = () => {
      hide()
      if (closeCallback) {
        closeCallback()
      }
    }

    return (
      <React.Fragment>
        {isVisible && (
          <Modal
            titleColor={titleColor}
            titleLabel={titleLabel}
            closeModal={handleClose}
          >
            {children}
          </Modal>
        )}
      </React.Fragment>
    )
  }

  return {
    show,
    hide,
    RenderModal,
  }
}

type PromptProps = {
  closeCallback?: () => void
  children?: React.ReactChild
  noHandler: () => void
  titleColor: string
  titleLabel: string
  yesHandler: () => void
}

export type RenderPromptType = (props: PromptProps) => JSX.Element

export const usePrompt = () => {
  const { show, hide, RenderModal } = useModal()

  const RenderPrompt: RenderPromptType = ({
    children,
    noHandler,
    titleColor,
    titleLabel,
    yesHandler,
  }) => (
    <RenderModal
      titleColor={titleColor}
      titleLabel={titleLabel}
      closeCallback={noHandler}
    >
      <Prompt yesHandler={yesHandler} noHandler={noHandler}>
        {children}
      </Prompt>
    </RenderModal>
  )

  return {
    show,
    hide,
    RenderPrompt,
  }
}
