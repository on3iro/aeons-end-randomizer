import styled from 'styled-components'

type Props = {
  color?: string
}

const Wrapper = styled('button')<Props>`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  color: ${props => (props.color === 'secondary' ? '#f50057' : '#2196f3')};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
  letter-spacing: 0.02857em;

  height: 48px;
  width: 48px;
  border-radius: 24px;
  border: 0;
  padding: 0 16px;

  background: transparent;

  cursor: pointer;
  outline: none;

  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;

  user-select: none;

  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active {
    background: ${props =>
      props.color === 'secondary'
        ? 'rgba(245, 0, 87, 0.08)'
        : 'rgba(33, 150, 243, 0.08)'};
  }
`

export default Wrapper
