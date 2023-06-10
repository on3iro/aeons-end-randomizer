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
  margin: 24px 8px 0;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }
`

export default Wrapper
