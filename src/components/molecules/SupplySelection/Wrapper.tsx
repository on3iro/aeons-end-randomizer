import styled from 'styled-components/macro'

import TileWrapper from '../Tile/Wrapper'

const Wrapper = styled('div')`
  > p {
    margin-top: 0;
  }

  ${TileWrapper} {
    border: 2px solid transparent;

    &:hover {
      border-color: ${props => props.theme.colors.primary.main};
    }
  }
`

export default Wrapper
