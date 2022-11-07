import styled from 'styled-components'

type ProductContainerProps = {
  contentPosition: 'left' | 'right'
}

export const ProductContainer = styled.div<ProductContainerProps>`
  width: 100%;

  display: flex;
  flex-direction: ${({ contentPosition }) => contentPosition === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
  gap: 7.8125rem;
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
    display: block;
    margin-top: 1rem;

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
    margin-top: 2rem;

    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 25px;

    color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
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
`
