import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 528px;
  background: #ffffff;
  border-radius: 16px;
  padding: 0px 56px 51px 56px;

  text-align: center;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 320px) {
    width: 288px;
    height: 464px;
    padding: 24px 16px;
  }
`
export const Title = styled.h2`
  font-size: 24px;
  line-height: 30px;
  color: #363636;
  margin: 32px 0px;
`

export const Label = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1px;
  margin-bottom: 32px;
`
