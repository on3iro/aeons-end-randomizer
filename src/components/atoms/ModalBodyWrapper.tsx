import styled from 'styled-components/macro'

type Props = {
  hasFooter?: boolean
}

const ModalBodyWrapper = styled('div')<Props>`
  margin: auto;
  height: ${props => (props.hasFooter ? 'calc(100% - 64px)' : '100%')};
  width: 100%;
  padding: 24px;
  position: relative;
  overflow-y: auto;

  > *:first-child {
    margin-top: 0;
  }
`

export default ModalBodyWrapper
