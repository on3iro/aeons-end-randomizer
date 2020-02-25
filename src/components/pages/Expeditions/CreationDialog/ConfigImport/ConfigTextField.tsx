import styled from 'styled-components'

const ConfigTextField = styled('textarea')`
  resize: none;
  min-width: 100%;
  min-height: 100px;

  margin-top: 10px;
  padding: 10px;

  @media screen and (min-width: 600px) {
    & {
      min-height: 210px;
    }
  }

  @media screen and (min-width: 900px) {
    & {
      min-height: 300px;
    }
  }
`

export default ConfigTextField
