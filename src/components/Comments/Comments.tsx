import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ContainerForm, Title, SubTitle, TextArea } from './Comments-style'

import { Button } from 'components/Button'

import { ModalContainer } from 'components/ModalContainer/ModalContainer'
import { StarReiting } from 'components/Star-reiting'

import { getComments } from 'redux/getComments/getComments'
import { setActiveErrorFly } from 'redux/IsActiveErrorFly/IsActiveErrorFly'
import { setActiveModalMenu } from 'redux/IsActiveModalMenu/IsActiveModalMenu'
import { commetnPost } from 'redux/postComments/postComments'
import { updateRaiting } from 'redux/updateRaiting/updateRaiting'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { Irating } from 'types/rating'

type Comment = {
  rating: string
  text: string
  createdcomment: string
  user: string
  book: string
}

export const Comments = ({ rating, bookId }: Irating) => {
  const dispach = useAppDispatch()
  const isActive = useAppSelector((state) => state.IsActiveModalMenuReduser.value)
  const allComents = useAppSelector((state) => state.getCommentsReduser.raiting)

  const [nevRaiting, setNevRaiting] = useState(rating ? rating : 0)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Comment>({ mode: 'onBlur' })
  const handlRaiting = (raiting: number) => {
    setNevRaiting(raiting)
  }

  const onSubmit = async (data: any) => {
    const postData = {
      rating: nevRaiting.toString(),
      text: data?.text.toString(),
      createdcomment: new Date().toISOString().slice(0, 10),
      user: Number(localStorage.getItem('idUser')),
      book: Number(bookId),
    }
    const updateDataRaiting = { id: Number(bookId), raiting: (allComents + nevRaiting) / 2 }

    dispach(commetnPost(postData))
    dispach(getComments(bookId ? bookId : ''))
    dispach(
      setActiveErrorFly({ successStatus: false, openError: true, textMsg: 'Спасибо, что нашли время оценить книгу!' }),
    )
    dispach(updateRaiting(updateDataRaiting))
    reset()
    dispach(setActiveModalMenu(!isActive))
  }
  return (
    <ModalContainer>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Оцените книгу</Title>
        <SubTitle>Ваша оценка</SubTitle>
        <StarReiting rating={0} getRaiting={handlRaiting} />
        <TextArea {...register('text', { required: true })} />
        <Button text='оценить' width={'fullWidth'} />
      </ContainerForm>
    </ModalContainer>
  )
}
