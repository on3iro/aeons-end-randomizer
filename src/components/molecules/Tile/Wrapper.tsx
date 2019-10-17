import styled, { css } from 'styled-components/macro'
import MuiCard from '@material-ui/core/Card'

const selectedMixin = css`
  border: 2px solid ${props => props.theme.colors.secondary.main};
`

type Props = {
  themeColor: string
  selected?: boolean
  onClick?: any // FIXME refine type
}

const Wrapper = styled(MuiCard)<Props>`
  position: relative;

  background: ${props => props.themeColor};

  ${props => (props.selected ? selectedMixin : '')}
`

Wrapper.displayName = 'Wrapper'

export default Wrapper
