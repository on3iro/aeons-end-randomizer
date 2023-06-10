import styled from 'styled-components/macro'
import Grid from '@material-ui/core/Grid'

import TileWrapper from '../../Tile/Wrapper'

const Wrapper = styled(Grid)`
  ${TileWrapper} {
    min-height: 148px;
    min-width: 30px;
    height: 100%;
  }
`

export default Wrapper
