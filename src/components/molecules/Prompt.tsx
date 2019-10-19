import React from 'react'

import Button from '@material-ui/core/Button'

import ModalBodyWrapper from '../atoms/ModalBodyWrapper'
import ModalFooterWrapper from '../atoms/ModalFooterWrapper'

const Prompt = React.memo(
  ({
    yesHandler,
    noHandler,
    children,
  }: {
    yesHandler: () => void
    noHandler: () => void
    children?: React.ReactChild
  }) => {
    return (
      <React.Fragment>
        <ModalBodyWrapper hasFooter={true}>{children}</ModalBodyWrapper>
        <ModalFooterWrapper>
          <Button
            onClick={noHandler}
            size="small"
            variant="contained"
            color="secondary"
          >
            No
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={yesHandler}
          >
            Yes
          </Button>
        </ModalFooterWrapper>
      </React.Fragment>
    )
  }
)

export default Prompt
