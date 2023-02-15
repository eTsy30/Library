import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1110px;
  border-top: 1px solid #000;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  margin-top: 62px;
  @media screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`
export const FooterText = styled.footer`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`

export const SocialIcon = styled.div`
  display: flex;
  gap: 24px;
`
