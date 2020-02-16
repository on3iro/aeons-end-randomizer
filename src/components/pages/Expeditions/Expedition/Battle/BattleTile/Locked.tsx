import styled from 'styled-components'

const Locked = styled('div')`
  background: #dadada;
  position: relative;
  top: -16px;
  left: -16px;
  width: calc(100% + 32px);
  display: flex;
  min-height: 150px;
  margin-bottom: -48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 72px;
  }
`

export default Locked
