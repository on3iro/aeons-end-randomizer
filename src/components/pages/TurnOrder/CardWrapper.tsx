import styled from 'styled-components/macro'

import Card from '../../atoms/_styled_/Card'

const CardWrapper = styled('div')`
  ${Card} {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default CardWrapper
