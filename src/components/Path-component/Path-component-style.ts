import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  margin-bottom: 42px;
  margin-top: 58px;
  background: #f9f9fa;
  @media screen and (max-width: 768px) {
    height: 88px;
    margin-bottom: 48px;
    margin-top: 50px;
  }
  @media screen and (max-width: 320px) {
    height: 92px;
    margin-bottom: 20px;
    margin-top: 32px;
  }
`
export const Title = styled.p`
  display: flex;
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    max-width: 640px;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.1px;
  }
  @media screen and (max-width: 320px) {
    max-width: 288px;
    display: block;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1px;
  }
`
export const ImgSlash = styled.img`
  margin-left: 8px;
  margin-right: 6px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    top: 8px;
  }
  @media screen and (max-width: 320px) {
    display: inline-block;
    position: relative;
    top: 2px;
    width: 16px;
    height: 16px;
  }
`
export const Text = styled.span``
