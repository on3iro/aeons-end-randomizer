import styled from 'styled-components'

const Unlocked = styled('div')`
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

  p {
    font-size: 72px;
    color: ${(props) => props.theme.colors.white};
  }
`

export default Unlocked
