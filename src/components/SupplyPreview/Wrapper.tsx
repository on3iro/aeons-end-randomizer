import styled from 'styled-components/macro'

type Props = {
  selected: boolean
}

const Wrapper = styled('div')<Props>`
  border: 1px solid
    ${props =>
      props.selected
        ? props.theme.colors.secondary.main
        : 'rgba(0, 0, 0, 0.12)'};
  padding: 4px 8px;
  display: inline-block;
  width: calc(100% - 16px);
  margin: 0 8px 24px;
  cursor: pointer;

  &:nth-last-child(2) {
    margin-bottom: 0;
  }

  &:last-child {
    margin-top: 24px;
    margin-bottom: 0;
  }
`

Wrapper.displayName = 'Wrapper'

export default Wrapper
