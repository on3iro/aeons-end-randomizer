import React from 'react'
import styled from 'styled-components'

type Props = {
  playerNumber: number
}

const Description = styled(({ playerNumber, ...rest }) => <div {...rest} />)<
  Props
>`
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;

  h2 {
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .or {
    display: block;
    margin: 4px 0;
  }

  .aether {
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.87);
    border-radius: 100%;
    display: inline-block;
    color: #fff;
    text-align: center;
    font-size: 12px;
    vertical-align: top;
    line-height: 20px;
  }

  .hint {
    color: rgba(0, 0, 0, 0.54);
    display: block;
  }

  > p:last-child {
    margin-bottom: 0;
  }
`

export default Description
