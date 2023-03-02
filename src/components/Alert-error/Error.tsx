import React, { MouseEventHandler } from 'react'

import { Container, Title } from './Error-style'

import { ReactComponent as Close } from 'assets/icon/Close.svg'
import { ReactComponent as WarningCircle } from 'assets/icon/WarningCircle.svg'
import { setCloseError } from 'redux/getBook/getBooks'
import { useAppDispatch } from 'store/hook'

export const Error = ({ onChange }: any) => {
  const dispach = useAppDispatch()
  const handleChange: MouseEventHandler = () => {
    onChange(false)
    dispach(setCloseError())
  }
  return (
    <Container>
      <WarningCircle />
      <Title>Что-то пошло не так. Обновите страницу через некоторое время.</Title>
      <Close onClick={handleChange} />
    </Container>
  )
}
