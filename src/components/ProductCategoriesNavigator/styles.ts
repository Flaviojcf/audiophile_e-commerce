import styled from 'styled-components'

export const ProductCategoriesNavigatorContainer = styled.div`
  margin: 0 auto;
  max-width: 69.375rem;
  width: 100%;
  margin-top: 100px; // to remove

  display: flex;
  align-items: center;
  gap: 1.875rem;

  @media (min-width: 768px) and (max-width: 1080px) {
    max-width: 43.0625rem;
    gap: 0.625rem;
  }

  @media (max-width: 768px) {
    max-width: 20.4375rem;

    flex-direction: column;
    gap: 6rem;
  }
`

export const ProductCategoryLink = styled.a`
  width: 100%;
  padding-bottom: 1.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 8px;

  text-decoration: none;

  > img {
    height: 180px;
    width: 180px;
    margin-top: -4rem;
  }

  > strong {
    margin-top: 0.25rem;

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    div > span {
      color: ${({ theme }) => theme.colors['orange-300']};
      opacity: 1;

      font-weight: 700;

      transition: color opacity font-weight font-size 0.2s;
    }
  }

`

export const GoToShop = styled.div`
    margin-top: 1rem;

    display: flex;
    align-items: center;
    gap: 0.8125rem;

    span {

      font-weight: 700;
      font-size: 0.8125rem;
      line-height: 18px;
      letter-spacing: 1px;
      text-transform: uppercase;

      color: ${({ theme }) => theme.colors.black};
      opacity: 0.5;

    }

    svg {
      color: ${({ theme }) => theme.colors['orange-300']};
    }
`
