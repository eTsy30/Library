import React from 'react'

import { useNavigate } from 'react-router-dom'

import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { ModalMessage } from 'components/ModalMessage/ModalMessage'

export const SeeSoon = () => {
  const navigate = useNavigate()
  return (
    <AuthContainer>
      <ModalMessage
        title={'This function is in development'}
        buttonLabel={'На главную'}
        click={() => navigate('/books')}
      ></ModalMessage>
    </AuthContainer>
  )
}
