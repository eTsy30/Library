import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    & {
      max-width: 640px;
    }
  }
  @media screen and (max-width: 320px) {
    & {
      max-width: 288px;
      padding-bottom: 124px;
    }
  }
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    & {
      max-width: 640px;
    }
  }
  @media screen and (max-width: 320px) {
    & {
      max-width: 288px;
      padding-bottom: 124px;
    }
  }
`

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 65px);
`
