import styled from 'styled-components'

const Button = styled('button')`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  font-size: 0.875rem;
  color: #fff;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02857em;

  height: 48px;
  min-width: 64px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;

  background: ${props => (props.color === 'secondary' ? '#f50057' : '#2196f3')};
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  outline: none;

  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;

  user-select: none;

  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  /*
  ToDo: API for size, color, variant
  
  Large:
    padding: 8px 24px;
    font-size: 0.9375rem;

  Default:
    padding: 6px 16px;
    font-size: 0.875rem;

  Small:
    padding: 4px 8px;
    font-size: 0.8125rem;

  Contained:
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    background-color: #e0e0e0;

  Contained Secondary:
    color: #fff;
    background-color: #f50057; Hover: 700 > #c2185b

  Contained Primary:
    color: #fff;
    background-color: #2196f3; Hover: 700 > #1976d2

  Outlined:
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 5px 16px;

    Hover:
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.08);

  Outlined Secondary:
    color: #f50057;
    border: 1px solid rgba(245, 0, 87, 0.5);

    Hover:
      border: 1px solid #f50057;
      background-color: rgba(245, 0, 87, 0.08);

  Outlined Primary:
    color: #2196f3;
    border: 1px solid rgba(33, 150, 243, 0.5);

    Hover:
      border: 1px solid #2196f3;
      background-color: rgba(33, 150, 243, 0.08);

  Flat Secondary:
    color: #f50057;

    Hover:
      background-color: rgba(245, 0, 87, 0.08);

  Flat Primary:
    color: #2196f3;

    Hover:
      background-color: rgba(33, 150, 243, 0.08);

  */

  &:hover,
  &:active {
    background: ${props =>
      props.color === 'secondary' ? '#c2185b' : '#1976d2'};
  }
`

export default Button
