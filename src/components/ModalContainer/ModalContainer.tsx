import { Container, ModaWindow, CloseContainer } from './ModalContainer-style'

import { ReactComponent as Close } from 'assets/icon/Close.svg'
import { Button } from 'components/Button'
import { ButtonTablet } from 'components/Navigation/Navigation-style'

import { setActiveModalMenu } from 'redux/IsActiveModalMenu/IsActiveModalMenu'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { BodyScroll } from 'Utils/IsScrollBody'

type ModalContainerType = {
  children?: JSX.Element
}
export const ModalContainer = ({ children }: ModalContainerType) => {
  const dispatch = useAppDispatch()
  const isActive = useAppSelector((state) => state.IsActiveModalMenuReduser.value)
  if (isActive) return null

  const CloseWindow = () => {
    dispatch(setActiveModalMenu(!isActive))
  }
  return (
    <Container
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return
        }
        dispatch(setActiveModalMenu(!isActive))
      }}
    >
      <ModaWindow>
        <CloseContainer onClick={CloseWindow}>
          <Close />
        </CloseContainer>
        {children}
      </ModaWindow>
    </Container>
  )
}
