import React from 'react'
import styled, { css } from 'styled-components/macro'
import MuiCard from '@material-ui/core/Card'

const selectedMixin = css`
  border: 2px solid ${props => props.theme.colors.secondary.main} !important;
`

type Props = {
  themeColor: string
  selected?: boolean
  onClick?: any // FIXME refine type
}

const Wrapper = styled(({ themeColor, ...rest }) => <MuiCard {...rest} />)<
  Props
>`
  position: relative;

  background: ${props => props.themeColor};

  ${props => (props.selected ? selectedMixin : '')}
`

export default Wrapper
