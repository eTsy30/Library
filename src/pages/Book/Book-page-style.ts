import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0px 64px;
  @media screen and (max-width: 768px) {
    max-width: 83%;
    padding: 0px 64px;
  }
  @media screen and (max-width: 320px) {
    max-width: 90%;
    padding: 0px 16px;
    align-items: center;
  }
`

export const WrapperHead = styled.div`
  width: 100%;
  flex-direction: column;
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
`
export const Content = styled.main`
  flex-direction: column;
  max-width: 1110px;
  margin: 0 auto;
`
export const RaytingWrapper = styled.section`
  width: 350px;
  height: 88px;
  margin-bottom: 62px;
  @media screen and (max-width: 768px) {
    height: 84px;
    margin-bottom: 52px;
  }
  @media screen and (max-width: 320px) {
    width: 288px;
    height: 78px;
  }
`
export const RaytingTitle = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: #363636;

  @media screen and (max-width: 320px) {
    width: 288px;
    height: 40px;
    margin-bottom: 24px;
  }
`
export const RaytingContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ebebeb;

  & > span {
    margin-left: 26px;
  }
  @media screen and (max-width: 768px) {
    width: 271px;
    height: 34px;
    margin-top: 0;
  }
`
