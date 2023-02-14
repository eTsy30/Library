import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #363636;

  @media screen and (max-width: 480px) {
    & {
      margin-bottom: 24px;
      font-size: 18px;
      line-height: 28px;
    }
  }
`
export const Container = styled.div`
  width: 825px;
`

export const UlLevelOne = styled.ul`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  & > li:not(li:first-child) {
    margin-top: 32px;
  }
  @media screen and (max-width: 480px) {
    & {
      width: 288px;
    }
  }
`
export const UlLevelTwo = styled.ul`
  padding-top: 16px;
  padding-left: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  & > li:not(li:first-child) {
    margin-top: 16px;
  }

  @media screen and (max-width: 480px) {
    & {
      font-size: 15px;
      line-height: 20px;
    }
  }
`
export const UlLevelThree = styled.ul`
  padding-top: 16px;
  padding-left: 30px;
`
export const UlLevelFour = styled.ul`
  padding-top: 16px;
  padding-left: 30px;
`
