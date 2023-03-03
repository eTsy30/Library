import styled from 'styled-components'

import { IScroll } from 'types/isActive'

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 100px);
`
export const Wrapper = styled.div<IScroll>`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  min-height: calc(100vh - 300px);
  position: relative;
  overflow: ${(props) => props.$isScroll};
  @media screen and (max-width: 768px) {
    & {
      max-width: 83%;
      margin: 0 auto;
      padding-top: 42px;
    }
  }
  @media screen and (max-width: 320px) {
    & {
      max-width: 90%;
      padding: 16px;
      margin: 0 auto;
    }
  }
`
export const Main = styled.main`
  display: flex;
  justify-content: space-between;

  gap: 16px;
`
export const Content = styled.section`
  width: 825px;
  @media screen and (max-width: 768px) {
    & {
      width: 640px;
    }
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`
export const ListCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;
  flex-wrap: wrap;
`
export const WarningMessage = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #a7a7a7;
  @media screen and (max-width: 320px) {
    font-size: 18px;
    line-height: 28px;
  }
`
