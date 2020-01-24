import React from 'react'
import styled from 'styled-components'

import List from 'components/atoms/_styled_/List'

type Props = {
  status: string
}

const BodyWrapper = styled(({ status, ...rest }) => <div {...rest} />)<Props>`
  opacity: ${props => (props.status !== 'finished' ? '1' : '0.4')};

  h2,
  span {
    color: ${props =>
      props.status !== 'finished'
        ? props.theme.colors.white
        : props.theme.colors.text.primary};
  }

  p {
    color: ${props =>
      props.status !== 'finished'
        ? 'rgba(255, 255, 255, 0.8)'
        : props.theme.colors.text.hint};
  }

  ${List} {
    padding-top: 8px;
  }
`

export default BodyWrapper
