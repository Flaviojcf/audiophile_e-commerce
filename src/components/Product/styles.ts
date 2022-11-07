import styled from 'styled-components'

type ProductContainerProps = {
  contentPosition: 'left' | 'right'
}

export const ProductContainer = styled.div<ProductContainerProps>`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: ${({ contentPosition }) => contentPosition === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
  gap: 7.8125rem;

  @media (max-width: 1024px) and (min-width: 520px) {
    max-width: 43.0625rem;

    flex-direction: column;
    gap: 3.25rem;
  }
`
type ProductContentProps = {
  isNewProduct: boolean
}

export const ProductContent = styled.div<ProductContentProps>`
  span {
    display: ${({ isNewProduct }) => isNewProduct ? 'block' : 'none'};

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 19px;
    letter-spacing: 10px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors['orange-300']};
  }

  strong {
    width: 20.4375rem;
    margin-top: 1rem;

    display: block;

    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;

    line-height: 44px;
    letter-spacing: 1.42857px;
    text-transform: uppercase;

    border-radius: 8px;

    color: ${({ theme }) => theme.colors.black};
  }

  p {
    margin: 2rem 0 2.5rem 0;

    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 25px;

    color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
  }

  @media (max-width: 1024px) and (min-width: 520px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      max-width: 35.75rem;

      strong {
        text-align: center;
      }

      p {
        margin-bottom: 1.5rem;
        text-align: center;
      }
    }
`

export const ImageContainer = styled.div`
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors['gray-200']};

  img {
    width: 35rem;
    height: 35rem;
    mix-blend-mode: normal;
  }

  @media (max-width: 1024px) and (min-width: 520px) {
    width: 100%;
    height: 22rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 22rem;
      height: 22rem;
    }
  }
`
