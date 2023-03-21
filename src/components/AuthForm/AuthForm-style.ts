import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 528px;
  height: 492px;
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 56px 51px 56px;

  @media screen and (max-width: 320px) {
    width: 288px;
    height: 464px;
  }
`
export const Title = styled.h2`
  font-size: 24px;
  line-height: 30px;
  color: #363636;
`
export const SubTitle = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #363636;
  margin-bottom: 32px;
`
export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #727272;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  & > div {
    margin-top: 16px;
    & > a {
      margin: 0px 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      text-transform: uppercase;
      color: #363636;
    }
  }
`
export const HeaderContainer = styled.div``
export const MainContainerForm = styled.form`
  margin-bottom: 32px;
`
