import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 190px;
  height: 470px;
  background: #ffffff;
  background: url('1.png');
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;
  justify-content: space-between;
  @media screen and (max-width: 320px) {
    width: 288px;
  }
`
export const fontStyles = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
`

export const Image = styled.img`
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  height: 242px;
  width: 174px;
  border-radius: 10px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 320px) {
    height: 242px;
    width: 174px;
    margin: 0 auto;
  }
`

export const Title = styled.h4`
  ${fontStyles}
  display: flex;
  -webkit-letter-spacing: 0.1px;
  -moz-letter-spacing: 0.1px;
  -ms-letter-spacing: 0.1px;
  margin-bottom: 8px;
  height: 54px;
  align-items: baseline;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 768px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 320px) {
    text-overflow: ellipsis;
  }
`

export const Autor = styled.span`
  ${fontStyles}
  color: #727272;
  @media screen and (max-width: 768px) {
    font-weight: 400;
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
    font-size: 12px;
  }
`
export const Button = styled.button`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  border-radius: 20px;
  font-size: 12px;
  color: #ffffff;
  border: 0;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  margin-top: 28px;
`
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  margin-bottom: 22px;
`
