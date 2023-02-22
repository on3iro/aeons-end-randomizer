import { SnackbarType } from 'Redux/Store/Snackbars'
import styled from 'styled-components/macro'
import { fadeIn } from 'mainTheme'

type Props = {
  type: SnackbarType
}

const Wrapper = styled('div')<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: -100%;
  left: calc(50% - 24px);
  z-index: 2000;
  min-height: 48px;
  max-width: 360px;
  width: calc(100% - 48px);
  padding: 24px 16px 16px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgb(0 0 0 / 14%);
  transform: translateX(-50%);
  margin: 0 24px;
  color: ${(props) => props.theme.snackbar[props.type].color};
  background: ${(props) => props.theme.snackbar[props.type].bg};
  animation: ${fadeIn({ bottomEnd: '24px' })} 0.4s ease-in both;
`

export default Wrapper
