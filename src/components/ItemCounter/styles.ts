import styled from 'styled-components'

export const ItemCounterContainer = styled.div`
  height: 3rem;
  width: 7.5rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors['white-50']};

  > span {
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;

    text-align: center;

    color: ${({ theme }) => theme.colors.black};
  }

  > button {
    font-weight: 700;
    font-size: 1rem;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;

    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.25;

    transition: color 0.5s, opacity 0.5s;

    &:not(:disabled):hover {
      color: ${({ theme }) => theme.colors['orange-300']};
      opacity: 1;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

`
