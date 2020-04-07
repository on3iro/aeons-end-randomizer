import styled from 'styled-components'

const BranchWrapper = styled('button')`
  background: transparent;
  border: 0;
  display: block;
  width: 100%;
  padding: 0;
  text-align: left;
  margin: 16px 0;
  position: relative;
  cursor: pointer;
  outline: 0;

  &:disabled {
    cursor: default;
  }
`

export default BranchWrapper
