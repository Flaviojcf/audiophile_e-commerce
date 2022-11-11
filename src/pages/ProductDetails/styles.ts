import styled from 'styled-components'

export const ProductDetailsContainer = styled.main`
  margin-top: 5rem;
  margin-bottom: 10rem;
`

export const ProductDetailsContent = styled.div`
  margin-top: 3.5rem;

  display: flex;
  flex-direction: column;
  gap: 10rem;
`

export const GoBackButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;

  mix-blend-mode: normal;

  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 25px;

  transition: opacity 0.5s, text-decoration 0.5s;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`
