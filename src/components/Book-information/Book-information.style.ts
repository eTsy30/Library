import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1110px;
  width: 100%;

  margin: 28px 0px 62px 0px;
  & > h3 {
    padding-bottom: 16px;

    border-bottom: 1px solid #ebebeb;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 640px;
    margin-bottom: 52px;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    & > h3 {
      width: 208px;
    }
    margin-bottom: 42px;
  }
`
export const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  gap: 20px;
  & > *:first-child {
    width: 30%;
  }
  & > *:last-child {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    & > *:first-child {
      width: 50%;
    }
    & > *:last-child {
      width: 50%;
    }
  }
  @media screen and (max-width: 320px) {
    & > *:first-child {
      width: 100%;
    }
    & > *:last-child {
      width: 100%;
    }
    flex-direction: column;
    margin-top: 0;
  }
`

export const Table = styled.table`
  width: 100%;
  & > tbody > tr > td:nth-child(odd) {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1px;
    text-align: left;
    color: #a7a7a7;
    padding-bottom: 16px;
  }
  & > tbody > tr > td:last-child {
    padding-left: 16px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #363636;
  }

  @media screen and (max-width: 768px) {
    & > tbody > tr > td:nth-child(odd) {
      font-size: 14px;
      line-height: 18px;
    }
    & > tbody > tr > td:last-child {
      padding-left: 16px;
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media screen and (max-width: 320px) {
    & > tbody > tr > td:nth-child(odd) {
      width: 30%;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0.2px;
    }

    & > tbody > tr > td:last-child {
      padding-left: 16px;
      font-size: 12px;
      line-height: 16px;
    }
  }
`
