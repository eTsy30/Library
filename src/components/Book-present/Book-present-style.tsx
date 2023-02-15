import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1110px;
  width: 100%;
`
export const WrapperImg = styled.div`
  & > img {
    width: 100%;
    max-width: 445px;
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    & > img {
      min-width: 136px;
      border-radius: 3px;
    }
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    display: flex;
    justify-content: center;
    & > img {
      max-width: 188px;
      width: 100%;
      border-radius: 10px;
    }
  }
`
export const ContainerImg = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
`
export const DescriptionWrapper = styled.div`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`

export const Description = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 42px;
  gap: 30px;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 320px) {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    gap: 16px;
    margin-bottom: 42px;
  }
`
export const Title = styled.h2`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #363636;
  @media screen and (max-width: 768px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (max-width: 320px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 8px;
  }
`

export const TextAutor = styled.p`
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (max-width: 320px) {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 42px;
  }
`
export const AboutDesctop = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`

export const Button = styled.button`
  width: 350px;
  height: 52px;
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  border-radius: 30px;
  border: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    height: 52px;
    width: 306px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    height: 40px;
    width: 100%;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    border-radius: 20px;
    margin-bottom: 0px;
  }
`

export const AboutMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 320px) {
    display: block;
  }
`
