import { Children, useState } from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Link } from 'react-router-dom'

import {
  Container,
  Title,
  Linka,
  Label,
  FooterContainer,
  HeaderContainer,
  MainContainerForm,
  FooterWrapper,
} from './AuthForm-style'

import { Button } from 'components/Button'
import { InputBase } from 'components/Inputs/InputBase/InputBase'
import { Input } from 'components/Inputs/InputBase/InputBase-style'
import { InputPassword } from 'components/Inputs/InputPassword/InputPassword'

interface IAuth {
  title: string
  subTitle?: string
  label: string
  linkText: string
  children: JSX.Element
}

export const AuhtForm = ({ title, label, linkText, children }: IAuth) => {
  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
      </HeaderContainer>
      {children}
      <FooterContainer>
        <FooterWrapper>
          <Label htmlFor='name'>{label}</Label>
          <Linka to={''}>{linkText}</Linka>
        </FooterWrapper>
      </FooterContainer>
    </Container>
  )
}
