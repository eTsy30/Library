import React from 'react'
import styled from 'styled-components'

const getwidthSize = (width: string) => {
  switch (width) {
    case 'small':
      return '174px'
    case 'medium':
      return '306px'
    case 'large':
      return '350px'
    default:
      return '100%'
  }
}

interface IButton {
  height?: 'normal' | 'big' | undefined
  text?: string
  fontSize: string
  width: 'small' | 'medium' | 'large' | 'fullWidth'
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined
}
const ButtonKit = styled.button<IButton>`
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  border-radius: 30px;
  &:active {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
    border-radius: 30px;
  }
  border: 0;
  &:disabled {
    background: #ebebeb;
  }
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '16px')};
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #ffffff;
  width: ${({ width }) => getwidthSize(width)};
  height: ${(props) => (props.height === 'normal' ? '40px' : '52px')};
`

export const Button = ({ text, width, height, disabled, onClick, fontSize }: IButton) => (
  <ButtonKit type='submit' onClick={onClick} disabled={disabled} height={height} width={width} fontSize={fontSize}>
    {text}
  </ButtonKit>
)
