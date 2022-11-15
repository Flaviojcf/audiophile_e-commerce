import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.75);
`

export const ModalContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  z-index: 99;

  position: fixed;
  top: 50%;
  right: 11%;

  margin-top: -22rem;

  background: ${(props) => props.theme.colors.white};
  border-radius: 6px;

  width: 23.5625rem;
  max-height: 45.5rem;

  @media screen and (max-width: 1440px) {
    margin-top: -20rem;
    max-height: 43.8rem;
    right: 11.5%;
  }
  @media screen and (max-width: 1024px) {
    margin-top: -20rem;
    right: 3.8%;
  }

  @media screen and (max-width: 425px) {
    width: 19rem;
  }
  @media screen and (max-width: 320px) {
    right: 5%;
  }
`

export const ModalTitle = styled(Dialog.Title)`
  display: flex;
  height: 1.5625rem;
  width: 100%;
  align-items: center;
  padding: 1.9375rem;
  justify-content: space-between;

  > p {
    font-family: Manrope;
    font-style: 700;
    font-size: 1.125rem;
    line-height: 25px;
    letter-spacing: 1.29px;
  }

  > button {
    background: none;
    border: none;
    text-decoration: underline;

    font-family: Manrope;
    font-style: 500;
    font-size: 0.9375rem;
    line-height: 25px;
    opacity: 0.5;

    &:hover {
      color: ${(props) => props.theme.colors['orange-300']};
      opacity: 1;
    }
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.9375rem;
  width: 100%;
`

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1rem;

  & + & {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 425px) {
    & + & {
      margin-top: 0.5rem;
    }
  }

  @media screen and (max-width: 1440px) {
    margin-top: -2rem;
  }
`

export const MiniProductContainer = styled.div`
  display: flex;
  width: 4rem;
  height: 4rem;
  background: ${(props) => props.theme.colors['gray-200']};
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  > p:first-child {
    color: ${(props) => props.theme.colors.black};
    font-family: Manrope;
    font-style: 700;
    font-size: 0.9375rem;
    line-height: 25px;
  }

  > p:last-child {
    color: ${(props) => props.theme.colors.black};
    font-family: Manrope;
    font-style: 700;
    font-size: 0.875rem;
    line-height: 25px;
    opacity: 0.5;
  }
`

export const CounterOfProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-left: auto;

  width: 6rem;
  height: 2rem;
  background: ${(props) => props.theme.colors['gray-200']};

  > span {
    color: ${(props) => props.theme.colors.black};
    font-family: Manrope;
    font-style: 700;
    font-size: 1.125rem;
    line-height: 18px;
    opacity: 0.25;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors['orange-100']};
      opacity: 1;
    }
  }

  > p {
    color: ${(props) => props.theme.colors.black};
    font-family: Manrope;
    font-style: 700;
    font-size: 0.8125rem;
    line-height: 18px;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  > p:first-child {
    font-family: Manrope;
    font-style: 500;
    font-size: 0.9375rem;
    line-height: 25px;
    opacity: 0.5;
  }

  > p:last-child {
    color: ${(props) => props.theme.colors.black};
    font-family: Manrope;
    font-style: 700;
    font-size: 1.125rem;
    line-height: 25px;
    opacity: 1;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5rem;

  > button {
    width: 100%;
    height: 3rem;

    border: none;
    background: ${(props) => props.theme.colors['orange-300']};
    color: ${(props) => props.theme.colors.white};

    &:hover {
      background: ${(props) => props.theme.colors['orange-100']};
    }
  }
`
