import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

const Li = styled('li')`
  ${setTypography('body1')}

  list-style: none;

  &::before {
    content: '•';
    font-size: 1.75rem;
    color: ${(props) => props.theme.colors.primary.main};
    vertical-align: sub;
    line-height: 0;
    padding-right: 8px;
  }
`

export default Li
