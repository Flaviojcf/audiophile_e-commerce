import styled from 'styled-components'

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media (max-width: 1080px) and (min-width: 768px) {
    gap: 7.5rem;
  }
`

export const ProductCard = styled.div`
  width: 100%;
  height: 35rem;

  display: flex;
  align-items: center;
  gap: 7.8125rem;

  position: relative;

  @media (max-width: 1080px) and (min-width: 768px) {
    gap: 4.3125rem;

    height: 30rem;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors['white-50']};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35rem;
    height: 35rem;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    img {
      height: 13.125rem;
      width: 13.125rem;
    }
  }
`

export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    display: block;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 19px;
    letter-spacing: 10px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors['orange-300']};
  }

  > strong {
    margin-top: 1rem;
    width: 20.4375rem;

    font-weight: 700;
    font-size: 2.5rem;
    line-height: 44px;
    letter-spacing: 1.42857px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.black};
  }

  > p {
    margin-top: 2rem;

    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 25px;

    color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;

    mix-blend-mode: normal;
  }

  > strong.price {
    font-size: 1.125rem;
    line-height: 25px;
    letter-spacing: 1.28571px;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    > span {
      font-size: 0.75rem;
      line-height: 16px;
      letter-spacing: 8.57143px;
    }

    > strong {
      font-size: 1.75rem;
      line-height: 32px;
      letter-spacing: 1px;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 3rem;

  > button {
    width: 10rem;
    height: 3rem;
    border: 0;


    background-color: ${({ theme }) => theme.colors['orange-300']};
    color: ${({ theme }) => theme.colors.white};

    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;

    transition: background-color 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['orange-100']};
    }
  }
`

export const ProductAdditionalInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 7.8125rem;

  > div > strong, > ul > strong {
    font-weight: 700;
    font-size: 2rem;
    line-height: 36px;
    letter-spacing: 1.14286px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.black};

    display: block;

    margin-bottom: 2rem;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    flex-direction: column;

    gap: 7.5rem;
  }
`

export const FeaturesContainer = styled.div`
  width: 100%;
  max-width: 39.6875rem;

  > p {
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 25px;

    color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
    mix-blend-mode: normal;

    & + p {
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    max-width: 100%;
  }
`

export const IncludesContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > li {
      > span {
        font-size: 0.9375rem;
        line-height: 25px;
        font-weight: 700;

        color: ${({ theme }) => theme.colors['orange-300']};
        opacity: 1;
        mix-blend-mode: normal;
      }

      > strong {
        margin-left: 1.5rem;

        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 25px;

        color: ${({ theme }) => theme.colors.black};
        opacity: 0.5;
        mix-blend-mode: normal;
      }

    }
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    max-width: 34.3125rem;
    width: 100%;

    display: flex;
    justify-content: space-between;

  }
`
