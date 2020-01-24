import styled, { css } from 'styled-components/macro'

import Card from 'components/atoms/_styled_/Card'

const selectedMixin = css`
  border: 2px solid ${props => props.theme.colors.secondary.main} !important;
`

type Props = {
  themeColor: string
  selected?: boolean
  onClick?: any // FIXME refine type
}

const Wrapper = styled(Card)<Props>`
  position: relative;

  background: ${props => props.themeColor};

  ${props => (props.selected ? selectedMixin : '')}
`

Wrapper.displayName = 'Wrapper'

export default Wrapper
