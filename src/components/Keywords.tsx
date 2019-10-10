import React from 'react'
import styled from 'styled-components'

type Props = {
  inCheckboxList?: boolean
}

const Keywords = styled(({ inCheckboxList, ...rest }) => <div {...rest} />)<
  Props
>`
  margin: ${props => (props.inCheckboxList ? '0 -4px 16px 28px' : '16px -4px')};
`

export default Keywords
