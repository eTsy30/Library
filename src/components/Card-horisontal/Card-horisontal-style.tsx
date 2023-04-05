import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 825px;
  height: 218px;
  background: #ffffff;
  background: url('1.png');
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 26px 16px;
  margin: 5px;
  @media screen and (max-width: 768px) {
    width: 640px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (max-width: 320px) {
    width: 288px;
    height: 146px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
  }
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  box-sizing: border-box;

  @media screen and (max-width: 320px) {
    gap: 8px;
    max-width: 186px;
    width: 100%;
  }
`
export const TextContainer = styled.div`
  display: grid;
  width: 100%;
  flex-direction: column;
  & > *:last-child {
    display: flex;
    justify-self: auto;
    align-items: self-end;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 320px) {
    display: flex;
    & > *:last-child {
      align-items: baseline;
      display: block;
      padding-bottom: 10px;
    }
  }
`

export const fontStyles = css`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: #363636;
`

export const Image = styled.img`
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  height: 170px;
  width: 120px;
  border: 1px solid #a7a7a7;
  border-radius: 3px;

  @media screen and (max-width: 768px) {
    height: 172px;
    width: 120px;
    border-radius: 3px;
  }
  @media screen and (max-width: 320px) {
    height: 100px;
    width: 70px;
    margin: 0 auto;
  }
`

export const Title = styled.h4`
  ${fontStyles}
  color: #363636;
  margin-bottom: 8px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 70px;
  @media screen and (max-width: 768px) {
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 320px) {
    font-weight: 600;
    font-size: 14px;
    text-overflow: ellipsis;
    height: 18px;
    margin: 0 auto;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
  }
`

export const Autor = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #727272;
  display: block;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
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
  width: 174px;
  border-radius: 20px;
`
export const Text = styled.p`
  ${fontStyles}
  color: #A7A7A7;
  margin-bottom: 22px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 0px;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 320px) {
    display: flex;
  }
`
