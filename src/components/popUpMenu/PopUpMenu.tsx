import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Container, Button } from './PopUpMenu-style'

import { setPopUpMenyActive } from 'redux/activePopUpMenu/activePopUpMenu'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const PopUpMenu = () => {
  const popUpActive = useAppSelector((state) => {
    return state.isActivePopUpMenuReduser.isActiveBurger
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <Container
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return
        }
        dispatch(setPopUpMenyActive(popUpActive))
      }}
    >
      <Button
        onClick={() => {
          dispatch(setPopUpMenyActive(popUpActive))
        }}
      >
        Профиль
      </Button>
      <Button
        onClick={() => {
          dispatch(setPopUpMenyActive(popUpActive))
          localStorage.clear()
          navigate('books/*')
        }}
      >
        Выход
      </Button>
    </Container>
  )
}
