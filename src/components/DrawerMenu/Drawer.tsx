import styled from 'styled-components/macro'
import MuiDrawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'

const Drawer = styled(MuiDrawer)`
  width: 240px;
`

// FIXME remove withStyles call
export default withStyles({
  paper: {
    width: 240,
  },
})(Drawer)
