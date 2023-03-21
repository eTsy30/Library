import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import {
  Container,
  Title,
  SubTitle,
  Label,
  FooterContainer,
  HeaderContainer,
  MainContainerForm,
} from './AuthForm-style'

import { Button } from 'components/Button'
import { InputForm } from 'components/InputForm/InputForm'

interface IAuth {
  title: string
  subTitle: string
  label: string
  linkText: string
  firstInput?: { placeholder: string; label?: string; nameForForm: string }
  secondInput?: { placeholder: string; label?: string; nameForForm: string }
}
export const AuhtForm = ({ title, subTitle, label, linkText, firstInput, secondInput }: IAuth) => {
  const [formStep, setFormStep] = useState(1)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'all' })
  const onSubmit = (data: any) => {
    if (formStep === 1) {
      setFormStep(2)
    }
    if (formStep === 2) {
      console.log(data)
      reset()
      setFormStep(1)
    }
  }
  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
        <SubTitle>{`${formStep} шаг из 3`}</SubTitle>
      </HeaderContainer>
      <MainContainerForm onSubmit={handleSubmit(onSubmit)}>
        {formStep == 1 && (
          <>
            <section>
              <InputForm
                {...register('login', {
                  required: true,
                  minLength: 4,
                })}
                placeholder='Придумайте логин для входа'
                label={
                  errors.login
                    ? 'Имя доджно быть больше 2 символов'
                    : 'Используйте для логина латинский алфавит и цифры'
                }
              />

              <InputForm
                {...register('Password')}
                placeholder={'Пароль'}
                label={'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
              />
            </section>
          </>
        )}
        {formStep == 2 && (
          <section>
            <InputForm {...register('name')} placeholder='Имя' />
            <InputForm {...register('lastName')} placeholder={'Фамилия'} />
          </section>
        )}

        <Button fontSize='16px' width={'fullWidth'} text='следующий шаг' />
      </MainContainerForm>
      <FooterContainer>
        <div>
          <Label htmlFor='name'>{label}</Label>
          <Link to={''}>{linkText}</Link>
        </div>
      </FooterContainer>
    </Container>
  )
}
