import styled from 'styled-components'

const FloatingButton = styled('button')`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  font-size: 0.875rem;
  color: #fff;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
  letter-spacing: 0.02857em;

  height: 48px;
  border-radius: 24px;
  border: 0;
  padding: 0 16px;

  background: #2196f3;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  outline: none;

  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;

  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10;

  user-select: none;

  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active {
    background: #1976d2;
  }
`

export default FloatingButton
