import styled from 'styled-components'

export const OrangeContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 8.6rem;
  padding-top: 9.4rem;

  width: 69.375rem;
  height: 35rem;

  background: ${(props) => props.theme.colors['orange-300']};
  border-radius: 6px;
  overflow: hidden;

  > img:nth-child(1) {
    display: flex;
    position: absolute;
    z-index: 1;
    margin-top: -4.8rem;
  }

  > img:nth-child(2),
  > img:nth-child(3) {
    display: none;
  }

  & {
    @media screen and (max-width: 1240px) {
      height: 45rem;
      width: 43.06rem;
      gap: 0;

      flex-direction: column;

      justify-content: center;

      > img:nth-child(1),
      > img:nth-child(3) {
        display: none;
      }

      > img:nth-child(2) {
        display: flex;
        position: absolute;
        z-index: 1;
        margin-top: -7rem;
      }
    }
  }

  & {
    @media screen and (max-width: 768px) {
      height: 37.5rem;
      width: 20.4375rem;
      gap: 0;
      > img:nth-child(1),
      > img:nth-child(2) {
        display: none;
      }

      > img:nth-child(3) {
        display: flex;
        position: absolute;
        z-index: 1;
        margin-top: -12rem;
      }
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  height: 30.81rem;
  width: 25.63rem;
  z-index: 4;

  margin-left: 7.35rem;

  > img {
    padding: 1.81rem;
  }

  & {
    @media screen and (max-width: 1240px) {
      width: 12.325625rem;
      height: 14.8125rem;
      margin-left: 0rem;
      margin-top: -5.25rem;
      align-items: center;
      justify-content: center;

      > img {
        width: 100%;
        height: 100%;
        padding: 0.5rem;
      }
    }
  }

  & {
    @media screen and (max-width: 768px) {
      width: 10.765625rem;
      height: 12.9375rem;
      margin-top: -8rem;

      > img {
        width: 100%;
        height: 100%;
        padding: 0.5rem;
      }
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 4;

  height: 30.81rem;

  color: ${(props) => props.theme.colors.white};

  > h1 {
    padding-top: 2.8rem;
    font-size: 3.5rem;
    line-height: 96%;
    width: 13rem;
    margin-bottom: 1.5rem;
  }

  > p {
    font-family: Manrope;
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 25px;
    line-height: 122%;
    opacity: 75%;
    width: 22rem;
    margin-bottom: 2.5rem;
  }

  & {
    @media screen and (max-width: 1240px) {
      align-items: center;
      text-align: center;
      justify-content: center;
      justify-items: center;
      > h1 {
        margin-bottom: 7.8rem;
        width: 20rem;
        padding-top: 0rem;
      }

      > p {
        line-height: 146%;
        width: 23.8125rem;
        margin-top: -4.5rem;
      }
    }
  }
  & {
    @media screen and (max-width: 768px) {
      > h1 {
        font-size: 2.25rem;
        line-height: 40px;
        letter-spacing: 1.29pvx;
        width: 13rem;
        margin-top: -1.5rem;
      }
      > p {
        width: 19rem;
      }
    }
  }
`
