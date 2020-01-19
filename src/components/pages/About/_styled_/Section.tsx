import styled from 'styled-components/macro'

const Section = styled('section')`
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

Section.displayName = 'About Section'

export default Section
