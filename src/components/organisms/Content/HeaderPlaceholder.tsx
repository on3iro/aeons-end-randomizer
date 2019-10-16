import styled from 'styled-components/macro'

const HeaderPlaceholder = styled('div')`
  display: flex;
  align-items: center;
  padding: 0 8px;
  justify-content: flex-end;

  min-height: 56px;

  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }

  @media (min-width: 600px) {
    min-height: 64px;
  }
`

export default HeaderPlaceholder
