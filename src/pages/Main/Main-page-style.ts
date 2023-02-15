import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;

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
  min-height: calc(100vh - 65px);
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
