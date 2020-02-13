import styled from 'styled-components'

type Props = {
  isExpanded: boolean
}

const Button = styled('div')<Props>`
  color: ${props =>
    props.theme.components.expansionPanel.summary.iconButton.color};
  padding: 12px;
  font-size: ${props =>
    props.theme.components.expansionPanel.summary.iconButton.fontSize};
  outline: none;
  top: 50%;
  right: 8px;
  position: absolute;
  transform: ${props =>
    props.isExpanded
      ? 'translateY(-50%) rotate(180deg)'
      : 'translateY(-50%) rotate(0deg)'};
  transition: transform 0.2s ease;
`

export default Button
