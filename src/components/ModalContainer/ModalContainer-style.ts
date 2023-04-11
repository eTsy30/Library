import styled from 'styled-components'

import { ButtonTablet } from 'components/Navigation/Navigation-style'
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModaWindow = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 32px;
  gap: 32px;
  isolation: isolate;
  width: 528px;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
  @media screen and (max-width: 320px) {
    padding: 42px 16px 32px;
    gap: 24px;
    width: 288px;
  }
`
export const CloseContainer = styled(ButtonTablet)`
  & {
    position: absolute;
    top: 15px;
    left: 475px;
  }
  & > svg > path {
    fill: #f83600;
  }
`
