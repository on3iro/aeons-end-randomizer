import React from 'react'
import styled from 'styled-components'

type Props = {
  inCheckboxList?: boolean
}

// TODO refactor
// we should probably have a keywords molecule instead which would also take care
// of the rendering of keywords. This component here would then just be its wrapper
// div.
const Keywords = styled(({ inCheckboxList, ...rest }) => <div {...rest} />)<
  Props
>`
  margin: ${props => (props.inCheckboxList ? '0 -4px 16px 28px' : '16px -4px')};
`

export default Keywords
