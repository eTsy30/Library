import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { Container } from './ErrorFly-style'

import { ReactComponent as Close } from 'assets/icon/Close.svg'
import { ReactComponent as SuccessIcon } from 'assets/icon/SuccessCheckCircle.svg'
import { ReactComponent as WarningIcon } from 'assets/icon/WarningCircle.svg'
import { setActiveErrorFly } from 'redux/IsActiveErrorFly/IsActiveErrorFly'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const ErrorFly = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      dispach(setActiveErrorFly({ successStatus: true, openError: false }))
    }, 5000)
    return () => clearTimeout(timer)
  })

  const dispach = useAppDispatch()
  const { successStatus, textMsg, openError } = useAppSelector((state) => state.isActiveErrorFly)
  if (!openError) return null
  return (
    <Container $isActive={successStatus ? true : false}>
      {successStatus ? <SuccessIcon /> : <WarningIcon />}
      {textMsg}
      <Close onClick={() => dispach(setActiveErrorFly({ successStatus: true, openError: false }))} />
    </Container>
  )
}
