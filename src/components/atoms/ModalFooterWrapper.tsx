import styled from 'styled-components/macro'

const ModalFooterWrapper = styled('div')`
  margin: auto;
  height: 64px;
  width: 100%;
  padding: 0 24px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: -1px;

  button {
    width: 100%;
  }

  button + button {
    margin-left: 16px;
  }
`

export default ModalFooterWrapper
