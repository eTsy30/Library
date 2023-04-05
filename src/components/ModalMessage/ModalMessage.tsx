import React from 'react'

import { Container, Title, Label } from './ModalMessage-style'

import { Button } from 'components/Button'
export interface IModalMessage {
  title: string
  buttonLabel?: string
  click?: any
  label?: string
}
export const ModalMessage = ({ title, buttonLabel, click, label }: IModalMessage) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Label>{label}</Label>
      {buttonLabel && <Button fontSize={'16px'} width={'fullWidth'} onClick={click} text={buttonLabel} />}
    </Container>
  )
}
