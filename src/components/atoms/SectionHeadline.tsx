import React from 'react'
import styled from 'styled-components'
import H2 from './H2'

type Props = {
  themeColor: string
}

const SectionHeadline = styled(({ themeColor, ...rest }) => <H2 {...rest} />)<
  Props
>`
  color: ${props => props.themeColor};
  font-weight: 300;
  margin: 16px 0 8px;

  + div {
    margin-top: 0;
  }
`

export default SectionHeadline
