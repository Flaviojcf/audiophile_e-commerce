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

export const ProductContent = styled.div`
  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;

    line-height: 44px;
    letter-spacing: 1.42857px;
    text-transform: uppercase;

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

  a {
    display: inline-block;
    margin-top: 2.5rem;
    padding: 1rem 2rem;


    border: none;

    background-color: ${({ theme }) => theme.colors['orange-300']};
    color: ${({ theme }) => theme.colors.white};

    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors['orange-100']};
      transition: background-color 0.5s;
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
`
